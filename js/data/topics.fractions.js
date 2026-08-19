/* ------------------------------------------------------------------
   FRACTIONS — a full sequential block, AU Year 7.

   Schema:
     id, subject, levels, title, type, tier, prereqs, one_idea
     sections[]   the lesson, in W3Schools shape:
                    h       heading
                    p[]     short paragraphs
                    list[]  bullet points
                    example { label, lines[] }   worked, in a box
                    rule    the thing to remember, boxed
                    note    a short warning inline
     confusable_with[]  { id | label, why }  the false-rule guards
     practice[]   { q, a, hint }
     retrieval[]  { q, a }  recycled into warm-ups weeks later

   Written for a learner who gets sidetracked, invents connections
   between things that are not connected, and loses fundamentals. So:
   short sections, one idea each, and every common false rule named
   out loud before he can invent it himself.
   ------------------------------------------------------------------ */

window.TOPICS = window.TOPICS || [];

window.TOPICS.push(

/* ============================================================ 1 */
{
  id: 'fr-01-what-is',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'What is a fraction?',
  type: 'concept',
  tier: 'taught',
  prereqs: [],
  one_idea: 'A fraction counts equal parts of a whole.',
  sections: [
    {
      h: 'The two numbers',
      p: ['A fraction is written with one number above another.'],
      example: {
        label: 'Example',
        lines: [
          '3/4',
          '',
          'bottom (denominator)  4  =  the whole was cut into 4 equal parts',
          'top (numerator)       3  =  you have 3 of them'
        ]
      },
      rule: 'The bottom tells you the size of the pieces. The top tells you how many you have.'
    },
    {
      h: 'The parts must be equal',
      p: ['Cutting a cake into 4 pieces does not make quarters unless all 4 pieces are the same size.'],
      note: 'If the pieces are not equal, it is not a fraction of that whole at all.'
    },
    {
      h: 'Saying them out loud',
      list: [
        '1/2  =  one half',
        '1/3  =  one third',
        '3/4  =  three quarters',
        '5/8  =  five eighths'
      ]
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'In 5/8, which number is the denominator, and what does it tell you?', a: '8. The whole was cut into 8 equal parts.', hint: 'Denominator is the bottom one.' },
    { q: 'A pizza is cut into 6 equal slices. You eat 2. Write that as a fraction.', a: '2/6', hint: 'Bottom = total slices. Top = slices eaten.' },
    { q: 'A chocolate bar is broken into 4 pieces, but one piece is much bigger than the others. Can you call one piece 1/4?', a: 'No. The pieces are not equal, so they are not quarters.', hint: 'What does a fraction require of the pieces?' },
    { q: 'Write "seven tenths" in fraction notation.', a: '7/10', hint: null },
    { q: 'What does the top number of a fraction tell you?', a: 'How many of the equal parts you have.', hint: null }
  ],
  retrieval: [
    { q: 'What does the bottom number of a fraction tell you?', a: 'How many equal parts the whole was cut into.' },
    { q: 'Write "three fifths" as a fraction.', a: '3/5' }
  ]
},

/* ============================================================ 2 */
{
  id: 'fr-02-of-a-set',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Fractions of a group',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-01-what-is'],
  one_idea: 'A fraction can count part of a group, not just part of one object.',
  sections: [
    {
      h: 'The same idea, a different picture',
      p: ['So far the whole has been one thing cut up. The whole can also be a group of things.'],
      example: {
        label: 'Example',
        lines: [
          '12 marbles.  What is 1/4 of them?',
          '',
          'Split the 12 into 4 equal groups  ->  3 in each group',
          '1/4 of 12 = 3'
        ]
      }
    },
    {
      h: 'The method',
      p: ['Divide by the bottom number. Multiply by the top number.'],
      example: {
        label: 'Example',
        lines: [
          '3/5 of 20',
          '',
          'Step 1   20 / 5  = 4      (one fifth)',
          'Step 2   4 x 3   = 12     (three fifths)',
          '',
          'Answer: 12'
        ]
      },
      rule: 'Divide by the bottom, multiply by the top. In that order.'
    }
  ],
  confusable_with: [],
  practice: [
    { q: '1/3 of 18', a: '6', hint: 'Divide 18 into 3 equal groups.' },
    { q: '2/5 of 30', a: '12', hint: '30 / 5 = 6, then 6 x 2.' },
    { q: '3/4 of 24', a: '18', hint: null },
    { q: 'There are 28 students. 4/7 walk to school. How many walk?', a: '16', hint: '28 / 7 = 4, then 4 x 4.' },
    { q: '5/6 of 42', a: '35', hint: null }
  ],
  retrieval: [
    { q: '2/3 of 15', a: '10' },
    { q: 'To find a fraction of a number, what do you do first?', a: 'Divide by the bottom number.' }
  ]
},

