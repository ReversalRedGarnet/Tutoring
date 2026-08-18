/* ------------------------------------------------------------------
   store.js — progress lives in this browser and nowhere else.
   There is no server. Nothing here is transmitted.
   ------------------------------------------------------------------ */

var Store = (function () {

  var PREFIX = 'study:';

  function blank() {
    return { done: {}, marks: {} };
  }

  function read(slug) {
    try {
      var raw = localStorage.getItem(PREFIX + slug);
      if (!raw) return blank();
      var parsed = JSON.parse(raw);
      return {
        done: parsed.done || {},
        marks: parsed.marks || {}
      };
    } catch (e) {
      return blank();
    }
  }

  function write(slug, data) {
    try {
      localStorage.setItem(PREFIX + slug, JSON.stringify(data));
    } catch (e) {
      /* private browsing, quota, or storage disabled — the session still
         works, it just will not be remembered next time. Stay silent:
         a storage warning is not the kid's problem to solve. */
    }
  }

  return {
    get: read,

    isDone: function (slug, topicId) {
      return !!read(slug).done[topicId];
    },

    /* returns ms since the topic was finished, or null */
    ageOf: function (slug, topicId) {
      var t = read(slug).done[topicId];
      return t ? (Date.now() - t) : null;
    },

    markDone: function (slug, topicId) {
      var d = read(slug);
      d.done[topicId] = Date.now();
      write(slug, d);
    },

    unmarkDone: function (slug, topicId) {
      var d = read(slug);
      delete d.done[topicId];
      write(slug, d);
    },

    /* Confidence-before-reveal, recorded but never displayed as a score.
       Kept so a private, local-only tutor view can be added later —
       the gap between "sure" and "not yet" is the calibration signal. */
    mark: function (slug, key, field, value) {
      var d = read(slug);
      if (!d.marks[key]) d.marks[key] = {};
      d.marks[key][field] = value;
      d.marks[key].at = Date.now();
      write(slug, d);
    },

    getMark: function (slug, key) {
      return read(slug).marks[key] || {};
    },

    reset: function (slug) {
      try { localStorage.removeItem(PREFIX + slug); } catch (e) {}
    }
  };
})();


/* ------------------------------------------------------------------
   Graph helpers over window.TOPICS
   ------------------------------------------------------------------ */

var Topics = (function () {

  var byId = {};

  function index() {
    byId = {};
    (window.TOPICS || []).forEach(function (t) { byId[t.id] = t; });
  }

  index();

  function get(id) { return byId[id]; }

  /* Full prerequisite chain, deepest first, de-duplicated.
     This is what the ladder rail draws. */
  function chain(id, seen) {
    seen = seen || {};
    var t = get(id);
    if (!t || seen[id]) return [];
    seen[id] = true;
    var out = [];
    (t.prereqs || []).forEach(function (p) {
      out = out.concat(chain(p, seen));
    });
    out.push(id);
    return out.filter(function (x, i, a) { return a.indexOf(x) === i; });
  }

  /* How deep a topic sits in its own subject's dependency tree. */
  function depth(id) {
    var t = get(id);
    if (!t || !t.prereqs || !t.prereqs.length) return 0;
    return 1 + Math.max.apply(null, t.prereqs.map(depth));
  }

  return {
    all: function () { return window.TOPICS || []; },
    get: get,
    chain: chain,
    depth: depth,
    reindex: index,

    bySubject: function (subject) {
      return (window.TOPICS || []).filter(function (t) { return t.subject === subject; });
    },

    /* Warm-up pool: things finished between 3 and 21 days ago.
       This is the fix for "remembers it in the lesson, gone by next week".
       If nothing qualifies (new device, first session), fall back to the
       prerequisites of what they are about to do. */
    warmup: function (slug, upcomingId, wanted) {
      wanted = wanted || 3;
      var pool = [];
      var MIN = 3 * 864e5, MAX = 21 * 864e5;

      (window.TOPICS || []).forEach(function (t) {
        var age = Store.ageOf(slug, t.id);
        if (age === null || age < MIN || age > MAX) return;
        (t.retrieval || []).forEach(function (r) {
          pool.push({ from: t.id, title: t.title, q: r.q, a: r.a });
        });
      });

      if (!pool.length && upcomingId) {
        var t2 = get(upcomingId);
        (t2 ? (t2.prereqs || []) : []).forEach(function (pid) {
          var p = get(pid);
          if (!p) return;
          (p.retrieval || []).forEach(function (r) {
            pool.push({ from: p.id, title: p.title, q: r.q, a: r.a });
          });
        });
      }

      /* Shuffle so the same three do not surface every session. */
      for (var i = pool.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
      }
      return pool.slice(0, wanted);
    }
  };
})();
