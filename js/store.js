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
   Auth — a name tag, not a lock.

   This is a static site. There is no server to check anything, so the
   check happens in the browser and the browser can be read. This stops
   one kid opening another kid's list. It stops nothing else, and it is
   only adequate because nothing sensitive is stored here.

   Unlocking uses sessionStorage on purpose: it clears when the browser
   closes. On a shared laptop a permanent unlock would make the password
   pointless by the second session.
   ------------------------------------------------------------------ */

var Auth = (function () {

  var KEY = 'study:unlocked';

  /* FNV-1a, salted. Not cryptography — obfuscation, and it is labelled
     as such everywhere it appears. */
  function hash(s) {
    var h = 0x811c9dc5;
    s = 'study:' + String(s == null ? '' : s).trim().toLowerCase();
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
    }
    return ('0000000' + h.toString(16)).slice(-8);
  }

  function unlocked() {
    try { return sessionStorage.getItem(KEY); } catch (e) { return null; }
  }

  function norm(s) {
    return String(s == null ? '' : s).trim().toLowerCase();
  }

  /* Accepts the real name, the nickname, or the key. Kids type what they
     think of as their name; any of the three should get them in. */
  function findByName(name) {
    var want = norm(name);
    if (!want) return null;
    var found = null;
    Object.keys(window.LEARNERS || {}).forEach(function (slug) {
      if (found) return;
      var L = window.LEARNERS[slug];
      if (norm(slug) === want || norm(L.name) === want || norm(L.nickname) === want) {
        found = slug;
      }
    });
    return found;
  }

  return {
    hash: hash,
    findByName: findByName,

    /* A learner with no `code` set is simply open. */
    needsCode: function (slug) {
      var L = (window.LEARNERS || {})[slug];
      return !!(L && L.code);
    },

    isUnlocked: function (slug) {
      if (!Auth.needsCode(slug)) return true;
      return unlocked() === slug;
    },

    /* Returns the slug on success, null on failure. Deliberately does not
       say which half was wrong — and the kid gets the same message either
       way, so a wrong name does not read as an accusation. */
    login: function (name, code) {
      var slug = findByName(name);
      if (!slug) return null;
      var L = window.LEARNERS[slug];
      if (L.code && hash(code) !== L.code) return null;
      try { sessionStorage.setItem(KEY, slug); } catch (e) {}
      return slug;
    },

    lock: function () {
      try { sessionStorage.removeItem(KEY); } catch (e) {}
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
