/* ------------------------------------------------------------------
   DIRECTED NUMBERS — Solomon Islands Year 7 / Form 1.

   Strand: Number. This is the first time the number line runs both
   ways, and almost every mistake in later algebra traces back to a
   sign handled carelessly here. So the signs get named out loud and
   the two jobs of the minus symbol are separated early.

   Schema as per the other topic files.
   ------------------------------------------------------------------ */

window.TOPICS = window.TOPICS || [];

window.TOPICS.push(

/* ============================================================ 1 */
{
  id: 'in-01-what-are',
  subject: 'maths',
  levels: ['SI-7'],
  title: 'Numbers below zero',
  type: 'concept',
  tier: 'taught',
  prereqs: [],
  one_idea: 'Zero is not the bottom. Numbers keep going the other way.',
  sections: [
    {
      h: 'Where you already meet them',
      list: [
        'A bank balance of -$40 means you owe $40.',
        'A freezer at -18 degrees is 18 below freezing point.',
        '12 metres below sea level is -12 m.',
        'Losing 3 points in a game is -3.'
      ],
      p: ['In every case the minus sign is saying which direction, not how big.']
    },
    {
      h: 'The size and the direction are separate',
      p: ['-7 is further from zero than -2, so it is the larger jump. But -7 is the smaller number, because it sits further to the left.'],
      example: {
        label: 'Example',
        lines: [
          '-7   direction: below zero    size: 7 away from zero',
          '-2   direction: below zero    size: 2 away from zero',
          '',
          '-7 is bigger in size and smaller in value.'
        ]
      },
      rule: 'The sign tells you which side of zero. The digits tell you how far.'
    },
    {
      h: 'Opposites',
      p: ['Every number has an opposite the same distance from zero on the other side.'],
      list: [
        'The opposite of 5 is -5.',
        'The opposite of -12 is 12.',
        'The opposite of 0 is 0.'
      ]
    }
  ],
  confusable_with: [
    { label: 'Bigger digits meaning a bigger number', why: 'With positive numbers, more is more. Below zero it flips: -9 is less than -1. Once you cross zero, the digits count backwards.' }
  ],
  practice: [
    { q: 'Write "eleven degrees below zero" as a directed number.', a: '-11', hint: 'Below zero means the minus side.' },
    { q: 'What is the opposite of -8?', a: '8', hint: 'Same distance, other side.' },
    { q: 'A diver is 15 m below the surface. Write her position.', a: '-15 m', hint: null },
    { q: 'Which is further from zero, -6 or 4?', a: '-6', hint: 'Ignore the sign for this question.' },
    { q: 'Which is the smaller number, -6 or 4?', a: '-6', hint: 'Which one is further left?' }
  ],
  retrieval: [
    { q: 'What is the opposite of 20?', a: '-20' },
    { q: 'Write "$35 owed" as a directed number.', a: '-35' }
  ]
},

/* ============================================================ 2 */
{
  id: 'in-02-number-line',
  subject: 'maths',
  levels: ['SI-7'],
  title: 'The number line both ways',
  type: 'concept',
  tier: 'taught',
  prereqs: ['in-01-what-are'],
  one_idea: 'Right is more, left is less — all the way along, past zero.',
  sections: [
    {
      h: 'The line',
      p: ['Zero sits in the middle. Positives run right, negatives run left, and the spacing stays even.'],
      figure: {
        caption: 'A number line from negative six to positive six, with zero marked in the middle',
        svg: '<svg viewBox="0 0 640 90" xmlns="http://www.w3.org/2000/svg">' +
             '<line class="f-line" x1="30" y1="45" x2="610" y2="45"/>' +
             '<polygon class="f-fill" points="610,45 598,39 598,51"/>' +
             '<polygon class="f-fill" points="30,45 42,39 42,51"/>' +
             '<g>' +
             '<line class="f-line" x1="70" y1="36" x2="70" y2="54"/><text class="f-label f-mid" x="70" y="72">-6</text>' +
             '<line class="f-line" x1="115" y1="36" x2="115" y2="54"/><text class="f-label f-mid" x="115" y="72">-5</text>' +
             '<line class="f-line" x1="160" y1="36" x2="160" y2="54"/><text class="f-label f-mid" x="160" y="72">-4</text>' +
             '<line class="f-line" x1="205" y1="36" x2="205" y2="54"/><text class="f-label f-mid" x="205" y="72">-3</text>' +
             '<line class="f-line" x1="250" y1="36" x2="250" y2="54"/><text class="f-label f-mid" x="250" y="72">-2</text>' +
             '<line class="f-line" x1="295" y1="36" x2="295" y2="54"/><text class="f-label f-mid" x="295" y="72">-1</text>' +
             '<line class="f-mark" x1="340" y1="28" x2="340" y2="62"/><text class="f-label f-mid" x="340" y="80">0</text>' +
             '<line class="f-line" x1="385" y1="36" x2="385" y2="54"/><text class="f-label f-mid" x="385" y="72">1</text>' +
             '<line class="f-line" x1="430" y1="36" x2="430" y2="54"/><text class="f-label f-mid" x="430" y="72">2</text>' +
             '<line class="f-line" x1="475" y1="36" x2="475" y2="54"/><text class="f-label f-mid" x="475" y="72">3</text>' +
             '<line class="f-line" x1="520" y1="36" x2="520" y2="54"/><text class="f-label f-mid" x="520" y="72">4</text>' +
             '<line class="f-line" x1="565" y1="36" x2="565" y2="54"/><text class="f-label f-mid" x="565" y="72">5</text>' +
             '</g>' +
             '<text class="f-dim f-mid" x="150" y="20">smaller</text>' +
             '<text class="f-dim f-mid" x="510" y="20">larger</text>' +
             '</svg>'
      },
      rule: 'Whichever number is further right is the larger one. That never changes.'
    },
    {
      h: 'Moving along it',
      p: ['Adding moves you right. Subtracting moves you left. It works the same on both sides of zero.'],
      example: {
        label: 'Example',
        lines: [
          'Start at -3 and add 5.',
          '',
          '-3  ->  -2  ->  -1  ->  0  ->  1  ->  2',
          '     1     2     3     4     5',
          '',
          'Answer: 2'
        ]
      }
    },
    {
      h: 'Distance between two numbers',
      p: ['Count the steps from one to the other. Distance is never negative.'],
      example: {
        label: 'Example',
        lines: [
          'How far from -4 to 3?',
          '',
          '-4 to 0   is 4 steps',
          '0 to 3    is 3 steps',
          '',
          'Answer: 7'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'in-01-what-are', why: 'The opposite of a number is on the other side of zero. The distance between two numbers is how many steps apart they are. -4 and 4 are opposites, and they are 8 apart.' }
  ],
  practice: [
    { q: 'Start at -5 and add 3. Where do you land?', a: '-2', hint: 'Adding moves right.' },
    { q: 'Start at 2 and subtract 6.', a: '-4', hint: 'Subtracting moves left, straight past zero.' },
    { q: 'How far is it from -2 to 6?', a: '8', hint: 'Count to zero, then keep counting.' },
    { q: 'Put in order, smallest first: 3, -7, 0, -2, 5', a: '-7, -2, 0, 3, 5', hint: 'Left to right along the line.' },
    { q: 'The temperature is -3 degrees and rises by 9. What is it now?', a: '6 degrees', hint: 'Rises means move right.' }
  ],
  retrieval: [
    { q: 'Which is larger, -8 or -3?', a: '-3' },
    { q: 'Start at -1 and add 4.', a: '3' }
  ]
},

/* ============================================================ 3 */
{
  id: 'in-03-comparing',
  subject: 'maths',
  levels: ['SI-7'],
  title: 'Comparing and ordering',
  type: 'skill',
  tier: 'taught',
  prereqs: ['in-02-number-line'],
  one_idea: 'Further left is smaller, even when the digits are bigger.',
  sections: [
    {
      h: 'Two negatives',
      p: ['With negatives, the number with the bigger digits is the smaller number.'],
      example: {
        label: 'Example',
        lines: [
          '-9  or  -4  ?',
          '',
          '-9 is nine steps left of zero',
          '-4 is four steps left of zero',
          '',
          '-9 is further left, so -9 < -4'
        ]
      },
      rule: 'Among negatives, bigger digits means smaller number.'
    },
    {
      h: 'A negative against a positive',
      p: ['No working needed. Any negative is smaller than any positive.'],
      list: [
        '-100 < 1',
        '-1 < 0',
        '0 < 1'
      ]
    },
    {
      h: 'Ordering a mixed list',
      example: {
        label: 'Example',
        lines: [
          'Order: 4, -6, -1, 0, 2, -3',
          '',
          'Negatives first, most negative leading:  -6, -3, -1',
          'Then zero:                               0',
          'Then positives, smallest first:          2, 4',
          '',
          'Answer: -6, -3, -1, 0, 2, 4'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'Sorting by the digits alone', why: 'Ignoring the minus sign turns -6, -3, -1 into 1, 3, 6 and reverses the order. Sort on the line, not on the digits.' }
  ],
  practice: [
    { q: 'Which is larger, -12 or -20?', a: '-12', hint: 'Which is closer to zero?' },
    { q: 'Fill in < or >:  -5 __ 2', a: '-5 < 2', hint: 'Any negative is below any positive.' },
    { q: 'Order smallest to largest: -2, 7, -11, 0, 3', a: '-11, -2, 0, 3, 7', hint: null },
    { q: 'Three towns record -4, -9 and -1 degrees. Which was coldest?', a: '-9 degrees', hint: 'Coldest is the smallest number.' },
    { q: 'Name a number between -6 and -5.', a: 'Any value such as -5.5 or -5.2.', hint: 'They are only one apart, so you need a decimal.' }
  ],
  retrieval: [
    { q: 'Which is smaller, -3 or -30?', a: '-30' },
    { q: 'Is -1 more or less than 0?', a: 'Less.' }
  ]
},

/* ============================================================ 4 */
{
  id: 'in-04-adding',
  subject: 'maths',
  levels: ['SI-7'],
  title: 'Adding directed numbers',
  type: 'skill',
  tier: 'taught',
  prereqs: ['in-02-number-line'],
  one_idea: 'Adding a positive walks right. Adding a negative walks left.',
  sections: [
    {
      h: 'Same signs',
      p: ['Two positives add up and stay positive. Two negatives add up and stay negative.'],
      example: {
        label: 'Example',
        lines: [
          '-4 + -3',
          '',
          'Start at -4, walk 3 more to the left',
          '',
          'Answer: -7'
        ]
      },
      rule: 'Same signs: add the sizes, keep the sign.'
    },
    {
      h: 'Different signs',
      p: ['They pull against each other. Take the smaller size from the bigger one, and keep the sign of whichever was bigger.'],
      example: {
        label: 'Example',
        lines: [
          '-9 + 5',
          '',
          'Sizes:  9 and 5',
          '9 - 5 = 4',
          '9 was the negative one, so the answer is negative',
          '',
          'Answer: -4'
        ]
      },
      rule: 'Different signs: subtract the sizes, keep the sign of the larger size.'
    },
    {
      h: 'A second one, the other way round',
      example: {
        label: 'Example',
        lines: [
          '-3 + 8',
          '',
          'Sizes:  3 and 8',
          '8 - 3 = 5',
          '8 was the positive one, so the answer is positive',
          '',
          'Answer: 5'
        ]
      },
      note: 'Same method both times. Only which one is bigger changes.'
    }
  ],
  confusable_with: [
    { label: 'Adding always makes things bigger', why: 'That is true for positives only. Adding -6 makes a number smaller, because you are walking left. Adding means "and then", not "and then more".' }
  ],
  practice: [
    { q: '-6 + -5', a: '-11', hint: 'Same signs — add the sizes.' },
    { q: '-8 + 3', a: '-5', hint: '8 - 3, and the 8 was negative.' },
    { q: '7 + -10', a: '-3', hint: '10 - 7, and the 10 was negative.' },
    { q: '-4 + 4', a: '0', hint: 'Opposites cancel.' },
    { q: 'A bank account is -$25. A deposit of $60 goes in. What is the balance?', a: '$35', hint: '-25 + 60.' }
  ],
  retrieval: [
    { q: '-5 + 2', a: '-3' },
    { q: '-7 + -2', a: '-9' }
  ]
},

/* ============================================================ 5 */
{
  id: 'in-05-subtracting',
  subject: 'maths',
  levels: ['SI-7'],
  title: 'Subtracting directed numbers',
  type: 'skill',
  tier: 'taught',
  prereqs: ['in-04-adding'],
  one_idea: 'Subtracting is adding the opposite.',
  sections: [
    {
      h: 'Turn it into an addition',
      p: ['Every subtraction can be rewritten as an addition of the opposite number. Then you use the adding rules you already have.'],
      example: {
        label: 'Example',
        lines: [
          '5 - 8',
          '',
          'Rewrite   5 + (-8)',
          'Sizes     8 - 5 = 3,  the 8 was negative',
          '',
          'Answer: -3'
        ]
      },
      rule: 'a - b  is the same as  a + (opposite of b). Always.'
    },
    {
      h: 'Subtracting a negative',
      p: ['The opposite of a negative is a positive, so subtracting a negative moves you right.'],
      example: {
        label: 'Example',
        lines: [
          '4 - (-6)',
          '',
          'Rewrite   4 + 6',
          '',
          'Answer: 10'
        ]
      },
      note: 'Taking away a debt leaves you better off. That is the whole idea in one sentence.'
    },
    {
      h: 'Starting from a negative',
      example: {
        label: 'Example',
        lines: [
          '-3 - 5',
          '',
          'Rewrite   -3 + (-5)',
          'Same signs, add the sizes, keep the sign',
          '',
          'Answer: -8',
          '',
          '',
          '-3 - (-5)',
          '',
          'Rewrite   -3 + 5',
          'Different signs,  5 - 3 = 2,  the 5 was positive',
          '',
          'Answer: 2'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'in-04-adding', why: 'Adding a negative and subtracting a positive both move you left, and they give the same answer. Subtracting a negative is the one that goes the other way. Rewrite every subtraction as an addition and you never have to remember which is which.' }
  ],
  practice: [
    { q: '3 - 9', a: '-6', hint: 'Rewrite as 3 + (-9).' },
    { q: '-2 - 7', a: '-9', hint: 'Rewrite as -2 + (-7).' },
    { q: '6 - (-4)', a: '10', hint: 'Subtracting a negative adds.' },
    { q: '-5 - (-8)', a: '3', hint: 'Rewrite as -5 + 8.' },
    { q: 'The temperature falls from 2 degrees to -6 degrees. By how much did it fall?', a: '8 degrees', hint: '2 - (-6).' }
  ],
  retrieval: [
    { q: '4 - 7', a: '-3' },
    { q: '-1 - (-5)', a: '4' }
  ]
},

/* ============================================================ 6 */
{
  id: 'in-06-two-signs',
  subject: 'maths',
  levels: ['SI-7'],
  title: 'Two signs side by side',
  type: 'skill',
  tier: 'taught',
  prereqs: ['in-05-subtracting'],
  one_idea: 'When two signs meet, simplify them to one before doing anything else.',
  sections: [
    {
      h: 'The four combinations',
      list: [
        '+ +   becomes  +      5 + (+3) = 5 + 3 = 8',
        '+ -   becomes  -      5 + (-3) = 5 - 3 = 2',
        '- +   becomes  -      5 - (+3) = 5 - 3 = 2',
        '- -   becomes  +      5 - (-3) = 5 + 3 = 8'
      ],
      rule: 'Two signs the same make a plus. Two signs different make a minus.'
    },
    {
      h: 'Do the signs first, then the sum',
      p: ['Simplify the middle to one sign. Only then decide whether you are adding or subtracting.'],
      example: {
        label: 'Example',
        lines: [
          '-7 - (-2)',
          '',
          'Step 1   the two minuses become a plus:   -7 + 2',
          'Step 2   different signs,  7 - 2 = 5,  the 7 was negative',
          '',
          'Answer: -5'
        ]
      }
    },
    {
      h: 'The minus sign has two jobs',
      p: ['In -7 - (-2), the first minus says "this number is negative". The second says "subtract". They look identical and mean different things.'],
      note: 'This is why the brackets are there. They keep the two jobs apart on the page.'
    }
  ],
  confusable_with: [
    { label: 'Two minuses always make a plus', why: 'True only when the two minus signs are next to each other, as in 5 - (-3). In -5 - 3 the minuses are not touching — one belongs to the 5 and one is the operation — and the answer is -8, not 8 or -2.' }
  ],
  practice: [
    { q: '8 + (-5)', a: '3', hint: 'Different signs become a minus.' },
    { q: '-4 - (-9)', a: '5', hint: 'Two minuses become a plus: -4 + 9.' },
    { q: '-6 + (+2)', a: '-4', hint: 'Two the same become a plus: -6 + 2.' },
    { q: '10 - (+14)', a: '-4', hint: 'Different signs become a minus.' },
    { q: '-3 - (-3)', a: '0', hint: 'It becomes -3 + 3.' }
  ],
  retrieval: [
    { q: '2 - (-6)', a: '8' },
    { q: '-2 + (-6)', a: '-8' }
  ]
},

/* ============================================================ 7 */
{
  id: 'in-07-multiply-divide',
  subject: 'maths',
  levels: ['SI-7'],
  title: 'Multiplying and dividing',
  type: 'skill',
  tier: 'taught',
  prereqs: ['in-06-two-signs'],
  one_idea: 'Work out the digits, then count the minus signs.',
  sections: [
    {
      h: 'The sign rule',
      p: ['Multiply or divide the numbers as usual, ignoring signs. Then decide the sign at the end.'],
      list: [
        'positive x positive  =  positive',
        'negative x negative  =  positive',
        'positive x negative  =  negative',
        'negative x positive  =  negative'
      ],
      rule: 'Signs the same, answer positive. Signs different, answer negative. Division works exactly the same way.'
    },
    {
      h: 'Two steps, in order',
      example: {
        label: 'Example',
        lines: [
          '-6 x 7',
          '',
          'Step 1   digits:   6 x 7 = 42',
          'Step 2   signs:    one minus, so negative',
          '',
          'Answer: -42',
          '',
          '',
          '-48 / -8',
          '',
          'Step 1   digits:   48 / 8 = 6',
          'Step 2   signs:    two minuses, so positive',
          '',
          'Answer: 6'
        ]
      }
    },
    {
      h: 'More than two numbers',
      p: ['Count how many negatives there are. An even count gives a positive answer, an odd count gives a negative one.'],
      example: {
        label: 'Example',
        lines: [
          '-2 x -3 x -4',
          '',
          'digits    2 x 3 x 4 = 24',
          'signs     three negatives — odd — so negative',
          '',
          'Answer: -24'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'in-04-adding', why: 'The rules are not the same. -3 + -4 is -7, but -3 x -4 is 12. Adding two negatives stays negative. Multiplying two negatives turns positive. Check which operation you are actually doing before reaching for a sign rule.' }
  ],
  practice: [
    { q: '-7 x 4', a: '-28', hint: 'One negative.' },
    { q: '-9 x -6', a: '54', hint: 'Two negatives.' },
    { q: '-36 / 9', a: '-4', hint: null },
    { q: '-72 / -12', a: '6', hint: null },
    { q: '-2 x 5 x -3', a: '30', hint: 'Count the negatives: two, so positive.' }
  ],
  retrieval: [
    { q: '-5 x -5', a: '25' },
    { q: '-20 / 4', a: '-5' }
  ]
},

/* ============================================================ 8 */
{
  id: 'in-08-word-problems',
  subject: 'maths',
  levels: ['SI-7'],
  title: 'Directed numbers in real situations',
  type: 'application',
  tier: 'taught',
  prereqs: ['in-07-multiply-divide'],
  one_idea: 'Decide which direction is positive first, then write the numbers.',
  sections: [
    {
      h: 'Choose a direction',
      p: ['Nothing is negative on its own. It is negative compared with a starting point you chose.'],
      list: [
        'Above sea level positive, below negative.',
        'Money in positive, money out negative.',
        'Rise positive, fall negative.',
        'Gain positive, loss negative.'
      ],
      rule: 'Write down which direction you called positive before you start. Half of all mistakes here are answers with the right digits and the wrong sign.'
    },
    {
      h: 'Change means subtract',
      p: ['"How much did it change" is always the finish minus the start.'],
      example: {
        label: 'Example',
        lines: [
          'A temperature goes from -5 degrees to 3 degrees.',
          '',
          'change = finish - start',
          'change = 3 - (-5)',
          'change = 3 + 5',
          '',
          'Answer: a rise of 8 degrees'
        ]
      }
    },
    {
      h: 'Repeated change means multiply',
      example: {
        label: 'Example',
        lines: [
          'A tank loses 4 litres every hour for 6 hours.',
          '',
          '6 x (-4) = -24',
          '',
          'Answer: 24 litres lost'
        ]
      },
      note: 'The maths gives -24. The answer in words is "24 litres lost", because the minus sign has already been said by the word "lost". Do not say it twice.'
    }
  ],
  confusable_with: [
    { id: 'in-05-subtracting', why: 'Order matters in a change. Finish minus start gives the direction of the change; start minus finish gives the same digits with the wrong sign.' }
  ],
  practice: [
    { q: 'A submarine at -60 m rises 25 m. What is its new depth?', a: '-35 m', hint: 'Rising means adding.' },
    { q: 'A balance of -$120 receives $45. What is the new balance?', a: '-$75', hint: '-120 + 45.' },
    { q: 'The temperature falls from 4 degrees to -7 degrees. How big is the fall?', a: '11 degrees', hint: 'Finish minus start: -7 - 4 = -11, so a fall of 11.' },
    { q: 'A shop loses $35 a day for 5 days. What is the total change?', a: '-$175, a loss of $175', hint: '5 x (-35).' },
    { q: 'A team scores -3, 5, -2 and 6 over four rounds. What is the total?', a: '6', hint: 'Add them one at a time.' }
  ],
  retrieval: [
    { q: 'Temperature goes from -2 to 5. What is the change?', a: 'A rise of 7.' },
    { q: 'Balance -$50, then $80 in. New balance?', a: '$30' }
  ]
},

/* ============================================================ 9 */
{
  id: 'in-09-review',
  subject: 'maths',
  levels: ['SI-7'],
  title: 'Directed numbers review',
  type: 'review',
  tier: 'taught',
  prereqs: ['in-08-word-problems'],
  one_idea: 'Mixed questions, so you decide which rule applies each time.',
  sections: [
    {
      h: 'The four rules, together',
      list: [
        'Adding, same signs: add the sizes, keep the sign.',
        'Adding, different signs: subtract the sizes, keep the sign of the larger.',
        'Subtracting: rewrite as adding the opposite.',
        'Multiplying or dividing: do the digits, then count the minus signs.'
      ],
      rule: 'The adding rules and the multiplying rules are different. Look at the operation first.'
    },
    {
      h: 'A useful check',
      p: ['If an answer surprises you, put it on a number line and walk it. -3 + 8 should land you to the right of where you started.']
    }
  ],
  confusable_with: [],
  practice: [
    { q: '-8 + 15', a: '7', hint: null },
    { q: '-8 x 15', a: '-120', hint: 'Different question, different rule.' },
    { q: '-6 - (-11)', a: '5', hint: 'Two minuses together.' },
    { q: '-6 x (-11)', a: '66', hint: null },
    { q: '-45 / -5', a: '9', hint: null },
    { q: '-4 + -4 + -4', a: '-12', hint: 'Adding, same signs.' },
    { q: '-4 x -4 x -4', a: '-64', hint: 'Three negatives — odd count.' },
    { q: 'A diver at -18 m descends another 7 m, then rises 12 m. Where is she?', a: '-13 m', hint: 'Descend is minus, rise is plus.' }
  ],
  retrieval: [
    { q: '-9 + 4', a: '-5' },
    { q: '-9 x 4', a: '-36' },
    { q: '3 - (-3)', a: '6' }
  ]
}

);