/* ============================================================ 3 */
{
  id: 'fr-03-why',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Why we use fractions',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-01-what-is'],
  one_idea: 'Fractions describe the amounts that land between whole numbers.',
  sections: [
    {
      h: 'Where they turn up',
      list: [
        'Sharing  —  3 pizzas between 4 people',
        'Measuring  —  1/2 a metre of rope',
        'Recipes  —  3/4 cup of flour',
        'Time  —  a quarter of an hour',
        'Distance  —  two thirds of the way there',
        'Money  —  half price'
      ]
    },
    {
      h: 'Fractions, decimals or percentages?',
      p: ['They are three ways of writing the same kind of number. Each one is easier for a different job.'],
      list: [
        'Fractions  —  exact sharing, and recipes',
        'Decimals  —  money and measurement',
        'Percentages  —  comparing, and anything out of 100'
      ]
    },
    {
      h: 'When a fraction is the only exact answer',
      p: ['Some amounts cannot be written exactly as a decimal.'],
      example: {
        label: 'Example',
        lines: [
          '1/3  as a decimal  =  0.3333333...  forever',
          '1/3  as a fraction =  1/3           exact'
        ]
      },
      note: 'This is why builders and cooks still use fractions instead of switching everything to decimals.'
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'Why do recipes use 3/4 cup instead of 0.75 cup?', a: 'Measuring cups are made in fractions, so 3/4 is the one you can actually scoop.', hint: 'Think about the equipment.' },
    { q: 'Which is easier to compare at a glance: 17/20 and 4/5, or 85% and 80%?', a: 'The percentages, because they are both out of 100.', hint: null },
    { q: 'Write 1/3 as a decimal. What goes wrong?', a: '0.333... The digits never stop, so any decimal you write down is slightly wrong.', hint: null },
    { q: 'Give one situation where a fraction is more useful than a decimal.', a: 'Any reasonable answer: sharing food equally, a recipe, dividing something into thirds.', hint: null }
  ],
  retrieval: [
    { q: 'Which form is best for comparing two amounts quickly?', a: 'Percentages.' }
  ]
},

/* ============================================================ 4 */
{
  id: 'fr-04-representing',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Ways to show a fraction',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-01-what-is', 'fr-02-of-a-set'],
  one_idea: 'The same fraction can be drawn many different ways and stays the same number.',
  sections: [
    {
      h: 'Five ways to show 3/4',
      list: [
        'Notation  —  3/4',
        'A shape  —  a square split into 4, with 3 shaded',
        'A fraction bar  —  a strip of 4 blocks, 3 filled',
        'A number line  —  3 steps along from 0 towards 1',
        'A set  —  4 counters, 3 of them red'
      ]
    },
    {
      h: 'Fractions on a number line',
      p: ['Between 0 and 1, the denominator tells you how many gaps to cut the line into.'],
      example: {
        label: 'Example',
        lines: [
          'Show 3/4 on a number line',
          '',
          '0 ---- | ---- | ---- | ---- 1',
          '       1/4   2/4   3/4',
          '',
          '4 gaps, because the denominator is 4.',
          'Count 3 gaps across.'
        ]
      },
      note: 'Count the gaps, not the marks. A line split into quarters has 5 marks but only 4 gaps.'
    }
  ],
  confusable_with: [
    { label: 'Counting marks instead of gaps', why: 'On a number line the fraction is about the spaces between the marks. Counting the marks gives you an answer one too big every time.' }
  ],
  practice: [
    { q: 'You want to show fifths on a number line from 0 to 1. How many gaps do you cut it into?', a: '5', hint: 'The denominator is the number of gaps.' },
    { q: 'A bar is split into 8 equal blocks and 5 are shaded. What fraction is that?', a: '5/8', hint: null },
    { q: 'Draw or describe two different pictures that both show 1/2.', a: 'Any two: a circle with half shaded, a bar of 2 with 1 filled, 6 counters with 3 red, and so on.', hint: null },
    { q: 'A number line from 0 to 1 has marks at 0, 1/3, 2/3 and 1. How many gaps are there?', a: '3', hint: 'Count the spaces, not the marks.' }
  ],
  retrieval: [
    { q: 'On a number line, does the denominator tell you the number of marks or the number of gaps?', a: 'The number of gaps.' }
  ]
},

/* ============================================================ 5 */
{
  id: 'fr-05-types',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Types of fractions',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-01-what-is'],
  one_idea: 'Fractions get different names depending on how the top compares to the bottom.',
  sections: [
    {
      h: 'The four names',
      example: {
        label: 'Example',
        lines: [
          'Proper       3/4     top smaller than bottom     less than 1',
          'Improper     7/4     top bigger than bottom      more than 1',
          'Mixed        1 3/4   a whole number and a bit    more than 1',
          'Unit         1/4     top is exactly 1'
        ]
      }
    },
    {
      h: 'Improper fractions are not mistakes',
      p: ['"Improper" only means the top is bigger than the bottom. 7/4 is a perfectly good number and is often easier to calculate with than 1 3/4.'],
      note: 'You will be asked to convert between improper and mixed later. Neither one is the "right" form — it depends on the job.'
    }
  ],
  confusable_with: [
    { label: 'Thinking "improper" means wrong', why: 'It is just a name for top-heavier-than-bottom. 7/4 is not an error and does not have to be fixed.' }
  ],
  practice: [
    { q: 'Name the type: 9/5', a: 'Improper', hint: 'Compare top and bottom.' },
    { q: 'Name the type: 1/7', a: 'Unit (and also proper)', hint: null },
    { q: 'Name the type: 2 1/3', a: 'Mixed number', hint: null },
    { q: 'Name the type: 4/9', a: 'Proper', hint: null },
    { q: 'Is 5/5 proper or improper?', a: 'Neither in a useful sense — it equals exactly 1. It is usually counted as improper because the top is not smaller than the bottom.', hint: 'What number does it equal?' }
  ],
  retrieval: [
    { q: 'What makes a fraction improper?', a: 'The top number is bigger than the bottom.' },
    { q: 'What is a unit fraction?', a: 'One with 1 on top.' }
  ]
},

