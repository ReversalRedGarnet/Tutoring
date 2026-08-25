/* ------------------------------------------------------------------
   PERCENTAGES — a full sequential block, AU Year 7.

   Third of the number-system trio. Fractions and Decimals come first
   and this unit leans on both: several topics list a fraction or a
   decimal topic as a prerequisite, so when a percentage will not stick
   the thing underneath it is one click away.

   Schema is the same as topics.fractions.js, plus one field:

     figure { caption, svg }   inline SVG, rendered above the list and
                               the worked example. Colours come from the
                               f-* classes in style.css, never hardcoded.

   Written for a learner who gets sidetracked and invents connections
   between things that are not connected. Percentages are dense with
   false rules — "50% off twice is 100% off", "a 20% rise then a 20%
   fall gets you back" — so those are named out loud before he can
   arrive at them himself.
   ------------------------------------------------------------------ */

window.TOPICS = window.TOPICS || [];

window.TOPICS.push(

/* ============================================================ 1 */
{
  id: 'pc-01-what-is',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'What is a percentage?',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-01-what-is'],
  one_idea: 'A percentage is a fraction that always has 100 on the bottom.',
  sections: [
    {
      h: 'Per cent means "per hundred"',
      p: ['The word splits into two parts. "Per" means for each. "Cent" means hundred — the same cent as in century and centimetre.'],
      example: {
        label: 'Example',
        lines: [
          '37%   means   37 out of every 100',
          '',
          'as a fraction     37/100',
          'as a decimal      0.37'
        ]
      },
      rule: 'A percentage is a fraction with a denominator of 100. The % sign is doing the job of the 100.'
    },
    {
      h: 'Why 100?',
      p: ['Any two fractions can be compared once they share a denominator. Percentages fix that denominator at 100 for everybody, so any two percentages can be compared instantly.'],
      figure: {
        caption: 'A hundred-square with 37 of the 100 squares shaded, showing 37%.',
        svg: '<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg"><g class="f-fill"><rect x="20" y="20" width="200" height="60"/><rect x="20" y="80" width="140" height="20"/></g><g class="f-grid"><path d="M20 20h200v200H20z"/><path d="M40 20v200M60 20v200M80 20v200M100 20v200M120 20v200M140 20v200M160 20v200M180 20v200M200 20v200"/><path d="M20 40h200M20 60h200M20 80h200M20 100h200M20 120h200M20 140h200M20 160h200M20 180h200M20 200h200"/></g></svg>'
      }
    },
    {
      h: 'Below 100 and above 100',
      p: ['100% is the whole thing. A percentage can go past it.'],
      list: [
        '0%    =  none of it',
        '50%   =  half of it',
        '100%  =  all of it',
        '150%  =  one and a half times it'
      ],
      note: 'A percentage over 100 is not a mistake. It just means more than the whole you started with.'
    }
  ],
  confusable_with: [
    { label: 'A percentage can never be more than 100', why: 'It can. Prices, populations and scores all grow past their starting amount. 150% of $40 is $60.' }
  ],
  practice: [
    { q: 'Write 43% as a fraction.', a: '43/100', hint: 'The % sign is the 100 on the bottom.' },
    { q: 'What does "per cent" literally mean?', a: 'Per hundred — out of every 100.', hint: null },
    { q: '9 squares out of 100 are shaded. Write that as a percentage.', a: '9%', hint: null },
    { q: 'Is 120% possible? Explain in one line.', a: 'Yes. It means 1.2 times the whole — more than you started with.', hint: null },
    { q: 'Write 100% as a fraction, then simplify it.', a: '100/100 = 1', hint: 'What is the whole thing as a fraction?' }
  ],
  retrieval: [
    { q: 'What number is always on the bottom of a percentage?', a: '100.' },
    { q: 'Write 61% as a fraction.', a: '61/100' }
  ]
},

/* ============================================================ 2 */
{
  id: 'pc-02-why',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Why percentages are used',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pc-01-what-is'],
  one_idea: 'Percentages let you compare two things that started from different sizes.',
  sections: [
    {
      h: 'The problem they solve',
      p: ['Two test scores: 18 out of 20, and 42 out of 50. Which is better? The raw numbers do not say, because the tests were different sizes.'],
      example: {
        label: 'Example',
        lines: [
          '18 out of 20   ->   90 out of 100   ->   90%',
          '42 out of 50   ->   84 out of 100   ->   84%',
          '',
          'Now they can be compared. The first one is better.'
        ]
      },
      rule: 'Percentages put everything on the same scale so different-sized things can be compared fairly.'
    },
    {
      h: 'Where they turn up',
      list: [
        'Money        —  interest, GST, tips',
        'Shopping     —  30% off, half price',
        'School       —  test results',
        'News         —  unemployment, rainfall, survey results',
        'Sport        —  free-throw and goal-kicking accuracy',
        'Phone        —  battery, storage, download progress'
      ]
    },
    {
      h: 'The catch',
      p: ['A percentage hides how big the original was. 50% off sounds the same on a $4 drink and a $400 phone, but one saves you two dollars and the other saves you two hundred.'],
      note: 'Always ask "percentage of what?" A percentage on its own is not a quantity.'
    }
  ],
  confusable_with: [
    { label: 'A bigger percentage always means a bigger amount', why: '90% of 10 is 9. 20% of 500 is 100. The percentage tells you the share, not the size.' }
  ],
  practice: [
    { q: 'Two players: 7 goals from 10 shots, and 12 goals from 20 shots. Who is more accurate?', a: 'The first — 70% against 60%.', hint: 'Turn each into a score out of 100.' },
    { q: 'Why is "he scored 15" not enough information to judge a test result?', a: 'You do not know what the test was out of.', hint: null },
    { q: 'Shop A takes 25% off a $8 book. Shop B takes 10% off a $200 jacket. Which saves more money?', a: 'Shop B — $20 saved against $2.', hint: 'Percentage of what?' },
    { q: 'Name two places outside school where you would meet a percentage.', a: 'Any two: sale prices, phone battery, interest, GST, weather forecasts, survey results.', hint: null },
    { q: 'A class of 25 and a class of 40 both report 80% attendance. Do the same number of students turn up?', a: 'No. 20 in the first, 32 in the second.', hint: null }
  ],
  retrieval: [
    { q: 'Why do percentages make two test scores comparable?', a: 'They put both on a scale out of 100.' },
    { q: 'What question should you always ask about a percentage?', a: 'Percentage of what?' }
  ]
},

