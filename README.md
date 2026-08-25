# Study — a tutoring site

A shared topic library plus a thin encrypted pointer file per learner.
Vanilla HTML, CSS and JavaScript. No framework, no build step, no
backend, no external assets — the site loads nothing it does not ship.

Used **on a laptop during a session, with the tutor in the room.** That
assumption is load-bearing and it shows up everywhere below.

---

## Running it

Open `index.html` in a browser. That is the whole story. There are no ES
modules, so it works from `file://` as well as over HTTP.

---

## Read this before pushing anything

**As of this writing the GitHub repo is public and `private/` has been
committed.** Both need fixing before any real name goes near this.

1. **Make the repo private.** Settings → General → Danger Zone.
2. **Stop tracking the plaintext.** `.gitignore` now excludes `private/`,
   but a `.gitignore` never removes what is already tracked:

   ```
   git rm -r --cached private
   git commit -m "Stop tracking private/"
   ```

3. **Change every password.** Git history keeps the old copies of
   `private/learners.source.js`, so removing the file does not un-leak
   what was in it. Anything ever pushed should be treated as public.
4. **Check what Pages or Vercel is serving.** A private repo does not
   make a deployed site private. If the site is live, it is on the open
   web no matter what the repo setting says.

**Never commit:** ages, schools, marks, grades, comments on how anyone
is doing, or anything derived from a profile spreadsheet.

If the repo ever has to be public, the fix is small: hash the names the
way the passwords are hashed. Login still works, because the site only
ever needs to *check* a name — the dropdown is the only thing that needs
them in the clear, and a dropdown is not compulsory.

---

## What goes where

```
index.html                  shell, header, footer, script order
.gitignore                  keeps private/ out of the repo

css/style.css               all styling, all design tokens

js/config.js                tutor email + card count — edit this one
js/crypto.js                SHA-256, key derivation, record cipher
js/store.js                 Store, Auth, Topics, Units
js/views.js                 Views — one function per screen
js/app.js                   hash router + one delegated click handler

js/data/units.js            the unit list and the topics in each
js/data/learners.js         slug -> encrypted record  (generated)
js/data/topics.fractions.js     the topic library,
js/data/topics.decimals.js      one file per unit
js/data/topics.percentages.js
js/data/topics.perimeter.js
js/data/topics.area.js
js/data/topics.probability.js

private/learners.source.js  plaintext learner records — gitignored
tools/encrypt.html          regenerates learners.js (tutor only)
```

Load order in `index.html` matters: `config` → `crypto` → topic files →
`units` → `learners` → `store` → `views` → `app`. Topic files push onto
a shared `window.TOPICS`, so a new unit file goes anywhere among the
others, but always before `store.js`.

---

## Three levels

```
learner  ->  units          js/data/learners.js   (encrypted)
unit     ->  topics         js/data/units.js
topic    ->  the lesson     js/data/topics.*.js
```

A learner's record lists **unit ids only**. The topics inside a unit
live in `units.js`, so adding or reordering topics within a unit does
not mean re-encrypting anybody. That separation is worth keeping.

A unit with an empty `topics` list renders as a dashed "Coming soon"
card and is deliberately **not** a link. A card that opens an empty page
is worse than one that says plainly it is not ready.

---

## Routes

| Route            | Screen                                    |
| ---------------- | ----------------------------------------- |
| `#/`             | login                                     |
| `#/k/<slug>`     | learner dashboard                         |
| `#/u/<unit>`     | unit page — the lesson list               |
| `#/t/<topic>`    | a lesson                                  |
| `#/map`          | the prerequisite graph                    |

Every content route redirects to `#/` when nobody is signed in. Signing
out clears the decrypted record from `sessionStorage`, so the back
button lands on the login screen rather than a stale page.

---

## Logging in

The landing page shows a dropdown of names and a password box.

**Names are in the clear** in `js/data/learners.js`. A dropdown has to
render them. The two requirements pull against each other and the
dropdown won.

**Everything else is encrypted.** Each learner's levels, subjects,
homework setting and unit queue are encrypted under their own password
and stored as a base64 blob. Someone reading the source sees five names
and two opaque strings each. They cannot tell what any named child is
working on — which is the part that matters, because "Letisha, fractions,
Year 7" is a statement about a child and "Letisha" on its own is not.

Under the hood:

- SHA-256 in plain JS, verified against Node's implementation
- 60,000 rounds of derivation, so each password guess costs real time
- a keystream cipher, and an 8-byte tag so a wrong password is
  *detected* rather than yielding garbage
- separately salted keys for verification and decryption, so the stored
  check value cannot shortcut the decryption