/* ============================================================ 6 */
{
  id: 'fr-06-like-unlike',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Like and unlike fractions',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-05-types'],
  one_idea: 'Fractions are "like" when their pieces are the same size.',
  sections: [
    {
      h: 'Same bottom, same size pieces',
      example: {
        label: 'Example',
        lines: [
          'Like      2/7 and 5/7      same denominator',
          'Unlike    2/3 and 5/8      different denominators'
        ]
      }
    },
    {
      h: 'Why the word matters',
      p: ['Like fractions can be added and compared straight away, because you are counting pieces that are all the same size.'],
      p2: [],
      rule: 'Unlike fractions have to be made like before you can add or subtract them.'
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'Are 3/8 and 5/8 like or unlike?', a: 'Like', hint: 'Look at the denominators.' },
    { q: 'Are 1/2 and 1/5 like or unlike?', a: 'Unlike', hint: null },
    { q: 'Which of these is like 4/9?  2/3, 7/9, 9/4', a: '7/9', hint: 'Same denominator.' },
    { q: 'Why can you add 2/7 and 3/7 immediately, but not 2/7 and 3/5?', a: 'Sevenths are all the same size so you can count them together. Sevenths and fifths are different sizes.', hint: null }
  ],
  retrieval: [
    { q: 'What makes two fractions "like" fractions?', a: 'They have the same denominator.' }
  ]
},

/* ============================================================ 7 */
{
  id: 'fr-07-equivalent',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Equivalent fractions',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-01-what-is', 'fr-04-representing'],
  one_idea: 'The same amount can be cut into different numbers of pieces.',
  sections: [
    {
      h: 'What equivalent means',
      p: ['Two fractions are equivalent when they are the same amount written differently.'],
      example: {
        label: 'Example',
        lines: [
          '1/2  =  2/4  =  4/8  =  50/100',
          '',
          'Every one of these is half. Only the cutting changed.'
        ]
      }
    },
    {
      h: 'Making them',
      p: ['Multiply the top and the bottom by the same number.'],
      example: {
        label: 'Example',
        lines: [
          '3/4  =  ?/12',
          '',
          'Bottom:  4 x 3 = 12',
          'So top:  3 x 3 = 9',
          '',
          'Answer: 9/12'
        ]
      },
      rule: 'Whatever you do to the bottom, do the same to the top.'
    },
    {
      h: 'Why it works',
      p: ['Multiplying top and bottom by 3 is the same as cutting every piece into 3 smaller pieces. You end up with three times as many pieces, each a third of the size. Nothing was added or taken away.']
    }
  ],
  confusable_with: [
    { label: 'Adding the same number to top and bottom', why: 'This does NOT work. 1/2 is not 2/3. Adding 1 to each changes the amount; multiplying each by the same number does not.' },
    { id: 'fr-08-simplifying', why: 'Simplifying is this same machine running backwards — dividing instead of multiplying. Same rule, opposite direction.' }
  ],
  practice: [
    { q: '2/5 = ?/20', a: '8/20', hint: 'The bottom was multiplied by 4.' },
    { q: '3/7 = ?/28', a: '12/28', hint: null },
    { q: 'Is 4/6 equivalent to 6/9?', a: 'Yes. Both are 2/3.', hint: 'Try dividing each one down.' },
    { q: 'A student says 1/2 = 2/3 because they added 1 to the top and 1 to the bottom. What is wrong?', a: 'The rule is multiply, not add. 2/3 is bigger than 1/2, so the amount changed.', hint: 'Draw a half and two thirds and compare.' },
    { q: 'Write three fractions equivalent to 2/3.', a: 'Any of: 4/6, 6/9, 8/12, 20/30', hint: null }
  ],
  retrieval: [
    { q: '3/4 = ?/16', a: '12/16' },
    { q: 'What must you do to the top if you multiply the bottom by 5?', a: 'Multiply the top by 5 as well.' }
  ]
},

