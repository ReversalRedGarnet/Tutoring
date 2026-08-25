/* ------------------------------------------------------------------
   PERIMETER — a full sequential block, AU Year 7.

   The first measurement unit. It leans back into Decimals for unit
   conversion, because converting cm to m is a decimal-point move and
   nothing else.

   This unit uses the `figure` field heavily. Perimeter is one of the
   few topics where the shape IS the lesson — a learner who cannot see
   which lines are on the outside cannot be talked through it. Figures
   are inline SVG using the f-* classes from style.css.

   The single biggest trap in the unit is counting an internal line on
   a compound shape. That gets its own topic, its own figure, and a
   named false rule.
   ------------------------------------------------------------------ */

window.TOPICS = window.TOPICS || [];

window.TOPICS.push(

/* ============================================================ 1 */
{
  id: 'pe-01-what-is',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'What is perimeter?',
  type: 'concept',
  tier: 'taught',
  prereqs: [],
  one_idea: 'Perimeter is the distance all the way around the outside of a shape.',
  sections: [
    {
      h: 'Walking the edge',
      p: ['Put a finger on one corner and trace the whole way round until you get back to where you started. The distance your finger travelled is the perimeter.'],
      figure: {
        caption: 'A rectangle with its outside edge traced in a highlight colour, showing the path a finger takes all the way around.',
        svg: '<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg"><rect class="f-shape" x="50" y="40" width="200" height="90"/><path class="f-mark" d="M50 40h200v90H50z"/><circle class="f-fill" cx="50" cy="40" r="7"/><text class="f-dim" x="20" y="30">start</text></svg>'
      },
      rule: 'Perimeter is a length. It is measured in mm, cm, m or km — never in squares.'
    },
    {
      h: 'Perimeter is not area',
      p: ['These two get mixed up constantly, so it is worth separating them on the very first day.'],
      list: [
        'Perimeter  —  the fence around the paddock',
        'Area       —  the grass inside the paddock'
      ],
      note: 'If the question is about fencing, edging, framing or a border, it is perimeter. If it is about covering, painting or filling, it is area.'
    },
    {
      h: 'Adding up the sides',
      example: {
        label: 'Example',
        lines: [
          'A triangle with sides 5 cm, 7 cm and 9 cm',
          '',
          '5 + 7 + 9  =  21',
          '',
          'Perimeter = 21 cm'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'Perimeter is how much space is inside', why: 'That is area. Perimeter is the distance around the edge, which is a length, not a space.' }
  ],
  practice: [
    { q: 'A triangle has sides 4 cm, 6 cm and 8 cm. What is its perimeter?', a: '18 cm', hint: 'Add all three.' },
    { q: 'In one sentence, what is the difference between perimeter and area?', a: 'Perimeter is the distance around the outside; area is the space inside.', hint: null },
    { q: 'A farmer needs to fence a field. Is that perimeter or area?', a: 'Perimeter.', hint: 'Fences go around the edge.' },
    { q: 'A shape has four sides: 3 m, 5 m, 3 m and 5 m. What is its perimeter?', a: '16 m', hint: null },
    { q: 'Why is a perimeter never measured in cm squared?', a: 'Perimeter is a length, not an amount of surface.', hint: null }
  ],
  retrieval: [
    { q: 'What does perimeter measure?', a: 'The distance around the outside of a shape.' },
    { q: 'Sides of 2 cm, 2 cm and 5 cm. Perimeter?', a: '9 cm' }
  ]
},

/* ============================================================ 2 */
{
  id: 'pe-02-measuring',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Measuring length',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pe-01-what-is', 'dc-11-multiplying'],
  one_idea: 'The metric units all step by 10, 100 or 1000, so converting is only ever a decimal-point move.',
  sections: [
    {
      h: 'The ladder',
      example: {
        label: 'The four units',
        lines: [
          '10 mm    =  1 cm',
          '100 cm   =  1 m',
          '1000 m   =  1 km',
          '',
          'so also   1000 mm  =  1 m'
        ]
      },
      rule: 'Going to a smaller unit, multiply. Going to a bigger unit, divide. The number of pieces goes up when the pieces get smaller.'
    },
    {
      h: 'Converting is a point move',
      p: ['Because every step is a power of ten, no long multiplication is needed. The digits stay in the same order and the point moves.'],
      example: {
        label: 'Example',
        lines: [
          '3.5 m   ->  cm      x100     350 cm',
          '48 mm   ->  cm      /10      4.8 cm',
          '2400 m  ->  km      /1000    2.4 km',
          '0.7 km  ->  m       x1000    700 m'
        ]
      }
    },
    {
      h: 'Choosing a sensible unit',
      list: [
        'mm  —  the thickness of a coin, a screw',
        'cm  —  a pencil, a book, a phone',
        'm   —  a room, a car, a person',
        'km  —  a road, a run, a distance between towns'
      ],
      note: 'An answer of 0.000004 km is correct and useless. Pick the unit that keeps the number readable.'
    }
  ],
  confusable_with: [
    { label: 'Converting to a smaller unit makes the number smaller', why: 'It makes it bigger. 1 m is 100 cm — smaller pieces means more of them.' },
    { label: '1 m = 10 cm', why: 'It is 100 cm. Only mm to cm is a step of 10.' }
  ],
  practice: [
    { q: 'Convert 4 m to cm.', a: '400 cm', hint: 'x100.' },
    { q: 'Convert 65 mm to cm.', a: '6.5 cm', hint: '/10.' },
    { q: 'Convert 1.8 km to m.', a: '1800 m', hint: null },
    { q: 'Convert 250 cm to m.', a: '2.5 m', hint: '/100.' },
    { q: 'Which unit would you use for the length of a football field?', a: 'Metres.', hint: null },
    { q: 'Convert 0.4 m to mm.', a: '400 mm', hint: 'x1000.' }
  ],
  retrieval: [
    { q: 'How many cm in a metre?', a: '100.' },
    { q: 'Convert 30 mm to cm.', a: '3 cm' }
  ]
},

/* ============================================================ 3 */
{
  id: 'pe-03-simple-shapes',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Perimeter of simple shapes',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pe-01-what-is'],
  one_idea: 'Add every side once. Going round the shape in order stops you missing one.',
  sections: [
    {
      h: 'Go round in order',
      p: ['Start at one corner and work your way round the same direction. Write each length down as you pass it. This is slower than jumping about and it is why you will not lose a side.'],
      figure: {
        caption: 'A rectangle labelled 8 cm along the top and bottom and 3 cm up each side.',
        svg: '<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg"><rect class="f-shape" x="60" y="45" width="180" height="80"/><g class="f-label f-mid"><text x="150" y="36">8 cm</text><text x="150" y="145">8 cm</text></g><text class="f-label" x="250" y="90">3 cm</text><text class="f-label f-end" x="52" y="90">3 cm</text></svg>'
      },
      example: {
        label: 'Example',
        lines: [
          'Rectangle 8 cm by 3 cm',
          '',
          '8 + 3 + 8 + 3  =  22',
          '',
          'Perimeter = 22 cm'
        ]
      }
    },
    {
      h: 'Squares',
      p: ['A square has four equal sides, so one multiplication does the whole job.'],
      example: {
        label: 'Example',
        lines: [
          'Square with side 6 cm',
          '',
          '6 x 4  =  24',
          '',
          'Perimeter = 24 cm'
        ]
      },
      rule: 'Every side gets counted exactly once. Not the ones you can see — all of them.'
    },
    {
      h: 'Other polygons',
      p: ['A pentagon has five sides, a hexagon six. Regular means all sides equal, so the same shortcut applies: side length times number of sides.'],
      note: 'If the shape is not regular, there is no shortcut. Add the sides one at a time.'
    }
  ],
  confusable_with: [
    { label: 'A rectangle only needs its two labelled sides added', why: 'A rectangle has four sides. 8 + 3 is 11, not 22. The other two are the same lengths again.' },
    { label: 'Perimeter means multiply the sides', why: 'That is area. Perimeter adds them.' }
  ],
  practice: [
    { q: 'A rectangle is 10 cm by 4 cm. What is its perimeter?', a: '28 cm', hint: '10 + 4 + 10 + 4.' },
    { q: 'A square has sides of 9 m. What is its perimeter?', a: '36 m', hint: '9 x 4.' },
    { q: 'A triangle has sides 12 mm, 12 mm and 7 mm. Perimeter?', a: '31 mm', hint: null },
    { q: 'A regular pentagon has sides of 5 cm. Perimeter?', a: '25 cm', hint: 'Five sides.' },
    { q: 'A four-sided shape has sides 6 m, 2 m, 5 m and 3 m. Perimeter?', a: '16 m', hint: null },
    { q: 'A rectangle is 7.5 cm by 2.5 cm. Perimeter?', a: '20 cm', hint: null }
  ],
  retrieval: [
    { q: 'Perimeter of a square with side 5 cm?', a: '20 cm' },
    { q: 'How many sides does a rectangle have?', a: 'Four.' }
  ]
},

/* ============================================================ 4 */
{
  id: 'pe-04-formulas',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Perimeter formulas',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pe-03-simple-shapes'],
  one_idea: 'A formula is not a new rule — it is the adding you were already doing, written shorter.',
  sections: [
    {
      h: 'Where the rectangle formula comes from',
      p: ['A rectangle has two lengths and two widths. Adding them in pairs gives the shorter version.'],
      example: {
        label: 'Example',
        lines: [
          'l  +  w  +  l  +  w',
          '',
          '=  l + l  +  w + w',
          '=  2l  +  2w',
          '=  2 x (l + w)',
          '',
          'All three lines are the same sum.'
        ]
      },
      rule: 'Rectangle:  P = 2 x (length + width).  Square:  P = 4 x side.'
    },
    {
      h: 'Using it',
      example: {
        label: 'Example',
        lines: [
          'Rectangle 14 m by 6 m',
          '',
          '14 + 6   =  20',
          '20 x 2   =  40',
          '',
          'Perimeter = 40 m'
        ]
      },
      note: 'Add first, then double. Doubling one side before adding the other is the most common slip.'
    },
    {
      h: 'If you forget it',
      p: ['You do not need it. Draw the shape, label all four sides and add them. The formula saves time; it is not the only way in.'],
      rule: 'Never use a formula you cannot rebuild. If you can draw the shape, you can always get the answer back.'
    }
  ],
  confusable_with: [
    { label: 'P = 2 x length + width', why: 'The brackets matter. 2 x (14 + 6) is 40; 2 x 14 + 6 is 34. Both sides get doubled, not just one.' },
    { label: 'P = l x w', why: 'That is the area of a rectangle. Perimeter adds; area multiplies.' }
  ],
  practice: [
    { q: 'Use the formula: rectangle 12 cm by 5 cm.', a: '34 cm', hint: '(12 + 5) x 2.' },
    { q: 'Use the formula: square with side 11 m.', a: '44 m', hint: null },
    { q: 'Rectangle 20 mm by 20 mm. What shape is it, and what is its perimeter?', a: 'A square. 80 mm.', hint: null },
    { q: 'Write the rectangle formula in words.', a: 'Add the length and the width, then double it.', hint: null },
    { q: 'A student calculates 2 x 9 + 4 = 22 for a 9 cm by 4 cm rectangle. What went wrong?', a: 'Only the 9 was doubled. It should be 2 x (9 + 4) = 26 cm.', hint: null },
    { q: 'Rectangle 6.5 m by 3.5 m.', a: '20 m', hint: null }
  ],
  retrieval: [
    { q: 'What is the perimeter formula for a rectangle?', a: '2 x (length + width).' },
    { q: 'Rectangle 10 cm by 2 cm. Perimeter?', a: '24 cm' }
  ]
},

