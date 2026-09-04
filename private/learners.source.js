/* ------------------------------------------------------------------
   PLAINTEXT SOURCE — NEVER COMMIT THIS FILE.

   This is the readable version of every learner record. `.gitignore`
   excludes it. Edit here, then run it through tools/encrypt.html to
   regenerate js/data/learners.js.

   The site never loads this file.

   ------------------------------------------------------------------
   READ THIS BEFORE YOU COMMIT ANYTHING

   An earlier version of this file WAS committed, because the ignore
   file in the repository root was named `gitignore` rather than
   `.gitignore` and therefore did nothing at all. The passwords below
   have been rotated for that reason. Tell each learner their new one.

   Removing the file now does not remove it from git history. If the
   repository has ever been pushed anywhere, treat the OLD passwords as
   public forever. The new ones are only safe if this file never gets
   committed again — check `git status` before every commit.
   ------------------------------------------------------------------

   `units` lists unit ids, in the order the learner should meet them.
   The topics inside each unit are defined in js/data/units.js, not
   here — so adding a topic to a unit does not mean re-encrypting
   anybody.
   ------------------------------------------------------------------ */

var LEARNERS_SOURCE = {

  elliot: {
    name: 'Elliot',
    password: 'harbourline',
    record: {
      levels: ['AU-7'],
      subjects: ['maths'],
      homework: 'none',
      units: [
        'fractions',
        'decimals',
        'percentages',
        'perimeter',
        'basic-area',
        'probability'
      ]
    }
  },

  /* Year 6 — last year of primary. Number first, because the four
     operations on large numbers are what everything in Form 1 assumes
     is already automatic. Measurement follows. */
  honitalo: {
    name: 'Honitalo',
    password: 'thunderreef',
    record: {
      levels: ['SI-6'],
      subjects: ['maths'],
      homework: 'print',
      units: [
        'number-money',
        'perimeter',
        'basic-area',
        'fractions'
      ]
    }
  },

  /* Year 7 / Form 1. Directed numbers first: it is the new idea this
     year and the one that quietly breaks algebra later if it is shaky.
     Then the fraction, decimal and percentage chain. */
  letisha: {
    name: 'Letisha',
    password: 'seabirdmorning',
    record: {
      levels: ['SI-7'],
      subjects: ['maths'],
      homework: 'print',
      units: [
        'directed-numbers',
        'fractions',
        'decimals',
        'percentages'
      ]
    }
  },

  /* Year 9 / Form 3. Algebra is the spine of the year. Percentages and
     probability sit alongside it as the applied strands. */
  jordesh: {
    name: 'Jordesh',
    password: 'lanternvalley',
    record: {
      levels: ['SI-9'],
      subjects: ['maths'],
      homework: 'device',
      units: [
        'algebra',
        'percentages',
        'probability'
      ]
    }
  },

  /* Year 10 / Form 4. Straight lines first, because that is where she
     actually is. The algebra unit sits behind it rather than in front:
     every linear topic names its algebra prerequisites, so the ladder
     rail sends her back to whichever one is missing instead of making
     her re-walk a whole year she may not need. */
  yvonne: {
    name: 'Yvonne',
    password: 'coconutafternoon',
    record: {
      levels: ['SI-10'],
      subjects: ['maths'],
      homework: 'device',
      units: [
        'straight-lines',
        'algebra',
        'percentages'
      ]
    }
  }

};