/* ============================================================ 8 */
{
  id: 'fr-08-simplifying',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Simplifying fractions',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-07-equivalent'],
  one_idea: 'Simplifying rewrites a fraction with smaller numbers without changing the amount.',
  sections: [
    {
      h: 'Common factors',
      p: ['A common factor is a number that divides into both the top and the bottom.'],
      example: {
        label: 'Example',
        lines: [
          '12/18',
          '',
          'Factors of 12:  1, 2, 3, 4, 6, 12',
          'Factors of 18:  1, 2, 3, 6, 9, 18',
          '',
          'Common factors: 1, 2, 3, 6',
          'Highest common factor (HCF): 6'
        ]
      }
    },
    {
      h: 'Simplest form',
      p: ['Divide the top and the bottom by their highest common factor.'],
      example: {
        label: 'Example',
        lines: [
          '12/18   divide both by 6',
          '',
          '12 / 6 = 2',
          '18 / 6 = 3',
          '',
          'Answer: 2/3'
        ]
      },
      rule: 'A fraction is in simplest form when the only number dividing into both is 1.'
    },
    {
      h: 'If you cannot spot the HCF',
      p: ['Divide by any common factor you can see and repeat. You will get to the same place, just in more steps.'],
      example: {
        label: 'Example',
        lines: [
          '12/18  ->  divide by 2  ->  6/9',
          '6/9    ->  divide by 3  ->  2/3'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'fr-07-equivalent', why: 'Simplifying does not make the fraction smaller. 2/3 is exactly the same amount as 12/18 — only the numbers got smaller.' }
  ],
  practice: [
    { q: 'Simplify 10/15', a: '2/3', hint: 'What divides into both 10 and 15?' },
    { q: 'Simplify 8/12', a: '2/3', hint: 'HCF is 4.' },
    { q: 'Simplify 24/36', a: '2/3', hint: 'HCF is 12, or go down in steps.' },
    { q: 'Simplify 7/9', a: '7/9 — it is already in simplest form.', hint: 'Is there any number other than 1 that divides into both?' },
    { q: 'Is 15/20 bigger, smaller, or the same as 3/4?', a: 'The same. 15/20 simplifies to 3/4.', hint: 'Simplifying never changes the amount.' }
  ],
  retrieval: [
    { q: 'Simplify 9/12', a: '3/4' },
    { q: 'Does simplifying make a fraction smaller?', a: 'No. Only the numbers get smaller. The amount is unchanged.' }
  ]
},

/* ============================================================ 9 */
{
  id: 'fr-09-comparing',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Comparing and ordering fractions',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-06-like-unlike', 'fr-07-equivalent'],
  one_idea: 'You can only compare fractions once the pieces are the same size.',
  sections: [
    {
      h: 'Same denominator: easy',
      p: ['If the bottoms match, the bigger top wins.'],
      example: {
        label: 'Example',
        lines: [
          '5/8  >  3/8',
          '',
          'Both are eighths, so 5 pieces beats 3 pieces.'
        ]
      }
    },
    {
      h: 'Different denominators',
      p: ['Rewrite them with a common denominator first, then compare the tops.'],
      example: {
        label: 'Example',
        lines: [
          'Which is bigger, 2/3 or 3/5?',
          '',
          'Common denominator: 15',
          '2/3  =  10/15',
          '3/5  =   9/15',
          '',
          '10/15 > 9/15,  so  2/3 > 3/5'
        ]
      }
    },
    {
      h: 'The signs',
      list: [
        '<   is less than',
        '>   is greater than',
        '=   is equal to'
      ],
      note: 'The wide end of the sign always faces the bigger number.'
    },
    {
      h: 'A quick check: compare to a half',
      p: ['If one fraction is more than half and the other is less, you are done without any work.'],
      example: {
        label: 'Example',
        lines: [
          '5/9  vs  2/7',
          '',
          '5/9 is more than half   (half of 9 is 4.5)',
          '2/7 is less than half   (half of 7 is 3.5)',
          '',
          'So 5/9 > 2/7'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'Bigger denominator means bigger fraction', why: 'It is the opposite. A bigger bottom means MORE pieces, so each piece is SMALLER. 1/8 is smaller than 1/3.' },
    { label: 'Comparing only the tops', why: 'That only works when the bottoms already match. 3/4 is bigger than 5/9 even though 3 is smaller than 5.' }
  ],
  practice: [
    { q: 'Which is bigger: 1/4 or 1/6?', a: '1/4', hint: 'More pieces means smaller pieces.' },
    { q: 'Fill in the sign: 3/7 __ 5/7', a: '<', hint: 'Same bottoms, compare the tops.' },
    { q: 'Which is bigger: 3/5 or 5/8?', a: '5/8  (24/40 vs 25/40)', hint: 'Common denominator 40.' },
    { q: 'Order from smallest to largest: 1/2, 2/5, 3/4', a: '2/5, 1/2, 3/4', hint: 'Put them all over 20.' },
    { q: 'Without calculating, which is bigger: 7/12 or 4/11?', a: '7/12 — it is more than half, and 4/11 is less than half.', hint: 'Compare each one to 1/2.' }
  ],
  retrieval: [
    { q: 'Which is bigger, 1/5 or 1/9?', a: '1/5' },
    { q: 'Why is 1/8 smaller than 1/3?', a: 'Cutting the whole into 8 pieces makes each piece smaller than cutting it into 3.' }
  ]
},

/* ============================================================ 10 */
{
  id: 'fr-10-converting',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Improper fractions and mixed numbers',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-05-types'],
  one_idea: 'An improper fraction and a mixed number are the same amount in two costumes.',
  sections: [
    {
      h: 'Improper to mixed: divide',
      example: {
        label: 'Example',
        lines: [
          '11/4',
          '',
          '11 / 4  =  2 remainder 3',
          '',
          'whole number  =  2',
          'new top       =  3   (the remainder)',
          'bottom        =  4   (unchanged)',
          '',
          'Answer: 2 3/4'
        ]
      },
      note: 'The denominator never changes. Whatever the pieces were, they stay that size.'
    },
    {
      h: 'Mixed to improper: multiply and add',
      example: {
        label: 'Example',
        lines: [
          '3 2/5',
          '',
          'whole x bottom  =  3 x 5  =  15',
          'add the top     =  15 + 2 =  17',
          '',
          'Answer: 17/5'
        ]
      },
      rule: 'Bottom times whole, plus top. The bottom stays where it is.'
    }
  ],
  confusable_with: [
    { label: 'Changing the denominator during conversion', why: 'The bottom number never moves in either direction. Only the top changes.' },
    { label: 'Using the remainder as the whole number', why: 'The remainder becomes the new TOP. The answer to the division becomes the whole number.' }
  ],
  practice: [
    { q: 'Convert 9/2 to a mixed number.', a: '4 1/2', hint: '9 / 2 = 4 remainder 1.' },
    { q: 'Convert 17/5 to a mixed number.', a: '3 2/5', hint: null },
    { q: 'Convert 2 3/8 to an improper fraction.', a: '19/8', hint: '2 x 8 = 16, plus 3.' },
    { q: 'Convert 5 1/3 to an improper fraction.', a: '16/3', hint: null },
    { q: 'Convert 12/4 to a mixed number.', a: '3 — it divides exactly, so there is no fraction part.', hint: 'What is the remainder?' }
  ],
  retrieval: [
    { q: 'Convert 7/2 to a mixed number.', a: '3 1/2' },
    { q: 'When converting, does the denominator change?', a: 'No, never.' }
  ]
},

/* ============================================================ 11 */
{
  id: 'fr-11-add-like',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Adding and subtracting like fractions',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-06-like-unlike', 'fr-08-simplifying'],
  one_idea: 'When the pieces are the same size, just count them.',
  sections: [
    {
      h: 'Add the tops, keep the bottom',
      example: {
        label: 'Example',
        lines: [
          '2/7 + 3/7',
          '',
          '2 sevenths plus 3 sevenths  =  5 sevenths',
          '',
          'Answer: 5/7'
        ]
      },
      rule: 'The denominator does not change. You are counting pieces, not resizing them.'
    },
    {
      h: 'Subtracting works the same way',
      example: {
        label: 'Example',
        lines: [
          '5/9 - 2/9  =  3/9',
          '',
          'Then simplify:  3/9  =  1/3'
        ]
      },
      note: 'Always check whether the answer simplifies. Marks are lost on this more than on the adding.'
    }
  ],
  confusable_with: [
    { label: 'Adding the denominators too', why: '2/7 + 3/7 is 5/7, not 5/14. If you add the bottoms you have changed the size of the pieces halfway through the sum.' }
  ],
  practice: [
    { q: '3/8 + 2/8', a: '5/8', hint: null },
    { q: '4/9 + 2/9', a: '6/9 = 2/3', hint: 'Simplify at the end.' },
    { q: '7/10 - 3/10', a: '4/10 = 2/5', hint: null },
    { q: '5/6 + 5/6', a: '10/6 = 5/3 = 1 2/3', hint: 'You are allowed to go past 1.' },
    { q: 'A student writes 1/4 + 2/4 = 3/8. What did they do wrong, and what is the answer?', a: 'They added the bottoms. The answer is 3/4.', hint: 'Does the size of the pieces change when you count more of them?' }
  ],
  retrieval: [
    { q: '2/5 + 1/5', a: '3/5' },
    { q: 'When adding like fractions, what happens to the denominator?', a: 'Nothing. It stays the same.' }
  ]
},