/* ============================================================ 5 */
{
  id: 'pe-05-missing-sides',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Finding a missing side',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pe-04-formulas'],
  one_idea: 'Add the sides you know, then subtract that from the perimeter.',
  sections: [
    {
      h: 'The question turned around',
      p: ['Usually the sides are given and the perimeter is missing. Here it is the other way round.'],
      example: {
        label: 'Example',
        lines: [
          'A triangle has perimeter 20 cm.',
          'Two sides are 6 cm and 9 cm.',
          '',
          'known sides   6 + 9   =  15',
          'missing side  20 - 15 =  5',
          '',
          'Answer: 5 cm'
        ]
      },
      rule: 'Total, minus what you have, equals what is missing.'
    },
    {
      h: 'Rectangles need one extra step',
      p: ['In a rectangle the missing side appears twice, so halve the perimeter first and you are working with just one length and one width.'],
      example: {
        label: 'Example',
        lines: [
          'A rectangle has perimeter 30 m and a length of 9 m.',
          '',
          'half the perimeter   30 / 2  =  15      (one length + one width)',
          'width                15 - 9  =  6',
          '',
          'Answer: 6 m'
        ]
      },
      note: 'Halving first is what stops you subtracting 9 from 30 and getting 21.'
    }
  ],
  confusable_with: [
    { label: 'Subtract the known side from the perimeter', why: 'In a rectangle that side appears twice. Halve the perimeter first, then subtract once.' }
  ],
  practice: [
    { q: 'A triangle has perimeter 24 cm. Two sides are 7 cm and 8 cm. Find the third.', a: '9 cm', hint: null },
    { q: 'A rectangle has perimeter 26 cm and a width of 4 cm. Find the length.', a: '9 cm', hint: 'Half of 26 is 13.' },
    { q: 'A square has perimeter 36 m. How long is one side?', a: '9 m', hint: 'Divide by 4.' },
    { q: 'A four-sided shape has perimeter 40 cm. Three sides are 12, 8 and 11 cm. Find the fourth.', a: '9 cm', hint: null },
    { q: 'A rectangle has perimeter 50 m and a length of 15 m. Find the width.', a: '10 m', hint: null },
    { q: 'A square has perimeter 22 cm. How long is one side?', a: '5.5 cm', hint: 'It does not have to be a whole number.' }
  ],
  retrieval: [
    { q: 'A square has perimeter 20 cm. What is one side?', a: '5 cm' },
    { q: 'What do you do first when finding a missing side of a rectangle?', a: 'Halve the perimeter.' }
  ]
},

