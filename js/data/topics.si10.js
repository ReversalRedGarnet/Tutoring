/* ------------------------------------------------------------------
   STRAIGHT LINE GRAPHS — Solomon Islands Year 10 / Form 4.

   Strands: Patterns and Algebra, Shape and Space. Builds directly on
   the Form 3 algebra unit — substitution and solving are assumed, and
   the prerequisites reach back into it rather than re-teaching it.

   The through-line: a rule, a table, a picture and a pair of numbers
   are four views of the same thing, and you should be able to get from
   any one of them to any other.
   ------------------------------------------------------------------ */

window.TOPICS = window.TOPICS || [];

window.TOPICS.push(

/* ============================================================ 1 */
{
  id: 'ln-01-coordinates',
  subject: 'maths',
  levels: ['SI-10'],
  title: 'The coordinate plane',
  type: 'concept',
  tier: 'taught',
  prereqs: ['in-03-comparing'],
  one_idea: 'Two numbers, in a fixed order, name one point exactly.',
  sections: [
    {
      h: 'Across first, then up',
      p: ['A point is written (x, y). The first number is how far across, the second is how far up.'],
      figure: {
        caption: 'A set of axes with the point (3, 2) marked, showing three across and two up from the origin',
        svg: '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">' +
             '<g class="f-grid">' +
             '<line x1="60" y1="40" x2="60" y2="250"/><line x1="110" y1="40" x2="110" y2="250"/>' +
             '<line x1="160" y1="40" x2="160" y2="250"/><line x1="210" y1="40" x2="210" y2="250"/>' +
             '<line x1="260" y1="40" x2="260" y2="250"/><line x1="310" y1="40" x2="310" y2="250"/>' +
             '<line x1="360" y1="40" x2="360" y2="250"/>' +
             '<line x1="60" y1="50" x2="360" y2="50"/><line x1="60" y1="90" x2="360" y2="90"/>' +
             '<line x1="60" y1="130" x2="360" y2="130"/><line x1="60" y1="170" x2="360" y2="170"/>' +
             '<line x1="60" y1="210" x2="360" y2="210"/><line x1="60" y1="250" x2="360" y2="250"/>' +
             '</g>' +
             '<line class="f-line" x1="60" y1="250" x2="375" y2="250"/>' +
             '<line class="f-line" x1="60" y1="250" x2="60" y2="35"/>' +
             '<text class="f-label" x="385" y="255">x</text>' +
             '<text class="f-label f-end" x="55" y="30">y</text>' +
             '<text class="f-label f-end" x="54" y="265">0</text>' +
             '<text class="f-label f-mid" x="110" y="268">1</text>' +
             '<text class="f-label f-mid" x="160" y="268">2</text>' +
             '<text class="f-label f-mid" x="210" y="268">3</text>' +
             '<text class="f-label f-mid" x="260" y="268">4</text>' +
             '<text class="f-label f-end" x="50" y="215">1</text>' +
             '<text class="f-label f-end" x="50" y="175">2</text>' +
             '<text class="f-label f-end" x="50" y="135">3</text>' +
             '<line class="f-dash" x1="60" y1="250" x2="210" y2="250"/>' +
             '<line class="f-dash" x1="210" y1="250" x2="210" y2="170"/>' +
             '<circle class="f-fill" cx="210" cy="170" r="5"/>' +
             '<text class="f-label" x="222" y="163">(3, 2)</text>' +
             '<text class="f-dim f-mid" x="135" y="243">3 across</text>' +
             '<text class="f-dim" x="220" y="215">2 up</text>' +
             '</svg>'
      },
      rule: 'x before y, always. (3, 2) and (2, 3) are two different points.'
    },
    {
      h: 'The four quadrants',
      p: ['Both numbers can be negative. Negative x goes left, negative y goes down.'],
      list: [
        '(4, 3)    right and up',
        '(-4, 3)   left and up',
        '(-4, -3)  left and down',
        '(4, -3)   right and down'
      ]
    },
    {
      h: 'Points on the axes',
      list: [
        'On the x-axis, y is 0.  For example (5, 0).',
        'On the y-axis, x is 0.  For example (0, 5).',
        'The origin, where they cross, is (0, 0).'
      ],
      note: 'These two are the ones most often swapped. A point on the y-axis has not moved across at all, so its x is zero.'
    }
  ],
  confusable_with: [
    { label: 'Reading up first', why: 'Nothing in the notation tells you the order — you have to know it. Across, then up. The alphabet helps: x comes before y.' }
  ],
  practice: [
    { q: 'Which quadrant is (-2, 5) in?', a: 'The top left — left and up.', hint: null },
    { q: 'A point sits on the x-axis, 6 to the left of the origin. Write it.', a: '(-6, 0)', hint: 'On the x-axis the y value is 0.' },
    { q: 'Are (7, 1) and (1, 7) the same point?', a: 'No. The first is far right and just above the axis; the second is just right and far up.', hint: null },
    { q: 'Write the coordinates of the origin.', a: '(0, 0)', hint: null },
    { q: 'A point is 3 left and 4 down from the origin. Write it.', a: '(-3, -4)', hint: null }
  ],
  retrieval: [
    { q: 'In (x, y), which number is across?', a: 'The first one, x.' },
    { q: 'What is the y value of any point on the x-axis?', a: '0' }
  ]
},

/* ============================================================ 2 */
{
  id: 'ln-02-table-and-plot',
  subject: 'maths',
  levels: ['SI-10'],
  title: 'From a rule to a line',
  type: 'skill',
  tier: 'taught',
  prereqs: ['ln-01-coordinates', 'al-03-substitution'],
  one_idea: 'Choose x values, work out y, plot the pairs, join them up.',
  sections: [
    {
      h: 'Make a table',
      p: ['Pick three or four easy x values. Substitute each into the rule to get its y.'],
      example: {
        label: 'Example',
        lines: [
          'y = 2x + 1',
          '',
          'x      -1     0     1     2',
          'y      -1     1     3     5',
          '',
          'x = -1   y = 2(-1) + 1 = -1',
          'x = 0    y = 2(0) + 1  = 1',
          'x = 1    y = 2(1) + 1  = 3',
          'x = 2    y = 2(2) + 1  = 5'
        ]
      },
      rule: 'Three points is enough to draw the line. The third one is there to catch a mistake in the other two.'
    },
    {
      h: 'Plot and join',
      p: ['Mark each pair, then draw one straight line through all of them, extended past the outer points.'],
      note: 'If the three points are not in a straight line, one of them is wrong. Do not draw a bend — go back and check the arithmetic.'
    },
    {
      h: 'Reading a value off the line',
      example: {
        label: 'Example',
        lines: [
          'Using the line y = 2x + 1, find y when x = 4.',
          '',
          'From the graph   go across to 4, then up to the line, then',
          '                 across to the y-axis',
          'From the rule    y = 2(4) + 1 = 9',
          '',
          'Both give 9. The rule is exact; the graph is a check.'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'al-03-substitution', why: 'Building the table is pure substitution — the only new part is writing the answers in a row instead of on their own. If the table is coming out wrong, the problem is in the substitution.' }
  ],
  practice: [
    { q: 'Complete the table for y = 3x - 2 at x = -1, 0, 1, 2.', a: 'y = -5, -2, 1, 4', hint: 'Multiply by 3 first, then subtract 2.' },
    { q: 'Complete the table for y = -x + 4 at x = 0, 1, 2, 3.', a: 'y = 4, 3, 2, 1', hint: '-x means -1 times x.' },
    { q: 'Does the point (2, 7) lie on y = 3x + 1?', a: 'Yes. 3(2) + 1 = 7.', hint: 'Substitute x = 2 and see if you get 7.' },
    { q: 'Does the point (3, 5) lie on y = 2x - 2?', a: 'No. 2(3) - 2 = 4, not 5.', hint: null },
    { q: 'For y = 5x, what is y when x = -3?', a: '-15', hint: null }
  ],
  retrieval: [
    { q: 'For y = 4x - 1, find y when x = 2.', a: '7' },
    { q: 'How many points do you need to draw a straight line?', a: 'Two, but plot three to check.' }
  ]
},

/* ============================================================ 3 */
{
  id: 'ln-03-gradient',
  subject: 'maths',
  levels: ['SI-10'],
  title: 'Gradient',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ln-02-table-and-plot'],
  one_idea: 'Gradient is how much y changes for every one step across.',
  sections: [
    {
      h: 'Rise over run',
      p: ['Pick two points on the line. Count how far up, and how far across, between them.'],
      example: {
        label: 'Example',
        lines: [
          'From (1, 3) to (4, 9)',
          '',
          'rise = 9 - 3 = 6',
          'run  = 4 - 1 = 3',
          '',
          'gradient = rise / run = 6 / 3 = 2',
          '',
          'Meaning: every 1 across, the line climbs 2.'
        ]
      },
      rule: 'gradient = (change in y) / (change in x). Both differences must be taken in the same order.'
    },
    {
      h: 'Negative gradient',
      p: ['If the line falls as you move right, the rise is negative and so is the gradient.'],
      example: {
        label: 'Example',
        lines: [
          'From (0, 8) to (4, 0)',
          '',
          'rise = 0 - 8 = -8',
          'run  = 4 - 0 = 4',
          '',
          'gradient = -8 / 4 = -2'
        ]
      },
      note: 'Uphill left to right is positive. Downhill left to right is negative. Check the sign against the picture before you write it down.'
    },
    {
      h: 'The flat and the vertical',
      list: [
        'A horizontal line never rises, so its gradient is 0.',
        'A vertical line has run 0, and dividing by 0 is impossible — its gradient is undefined.'
      ]
    },
    {
      h: 'Steepness',
      p: ['The further the gradient is from zero, the steeper the line. A gradient of -5 is steeper than a gradient of 2, even though it is a smaller number.']
    }
  ],
  confusable_with: [
    { label: 'Run over rise', why: 'Getting it upside down turns a gradient of 2 into 1/2. Remember the order the words go in: rise over run, up over across, y over x.' }
  ],
  practice: [
    { q: 'Find the gradient from (2, 1) to (5, 7).', a: '2', hint: 'rise 6, run 3.' },
    { q: 'Find the gradient from (0, 5) to (2, 1).', a: '-2', hint: 'The line falls, so the answer is negative.' },
    { q: 'Find the gradient from (-1, 2) to (3, 2).', a: '0 — it is a horizontal line.', hint: 'The y value never changes.' },
    { q: 'Find the gradient from (1, -3) to (4, 3).', a: '2', hint: 'rise = 3 - (-3) = 6.' },
    { q: 'Which is steeper, a gradient of 3 or a gradient of -4?', a: '-4', hint: 'Distance from zero, not size of the number.' }
  ],
  retrieval: [
    { q: 'Gradient from (0, 0) to (2, 6)?', a: '3' },
    { q: 'What is the gradient of a horizontal line?', a: '0' }
  ]
},

/* ============================================================ 4 */
{
  id: 'ln-04-intercept',
  subject: 'maths',
  levels: ['SI-10'],
  title: 'The y-intercept',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ln-03-gradient'],
  one_idea: 'The y-intercept is where the line crosses the y-axis, which is where x is 0.',
  sections: [
    {
      h: 'Finding it from a rule',
      p: ['Set x to 0 and work out y. Everything with an x in it disappears.'],
      example: {
        label: 'Example',
        lines: [
          'y = 3x - 5',
          '',
          'x = 0    y = 3(0) - 5 = -5',
          '',
          'The line crosses the y-axis at (0, -5).'
        ]
      },
      rule: 'In y = mx + c, the number on its own is the y-intercept. You can read it straight off.'
    },
    {
      h: 'Finding it from a graph',
      p: ['Look at where the line cuts the vertical axis, and read the y value there.']
    },
    {
      h: 'The x-intercept',
      p: ['The other crossing point. Set y to 0 and solve for x.'],
      example: {
        label: 'Example',
        lines: [
          'y = 3x - 5',
          '',
          'y = 0    0 = 3x - 5',
          '         5 = 3x',
          '         x = 5/3',
          '',
          'The line crosses the x-axis at (5/3, 0).'
        ]
      },
      note: 'Set x to 0 for the y-intercept. Set y to 0 for the x-intercept. It feels backwards and it is correct.'
    }
  ],
  confusable_with: [
    { id: 'ln-03-gradient', why: 'The gradient is how tilted the line is; the intercept is where it sits. Two lines can have the same gradient and different intercepts — they are parallel — or the same intercept and different gradients, crossing at that one point.' }
  ],
  practice: [
    { q: 'What is the y-intercept of y = 2x + 7?', a: '7, at the point (0, 7)', hint: 'Read the number on its own.' },
    { q: 'What is the y-intercept of y = -4x?', a: '0, at the origin', hint: 'There is no number on its own, so it is 0.' },
    { q: 'What is the y-intercept of y = 6 - x?', a: '6', hint: 'Set x = 0.' },
    { q: 'Find the x-intercept of y = 2x - 8.', a: 'x = 4, at (4, 0)', hint: 'Set y = 0 and solve.' },
    { q: 'A line crosses the y-axis at -3 and has gradient 5. Write its rule.', a: 'y = 5x - 3', hint: null }
  ],
  retrieval: [
    { q: 'y-intercept of y = x + 9?', a: '9' },
    { q: 'To find the x-intercept, what do you set to zero?', a: 'y' }
  ]
},

/* ============================================================ 5 */
{
  id: 'ln-05-y-mx-c',
  subject: 'maths',
  levels: ['SI-10'],
  title: 'y = mx + c',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ln-04-intercept'],
  one_idea: 'Every straight line can be written as y = mx + c, where m is the gradient and c is the y-intercept.',
  sections: [
    {
      h: 'Reading a line off its rule',
      example: {
        label: 'Example',
        lines: [
          'y = 4x - 3',
          '',
          'm = 4     gradient 4, climbing steeply',
          'c = -3    crosses the y-axis at -3',
          '',
          '',
          'y = -x + 6',
          '',
          'm = -1    gradient -1, falling',
          'c = 6     crosses the y-axis at 6'
        ]
      },
      rule: 'The number in front of x is m. The number on its own is c. If there is no number in front of x, m is 1.'
    },
    {
      h: 'Sketching without a table',
      p: ['With m and c you can draw the line in two moves.'],
      list: [
        '1. Mark c on the y-axis. That is one point.',
        '2. From there, go 1 across and m up. That is the second point.',
        '3. Join them and extend.'
      ],
      example: {
        label: 'Example',
        lines: [
          'y = 2x + 1',
          '',
          'Start at (0, 1)',
          'Across 1, up 2   ->  (1, 3)',
          'Across 1, up 2   ->  (2, 5)',
          '',
          'Join them up.'
        ]
      }
    },
    {
      h: 'Rearranging into the right shape',
      p: ['A rule is only easy to read once y is alone on the left.'],
      example: {
        label: 'Example',
        lines: [
          '2y = 6x + 10',
          '',
          'divide everything by 2',
          '',
          'y = 3x + 5      m = 3,  c = 5',
          '',
          '',
          'y - 4x = 1',
          '',
          'add 4x to both sides',
          '',
          'y = 4x + 1      m = 4,  c = 1'
        ]
      },
      note: 'Do not read m off before y is by itself. In 2y = 6x + 10 the gradient is 3, not 6.'
    }
  ],
  confusable_with: [
    { id: 'al-06-one-step', why: 'Rearranging into y = mx + c is the same balancing you learned when solving equations — same thing to both sides. The difference is that you are not looking for a number at the end, only for y on its own.' }
  ],
  practice: [
    { q: 'State m and c for y = 5x - 2.', a: 'm = 5, c = -2', hint: null },
    { q: 'State m and c for y = 3 - 2x.', a: 'm = -2, c = 3', hint: 'Rewrite it as y = -2x + 3.' },
    { q: 'Rearrange 3y = 9x - 6 into y = mx + c and state m and c.', a: 'y = 3x - 2, so m = 3 and c = -2', hint: 'Divide every term by 3.' },
    { q: 'Rearrange y - 2x = 5 and state the gradient.', a: 'y = 2x + 5, gradient 2', hint: null },
    { q: 'Write the rule of a line with gradient -3 crossing the y-axis at 4.', a: 'y = -3x + 4', hint: null }
  ],
  retrieval: [
    { q: 'In y = mx + c, what is m?', a: 'The gradient.' },
    { q: 'Gradient of y = 7 - x?', a: '-1' }
  ]
},

/* ============================================================ 6 */
{
  id: 'ln-06-rule-from-graph',
  subject: 'maths',
  levels: ['SI-10'],
  title: 'Finding the rule from a graph',
  type: 'skill',
  tier: 'taught',
  prereqs: ['ln-05-y-mx-c'],
  one_idea: 'Read c off the y-axis, count the gradient off the grid, then write y = mx + c.',
  sections: [
    {
      h: 'Two readings',
      p: ['Everything you need is on the picture. Find where it crosses the y-axis, then pick two points where the line passes exactly through a grid corner.'],
      example: {
        label: 'Example',
        lines: [
          'A line crosses the y-axis at 2 and passes through (3, 8).',
          '',
          'c = 2',
          'm = (8 - 2) / (3 - 0) = 6 / 3 = 2',
          '',
          'Answer: y = 2x + 2'
        ]
      },
      rule: 'Choose points where the line crosses a corner of the grid. Estimating between squares is where the errors come from.'
    },
    {
      h: 'Checking with a third point',
      p: ['Substitute another point from the line into your rule. If it does not fit, one of the two readings is wrong.'],
      example: {
        label: 'Example',
        lines: [
          'Check y = 2x + 2 with the point (1, 4)',
          '',
          '2(1) + 2 = 4    matches',
          '',
          'The rule is right.'
        ]
      }
    },
    {
      h: 'When the line falls',
      example: {
        label: 'Example',
        lines: [
          'A line crosses the y-axis at 5 and passes through (2, 1).',
          '',
          'c = 5',
          'm = (1 - 5) / (2 - 0) = -4 / 2 = -2',
          '',
          'Answer: y = -2x + 5'
        ]
      },
      note: 'If the line goes downhill and your m came out positive, you have subtracted in the wrong order somewhere.'
    }
  ],
  confusable_with: [
    { id: 'ln-02-table-and-plot', why: 'Plotting goes rule to picture. This goes picture to rule. Both use the same table of points, read in opposite directions.' }
  ],
  practice: [
    { q: 'A line crosses the y-axis at 1 and passes through (2, 7). Find its rule.', a: 'y = 3x + 1', hint: 'm = (7 - 1) / 2.' },
    { q: 'A line crosses the y-axis at -4 and passes through (2, 0). Find its rule.', a: 'y = 2x - 4', hint: null },
    { q: 'A line crosses the y-axis at 6 and passes through (3, 0). Find its rule.', a: 'y = -2x + 6', hint: 'It is falling.' },
    { q: 'A horizontal line passes through (0, 3). Find its rule.', a: 'y = 3', hint: 'The gradient is 0, so there is no x term.' },
    { q: 'Check whether (5, 16) is on the line y = 3x + 1.', a: 'Yes. 3(5) + 1 = 16.', hint: null }
  ],
  retrieval: [
    { q: 'Line through (0, 2) with gradient 4 — write the rule.', a: 'y = 4x + 2' },
    { q: 'Rule of a horizontal line through (0, -5)?', a: 'y = -5' }
  ]
},

/* ============================================================ 7 */
{
  id: 'ln-07-two-points',
  subject: 'maths',
  levels: ['SI-10'],
  title: 'The rule from two points',
  type: 'skill',
  tier: 'taught',
  prereqs: ['ln-06-rule-from-graph', 'al-07-two-step'],
  one_idea: 'Gradient first, then substitute one point back in to find c.',
  sections: [
    {
      h: 'The two steps',
      example: {
        label: 'Example',
        lines: [
          'Find the rule through (1, 5) and (3, 11).',
          '',
          'Step 1   m = (11 - 5) / (3 - 1) = 6 / 2 = 3',
          '',
          'Step 2   y = 3x + c,  substitute (1, 5)',
          '         5 = 3(1) + c',
          '         5 = 3 + c',
          '         c = 2',
          '',
          'Answer: y = 3x + 2'
        ]
      },
      rule: 'Either point works in step 2. If they give different answers for c, the gradient is wrong.'
    },
    {
      h: 'With negatives',
      example: {
        label: 'Example',
        lines: [
          'Find the rule through (-2, 7) and (2, -1).',
          '',
          'Step 1   m = (-1 - 7) / (2 - (-2)) = -8 / 4 = -2',
          '',
          'Step 2   y = -2x + c,  substitute (2, -1)',
          '         -1 = -2(2) + c',
          '         -1 = -4 + c',
          '         c = 3',
          '',
          'Answer: y = -2x + 3'
        ]
      },
      note: 'Both differences must run in the same direction. If you do second minus first on top, do second minus first underneath too.'
    },
    {
      h: 'Checking',
      p: ['Substitute the other point. It must also fit.'],
      example: {
        label: 'Example',
        lines: [
          'Check y = -2x + 3 with (-2, 7)',
          '',
          '-2(-2) + 3 = 4 + 3 = 7    matches'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'ln-03-gradient', why: 'The gradient is only half the answer. Two different lines can have gradient 3 and be nowhere near each other. You need c as well before you have named one particular line.' }
  ],
  practice: [
    { q: 'Find the rule through (0, 4) and (2, 10).', a: 'y = 3x + 4', hint: 'One point is already on the y-axis, so c is immediate.' },
    { q: 'Find the rule through (1, 2) and (4, 11).', a: 'y = 3x - 1', hint: 'm = 9/3 = 3.' },
    { q: 'Find the rule through (2, 5) and (6, 5).', a: 'y = 5', hint: 'The gradient is 0.' },
    { q: 'Find the rule through (-1, 4) and (2, -5).', a: 'y = -3x + 1', hint: 'm = (-5 - 4) / (2 - (-1)).' },
    { q: 'Find the rule through (3, 0) and (0, 6).', a: 'y = -2x + 6', hint: 'The second point gives c straight away.' }
  ],
  retrieval: [
    { q: 'Gradient through (1, 1) and (3, 7)?', a: '3' },
    { q: 'After finding m, how do you find c?', a: 'Substitute one of the points into y = mx + c.' }
  ]
},

/* ============================================================ 8 */
{
  id: 'ln-08-parallel',
  subject: 'maths',
  levels: ['SI-10'],
  title: 'Parallel lines and comparing lines',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ln-05-y-mx-c'],
  one_idea: 'Lines are parallel when their gradients match, whatever their intercepts.',
  sections: [
    {
      h: 'Same m, different c',
      example: {
        label: 'Example',
        lines: [
          'y = 3x + 1',
          'y = 3x - 4',
          '',
          'Both have m = 3, so they are parallel.',
          'They never meet, because c differs.'
        ]
      },
      rule: 'Parallel means equal gradients. Nothing else.'
    },
    {
      h: 'Same c, different m',
      p: ['These are not parallel. They cross at exactly one point — the shared intercept.'],
      example: {
        label: 'Example',
        lines: [
          'y = 2x + 5',
          'y = -x + 5',
          '',
          'Both pass through (0, 5). They cross there and nowhere else.'
        ]
      }
    },
    {
      h: 'Identical lines',
      p: ['If m and c are both the same, it is the same line written twice — sometimes hidden by a rearrangement.'],
      example: {
        label: 'Example',
        lines: [
          'y = 2x + 3',
          '2y = 4x + 6',
          '',
          'Divide the second by 2:   y = 2x + 3',
          '',
          'Same line.'
        ]
      },
      note: 'Always rearrange into y = mx + c before comparing two rules. Until then the numbers you are comparing are not m and c.'
    }
  ],
  confusable_with: [
    { id: 'ln-04-intercept', why: 'Lines through the same point on the y-axis look related, but they are not parallel unless their gradients match. Parallel is about m; crossing is about where.' }
  ],
  practice: [
    { q: 'Are y = 4x + 2 and y = 4x - 9 parallel?', a: 'Yes — both have gradient 4.', hint: null },
    { q: 'Are y = 2x + 1 and y = 3x + 1 parallel?', a: 'No. Same intercept, different gradients, so they cross at (0, 1).', hint: null },
    { q: 'Write a line parallel to y = -5x + 2 passing through (0, 7).', a: 'y = -5x + 7', hint: 'Keep m, change c.' },
    { q: 'Are y = 3x + 4 and 2y = 6x + 8 the same line?', a: 'Yes. Dividing the second by 2 gives y = 3x + 4.', hint: 'Rearrange first.' },
    { q: 'Write a line parallel to y = x - 3 through (0, 0).', a: 'y = x', hint: null }
  ],
  retrieval: [
    { q: 'What makes two lines parallel?', a: 'Equal gradients.' },
    { q: 'Line parallel to y = 2x + 5 with intercept -1?', a: 'y = 2x - 1' }
  ]
},

/* ============================================================ 9 */
{
  id: 'ln-09-real-world',
  subject: 'maths',
  levels: ['SI-10'],
  title: 'Straight lines in real situations',
  type: 'application',
  tier: 'taught',
  prereqs: ['ln-06-rule-from-graph'],
  one_idea: 'The gradient is a rate, and the intercept is what you start with.',
  sections: [
    {
      h: 'What m and c mean outside maths',
      list: [
        'Taxi fare: c is the flag fall, m is the cost per kilometre.',
        'Water tank: c is what is already in it, m is litres per minute in or out.',
        'Phone plan: c is the monthly fee, m is the cost per minute.',
        'Journey: c is the starting distance, m is the speed.'
      ],
      rule: 'A negative gradient means the quantity is going down — emptying, spending, cooling.'
    },
    {
      h: 'Writing the rule from a description',
      example: {
        label: 'Example',
        lines: [
          'A taxi charges $8 to start plus $3 per kilometre.',
          '',
          'c = 8       the charge before you move',
          'm = 3       the extra cost per kilometre',
          '',
          'C = 3d + 8    where d is distance in km, C is cost in dollars',
          '',
          'For 12 km:  C = 3(12) + 8 = $44'
        ]
      },
      note: 'Use letters that mean something — C for cost, d for distance — and say what each one stands for. It makes the answer readable and it stops you mixing them up.'
    },
    {
      h: 'Reading a rate off a graph',
      example: {
        label: 'Example',
        lines: [
          'A tank holds 200 litres at the start. After 40 minutes it holds 40 litres.',
          '',
          'm = (40 - 200) / (40 - 0) = -160 / 40 = -4',
          'c = 200',
          '',
          'V = -4t + 200',
          '',
          'The tank is emptying at 4 litres per minute.',
          'It runs dry when V = 0:   0 = -4t + 200,  t = 50 minutes.'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'Treating every graph as a distance graph', why: 'The gradient is whatever the axes say it is. On a distance-time graph it is speed; on a cost-distance graph it is dollars per kilometre. Read the axis labels before you name the rate.' }
  ],
  practice: [
    { q: 'A plumber charges $50 to come out plus $40 an hour. Write the rule for the cost C after h hours.', a: 'C = 40h + 50', hint: 'Which number happens before any work is done?' },
    { q: 'Using that rule, what does a 3 hour job cost?', a: '$170', hint: '40(3) + 50.' },
    { q: 'A phone credit of $30 falls by $2 a day. Write the rule for the credit left after d days.', a: 'A = -2d + 30', hint: 'Falling means a negative gradient.' },
    { q: 'Using that rule, when does the credit run out?', a: 'After 15 days. 0 = -2d + 30, so d = 15.', hint: 'Set the amount to 0.' },
    { q: 'A graph of distance against time has gradient 60. What does the 60 mean?', a: '60 units of distance per unit of time — a speed of 60 km/h if the axes are km and hours.', hint: null }
  ],
  retrieval: [
    { q: 'In a cost rule, what does c usually represent?', a: 'The fixed charge before anything is used.' },
    { q: 'What does a negative gradient mean in a real graph?', a: 'The quantity is decreasing.' }
  ]
},

/* ============================================================ 10 */
{
  id: 'ln-10-review',
  subject: 'maths',
  levels: ['SI-10'],
  title: 'Straight lines review',
  type: 'review',
  tier: 'taught',
  prereqs: ['ln-07-two-points', 'ln-08-parallel', 'ln-09-real-world'],
  one_idea: 'Four views of one line — rule, table, graph and pair of points — and moving between any two of them.',
  sections: [
    {
      h: 'The four views',
      list: [
        'Rule to table: substitute.',
        'Table to graph: plot and join.',
        'Graph to rule: read c, count m.',
        'Two points to rule: gradient first, then substitute for c.'
      ],
      rule: 'Whatever you are given, the destination is almost always y = mx + c.'
    },
    {
      h: 'What you should be able to do',
      list: [
        'Plot a point and name a quadrant.',
        'Build a table from a rule and plot the line.',
        'Find a gradient from two points, sign included.',
        'Find both intercepts.',
        'Rearrange into y = mx + c and read off m and c.',
        'Find a rule from a graph or from two points.',
        'Decide whether two lines are parallel.',
        'Interpret m and c in a real situation.'
      ]
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'State the gradient and y-intercept of y = 7 - 3x.', a: 'Gradient -3, intercept 7.', hint: 'Rewrite as y = -3x + 7.' },
    { q: 'Find the gradient through (-3, 1) and (1, 9).', a: '2', hint: 'rise 8, run 4.' },
    { q: 'Find the rule through (2, 1) and (5, 10).', a: 'y = 3x - 5', hint: 'm = 3, then substitute.' },
    { q: 'Rearrange 4y - 8x = 12 into y = mx + c.', a: 'y = 2x + 3', hint: 'Add 8x, then divide by 4.' },
    { q: 'Is y = 2x + 3 parallel to 4y = 8x - 20?', a: 'Yes. The second is y = 2x - 5, gradient 2.', hint: 'Rearrange before comparing.' },
    { q: 'Find both intercepts of y = 4x - 12.', a: 'y-intercept -12, x-intercept 3.', hint: 'Set x = 0, then y = 0.' },
    { q: 'A generator uses 5 litres of fuel an hour from a 60 litre tank. Write the rule and say when it empties.', a: 'F = -5t + 60, empty at t = 12 hours.', hint: null },
    { q: 'Does (4, 3) lie on the line through (0, -1) with gradient 1?', a: 'Yes. The rule is y = x - 1, and 4 - 1 = 3.', hint: 'Write the rule first.' }
  ],
  retrieval: [
    { q: 'Gradient of y = -x + 8?', a: '-1' },
    { q: 'Rule of the line through (0, 3) with gradient 2?', a: 'y = 2x + 3' },
    { q: 'What does c stand for in y = mx + c?', a: 'The y-intercept.' }
  ]
}

);