**Every encryption uses a fresh random 8-byte nonce**, stored on the
front of the blob. This is not decoration. Without it, encrypting the
same record twice under the same password produces the same keystream,
and anyone holding two versions — which git history hands them, since
this file is regenerated and committed whenever a queue changes — can
XOR the two ciphertexts together, cancel the key, and recover the
plaintext with no password at all. **If you ever rewrite the cipher,
keep the nonce.**

Blob format: `nonce (8) | ciphertext | tag (8)`. The tag covers the
nonce so it cannot be swapped.

WebCrypto would be the obvious choice, but `crypto.subtle` is
unavailable in a non-secure context and this site gets opened from
`file://` during sessions. Hence the hand-rolled version.

**What this is not.** It is not protection against a determined adult.
The passwords are short dictionary words, so anyone willing to spend
compute will get through, and once a kid logs in their own record is
decrypted in their own browser as it must be. The private repo is the
main protection. This is defence in depth.

---

## Where state lives

Nothing is sent anywhere. There is no server, so there is nothing to
leak and nothing to breach. The trade is that progress does not follow a
learner between devices — acceptable, for not holding children's
performance data anywhere.

| Key                    | Where            | Holds                                  |
| ---------------------- | ---------------- | -------------------------------------- |
| `study:<slug>`         | `localStorage`   | `{ done, marks }` and sign-in stamps   |
| `study:theme`          | `localStorage`   | `light`, or absent for dark            |
| `study:who`            | `sessionStorage` | the signed-in slug                     |
| `study:record`         | `sessionStorage` | the decrypted record, for this tab     |

`marks` is the confidence data — see the design rules below. It is never
displayed.

---

## Set your email

`js/config.js` still has the placeholder `tutorEmail`. It is validated
before use: anything that is not a plain address is rejected rather than
sanitised, since a stray `?` or `&` would let extra mail headers ride
along in the `mailto:` link.

Until you change it, the suggestion box saves what a learner types but
cannot send it, and says so rather than failing silently.

`unitsVisible` controls how many unit cards show before "Show more".

---

## The dashboard

`#/k/<slug>` shows three panels:

- **Topics** — one card per unit, with how many of its topics are done.
  Individual lessons are not on this screen at all; they live one level
  down.
- **Progress** — last sign-in, last topic finished, and where they are up
  to. Position, not performance: *"Fractions — topic 7 of 17"*, never a
  score, a percentage or a streak. That line is deliberate.
- **Ask for something** — free text that opens a prefilled email, and
  saves locally as a draft while they type.

Two things follow from the email approach. A learner on their own device
opens *their* mail client, so the message arrives from their address.
And nothing is transmitted unless they actually send it — if they type
something and close the tab, it sits in their browser and you will not
see it.

---

## Content

Six units, all written, all at `taught` tier.

| Unit        | Topics | Practice | Retrieval | Guards | Figures |
| ----------- | -----: | -------: | --------: | -----: | ------: |
| Fractions   |     17 |       89 |        31 |     15 |       0 |
| Decimals    |     16 |       88 |        29 |     17 |       0 |
| Percentages |     13 |       78 |        26 |     23 |       3 |
| Perimeter   |     11 |       64 |        22 |     14 |       4 |
| Basic area  |     13 |       77 |        26 |     21 |       8 |
| Probability |     14 |       85 |        28 |     28 |       1 |
| **Total**   | **84** |  **481** |   **162** |**118** |  **16** |

Elliot has all six in that order. The other four learners have empty
unit lists on purpose — they log in fine and see "Nothing here yet",
which is a different message from "All done".

**The units are wired together, not stacked.** Decimals lists fraction
topics as prerequisites; Percentages reaches into both; Area reaches
into Perimeter; Probability reaches into Fractions and Percentages. So
when something new will not stick, the fundamental underneath it is one
click away on the ladder rail instead of forgotten. Every prerequisite
resolves, and nothing depends on a topic later in Elliot's queue.

Two topics are deliberately built as a matched pair pulling in opposite
directions: `pe-07-compound` teaches *ignore the internal line* and
`ar-07-compound` teaches *draw the internal line*. Each names the other
as a confusable. `ar-10-vs-perimeter` exists for nothing except breaking
the perimeter/area confusion.

**The library is not a syllabus and is not trying to become one.**
Topics enter because a parent or teacher flagged something specific that
is confusing a specific child — a cluster, not a subject. Coverage is
never the goal and there is no finish line to fall short of.

When a cluster arrives, add the confusing topics **and** the one or two
topics underneath them, even if nobody asked for those. That is where
the diagnosis usually lands.

---

## Adding a topic

Append to the right `js/data/topics.*.js`, then add the id to the unit's
`topics` list in `units.js`. Full shape:

