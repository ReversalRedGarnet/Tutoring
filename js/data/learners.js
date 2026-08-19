/* ------------------------------------------------------------------
   LEARNERS

   Real names are in this file. That is only acceptable while the repo
   is private and the parents have agreed to it. Both of those are true
   right now — keep checking that they still are.

   What belongs here:  name, nickname, code, levels, and an ordered list
                       of topic ids.
   What does NOT:      ages, schools, marks, grades, comments on how
                       anyone is doing, anything from the profile
                       spreadsheet. Keep that in a private file that is
                       never committed.

   Note that `queue` is now readable as "what this named child is
   struggling with". That is a step up in sensitivity from a slug and a
   topic list. It is fine in a private repo and it is not fine in a
   public one.

   ABOUT `code`
   ------------
   A name tag, not a lock. The site is static with no server, so the
   check runs in the browser and the browser can be read. The hash below
   stops one kid reading another kid's code over a shoulder or out of the
   file. It stops nothing else.

   To change one: open the site, open the browser console, and run
       Auth.hash('newword')
   then paste the result in as `code`.

   homework: 'print'  -> show a "Print worksheet" button on each topic
             'device' -> they have a device at home
             'none'   -> sessions only
   ------------------------------------------------------------------ */

window.LEARNERS = {

  elliot: {
    name: 'Elliot',
    nickname: 'Luffy',
    code: '7921ecf0',
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

  honitalo: {
    name: 'Honitalo',
    nickname: 'CR7',
    code: 'dbd979bb',
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

  letisha: {
    name: 'Letisha',
    nickname: 'Moana',
    code: '7be7012e',
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

  jordesh: {
    name: 'Jordesh',
    nickname: 'Hinata',
    code: '32c0d458',
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

  yvonne: {
    name: 'Yvonne',
    nickname: 'Rewa',
    code: '76553a1b',
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