/* ============================================================ 6 */
{
  id: 'pe-06-irregular',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Irregular shapes',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pe-03-simple-shapes'],
  one_idea: 'No formula exists for these, and none is needed — go round and add.',
  sections: [
    {
      h: 'Why there is no shortcut',
      p: ['A formula works because a shape has a pattern in its sides. An irregular shape has no pattern, so every side has to be added on its own.'],
      figure: {
        caption: 'A six-sided irregular shape with each side labelled: 5 cm, 3 cm, 4 cm, 6 cm, 2 cm and 7 cm.',
        svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg"><path class="f-shape" d="M50 40h100l40 40v50h-60l-30 40H50z"/><g class="f-label"><text x="95" y="32">5 cm</text><text x="172" y="58">3 cm</text><text x="196" y="110">4 cm</text><text x="140" y="148">6 cm</text><text x="112" y="185">2 cm</text><text class="f-end" x="42" y="115">7 cm</text></g></svg>'
      },
      example: {
        label: 'Example',
        lines: [
          '5 + 3 + 4 + 6 + 2 + 7  =  27',
          '',
          'Perimeter = 27 cm'
        ]
      }
    },
    {
      h: 'Keeping track',
      list: [
        'Mark your starting corner',
        'Go round one direction only',
        'Tick each side as you add it',
        'Stop when you reach the mark again'
      ],
      rule: 'Tick the sides off as you go. A missed side and a doubled side look identical once the pencil is down.'
    }
  ],
  confusable_with: [
    { label: 'Irregular shapes need a special formula', why: 'They need no formula. Adding every side works on every shape, including the ones that do have formulas.' }
  ],
  practice: [
    { q: 'A shape has sides 4, 7, 2, 9 and 6 cm. Perimeter?', a: '28 cm', hint: null },
    { q: 'A five-sided shape has sides 11, 8, 8, 15 and 3 m. Perimeter?', a: '45 m', hint: null },
    { q: 'Why does an irregular shape have no perimeter formula?', a: 'Its sides follow no pattern, so there is nothing to shorten.', hint: null },
    { q: 'A shape has sides 2.5, 3.5, 4 and 6 cm. Perimeter?', a: '16 cm', hint: null },
    { q: 'What is the safest way to make sure no side is counted twice?', a: 'Start at one corner, go one direction, tick each side off.', hint: null }
  ],
  retrieval: [
    { q: 'Sides of 3, 5 and 8 m. Perimeter?', a: '16 m' },
    { q: 'Does an irregular shape need a formula?', a: 'No — add every side.' }
  ]
},