/* ============================================================ 12 */
{
  id: 'fr-12-add-unlike',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Adding and subtracting unlike fractions',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-11-add-like', 'fr-07-equivalent'],
  one_idea: 'You cannot add fractions until the pieces are the same size.',
  sections: [
    {
      h: 'Find a common denominator',
      p: ['The lowest common denominator is the smallest number both bottoms divide into.'],
      example: {
        label: 'Example',
        lines: [
          '1/2 + 1/3',
          '',
          'Multiples of 2:  2, 4, 6, 8 ...',
          'Multiples of 3:  3, 6, 9 ...',
          '',
          'They first meet at 6.'
        ]
      }
    },
    {
      h: 'Convert, then add',
      example: {
        label: 'Example',
        lines: [
          '1/2 + 1/3        common denominator 6',
          '',
          '1/2  =  3/6',
          '1/3  =  2/6',
          '',
          '3/6 + 2/6  =  5/6'
        ]
      },
      rule: 'Convert both. Add the tops. Keep the common bottom. Simplify.'
    },
    {
      h: 'The three steps, every time',
      list: [
        '1.  Find the common denominator',
        '2.  Rewrite both fractions with it',
        '3.  Add or subtract the tops, then simplify'
      ]
    }
  ],
  confusable_with: [
    { id: 'fr-14-multiplying', why: 'Multiplying does NOT need a common denominator. Going straight across is correct for multiplying and wrong for adding. Check which operation you are doing before you start.' }
  ],
  practice: [
    { q: '1/3 + 1/6', a: '3/6 = 1/2', hint: 'Sixths work for both.' },
    { q: '2/5 + 1/3', a: '11/15', hint: 'Common denominator 15.' },
    { q: '3/4 - 1/2', a: '1/4', hint: 'Quarters work for both.' },
    { q: '3/4 + 5/6', a: '19/12 = 1 7/12', hint: 'Common denominator 12.' },
    { q: '5/6 - 1/4', a: '7/12', hint: null },
    { q: 'Explain why 1/2 + 1/3 cannot be 2/5.', a: '2/5 is smaller than 1/2, so it cannot be the answer to adding something to 1/2. Adding the tops and bottoms separately is not a valid rule.', hint: 'Is your answer bigger than the half you started with?' }
  ],
  retrieval: [
    { q: '1/4 + 1/6', a: '5/12' },
    { q: 'What is the first step when adding fractions with different bottoms?', a: 'Find a common denominator.' }
  ]
},

