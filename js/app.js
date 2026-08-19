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

  function rememberSlug(s) {
    current.slug = s;
    try { s ? localStorage.setItem(LAST_KEY, s) : localStorage.removeItem(LAST_KEY); } catch (e) {}
  }

  function recallSlug() {
    try { return localStorage.getItem(LAST_KEY); } catch (e) { return null; }
  }

  function renderNav() {
    var bits = [];
    if (current.slug) bits.push('<a href="#/k/' + current.slug + '">My list</a>');
    bits.push('<a href="#/map">Map</a>');
    if (current.slug) bits.push('<a href="#/">Finish</a>');
    nav.innerHTML = bits.join('');
  }

  function route() {
    var hash = (location.hash || '#/').replace(/^#/, '');
    var parts = hash.split('/').filter(Boolean);
    var html;

    if (parts[0] === 'k' && parts[1]) {
      var slug = parts[1];
      var L = (window.LEARNERS || {})[slug];
      if (!L) {
        html = Views.notFound();
      } else if (!Auth.isUnlocked(slug)) {
        location.hash = '#/';
        return;
      } else {
        rememberSlug(slug);
        html = Views.learner(slug);
        document.title = (L.name || slug) + ' — Study';
      }

    } else if (parts[0] === 't' && parts[1]) {
      if (!current.slug) current.slug = recallSlug();
      if (current.slug && !Auth.isUnlocked(current.slug)) current.slug = null;
      html = Views.topic(parts[1], current.slug);
      var t = Topics.get(parts[1]);
      document.title = (t ? t.title : 'Topic') + ' — Study';

    } else if (parts[0] === 'map') {
      if (!current.slug) current.slug = recallSlug();
      if (current.slug && !Auth.isUnlocked(current.slug)) current.slug = null;
      html = Views.map(current.slug);
      document.title = 'Topic map — Study';

    } else {
      Auth.lock();
      rememberSlug(null);
      html = Views.login(loginFailed);
      loginFailed = false;
      document.title = 'Study';
    }

    document.body.classList.toggle('is-login', !parts.length);

    view.innerHTML = html;
    renderNav();
    window.scrollTo(0, 0);

    var first = view.querySelector('.textfield');
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

    if (act === 'print') {
      window.print();
      return;
    }
  });

  function doLogin() {
    var name = view.querySelector('#lname');
    var code = view.querySelector('#lcode');
    if (!name || !code) return;

    var slug = Auth.login(name.value, code.value);
    if (slug) {
      loginFailed = false;
      location.hash = '#/k/' + slug;
    } else {
      loginFailed = true;
      route();
    }
  }

  /* Enter moves on from the name box and submits from the code box. */
  view.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Enter') return;
    var field = ev.target.closest('.textfield');
    if (!field) return;
    ev.preventDefault();
    if (field.id === 'lname') {
      var code = view.querySelector('#lcode');
      if (code) code.focus();
      return;
    }
    doLogin();
  });

  window.addEventListener('hashchange', route);

  current.slug = recallSlug();
  if (current.slug && !Auth.isUnlocked(current.slug)) current.slug = null;
  Topics.reindex();
  route();

})();
