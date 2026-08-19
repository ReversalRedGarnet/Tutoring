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
index.html              shell, header and footer
tools/encrypt.html      regenerates learners.js (tutor only)
private/                plaintext learner records — gitignored
css/style.css           all styling
js/data/units.js        the unit list and what topics each one holds
js/data/topics.*.js     the topic library, one file per block
js/data/learners.js     slug -> ordered list of topic ids
js/config.js            tutor email + card count — edit this one
js/crypto.js            SHA-256, key derivation, record cipher
js/store.js             progress, login, session, graph helpers
js/views.js             renderers, one function per screen
js/app.js               hash router, one delegated click handler
```

Routes are hash-based: `#/`, `#/k/<slug>`, `#/t/<topic-id>`, `#/map`.

---

## Privacy — read before committing anything

**This repo must stay private.** `learners.js` contains real first names
attached to the topics each child is struggling with. That combination is
fine behind a private repo with parental permission and is not fine
anywhere else.

Note that a private repo does **not** make a published Pages site private.
If Pages is serving from this repo, the site is on the open web regardless
of the repo setting. On the free plan, making the repo private takes the
Pages site down entirely — which is one way to be sure, but check before
relying on it.

**Never commit:** ages, schools, marks, grades, comments on how anyone is
doing, or anything derived from the profile spreadsheet.

If this ever needs to go public, the fix is small: hash the names the same
way the codes are hashed. Login still works — the site only needs to check
a name, never display a list — and the file then names nobody.

Progress is kept in `localStorage` on whichever computer the kid used.
There is no server, so there is nothing to leak and nothing to breach.
It also means progress does not follow them between devices — an
acceptable trade for not holding children's performance data anywhere.

Keep the nickname-to-real-name mapping in a private file that is never
committed.

### Logging in

The landing page shows a dropdown of names and a password box.

**Names are in the clear** in `js/data/learners.js`. A dropdown has to
render them, so this is the cost of the dropdown — the two requests pull
against each other and the dropdown won.

**Everything else is encrypted.** Each learner's levels, subjects,
homework setting and topic queue are encrypted with their own password
and stored as a base64 blob. Someone reading the source sees five names
and two opaque strings each. They cannot tell what any named child is
working on — which is the part that actually matters, because "Letisha,
fractions, Year 7" is a statement about a child and "Letisha" on its own
is not.

Under the hood: SHA-256 implemented in plain JS (verified against Node's
implementation), 60,000 rounds of derivation to make each password guess
cost real time, a keystream cipher, and an 8-byte tag so a wrong password
is detected rather than yielding garbage. Verification and decryption use
separately salted keys, so the stored check value cannot shortcut the
decryption.

WebCrypto would be the obvious choice, but `crypto.subtle` is unavailable
in a non-secure context and this site gets opened from `file://` during
sessions. Hence the hand-rolled version.

**What this is not.** It is not protection against a determined adult.
The passwords are short dictionary words, so anyone willing to spend
compute will get through, and once a kid logs in their own record is
decrypted in their own browser as it must be. The private repo is still
the main protection. This is defence in depth.

---

## Set your email

`js/config.js` has a placeholder `tutorEmail`. Until you change it, the
suggestion box saves what a learner types but cannot send it, and says so
rather than failing silently.

---

## Three levels

```
learner  ->  units          js/data/learners.js  (encrypted)
unit     ->  topics         js/data/units.js
topic    ->  the lesson     js/data/topics.*.js
```

A learner's record lists **unit ids only**. The topics inside a unit live
in `units.js`, so adding or reordering topics within a unit does not mean
re-encrypting anybody. That separation is worth keeping.

Routes: `#/k/<slug>` dashboard, `#/u/<unit>` unit page, `#/t/<topic>` the
lesson.

A unit with an empty `topics` list renders as a dashed "Coming soon" card
and is deliberately **not** a link — a card that opens an empty page is
worse than one that says plainly it is not ready.

---

## The dashboard

`#/k/<slug>` shows three panels:

- **Topics** — one card per unit, with how many of its topics are done.
  Individual lessons are not on this screen at all; they live one level
  down.
- **Progress** — last sign-in, last topic finished, and where they are up
  to. Position, not performance: "Fractions — topic 7 of 17", never a
  score, a percentage or a streak. That line is deliberate and worth
  holding.