/* ============================================================ 13 */
{
  id: 'fr-13-add-mixed',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Adding and subtracting mixed numbers',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-12-add-unlike', 'fr-10-converting'],
  one_idea: 'Deal with the whole numbers and the fraction parts, then put them back together.',
  sections: [
    {
      h: 'Method 1: convert to improper first',
      p: ['Safest method, and the one to use when subtracting.'],
      example: {
        label: 'Example',
        lines: [
          '2 1/4 + 1 1/2',
          '',
          'Convert:   9/4  +  3/2',
          'Common:    9/4  +  6/4  =  15/4',
          'Back:      15/4  =  3 3/4'
        ]
      }
    },
    {
      h: 'Method 2: wholes and parts separately',
      p: ['Faster when adding, if the fraction parts do not spill over 1.'],
      example: {
        label: 'Example',
        lines: [
          '2 1/4 + 1 1/2',
          '',
          'Wholes:     2 + 1  =  3',
          'Fractions:  1/4 + 1/2  =  3/4',
          '',
          'Answer: 3 3/4'
        ]
      }
    },
    {
      h: 'When the top is too small to subtract',
      p: ['Borrow one whole and turn it into fraction pieces.'],
      example: {
        label: 'Example',
        lines: [
          '3 1/5 - 1 3/5',
          '',
          '1/5 is too small to take 3/5 from.',
          'Borrow 1 whole from the 3:',
          '',
          '3 1/5  =  2 + 5/5 + 1/5  =  2 6/5',
          '2 6/5 - 1 3/5  =  1 3/5'
        ]
      },
      note: 'If borrowing feels slippery, convert both to improper fractions instead. Same answer, fewer traps.'
    }
  ],
  confusable_with: [],
  practice: [
    { q: '1 1/3 + 2 1/3', a: '3 2/3', hint: null },
    { q: '2 1/2 + 1 3/4', a: '4 1/4', hint: 'Fraction parts add to 5/4, which is more than 1.' },
    { q: '4 3/5 - 2 1/5', a: '2 2/5', hint: null },
    { q: '3 1/4 - 1 3/4', a: '1 1/2', hint: 'Convert to improper: 13/4 - 7/4.' },
    { q: '2 2/3 + 1 1/2', a: '4 1/6', hint: 'Common denominator 6.' }
  ],
  retrieval: [
    { q: '1 1/2 + 2 1/2', a: '4' },
    { q: 'What is the safest method for subtracting mixed numbers?', a: 'Convert both to improper fractions first.' }
  ]
},