/* ============================================================ 3 */
{
  id: 'pc-03-representing',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Ways to show a percentage',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pc-01-what-is', 'fr-04-representing'],
  one_idea: 'The same percentage can be drawn as a grid, a bar, a point on a line, a fraction or a decimal.',
  sections: [
    {
      h: 'The hundred square',
      p: ['One hundred small squares make one whole. Shade the number of squares that matches the percentage.'],
      figure: {
        caption: 'A hundred-square with 25 squares shaded in the top-left corner, showing 25%.',
        svg: '<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg"><rect class="f-fill" x="20" y="20" width="100" height="100"/><g class="f-grid"><path d="M20 20h200v200H20z"/><path d="M40 20v200M60 20v200M80 20v200M100 20v200M120 20v200M140 20v200M160 20v200M180 20v200M200 20v200"/><path d="M20 40h200M20 60h200M20 80h200M20 100h200M20 120h200M20 140h200M20 160h200M20 180h200M20 200h200"/></g></svg>'
      },
      note: 'Counting shaded squares gives the percentage directly, because the grid already has 100 parts.'
    },
    {
      h: 'The number line',
      p: ['A percentage line runs from 0% to 100%, the same way a fraction line runs from 0 to 1. They are the same line with different labels.'],
      figure: {
        caption: 'A number line marked 0%, 25%, 50%, 75% and 100%, with 0, one quarter, one half, three quarters and 1 underneath.',
        svg: '<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg"><path class="f-line" d="M30 40h260"/><g class="f-line"><path d="M30 32v16M95 32v16M160 32v16M225 32v16M290 32v16"/></g><g class="f-label f-mid"><text x="30" y="24">0%</text><text x="95" y="24">25%</text><text x="160" y="24">50%</text><text x="225" y="24">75%</text><text x="290" y="24">100%</text><text x="30" y="66">0</text><text x="95" y="66">1/4</text><text x="160" y="66">1/2</text><text x="225" y="66">3/4</text><text x="290" y="66">1</text></g></svg>'
      }
    },
    {
      h: 'Four ways to say one thing',
      example: {
        label: 'Example',
        lines: [
          'in words     three quarters',
          'fraction     3/4',
          'decimal      0.75',
          'percentage   75%',
          '',
          'Four names. One amount.'
        ]
      },
      rule: 'Changing how a number is written never changes how big it is.'
    }
  ],
  confusable_with: [
    { id: 'fr-04-representing', why: 'Same pictures, different labelling. A fraction diagram can be cut into any number of parts; a percentage diagram is always cut into 100.' },
    { label: 'A shaded diagram must be shaded from the left', why: 'Where the shading sits makes no difference. 25 squares scattered anywhere on a hundred-square is still 25%.' }
  ],
  practice: [
    { q: 'A hundred-square has 60 squares shaded. Write it as a percentage, a fraction and a decimal.', a: '60%, 60/100, 0.60', hint: null },
    { q: 'Where does 50% sit on a line from 0% to 100%?', a: 'Exactly halfway.', hint: null },
    { q: 'On a hundred-square, how many squares would you shade for 8%?', a: '8', hint: 'Each square is one percent.' },
    { q: 'A bar is split into 10 equal parts and 3 are shaded. What percentage is that?', a: '30%', hint: 'Each part is a tenth, so each part is 10%.' },
    { q: 'Write "one half" in all four ways.', a: 'one half, 1/2, 0.5, 50%', hint: null }
  ],
  retrieval: [
    { q: 'How many squares are shaded on a hundred-square showing 14%?', a: '14.' },
    { q: 'What percentage sits halfway along the line from 0% to 100%?', a: '50%.' }
  ]
},

