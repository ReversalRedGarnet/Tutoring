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
    topics: [
      'pc-01-what-is',
      'pc-02-why',
      'pc-03-representing',
      'pc-04-fdp',
      'pc-05-comparing',
      'pc-06-of-amounts',
      'pc-07-finding-whole',
      'pc-08-increase',
      'pc-09-decrease',
      'pc-10-change',
      'pc-11-word-problems',
      'pc-12-estimation',
      'pc-13-review'
    ]
  },

  {
    id: 'perimeter',
    title: 'Perimeter',
    blurb: 'Distance around a shape, including compound shapes and missing sides.',
    topics: [
      'pe-01-what-is',
      'pe-02-measuring',
      'pe-03-simple-shapes',
      'pe-04-formulas',
      'pe-05-missing-sides',
      'pe-06-irregular',
      'pe-07-compound',
      'pe-08-units',
      'pe-09-real-world',
      'pe-10-estimation',
      'pe-11-review'
    ]
  },

  {
    id: 'basic-area',
    title: 'Basic area',
    blurb: 'Rectangles, triangles, and shapes made by joining them together.',
    topics: [
      'ar-01-what-is',
      'ar-02-square-units',
      'ar-03-grids',
      'ar-04-rectangles',
      'ar-05-missing-dimensions',
      'ar-06-triangles',
      'ar-07-compound',
      'ar-08-missing-areas',
      'ar-09-unit-conversion',
      'ar-10-vs-perimeter',
      'ar-11-real-world',
      'ar-12-estimation',
      'ar-13-review'
    ]
  },

  {
    id: 'probability',
    title: 'Probability',
    blurb: 'Chance as a fraction, listing outcomes, and what "likely" actually means.',
    topics: [
      'pb-01-what-is',
      'pb-02-vocabulary',
      'pb-03-scale',
      'pb-04-likelihood',
      'pb-05-outcomes',
      'pb-06-as-a-fraction',
      'pb-07-experimental',
      'pb-08-theoretical',
      'pb-09-tables',
      'pb-10-complementary',
      'pb-11-comparing',
      'pb-12-real-world',
      'pb-13-misconceptions',
      'pb-14-review'
    ]
  }

];