/* ============================================================ 7 */
{
  id: 'pe-07-compound',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Compound shapes',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pe-06-irregular', 'pe-05-missing-sides'],
  one_idea: 'Only the outside counts. Any line inside the shape is not part of the perimeter.',
  sections: [
    {
      h: 'The line that is not there',
      p: ['Compound shapes are drawn as two rectangles joined together, and the join is often still visible in the drawing. That line is a construction line. Your finger never travels along it.'],
      figure: {
        caption: 'An L-shaped figure. The outside edge is highlighted; a dashed line inside shows where two rectangles were joined, and it is not part of the outside path.',
        svg: '<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg"><path class="f-shape" d="M40 30h200v80h-80v80H40z"/><path class="f-dash" d="M40 110h120"/><path class="f-mark" d="M40 30h200v80h-80v80H40z"/><g class="f-label"><text class="f-mid" x="140" y="22">10 cm</text><text x="248" y="75">4 cm</text><text class="f-mid" x="200" y="126">4 cm</text><text x="168" y="155">4 cm</text><text class="f-mid" x="100" y="205">6 cm</text><text class="f-end" x="32" y="115">8 cm</text></g></svg>'
      },
      example: {
        label: 'Example',
        lines: [
          '10 + 4 + 4 + 4 + 6 + 8  =  36',
          '',
          'Perimeter = 36 cm',
          '',
          'The dashed line is not in the sum.'
        ]
      },
      rule: 'Trace the outside with your finger. If your finger does not touch it, it is not in the perimeter.'
    },
    {
      h: 'Finding the sides they did not label',
      p: ['Compound shapes usually leave one or two lengths blank. The opposite sides of the whole figure have to match up, so the missing one can be worked out.'],
      example: {
        label: 'Example',
        lines: [
          'The full width across the top is 10 cm.',
          'The bottom section is 6 cm wide.',
          '',
          'the step across   10 - 6  =  4 cm',
          '',
          'Same idea vertically:  8 - 4  =  4 cm'
        ]
      },
      note: 'The horizontal sides on the top must total the same as the horizontal sides on the bottom. Same for the vertical ones. That is where every missing length comes from.'
    }
  ],
  confusable_with: [
    { label: 'The join between the two rectangles counts as a side', why: 'It is inside the shape. A fence around this block of land would never run along it.' },
    { label: 'Work out each rectangle separately and add the two perimeters', why: 'That counts the join twice and gives a bigger answer than the real outside path.' }
  ],
  practice: [
    { q: 'An L-shape has outside sides 10, 4, 4, 4, 6 and 8 cm. Perimeter?', a: '36 cm', hint: 'Add all six.' },
    { q: 'Does an internal join line count towards perimeter?', a: 'No.', hint: null },
    { q: 'A compound shape is 12 cm across the top. The bottom-left section is 7 cm wide. How wide is the step?', a: '5 cm', hint: '12 - 7.' },
    { q: 'A shape is 9 m tall on the left and the upper section is 5 m tall. How tall is the lower step?', a: '4 m', hint: null },
    { q: 'Why is adding the perimeters of both rectangles wrong?', a: 'It counts the shared join twice, but that line is not on the outside at all.', hint: null },
    { q: 'An L-shape has sides 8, 3, 3, 4, 5 and 7 m. Perimeter?', a: '30 m', hint: null }
  ],
  retrieval: [
    { q: 'Do internal lines count towards perimeter?', a: 'No — only the outside edge.' },
    { q: 'A shape is 10 cm wide at the top and 4 cm at the bottom step. How wide is the other step?', a: '6 cm' }
  ]
},