/* ============================================================ 4 */
{
  id: 'pc-04-fdp',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Fractions, decimals and percentages',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pc-03-representing', 'fr-10-converting', 'dc-13-fdp'],
  one_idea: 'Six conversions, but really only two moves: divide to go down, multiply to come back.',
  sections: [
    {
      h: 'Percentage to decimal, and back',
      p: ['A percentage is out of 100, so dividing by 100 gets you the decimal. Multiplying by 100 gets you back.'],
      example: {
        label: 'Example',
        lines: [
          'percentage -> decimal      divide by 100      point moves 2 left',
          '  62%   ->  0.62',
          '  7%    ->  0.07',
          '',
          'decimal -> percentage      multiply by 100    point moves 2 right',
          '  0.35  ->  35%',
          '  0.4   ->  40%'
        ]
      },
      rule: 'Two hops of the decimal point. Left to leave the percentage, right to enter it.'
    },
    {
      h: 'Percentage to fraction, and back',
      p: ['Put the percentage over 100, then simplify. Going the other way, make the denominator 100 if you can, or divide the top by the bottom.'],
      example: {
        label: 'Example',
        lines: [
          '40%   ->   40/100   ->   2/5        (divide both by 20)',
          '',
          '3/4   ->   3 / 4 = 0.75   ->   75%',
          '',
          '7/20  ->   x5 on top and bottom   ->   35/100   ->   35%'
        ]
      }
    },
    {
      h: 'The ones worth knowing by heart',
      example: {
        label: 'Learn these',
        lines: [
          '1/2   0.5     50%',
          '1/4   0.25    25%',
          '3/4   0.75    75%',
          '1/5   0.2     20%',
          '1/10  0.1     10%',
          '1/3   0.333   33.3%   (does not stop)'
        ]
      },
      note: 'Knowing this table removes most of the arithmetic from the rest of the unit.'
    }
  ],
  confusable_with: [
    { label: 'To make 0.4 a percentage, put a % on the end', why: '0.4% is four tenths of one percent, which is tiny. 0.4 is 40%. The number has to be multiplied by 100 first.' },
    { label: '1/3 is 0.33 exactly', why: 'It is 0.3333... forever. 0.33 is close enough for most work but it is not the same number.' },
    { id: 'dc-13-fdp', why: 'That topic converts fractions and decimals. This one adds the third form, so a value can enter or leave as any of the three.' }
  ],
  practice: [
    { q: 'Write 0.85 as a percentage.', a: '85%', hint: 'Move the point two places right.' },
    { q: 'Write 6% as a decimal.', a: '0.06', hint: 'Two places left. You will need a zero to fill the gap.' },
    { q: 'Write 35% as a fraction in simplest form.', a: '7/20', hint: '35/100, then divide both by 5.' },
    { q: 'Write 2/5 as a percentage.', a: '40%', hint: 'Multiply top and bottom by 20 to reach 100.' },
    { q: 'Write 3/8 as a percentage.', a: '37.5%', hint: '3 divided by 8 is 0.375.' },
    { q: 'Write 125% as a decimal and as a mixed number.', a: '1.25 and 1 1/4', hint: 'It is more than one whole.' }
  ],
  retrieval: [
    { q: 'Write 0.7 as a percentage.', a: '70%' },
    { q: 'Write 1/4 as a percentage.', a: '25%' }
  ]
},