/* ============================================================ 14 */
{
  id: 'fr-14-multiplying',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Multiplying fractions',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-08-simplifying', 'fr-10-converting'],
  one_idea: 'Multiplying by a fraction means taking a part of something.',
  sections: [
    {
      h: '"Of" means multiply',
      example: {
        label: 'Example',
        lines: [
          '1/2 of 1/3   is the same as   1/2 x 1/3',
          '',
          'Take a third, then take half of it  ->  1/6'
        ]
      }
    },
    {
      h: 'Straight across',
      example: {
        label: 'Example',
        lines: [
          '2/3 x 3/4',
          '',
          'Tops:     2 x 3  =  6',
          'Bottoms:  3 x 4  =  12',
          '',
          '6/12  simplifies to  1/2'
        ]
      },
      rule: 'Multiply tops. Multiply bottoms. Simplify. No common denominator needed.'
    },
    {
      h: 'Fraction times a whole number',
      example: {
        label: 'Example',
        lines: [
          '3/5 x 20',
          '',
          'Write 20 as 20/1:',
          '3/5 x 20/1  =  60/5  =  12'
        ]
      }
    },
    {
      h: 'Mixed numbers: convert first',
      example: {
        label: 'Example',
        lines: [
          '1 1/2 x 2/3',
          '',
          'Convert:  3/2 x 2/3',
          'Across:   6/6  =  1'
        ]
      },
      note: 'Never multiply the whole numbers and the fraction parts separately. It gives the wrong answer.'
    },
    {
      h: 'The surprising part',
      p: ['Multiplying by a proper fraction makes the answer SMALLER, because you are taking a part of something rather than repeating it.'],
      example: {
        label: 'Example',
        lines: [
          '20 x 3      =  60      bigger',
          '20 x 3/5    =  12      smaller'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'fr-12-add-unlike', why: 'Adding needs a common denominator. Multiplying does not. Straight across is right here and wrong there.' },
    { label: 'Multiplying always makes things bigger', why: 'True for whole numbers, false for fractions less than 1. This rule from primary school stops working here.' }
  ],
  practice: [
    { q: '1/2 x 1/4', a: '1/8', hint: 'Half of a quarter.' },
    { q: '2/3 x 3/5', a: '6/15 = 2/5', hint: null },
    { q: '3/4 x 16', a: '12', hint: 'Write 16 as 16/1.' },
    { q: '2/5 of 45', a: '18', hint: null },
    { q: '1 1/3 x 3/4', a: '1  (4/3 x 3/4 = 12/12)', hint: 'Convert the mixed number first.' },
    { q: 'Is 30 x 2/3 bigger or smaller than 30? Why?', a: 'Smaller — 20. You are taking two thirds of it, not repeating it.', hint: null }
  ],
  retrieval: [
    { q: '1/3 x 2/5', a: '2/15' },
    { q: 'Do you need a common denominator to multiply fractions?', a: 'No.' }
  ]
},

/* ============================================================ 15 */
{
  id: 'fr-15-dividing',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Dividing fractions',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-14-multiplying'],
  one_idea: 'Dividing by a fraction asks how many of it fit inside.',
  sections: [
    {
      h: 'What division by a fraction means',
      example: {
        label: 'Example',
        lines: [
          '3 / (1/2)      "how many halves fit in 3?"',
          '',
          '3 whole things, 2 halves in each  ->  6',
          '',
          'Answer: 6'
        ]
      },
      note: 'The answer is bigger than 3. That is correct, and it is the part most people refuse to believe.'
    },
    {
      h: 'The reciprocal',
      p: ['The reciprocal of a fraction is that fraction turned upside down.'],
      example: {
        label: 'Example',
        lines: [
          'reciprocal of 2/3  =  3/2',
          'reciprocal of 5    =  1/5',
          'reciprocal of 1/4  =  4'
        ]
      }
    },
    {
      h: 'Invert and multiply',
      example: {
        label: 'Example',
        lines: [
          '2/3  /  4/5',
          '',
          'Flip the SECOND fraction:  4/5  ->  5/4',
          'Then multiply:             2/3 x 5/4  =  10/12',
          'Simplify:                  5/6'
        ]
      },
      rule: 'Keep the first. Flip the second. Multiply.'
    },
    {
      h: 'Why flipping works',
      p: ['Dividing by 1/2 is asking how many halves fit in. Each whole holds 2 of them, so you multiply by 2 — and 2 is exactly 1/2 flipped over. The flip is not a trick; it is what "how many fit" turns into.']
    }
  ],
  confusable_with: [
    { label: 'Flipping the first fraction', why: 'Only the second one flips. Flipping the first gives a completely different answer.' },
    { label: 'Dividing always makes things smaller', why: 'False when you divide by a fraction less than 1. 3 / (1/2) = 6, which is bigger than 3.' }
  ],
  practice: [
    { q: 'What is the reciprocal of 3/7?', a: '7/3', hint: null },
    { q: '1/2 / (1/4)', a: '2  (how many quarters fit in a half?)', hint: null },
    { q: '2/3 / (1/6)', a: '4', hint: 'Flip the second: 2/3 x 6/1.' },
    { q: '3/4 / 2', a: '3/8', hint: 'Write 2 as 2/1, then flip it to 1/2.' },
    { q: '2 1/2 / (1/2)', a: '5', hint: 'Convert to 5/2 first.' },
    { q: 'Without calculating: is 4 / (1/3) bigger or smaller than 4?', a: 'Bigger — 12. You are asking how many thirds fit in 4.', hint: null }
  ],
  retrieval: [
    { q: 'What is the reciprocal of 5?', a: '1/5' },
    { q: 'Which fraction do you flip when dividing?', a: 'The second one.' }
  ]
},