/* ============================================================ 8 */
{
  id: 'pe-08-units',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Perimeter with mixed units',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pe-02-measuring', 'pe-04-formulas'],
  one_idea: 'Convert every side to the same unit before adding anything.',
  sections: [
    {
      h: 'You cannot add cm to m',
      p: ['Adding 3 m and 40 cm gives 43 of nothing. The units have to match first, and it does not matter which one you choose as long as you choose one.'],
      example: {
        label: 'Example',
        lines: [
          'A rectangle 2 m by 50 cm',
          '',
          'in cm:   200 + 50 + 200 + 50   =  500 cm',
          'in m:    2 + 0.5 + 2 + 0.5     =  5 m',
          '',
          'Same answer. 500 cm is 5 m.'
        ]
      },
      rule: 'Convert first, add second. Then write the unit on the answer.'
    },
    {
      h: 'Which unit to convert to',
      list: [
        'Going to the smaller unit avoids decimals — good when you find decimals fiddly',
        'Going to the larger unit keeps the numbers short — good when they are big',
        'Either is correct, so pick the one that makes the arithmetic easier'
      ],
      note: 'A number with no unit is not an answer. "22" could be millimetres or kilometres.'
    }
  ],
  confusable_with: [
    { label: 'Units can be sorted out at the end', why: 'Adding mismatched units gives a number that means nothing, and no amount of converting afterwards will fix it.' }
  ],
  practice: [
    { q: 'A rectangle is 3 m by 80 cm. Perimeter in metres?', a: '7.6 m', hint: '80 cm is 0.8 m.' },
    { q: 'A triangle has sides 40 mm, 6 cm and 5 cm. Perimeter in cm?', a: '15 cm', hint: '40 mm is 4 cm.' },
    { q: 'A square has sides of 1.2 m. Perimeter in cm?', a: '480 cm', hint: null },
    { q: 'A rectangle is 250 cm by 1.5 m. Perimeter in metres?', a: '8 m', hint: '250 cm is 2.5 m.' },
    { q: 'Why is "3 m + 40 cm = 43" wrong?', a: 'The units do not match, so the 3 and the 40 are not counting the same thing.', hint: null }
  ],
  retrieval: [
    { q: 'Before adding sides in different units, what must you do?', a: 'Convert them all to one unit.' },
    { q: 'Convert 80 cm to metres.', a: '0.8 m' }
  ]
},

