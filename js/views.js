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
  /* Landing: choose who is sitting at the keyboard              */
  /* ---------------------------------------------------------- */
  function pick() {
    var slugs = Object.keys(window.LEARNERS || {});
    var links = slugs.map(function (s) {
      return '<a href="#/k/' + esc(s) + '">' + esc(s) + '</a>';
    }).join('');

    return '' +
      '<p class="eyebrow">Start here</p>' +
      '<h1>Who is working today?</h1>' +
      '<p class="muted">Pick your name-word. It remembers where you got to on this computer.</p>' +
      '<div class="slugrow">' + links + '</div>' +
      '<div class="card" style="margin-top:2rem">' +
        '<h3>Topic map</h3>' +
        '<p class="muted" style="margin:0">Every topic and what it builds on. ' +
        '<a href="#/map">Open the map</a></p>' +
      '</div>';
  }

  /* ---------------------------------------------------------- */
  /* Session: warm-up, then today, then the rest of the queue    */
  /* ---------------------------------------------------------- */
  function learner(slug) {
    var L = (window.LEARNERS || {})[slug];
    if (!L) {
      return '<h1>No such name-word</h1>' +
             '<p>Check the spelling, or <a href="#/">go back and pick one</a>.</p>';
    }

    var queue = (L.queue || []).map(Topics.get).filter(Boolean);
    var next = null;
    for (var i = 0; i < queue.length; i++) {
      if (!Store.isDone(slug, queue[i].id)) { next = queue[i]; break; }
    }

    var html = '<p class="eyebrow">' + esc(slug) + ' &middot; ' + esc((L.levels || []).join(', ')) + '</p>';

    /* --- warm-up --- */
    var warm = Topics.warmup(slug, next ? next.id : null, 3);
    if (warm.length) {
      html += '<h1>Warm-up</h1>' +
              '<p class="muted">Three things from a while back. Nothing is being marked.</p>';
      warm.forEach(function (w, i) {
        html += item({
          key: 'warm:' + w.from + ':' + i,
          slug: slug,
          n: i + 1,
          q: w.q,
          a: w.a,
          hint: null,
          from: w.title,
          scratch: false
        });
      });
      html += '<hr style="border:0;border-top:1px solid var(--line);margin:2rem 0">';
    }

    /* --- today --- */
    if (next) {
      html += '<h1>Today</h1>' +
              '<div class="card">' +
                '<p class="eyebrow">' + esc(subjectName(next.subject)) + '</p>' +
                '<h2 style="margin-bottom:.35rem">' + esc(next.title) + '</h2>' +
                '<p class="muted" style="margin:0">' + esc(next.one_idea) + '</p>' +
                '<div class="btnrow"><a class="btn solid" href="#/t/' + esc(next.id) + '">Start</a></div>' +
              '</div>';
    } else {
      html += '<h1>Nothing waiting</h1>' +
              '<p class="muted">Everything on the list is finished. Pick anything below to go over again.</p>';
    }

    /* --- rest of the list --- */
    html += '<h2 style="margin-top:2rem">The rest of the list</h2><ul class="tlist">';
    queue.forEach(function (t) {
      var done = Store.isDone(slug, t.id);
      html += '<li>' +
                '<a href="#/t/' + esc(t.id) + '">' + esc(t.title) + '</a>' +
                '<span class="meta">' + esc(subjectName(t.subject)) +
                  (done ? ' &middot; done' : '') + '</span>' +
              '</li>';
    });
    html += '</ul>';

    html += '<p style="margin-top:2rem"><a href="#/map">See how these topics connect</a></p>';
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
           '<button class="btn quiet" data-act="conf" data-val="unsure">Not sure</button>' +
         '</div>';

    /* Stage 2 — reveal */
    h += '<div class="btnrow stage-reveal' + (committed ? '' : ' hidden') + '">' +
           '<button class="btn solid" data-act="reveal">Show the answer</button>' +
           (o.hint ? '<button class="btn quiet" data-act="hint">Give me a hint</button>' : '') +
         '</div>';

    if (o.hint) {
      h += '<div class="hintbox hidden" data-role="hint">' + esc(o.hint) + '</div>';
    }

    /* Stage 3 — the answer, plus an honest self-check */
    h += '<div class="answer hidden" data-role="answer">' +
           '<span class="label">Answer</span>' + esc(o.a) +
           '<div class="btnrow">' +
             '<button class="btn" data-act="got" data-val="yes">That is what I had</button>' +
             '<button class="btn quiet" data-act="got" data-val="no">Not yet</button>' +
           '</div>' +
           '<p class="muted hidden" data-role="notyet" style="margin:.6rem 0 0;font-size:.9rem">' +
             'Fine. Work it through once more with the answer in front of you, then tell your tutor which step turned.' +
           '</p>' +
         '</div>';

    h += '</div>';
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

    html += '<p class="eyebrow">' + esc(subjectName(t.subject)) + ' &middot; ' +
            esc((t.levels || []).join(', ')) + '</p>';
    html += '<h1>' + esc(t.title) + '</h1>';

    html += '<div class="oneidea"><p>' + esc(t.one_idea) + '</p></div>';

    /* worked example — only exists once the topic is promoted to 'taught' */
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

    if (!t.worked || !t.worked.length) {
      html += '<p class="stub-note noprint">This one has no worked example written up yet — ' +
              'your tutor will do it with you on paper.</p>';
    }

    if (t.confusable_with && t.confusable_with.length) {
      html += '<h2>Careful — this is not the same as</h2>';
      t.confusable_with.forEach(function (c) {
        var other = Topics.get(c.id);
        html += '<div class="card">' +
                  '<p style="margin:0 0 .3rem"><strong>' +
                    esc(other ? other.title : c.id) + '</strong></p>' +
                  '<p style="margin:0">' + esc(c.why) + '</p>' +
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
        ? '<button class="btn quiet" data-act="undone" data-topic="' + esc(id) + '">Put this back on the list</button>'
        : '<button class="btn solid" data-act="done" data-topic="' + esc(id) + '">Finished this one</button>';
      html += '<a class="btn" href="#/k/' + esc(slug) + '">Back to the list</a>';

      var L = (window.LEARNERS || {})[slug];
      if (L && L.homework === 'print') {
        html += '<button class="btn quiet" data-act="print">Print as a worksheet</button>';
      }
    } else {
      html += '<a class="btn" href="#/">Pick a name-word to save your place</a>';
    }
    html += '</div>';

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

  return { pick: pick, learner: learner, topic: topic, map: map, subjectName: subjectName };
})();
