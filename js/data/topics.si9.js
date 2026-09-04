/* ------------------------------------------------------------------
   ALGEBRA — Solomon Islands Year 9 / Form 3.

   Strand: Patterns and Algebra. Sequenced so that nothing is asked
   for before the thing underneath it is solid: what a letter means,
   then tidying expressions, then substituting, then solving.

   Cross-unit prerequisites reach back into Directed numbers, because
   almost every algebra error at this level is a sign error wearing a
   disguise.
   ------------------------------------------------------------------ */

window.TOPICS = window.TOPICS || [];

window.TOPICS.push(

/* ============================================================ 1 */
{
  id: 'al-01-letters',
  subject: 'maths',
  levels: ['SI-9'],
  title: 'What a letter stands for',
  type: 'concept',
  tier: 'taught',
  prereqs: [],
  one_idea: 'A letter is a number you do not know yet, not a label for an object.',
  sections: [
    {
      h: 'A number, held open',
      p: ['When you write 3n, the n is a number. You do not know which one yet, so you leave the space open and carry on.'],
      example: {
        label: 'Example',
        lines: [
          'A basket holds n mangoes.',
          '',
          '3 baskets    ->  3n mangoes',
          '2 more       ->  n + 2 mangoes',
          'half a basket->  n / 2 mangoes'
        ]
      }
    },
    {
      h: 'The letter is not the thing',
      p: ['In "3n mangoes", n is the number of mangoes in a basket. It is not the word "mangoes" and it is not a mango.'],
      note: 'This sounds like splitting hairs. It stops mattering as soon as you meet 3n + 2m, where treating the letters as objects makes the expression impossible to read.'
    },
    {
      h: 'What the shorthand means',
      list: [
        '3n      means  3 x n',
        'n2      means  n x n     (written n squared)',
        'n/4     means  n divided by 4',
        'nm      means  n x m',
        '3(n+2)  means  3 x (n + 2)'
      ],
      rule: 'A number written straight in front of a letter is multiplying it. The multiplication sign is left out to save writing an x next to an x.'
    },
    {
      h: 'The words that turn into operations',
      list: [
        'more than, sum, increased by   ->  +',
        'less than, difference, fewer   ->  -',
        'times, product, of, double     ->  x',
        'shared, per, quotient          ->  /'
      ]
    }
  ],
  confusable_with: [
    { label: 'Reading 3n as "3 and n"', why: '3n is a single value: three lots of n. If n is 5, then 3n is 15, not 35 and not 8.' }
  ],
  practice: [
    { q: 'A pencil costs p dollars. Write the cost of 7 pencils.', a: '7p', hint: 'Seven lots of p.' },
    { q: 'Write "five more than x".', a: 'x + 5', hint: null },
    { q: 'Write "three less than y".', a: 'y - 3', hint: 'Careful with the order — it is not 3 - y.' },
    { q: 'A rope of length L is cut into 4 equal pieces. Write the length of one piece.', a: 'L / 4', hint: null },
    { q: 'What does 2ab mean written out in full?', a: '2 x a x b', hint: null }
  ],
  retrieval: [
    { q: 'What does 5k mean?', a: '5 x k' },
    { q: 'Write "double m, then add 1".', a: '2m + 1' }
  ]
},

/* ============================================================ 2 */
{
  id: 'al-02-like-terms',
  subject: 'maths',
  levels: ['SI-9'],
  title: 'Collecting like terms',
  type: 'skill',
  tier: 'taught',
  prereqs: ['al-01-letters', 'in-06-two-signs'],
  one_idea: 'You can only add together terms with exactly the same letter part.',
  sections: [
    {
      h: 'Like and unlike',
      p: ['Terms are alike if the letters, and their powers, match exactly. The number in front does not have to match.'],
      list: [
        '4x and 7x        alike',
        '3ab and -2ab     alike',
        '5x2 and 2x2      alike',
        '4x and 4y        not alike',
        '5x and 5x2       not alike'
      ],
      rule: 'Same letters, same powers. Then and only then can you combine them.'
    },
    {
      h: 'Collecting',
      example: {
        label: 'Example',
        lines: [
          '7x + 3y - 2x + 5y',
          '',
          'x terms   7x - 2x  =  5x',
          'y terms   3y + 5y  =  8y',
          '',
          'Answer: 5x + 8y'
        ]
      },
      note: '5x + 8y cannot be simplified any further. An answer with two terms in it is a finished answer.'
    },
    {
      h: 'The sign travels with the term',
      p: ['Each term keeps the sign written in front of it. Move the sign with the term or the answer will be wrong.'],
      example: {
        label: 'Example',
        lines: [
          '5a - 8b - 3a + 2b',
          '',
          'a terms    5a - 3a   =  2a',
          'b terms    -8b + 2b  =  -6b',
          '',
          'Answer: 2a - 6b'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'in-04-adding', why: 'Collecting like terms is just directed number addition applied to the numbers in front. -8b + 2b works exactly like -8 + 2. If the signs are going wrong here, the problem is in the directed numbers, not the algebra.' },
    { label: 'Adding unlike terms', why: '3x + 4y is not 7xy and not 7x. Two different unknowns cannot be merged into one. If x is 10 and y is 2, then 3x + 4y is 38 — and 7xy would be 140.' }
  ],
  practice: [
    { q: 'Simplify 6a + 2a', a: '8a', hint: null },
    { q: 'Simplify 9m - 4m + m', a: '6m', hint: 'The last one counts as 1m.' },
    { q: 'Simplify 3x + 5y - x + 2y', a: '2x + 7y', hint: 'Two separate collections.' },
    { q: 'Simplify 4p - 7q - 6p + q', a: '-2p - 6q', hint: 'Watch the signs on both.' },
    { q: 'Simplify 2x2 + 3x - x2 + x', a: 'x2 + 4x', hint: 'x2 and x are not alike.' }
  ],
  retrieval: [
    { q: 'Simplify 5t + 3t - t', a: '7t' },
    { q: 'Can 4a + 3b be simplified?', a: 'No — they are unlike terms.' }
  ]
},

/* ============================================================ 3 */
{
  id: 'al-03-substitution',
  subject: 'maths',
  levels: ['SI-9'],
  title: 'Substitution',
  type: 'skill',
  tier: 'taught',
  prereqs: ['al-01-letters', 'n6-08-order-operations'],
  one_idea: 'Put the number in place of the letter, then follow the order of operations.',
  sections: [
    {
      h: 'The method',
      p: ['Replace each letter with its value, in brackets, then work it out.'],
      example: {
        label: 'Example',
        lines: [
          'Find 3x + 4 when x = 5',
          '',
          '3(5) + 4',
          '15 + 4',
          '',
          'Answer: 19'
        ]
      },
      rule: 'Multiply before you add. 3x + 4 with x = 5 is 19, not 27.'
    },
    {
      h: 'Why the brackets matter',
      p: ['With a negative value, writing it without brackets produces a mess of signs.'],
      example: {
        label: 'Example',
        lines: [
          'Find 5 - 2x when x = -3',
          '',
          'With brackets     5 - 2(-3)',
          '                  5 - (-6)',
          '                  5 + 6',
          '',
          'Answer: 11'
        ]
      },
      note: 'Without the brackets you get 5 - 2-3, which is unreadable. Always bracket a substituted value.'
    },
    {
      h: 'Two letters at once',
      example: {
        label: 'Example',
        lines: [
          'Find 4a - 3b when a = 2 and b = -1',
          '',
          '4(2) - 3(-1)',
          '8 - (-3)',
          '8 + 3',
          '',
          'Answer: 11'
        ]
      }
    },
    {
      h: 'Substituting into a formula',
      example: {
        label: 'Example',
        lines: [
          'A = l x w.  Find A when l = 12 and w = 7.',
          '',
          'A = 12 x 7',
          '',
          'Answer: A = 84'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'n6-08-order-operations', why: 'Substitution is where the order of operations does the most damage. 3x + 4 is three lots of x, and only then plus four. Working left to right gives 27 instead of 19.' }
  ],
  practice: [
    { q: 'Find 2n + 7 when n = 6', a: '19', hint: 'Multiply first.' },
    { q: 'Find 5m - 3 when m = -2', a: '-13', hint: '5(-2) = -10.' },
    { q: 'Find 4 - 3k when k = -1', a: '7', hint: '4 - 3(-1) = 4 + 3.' },
    { q: 'Find ab + c when a = 3, b = 4, c = -5', a: '7', hint: 'ab means a x b.' },
    { q: 'The perimeter of a rectangle is P = 2(l + w). Find P when l = 9 and w = 4.', a: '26', hint: 'Brackets first.' }
  ],
  retrieval: [
    { q: 'Find 3x - 1 when x = 4', a: '11' },
    { q: 'Find 2y when y = -6', a: '-12' }
  ]
},

/* ============================================================ 4 */
{
  id: 'al-04-expanding',
  subject: 'maths',
  levels: ['SI-9'],
  title: 'Expanding brackets',
  type: 'skill',
  tier: 'taught',
  prereqs: ['al-02-like-terms'],
  one_idea: 'Everything outside the bracket multiplies everything inside it.',
  sections: [
    {
      h: 'The method',
      p: ['Multiply the outside term by each term inside, one at a time.'],
      example: {
        label: 'Example',
        lines: [
          '3(x + 4)',
          '',
          '3 x x  = 3x',
          '3 x 4  = 12',
          '',
          'Answer: 3x + 12'
        ]
      },
      rule: 'Every term inside. Not just the first one.'
    },
    {
      h: 'When the outside is negative',
      p: ['A negative outside flips the sign of every term inside.'],
      example: {
        label: 'Example',
        lines: [
          '-2(x - 5)',
          '',
          '-2 x x    = -2x',
          '-2 x (-5) = +10',
          '',
          'Answer: -2x + 10'
        ]
      },
      note: 'The second sign changed from minus to plus. If both your signs came out the same, you have missed one.'
    },
    {
      h: 'A letter outside',
      example: {
        label: 'Example',
        lines: [
          'x(2x + 5)',
          '',
          'x x 2x  = 2x2',
          'x x 5   = 5x',
          '',
          'Answer: 2x2 + 5x'
        ]
      }
    },
    {
      h: 'Expand, then collect',
      example: {
        label: 'Example',
        lines: [
          '4(x + 2) + 3(x - 1)',
          '',
          'Expand    4x + 8 + 3x - 3',
          'Collect   7x + 5',
          '',
          'Answer: 7x + 5'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'al-02-like-terms', why: 'Expanding makes an expression longer; collecting makes it shorter. Most questions want both, in that order. Collecting first, before the brackets are gone, will give the wrong answer.' }
  ],
  practice: [
    { q: 'Expand 5(x + 3)', a: '5x + 15', hint: null },
    { q: 'Expand 4(2a - 7)', a: '8a - 28', hint: null },
    { q: 'Expand -3(y + 6)', a: '-3y - 18', hint: 'The negative multiplies both terms.' },
    { q: 'Expand -2(m - 4)', a: '-2m + 8', hint: 'Negative times negative is positive.' },
    { q: 'Expand and simplify 3(x + 5) + 2(x - 4)', a: '5x + 7', hint: 'Expand both, then collect.' }
  ],
  retrieval: [
    { q: 'Expand 2(x + 7)', a: '2x + 14' },
    { q: 'Expand -1(a - 3)', a: '-a + 3' }
  ]
},

/* ============================================================ 5 */
{
  id: 'al-05-factorising',
  subject: 'maths',
  levels: ['SI-9'],
  title: 'Factorising with a common factor',
  type: 'skill',
  tier: 'taught',
  prereqs: ['al-04-expanding', 'n6-07-factors-multiples'],
  one_idea: 'Factorising is expanding run backwards: pull the shared part out front.',
  sections: [
    {
      h: 'Find what is shared',
      p: ['Look at every term. Take out the largest number and any letters that all of them have.'],
      example: {
        label: 'Example',
        lines: [
          '6x + 15',
          '',
          'shared number   3   (6 = 3x2,  15 = 3x5)',
          'shared letter   none  (15 has no x)',
          '',
          'Answer: 3(2x + 5)'
        ]
      }
    },
    {
      h: 'Sharing a letter too',
      example: {
        label: 'Example',
        lines: [
          '4x2 + 10x',
          '',
          'shared number   2',
          'shared letter   x    (both terms have at least one x)',
          '',
          'Take out 2x:',
          '4x2 / 2x  = 2x',
          '10x / 2x  = 5',
          '',
          'Answer: 2x(2x + 5)'
        ]
      },
      rule: 'Take out the largest common factor, not just any common factor. 2(2x2 + 5x) is not finished.'
    },
    {
      h: 'Checking your answer',
      p: ['Expand what you wrote. If it does not come back to the original, something was left behind.'],
      example: {
        label: 'Example',
        lines: [
          'Check 2x(2x + 5)',
          '',
          '2x x 2x  = 4x2',
          '2x x 5   = 10x',
          '',
          '4x2 + 10x — matches the original.'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'al-04-expanding', why: 'They are the same process in opposite directions. Expanding removes brackets; factorising puts them back. Every factorising answer can be checked by expanding it.' }
  ],
  practice: [
    { q: 'Factorise 4x + 12', a: '4(x + 3)', hint: 'What divides into both 4 and 12?' },
    { q: 'Factorise 9a - 6', a: '3(3a - 2)', hint: null },
    { q: 'Factorise x2 + 7x', a: 'x(x + 7)', hint: 'Both terms have an x.' },
    { q: 'Factorise 10y2 - 15y', a: '5y(2y - 3)', hint: 'Take out both the 5 and the y.' },
    { q: 'Factorise 8ab + 12a', a: '4a(2b + 3)', hint: 'a is in both, 4 is in both.' }
  ],
  retrieval: [
    { q: 'Factorise 3x + 9', a: '3(x + 3)' },
    { q: 'How can you check a factorising answer?', a: 'Expand it and see if you get back to the start.' }
  ]
},

/* ============================================================ 6 */
{
  id: 'al-06-one-step',
  subject: 'maths',
  levels: ['SI-9'],
  title: 'Solving in one step',
  type: 'skill',
  tier: 'taught',
  prereqs: ['al-03-substitution'],
  one_idea: 'Do the same thing to both sides until the letter stands alone.',
  sections: [
    {
      h: 'The balance',
      p: ['An equation says two things are equal. Whatever you do to one side you must do to the other, or they stop being equal.'],
      example: {
        label: 'Example',
        lines: [
          'x + 7 = 12',
          '',
          'subtract 7 from both sides',
          '',
          'x + 7 - 7 = 12 - 7',
          'x = 5'
        ]
      },
      rule: 'Both sides. Every time. No exceptions.'
    },
    {
      h: 'Undo with the opposite',
      list: [
        'added?       subtract',
        'subtracted?  add',
        'multiplied?  divide',
        'divided?     multiply'
      ],
      example: {
        label: 'Example',
        lines: [
          '4x = 20',
          '',
          'x is multiplied by 4, so divide both sides by 4',
          '',
          '4x / 4 = 20 / 4',
          'x = 5',
          '',
          '',
          'x / 3 = 6',
          '',
          'x is divided by 3, so multiply both sides by 3',
          '',
          'x = 18'
        ]
      }
    },
    {
      h: 'Always check',
      p: ['Put your answer back into the original equation. It takes five seconds and catches everything.'],
      example: {
        label: 'Example',
        lines: [
          'x = 5 in  4x = 20',
          '',
          '4(5) = 20',
          '20 = 20   correct'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'al-02-like-terms', why: 'Simplifying and solving are different jobs. 3x + 2x simplifies to 5x — there is no equals sign, so there is nothing to solve. 3x + 2x = 20 is an equation, and it has an answer: x = 4.' }
  ],
  practice: [
    { q: 'Solve x + 9 = 15', a: 'x = 6', hint: 'Subtract 9 from both sides.' },
    { q: 'Solve y - 4 = 11', a: 'y = 15', hint: null },
    { q: 'Solve 6m = 42', a: 'm = 7', hint: 'Divide both sides by 6.' },
    { q: 'Solve n / 5 = 8', a: 'n = 40', hint: 'Multiply both sides by 5.' },
    { q: 'Solve x + 12 = 5', a: 'x = -7', hint: 'The answer is allowed to be negative.' }
  ],
  retrieval: [
    { q: 'Solve 3x = 21', a: 'x = 7' },
    { q: 'Solve a - 6 = 2', a: 'a = 8' }
  ]
},

/* ============================================================ 7 */
{
  id: 'al-07-two-step',
  subject: 'maths',
  levels: ['SI-9'],
  title: 'Solving in two steps',
  type: 'skill',
  tier: 'taught',
  prereqs: ['al-06-one-step'],
  one_idea: 'Undo the adding first, then undo the multiplying.',
  sections: [
    {
      h: 'Reverse order',
      p: ['To build 3x + 4 you multiply, then add. To take it apart you subtract, then divide — the reverse.'],
      example: {
        label: 'Example',
        lines: [
          '3x + 4 = 19',
          '',
          'subtract 4    3x = 15',
          'divide by 3   x = 5',
          '',
          'Check   3(5) + 4 = 19   correct'
        ]
      },
      rule: 'Get the term with the letter on its own first. Divide last.'
    },
    {
      h: 'With a subtraction',
      example: {
        label: 'Example',
        lines: [
          '5x - 8 = 27',
          '',
          'add 8         5x = 35',
          'divide by 5   x = 7'
        ]
      }
    },
    {
      h: 'When the answer is negative or a fraction',
      p: ['Nothing goes wrong. Finish the method and write what you get.'],
      example: {
        label: 'Example',
        lines: [
          '4x + 9 = 3',
          '',
          'subtract 9    4x = -6',
          'divide by 4   x = -6/4  =  -3/2  =  -1.5'
        ]
      },
      note: 'An answer that is not a whole number is usually correct, not a sign you made a mistake. Check it and move on.'
    }
  ],
  confusable_with: [
    { label: 'Dividing first', why: 'In 3x + 4 = 19, dividing everything by 3 first gives x + 4/3 = 19/3, which is true but harder. Subtract the 4 first and the numbers stay whole.' }
  ],
  practice: [
    { q: 'Solve 2x + 5 = 17', a: 'x = 6', hint: 'Subtract 5, then divide by 2.' },
    { q: 'Solve 7a - 3 = 25', a: 'a = 4', hint: null },
    { q: 'Solve 4n + 11 = 3', a: 'n = -2', hint: 'The answer is negative.' },
    { q: 'Solve 10 = 3x + 1', a: 'x = 3', hint: 'The letter can be on the right. The method is the same.' },
    { q: 'Solve x/2 + 6 = 10', a: 'x = 8', hint: 'Subtract 6, then multiply by 2.' }
  ],
  retrieval: [
    { q: 'Solve 3x + 2 = 14', a: 'x = 4' },
    { q: 'In 5x - 1 = 24, what do you do first?', a: 'Add 1 to both sides.' }
  ]
},

/* ============================================================ 8 */
{
  id: 'al-08-brackets-both-sides',
  subject: 'maths',
  levels: ['SI-9'],
  title: 'Brackets, and letters on both sides',
  type: 'skill',
  tier: 'taught',
  prereqs: ['al-07-two-step', 'al-04-expanding'],
  one_idea: 'Clear the brackets, gather the letters on one side, then solve as usual.',
  sections: [
    {
      h: 'Brackets first',
      example: {
        label: 'Example',
        lines: [
          '3(x + 2) = 21',
          '',
          'expand        3x + 6 = 21',
          'subtract 6    3x = 15',
          'divide by 3   x = 5'
        ]
      },
      note: 'You could also divide both sides by 3 straight away. Both are correct. Expanding is the method that always works, so learn that one first.'
    },
    {
      h: 'Letters on both sides',
      p: ['Move the smaller letter term across so you never end up with a negative number of x.'],
      example: {
        label: 'Example',
        lines: [
          '5x + 3 = 2x + 18',
          '',
          'subtract 2x   3x + 3 = 18',
          'subtract 3    3x = 15',
          'divide by 3   x = 5',
          '',
          'Check   5(5)+3 = 28   and   2(5)+18 = 28   correct'
        ]
      },
      rule: 'Letters to one side, numbers to the other, then divide.'
    },
    {
      h: 'Both at once',
      example: {
        label: 'Example',
        lines: [
          '4(x - 1) = 2x + 6',
          '',
          'expand        4x - 4 = 2x + 6',
          'subtract 2x   2x - 4 = 6',
          'add 4         2x = 10',
          'divide by 2   x = 5'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'al-04-expanding', why: 'Expanding 3(x + 2) gives 3x + 6 and stops there — it is an expression, not a question. Solving 3(x + 2) = 21 uses the expanding as a first step and then keeps going to a value for x.' }
  ],
  practice: [
    { q: 'Solve 2(x + 4) = 18', a: 'x = 5', hint: 'Expand first.' },
    { q: 'Solve 5(a - 3) = 20', a: 'a = 7', hint: null },
    { q: 'Solve 7x = 3x + 20', a: 'x = 5', hint: 'Subtract 3x from both sides.' },
    { q: 'Solve 6n - 5 = 2n + 11', a: 'n = 4', hint: 'Letters left, numbers right.' },
    { q: 'Solve 3(x + 1) = 2(x + 5)', a: 'x = 7', hint: 'Expand both sides first.' }
  ],
  retrieval: [
    { q: 'Solve 4(x - 2) = 12', a: 'x = 5' },
    { q: 'Solve 5x = 2x + 9', a: 'x = 3' }
  ]
},

/* ============================================================ 9 */
{
  id: 'al-09-word-problems',
  subject: 'maths',
  levels: ['SI-9'],
  title: 'Writing your own equation',
  type: 'application',
  tier: 'taught',
  prereqs: ['al-08-brackets-both-sides'],
  one_idea: 'Name the unknown with a letter, write what the words say, then solve.',
  sections: [
    {
      h: 'Four steps, every time',
      list: [
        '1. Let a letter stand for the thing you do not know. Write that down.',
        '2. Turn the sentence into an equation.',
        '3. Solve it.',
        '4. Answer the question that was asked, in words.'
      ],
      rule: 'Step 1 is not optional. "Let x = the number of chairs" is what stops step 4 going wrong.'
    },
    {
      h: 'A worked one',
      example: {
        label: 'Example',
        lines: [
          'Three times a number, plus 8, is 35. Find the number.',
          '',
          'Let n = the number',
          '',
          '3n + 8 = 35',
          '3n = 27',
          'n = 9',
          '',
          'The number is 9.'
        ]
      }
    },
    {
      h: 'When two things are compared',
      p: ['Give the letter to the smaller or simpler quantity, then describe the other one in terms of it.'],
      example: {
        label: 'Example',
        lines: [
          'Mary has 5 more shells than Peter. Together they have 31.',
          'How many does Peter have?',
          '',
          'Let p = Peter\'s shells',
          'Then Mary has p + 5',
          '',
          'p + (p + 5) = 31',
          '2p + 5 = 31',
          '2p = 26',
          'p = 13',
          '',
          'Peter has 13 shells. (Mary has 18, and 13 + 18 = 31.)'
        ]
      },
      note: 'The check at the end is part of the answer, not an extra. It is the only way to catch an equation that was written wrong.'
    }
  ],
  confusable_with: [
    { label: 'Answering with the value of x', why: 'x = 13 is the solution to the equation. "Peter has 13 shells" is the answer to the question. Marks are given for the second one.' }
  ],
  practice: [
    { q: 'A number doubled, then increased by 7, gives 23. Find the number.', a: '8. Let n be the number: 2n + 7 = 23, so 2n = 16, n = 8.', hint: 'Write the equation before solving.' },
    { q: 'Four equal parcels weigh 26 kg in total together with a 2 kg box. Find the weight of one parcel.', a: '6 kg. 4w + 2 = 26, so 4w = 24, w = 6.', hint: 'Let w be the weight of one parcel.' },
    { q: 'John is 4 years older than Sera. Their ages add to 30. How old is Sera?', a: '13. Let s be Sera\'s age: s + (s + 4) = 30, so 2s = 26, s = 13.', hint: 'Give the letter to Sera.' },
    { q: 'A rectangle is 3 cm longer than it is wide. Its perimeter is 26 cm. Find the width.', a: '5 cm. 2(w + w + 3) = 26, so 4w + 6 = 26, w = 5.', hint: 'Perimeter is 2 x (length + width).' },
    { q: 'The cost of 5 books and a $12 bag is $57. Find the cost of one book.', a: '$9. 5b + 12 = 57, so 5b = 45, b = 9.', hint: null }
  ],
  retrieval: [
    { q: 'A number times 4, minus 5, is 19. Find it.', a: '6' },
    { q: 'What is the first step in an algebra word problem?', a: 'Say what the letter stands for.' }
  ]
},

/* ============================================================ 10 */
{
  id: 'al-10-review',
  subject: 'maths',
  levels: ['SI-9'],
  title: 'Algebra review',
  type: 'review',
  tier: 'taught',
  prereqs: ['al-05-factorising', 'al-09-word-problems'],
  one_idea: 'Mixed questions, so you have to notice what is being asked before you start.',
  sections: [
    {
      h: 'Three different instructions',
      list: [
        'Simplify — collect like terms. No equals sign, no solution.',
        'Expand — remove brackets. Also no solution.',
        'Solve — there is an equals sign, and the answer is a value.'
      ],
      rule: 'Read the instruction word first. Half the marks lost in this topic are lost by answering a different question.'
    },
    {
      h: 'What you should be able to do',
      list: [
        'Say what a letter stands for and write an expression from words.',
        'Collect like terms, signs included.',
        'Substitute values, negatives included.',
        'Expand a bracket, negative multiplier included.',
        'Factorise out the largest common factor.',
        'Solve in one step, two steps, and with letters on both sides.',
        'Write and solve your own equation from a word problem.'
      ]
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'Simplify 8x - 3y - 5x + 7y', a: '3x + 4y', hint: null },
    { q: 'Expand -4(2x - 3)', a: '-8x + 12', hint: 'Both signs flip.' },
    { q: 'Factorise 12a2 + 8a', a: '4a(3a + 2)', hint: 'Largest common factor.' },
    { q: 'Find 3p - 2q when p = -2 and q = 5', a: '-16', hint: '3(-2) - 2(5).' },
    { q: 'Solve 5x - 7 = 2x + 8', a: 'x = 5', hint: null },
    { q: 'Solve 2(3x - 1) = 4x + 8', a: 'x = 5', hint: 'Expand first.' },
    { q: 'A number, plus twice the number, plus 6, is 27. Find the number.', a: '7. n + 2n + 6 = 27, so 3n = 21, n = 7.', hint: null },
    { q: 'Is 4x + 3x = 7x an equation to solve, or a simplification?', a: 'A simplification — it is true for every value of x, so there is nothing to solve.', hint: 'Try x = 1 and x = 2.' }
  ],
  retrieval: [
    { q: 'Simplify 6a - 2a + a', a: '5a' },
    { q: 'Solve 2x + 9 = 3', a: 'x = -3' },
    { q: 'Expand 3(x - 4)', a: '3x - 12' }
  ]
}

);