/* ============================================================ 9 */
{
  id: 'pe-09-real-world',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Perimeter in real situations',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pe-07-compound', 'pe-08-units'],
  one_idea: 'Perimeter answers the question "how much do I need to go around it?"',
  sections: [
    {
      h: 'Where it shows up',
      list: [
        'Fencing a paddock or a yard',
        'Skirting board around a room',
        'A frame around a picture',
        'Edging a garden bed',
        'Ribbon around a box',
        'Running one lap of an oval'
      ],
      rule: 'If the material goes around the edge, you need perimeter. If it covers the middle, you need area.'
    },
    {
      h: 'A gate changes the answer',
      p: ['Real questions often add or remove a piece of the boundary. Work out the full perimeter first, then adjust.'],
      example: {
        label: 'Example',
        lines: [
          'A yard 12 m by 8 m needs fencing, with a 3 m gate.',
          '',
          'perimeter    2 x (12 + 8)  =  40 m',
          'less gate    40 - 3        =  37 m',
          '',
          'Answer: 37 m of fencing'
        ]
      },
      note: 'Read the last sentence of the question again before writing the answer. It is usually where the twist is.'
    },
    {
      h: 'Cost questions',
      example: {
        label: 'Example',
        lines: [
          'Fencing costs $15 per metre. The yard above needs 37 m.',
          '',
          '37 x 15  =  555',
          '',
          'Answer: $555'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'A room needing carpet is a perimeter question', why: 'Carpet covers the floor, so that is area. Skirting board around the same room is perimeter.' }
  ],
  practice: [
    { q: 'A rectangular garden is 9 m by 5 m. How much edging goes around it?', a: '28 m', hint: null },
    { q: 'A yard is 15 m by 10 m with a 4 m gate. How much fencing is needed?', a: '46 m', hint: 'Perimeter is 50 m.' },
    { q: 'A square room has sides of 4 m. Skirting board costs $8 per metre. What is the cost?', a: '$128', hint: '16 m of board.' },
    { q: 'A picture is 30 cm by 20 cm. How much frame is needed?', a: '100 cm', hint: null },
    { q: 'An oval track is 400 m around. How far is 3 laps?', a: '1200 m, or 1.2 km', hint: null },
    { q: 'Is painting a wall a perimeter or an area question?', a: 'Area — the paint covers the surface.', hint: null }
  ],
  retrieval: [
    { q: 'Fencing a paddock: perimeter or area?', a: 'Perimeter.' },
    { q: 'A 10 m by 6 m yard with a 2 m gate. How much fencing?', a: '30 m' }
  ]
},

/* ============================================================ 10 */
{
  id: 'pe-10-estimation',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Estimating and checking',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pe-04-formulas'],
  one_idea: 'Round each side to something easy, add those, and see whether your real answer lands nearby.',
  sections: [
    {
      h: 'Rough first, exact second',
      example: {
        label: 'Example',
        lines: [
          'A rectangle 9.8 m by 4.2 m',
          '',
          'about 10 by about 4',
          '2 x (10 + 4)  =  28 m       the estimate',
          '',
          'Exact:  2 x (9.8 + 4.2)  =  28 m',
          '',
          'Right on it, so it is believable.'
        ]
      }
    },
    {
      h: 'Sense checks that catch real mistakes',
      list: [
        'The perimeter must be bigger than the longest single side',
        'For a rectangle it must be more than double the longest side',
        'The unit on the answer must be a length unit, not a squared one'
      ],
      rule: 'If the perimeter came out smaller than one of the sides, a side was missed.',
      note: 'These checks find the two mistakes that actually happen: a dropped side, and area rules used by accident.'
    }
  ],
  confusable_with: [
    { label: 'Estimating is a waste of time if you can do it exactly', why: 'The estimate is not there to get the answer. It is there to tell you when the exact answer is wrong.' }
  ],
  practice: [
    { q: 'Estimate the perimeter of a rectangle 11.9 m by 5.1 m.', a: 'About 34 m — roughly 12 by 5.', hint: null },
    { q: 'A student says a 7 cm by 3 cm rectangle has perimeter 21 cm. What went wrong?', a: 'They multiplied. That is the area. The perimeter is 20 cm.', hint: null },
    { q: 'A student gets 6 cm as the perimeter of a shape with a 9 cm side. Why is that impossible?', a: 'The perimeter includes that 9 cm side, so it must be more than 9 cm.', hint: null },
    { q: 'Estimate the perimeter of a square with side 19.7 cm.', a: 'About 80 cm.', hint: null },
    { q: 'Estimate the perimeter of a triangle with sides 4.9, 7.1 and 9.8 m.', a: 'About 22 m.', hint: null }
  ],
  retrieval: [
    { q: 'Can a perimeter be smaller than one of the sides?', a: 'No.' },
    { q: 'Estimate the perimeter of a 9.9 cm by 5.2 cm rectangle.', a: 'About 30 cm.' }
  ]
},