/* ============================================================ 5 */
{
  id: 'pc-05-comparing',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Comparing and ordering',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pc-04-fdp', 'dc-06-comparing'],
  one_idea: 'To compare a fraction, a decimal and a percentage, turn them all into the same form first.',
  sections: [
    {
      h: 'Pick one form and convert everything',
      p: ['Mixed forms cannot be compared as they stand. Percentages are usually the easiest target, because everything lands on a scale out of 100.'],
      example: {
        label: 'Example',
        lines: [
          'Order from smallest:   0.6,   55%,   3/5,   1/2',
          '',
          '0.6   ->  60%',
          '55%   ->  55%',
          '3/5   ->  60%',
          '1/2   ->  50%',
          '',
          'Answer:  1/2,  55%,  0.6 and 3/5  (those two are equal)'
        ]
      },
      rule: 'Convert first, compare second. Never compare across two different forms.'
    },
    {
      h: 'Equal values look different',
      p: ['0.6 and 3/5 are the same number. When two entries convert to the same percentage, say so rather than picking one.'],
      note: 'Use = for equal values, < for smaller, > for larger. The wide end of the sign always faces the bigger number.'
    }
  ],
  confusable_with: [
    { label: 'More digits means a bigger percentage', why: 'The same trap as decimals. 9% is smaller than 40%, and 0.5 is bigger than 0.45.' },
    { label: 'A fraction with a bigger bottom number is bigger', why: 'It is the other way round. 1/8 is smaller than 1/4 because the pieces are smaller.' }
  ],
  practice: [
    { q: 'Which is larger, 0.7 or 68%?', a: '0.7, which is 70%.', hint: 'Convert the decimal to a percentage.' },
    { q: 'Order from smallest: 45%, 1/2, 0.4', a: '0.4, 45%, 1/2', hint: '40%, 45%, 50%.' },
    { q: 'Put the correct sign between 3/4 and 70%.', a: '3/4 > 70%', hint: '3/4 is 75%.' },
    { q: 'Which is larger, 1/3 or 30%?', a: '1/3, which is about 33.3%.', hint: null },
    { q: 'Order from largest: 0.25, 20%, 1/5, 2/5', a: '2/5, 0.25, then 20% and 1/5 equal', hint: '40%, 25%, 20%, 20%.' }
  ],
  retrieval: [
    { q: 'Which is bigger, 0.8 or 75%?', a: '0.8, which is 80%.' },
    { q: 'Before comparing mixed forms, what do you do?', a: 'Convert them all to the same form.' }
  ]
},

/* ============================================================ 6 */
{
  id: 'pc-06-of-amounts',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Finding a percentage of an amount',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pc-04-fdp', 'fr-02-of-a-set'],
  one_idea: 'Percentage of an amount means the same as fraction of an amount — "of" is still multiply.',
  sections: [
    {
      h: 'The building blocks',
      p: ['Most percentages can be reached by finding an easy one first and combining. These four are worth doing in your head.'],
      example: {
        label: 'Example',
        lines: [
          'For any amount:',
          '',
          '10%   divide by 10',
          '1%    divide by 100',
          '50%   halve it',
          '25%   halve it twice'
        ]
      },
      rule: '10% is a divide by 10. Everything else can be built from that.'
    },
    {
      h: 'Building the awkward ones',
      example: {
        label: 'Example',
        lines: [
          '35% of 80',
          '',
          '10% of 80   =  8',
          '30% of 80   =  8 x 3   =  24',
          '5% of 80    =  8 / 2   =  4',
          '',
          '35%  =  24 + 4  =  28'
        ]
      }
    },
    {
      h: 'The one-step method',
      p: ['Turn the percentage into a decimal and multiply. This works for every percentage, including the ugly ones.'],
      example: {
        label: 'Example',
        lines: [
          '18% of 250',
          '',
          '18%  ->  0.18',
          '0.18 x 250  =  45'
        ]
      },
      note: 'The building-block method is faster in a shop. The decimal method is safer in an exam. Both are correct.'
    }
  ],
  confusable_with: [
    { label: '"Of" means divide', why: '"Of" means multiply, in percentages exactly as in fractions. 1/4 of 20 is 20 x 1/4 = 5.' },
    { label: '10% of 60 is 10', why: '10% is a share of the 60, not a number of its own. 10% of 60 is 6.' },
    { id: 'fr-02-of-a-set', why: 'Same operation. A percentage is just a fraction with 100 on the bottom, so "35% of 80" is "35/100 of 80".' }
  ],
  practice: [
    { q: '10% of 70', a: '7', hint: 'Divide by 10.' },
    { q: '25% of 48', a: '12', hint: 'Halve it, then halve it again.' },
    { q: '15% of 60', a: '9', hint: '10% is 6, 5% is 3.' },
    { q: '30% of 250', a: '75', hint: '10% is 25.' },
    { q: '8% of 400', a: '32', hint: '1% is 4.' },
    { q: 'A jacket costs $90. GST is 10%. How much GST is that?', a: '$9', hint: null },
    { q: '65% of 200', a: '130', hint: '50% is 100, 10% is 20, 5% is 10.' }
  ],
  retrieval: [
    { q: '10% of 450', a: '45' },
    { q: 'What does "of" tell you to do?', a: 'Multiply.' }
  ]
},

