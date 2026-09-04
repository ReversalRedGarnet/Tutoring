/* ------------------------------------------------------------------
   views.js — every view returns an HTML string.

   House rules for this UI, all of them deliberate:
     * No scores, no percentages, no streaks, no progress bars.
     * No red, no crosses. "Not yet" is the strongest negative word used.
     * One idea per screen.
     * The kid commits to sure / not sure BEFORE the answer appears.
   ------------------------------------------------------------------ */

var Views = (function () {

  /* Escapes for both text nodes and attribute values. Quotes matter:
     without them any value containing a " can break out of an attribute
     and add its own. */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  var SUBJECT_NAMES = {
    'maths': 'Maths',
    'english': 'English',
    'science': 'Science',
    'social-studies': 'Social Studies',
    'history': 'History',
    'health': 'Health',
    'agriculture': 'Agriculture'
  };

  function subjectName(s) { return SUBJECT_NAMES[s] || s; }

  /* ---------------------------------------------------------- */
  /* Landing: pick a name, type a password                       */
  /* ---------------------------------------------------------- */
  function login(failed, chosen) {
    /* Re-selecting the name after a wrong password is not a nicety.
       The dropdown resetting to "Choose your name" reads as though the
       whole attempt was rejected, and a child who mistypes twice will
       conclude the site has forgotten them. */
    var opts = ['<option value="">Choose your name</option>'].concat(
      Auth.roster().map(function (r) {
        return '<option value="' + esc(r.slug) + '"' +
               (r.slug === chosen ? ' selected' : '') + '>' + esc(r.name) + '</option>';
      })
    ).join('');

    return '' +
      '<div class="loginbox">' +
        '<h1>Who is working today?</h1>' +
        '<div class="field">' +
          '<label for="lname">Your name</label>' +
          '<select id="lname" class="textfield select field-control">' + opts + '</select>' +
        '</div>' +
        '<div class="field">' +
          '<label for="lcode">Your password</label>' +
          '<div class="codewrap">' +
            '<input id="lcode" class="textfield code field-control" type="password" ' +
              'autocomplete="off" autocapitalize="off" spellcheck="false">' +
            '<button class="peek" type="button" data-act="peek" ' +
              'aria-label="Show password">Show</button>' +
          '</div>' +
        '</div>' +
        (failed ? '<p class="gate-again" role="alert">That is not quite right. ' +
                  'Check the spelling and try again.</p>' : '') +
        '<div class="btnrow">' +
          '<button class="btn btn-primary" type="button" data-act="login">Let us begin</button>' +
        '</div>' +
      '</div>';
  }

  /* Reached from a mistyped address as well as a missing record, so it
     has to work whether or not somebody is signed in. */
  function notFound(slug) {
    return '<h1>That page is not here</h1>' +
           '<p class="muted">The address may have been mistyped, or the ' +
             'topic may have been renamed.</p>' +
           (slug
             ? '<div class="btnrow">' +
                 '<a class="btn btn-primary" href="#/k/' + esc(slug) + '">Back to your dashboard</a>' +
                 '<a class="btn btn-quiet" href="#/map">See everything on your list</a>' +
               '</div>'
             : '<div class="btnrow">' +
                 '<a class="btn btn-primary" href="#/">Go to sign in</a>' +
               '</div>');
  }

  /* ---------------------------------------------------------- */
  /* Dashboard                                                   */
  /* ---------------------------------------------------------- */
  function fmtDate(ms) {
    if (!ms) return null;
    try {
      return new Date(ms).toLocaleDateString(undefined, {
        day: 'numeric', month: 'short', year: 'numeric'
      });
    } catch (e) {
      return new Date(ms).toDateString();
    }
  }

  function panel(label, body, footer) {
    return '<section class="panel">' +
             '<p class="panel-label">' + esc(label) + '</p>' +
             body +
             (footer ? '<div class="panel-foot">' + footer + '</div>' : '') +
           '</section>';
  }

  /* --- unit cards -------------------------------------------- */
  function unitsPanel(slug, units) {
    var visible = (window.CONFIG && CONFIG.unitsVisible) || 6;
    var clipped = units.length > visible;

    var cards = units.map(function (u, pos) {
      var ready = Units.isReady(u);
      var hidden = clipped && pos >= visible ? ' is-hidden' : '';

      if (!ready) {
        /* Not a link. A card that opens an empty page is worse than a
           card that plainly says it is not ready. */
        return '<div class="ucard is-soon' + hidden + '">' +
                 '<span class="ucard-title">' + esc(u.title) + '</span>' +
                 '<span class="ucard-blurb">' + esc(u.blurb || '') + '</span>' +
                 '<span class="ucard-state">Coming soon</span>' +
               '</div>';
      }

      var p = Units.progress(slug, u.id);
      var state = p.finished ? 'All ' + p.total + ' done'
                : p.started  ? p.done + ' of ' + p.total + ' done'
                             : p.total + ' topics';

      return '<a class="ucard' + (p.finished ? ' is-done' : '') + hidden + '"' +
               ' href="#/u/' + esc(u.id) + '">' +
               '<span class="ucard-title">' + esc(u.title) + '</span>' +
               '<span class="ucard-blurb">' + esc(u.blurb || '') + '</span>' +
               '<span class="ucard-state">' + esc(state) + '</span>' +
             '</a>';
    }).join('');

    var foot = clipped
      ? '<button class="btn btn-quiet" type="button" data-act="showmore">Show more</button>'
      : '';

    return panel('Topics', '<div class="ugrid">' + cards + '</div>', foot);
  }

  /* --- the hero: who you are, and the one thing to do next ----
     The dashboard used to open on a heading and a grid, which is a
     fine admin screen and a poor welcome. This puts the single next
     action at the top, above everything, so the page answers "what
     am I doing today" before it offers any choices.

     No new data: the target is the first unready-and-unfinished unit
     in the learner's own order, exactly what the Progress panel was
     already working out. That cell is now gone from the panel rather
     than saying the same thing twice. */
  function resumeHero(slug, units) {
    var name = Auth.nameOf(slug) || '';
    var L = Auth.record() || {};
    var levels = (L.levels || []).join(', ');

    var hr = new Date().getHours();
    var greet = hr < 12 ? 'Good morning' : hr < 17 ? 'Good afternoon' : 'Good evening';

    var ready = units.filter(Units.isReady);
    var target = null;

    for (var i = 0; i < ready.length; i++) {
      var p = Units.progress(slug, ready[i].id);
      if (p.finished) continue;
      target = { unit: ready[i], p: p, topic: Topics.get(p.nextId) };
      break;
    }

    var body;

    if (!ready.length) {
      /* An empty screen is an invitation, not an apology. */
      body = '<span class="resume-label">Nothing ready yet</span>' +
             '<span class="resume-topic">Your units are still being written</span>' +
             '<span class="resume-where">Ask below for anything you want covered</span>';

    } else if (!target) {
      body = '<span class="resume-label">You are up to date</span>' +
             '<span class="resume-topic">Nothing left on your list</span>' +
             '<span class="resume-where">Ask below if there is something to go over again</span>';

    } else {
      var on = target.p.started;
      body = '<span class="resume-label">' + (on ? 'Carry on with' : 'Start with') + '</span>' +
             '<span class="resume-topic">' + esc(target.topic.title) + '</span>' +
             '<span class="resume-where">' + esc(target.unit.title) +
               ' &middot; topic ' + (target.p.nextIndex + 1) + ' of ' + target.p.total + '</span>' +
             '<p class="resume-idea">' + esc(target.topic.one_idea) + '</p>' +
             '<div class="btnrow">' +
               '<a class="btn btn-primary btn-lg" href="#/t/' + esc(target.topic.id) + '">' +
                 (on ? 'Carry on' : 'Start') +
               '</a>' +
             '</div>';
    }

    return '<section class="resume">' +
             '<p class="eyebrow">' + esc(name) +
               (levels ? ' &middot; ' + esc(levels) : '') + '</p>' +
             '<h1 class="resume-greet">' + greet + ', ' + esc(name) + '.</h1>' +
             '<div class="resume-card">' +
               '<svg class="resume-mark" aria-hidden="true" focusable="false"><use href="#mark"/></svg>' +
               body +
             '</div>' +
           '</section>';
  }

  /* --- where they are, and when ------------------------------ */
  function progressPanel(slug, units) {
    var signs = Store.signIns(slug);
    var last = Store.lastDone(slug);
    var lastTopic = last ? Topics.get(last.id) : null;
    var lastUnit = last ? Units.of(last.id) : null;

    /* "Where you are" used to live here. It is the hero now — saying
       it twice on one screen made neither copy feel like the answer. */

    var body = '<div class="pgrid">' +

      '<div class="pcell">' +
        '<span class="pcell-label">You last signed in</span>' +
        '<span class="pcell-big">' + esc(fmtDate(signs.prev) || 'First time here') + '</span>' +
        '<span class="pcell-small">' +
          (signs.prev ? 'Welcome back' : 'Nothing to catch up on') +
        '</span>' +
      '</div>' +

      '<div class="pcell">' +
        '<span class="pcell-label">You last did</span>' +
        '<span class="pcell-big">' +
          esc(lastTopic ? lastTopic.title : 'Not started yet') + '</span>' +
        '<span class="pcell-small">' +
          esc(last ? ((lastUnit ? lastUnit.title + ' — ' : '') + (fmtDate(last.at) || ''))
                   : 'Your first topic is waiting') + '</span>' +
      '</div>' +

    '</div>';

    return panel('Progress', body);
  }

  /* --- suggestion box ---------------------------------------- */
  function suggestPanel(slug) {
    var draft = Store.getDraft(slug);

    var body = '<p class="suggest-prompt">Suggest what you would like us to cover next.</p>' +
               '<textarea id="suggestbox" class="suggestbox" ' +
                 'placeholder="Anything you want to go over again, or something new"' +
                 '>' + esc(draft) + '</textarea>' +
               '<div class="btnrow">' +
                 '<button class="btn btn-primary" type="button" data-act="suggest">Send to my tutor</button>' +
               '</div>' +
               '<p class="suggest-note muted" data-role="suggest-note"></p>';

    return panel('Ask for something', body);
  }

  /* --- the dashboard ----------------------------------------- */
  function learner(slug) {
    var L = Auth.record();
    if (!L) return notFound();

    var units = Units.forLearner(L);

    var html = resumeHero(slug, units);

    if (!units.length) {
      html += suggestPanel(slug);
      return html;
    }

    html += unitsPanel(slug, units);
    html += progressPanel(slug, units);
    html += suggestPanel(slug);

    return html;
  }

  /* ---------------------------------------------------------- */
  /* Unit page — the subtopics, top to bottom                     */
  /* ---------------------------------------------------------- */
  function unit(unitId, slug) {
    var u = Units.get(unitId);
    if (!u) return notFound();

    if (!Units.isReady(u)) {
      return '<p class="eyebrow">Unit</p><h1>' + esc(u.title) + '</h1>' +
             '<p class="muted">This one has not been written yet.</p>' +
             '<p><a href="#/k/' + esc(slug || '') + '">Back to your dashboard</a></p>';
    }

    var p = Units.progress(slug, u.id);

    var html = '<p class="eyebrow"><a href="#/k/' + esc(slug || '') + '">Dashboard</a></p>' +
               '<h1>' + esc(u.title) + '</h1>' +
               '<p class="muted">' + esc(u.blurb || '') + '</p>';

    html += '<p class="unit-pos">' +
              (p.finished
                ? 'All ' + p.total + ' finished'
                : 'Topic ' + (p.nextIndex + 1) + ' of ' + p.total) +
            '</p>';

    if (!p.finished) {
      var nextT = Topics.get(p.nextId);
      html += '<div class="btnrow" style="margin-bottom:1.75rem">' +
                '<a class="btn btn-primary" href="#/t/' + esc(p.nextId) + '">' +
                  (p.started ? 'Carry on' : 'Start') + ': ' + esc(nextT.title) +
                '</a>' +
              '</div>';
    }

    /* A seventeen-topic unit printed in full is the single biggest
       source of "this is a lot" on the whole site. Everything finished,
       the next one, and the three after it stay visible; the rest fold
       away behind one button. Nothing is removed — a learner who wants
       the whole map is one click from it, and the print stylesheet
       unfolds it anyway. */
    var AHEAD = 3;
    var lastOpen = p.finished ? (p.total - 1) : (p.nextIndex + AHEAD);
    var folded = 0;

    html += '<ol class="ulist">';
    (u.topics || []).forEach(function (id, i) {
      var t = Topics.get(id);
      if (!t) return;
      var done = slug && Store.isDone(slug, id);
      var isNext = i === p.nextIndex;
      var fold = !done && !isNext && i > lastOpen;
      if (fold) folded++;

      html += '<li class="urow' + (done ? ' is-done' : '') +
                (isNext ? ' is-next' : '') + (fold ? ' is-folded' : '') + '">' +
                '<span class="urow-num">' + (i + 1) + '</span>' +
                '<a class="urow-main" href="#/t/' + esc(id) + '">' +
                  '<span class="urow-title">' + esc(t.title) + '</span>' +
                  '<span class="urow-idea">' + esc(t.one_idea) + '</span>' +
                '</a>' +
                '<span class="urow-state">' +
                  (isNext ? 'Next' : (done ? 'Done' : '')) +
                '</span>' +
              '</li>';
    });
    html += '</ol>';

    if (folded) {
      html += '<div class="btnrow noprint">' +
                '<button class="btn btn-quiet" type="button" data-act="unfold">' +
                  'Show the other ' + folded + '</button>' +
              '</div>';
    }

    return html;
  }

  /* ---------------------------------------------------------- */
  /* A single practice item                                      */
  /* ---------------------------------------------------------- */
  function item(o) {
    var m = Store.getMark(o.slug, o.key);
    var committed = !!m.conf;

    var h = '<div class="item" data-key="' + esc(o.key) + '">';
    h += '<span class="num">' + o.n + (o.from ? ' &middot; from ' + esc(o.from) : '') + '</span>';
    h += '<p class="q">' + esc(o.q) + '</p>';

    if (o.scratch !== false) {
      h += '<textarea class="scratch" data-role="scratch" aria-label="Your working" ' +
             'placeholder="Working out">' + esc(Store.getScratch(o.slug, o.key)) + '</textarea>';
    }

    /* Stage 1 — commit before seeing anything */
    h += '<div class="btnrow stage-conf' + (committed ? ' hidden' : '') + '">' +
           '<button class="btn" data-act="conf" data-val="sure">I am sure</button>' +
           '<button class="btn btn-quiet" type="button" data-act="conf" data-val="unsure">Not sure</button>' +
         '</div>';

    /* Stage 2 — reveal */
    h += '<div class="btnrow stage-reveal' + (committed ? '' : ' hidden') + '">' +
           '<button class="btn btn-primary" type="button" data-act="reveal">Show the answer</button>' +
           (o.hint ? '<button class="btn btn-quiet" type="button" data-act="hint">Give me a hint</button>' : '') +
         '</div>';

    if (o.hint) {
      h += '<div class="hintbox hidden" data-role="hint">' + esc(o.hint) + '</div>';
    }

    /* Stage 3 — the answer, plus an honest self-check */
    h += '<div class="answer hidden" data-role="answer">' +
           '<span class="label">Answer</span>' + esc(o.a) +
           '<div class="btnrow">' +
             '<button class="btn" data-act="got" data-val="yes">That is what I had</button>' +
             '<button class="btn btn-quiet" type="button" data-act="got" data-val="no">Not yet</button>' +
           '</div>' +
           '<p class="muted hidden" data-role="notyet" style="margin:.6rem 0 0;font-size:.9rem">' +
             'Fine. Work it through once more with the answer in front of you, then tell your tutor which step turned.' +
           '</p>' +
         '</div>';

    h += '</div>';
    return h;
  }

  /* --- warm-up ------------------------------------------------
     Three questions from earlier topics in the same unit, asked
     before the new lesson starts. Collapsed by default: it is an
     offer, not a gate, and a learner who is impatient to get on with
     the topic should not have to scroll past a wall of old questions.

     Same commit-then-reveal shape as practice, minus the working-out
     box — these are meant to be answered out loud in a few seconds. */
  function warmUp(id, slug) {
    var items = Units.warmUp(slug, id, 3);
    if (!items.length) return '';

    var body = '';
    items.forEach(function (w, i) {
      body += item({
        key: w.key, slug: slug, n: i + 1, from: w.from,
        q: w.q, a: w.a, hint: null, scratch: false
      });
    });

    return '<details class="warmup noprint">' +
             '<summary class="warmup-head">' +
               '<span class="warmup-label">Warm-up</span>' +
               '<span class="warmup-sub">' + items.length +
                 ' quick questions from earlier</span>' +
             '</summary>' +
             '<div class="warmup-body">' + body + '</div>' +
           '</details>';
  }

  /* ---------------------------------------------------------- */
  /* Lesson sections — short block, worked example, boxed rule    */
  /* ---------------------------------------------------------- */
  function sections(list) {
    var h = '';
    (list || []).forEach(function (sec) {
      h += '<section class="sect">';
      if (sec.h) h += '<h2>' + esc(sec.h) + '</h2>';

      (sec.p || []).forEach(function (para) {
        h += '<p>' + esc(para) + '</p>';
      });

      if (sec.figure) h += figure(sec.figure);

      if (sec.list && sec.list.length) {
        h += '<ul class="plainlist">';
        sec.list.forEach(function (li) { h += '<li>' + esc(li) + '</li>'; });
        h += '</ul>';
      }

      if (sec.example) h += example(sec.example);

      if (sec.rule) {
        h += '<div class="rule">' +
               '<span class="rule-label">Remember</span>' +
               '<p>' + esc(sec.rule) + '</p>' +
             '</div>';
      }

      if (sec.note) h += '<p class="note"><strong>Note:</strong> ' + esc(sec.note) + '</p>';

      h += '</section>';
    });
    return h;
  }

  /* Diagrams. Perimeter and area are the units where the shape is the
     lesson, and the example table cannot draw one — it splits on runs
     of spaces, so anything drawn with characters comes apart.

     `svg` is inline SVG authored in the topic files. It is inserted as
     markup rather than escaped, which is the entire point of the field.
     Nothing from a learner ever reaches it. The caption is escaped and
     doubles as the accessible name, so a shape is never a silent gap
     for anyone reading with the sound on.

     Colour comes from classes styled in style.css — f-shape, f-line,
     f-dash, f-mark, f-grid, f-fill, f-label, f-dim — never from
     hardcoded fills, so one drawing serves both themes and print. */
  function figure(fig) {
    if (!fig || !fig.svg) return '';
    var cap = fig.caption || '';
    return '<figure class="fig">' +
             '<div class="fig-svg"' +
               (cap ? ' role="img" aria-label="' + esc(cap) + '"' : ' aria-hidden="true"') +
             '>' + fig.svg + '</div>' +
             (cap ? '<figcaption class="fig-cap">' + esc(cap) + '</figcaption>' : '') +
           '</figure>';
  }

  /* Worked examples are authored as space-aligned text. Verdana is
     proportional, so alignment has to come from the layout instead:
     split on runs of two or more spaces, then lay the cells out in a
     table where the browser does the aligning. */
  function example(ex) {
    var lines = ex.lines || [];
    var rows = lines.map(function (line) {
      if (!line.trim()) return null;                   /* blank spacer */
      return line.split(/\s{2,}/).map(function (cell, i) {
        return i === 0 ? cell : cell.trim();
      });
    });

    var cols = 1;
    rows.forEach(function (r) { if (r && r.length > cols) cols = r.length; });

    var body = rows.map(function (r) {
      if (!r) return '<tr class="ex-gap"><td colspan="' + cols + '"></td></tr>';

      /* A line with no column break spans the full width, so prose and
         headings inside an example do not get squeezed into column one. */
      if (r.length === 1) {
        return '<tr><td colspan="' + cols + '">' + esc(r[0]) + '</td></tr>';
      }

      var cells = r.map(function (c, i) {
        var last = i === r.length - 1;
        var span = last && r.length < cols
          ? ' colspan="' + (cols - r.length + 1) + '"'
          : '';
        return '<td' + span + (c === '' ? ' class="ex-pad"' : '') + '>' + esc(c) + '</td>';
      }).join('');

      return '<tr>' + cells + '</tr>';
    }).join('');

    return '<div class="example">' +
             '<span class="example-label">' + esc(ex.label || 'Example') + '</span>' +
             '<table class="ex-table"><tbody>' + body + '</tbody></table>' +
           '</div>';
  }

  /* Previous / next within the unit the topic belongs to. */
  function pager(id) {
    var u = Units.of(id);
    if (!u) return '';
    var ids = u.topics || [];
    var i = ids.indexOf(id);
    if (i < 0) return '';

    var prev = i > 0 ? Topics.get(ids[i - 1]) : null;
    var next = i < ids.length - 1 ? Topics.get(ids[i + 1]) : null;

    var h = '<nav class="pager noprint">';
    h += prev
      ? '<a class="pager-prev" href="#/t/' + esc(prev.id) + '">' +
          '<span class="pager-dir">Previous</span>' +
          '<span class="pager-name">' + esc(prev.title) + '</span></a>'
      : '<span></span>';
    h += '<span class="pager-count">' + (i + 1) + ' of ' + ids.length + '</span>';
    h += next
      ? '<a class="pager-next" href="#/t/' + esc(next.id) + '">' +
          '<span class="pager-dir">Next</span>' +
          '<span class="pager-name">' + esc(next.title) + '</span></a>'
      : '<span></span>';
    h += '</nav>';
    return h;
  }

  /* ---------------------------------------------------------- */
  /* Topic                                                       */
  /* ---------------------------------------------------------- */
  function topic(id, slug) {
    var t = Topics.get(id);
    if (!t) return '<h1>Topic not found</h1><p><a href="#/">Back to the start</a></p>';

    var html = '';
    var parent = Units.of(id);

    /* The header used to open with the ladder rail and then print the
       raw level code — "AU-7" — next to the unit name. Neither helps
       the person reading it. A learner wants to know where they are in
       the unit; the level code is a filing detail that belongs on the
       map. So: unit, position, title, one idea. The ladder moved below,
       where it is useful without being the first thing on the page. */
    var pos = '';
    if (parent) {
      var pi = (parent.topics || []).indexOf(id);
      if (pi >= 0) pos = ' &middot; ' + (pi + 1) + ' of ' + parent.topics.length;
    }

    html += '<p class="eyebrow">' +
              (parent
                ? '<a href="#/u/' + esc(parent.id) + '">' + esc(parent.title) + '</a>'
                : 'Topic') + pos +
            '</p>';
    html += '<h1>' + esc(t.title) + '</h1>';

    html += '<div class="oneidea"><p>' + esc(t.one_idea) + '</p></div>';

    /* the ladder rail — what this stands on. Collapsed, because on a
       topic eight deep it is a long list and it is reference material,
       not part of the lesson. */
    var chain = Topics.chain(id);
    if (chain.length > 1) {
      var rail = '';
      chain.forEach(function (cid) {
        var c = Topics.get(cid);
        if (!c) return;
        var cls = cid === id ? 'here' : (slug && Store.isDone(slug, cid) ? 'done' : '');
        rail += '<li class="' + cls + '">' +
                  (cid === id ? esc(c.title)
                              : '<a href="#/t/' + esc(cid) + '">' + esc(c.title) + '</a>') +
                '</li>';
      });
      html += '<details class="builds noprint">' +
                '<summary class="builds-head">Builds on ' +
                  (chain.length - 1) + ' earlier ' +
                  (chain.length === 2 ? 'topic' : 'topics') +
                '</summary>' +
                '<ul class="ladder">' + rail + '</ul>' +
              '</details>';
    }

    html += warmUp(id, slug);

    if (t.sections && t.sections.length) {
      html += sections(t.sections);
    }

    /* worked example — older shape, kept for topics not yet rewritten */
    if (t.worked && t.worked.length) {
      html += '<h2>Watch it done</h2>';
      t.worked.forEach(function (w) {
        html += '<div class="card">' +
                  '<p style="margin:0 0 .35rem"><strong>' + esc(w.step) + '</strong></p>' +
                  (w.note ? '<p class="muted" style="margin:0;font-size:.95rem">' + esc(w.note) + '</p>' : '') +
                '</div>';
      });
    }

    if (t.guided && t.guided.length) {
      html += '<h2>Now together</h2>';
      t.guided.forEach(function (g, i) {
        html += item({
          key: id + ':g' + i, slug: slug, n: i + 1,
          q: g.prompt, a: g.answer, hint: null, scratch: false
        });
      });
    }

    if ((!t.worked || !t.worked.length) && (!t.sections || !t.sections.length)) {
      html += '<p class="stub-note noprint">This one has no worked example written up yet — ' +
              'your tutor will do it with you on paper.</p>';
    }

    if (t.confusable_with && t.confusable_with.length) {
      html += '<h2>Careful — this is not the same as</h2>';
      t.confusable_with.forEach(function (c) {
        var other = c.id ? Topics.get(c.id) : null;
        var label = other ? other.title : (c.label || c.id);
        html += '<div class="careful">' +
                  '<p class="careful-head">' + esc(label) + '</p>' +
                  '<p>' + esc(c.why) + '</p>' +
                  (other ? '<p class="careful-link"><a href="#/t/' + esc(c.id) +
                           '">Go to ' + esc(other.title) + '</a></p>' : '') +
                '</div>';
      });
    }

    html += '<h2>Your turn</h2>';
    (t.practice || []).forEach(function (p, i) {
      html += item({
        key: id + ':p' + i, slug: slug, n: i + 1,
        q: p.q, a: p.a, hint: p.hint
      });
    });

    /* finish */
    var done = slug && Store.isDone(slug, id);
    html += '<div class="btnrow noprint" style="margin-top:2rem">';
    if (slug) {
      html += done
        ? '<button class="btn btn-quiet" type="button" data-act="undone" data-topic="' + esc(id) + '">Put this back on the list</button>'
        : '<button class="btn btn-primary" type="button" data-act="done" data-topic="' + esc(id) + '">Finished this one</button>';
      html += parent
        ? '<a class="btn btn-quiet" href="#/u/' + esc(parent.id) + '">Back to ' + esc(parent.title) + '</a>'
        : '<a class="btn btn-quiet" href="#/k/' + esc(slug) + '">Back to the list</a>';

      var L = Auth.record();
      if (L && L.homework === 'print') {
        html += '<button class="btn btn-quiet" type="button" data-act="print">Print as a worksheet</button>';
      }
    } else {
      html += '<a class="btn btn-quiet" href="#/">Sign in to save your place</a>';
    }
    html += '</div>';

    html += pager(id);

    return html;
  }

  /* ---------------------------------------------------------- */
  /* Map — the whole library, grouped by subject, sorted by depth */
  /* ---------------------------------------------------------- */
  /* The map used to list every topic in the library grouped by subject
     and sorted by dependency depth. With one subject and a hundred
     topics that is one very long undifferentiated column, and the
     indentation encoded information nobody was reading.

     It is now the learner's own units, in their own order, with a
     filter box on top. Everything is still reachable; you just do not
     have to meet all of it at once. */
  function map(slug) {
    var L = Auth.record() || {};
    var mine = Units.forLearner(L).filter(Units.isReady);

    var html = '<p class="eyebrow">Everything on your list</p>' +
               '<h1>Topic map</h1>';

    if (!mine.length) {
      return html + '<p class="muted">Nothing has been set for you yet.</p>' +
             '<p><a href="#/k/' + esc(slug || '') + '">Back to your dashboard</a></p>';
    }

    html += '<div class="field findfield">' +
              '<label for="tfind">Find a topic</label>' +
              '<input id="tfind" class="textfield" type="search" ' +
                'autocomplete="off" spellcheck="false" ' +
                'placeholder="Type a word, for example: gradient">' +
            '</div>' +
            '<p class="findcount muted" data-role="findcount" aria-live="polite"></p>';

    mine.forEach(function (u) {
      html += '<div class="subjblock" data-role="mapunit">' +
                '<h2><a href="#/u/' + esc(u.id) + '">' + esc(u.title) + '</a></h2>' +
                '<ul class="tlist">';

      (u.topics || []).forEach(function (id, i) {
        var t = Topics.get(id);
        if (!t) return;
        var done = slug && Store.isDone(slug, id);
        html += '<li data-role="maprow" data-find="' +
                  esc((t.title + ' ' + (t.one_idea || '')).toLowerCase()) + '">' +
                  '<a href="#/t/' + esc(id) + '">' +
                    (i + 1) + '. ' + esc(t.title) + '</a>' +
                  '<span class="meta">' + esc(t.one_idea || '') +
                    (done ? ' &middot; done' : '') +
                  '</span>' +
                '</li>';
      });

      html += '</ul></div>';
    });

    return html;
  }

  return { login: login, learner: learner, unit: unit, topic: topic, map: map,
           notFound: notFound, subjectName: subjectName };
})();
