# Study — tutoring site

A shared topic library plus a thin pointer file per learner. Vanilla HTML,
CSS and JS. No build step, no framework, no backend. Push it to a repo,
turn on GitHub Pages, done.

Used **on a laptop during a session, with the tutor in the room.** That
assumption is load-bearing — see "Why the topics are thin" below.

---

## Running it

Open `index.html` in a browser. That is the whole story. There are no
ES modules, so it works from `file://` as well as from Pages.

To publish: push to a repo, then Settings → Pages → deploy from `main`,
root folder.

---

## What goes where

```
index.html              shell — nothing but the frame
css/style.css           all styling
js/data/topics.*.js     the library, one file per subject
js/data/learners.js     slug -> ordered list of topic ids
js/store.js             localStorage progress + graph helpers
js/views.js             renderers, one function per screen
js/app.js               hash router, one delegated click handler
```

Routes are hash-based: `#/`, `#/k/<slug>`, `#/t/<topic-id>`, `#/map`.

---

## Privacy — read before committing anything

This repo is public. Assume everything in it is permanent and indexed.

**Never commit:** real names, ages, schools, marks, grades, comments on
how anyone is doing, or anything derived from the profile spreadsheet.

`learners.js` holds only a slug, the levels, and an ordered list of topic
ids. That is deliberate and it is the ceiling, not a starting point.

Progress is kept in `localStorage` on whichever computer the kid used.
There is no server, so there is nothing to leak and nothing to breach.
It also means progress does not follow them between devices — an
acceptable trade for not holding children's performance data anywhere.

Keep the slug-to-name mapping in a private file that is never committed.

---

## Why the topics are thin, and how to thicken them

Every topic carries a `tier`:

- **`stub`** — `one_idea` plus three to five practice items with answers.
  About five minutes to write. This is the default and most topics should
  stay here indefinitely.
- **`taught`** — a stub plus `worked` and `guided`. Write these the week
  you actually teach the topic, not before.

The library is meant to be **complete in breadth from day one and shallow
almost everywhere.** The map is the product; the prose is optional. A stub
is not a failure state — with a tutor present, `one_idea` plus good
practice items is a sufficient frame for a session. A topic that never
comes up never costs more than five minutes.

`m6-frac-equiv` and `m7-frac-add-unlike` are written out as `taught` so
there is a worked example to copy the shape from. Everything else is a stub.

---

## Adding a topic

Append to the right `js/data/topics.*.js`. Full field reference is in the
comment at the top of `topics.maths.js`. The short version:

```js
{
  id: 'm7-ratio',
  subject: 'maths',
  levels: ['SI-7'],            // array — one topic can serve SI-7 and AU-7
  title: 'Ratio',
  type: 'concept',             // 'concept' | 'recall'
  tier: 'stub',
  prereqs: ['m6-frac-equiv'],  // drives the ladder and the map
  one_idea: 'A ratio compares two amounts without saying how big either is.',
  confusable_with: [],
  worked: [], guided: [],
  practice: [ { q: '...', a: '...', hint: '...' } ],
  retrieval: [ { q: '...', a: '...' } ]
}
```

Then add the id to whichever queues in `learners.js` should get it.

Two content types, because one shape does not fit both:

- **`concept`** (maths, science) — sequential, has prerequisites, wants a
  worked example eventually.
- **`recall`** (social studies, history, health, agriculture) — question
  and answer, no dependency chain, stays a stub forever and that is fine.

---

## Design rules, and the reasons behind them

These are not stylistic preferences. Each one exists for a specific kid.

**No scores, percentages, streaks or progress bars. No red, no crosses.**
The strongest negative phrase in the interface is "Not yet". A visible
score costs you a session with the learner who frustrates easily, and buys
nothing for anyone else.

**Confidence before reveal.** Every practice item makes the kid commit to
"I am sure" or "Not sure" before the answer can be shown. Afterwards they
say whether they had it. The gap between those two is the calibration
signal — it is recorded to `localStorage` and shown to nobody. It exists
for the learner who cannot gauge her own level and will not say so aloud.

**The ladder rail** down the left of each topic shows the full prerequisite
chain, filled in for what is finished. For the learner who cannot see how
topics relate, and for the one who keeps losing fundamentals: when
something new will not stick, the thing to check is above it.

**Warm-up from three to twenty-one days ago.** Every session opens with
three `retrieval` items drawn from topics finished one to three weeks back,
shuffled. This is the fix for "knows it in the lesson, gone by next week".
Cheap to author because retrieval items are mostly recycled practice items.
Falls back to the prerequisites of the upcoming topic on a fresh device.

**"Careful — this is not the same as"** renders `confusable_with`. For the
learner who invents connections between unrelated topics: name the false
connection before he makes it.

**One idea per screen**, large type, Atkinson Hyperlegible for the body
text — a face designed for legibility rather than for looks.

---

## Printing

Any topic prints as a plain worksheet: buttons, answers, hints and the
ladder are all stripped, and the working-out box expands. Learners whose
`homework` is `'print'` get a print button at the bottom of each topic.

---

## Not built yet

- A private, local-only tutor view over the stored confidence marks.
- Offline caching. Not needed while this is a laptop-in-session tool;
  worth adding if it ever moves to phones on mobile data.
- The other ~130 stubs.