- **Ask for something** — free text that opens a prefilled email. The site
  is static, so there is no server to post to. The text is also saved
  locally as a draft as they type.

Two things follow from the email approach. A learner working on their own
device opens *their* mail client, so the message arrives from their
address. And nothing is transmitted unless they actually send the email —
if they type something and close the tab, it sits in their browser and you
will not see it.

---

## Content

Elliot has six units: Fractions, Decimals, Percentages, Perimeter, Basic
area, Probability. Only Fractions is written.

`js/data/topics.fractions.js` is a complete 17-topic sequence for AU
Year 7, following Elliot's teaching order from introduction through to
review. 89 practice items, 31 retrieval items, 15 false-rule guards.
Every prerequisite resolves, and nothing depends on a topic that comes
later in his queue.

Each topic carries a `tier`:

- **`stub`** — `one_idea` plus practice items. About five minutes to
  write. Fine when you are in the room to explain it.
- **`taught`** — a full lesson in `sections`. All 17 fractions topics
  are at this tier.

The library is **not a syllabus and is not trying to become one.** Topics
enter it because a parent or teacher flagged something specific that is
confusing a specific child — a cluster, not a subject. Coverage is never
the goal and there is no finish line to fall short of.

When a cluster arrives, add the confusing topics **and** the one or two
topics underneath them, even if nobody asked for those. That is where the
diagnosis usually lands.

The other four learners have empty unit lists on purpose. They log in fine and
see "Nothing here yet", which is a different message from "All done".

### Section shape

Sections follow the W3Schools pattern — short block, worked example,
boxed rule — because it chunks well for a learner who drifts:

```js
sections: [{
  h: 'Find a common denominator',
  p: ['Short paragraph.'],
  list: ['bullet', 'bullet'],
  example: { label: 'Example', lines: ['monospaced', 'so columns line up'] },
  rule: 'The thing to remember, boxed.',
  note: 'A short warning, inline.'
}]
```

`example.lines` renders in monospace, so worked steps and columns line up.

### False-rule guards

`confusable_with` renders as "Careful — this is not the same as". Entries
take either a topic id or a plain label:

```js
confusable_with: [
  { id: 'fr-14-multiplying', why: 'Adding needs a common denominator...' },
  { label: 'Bigger denominator means bigger fraction', why: 'It is the opposite...' }
]
```

The label form is for false rules that are not topics — "multiplying
always makes things bigger", "flip the first fraction". Naming a trap
before a learner invents it is cheaper than unteaching it afterwards.

---

## Changing what a learner is working on

`js/data/learners.js` is generated — do not hand-edit it.

1. Edit `private/learners.source.js`, which is the readable version and is
   gitignored.
2. Open `tools/encrypt.html` in a browser, paste the source in, press
   Encrypt.
3. Save the output over `js/data/learners.js`.

The tool decrypts everything it produces before showing it to you, and
refuses to emit anything that does not round trip. It runs entirely in the
page — nothing is uploaded.

If you lose `private/learners.source.js` you can still recover every
record by logging in as each child, but it is much easier to keep the file.

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

**No warm-up.** Earlier versions opened each session with three retrieval
questions from one to three weeks back. That was dropped from the
dashboard. The `retrieval` items are still in every topic and the helper
still exists, so it can come back without rewriting content.

**Previous / next** at the foot of every topic, with position in the
sequence. The order comes from the learner's own queue, so each child gets
their path and not a generic one.

**One idea per screen**, large type, Atkinson Hyperlegible for the body
text — a face designed for legibility rather than for looks.

**Palette** is a soft blue: `--deep` for the header, `--blue` for anything
clickable, `--wash` for panels, `--amber` reserved for hints and the login
retry. Nothing in the interface is red. Change the tokens at the top of
`style.css` and the whole site follows.

**Header and footer** carry a faint circuit-trace pattern, drawn as inline
SVG data URIs in the CSS variables `--trace-light` and `--trace-dark`. They
sit in `::before` pseudo-elements at 10% and 6% opacity so the decoration
can never reduce text contrast. Footer columns are placeholders.

**One typeface.** Verdana throughout — headings, body, labels, examples.
It is a system font, so the site now loads **no external assets at all**;
the Google Fonts requests are gone.

That created one real problem. Worked examples were authored as
space-aligned columns, which only line up in a monospaced font. They are
now rendered as a table: `example.lines` is split on runs of two or more
spaces, and the browser aligns the columns. Alignment no longer depends on
the typeface, so the content did not have to be rewritten. Lines with no
column break span the full width.