```js
{
  id: 'pc-06-of-amounts',
  subject: 'maths',
  levels: ['AU-7'],            // array — one topic can serve SI-7 and AU-7
  title: 'Finding a percentage of an amount',
  type: 'concept',             // 'concept' | 'recall'
  tier: 'taught',              // 'taught' | 'stub'
  prereqs: ['pc-04-fdp'],      // drives the ladder rail and the map
  one_idea: 'One sentence. Shown in a box at the top.',
  sections: [ ... ],           // the lesson
  confusable_with: [ ... ],    // the false-rule guards
  practice:  [ { q, a, hint } ],
  retrieval: [ { q, a } ]
}
```

Two tiers:

- **`stub`** — `one_idea` plus practice items. About five minutes to
  write. Fine when you are in the room to explain it.
- **`taught`** — a full lesson in `sections`. All 84 topics are here.

Two content types, because one shape does not fit both:

- **`concept`** (maths, science) — sequential, has prerequisites, wants a
  worked example eventually.
- **`recall`** (social studies, history, health, agriculture) — question
  and answer, no dependency chain, stays a stub forever and that is fine.

### Section shape

Sections follow the W3Schools pattern — short block, figure, worked
example, boxed rule — because it chunks well for a learner who drifts:

```js
sections: [{
  h: 'Find a common denominator',
  p: ['Short paragraph.'],
  figure: { caption: 'Read aloud to a screen reader.', svg: '<svg ...>' },
  list: ['bullet', 'bullet'],
  example: { label: 'Example', lines: ['space  aligned', 'columns  here'] },
  rule: 'The thing to remember, boxed.',
  note: 'A short warning, inline.'
}]
```

Rendered in that order. Every field is optional.

### Worked examples

`example.lines` is **split on runs of two or more spaces** and laid out
as a table, so the browser holds the columns rather than a monospaced
font. Author them as space-aligned text and they will line up.

A line with no double-space spans the full width, so headings and prose
inside an example do not get squeezed into column one. An empty string
is a row of vertical space.

This is also why you cannot draw a shape with characters — the spaces
inside the drawing would be read as column breaks and tear it apart.
That is what figures are for.

### Figures

`figure: { caption, svg }` renders inline SVG. Used where the shape *is*
the lesson: hundred-squares, compound shapes, the probability scale.

The `svg` string is inserted as markup rather than escaped. It is
authored content and nothing from a learner ever reaches it. The
`caption` is escaped, shown underneath, and used as the `aria-label`, so
a shape is never a silent gap for anyone reading with sound.

**Colour must come from these classes, never from hardcoded fills** —
that is what lets one drawing serve dark mode, light mode and print
without being redrawn:

| Class      | For                                        |
| ---------- | ------------------------------------------ |
| `f-shape`  | the main outline, filled                   |
| `f-line`   | plain stroke, no fill                      |
| `f-dash`   | dashed guide or construction line          |
| `f-mark`   | highlighted path, in the accent colour     |
| `f-grid`   | grid squares                               |
| `f-fill`   | shaded region                              |
| `f-label`  | text                                       |
| `f-dim`    | text in the accent colour                  |
| `f-mid`    | centres text  (`f-end` right-aligns it)    |

Use a `viewBox` and no width or height — the CSS caps it at 24rem and
centres it.

### False-rule guards

`confusable_with` renders as **"Careful — this is not the same as"**.
Entries take either a topic id or a plain label:

```js
confusable_with: [
  { id: 'fr-14-multiplying', why: 'Adding needs a common denominator...' },
  { label: '20% off means you pay 20%', why: 'You pay the other 80%...' }
]
```

The label form is for false rules that are not topics — *"multiplying
always makes things bigger"*, *"after a run of heads, tails is due"*.
Naming a trap before a learner invents it is cheaper than unteaching it
afterwards. There are 118 of these and the number should keep going up.

---

## Changing what a learner is working on

`js/data/learners.js` is generated — **do not hand-edit it.**

1. Edit `private/learners.source.js`, the readable version.
2. Open `tools/encrypt.html` in a browser, paste the source in, press
   Encrypt.
3. Save the output over `js/data/learners.js`.

The tool decrypts everything it produces before showing it to you and
refuses to emit anything that does not round trip. It runs entirely in
the page — nothing is uploaded.

If you lose `private/learners.source.js` you can still recover every
record by logging in as each child, but it is much easier to keep the
file.

---

## Design rules, and the reasons behind them

These are not stylistic preferences. Each one exists for a specific kid.

**No scores, percentages, streaks or progress bars. No red, no crosses.**
The strongest negative phrase in the interface is "Not yet". A visible
score costs you a session with the learner who frustrates easily and
buys nothing for anyone else. This is a hard constraint, not a default.

**Confidence before reveal.** Every practice item makes the kid commit to
"I am sure" or "Not sure" before the answer can be shown. Afterwards they
say whether they had it. The gap between those two is the calibration
signal — stored in `marks` in `localStorage` and **shown to nobody.** It
exists for the learner who cannot gauge her own level and will not say so
aloud.

