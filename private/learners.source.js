/* ------------------------------------------------------------------
   PLAINTEXT SOURCE — NEVER COMMIT THIS FILE.

   This is the readable version of every learner record. `.gitignore`
   excludes it. Edit here, then run it through tools/encrypt.html to
   regenerate js/data/learners.js.

   The site never loads this file.

   Only Elliot has content so far. The others log in fine and see an
   empty list — their clusters get built when a parent or teacher flags
   something specific.
   ------------------------------------------------------------------ */

var LEARNERS_SOURCE = {

  elliot: {
    name: 'Elliot',
    password: 'woodford',
    record: {
      levels: ['AU-7'],
      subjects: ['maths'],
      homework: 'none',
      queue: [
        'fr-01-what-is',
        'fr-02-of-a-set',
        'fr-03-why',
        'fr-04-representing',
        'fr-05-types',
        'fr-06-like-unlike',
        'fr-07-equivalent',
        'fr-08-simplifying',
        'fr-09-comparing',
        'fr-10-converting',
        'fr-11-add-like',
        'fr-12-add-unlike',
        'fr-13-add-mixed',
        'fr-14-multiplying',
        'fr-15-dividing',
        'fr-16-word-problems',
        'fr-17-review'
      ]
    }
  },

  honitalo: {
    name: 'Honitalo',
    password: 'kaliki',
    record: { levels: ['SI-6'], subjects: [], homework: 'print', queue: [] }
  },

  letisha: {
    name: 'Letisha',
    password: 'rainbow',
    record: { levels: ['SI-7'], subjects: [], homework: 'print', queue: [] }
  },

  jordesh: {
    name: 'Jordesh',
    password: 'florence',
    record: { levels: ['SI-9'], subjects: [], homework: 'device', queue: [] }
  },

  yvonne: {
    name: 'Yvonne',
    password: 'chinatown',
    record: { levels: ['SI-10'], subjects: [], homework: 'device', queue: [] }
  }

};