**One spacing scale** (`--s1` to `--s7`) and **one font scale** (`--fs-xs`
to `--fs-2xl`). No padding or margin anywhere is a loose number. Verdana
runs wide and tall for its point size, so the scale sits a step smaller
than it would for a narrower face.

**Two themes**, toggled from the header and remembered per browser. Dark
is the default. Light is a soft white — `#F6F8F6`, not stark `#FFFFFF`.
The header and footer now move with the theme, including the circuit
traces, which have a separate darker version for light mode.

Every text pair in both themes clears WCAG AA; the tightest is 5.19:1.

A script in `<head>` applies the saved theme before first paint, so there
is no flash of the wrong background.

**Restraint.** No gradients, no glow, no shadows, no blur, no rounded
corners anywhere, and one animation in the whole stylesheet — a 0.12s
colour transition on interactive elements, disabled under
`prefers-reduced-motion`. The blinking cursor in the wordmark is gone; it
was decoration with no function. The teal is deliberately muted rather
than neon.

**Components are consistent.** One button treatment with three variants
(primary, outline, quiet) sharing hover, active and disabled states; one
input treatment across text fields, the select, the scratch pad and the
suggestion box; one card surface for cards, panels and examples. "Show
more" was a button dressed as a link — it is a button now.

**Two widths**, because laptops are the main screen. `--measure` (52rem)
for lesson prose; `--measure-wide` (66rem) for the dashboard, unit list
and map, where the content is grids and rows rather than running text.

**Narrow screens are laid out, not stacked.** The heading scale steps
down, nav spreads across its own row, unit cards go single-column, and in
the lesson list the number and status move to their own line so the title
gets full width instead of a squeezed middle column.

**Previous / next** at the foot of every topic, with position in the
sequence. The order comes from the learner's own queue, so each child gets
their path and not a generic one.

**One idea per screen**, large type, Atkinson Hyperlegible for the body
text — a face designed for legibility rather than for looks.

**Palette** is a soft blue: `--deep` for the header, `--blue` for anything
clickable, `--wash` for panels, `--amber` reserved for hints and the login
retry. Nothing in the interface is red. Change the tokens at the top of
`style.css` and the whole site follows.

**Header and footer** carry a faint circuit-trace pattern, drawn as inline
SVG data URIs in the CSS variables `--trace-light` and `--trace-dark`. They
sit in `::before` pseudo-elements at 10% and 6% opacity so the decoration
can never reduce text contrast. Footer columns are placeholders.

**Two themes**, toggled from the header and remembered per browser. Dark
is the default and is unchanged. Light is a soft white — `#F6F8F6`, not
stark `#FFFFFF` — with the teal and amber darkened so they still carry
contrast on a pale background. Every text pair in both themes clears WCAG
AA at 4.5:1 or better.

The header and footer stay deep teal in **both** themes. That is why the
palette is split into page tokens (`--paper`, `--ink`, `--teal`) which
flip, and chrome tokens (`--chrome-bg`, `--chrome-ink`, `--chrome-teal`)
which do not. The circuit traces are drawn for a dark background, so
keeping the chrome dark means one version of them rather than two.

A small script in `<head>` applies the saved theme before first paint, so
there is no flash of the wrong background on load.

**Two widths**, because laptops are the main screen. `--measure` (52rem)
is for lesson prose; `--measure-wide` (66rem) is for the dashboard, unit
list and map, where the content is card grids and rows rather than running
text. Long lines of body text get harder to track, not easier, so lessons
deliberately do not use the wider measure. Both are one variable each if
you want to change them.

**One bright teal** does all the pointing, and amber is reserved for hints
and retries — so nothing that reads as a mark
ever appears in a warning colour. The header and footer carry faint
circuit traces and a node-and-edge mark, which is the prerequisite graph
itself: three nodes with an edge through them, the same idea as the ladder
rail on a topic page.

**Short pages centre themselves** vertically and horizontally; long ones
grow and scroll from the top. Paragraphs and practice questions stay
left-aligned — centred body text is measurably harder to read, and the kid
who tires fastest is the one who would pay for it. Only the login screen,
which is three short lines, is centre-aligned as text.

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
- Grouping a learner's queue into named clusters rather than one flat list.
- Real per-cluster content, added as parents and teachers flag things.