/* ============================================================ 7 */
{
  id: 'pc-07-finding-whole',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Finding the whole',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pc-06-of-amounts'],
  one_idea: 'Given a part and the percentage it represents, work back to 1% and then up to 100%.',
  sections: [
    {
      h: 'The question turned around',
      p: ['So far the whole was known and the part had to be found. This is the reverse: the part is known and the whole is missing.'],
      example: {
        label: 'Example',
        lines: [
          '20% of a number is 14.  What is the number?',
          '',
          'Step 1   20%  =  14',
          'Step 2   1%   =  14 / 20   =  0.7',
          'Step 3   100% =  0.7 x 100  =  70',
          '',
          'Answer: 70'
        ]
      },
      rule: 'Down to 1%, then up to 100%. Two steps, always the same two.'
    },
    {
      h: 'Checking it',
      p: ['The check is free: take your answer and find the original percentage of it. If it does not give the part back, something went wrong.'],
      example: {
        label: 'Check',
        lines: [
          'Is 70 right?',
          '20% of 70  =  14   yes'
        ]
      },
      note: 'The whole is always bigger than the part, unless the percentage was over 100. If your answer came out smaller, you divided the wrong way round.'
    }
  ],
  confusable_with: [
    { id: 'pc-06-of-amounts', why: 'That one gives you the whole and asks for the part. This one gives you the part and asks for the whole. Read which is missing before starting.' },
    { label: 'If 20% is 14, then 100% is 14 x 20 ... no wait, 14 x 5', why: 'Both guesses skip the working. Go down to 1% first and the multiplier is never a guess.' }
  ],
  practice: [
    { q: '25% of a number is 9. What is the number?', a: '36', hint: '1% is 0.36.' },
    { q: '10% of a number is 4.5. What is the number?', a: '45', hint: 'Multiply by 10.' },
    { q: '40% of a number is 32. What is the number?', a: '80', hint: '1% is 0.8.' },
    { q: 'Ella has read 60% of a book, which is 180 pages. How long is the book?', a: '300 pages', hint: '1% is 3 pages.' },
    { q: '5% of a number is 7. What is the number?', a: '140', hint: null },
    { q: '150% of a number is 60. What is the number?', a: '40', hint: 'The whole is smaller here, because the part was more than all of it.' }
  ],
  retrieval: [
    { q: '50% of a number is 22. What is the number?', a: '44' },
    { q: 'What is the first step when finding the whole?', a: 'Work down to 1%.' }
  ]
},

/* ============================================================ 8 */
{
  id: 'pc-08-increase',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Percentage increase',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pc-06-of-amounts'],
  one_idea: 'Find the increase, then add it on — or go straight to the total with one multiplication.',
  sections: [
    {
      h: 'Two steps',
      example: {
        label: 'Example',
        lines: [
          'A $40 ticket goes up by 15%.',
          '',
          'Step 1   15% of 40   =  6        the increase',
          'Step 2   40 + 6      =  46       the new price',
          '',
          'Answer: $46'
        ]
      },
      rule: 'The percentage is always taken from the original amount, never from the new one.'
    },
    {
      h: 'One step',
      p: ['The original is 100% of itself. Adding 15% makes 115% of the original, so one multiplication finishes it.'],
      example: {
        label: 'Example',
        lines: [
          '100%  +  15%   =  115%   ->  1.15',
          '',
          '40 x 1.15  =  46'
        ]
      },
      note: 'The two-step method shows you the increase itself, which some questions ask for. The one-step method is faster when only the total is wanted.'
    }
  ],
  confusable_with: [
    { label: 'Increasing by 15% means multiplying by 0.15', why: '0.15 gives you the increase on its own, not the new total. The new total needs 1.15.' },
    { label: 'A 10% rise then another 10% rise is a 20% rise', why: 'The second 10% is taken from the bigger amount. $100 becomes $110, then $121 — a 21% rise overall.' }
  ],
  practice: [
    { q: 'Increase 80 by 25%.', a: '100', hint: '25% of 80 is 20.' },
    { q: 'Increase $60 by 10%.', a: '$66', hint: null },
    { q: 'A $250 phone rises by 8%. What is the new price?', a: '$270', hint: '1% is $2.50.' },
    { q: 'What single decimal do you multiply by to increase something by 30%?', a: '1.3', hint: '100% + 30%.' },
    { q: 'A town of 4000 grows by 5%. What is the new population?', a: '4200', hint: null },
    { q: '$200 rises by 10%, then rises by 10% again. What is the final amount?', a: '$242', hint: 'The second rise is taken from $220, not $200.' }
  ],
  retrieval: [
    { q: 'Increase 50 by 20%.', a: '60' },
    { q: 'What do you multiply by to add 25%?', a: '1.25' }
  ]
},

