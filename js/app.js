/* ------------------------------------------------------------------
   app.js — hash router + one delegated click handler.

   Routes:
     #/            pick a learner
     #/k/<slug>    that learner's session
     #/t/<id>      one topic
     #/map         the whole library
   ------------------------------------------------------------------ */

(function () {

  var view = document.getElementById('view');
  var nav = document.getElementById('topnav');
  var current = { slug: null };
  var loginFailed = false;

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

  function route() {
    var hash = (location.hash || '#/').replace(/^#/, '');
    var parts = hash.split('/').filter(Boolean);
    var html;
    /* Card grids and list rows get the wider measure; lesson prose does
       not, because long lines of body text are harder to track. */
    var wide = parts[0] === 'k' || parts[0] === 'u' || parts[0] === 'map';

    if (parts[0] === 'k' && parts[1]) {
      var slug = parts[1];
      if (!Auth.isUnlocked(slug)) {
        location.hash = '#/';
        return;
      }
      rememberSlug(slug);
      html = Views.learner(slug);
      document.title = Auth.nameOf(slug) + ' — Study';

    } else if (parts[0] === 'u' && parts[1]) {
      if (!current.slug) current.slug = recallSlug();
      if (current.slug && !Auth.isUnlocked(current.slug)) current.slug = null;
      if (!current.slug) { location.hash = '#/'; return; }
      html = Views.unit(parts[1], current.slug);
      var u = Units.get(parts[1]);
      document.title = (u ? u.title : 'Unit') + ' — Study';

    } else if (parts[0] === 't' && parts[1]) {
      if (!current.slug) current.slug = recallSlug();
      if (current.slug && !Auth.isUnlocked(current.slug)) current.slug = null;
      if (!current.slug) { location.hash = '#/'; return; }
      html = Views.topic(parts[1], current.slug);
      var t = Topics.get(parts[1]);
      document.title = (t ? t.title : 'Topic') + ' — Study';

    } else if (parts[0] === 'map') {
      if (!current.slug) current.slug = recallSlug();
      if (current.slug && !Auth.isUnlocked(current.slug)) current.slug = null;
      if (!current.slug) { location.hash = '#/'; return; }
      html = Views.map(current.slug);
      document.title = 'Topic map — Study';

    } else {
      Auth.lock();
      rememberSlug(null);
      html = Views.login(loginFailed);
      loginFailed = false;
      document.title = 'Study';
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

    if (act === 'done' && current.slug) {
      Store.markDone(current.slug, btn.getAttribute('data-topic'));
      location.hash = '#/k/' + current.slug;
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

    if (act === 'theme') {
      setTheme(currentTheme() === 'light' ? 'dark' : 'light');
      renderNav();
      return;
    }

    if (act === 'showmore') {
      view.querySelectorAll('.tcard.is-hidden').forEach(function (c) {
        c.classList.remove('is-hidden');
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

    /* Key derivation is deliberately slow, so say something first. */
    var btn = view.querySelector('[data-act="login"]');
    if (btn) { btn.textContent = 'One moment'; btn.disabled = true; }

    setTimeout(function () {
      var slug = Auth.login(name.value, code.value);
      if (slug) {
        loginFailed = false;
        Store.recordSignIn(slug);
        location.hash = '#/k/' + slug;
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

  /* Picking a name jumps straight to the password box. */
  view.addEventListener('input', function (ev) {
    if (ev.target.id !== 'suggestbox' || !current.slug) return;
    Store.saveDraft(current.slug, ev.target.value);
  });

  view.addEventListener('change', function (ev) {
    if (ev.target.id !== 'lname' || !ev.target.value) return;
    var code = view.querySelector('#lcode');
    if (code) code.focus();
  });

  view.addEventListener('input', function (ev) {
    if (ev.target.id !== 'suggestbox' || !current.slug) return;
    Store.saveDraft(current.slug, ev.target.value);
  });

  view.addEventListener('change', function (ev) {
    if (ev.target.id !== 'lname' || !ev.target.value) return;
    var code = view.querySelector('#lcode');
    if (code) code.focus();
  });

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
