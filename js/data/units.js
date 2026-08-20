/* ------------------------------------------------------------------
   UNITS

   The layer between a learner and the topics. A learner's record lists
   unit ids; each unit lists its own topics in teaching order.

   A unit with an empty `topics` list is a placeholder. It shows on the
   dashboard as "Coming soon" and is not clickable, so nobody lands on
   an empty page.

     id      used in the URL:  #/u/fractions
     title   what shows on the card
     blurb   one line, what the unit covers
     topics  ordered topic ids. Order here drives the ladder, the
             previous/next pager, and the position counter.
   ------------------------------------------------------------------ */

window.UNITS = [

  {
    id: 'fractions',
    title: 'Fractions',
    blurb: 'From what a fraction is, through to dividing them and solving word problems.',
    topics: [
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
  },

  {
    id: 'decimals',
    title: 'Decimals',
    blurb: 'Place value after the point, rounding, the four operations, and how decimals link to fractions.',
    topics: [
      'dc-01-what-is',
      'dc-02-why',
      'dc-03-place-value',
      'dc-04-representing',
      'dc-05-reading-writing',
      'dc-06-comparing',
      'dc-07-equivalent',
      'dc-08-converting-fractions',
      'dc-09-rounding',
      'dc-10-add-subtract',
      'dc-11-multiplying',
      'dc-12-dividing',
      'dc-13-fdp',
      'dc-14-word-problems',
      'dc-15-estimation',
      'dc-16-review'
    ]
  },

  {
    id: 'percentages',
    title: 'Percentages',
    blurb: 'Percentages of amounts, increase and decrease, and converting between all three forms.',
    topics: []
  },

  {
    id: 'perimeter',
    title: 'Perimeter',
    blurb: 'Distance around a shape, including compound shapes and missing sides.',
    topics: []
  },

  {
    id: 'basic-area',
    title: 'Basic area',
    blurb: 'Rectangles, triangles, and shapes made by joining them together.',
    topics: []
  },

  {
    id: 'probability',
    title: 'Probability',
    blurb: 'Chance as a fraction, listing outcomes, and what "likely" actually means.',
    topics: []
  }

];