/* ============================================================ 9 */
{
  id: 'pc-09-decrease',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Percentage decrease and discounts',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pc-08-increase'],
  one_idea: 'Take the percentage off the original — or multiply by what is left over.',
  sections: [
    {
      h: 'Two steps',
      example: {
        label: 'Example',
        lines: [
          'A $70 pair of shoes is 20% off.',
          '',
          'Step 1   20% of 70   =  14       the discount',
          'Step 2   70 - 14     =  56       the sale price',
          '',
          'Answer: $56'
        ]
      }
    },
    {
      h: 'One step',
      p: ['Taking 20% off leaves 80%. Multiplying by 0.8 goes straight to the sale price.'],
      example: {
        label: 'Example',
        lines: [
          '100%  -  20%   =  80%   ->  0.8',
          '',
          '70 x 0.8  =  56'
        ]
      },
      rule: 'For a discount, multiply by what is left, not by what comes off.'
    },
    {
      h: 'Reading the sign in the window',
      list: [
        '"20% off"        ->  you pay 80%',
        '"Save 30%"       ->  you pay 70%',
        '"Half price"     ->  you pay 50%',
        '"1/3 off"        ->  you pay two thirds'
      ],
      note: 'The number on the sign is what you do not pay. That is the part most often read backwards.'
    }
  ],
  confusable_with: [
    { label: '20% off means you pay 20%', why: 'You pay the other 80%. A $70 item at 20% off is $56, not $14.' },
    { label: '50% off twice is free', why: 'The second half is taken off the already-halved price. $80 becomes $40, then $20 — a 75% discount, not 100%.' },
    { id: 'pc-08-increase', why: 'Same shape, opposite direction. Increase multiplies by more than 1; decrease multiplies by less than 1.' }
  ],
  practice: [
    { q: 'Decrease 60 by 25%.', a: '45', hint: '25% of 60 is 15.' },
    { q: 'A $90 jacket is 30% off. What do you pay?', a: '$63', hint: 'You pay 70%.' },
    { q: 'What single decimal do you multiply by for a 15% discount?', a: '0.85', hint: null },
    { q: 'A $45 game is reduced by 20%. How much do you save?', a: '$9', hint: 'This one asks for the saving, not the price.' },
    { q: 'A $120 bike is 50% off, then a further 10% off at the register. What is the final price?', a: '$54', hint: '$60, then 10% off that.' },
    { q: 'Which is cheaper on a $200 item: 25% off, or $45 off?', a: '25% off — it saves $50, which is more than $45.', hint: '25% of 200 is 50.' }
  ],
  retrieval: [
    { q: 'A $50 shirt is 10% off. What do you pay?', a: '$45' },
    { q: 'What do you multiply by for a 40% discount?', a: '0.6' }
  ]
},

