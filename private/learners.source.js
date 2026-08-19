/* ------------------------------------------------------------------
   PLAINTEXT SOURCE — NEVER COMMIT THIS FILE.

   This is the readable version of every learner record. `.gitignore`
   excludes it. Edit here, then run it through tools/encrypt.html to
   regenerate js/data/learners.js.

   The site never loads this file.

   `units` lists unit ids, in the order the learner should meet them.
   The topics inside each unit are defined in js/data/units.js, not
   here — so adding a topic to a unit does not mean re-encrypting
   anybody.

   Only Fractions has content so far. The other units show on the
   dashboard as "Coming soon".
   ------------------------------------------------------------------ */

var LEARNERS_SOURCE = {

  elliot: {
    name: 'Elliot',
    password: 'woodford',
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

  honitalo: {
    name: 'Honitalo',
    password: 'kaliki',
    record: { levels: ['SI-6'], subjects: [], homework: 'print', units: [] }
  },

  letisha: {
    name: 'Letisha',
    password: 'rainbow',
    record: { levels: ['SI-7'], subjects: [], homework: 'print', units: [] }
  },

  jordesh: {
    name: 'Jordesh',
    password: 'florence',
    record: { levels: ['SI-9'], subjects: [], homework: 'device', units: [] }
  },

  yvonne: {
    name: 'Yvonne',
    password: 'chinatown',
    record: { levels: ['SI-10'], subjects: [], homework: 'device', units: [] }
  }

};
