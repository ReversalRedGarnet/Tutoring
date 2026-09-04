/* ------------------------------------------------------------------
   NUMBER AND MONEY — Solomon Islands Year 6.

   Strand: Number. The last primary year, so the job is to make the
   four operations reliable on large numbers before secondary school
   starts asking for them inside other problems.

   Same schema as the other topic files:
     id, subject, levels, title, type, tier, prereqs, one_idea
     sections[]  { h, p[], list[], example{label,lines[]}, rule, note }
     confusable_with[]  { id | label, why }
     practice[]  { q, a, hint }
     retrieval[] { q, a }
   ------------------------------------------------------------------ */

window.TOPICS = window.TOPICS || [];

window.TOPICS.push(

/* ============================================================ 1 */
{
  id: 'n6-01-place-value',
  subject: 'maths',
  levels: ['SI-6'],
  title: 'Place value to millions',
  type: 'concept',
  tier: 'taught',
  prereqs: [],
  one_idea: 'Where a digit sits decides what it is worth.',
  sections: [
    {
      h: 'The same digit, different worth',
      p: ['A 4 is not always worth 4. It depends which column it is standing in.'],
      example: {
        label: 'Example',
        lines: [
          '4 000 000   four million',
          '400 000     four hundred thousand',
          '40 000      forty thousand',
          '4 000       four thousand',
          '400         four hundred',
          '40          forty',
          '4           four'
        ]
      },
      rule: 'Each step to the left is ten times bigger.'
    },
    {
      h: 'Reading a long number',
      p: ['Split it into groups of three from the right. Each group gets a name.'],
      example: {
        label: 'Example',
        lines: [
          '3 254 807',
          '',
          '3        million',
          '254      thousand',
          '807      units',
          '',
          'Read: three million, two hundred and fifty four thousand,',
          'eight hundred and seven'
        ]
      },
      note: 'The spaces are there to help you read. They are not part of the number.'
    },
    {
      h: 'The job of zero',
      p: ['Zero holds a column open. Without it the digits slide across and the number changes.'],
      example: {
        label: 'Example',
        lines: [
          '5 007   =  five thousand and seven',
          '57      =  fifty seven',
          '',
          'Take the zeros out of 5 007 and you get 57.',
          'Two zeros were doing real work.'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'The number of digits', why: 'A longer number is usually bigger, but only if you line up the columns first. 900 has fewer digits than 1 000 and that is exactly why it is smaller — compare columns, not lengths, once the lengths are equal.' }
  ],
  practice: [
    { q: 'In 6 428 013, what is the 4 worth?', a: '400 000 (four hundred thousand)', hint: 'Count the columns from the right.' },
    { q: 'Write "two million, sixty thousand, five hundred" in digits.', a: '2 060 500', hint: 'Which columns need a zero to hold them open?' },
    { q: 'Which is bigger, 98 700 or 102 300?', a: '102 300', hint: 'One has six digits before the space, one has five.' },
    { q: 'Read 4 090 006 out loud, then write it in words.', a: 'Four million, ninety thousand and six.', hint: 'Split into groups of three from the right.' },
    { q: 'What is the value of the 7 in 1 700 000?', a: '700 000 (seven hundred thousand)', hint: null }
  ],
  retrieval: [
    { q: 'What is the 3 worth in 34 021?', a: '30 000' },
    { q: 'Write "one million and fifty" in digits.', a: '1 000 050' }
  ]
},

/* ============================================================ 2 */
{
  id: 'n6-02-rounding',
  subject: 'maths',
  levels: ['SI-6'],
  title: 'Rounding whole numbers',
  type: 'skill',
  tier: 'taught',
  prereqs: ['n6-01-place-value'],
  one_idea: 'Look at the digit one place to the right, and nothing else.',
  sections: [
    {
      h: 'The method',
      p: ['Find the column you are rounding to. Look at the single digit just to its right.'],
      example: {
        label: 'Example',
        lines: [
          'Round 4 738 to the nearest hundred.',
          '',
          'Step 1   hundreds column is the 7',
          'Step 2   the digit to its right is 3',
          'Step 3   3 is less than 5, so the 7 stays',
          'Step 4   everything right of it becomes zero',
          '',
          'Answer: 4 700'
        ]
      },
      rule: '5 or more, round up. Less than 5, leave it alone.'
    },
    {
      h: 'When rounding up carries',
      p: ['If the digit you are rounding is a 9, rounding up pushes into the next column.'],
      example: {
        label: 'Example',
        lines: [
          'Round 3 962 to the nearest hundred.',
          '',
          'hundreds digit is 9,  next digit is 6,  so round up',
          '9 hundreds + 1 hundred = 10 hundreds = 1 thousand',
          '',
          'Answer: 4 000'
        ]
      }
    },
    {
      h: 'Only one digit matters',
      p: ['You never look at two digits, and you never round twice.'],
      note: 'To round 4 449 to the nearest hundred you look at the 4 in the tens column only. It is less than 5, so the answer is 4 400 — not 4 500.'
    }
  ],
  confusable_with: [
    { label: 'Rounding step by step', why: 'Some people round 4 449 to 4 450, then to 4 500. That is rounding twice and it gives the wrong answer. One look, one decision.' }
  ],
  practice: [
    { q: 'Round 6 284 to the nearest hundred.', a: '6 300', hint: 'Look at the tens digit only.' },
    { q: 'Round 15 649 to the nearest thousand.', a: '16 000', hint: 'Hundreds digit is 6.' },
    { q: 'Round 2 971 to the nearest hundred.', a: '3 000', hint: 'Rounding the 9 up carries into the thousands.' },
    { q: 'Round 8 448 to the nearest hundred.', a: '8 400', hint: 'Do not round the units first.' },
    { q: 'Round 349 500 to the nearest ten thousand.', a: '350 000', hint: null }
  ],
  retrieval: [
    { q: 'Round 3 651 to the nearest hundred.', a: '3 700' },
    { q: 'When do you round up?', a: 'When the digit to the right is 5 or more.' }
  ]
},

/* ============================================================ 3 */
{
  id: 'n6-03-estimating',
  subject: 'maths',
  levels: ['SI-6'],
  title: 'Estimating before you calculate',
  type: 'skill',
  tier: 'taught',
  prereqs: ['n6-02-rounding'],
  one_idea: 'A rough answer first tells you whether the real answer is sensible.',
  sections: [
    {
      h: 'Why bother',
      p: ['An estimate takes ten seconds and catches the big mistakes — a missing zero, a decimal in the wrong place, a subtraction done backwards.'],
      example: {
        label: 'Example',
        lines: [
          '387 x 21',
          '',
          'Estimate   400 x 20  =  8 000',
          'Real       387 x 21  =  8 127',
          '',
          '8 127 is close to 8 000, so the answer is believable.'
        ]
      }
    },
    {
      h: 'How to estimate',
      p: ['Round each number to one useful digit, then do the easy sum in your head.'],
      list: [
        '68 + 41   ->   70 + 40   =  110',
        '892 - 317   ->   900 - 300   =  600',
        '58 x 9   ->   60 x 10   =  600',
        '412 / 7   ->   420 / 7   =  60'
      ],
      rule: 'Estimate first, calculate second, then compare. If they are far apart, check the calculation — not the estimate.'
    }
  ],
  confusable_with: [
    { id: 'n6-02-rounding', why: 'Rounding is a rule that gives one right answer. Estimating is a choice — you round to whatever makes the mental sum easy. Two people can estimate the same problem differently and both be fine.' }
  ],
  practice: [
    { q: 'Estimate 612 + 289.', a: 'About 900 (600 + 300).', hint: 'Round both to the nearest hundred.' },
    { q: 'Estimate 79 x 31.', a: 'About 2 400 (80 x 30).', hint: null },
    { q: 'A student says 48 x 52 = 249. Use an estimate to show that is wrong.', a: '50 x 50 = 2 500, so the answer should be near 2 500, not 249. A digit is missing.', hint: 'Round both to 50.' },
    { q: 'Estimate 3 918 - 1 072.', a: 'About 2 900 (3 900 - 1 000), or about 3 000.', hint: null },
    { q: 'Estimate 358 / 6.', a: 'About 60 (360 / 6).', hint: 'Round 358 to a number 6 divides into.' }
  ],
  retrieval: [
    { q: 'Estimate 197 + 604.', a: 'About 800.' },
    { q: 'Why estimate before calculating?', a: 'To check the real answer is sensible.' }
  ]
},

/* ============================================================ 4 */
{
  id: 'n6-04-add-subtract',
  subject: 'maths',
  levels: ['SI-6'],
  title: 'Adding and subtracting large numbers',
  type: 'skill',
  tier: 'taught',
  prereqs: ['n6-01-place-value'],
  one_idea: 'Line up the columns, then work from the right.',
  sections: [
    {
      h: 'Lining up',
      p: ['The columns must match: units under units, tens under tens. Everything else follows from that.'],
      example: {
        label: 'Example',
        lines: [
          '  4 386',
          '+ 1 249',
          '-------',
          '  5 635',
          '',
          'units    6 + 9 = 15   write 5, carry 1',
          'tens     8 + 4 + 1 = 13   write 3, carry 1',
          'hundreds 3 + 2 + 1 = 6',
          'thousands 4 + 1 = 5'
        ]
      }
    },
    {
      h: 'Borrowing',
      p: ['When the top digit is too small, take one from the column to its left. One from that column is worth ten in this one.'],
      example: {
        label: 'Example',
        lines: [
          '  5 0 2 3',
          '- 1 6 4 7',
          '---------',
          '  3 3 7 6',
          '',
          'units     3 - 7 does not work, borrow: 13 - 7 = 6',
          'tens      1 - 4 does not work, borrow: 11 - 4 = 7',
          'hundreds  9 - 6 = 3        (the 0 became 9 after the borrow)',
          'thousands 4 - 1 = 3'
        ]
      },
      rule: 'One borrowed from the left is worth ten here. Always ten, never anything else.'
    },
    {
      h: 'Different lengths',
      p: ['If one number is shorter, fill the missing columns with zeros in your head. Do not push it to the left.'],
      note: '4 000 - 62 is not 4 000 - 6 200. Line the 6 up under the tens column.'
    }
  ],
  confusable_with: [
    { label: 'Subtracting the small digit from the big one', why: 'In 5 023 - 1 647 the units are 3 and 7. Some people write 7 - 3 = 4 because it is easier. It is also wrong. If the top is smaller, you borrow.' }
  ],
  practice: [
    { q: '3 748 + 2 596', a: '6 344', hint: 'Two carries.' },
    { q: '8 000 - 3 456', a: '4 544', hint: 'Borrow all the way across the zeros.' },
    { q: '12 507 + 8 943', a: '21 450', hint: null },
    { q: '6 020 - 847', a: '5 173', hint: 'Line 847 up under the hundreds, tens and units.' },
    { q: 'A shop took $14 350 on Friday and $9 785 on Saturday. How much more on Friday?', a: '$4 565', hint: 'More means subtract.' }
  ],
  retrieval: [
    { q: '452 + 379', a: '831' },
    { q: '1 000 - 348', a: '652' }
  ]
},

/* ============================================================ 5 */
{
  id: 'n6-05-multiplying',
  subject: 'maths',
  levels: ['SI-6'],
  title: 'Multiplying by two digits',
  type: 'skill',
  tier: 'taught',
  prereqs: ['n6-04-add-subtract'],
  one_idea: 'Multiply by the units, multiply by the tens, then add the two answers.',
  sections: [
    {
      h: 'Two rows, then add',
      p: ['A two digit multiplier is two separate multiplications stacked up.'],
      example: {
        label: 'Example',
        lines: [
          '   2 4 6',
          ' x    3 2',
          ' ---------',
          '     4 9 2      <- 246 x 2',
          '   7 3 8 0      <- 246 x 30',
          ' ---------',
          '   7 8 7 2'
        ]
      },
      rule: 'The second row is multiplying by tens, so it must end in a zero.'
    },
    {
      h: 'Where the zero comes from',
      p: ['In 32 the 3 means 30, not 3. Multiplying by 30 is multiplying by 3 and then by 10 — and multiplying by 10 puts a zero on the end.'],
      note: 'Forgetting that zero is the single most common mistake in this topic. If your second row does not end in 0, stop and check.'
    },
    {
      h: 'Checking with an estimate',
      example: {
        label: 'Example',
        lines: [
          '246 x 32',
          '',
          'Estimate   250 x 30  =  7 500',
          'Answer     7 872',
          '',
          'Close enough. If you had got 787 or 78 720 the estimate would',
          'have caught it.'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'n6-03-estimating', why: 'The estimate is not the answer. It is only there to tell you whether the answer you got is in the right range.' }
  ],
  practice: [
    { q: '134 x 21', a: '2 814', hint: '134 x 1, then 134 x 20.' },
    { q: '87 x 46', a: '4 002', hint: null },
    { q: '305 x 24', a: '7 320', hint: 'The zero in 305 still gets multiplied.' },
    { q: '256 x 30', a: '7 680', hint: 'Only one row needed — multiply by 3 and add a zero.' },
    { q: 'A boat carries 48 passengers. It makes 15 trips. How many passengers in total?', a: '720', hint: '48 x 15.' }
  ],
  retrieval: [
    { q: '52 x 13', a: '676' },
    { q: 'Why does the second row of a long multiplication end in zero?', a: 'Because you are multiplying by tens, not units.' }
  ]
},

/* ============================================================ 6 */
{
  id: 'n6-06-dividing',
  subject: 'maths',
  levels: ['SI-6'],
  title: 'Dividing, with remainders',
  type: 'skill',
  tier: 'taught',
  prereqs: ['n6-05-multiplying'],
  one_idea: 'Work left to right, and carry what is left over into the next digit.',
  sections: [
    {
      h: 'The method',
      p: ['Divide the first digit. Whatever is left over gets carried in front of the next digit.'],
      example: {
        label: 'Example',
        lines: [
          '      1 4 7',
          '   ---------',
          ' 6 ) 8 8 2',
          '',
          '8 / 6  = 1 remainder 2   ->  carry the 2 in front of the 8',
          '28 / 6 = 4 remainder 4   ->  carry the 4 in front of the 2',
          '42 / 6 = 7 remainder 0',
          '',
          'Answer: 147'
        ]
      },
      rule: 'Left to right. Divide, write, carry the leftover.'
    },
    {
      h: 'When it does not go evenly',
      p: ['If something is left at the end, that is the remainder. Write it as "r".'],
      example: {
        label: 'Example',
        lines: [
          '95 / 4',
          '',
          '9 / 4 = 2 remainder 1   ->  carry 1',
          '15 / 4 = 3 remainder 3',
          '',
          'Answer: 23 r 3'
        ]
      }
    },
    {
      h: 'What the remainder means in a real problem',
      p: ['The words in the question decide what you do with the leftover.'],
      list: [
        '95 people, 4 per canoe: you need 24 canoes, because the last 3 still need one.',
        '95 dollars shared between 4: each gets 23, and 3 dollars are left over.',
        '95 metres of rope cut into 4 m lengths: you get 23 full lengths.'
      ],
      note: 'Same sum, three different answers. Read the question, not just the numbers.'
    }
  ],
  confusable_with: [
    { label: 'Always rounding the remainder up', why: 'Whether you round up, round down or keep the remainder depends entirely on what is being shared. There is no rule that works for every question.' }
  ],
  practice: [
    { q: '756 / 7', a: '108', hint: 'Watch the middle: 5 divided by 7 is 0 remainder 5.' },
    { q: '483 / 4', a: '120 r 3', hint: null },
    { q: '2 184 / 8', a: '273', hint: null },
    { q: '150 students go on a trip. Each bus holds 40. How many buses are needed?', a: '4 buses. 150 / 40 = 3 r 30, and the last 30 students still need a bus.', hint: 'What happens to the leftover people?' },
    { q: '$85 is shared equally between 6 children. How much each, and what is left?', a: '$14 each, $1 left over.', hint: null }
  ],
  retrieval: [
    { q: '96 / 8', a: '12' },
    { q: '53 / 5', a: '10 r 3' }
  ]
},

/* ============================================================ 7 */
{
  id: 'n6-07-factors-multiples',
  subject: 'maths',
  levels: ['SI-6'],
  title: 'Factors and multiples',
  type: 'concept',
  tier: 'taught',
  prereqs: ['n6-06-dividing'],
  one_idea: 'Factors go into a number. Multiples come out of it.',
  sections: [
    {
      h: 'Factors',
      p: ['A factor divides into a number exactly, with nothing left over.'],
      example: {
        label: 'Example',
        lines: [
          'Factors of 12',
          '',
          '1 x 12',
          '2 x 6',
          '3 x 4',
          '',
          'Factors: 1, 2, 3, 4, 6, 12'
        ]
      },
      note: 'Work in pairs and you will not miss any. Stop when the pairs start repeating.'
    },
    {
      h: 'Multiples',
      p: ['A multiple is what you get from a times table. There is no end to them.'],
      example: {
        label: 'Example',
        lines: [
          'Multiples of 6:  6, 12, 18, 24, 30, 36, ...',
          '',
          'Factors of 6:    1, 2, 3, 6        (a short list)',
          'Multiples of 6:  6, 12, 18, ...    (never ends)'
        ]
      },
      rule: 'Factors are smaller than or equal to the number. Multiples are bigger than or equal to it.'
    },
    {
      h: 'Prime numbers',
      p: ['A prime has exactly two factors: 1 and itself.'],
      list: [
        '2, 3, 5, 7, 11, 13, 17, 19, 23, 29',
        '2 is the only even prime.',
        '1 is not prime — it has only one factor.'
      ]
    }
  ],
  confusable_with: [
    { label: 'Mixing up the two words', why: 'They point in opposite directions. 3 is a factor of 12; 12 is a multiple of 3. If a list is getting longer and longer, they are multiples.' }
  ],
  practice: [
    { q: 'List all the factors of 18.', a: '1, 2, 3, 6, 9, 18', hint: 'Work in pairs: 1x18, 2x9, 3x6.' },
    { q: 'Write the first five multiples of 7.', a: '7, 14, 21, 28, 35', hint: null },
    { q: 'Is 8 a factor of 40 or a multiple of 40?', a: 'A factor. 8 goes into 40 five times.', hint: 'Is 8 bigger or smaller than 40?' },
    { q: 'Which numbers between 20 and 30 are prime?', a: '23 and 29', hint: 'Check whether anything except 1 and itself divides in.' },
    { q: 'Find a number that is a factor of 24 and a multiple of 4.', a: '4, 8, 12 or 24', hint: 'It must divide into 24 and appear in the 4 times table.' }
  ],
  retrieval: [
    { q: 'List the factors of 15.', a: '1, 3, 5, 15' },
    { q: 'Is 21 prime?', a: 'No — 3 and 7 divide into it.' }
  ]
},

/* ============================================================ 8 */
{
  id: 'n6-08-order-operations',
  subject: 'maths',
  levels: ['SI-6'],
  title: 'Order of operations',
  type: 'skill',
  tier: 'taught',
  prereqs: ['n6-05-multiplying'],
  one_idea: 'Multiply and divide before you add and subtract.',
  sections: [
    {
      h: 'The order',
      list: [
        '1. Brackets',
        '2. Multiply and divide, left to right',
        '3. Add and subtract, left to right'
      ],
      example: {
        label: 'Example',
        lines: [
          '4 + 3 x 5',
          '',
          'Multiply first    3 x 5 = 15',
          'Then add          4 + 15 = 19',
          '',
          'Answer: 19        (not 35)'
        ]
      },
      rule: 'Reading left to right is how you read a sentence. It is not how you read a calculation.'
    },
    {
      h: 'Brackets jump the queue',
      example: {
        label: 'Example',
        lines: [
          '(4 + 3) x 5',
          '',
          'Brackets first    4 + 3 = 7',
          'Then multiply     7 x 5 = 35',
          '',
          'Answer: 35',
          '',
          'Same digits as before. Different answer, because of the brackets.'
        ]
      }
    },
    {
      h: 'Same rank, work left to right',
      p: ['Multiply and divide sit at the same rank. So do add and subtract. When two of the same rank meet, go left to right.'],
      example: {
        label: 'Example',
        lines: [
          '20 / 5 x 2',
          '',
          'Left to right   20 / 5 = 4,  then 4 x 2 = 8',
          '',
          'Answer: 8       (not 20/10 = 2)'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'Doing multiply before divide always', why: 'They are equal in rank. In 20 / 5 x 2 you divide first only because it comes first, not because division outranks multiplication.' }
  ],
  practice: [
    { q: '6 + 2 x 7', a: '20', hint: 'Multiply first.' },
    { q: '(6 + 2) x 7', a: '56', hint: 'Brackets first.' },
    { q: '30 - 12 / 4', a: '27', hint: 'Divide first.' },
    { q: '36 / 6 x 3', a: '18', hint: 'Same rank — left to right.' },
    { q: '5 x (8 - 3) + 4', a: '29', hint: 'Brackets, then multiply, then add.' }
  ],
  retrieval: [
    { q: '3 + 4 x 2', a: '11' },
    { q: 'What comes first, brackets or multiplication?', a: 'Brackets.' }
  ]
},

/* ============================================================ 9 */
{
  id: 'n6-09-money',
  subject: 'maths',
  levels: ['SI-6'],
  title: 'Money and change',
  type: 'application',
  tier: 'taught',
  prereqs: ['n6-04-add-subtract', 'n6-05-multiplying'],
  one_idea: 'Money is just numbers with a dollar sign, but the cents column has to line up.',
  sections: [
    {
      h: 'Writing money',
      p: ['Two digits after the point, always. $5.5 is not written like that — it is $5.50.'],
      list: [
        '$5.50   five dollars fifty cents',
        '$5.05   five dollars five cents',
        '$0.75   seventy five cents'
      ],
      note: '$5.05 and $5.50 are very different amounts. The zero is holding a column.'
    },
    {
      h: 'Adding a shopping list',
      example: {
        label: 'Example',
        lines: [
          '  $ 12.50',
          '  $  3.75',
          '  $  8.00',
          '  -------',
          '  $ 24.25',
          '',
          'Line up the dots. Then it is ordinary column addition.'
        ]
      },
      rule: 'Line up the decimal points, not the ends of the numbers.'
    },
    {
      h: 'Working out change',
      example: {
        label: 'Example',
        lines: [
          'You spend $24.25 and pay with $50.',
          '',
          '  $ 50.00',
          '- $ 24.25',
          '  -------',
          '  $ 25.75',
          '',
          'Answer: $25.75 change'
        ]
      }
    },
    {
      h: 'Buying several of the same thing',
      example: {
        label: 'Example',
        lines: [
          '6 tins at $4.50 each',
          '',
          '4.50 x 6  =  27.00',
          '',
          'Answer: $27.00'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'Lining up the right hand ends', why: 'With $12.50 and $8.00 that happens to work. With $12.50 and $8.5 it does not. Line up the decimal points instead and the problem disappears.' }
  ],
  practice: [
    { q: '$14.60 + $7.85', a: '$22.45', hint: 'Line up the points.' },
    { q: 'You spend $36.40 and pay with $50. How much change?', a: '$13.60', hint: null },
    { q: '4 bags of rice at $23.50 each. Total?', a: '$94.00', hint: '23.50 x 4.' },
    { q: 'Which is more, $8.09 or $8.90?', a: '$8.90', hint: 'Compare the tenths column first.' },
    { q: 'You have $100. You buy items costing $32.75, $18.50 and $9.95. How much is left?', a: '$38.80', hint: 'Add the three first, then subtract.' }
  ],
  retrieval: [
    { q: '$6.25 + $3.50', a: '$9.75' },
    { q: 'Change from $20 after spending $13.40?', a: '$6.60' }
  ]
},

/* ============================================================ 10 */
{
  id: 'n6-10-review',
  subject: 'maths',
  levels: ['SI-6'],
  title: 'Number review',
  type: 'review',
  tier: 'taught',
  prereqs: ['n6-07-factors-multiples', 'n6-08-order-operations', 'n6-09-money'],
  one_idea: 'Everything in this unit, mixed up, so you have to choose the method yourself.',
  sections: [
    {
      h: 'What you should be able to do',
      list: [
        'Say what any digit in a seven digit number is worth.',
        'Round to any column, in one step.',
        'Estimate an answer before working it out.',
        'Add and subtract with carrying and borrowing.',
        'Multiply by two digits, remembering the zero.',
        'Divide and know what to do with the remainder.',
        'List factors and multiples, and spot a prime.',
        'Apply the order of operations.',
        'Add money and work out change.'
      ]
    },
    {
      h: 'Choosing a method',
      p: ['In the questions below nobody tells you which operation to use. That is the point.'],
      rule: 'Read the question twice. Estimate. Calculate. Compare with the estimate.'
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'Round 47 618 to the nearest thousand, then to the nearest ten thousand.', a: '48 000 and 50 000', hint: 'Two separate roundings of the original number.' },
    { q: '8 x (15 - 7) + 12', a: '76', hint: 'Brackets first.' },
    { q: '1 260 / 5', a: '252', hint: null },
    { q: 'A truck carries 24 crates. Each crate holds 36 mangoes. How many mangoes altogether?', a: '864', hint: '24 x 36.' },
    { q: 'A market seller takes $2 480 on Saturday and $1 795 on Sunday. She pays $890 for stock. How much is left?', a: '$3 385', hint: 'Add the two takings, then subtract the cost.' },
    { q: 'List the factors of 36. Which of them are prime?', a: '1, 2, 3, 4, 6, 9, 12, 18, 36. The primes are 2 and 3.', hint: null },
    { q: '206 people need transport. Each van holds 12. How many vans?', a: '18 vans. 206 / 12 = 17 r 2, and the last 2 still need one.', hint: 'What happens to the leftover?' }
  ],
  retrieval: [
    { q: '9 + 6 / 3', a: '11' },
    { q: 'Round 5 550 to the nearest hundred.', a: '5 600' },
    { q: 'What is the 8 worth in 3 800 000?', a: '800 000' }
  ]
}

);