/* ============================================================ 10 */
{
  id: 'pc-10-change',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Percentage change',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pc-09-decrease'],
  one_idea: 'Change over original, then turn it into a percentage.',
  sections: [
    {
      h: 'The formula, and why it is that way round',
      p: ['The change is measured against where you started, so the original goes on the bottom every time.'],
      example: {
        label: 'Example',
        lines: [
          'A $40 ticket rises to $46.',
          '',
          'change     46 - 40  =  6',
          'original            =  40',
          '',
          '6 / 40   =  0.15   ->   15% increase'
        ]
      },
      rule: 'change / original x 100. The original is always the first of the two numbers, not the smaller one.'
    },
    {
      h: 'Increase or decrease?',
      p: ['Work out the size of the change first, then say which direction it went. The number and the word are both part of the answer.'],
      example: {
        label: 'Example',
        lines: [
          '80 falls to 60',
          '',
          'change     80 - 60  =  20',
          '20 / 80    =  0.25  ->  25%',
          '',
          'Answer: a 25% decrease'
        ]
      },
      note: 'A bare "25%" is not a finished answer here. Increase or decrease has to be said.'
    }
  ],
  confusable_with: [
    { label: 'Divide the change by the new amount', why: 'It goes over the original. 80 down to 60 is 20/80 = 25%, not 20/60 = 33%.' },
    { label: 'Up 20% then down 20% returns to the start', why: '$100 rises to $120, then 20% of 120 comes off, leaving $96. The two percentages are taken from different amounts.' }
  ],
  practice: [
    { q: '50 increases to 60. What is the percentage increase?', a: '20%', hint: '10/50.' },
    { q: '200 decreases to 150. What is the percentage decrease?', a: '25%', hint: '50/200.' },
    { q: 'A $30 book is now $36. Percentage change?', a: '20% increase', hint: null },
    { q: 'A score goes from 40 out of 50 to 45 out of 50. What is the percentage increase in the score?', a: '12.5%', hint: '5/40.' },
    { q: 'Why does 25 to 50 give 100% but 50 to 25 give 50%?', a: 'The original is different each time, so the same gap of 25 is measured against a different bottom number.', hint: null },
    { q: '$80 rises 25%, then falls 25%. What is the final amount?', a: '$75', hint: '$100, then 25% of 100 comes off.' }
  ],
  retrieval: [
    { q: '20 increases to 25. What is the percentage increase?', a: '25%' },
    { q: 'Which number goes on the bottom in a percentage change?', a: 'The original.' }
  ]
},

/* ============================================================ 11 */
{
  id: 'pc-11-word-problems',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Percentage word problems',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pc-10-change', 'pc-07-finding-whole'],
  one_idea: 'Decide which of the four questions is being asked before touching any numbers.',
  sections: [
    {
      h: 'The four questions',
      p: ['Nearly every percentage problem is one of these. Naming which one it is does most of the work.'],
      example: {
        label: 'The four',
        lines: [
          '1   part from whole      "35% of 80"                   multiply',
          '2   whole from part      "20% of it is 14"             down to 1%, up to 100%',
          '3   new total            "up 15%" or "20% off"         multiply by 1.15 or 0.8',
          '4   percentage change    "went from 40 to 46"          change / original'
        ]
      },
      rule: 'Read the question twice and label it 1, 2, 3 or 4. Then start.'
    },
    {
      h: 'Multi-step problems',
      p: ['Longer questions stack two of the four. Do them one at a time and write down what each answer means before going on.'],
      example: {
        label: 'Example',
        lines: [
          'A $250 bike is 20% off. GST of 10% is then added.',
          '',
          'Step 1   250 x 0.8   =  200      sale price',
          'Step 2   200 x 1.1   =  220      with GST',
          '',
          'Answer: $220'
        ]
      },
      note: 'Never add the percentages together first. 20% off then 10% on is not 10% off.'
    }
  ],
  confusable_with: [
    { label: 'Percentages in one question can be added together', why: 'Each one is taken from a different amount. They have to be applied one after another.' }
  ],
  practice: [
    { q: 'A $60 hoodie is 25% off. What do you pay?', a: '$45', hint: 'Which of the four is this?' },
    { q: '30% of the students in a class walk to school. That is 9 students. How big is the class?', a: '30', hint: 'Question 2.' },
    { q: 'A phone bill was $80 and is now $92. What is the percentage increase?', a: '15%', hint: 'Question 4.' },
    { q: 'A $400 laptop is 15% off, then 10% off the sale price. Final cost?', a: '$306', hint: '$340, then 10% off.' },
    { q: 'Sam got 34 out of 40 on a test. What percentage is that?', a: '85%', hint: '34/40 = 0.85.' },
    { q: 'A cafe raises all prices by 10%. A coffee is now $4.40. What was it before?', a: '$4.00', hint: '110% is $4.40.' },
    { q: 'A shop offers "40% off" or "$30 off" on a $80 item. Which is better?', a: '40% off, which saves $32.', hint: null }
  ],
  retrieval: [
    { q: 'A $40 item is 25% off. What do you pay?', a: '$30' },
    { q: 'Can two percentages in the same problem be added together first?', a: 'No — each is taken from a different amount.' }
  ]
},

