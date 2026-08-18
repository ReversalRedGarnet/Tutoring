/* ------------------------------------------------------------------
   LEARNERS

   This file is PUBLIC. It goes in a public repo and stays there forever.

   What belongs here:  a slug, a display name, the levels they work at,
                       and an ordered list of topic ids.
   What does NOT:      real names, ages, schools, marks, grades, comments
                       on how anyone is doing, anything from the profile
                       spreadsheet. Keep that in a private file that is
                       never committed.

   ABOUT `pass`
   ------------
   This is a name tag, not a lock. The site is a static page with no
   server, so anything it knows, the browser knows, and anyone can read
   it. The hash below stops one kid from reading another kid's password
   over their shoulder or out of the repo. It stops nothing else.

   Which is fine, because there is nothing sensitive behind it. Keep it
   that way: the moment real notes or marks go on this site, the password
   stops being adequate.

   These passwords must not be ones the kids use anywhere else.

   To change one: open the site, open the browser console, and run
       Auth.hash('newword')
   then paste the result in as `pass`.

   homework: 'print'  -> show a "Print worksheet" button on each topic
             'device' -> they have a device at home
             'none'   -> sessions only
   ------------------------------------------------------------------ */

window.LEARNERS = {

  luffy: {
    display: 'Luffy',
    pass: '7921ecf0',
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

  cr7: {
    display: 'CR7',
    pass: 'dbd979bb',
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

  moana: {
    display: 'Moana',
    pass: '7be7012e',
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

  hinata: {
    display: 'Hinata',
    pass: '32c0d458',
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

  rewa: {
    display: 'Rewa',
    pass: '76553a1b',
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