/* ============================================================ 11 */
{
  id: 'pe-11-review',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Perimeter review',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pe-09-real-world', 'pe-10-estimation'],
  one_idea: 'Every question in this unit is answered by tracing the outside and adding.',
  sections: [
    {
      h: 'The unit on one page',
      example: {
        label: 'Summary',
        lines: [
          'meaning        distance around the outside',
          'units          mm, cm, m, km  —  never squared',
          'any shape      add every side once',
          'rectangle      2 x (l + w)',
          'square         4 x side',
          'missing side   perimeter minus the sides you know',
          'compound       outside only, ignore internal lines',
          'mixed units    convert before adding'
        ]
      }
    },
    {
      h: 'The traps, in one place',
      list: [
        'A rectangle has four sides, not two',
        'Internal join lines are not perimeter',
        '2 x (l + w) needs the brackets',
        'l x w is area, not perimeter',
        'Convert units before adding, not after'
      ],
      rule: 'When the answer looks wrong, check the outside path first. Nearly every error is a missed side or a counted internal line.'
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'Rectangle 13 cm by 6 cm. Perimeter?', a: '38 cm', hint: null },
    { q: 'Square with perimeter 28 m. Side length?', a: '7 m', hint: null },
    { q: 'A triangle has perimeter 30 cm. Two sides are 11 and 12 cm. Find the third.', a: '7 cm', hint: null },
    { q: 'An L-shape has outside sides 9, 3, 5, 4, 4 and 7 m. Perimeter?', a: '32 m', hint: null },
    { q: 'A rectangle is 1.5 m by 60 cm. Perimeter in metres?', a: '4.2 m', hint: null },
    { q: 'A rectangle has perimeter 44 cm and a length of 14 cm. Find the width.', a: '8 cm', hint: null },
    { q: 'A paddock is 25 m by 18 m with a 5 m gate. Fencing at $12 per metre. Total cost?', a: '$972', hint: 'Perimeter is 86 m. Take the gate off, then multiply by 12.' },
    { q: 'Why can perimeter never be measured in cm squared?', a: 'It is a length, not an amount of surface.', hint: null }
  ],
  retrieval: [
    { q: 'Perimeter of a rectangle 8 m by 3 m?', a: '22 m' },
    { q: 'What is the one rule for compound shapes?', a: 'Outside only — internal lines do not count.' }
  ]
}

);