/* ============================================================ 12 */
{
  id: 'pc-12-estimation',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Estimating and checking',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pc-06-of-amounts', 'dc-15-estimation'],
  one_idea: 'Round to a friendly percentage first, so you know roughly what the answer should be before you find it.',
  sections: [
    {
      h: 'Round the percentage, not just the amount',
      example: {
        label: 'Example',
        lines: [
          '19% of $61',
          '',
          'about 20% of about $60',
          '20% of 60  =  12',
          '',
          'So the real answer should be a bit under $12.',
          'Exact:  0.19 x 61  =  $11.59      close, so it is believable'
        ]
      },
      rule: 'An estimate does not check your arithmetic. It checks whether you set the question up the right way round.'
    },
    {
      h: 'Three quick sense checks',
      list: [
        'Less than 100% of an amount must be smaller than the amount',
        'More than 100% must be bigger',
        'A discounted price must be lower than the original, and a price with GST added must be higher'
      ],
      note: 'Most percentage mistakes are direction mistakes, and every one of them is caught by these three lines.'
    }
  ],
  confusable_with: [
    { label: 'An estimate that is close means the answer is right', why: 'It means the answer is not badly wrong. A slip in the last decimal place will still pass an estimate.' }
  ],
  practice: [
    { q: 'Estimate 48% of 82.', a: 'About 40 — roughly half of 80.', hint: null },
    { q: 'Estimate 9% of 210.', a: 'About 21 — roughly 10%.', hint: null },
    { q: 'A student says 30% of 60 is 180. What is wrong, without calculating?', a: '180 is bigger than 60, and 30% must be smaller than the whole.', hint: null },
    { q: 'A student says a $50 coat at 20% off costs $60. What is wrong?', a: 'A discount must make it cheaper than $50.', hint: null },
    { q: 'Estimate 26% of 396.', a: 'About 100 — a quarter of 400.', hint: null },
    { q: 'Estimate a 9% GST added to $59.', a: 'About $65 — roughly 10% of 60 added on.', hint: null }
  ],
  retrieval: [
    { q: 'Estimate 51% of 78.', a: 'About 39 — roughly half.' },
    { q: 'Must 40% of an amount be bigger or smaller than the amount?', a: 'Smaller.' }
  ]
},

/* ============================================================ 13 */
{
  id: 'pc-13-review',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Percentages review',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pc-11-word-problems', 'pc-12-estimation'],
  one_idea: 'Everything in this unit comes back to one fact: a percentage is a fraction out of 100.',
  sections: [
    {
      h: 'The whole unit on one page',
      example: {
        label: 'Summary',
        lines: [
          'meaning        37%  =  37/100  =  0.37',
          'convert        /100 to leave a percentage, x100 to enter one',
          'of an amount   turn it into a decimal and multiply',
          'find the whole down to 1%, then up to 100%',
          'increase       x 1.15 for a 15% rise',
          'decrease       x 0.85 for a 15% fall',
          'change         change / original, then say up or down'
        ]
      }
    },
    {
      h: 'The traps, in one place',
      list: [
        '20% off means you pay 80%',
        'Two percentages never add together — apply them one after the other',
        'Percentage change divides by the original, not the new amount',
        '0.4 is 40%, not 0.4%',
        'A percentage over 100 is allowed'
      ],
      rule: 'When a percentage question goes wrong, it is almost always the direction, not the arithmetic.'
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'Write 3/8 as a percentage.', a: '37.5%', hint: null },
    { q: '45% of 300', a: '135', hint: null },
    { q: 'A $75 pair of jeans is 40% off. What do you pay?', a: '$45', hint: null },
    { q: '15% of a number is 12. What is the number?', a: '80', hint: null },
    { q: 'A price rises from $25 to $28. What is the percentage increase?', a: '12%', hint: '3/25.' },
    { q: 'Increase $140 by 5%.', a: '$147', hint: null },
    { q: 'Order from smallest: 0.35, 1/4, 30%', a: '1/4, 30%, 0.35', hint: null },
    { q: 'A $60 item is marked up 50%, then discounted 50%. Is it back to $60?', a: 'No — $90, then $45. The second 50% comes off a bigger amount.', hint: null }
  ],
  retrieval: [
    { q: 'What does 20% off mean you pay?', a: '80%.' },
    { q: 'What goes on the bottom in a percentage change?', a: 'The original amount.' }
  ]
}

);
