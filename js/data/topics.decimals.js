/* ------------------------------------------------------------------
   DECIMALS — AU Year 7. Schema documented in topics.fractions.js.

   Several topics list a FRACTIONS topic as a prerequisite. That is
   deliberate: the ladder rail then reaches back into the earlier unit,
   so when a decimal will not stick the fundamental underneath it is one
   click away rather than forgotten.

   Decimals are unusually rich in false rules — "longer means bigger",
   "0.5 is a fifth", "multiplying makes it bigger". Every one of those is
   named in a confusable_with before it can be invented.
   ------------------------------------------------------------------ */

window.TOPICS = window.TOPICS || [];

window.TOPICS.push(

/* ============================================================ 1 */
{
  id: 'dc-01-what-is',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'What is a decimal?',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-01-what-is'],
  one_idea: 'A decimal is another way of writing a fraction, using place value instead of a line.',
  sections: [
    {
      h: 'The two parts',
      p: ['The decimal point separates the whole things from the leftover part.'],
      example: {
        label: 'Example',
        lines: [
          '3.7',
          '',
          '3   whole part      3 complete things',
          '.   decimal point   the divider',
          '7   decimal part    7 tenths of another one'
        ]
      }
    },
    {
      h: 'The same amount, written differently',
      example: {
        label: 'Example',
        lines: [
          '0.5   =  5/10   =  1/2',
          '0.25  =  25/100 =  1/4',
          '0.1   =  1/10'
        ]
      },
      rule: 'Decimals and fractions are the same kind of number. Only the notation changed.'
    }
  ],
  confusable_with: [
    { label: 'Reading 0.5 as "nought point five" and thinking of 5', why: 'The 5 is 5 TENTHS, not 5. 0.5 is half of one, not five of anything.' }
  ],
  practice: [
    { q: 'In 6.24, what is the whole-number part?', a: '6', hint: 'Everything to the left of the point.' },
    { q: 'Write 0.3 as a fraction.', a: '3/10', hint: 'The first place after the point is tenths.' },
    { q: 'Write 7/10 as a decimal.', a: '0.7', hint: null },
    { q: 'Is 0.5 bigger or smaller than 1?', a: 'Smaller. It is half of one.', hint: null },
    { q: 'What does the decimal point do?', a: 'Separates the whole things from the part of a thing.', hint: null }
  ],
  retrieval: [
    { q: 'Write 0.5 as a fraction.', a: '5/10, which simplifies to 1/2.' },
    { q: 'What separates the whole part from the decimal part?', a: 'The decimal point.' }
  ]
},

/* ============================================================ 2 */
{
  id: 'dc-02-why',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Why we use decimals',
  type: 'concept',
  tier: 'taught',
  prereqs: ['dc-01-what-is'],
  one_idea: 'Decimals are the form that measuring instruments and money already use.',
  sections: [
    {
      h: 'Where they turn up',
      list: [
        'Money  —  $4.75',
        'Length  —  1.62 m tall',
        'Weight  —  0.5 kg of rice',
        'Distance  —  3.4 km',
        'Time  —  a 10.85 second sprint',
        'Science  —  a reading of 37.2 degrees'
      ]
    },
    {
      h: 'Why not fractions here?',
      p: ['A ruler, a set of scales and a price tag are all built in tenths and hundredths. Decimals line up with the equipment; fractions do not.'],
      example: {
        label: 'Example',
        lines: [
          '$4.75    reads instantly as 4 dollars 75 cents',
          '$4 3/4   correct, but no till prints this'
        ]
      }
    },
    {
      h: 'When another form is better',
      list: [
        'Fractions  —  exact thirds, and sharing (1/3 has no exact decimal)',
        'Percentages  —  comparing, discounts, anything out of 100',
        'Decimals  —  money, measurement, and calculating'
      ]
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'Why is money written in decimals rather than fractions?', a: 'Cents are hundredths of a dollar, so the decimal matches how money is counted.', hint: null },
    { q: 'Which form would you use to compare two test results quickly?', a: 'Percentages, because both are out of 100.', hint: null },
    { q: 'Write 1/3 as a decimal. What is the problem?', a: '0.333... The digits never stop, so no decimal is exactly right.', hint: null },
    { q: 'Give one measurement from your own day that is written as a decimal.', a: 'Any reasonable answer: a price, a height, a weight, a distance.', hint: null }
  ],
  retrieval: [
    { q: 'Which form is best for comparing two amounts quickly?', a: 'Percentages.' }
  ]
},

/* ============================================================ 3 */
{
  id: 'dc-03-place-value',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Decimal place value',
  type: 'concept',
  tier: 'taught',
  prereqs: ['dc-01-what-is'],
  one_idea: 'Every step to the right divides the place value by ten.',
  sections: [
    {
      h: 'The columns',
      example: {
        label: 'Example',
        lines: [
          '        2   4  .  3    6    9',
          '',
          'tens        2',
          'ones        4',
          '            .',
          'tenths           3      1/10',
          'hundredths            6      1/100',
          'thousandths                9  1/1000'
        ]
      }
    },
    {
      h: 'Each column is a tenth of the one before',
      example: {
        label: 'Example',
        lines: [
          'ones        1',
          'tenths      0.1      1 / 10',
          'hundredths  0.01     0.1 / 10',
          'thousandths 0.001    0.01 / 10',
          '',
          'Going left multiplies by 10. Going right divides by 10.'
        ]
      },
      rule: 'The column decides the value of a digit. The digit alone tells you nothing.'
    },
    {
      h: 'Reading the value of a digit',
      example: {
        label: 'Example',
        lines: [
          'In 5.284',
          '',
          'the 2 is worth  0.2    (2 tenths)',
          'the 8 is worth  0.08   (8 hundredths)',
          'the 4 is worth  0.004  (4 thousandths)'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'Calling the first place after the point "oneths"', why: 'There is no oneths column. The point is the divider, and the first column after it is tenths.' }
  ],
  practice: [
    { q: 'In 4.62, what is the value of the 6?', a: '0.6, or six tenths', hint: 'Which column is it in?' },
    { q: 'In 0.375, what is the value of the 5?', a: '0.005, or five thousandths', hint: null },
    { q: 'Which is worth more, the 3 in 0.35 or the 3 in 0.53?', a: 'The 3 in 0.35 — it is 3 tenths, not 3 hundredths.', hint: 'Check the column, not the digit.' },
    { q: 'What is 0.1 divided by 10?', a: '0.01', hint: 'One step to the right.' },
    { q: 'Name the columns in 12.408, left to right.', a: 'Tens, ones, tenths, hundredths, thousandths', hint: null }
  ],
  retrieval: [
    { q: 'What is the third place after the decimal point called?', a: 'Thousandths.' },
    { q: 'In 7.09, what is the value of the 9?', a: '0.09, nine hundredths.' }
  ]
},

/* ============================================================ 4 */
{
  id: 'dc-04-representing',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Ways to show a decimal',
  type: 'concept',
  tier: 'taught',
  prereqs: ['dc-03-place-value', 'fr-04-representing'],
  one_idea: 'The same decimal can be drawn, charted or measured, and stays the same number.',
  sections: [
    {
      h: 'Five ways to show 0.4',
      list: [
        'Notation  —  0.4',
        'A grid  —  ten strips, four shaded',
        'A place-value chart  —  a 4 in the tenths column',
        'A number line  —  four steps from 0 towards 1',
        'Money  —  40 cents of a dollar'
      ]
    },
    {
      h: 'Decimals on a number line',
      p: ['Between two whole numbers, split the gap into ten to get tenths.'],
      example: {
        label: 'Example',
        lines: [
          '0 --|--|--|--|--|--|--|--|--|--| 1',
          '   0.1      0.4            0.9',
          '',
          '10 gaps, because tenths.',
          'For hundredths, split one of those gaps into ten again.'
        ]
      },
      note: 'Count gaps, not marks — the same trap as with fractions.'
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'A 100-square grid has 30 squares shaded. Write that as a decimal.', a: '0.30, or 0.3', hint: '30 hundredths.' },
    { q: 'To show tenths on a number line from 0 to 1, how many gaps do you need?', a: '10', hint: null },
    { q: 'Where does 0.75 sit between 0 and 1?', a: 'Three quarters of the way along.', hint: null },
    { q: 'Write 85 cents as a decimal part of a dollar.', a: '$0.85', hint: null }
  ],
  retrieval: [
    { q: 'How many gaps between 0 and 1 if you are showing tenths?', a: 'Ten.' }
  ]
},

/* ============================================================ 5 */
{
  id: 'dc-05-reading-writing',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Reading and writing decimals',
  type: 'concept',
  tier: 'taught',
  prereqs: ['dc-03-place-value'],
  one_idea: 'A zero inside a decimal holds a column open, and changes the number completely.',
  sections: [
    {
      h: 'Saying them properly',
      example: {
        label: 'Example',
        lines: [
          '0.7    "nought point seven"    or  "seven tenths"',
          '0.36   "nought point three six"',
          '4.05   "four point nought five"',
          '',
          'Say the digits one at a time after the point.',
          'Not "point thirty six".'
        ]
      }
    },
    {
      h: 'Zero as a placeholder',
      p: ['A zero between the point and another digit pushes that digit into a smaller column.'],
      example: {
        label: 'Example',
        lines: [
          '4.5    =  4 and 5 TENTHS      =  4.50',
          '4.05   =  4 and 5 HUNDREDTHS',
          '',
          '4.5 is ten times bigger than 4.05.'
        ]
      },
      rule: 'A zero after the point is never decoration. It is doing a job.'
    },
    {
      h: 'Writing from words',
      example: {
        label: 'Example',
        lines: [
          '"three and forty-two hundredths"   ->  3.42',
          '"six and nine hundredths"          ->  6.09',
          '"twelve thousandths"               ->  0.012'
        ]
      },
      note: 'Work out which column the LAST digit belongs in, then fill backwards.'
    }
  ],
  confusable_with: [
    { label: 'Reading 0.36 as "point thirty six"', why: 'It invites you to treat 36 as a whole number. Say the digits separately.' },
    { label: 'Treating 4.05 and 4.5 as the same', why: 'They are not close. 4.5 is ten times the decimal part of 4.05.' }
  ],
  practice: [
    { q: 'Write "five and seven hundredths" in digits.', a: '5.07', hint: 'The 7 must land in the hundredths column.' },
    { q: 'Write "nought point four two" in digits.', a: '0.42', hint: null },
    { q: 'Which is bigger, 2.06 or 2.6?', a: '2.6', hint: 'What column is each 6 in?' },
    { q: 'Write eight thousandths as a decimal.', a: '0.008', hint: null },
    { q: 'Read 10.4 out loud correctly.', a: '"Ten point four", or "ten and four tenths"', hint: null }
  ],
  retrieval: [
    { q: 'Which is bigger, 3.07 or 3.7?', a: '3.7' },
    { q: 'What job does the zero do in 5.09?', a: 'Holds the tenths column, pushing the 9 into hundredths.' }
  ]
},

/* ============================================================ 6 */
{
  id: 'dc-06-comparing',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Comparing and ordering decimals',
  type: 'concept',
  tier: 'taught',
  prereqs: ['dc-05-reading-writing'],
  one_idea: 'Compare column by column from the left, and stop at the first difference.',
  sections: [
    {
      h: 'The method',
      example: {
        label: 'Example',
        lines: [
          'Which is bigger, 3.45 or 3.5?',
          '',
          'ones      3 = 3    same, keep going',
          'tenths    4 < 5    stop here',
          '',
          '3.5 is bigger.'
        ]
      },
      rule: 'Left to right. The first column that differs decides it. Nothing after that matters.'
    },
    {
      h: 'Line them up if it helps',
      p: ['Padding with zeros makes both the same length without changing either value.'],
      example: {
        label: 'Example',
        lines: [
          '0.45  vs  0.7',
          '',
          '0.45',
          '0.70      <- pad with a zero',
          '',
          '45 hundredths  vs  70 hundredths  ->  0.7 is bigger'
        ]
      }
    },
    {
      h: 'Ordering a list',
      example: {
        label: 'Example',
        lines: [
          'Order:  0.6,  0.06,  0.66,  0.16',
          '',
          'Pad:    0.60, 0.06, 0.66, 0.16',
          'Sort:   0.06, 0.16, 0.60, 0.66'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'More digits means a bigger number', why: 'This is the biggest decimal mistake there is. 0.45 has more digits than 0.7 and is SMALLER. Length tells you nothing — the columns do.' },
    { id: 'fr-09-comparing', why: 'With fractions a bigger bottom means smaller pieces. With decimals there is no bottom number to look at — you compare columns instead.' }
  ],
  practice: [
    { q: 'Which is bigger, 0.8 or 0.75?', a: '0.8', hint: 'Compare tenths first: 8 against 7.' },
    { q: 'Fill in the sign: 2.30 __ 2.3', a: '=', hint: null },
    { q: 'Which is bigger, 0.09 or 0.1?', a: '0.1', hint: 'Pad it: 0.09 against 0.10.' },
    { q: 'Order from smallest: 1.5, 1.05, 1.55, 1.45', a: '1.05, 1.45, 1.5, 1.55', hint: 'Pad them all to two places.' },
    { q: 'A student says 0.125 is bigger than 0.9 because it has more digits. Explain the mistake.', a: 'Digits do not decide size. 0.125 is 1 tenth and a bit; 0.9 is 9 tenths. 0.9 is bigger.', hint: 'Compare the tenths column.' }
  ],
  retrieval: [
    { q: 'Which is bigger, 0.35 or 0.4?', a: '0.4' },
    { q: 'Does a decimal with more digits have to be bigger?', a: 'No. Compare columns from the left instead.' }
  ]
},

/* ============================================================ 7 */
{
  id: 'dc-07-equivalent',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Equivalent decimals',
  type: 'concept',
  tier: 'taught',
  prereqs: ['dc-06-comparing', 'fr-07-equivalent'],
  one_idea: 'Zeros on the end of a decimal change nothing.',
  sections: [
    {
      h: 'Trailing zeros are free',
      example: {
        label: 'Example',
        lines: [
          '0.5  =  0.50  =  0.500  =  0.5000',
          '',
          '5 tenths  =  50 hundredths  =  500 thousandths'
        ]
      }
    },
    {
      h: 'Why it works',
      p: ['It is the same machine as equivalent fractions. Multiplying top and bottom by ten turns tenths into hundredths, and writing the extra zero does exactly that.'],
      example: {
        label: 'Example',
        lines: [
          '0.5   =  5/10',
          '        5/10  x 10/10  =  50/100',
          '                       =  0.50'
        ]
      },
      rule: 'Zeros at the END are decoration. Zeros anywhere else are doing a job.'
    }
  ],
  confusable_with: [
    { label: 'Thinking any zero can be added or removed', why: '0.5 = 0.50 is fine, because the zero is on the end. 0.5 is NOT 0.05 — that zero is between the point and the 5, so it moves the 5 into a smaller column.' }
  ],
  practice: [
    { q: 'Is 0.7 equal to 0.70?', a: 'Yes.', hint: null },
    { q: 'Is 0.7 equal to 0.07?', a: 'No. 0.07 is ten times smaller.', hint: 'Where is the zero sitting?' },
    { q: 'Write 0.3 with three decimal places.', a: '0.300', hint: null },
    { q: 'Simplify 0.400 as much as you can.', a: '0.4', hint: null },
    { q: 'Why does adding a zero to the end of 0.6 not change it?', a: '0.6 is 6/10 and 0.60 is 60/100, which are equivalent fractions.', hint: null }
  ],
  retrieval: [
    { q: 'Is 1.20 the same as 1.2?', a: 'Yes.' },
    { q: 'Is 0.4 the same as 0.04?', a: 'No.' }
  ]
},

/* ============================================================ 8 */
{
  id: 'dc-08-converting-fractions',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Converting fractions and decimals',
  type: 'concept',
  tier: 'taught',
  prereqs: ['dc-07-equivalent', 'fr-08-simplifying'],
  one_idea: 'A fraction becomes a decimal when you rewrite it over 10, 100 or 1000.',
  sections: [
    {
      h: 'Fraction to decimal, the easy way',
      p: ['If the bottom can become 10, 100 or 1000, use an equivalent fraction.'],
      example: {
        label: 'Example',
        lines: [
          '3/4   ->  bottom 4 x 25 = 100',
          '          top    3 x 25 = 75',
          '      ->  75/100  =  0.75',
          '',
          '2/5   ->  2/5 x 2/2  =  4/10   =  0.4'
        ]
      }
    },
    {
      h: 'Fraction to decimal, always works',
      p: ['Divide the top by the bottom.'],
      example: {
        label: 'Example',
        lines: [
          '3/8   ->  3 / 8  =  0.375',
          '1/3   ->  1 / 3  =  0.333...  never ends'
        ]
      },
      note: 'A decimal that stops is called terminating. 1/3 does not terminate, which is why fractions still exist.'
    },
    {
      h: 'Decimal to fraction',
      example: {
        label: 'Example',
        lines: [
          '0.6    ->  6/10    ->  simplify  ->  3/5',
          '0.25   ->  25/100  ->  simplify  ->  1/4',
          '0.125  ->  125/1000 -> simplify  ->  1/8',
          '',
          'The last column names the bottom number.'
        ]
      },
      rule: 'Count the decimal places. One place is tenths, two is hundredths, three is thousandths.'
    }
  ],
  confusable_with: [
    { label: 'Thinking 0.5 is one fifth', why: '0.5 is 5/10, which is one HALF. The 5 you can see is not the bottom of the fraction.' },
    { label: 'Reading 0.25 as 25/10', why: 'Two decimal places means hundredths, so it is 25/100. Count the places.' }
  ],
  practice: [
    { q: 'Write 1/4 as a decimal.', a: '0.25', hint: 'Make the bottom 100.' },
    { q: 'Write 0.8 as a fraction in simplest form.', a: '4/5', hint: '8/10 simplifies.' },
    { q: 'Write 7/10 as a decimal.', a: '0.7', hint: null },
    { q: 'Write 0.45 as a fraction in simplest form.', a: '9/20', hint: '45/100, divide both by 5.' },
    { q: 'Write 5/8 as a decimal.', a: '0.625', hint: 'Divide 5 by 8.' },
    { q: 'Which is bigger, 3/5 or 0.65?', a: '0.65  (3/5 = 0.6)', hint: 'Convert one so both are in the same form.' }
  ],
  retrieval: [
    { q: 'Write 3/4 as a decimal.', a: '0.75' },
    { q: 'Write 0.5 as a fraction.', a: '1/2' }
  ]
},

/* ============================================================ 9 */
{
  id: 'dc-09-rounding',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Rounding decimals',
  type: 'concept',
  tier: 'taught',
  prereqs: ['dc-06-comparing'],
  one_idea: 'Look at the digit just after the place you are rounding to, and nothing else.',
  sections: [
    {
      h: 'The method',
      example: {
        label: 'Example',
        lines: [
          'Round 3.472 to one decimal place (nearest tenth).',
          '',
          'Step 1  find the tenths digit        3.4|72',
          'Step 2  look at the NEXT digit only     7',
          'Step 3  7 is 5 or more, so round up',
          '',
          'Answer: 3.5'
        ]
      },
      rule: '5 or more rounds up. 4 or less stays. Only the next digit votes.'
    },
    {
      h: 'To different places',
      example: {
        label: 'Example',
        lines: [
          '2.4863  rounded to',
          '',
          'nearest whole number   2       (look at 4)',
          'nearest tenth          2.5     (look at 8)',
          'nearest hundredth      2.49    (look at 6)',
          'nearest thousandth     2.486   (look at 3)'
        ]
      }
    },
    {
      h: 'When rounding carries',
      example: {
        label: 'Example',
        lines: [
          'Round 3.98 to one decimal place.',
          '',
          'tenths digit 9, next digit 8, so round up',
          '9 becomes 10, which carries into the ones',
          '',
          'Answer: 4.0'
        ]
      },
      note: 'Write 4.0, not 4, when the question asked for one decimal place.'
    }
  ],
  confusable_with: [
    { label: 'Rounding one digit at a time from the right', why: '2.449 to one decimal place is 2.4, not 2.5. Rounding the 9 first to get 2.45 and then rounding again is not the method. Look at ONE digit.' }
  ],
  practice: [
    { q: 'Round 5.67 to the nearest whole number.', a: '6', hint: 'Look at the tenths digit.' },
    { q: 'Round 0.834 to one decimal place.', a: '0.8', hint: 'The next digit is 3.' },
    { q: 'Round 12.395 to two decimal places.', a: '12.40', hint: 'The next digit is 5, so round up.' },
    { q: 'Round 9.96 to one decimal place.', a: '10.0', hint: 'The rounding carries.' },
    { q: 'Round 2.449 to one decimal place.', a: '2.4', hint: 'Only the hundredths digit votes, and it is 4.' },
    { q: 'A shop price is $3.276. What would it be to the nearest cent?', a: '$3.28', hint: 'Cents are hundredths.' }
  ],
  retrieval: [
    { q: 'Round 4.68 to one decimal place.', a: '4.7' },
    { q: 'Which digit do you look at when rounding?', a: 'The one immediately after the place you are rounding to.' }
  ]
},

/* ============================================================ 10 */
{
  id: 'dc-10-add-subtract',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Adding and subtracting decimals',
  type: 'concept',
  tier: 'taught',
  prereqs: ['dc-07-equivalent', 'dc-09-rounding'],
  one_idea: 'Line up the decimal points, not the ends of the numbers.',
  sections: [
    {
      h: 'Same number of places',
      example: {
        label: 'Example',
        lines: [
          '  3.42',
          '+ 1.35',
          '------',
          '  4.77',
          '',
          'The points sit above each other, so the columns match.'
        ]
      }
    },
    {
      h: 'Different number of places: pad with zeros',
      example: {
        label: 'Example',
        lines: [
          '4.7 + 2.35',
          '',
          '  4.70      <- pad to two places',
          '+ 2.35',
          '------',
          '  7.05'
        ]
      },
      rule: 'Padding with trailing zeros is free. It makes the columns line up without changing either number.'
    },
    {
      h: 'Whole numbers have an invisible point',
      example: {
        label: 'Example',
        lines: [
          '6 - 2.4',
          '',
          '  6.0      <- 6 is 6.0',
          '- 2.4',
          '------',
          '  3.6'
        ]
      }
    },
    {
      h: 'Check by estimating',
      example: {
        label: 'Example',
        lines: [
          '4.7 + 2.35',
          '',
          'Roughly 5 + 2 = 7',
          'Answer was 7.05  ->  sensible'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'Lining the numbers up from the right', why: 'That works for whole numbers and breaks everything here. 4.7 + 2.35 lined up from the right puts the 7 above the 5, adding tenths to hundredths. Line up the POINTS.' }
  ],
  practice: [
    { q: '2.4 + 3.7', a: '6.1', hint: null },
    { q: '5.68 + 2.4', a: '8.08', hint: 'Pad 2.4 to 2.40.' },
    { q: '9 - 3.25', a: '5.75', hint: 'Write 9 as 9.00.' },
    { q: '12.3 - 4.87', a: '7.43', hint: null },
    { q: '0.45 + 0.6 + 1.2', a: '2.25', hint: 'Pad them all to two places.' },
    { q: 'A student writes 3.5 + 0.42 = 3.92 and another writes 7.7. Which is right?', a: '3.92. The second lined the digits up from the right instead of at the point.', hint: 'Estimate: 3.5 plus not-quite-half.' }
  ],
  retrieval: [
    { q: '1.5 + 2.75', a: '4.25' },
    { q: 'What do you line up when adding decimals?', a: 'The decimal points.' }
  ]
},

/* ============================================================ 11 */
{
  id: 'dc-11-multiplying',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Multiplying decimals',
  type: 'concept',
  tier: 'taught',
  prereqs: ['dc-10-add-subtract', 'fr-14-multiplying'],
  one_idea: 'Multiply as if there were no points, then put the point back.',
  sections: [
    {
      h: 'Multiplying by 10, 100 and 1000',
      example: {
        label: 'Example',
        lines: [
          '3.42  x 10    =  34.2',
          '3.42  x 100   =  342',
          '3.42  x 1000  =  3420',
          '',
          'The digits move left. The point stays put.'
        ]
      },
      note: 'People say "move the decimal point". It is really the digits shifting columns — which is why 3.42 x 1000 needs a zero added.'
    },
    {
      h: 'Decimal times a whole number',
      example: {
        label: 'Example',
        lines: [
          '2.4 x 3',
          '',
          'Ignore the point:  24 x 3  =  72',
          'Count the places:  2.4 has 1',
          'Put 1 place back:  7.2'
        ]
      }
    },
    {
      h: 'Decimal times decimal',
      example: {
        label: 'Example',
        lines: [
          '0.3 x 0.4',
          '',
          'Ignore the points:  3 x 4  =  12',
          'Count the places:   1 + 1  =  2',
          'Put 2 places back:  0.12'
        ]
      },
      rule: 'Total decimal places in the question equals decimal places in the answer.'
    },
    {
      h: 'The surprising part',
      p: ['Multiplying by a number less than 1 makes the answer smaller — the same thing that happens with fractions.'],
      example: {
        label: 'Example',
        lines: [
          '8 x 3    =  24    bigger',
          '8 x 0.5  =  4     smaller',
          '8 x 0.1  =  0.8   much smaller'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'Multiplying always makes things bigger', why: 'False whenever you multiply by less than 1. Exactly the same trap as multiplying by a proper fraction — 0.5 and 1/2 are the same number.' },
    { label: 'Lining up the points when multiplying', why: 'That is the ADDING rule. For multiplying, ignore the points, multiply, then count places.' }
  ],
  practice: [
    { q: '4.6 x 10', a: '46', hint: null },
    { q: '0.25 x 100', a: '25', hint: null },
    { q: '3.2 x 4', a: '12.8', hint: '32 x 4 = 128, one decimal place.' },
    { q: '0.6 x 0.7', a: '0.42', hint: '6 x 7 = 42, two decimal places.' },
    { q: '1.5 x 0.2', a: '0.30, or 0.3', hint: null },
    { q: 'Is 12 x 0.4 bigger or smaller than 12? Why?', a: 'Smaller — 4.8. You are taking four tenths of it.', hint: null }
  ],
  retrieval: [
    { q: '0.4 x 0.2', a: '0.08' },
    { q: 'How do you know how many decimal places the answer has?', a: 'Add up the decimal places in the question.' }
  ]
},

/* ============================================================ 12 */
{
  id: 'dc-12-dividing',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Dividing decimals',
  type: 'concept',
  tier: 'taught',
  prereqs: ['dc-11-multiplying', 'fr-15-dividing'],
  one_idea: 'Dividing asks how many of one thing fit inside another, whatever form they are in.',
  sections: [
    {
      h: 'Dividing by 10, 100 and 1000',
      example: {
        label: 'Example',
        lines: [
          '46.2  / 10    =  4.62',
          '46.2  / 100   =  0.462',
          '46.2  / 1000  =  0.0462',
          '',
          'The digits move right, one column per zero.'
        ]
      }
    },
    {
      h: 'Decimal divided by a whole number',
      p: ['Divide as usual and keep the point in line.'],
      example: {
        label: 'Example',
        lines: [
          '7.2 / 3',
          '',
          '72 / 3  =  24',
          'One decimal place in the question, so one in the answer',
          '',
          'Answer: 2.4'
        ]
      }
    },
    {
      h: 'Dividing by a decimal',
      p: ['Make the divider a whole number first, by multiplying BOTH numbers by 10 or 100.'],
      example: {
        label: 'Example',
        lines: [
          '4.8 / 0.6',
          '',
          'Multiply both by 10:   48 / 6',
          '                       =  8',
          '',
          'Answer: 8'
        ]
      },
      rule: 'Whatever you multiply the divider by, do the same to the other number.'
    },
    {
      h: 'The surprising part again',
      example: {
        label: 'Example',
        lines: [
          '6 / 2    =  3     smaller',
          '6 / 0.5  =  12    bigger',
          '',
          '"How many halves fit in 6?"  ->  12'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'Dividing always makes things smaller', why: 'False whenever you divide by less than 1. 6 / 0.5 = 12. Same trap as dividing by a fraction.' },
    { label: 'Multiplying only one of the two numbers', why: 'If you turn 0.6 into 6, you must turn 4.8 into 48 as well. Changing one side changes the answer.' }
  ],
  practice: [
    { q: '3.6 / 10', a: '0.36', hint: null },
    { q: '45 / 100', a: '0.45', hint: null },
    { q: '8.4 / 4', a: '2.1', hint: null },
    { q: '0.9 / 0.3', a: '3', hint: 'Multiply both by 10: 9 / 3.' },
    { q: '2.5 / 0.5', a: '5', hint: 'How many halves fit in 2.5?' },
    { q: 'Is 10 / 0.2 bigger or smaller than 10?', a: 'Bigger — 50. You are asking how many two-tenths fit in 10.', hint: null }
  ],
  retrieval: [
    { q: '6.4 / 8', a: '0.8' },
    { q: 'What do you do first when dividing by a decimal?', a: 'Multiply both numbers so the divider becomes a whole number.' }
  ]
},

/* ============================================================ 13 */
{
  id: 'dc-13-fdp',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Decimals, fractions and percentages',
  type: 'concept',
  tier: 'taught',
  prereqs: ['dc-08-converting-fractions'],
  one_idea: 'They are three costumes for the same number, and you should be able to change at will.',
  sections: [
    {
      h: 'The conversions',
      example: {
        label: 'Example',
        lines: [
          'decimal  ->  percentage    x 100     0.35  ->  35%',
          'percentage -> decimal      / 100     35%   ->  0.35',
          'decimal  ->  fraction      place value  0.35 -> 35/100 -> 7/20',
          'fraction ->  decimal       divide    7/20  ->  0.35'
        ]
      }
    },
    {
      h: 'The ones worth memorising',
      example: {
        label: 'Example',
        lines: [
          '1/2   =  0.5    =  50%',
          '1/4   =  0.25   =  25%',
          '3/4   =  0.75   =  75%',
          '1/10  =  0.1    =  10%',
          '1/5   =  0.2    =  20%',
          '1/3   =  0.333..=  33.3%'
        ]
      },
      rule: 'Knowing these six by heart removes most of the work in the other topics.'
    },
    {
      h: 'Pick the easiest form for the job',
      example: {
        label: 'Example',
        lines: [
          '"25% off $60"',
          '',
          'as a fraction:  1/4 of 60  =  15    <- easiest',
          'as a decimal:   0.25 x 60  =  15',
          '',
          'Same answer. Choose whichever you can do in your head.'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'Writing 0.5 as 5%', why: '0.5 is 50%. Multiply by 100, not 10. Check against something known: half of anything is 50%, not 5%.' },
    { label: 'Writing 7% as 0.7', why: '7% is 0.07. Two decimal places, because percentages are hundredths.' }
  ],
  practice: [
    { q: 'Write 0.6 as a percentage.', a: '60%', hint: 'Multiply by 100.' },
    { q: 'Write 45% as a decimal.', a: '0.45', hint: null },
    { q: 'Write 3/4 as a decimal and a percentage.', a: '0.75 and 75%', hint: null },
    { q: 'Write 8% as a decimal.', a: '0.08', hint: 'Percentages are hundredths.' },
    { q: 'Which is biggest: 0.7, 3/4, or 72%?', a: '3/4  (0.75, versus 0.7 and 0.72)', hint: 'Put all three into decimals.' },
    { q: 'A student says 0.2 = 2%. Correct them.', a: '0.2 = 20%. It is two tenths, which is twenty hundredths.', hint: null }
  ],
  retrieval: [
    { q: 'Write 0.25 as a fraction and a percentage.', a: '1/4 and 25%' },
    { q: 'Write 90% as a decimal.', a: '0.9' }
  ]
},

/* ============================================================ 14 */
{
  id: 'dc-14-word-problems',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Decimals in real problems',
  type: 'concept',
  tier: 'taught',
  prereqs: ['dc-12-dividing', 'dc-13-fdp'],
  one_idea: 'Work out what the question is asking before touching the numbers.',
  sections: [
    {
      h: 'What the words usually mean',
      list: [
        '"total", "altogether"  ->  add',
        '"change from", "how much more"  ->  subtract',
        '"each", "per"  ->  multiply or divide, check which',
        '"how many fit", "shared between"  ->  divide',
        '"of"  ->  multiply'
      ]
    },
    {
      h: 'A worked one',
      example: {
        label: 'Example',
        lines: [
          'Three books cost $12.45 each. You pay with $50.',
          'How much change?',
          '',
          'Step 1  3 x 12.45  =  37.35',
          'Step 2  50 - 37.35 =  12.65',
          '',
          'Change: $12.65'
        ]
      }
    },
    {
      h: 'A measurement one',
      example: {
        label: 'Example',
        lines: [
          'A 4.5 m plank is cut into pieces 0.75 m long.',
          'How many pieces?',
          '',
          '"how many fit"  ->  divide',
          '4.5 / 0.75  ->  450 / 75  =  6',
          '',
          '6 pieces'
        ]
      }
    },
    {
      h: 'Answers with money',
      p: ['Money always shows two decimal places, even when the second one is a zero.'],
      example: {
        label: 'Example',
        lines: [
          'Correct:    $6.50',
          'Incorrect:  $6.5'
        ]
      }
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'Four drinks cost $2.35 each. What is the total?', a: '$9.40', hint: null },
    { q: 'You buy $14.60 of food and pay with $20. What is your change?', a: '$5.40', hint: null },
    { q: 'A runner covers 5.2 km, 3.75 km and 4.8 km. How far in total?', a: '13.75 km', hint: 'Pad to two places.' },
    { q: 'A 2.4 kg bag of rice is split into 0.3 kg portions. How many portions?', a: '8', hint: '24 / 3.' },
    { q: 'Petrol costs $2.15 a litre. What do 12 litres cost?', a: '$25.80', hint: null },
    { q: 'A shirt is $40 with 25% off. What do you pay?', a: '$30', hint: '25% is a quarter.' }
  ],
  retrieval: [
    { q: 'How many decimal places should a money answer have?', a: 'Two, always.' },
    { q: 'Two items at $3.25 each — total?', a: '$6.50' }
  ]
},

/* ============================================================ 15 */
{
  id: 'dc-15-estimation',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Estimating and checking',
  type: 'concept',
  tier: 'taught',
  prereqs: ['dc-14-word-problems'],
  one_idea: 'A rough answer worked out first tells you whether the exact one is believable.',
  sections: [
    {
      h: 'Estimate before you calculate',
      p: ['Round each number to something easy, then do the easy sum in your head.'],
      example: {
        label: 'Example',
        lines: [
          '19.8 x 4.1',
          '',
          'Estimate:  20 x 4  =  80',
          'Calculate: 81.18',
          '',
          '81.18 is near 80  ->  believable'
        ]
      }
    },
    {
      h: 'Catching a misplaced point',
      p: ['Almost every decimal mistake is off by a factor of ten, which an estimate catches immediately.'],
      example: {
        label: 'Example',
        lines: [
          '6.3 x 4  =  ?',
          '',
          'Estimate:  6 x 4  =  24',
          '',
          'If you get 2.52  ->  ten times too small',
          'If you get 252   ->  ten times too big',
          'If you get 25.2  ->  right'
        ]
      },
      rule: 'If your answer is ten times off the estimate, the decimal point is in the wrong place.'
    },
    {
      h: 'Check with the inverse',
      example: {
        label: 'Example',
        lines: [
          'You worked out  4.8 / 0.6  =  8',
          '',
          'Check:  8 x 0.6  =  4.8   correct'
        ]
      }
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'Estimate 9.7 + 20.4', a: 'About 30', hint: null },
    { q: 'Estimate 4.9 x 6.1', a: 'About 30', hint: null },
    { q: 'A student gets 3.2 x 5 = 1.6. Use an estimate to show it is wrong.', a: 'About 3 x 5 = 15, so 1.6 is far too small. The answer is 16.', hint: null },
    { q: 'You calculate 24.6 / 3 = 8.2. Check it with the inverse.', a: '8.2 x 3 = 24.6, so it is right.', hint: null },
    { q: 'Estimate the total of $4.95, $9.99 and $2.05.', a: 'About $17 (5 + 10 + 2)', hint: null }
  ],
  retrieval: [
    { q: 'Your answer is ten times bigger than your estimate. What is probably wrong?', a: 'The decimal point is in the wrong place.' }
  ]
},

/* ============================================================ 16 */
{
  id: 'dc-16-review',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Putting it all together',
  type: 'concept',
  tier: 'taught',
  prereqs: ['dc-15-estimation'],
  one_idea: 'Nearly every decimal mistake is a place-value mistake wearing a disguise.',
  sections: [
    {
      h: 'The routine',
      list: [
        '1.  What is each digit actually worth?',
        '2.  Would padding with zeros make this easier to see?',
        '3.  Which operation does the question want?',
        '4.  Estimate first',
        '5.  Calculate',
        '6.  Is the answer near the estimate?'
      ]
    },
    {
      h: 'The four rules that get mixed up most',
      example: {
        label: 'Keep these straight',
        lines: [
          'ADD/SUBTRACT   line up the decimal POINTS',
          'MULTIPLY       ignore points, then count total places',
          'DIVIDE by a decimal   multiply BOTH until the divider is whole',
          'COMPARE        column by column from the left'
        ]
      },
      note: 'If you cannot remember which, test it on something you know. 0.5 + 0.5 must be 1. 0.5 x 0.5 must be less than 0.5.'
    },
    {
      h: 'The three traps, one more time',
      list: [
        'More digits does NOT mean bigger  —  0.45 < 0.7',
        'Multiplying does NOT always grow  —  8 x 0.5 = 4',
        'Dividing does NOT always shrink   —  6 / 0.5 = 12'
      ]
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'Order from smallest: 0.7, 0.07, 0.77, 0.17', a: '0.07, 0.17, 0.7, 0.77', hint: null },
    { q: 'Round 8.462 to one decimal place.', a: '8.5', hint: null },
    { q: '5.6 + 12.35', a: '17.95', hint: null },
    { q: '0.8 x 0.05', a: '0.04', hint: '8 x 5 = 40. One place plus two places is three, so 0.040.' },
    { q: '7.2 / 0.9', a: '8', hint: null },
    { q: 'Write 0.35 as a fraction and a percentage.', a: '7/20 and 35%', hint: null },
    { q: 'A 1.5 kg cake is cut into 0.25 kg slices. How many slices?', a: '6', hint: null },
    { q: 'A student says 0.9 is smaller than 0.15. Show why not.', a: '0.9 is 9 tenths; 0.15 is 1 tenth and 5 hundredths. Padding gives 0.90 against 0.15.', hint: null }
  ],
  retrieval: [
    { q: 'What do you line up when adding decimals?', a: 'The decimal points.' },
    { q: 'Does a longer decimal mean a bigger number?', a: 'No.' }
  ]
}

);
