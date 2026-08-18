/* ------------------------------------------------------------------
   LEARNERS

   This file is PUBLIC. It goes in a public repo and stays there forever.

   What belongs here:  a slug, the levels they work at, and an ordered
                       list of topic ids.
   What does NOT:      names, ages, schools, marks, grades, comments on
                       how they are doing, anything from the profile
                       spreadsheet. Keep that in a private file that is
                       never committed.

   homework: 'print'  -> show a "Print worksheet" button at the end
             'device' -> show the next topic as take-home
             'none'   -> sessions only
   ------------------------------------------------------------------ */

window.LEARNERS = {

  kingfisher: {
    levels: ['AU-7'],
    subjects: ['maths'],
    homework: 'none',
    queue: [
      'm6-frac-equiv',
      'm7-frac-add-unlike',
      'm7-frac-mult',
      'm7-integers'
    ]
  },

  hornbill: {
    levels: ['SI-6'],
    subjects: ['maths', 'english', 'science', 'health', 'social-studies', 'history'],
    homework: 'print',
    queue: [
      'm6-place-value',
      'm6-frac-equiv',
      'm6-lcm',
      'e6-sentence-parts',
      's6-states-matter',
      'ss6-provinces',
      'h6-early-settlement',
      'hl6-nutrition'
    ]
  },

  frigate: {
    levels: ['SI-7'],
    subjects: ['maths', 'english', 'science', 'health', 'social-studies', 'history', 'agriculture'],
    homework: 'print',
    queue: [
      'm6-frac-equiv',
      'm7-frac-add-unlike',
      'e6-sentence-parts',
      's7-cells',
      'hl6-nutrition',
      'ag7-soil',
      'h6-early-settlement'
    ]
  },

  myna: {
    levels: ['SI-9'],
    subjects: ['maths', 'english', 'science', 'social-studies'],
    homework: 'device',
    queue: [
      'm7-integers',
      'm9-linear-eq',
      's9-forces',
      'e9-paragraph-argument',
      'ss9-government'
    ]
  },

  eagle: {
    levels: ['SI-10'],
    subjects: ['maths', 'english', 'science', 'social-studies'],
    homework: 'device',
    queue: [
      'm9-linear-eq',
      'm10-quadratic-factor',
      's10-chem-reactions',
      'e9-paragraph-argument',
      'ss9-government'
    ]
  }

};