**The ladder rail** down the left of each topic shows the full
prerequisite chain, filled in for what is finished. For the learner who
cannot see how topics relate, and the one who keeps losing fundamentals:
when something new will not stick, the thing to check is above it.

**"Careful — this is not the same as"** renders `confusable_with`. For
the learner who invents connections between unrelated topics — name the
false connection before he makes it.

**Previous / next** at the foot of every topic, with position in the
sequence. The order comes from the learner's own queue, so each child
gets their path and not a generic one.

**One idea per screen.** Large type, short sections, one thought each.

**No warm-up.** Earlier versions opened each session with three retrieval
questions from one to three weeks back. It was dropped, and the helper is
gone from the code. The `retrieval` items are still authored in every
topic — 162 of them — so it can come back without rewriting content.

---

## How it looks, and why

**One typeface.** Verdana throughout — headings, body, labels, examples.
It is a system font, so the site loads **no external assets at all.**
That is what forced worked examples into a table rather than a
monospaced block.

**One spacing scale** (`--s1` to `--s7`) and **one font scale**
(`--fs-xs` to `--fs-2xl`). No padding or margin anywhere is a loose
number. Verdana runs wide and tall for its point size, so the scale sits
a step smaller than it would for a narrower face.

**Two widths**, because laptops are the main screen. `--measure` (52rem)
for lesson prose; `--measure-wide` (66rem) for the dashboard, unit list
and map, where the content is grids and rows rather than running text.
Long lines of body text get harder to track, not easier, so lessons
deliberately do not use the wider measure.

**Palette.** One muted teal does all the pointing; amber is reserved for
hints and the login retry. Nothing in the interface is red, so nothing
that reads as a mark ever appears in a warning colour. Change the tokens
at the top of `style.css` and the whole site follows.

| Token                        | Dark      | Light     |
| ---------------------------- | --------- | --------- |
| `--bg`                       | `#071A20` | `#F6F8F6` |
| `--surface` / `--surface-2`  | `#0C2830` / `#10333D` | `#FFFFFF` / `#EAF1EF` |
| `--chrome`                   | `#04141A` | `#FFFFFF` |
| `--line`                     | `#1E4A56` | `#CBD9D6` |
| `--text` / `--text-2`        | `#E4F1F0` / `#93B2B5` | `#11201F` / `#526665` |
| `--primary`                  | `#45B8A8` | `#0F7268` |
| `--accent`                   | `#E0A557` | `#915909` |

Light is a soft white, not stark `#FFFFFF`. Every text pair in both
themes clears WCAG AA; the tightest is 5.19:1.

**Two themes**, toggled from the header and remembered per browser. Dark
is the default. Header and footer move with the theme, and so do the
circuit traces — `--trace` is redrawn per theme with `--trace-opacity`
holding it well below anything that could touch text contrast.

A script in `<head>` applies the saved theme before first paint, so
there is no flash of the wrong background.

**Header and footer** carry that faint circuit-trace pattern as an
inline SVG data URI, plus a node-and-edge mark which is the prerequisite
graph itself: three nodes with an edge through them, the same idea as
the ladder rail. Footer columns are placeholders.

**Restraint.** No gradients, no glow, no shadows, no blur, no rounded
corners anywhere, and one animation in the whole stylesheet — a 0.12s
colour transition on interactive elements, disabled under
`prefers-reduced-motion`.

**Components are consistent.** One button treatment with three variants
(primary, outline, quiet) sharing hover, active and disabled states; one
input treatment across text fields, the select, the scratch pad and the
suggestion box; one card surface for cards, panels, examples and
figures.

**Short pages centre themselves** vertically and horizontally; long ones
grow and scroll from the top. Paragraphs and practice questions stay
left-aligned — centred body text is measurably harder to read, and the
kid who tires fastest is the one who would pay for it. Only the login
screen, which is three short lines, is centred as text.

**Narrow screens are laid out, not stacked.** The heading scale steps
down, nav spreads across its own row, unit cards go single-column, and
in the lesson list the number and status move to their own line so the
title gets full width instead of a squeezed middle column.

---

## Printing

Any topic prints as a plain worksheet: buttons, answers, hints, the
ladder and the pager are all stripped, and the working-out box expands.
Figures print with white fills and dark strokes so they survive a mono
printer. Learners whose `homework` is `'print'` get a print button at
the bottom of each topic.

---

## Not built yet

- A private, local-only tutor view over the stored confidence marks.
- Offline caching. Not needed while this is a laptop-in-session tool;
  worth adding if it ever moves to phones on mobile data.
- Grouping a learner's queue into named clusters rather than one flat
  list.
- Content for the other four learners, added as parents and teachers
  flag things.
- Footer columns.
