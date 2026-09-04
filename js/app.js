/* ------------------------------------------------------------------
   app.js — hash router + one delegated click handler.

   Routes:
     #/            sign in
     #/k/<slug>    that learner's dashboard
     #/u/<id>      one unit, its topics in order
     #/t/<id>      one topic
     #/map         everything on the learner's list

   Anything else renders "not found" and leaves the session alone. It
   used to fall through to the sign-in branch, which called Auth.lock()
   — so a single mistyped character in the address bar silently logged
   the learner out and lost their place.
   ------------------------------------------------------------------ */

(function () {

  var view = document.getElementById('view');
  var nav = document.getElementById('topnav');
  var current = { slug: null };
  var loginFailed = false;
  var lastName = '';
  var intended = null;   /* where they were headed before being asked to sign in */

  var LAST_KEY = 'study:last-slug';
  var THEME_KEY = 'study:theme';

  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
            'stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/>' +
            '<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4' +
            'M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';

  var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
             'stroke-width="2" aria-hidden="true">' +
             '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.6 6.6 0 0 0 10.5 10.5z"/></svg>';

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light'
      ? 'light' : 'dark';
  }

  function setTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  function rememberSlug(s) {
    current.slug = s;
    try { s ? localStorage.setItem(LAST_KEY, s) : localStorage.removeItem(LAST_KEY); } catch (e) {}
  }

  function recallSlug() {
    try { return localStorage.getItem(LAST_KEY); } catch (e) { return null; }
  }

  function renderNav() {
    var bits = [];
    if (current.slug) {
      bits.push('<a href="#/k/' + current.slug + '">My list</a>');
      bits.push('<a href="#/map">Map</a>');
    }

    var light = currentTheme() === 'light';
    bits.push('<button class="themebtn" data-act="theme" type="button" ' +
              'aria-label="Switch to ' + (light ? 'dark' : 'light') + ' mode">' +
              (light ? MOON : SUN) +
              '<span>' + (light ? 'Dark' : 'Light') + '</span></button>');

    if (current.slug) bits.push('<a href="#/">Finish</a>');
    nav.innerHTML = bits.join('');
  }

  /* Every signed-in route needs the same three lines. Returns false and
     parks the destination if the session is not open. */
  function requireSession(hash) {
    if (!current.slug) current.slug = recallSlug();
    if (current.slug && !Auth.isUnlocked(current.slug)) current.slug = null;
    if (current.slug) return true;
    intended = hash;
    location.hash = '#/';
    return false;
  }

  function route() {
    var raw = location.hash || '#/';

    /* Routes all start with a slash. A bare fragment like #view is an
       ordinary in-page anchor — the skip link uses one — so let the
       browser handle it and do not re-render the page underneath it. */
    if (raw !== '' && raw !== '#' && raw.charAt(1) !== '/') return;

    var hash = raw.replace(/^#/, '');
    var parts = hash.split('/').filter(Boolean);
    var html;
    /* Card grids and list rows get the wider measure; lesson prose does
       not, because long lines of body text are harder to track. */
    var wide = parts[0] === 'k' || parts[0] === 'u' || parts[0] === 'map';

    if (!parts.length) {
      Auth.lock();
      rememberSlug(null);
      html = Views.login(loginFailed, lastName);
      loginFailed = false;
      document.title = 'Study';

    } else if (parts[0] === 'k' && parts[1]) {
      var slug = parts[1];
      if (!Auth.isUnlocked(slug)) {
        intended = hash;
        location.hash = '#/';
        return;
      }
      rememberSlug(slug);
      html = Views.learner(slug);
      document.title = Auth.nameOf(slug) + ' — Study';

    } else if (parts[0] === 'u' && parts[1]) {
      if (!requireSession(hash)) return;
      html = Views.unit(parts[1], current.slug);
      var u = Units.get(parts[1]);
      document.title = (u ? u.title : 'Unit') + ' — Study';

    } else if (parts[0] === 't' && parts[1]) {
      if (!requireSession(hash)) return;
      html = Views.topic(parts[1], current.slug);
      var t = Topics.get(parts[1]);
      document.title = (t ? t.title : 'Topic') + ' — Study';

    } else if (parts[0] === 'map') {
      if (!requireSession(hash)) return;
      html = Views.map(current.slug);
      document.title = 'Topic map — Study';

    } else {
      /* Unknown address. Say so, keep the session, offer a way back. */
      html = Views.notFound(current.slug);
      document.title = 'Not found — Study';
    }

    view.innerHTML = html;
    view.classList.toggle('is-wide', wide);
    renderNav();
    window.scrollTo(0, 0);

    var first = view.querySelector('.field-control');
    if (first) first.focus(); else view.focus();
  }

  /* ---------------------------------------------------------- */
  /* One handler for every button in every view                  */
  /* ---------------------------------------------------------- */
  view.addEventListener('click', function (ev) {
    var btn = ev.target.closest('[data-act]');
    if (!btn) return;

    var act = btn.getAttribute('data-act');
    var box = btn.closest('.item');
    var key = box ? box.getAttribute('data-key') : null;

    if (act === 'conf') {
      if (current.slug && key) Store.mark(current.slug, key, 'conf', btn.getAttribute('data-val'));
      box.querySelector('.stage-conf').classList.add('hidden');
      box.querySelector('.stage-reveal').classList.remove('hidden');
      return;
    }

    if (act === 'hint') {
      var hint = box.querySelector('[data-role="hint"]');
      if (hint) hint.classList.remove('hidden');
      btn.classList.add('hidden');
      return;
    }

    if (act === 'reveal') {
      box.querySelector('[data-role="answer"]').classList.remove('hidden');
      btn.classList.add('hidden');
      return;
    }

    if (act === 'got') {
      var val = btn.getAttribute('data-val');
      if (current.slug && key) Store.mark(current.slug, key, 'got', val);
      var note = box.querySelector('[data-role="notyet"]');
      if (val === 'no' && note) note.classList.remove('hidden');
      if (val === 'yes' && note) note.classList.add('hidden');
      /* No tally, no colour change, no sound. It is recorded and that is all. */
      box.querySelectorAll('[data-act="got"]').forEach(function (b) {
        b.classList.toggle('solid', b === btn);
      });
      return;
    }

    /* Finishing a topic used to jump to the dashboard, two levels up,
       which is a long way to be thrown for pressing a button that says
       "finished this one". The unit page is one level up, already shows
       what is next, and does not require re-reading the whole screen. */
    if (act === 'done' && current.slug) {
      var tid = btn.getAttribute('data-topic');
      Store.markDone(current.slug, tid);
      var parent = Units.of(tid);
      location.hash = parent ? '#/u/' + parent.id : '#/k/' + current.slug;
      return;
    }

    if (act === 'undone' && current.slug) {
      Store.unmarkDone(current.slug, btn.getAttribute('data-topic'));
      route();
      return;
    }

    if (act === 'login') {
      doLogin();
      return;
    }

    if (act === 'peek') {
      var code = view.querySelector('#lcode');
      if (!code) return;
      var showing = code.type === 'text';
      code.type = showing ? 'password' : 'text';
      btn.textContent = showing ? 'Show' : 'Hide';
      btn.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
      code.focus();
      return;
    }

    if (act === 'theme') {
      setTheme(currentTheme() === 'light' ? 'dark' : 'light');
      renderNav();
      return;
    }

    /* Was querying '.tcard', a class that no longer exists anywhere in
       the codebase — the button rendered and did nothing. */
    if (act === 'showmore') {
      view.querySelectorAll('.ucard.is-hidden').forEach(function (c) {
        c.classList.remove('is-hidden');
      });
      btn.remove();
      return;
    }

    if (act === 'unfold') {
      view.querySelectorAll('.urow.is-folded').forEach(function (r) {
        r.classList.remove('is-folded');
      });
      btn.remove();
      return;
    }

    if (act === 'suggest') {
      sendSuggestion();
      return;
    }

    if (act === 'print') {
      window.print();
      return;
    }
  });

  /* No server to post to, so this opens a prefilled email instead. */
  function sendSuggestion() {
    var box = view.querySelector('#suggestbox');
    var note = view.querySelector('[data-role="suggest-note"]');
    if (!box) return;

    var text = (box.value || '').trim();
    if (!text) { box.focus(); return; }

    if (current.slug) Store.saveDraft(current.slug, text);

    var to = (window.CONFIG && CONFIG.tutorEmail) || '';

    /* Anything beyond a plain address could smuggle extra mail headers
       (?cc=, &bcc=) into the link, so reject rather than sanitise. */
    if (to && !/^[^\s@?&<>"']+@[^\s@?&<>"']+\.[^\s@?&<>"']+$/.test(to)) {
      if (note) note.textContent = 'Saved on this computer. The tutor email in ' +
                                   'config.js is not a valid address.';
      return;
    }

    if (!to || to.indexOf('REPLACE-ME') === 0) {
      if (note) {
        note.textContent = 'Saved on this computer. No tutor email is set yet, ' +
                           'so it could not be sent.';
      }
      return;
    }

    var who = Auth.nameOf(current.slug);
    var url = 'mailto:' + to +
              '?subject=' + encodeURIComponent('Study — a suggestion from ' + who) +
              '&body=' + encodeURIComponent(text + '\n\n— ' + who);

    location.href = url;
    if (note) note.textContent = 'Saved, and your email should be opening now.';
  }

  function doLogin() {
    var name = view.querySelector('#lname');
    var code = view.querySelector('#lcode');
    if (!name || !code) return;

    if (!name.value) { name.focus(); return; }
    lastName = name.value;

    /* Key derivation is deliberately slow, so say something first. */
    var btn = view.querySelector('[data-act="login"]');
    if (btn) { btn.textContent = 'One moment'; btn.disabled = true; }

    setTimeout(function () {
      var slug = Auth.login(name.value, code.value);
      if (slug) {
        loginFailed = false;
        Store.recordSignIn(slug);
        rememberSlug(slug);

        /* Send them where they were trying to go, if that was somewhere
           in particular. A deep link into a topic should survive being
           asked to sign in on the way. */
        var go = intended;
        intended = null;
        location.hash = go ? '#' + go : '#/k/' + slug;
        if (go) route();
      } else {
        loginFailed = true;
        route();
      }
    }, 20);
  }

  /* Enter moves on from the name dropdown and submits from the password. */
  view.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Enter') return;
    var field = ev.target.closest('.field-control');
    if (!field) return;
    ev.preventDefault();
    if (field.id === 'lname') {
      var code = view.querySelector('#lcode');
      if (code) code.focus();
      return;
    }
    doLogin();
  });

  /* One input handler, not the three near-identical ones that had
     accumulated here — two of them registered twice, so every
     keystroke in the suggestion box wrote to storage three times. */
  view.addEventListener('input', function (ev) {
    var el = ev.target;

    if (el.id === 'suggestbox') {
      if (current.slug) Store.saveDraft(current.slug, el.value);
      return;
    }

    if (el.getAttribute && el.getAttribute('data-role') === 'scratch') {
      var box = el.closest('.item');
      if (current.slug && box) {
        Store.saveScratch(current.slug, box.getAttribute('data-key'), el.value);
      }
      return;
    }

    if (el.id === 'tfind') {
      filterMap(el.value);
      return;
    }
  });

  /* Picking a name jumps straight to the password box. */
  view.addEventListener('change', function (ev) {
    if (ev.target.id !== 'lname' || !ev.target.value) return;
    lastName = ev.target.value;
    var code = view.querySelector('#lcode');
    if (code) code.focus();
  });

  /* Plain substring filter over the map. Hiding rows rather than
     rebuilding the list keeps the scroll position and costs nothing. */
  function filterMap(term) {
    var q = String(term || '').trim().toLowerCase();
    var shown = 0;

    view.querySelectorAll('[data-role="maprow"]').forEach(function (row) {
      var hit = !q || row.getAttribute('data-find').indexOf(q) >= 0;
      row.classList.toggle('hidden', !hit);
      if (hit) shown++;
    });

    /* A unit heading with nothing under it is noise. */
    view.querySelectorAll('[data-role="mapunit"]').forEach(function (block) {
      var any = block.querySelector('[data-role="maprow"]:not(.hidden)');
      block.classList.toggle('hidden', !any);
    });

    var count = view.querySelector('[data-role="findcount"]');
    if (count) {
      count.textContent = !q ? ''
        : shown === 0 ? 'Nothing matches that word.'
        : shown === 1 ? '1 topic'
        : shown + ' topics';
    }
  }

  nav.addEventListener('click', function (ev) {
    var btn = ev.target.closest('[data-act="theme"]');
    if (!btn) return;
    setTheme(currentTheme() === 'light' ? 'dark' : 'light');
    renderNav();
  });

  window.addEventListener('hashchange', route);

  current.slug = recallSlug();
  if (current.slug && !Auth.isUnlocked(current.slug)) current.slug = null;
  Topics.reindex();
  route();

})();