/* ============================================================ 16 */
{
  id: 'fr-16-word-problems',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Fractions in real problems',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-13-add-mixed', 'fr-15-dividing'],
  one_idea: 'The hard part of a word problem is choosing the operation, not doing it.',
  sections: [
    {
      h: 'What the words usually mean',
      list: [
        '"of"  ->  multiply',
        '"how many fit"  ->  divide',
        '"shared between"  ->  divide',
        '"altogether", "in total"  ->  add',
        '"how much is left", "how much more"  ->  subtract'
      ]
    },
    {
      h: 'A worked one',
      example: {
        label: 'Example',
        lines: [
          'A recipe needs 3/4 cup of flour. You are making',
          'half of the recipe. How much flour?',
          '',
          '"half OF three quarters"  ->  multiply',
          '',
          '1/2 x 3/4  =  3/8 cup'
        ]
      }
    },
    {
      h: 'A multi-step one',
      example: {
        label: 'Example',
        lines: [
          'A 2 1/2 metre plank is cut into pieces 1/4 m long.',
          'How many pieces, and what is left over?',
          '',
          '"how many fit"  ->  divide',
          '2 1/2  =  5/2',
          '5/2 / (1/4)  =  5/2 x 4/1  =  20/2  =  10',
          '',
          '10 pieces, nothing left over.'
        ]
      }
    },
    {
      h: 'Estimate before you calculate',
      p: ['Round each fraction to 0, 1/2 or 1 and get a rough answer first. If your calculated answer is nowhere near it, something went wrong.'],
      rule: 'Always ask at the end: does this answer make sense for the situation?'
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'A jug holds 3/4 litre. You pour out 1/3 of a litre. How much is left?', a: '5/12 litre', hint: '"How much is left" means subtract.' },
    { q: 'You walk 2/5 of a 15 km trail. How far have you walked?', a: '6 km', hint: '"Of" means multiply.' },
    { q: 'A 4 metre ribbon is cut into 2/3 metre pieces. How many pieces?', a: '6', hint: '"How many fit" means divide.' },
    { q: 'Two friends run 3/8 km and 1/2 km. How far altogether?', a: '7/8 km', hint: null },
    { q: 'A recipe needs 2/3 cup of sugar. You are making it three times. How much sugar?', a: '2 cups', hint: '2/3 x 3.' },
    { q: 'You have 1 1/2 pizzas and share them equally between 6 people. How much each?', a: '1/4 of a pizza', hint: 'Divide 3/2 by 6.' }
  ],
  retrieval: [
    { q: 'In a word problem, what operation does "of" usually mean?', a: 'Multiply.' },
    { q: 'What should you do before calculating a word problem?', a: 'Estimate, so you can tell whether the answer is sensible.' }
  ]
},

/* ============================================================ 17 */
{
  id: 'fr-17-review',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Putting it all together',
  type: 'concept',
  tier: 'taught',
  prereqs: ['fr-16-word-problems'],
  one_idea: 'Every fraction question is one of a small number of jobs — work out which one first.',
  sections: [
    {
      h: 'The routine',
      list: [
        '1.  What type of fraction is it?  (proper, improper, mixed)',
        '2.  Can I picture it?  (bar, number line)',
        '3.  Does it need simplifying or converting first?',
        '4.  Am I comparing, or calculating?',
        '5.  Which operation does the question actually want?',
        '6.  Does my answer make sense?'
      ]
    },
    {
      h: 'The four rules that get mixed up most',
      example: {
        label: 'Keep these straight',
        lines: [
          'ADD/SUBTRACT   need a common denominator',
          'MULTIPLY       straight across, no common denominator',
          'DIVIDE         flip the second one, then multiply',
          'SIMPLIFY       divide top and bottom by the same number'
        ]
      },
      note: 'If you cannot remember which is which, do a tiny case you already know. 1/2 + 1/2 must equal 1. If your method does not give 1, it is the wrong method.'
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'Simplify 18/24', a: '3/4', hint: null },
    { q: '2/3 + 1/4', a: '11/12', hint: null },
    { q: '3/5 x 2/9', a: '6/45 = 2/15', hint: null },
    { q: '3/4 / (1/8)', a: '6', hint: null },
    { q: 'Which is bigger, 5/8 or 2/3?', a: '2/3  (16/24 vs 15/24)', hint: null },
    { q: 'Convert 23/6 to a mixed number.', a: '3 5/6', hint: null },
    { q: 'A tank is 3/5 full and holds 40 litres when full. How many litres are in it?', a: '24 litres', hint: null },
    { q: 'You did 1/2 + 1/3 and got 2/5. Use a quick check to show it is wrong.', a: '2/5 is less than 1/2, but adding something to 1/2 must make it bigger. So 2/5 cannot be right. The answer is 5/6.', hint: null }
  ],
  retrieval: [
    { q: 'Which two operations need a common denominator?', a: 'Adding and subtracting.' },
    { q: 'How do you divide by a fraction?', a: 'Flip the second fraction and multiply.' }
  ]
}

);
