/* ------------------------------------------------------------------
   views.js — every view returns an HTML string.

   House rules for this UI, all of them deliberate:
     * No scores, no percentages, no streaks, no progress bars.
     * No red, no crosses. "Not yet" is the strongest negative word used.
     * One idea per screen.
     * The kid commits to sure / not sure BEFORE the answer appears.
   ------------------------------------------------------------------ */

var Views = (function () {

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
  function login(failed) {
    var opts = ['<option value="">Choose your name</option>'].concat(
      Auth.roster().map(function (r) {
        return '<option value="' + esc(r.slug) + '">' + esc(r.name) + '</option>';
      })
    ).join('');

    return '' +
      '<div class="loginbox">' +
        '<h1>Who is working today?</h1>' +
        '<div class="field">' +
          '<label for="lname">Your name</label>' +
          '<select id="lname" class="textfield select">' + opts + '</select>' +
        '</div>' +
        '<div class="field">' +
          '<label for="lcode">Your password</label>' +
          '<input id="lcode" class="textfield code" type="password" autocomplete="off" ' +
            'autocapitalize="off" spellcheck="false">' +
        '</div>' +
        (failed ? '<p class="gate-again">That is not quite right. Try again.</p>' : '') +
        '<div class="btnrow">' +
          '<button class="btn btn-primary" type="button" data-act="login">Let us begin</button>' +
        '</div>' +
      '</div>';
  }

  function notFound() {
    return '<h1>No such name</h1>' +
           '<p><a href="#/">Go back and pick one</a>.</p>';
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

  /* --- where they are, and when ------------------------------ */
  function progressPanel(slug, units) {
    var signs = Store.signIns(slug);
    var last = Store.lastDone(slug);
    var lastTopic = last ? Topics.get(last.id) : null;
    var lastUnit = last ? Units.of(last.id) : null;

    /* "Where you are" points at the first unit with anything left. */
    var whereBig = 'Nothing started yet';
    var whereSmall = 'Open a topic to begin';

    for (var i = 0; i < units.length; i++) {
      if (!Units.isReady(units[i])) continue;
      var p = Units.progress(slug, units[i].id);
      if (p.finished) continue;
      whereBig = units[i].title;
      whereSmall = 'Topic ' + (p.nextIndex + 1) + ' of ' + p.total +
                   ' — ' + Topics.get(p.nextId).title;
      break;
    }

    if (units.length && units.filter(Units.isReady).every(function (u) {
      return Units.progress(slug, u.id).finished;
    })) {
      whereBig = 'All done';
      whereSmall = 'Nothing left on your list';
    }

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

      '<div class="pcell">' +
        '<span class="pcell-label">Where you are</span>' +
        '<span class="pcell-big">' + esc(whereBig) + '</span>' +
        '<span class="pcell-small">' + esc(whereSmall) + '</span>' +
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

    var html = '<p class="eyebrow">' + esc(Auth.nameOf(slug)) + ' &middot; ' +
               esc((L.levels || []).join(', ')) + '</p>' +
               '<h1>Your topics</h1>';

    if (!units.length) {
      html += '<p class="muted">Nothing is on your list yet. That is not a mistake — ' +
              'it just means the next thing is still being written.</p>';
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

    html += '<ol class="ulist">';
    (u.topics || []).forEach(function (id, i) {
      var t = Topics.get(id);
      if (!t) return;
      var done = slug && Store.isDone(slug, id);
      var isNext = i === p.nextIndex;

      html += '<li class="urow' + (done ? ' is-done' : '') + (isNext ? ' is-next' : '') + '">' +
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
      h += '<textarea class="scratch" aria-label="Your working" placeholder="Working out"></textarea>';
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

    /* the ladder rail — where this sits and what it stands on */
    var chain = Topics.chain(id);
    if (chain.length > 1) {
      html += '<p class="eyebrow">Builds on</p><ul class="ladder">';
      chain.forEach(function (cid) {
        var c = Topics.get(cid);
        if (!c) return;
        var cls = cid === id ? 'here' : (slug && Store.isDone(slug, cid) ? 'done' : '');
        html += '<li class="' + cls + '">' +
                  (cid === id ? esc(c.title)
                              : '<a href="#/t/' + esc(cid) + '">' + esc(c.title) + '</a>') +
                '</li>';
      });
      html += '</ul>';
    }

    var parent = Units.of(id);
    html += '<p class="eyebrow">' +
              (parent
                ? '<a href="#/u/' + esc(parent.id) + '">' + esc(parent.title) + '</a> &middot; '
                : '') +
              esc((t.levels || []).join(', ')) +
            '</p>';
    html += '<h1>' + esc(t.title) + '</h1>';

    html += '<div class="oneidea"><p>' + esc(t.one_idea) + '</p></div>';

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
  function map(slug) {
    var subjects = {};
    Topics.all().forEach(function (t) {
      (subjects[t.subject] = subjects[t.subject] || []).push(t);
    });

    var html = '<p class="eyebrow">Everything there is</p>' +
               '<h1>Topic map</h1>' +
               '<p class="muted">Indented topics stand on the ones above them. ' +
               'If something new will not stick, look upward first.</p>';

    Object.keys(subjects).sort().forEach(function (s) {
      var list = subjects[s].slice().sort(function (a, b) {
        var d = Topics.depth(a.id) - Topics.depth(b.id);
        return d !== 0 ? d : a.title.localeCompare(b.title);
      });

      html += '<div class="subjblock"><h2>' + esc(subjectName(s)) + '</h2><ul class="tlist">';
      list.forEach(function (t) {
        var d = Math.min(Topics.depth(t.id), 3);
        var done = slug && Store.isDone(slug, t.id);
        html += '<li class="depth-' + d + '">' +
                  '<a href="#/t/' + esc(t.id) + '">' + esc(t.title) + '</a>' +
                  '<span class="meta">' + esc((t.levels || []).join(' ')) +
                    (t.tier === 'stub' ? ' &middot; stub' : '') +
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
