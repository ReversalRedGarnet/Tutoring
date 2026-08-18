/* ------------------------------------------------------------------
   MATHS
   Schema (every topic, every subject):

   id              unique, kebab-case, prefixed by subject+level
   subject         'maths' | 'science' | ...
   levels          array. A topic can serve SI-7 and AU-7 at once.
   title           what the kid sees
   type            'concept'  worked example -> guided -> practice
                   'recall'   question/answer cards, no dependency chain
   tier            'stub'  = one_idea + practice only  (5 min to write)
                   'taught'= worked + guided filled in (write the week you teach it)
   prereqs         topic ids this builds on. Drives the ladder + the map.
   one_idea        ONE sentence, plain English. Never two.
   confusable_with topic ids this gets mixed up with, + why. (Elliot)
   worked          [{ step, note }]  you talking through it
   guided          [{ prompt, answer }] kid fills the gap
   practice        [{ q, a, hint }]
   retrieval       [{ q, a }] recycled into warm-ups 1-3 weeks later
   ------------------------------------------------------------------ */

window.TOPICS = window.TOPICS || [];

window.TOPICS.push(

/* ---------- Year 6 foundations ---------- */
{
  id: 'm6-place-value',
  subject: 'maths',
  levels: ['SI-6'],
  title: 'Place value to millions',
  type: 'concept',
  tier: 'stub',
  prereqs: [],
  one_idea: 'Where a digit sits tells you how much it is worth.',
  confusable_with: [],
  worked: [],
  guided: [],
  practice: [
    { q: 'In 4 208 615, what is the value of the 2?', a: '200 000', hint: 'Count the columns from the right.' },
    { q: 'Write six hundred and four thousand, twenty in digits.', a: '604 020', hint: 'Which columns have nothing in them?' },
    { q: 'Which is larger: 89 999 or 90 010?', a: '90 010', hint: 'Compare the leftmost column that differs.' }
  ],
  retrieval: [
    { q: 'What is the value of the 7 in 7 340?', a: '7 000' }
  ]
},

{
  id: 'm6-frac-equiv',
  subject: 'maths',
  levels: ['SI-6'],
  title: 'Equivalent fractions',
  type: 'concept',
  tier: 'taught',
  prereqs: ['m6-place-value'],
  one_idea: 'The same amount can be cut into different numbers of pieces.',
  confusable_with: [],
  worked: [
    { step: 'Start with 1/2. Cut every piece in half again.', note: 'Nothing was added or taken away. Only the cutting changed.' },
    { step: 'Now there are 2 shaded out of 4. So 1/2 = 2/4.', note: 'Top and bottom both doubled.' },
    { step: 'Do it again: 4/8. And again: 8/16.', note: 'Whatever you do to the bottom, do to the top.' }
  ],
  guided: [
    { prompt: '1/3 = ?/9. What did the bottom get multiplied by?', answer: '3, so the top does too: 3/9' },
    { prompt: '2/5 = ?/20', answer: '8/20' },
    { prompt: '6/8 = 3/?', answer: '3/4 — this time you divided by 2' }
  ],
  practice: [
    { q: 'Fill in: 3/4 = ?/12', a: '9/12', hint: 'The bottom went from 4 to 12. What times 4 is 12?' },
    { q: 'Fill in: 5/6 = ?/30', a: '25/30', hint: null },
    { q: 'Write 10/15 in its simplest form.', a: '2/3', hint: 'What number divides into both 10 and 15?' },
    { q: 'Is 4/6 the same amount as 6/9?', a: 'Yes — both simplify to 2/3.', hint: 'Simplify each one first.' }
  ],
  retrieval: [
    { q: '2/3 = ?/12', a: '8/12' },
    { q: 'Simplify 9/12', a: '3/4' }
  ]
},

{
  id: 'm6-lcm',
  subject: 'maths',
  levels: ['SI-6'],
  title: 'Lowest common multiple',
  type: 'concept',
  tier: 'stub',
  prereqs: ['m6-place-value'],
  one_idea: 'The lowest common multiple is the first number that appears in both times tables.',
  confusable_with: [],
  worked: [],
  guided: [],
  practice: [
    { q: 'LCM of 4 and 6', a: '12', hint: 'List 4, 8, 12... and 6, 12... where do they first meet?' },
    { q: 'LCM of 3 and 5', a: '15', hint: null },
    { q: 'LCM of 6 and 8', a: '24', hint: null }
  ],
  retrieval: [
    { q: 'LCM of 4 and 10', a: '20' }
  ]
},

/* ---------- Year 7 ---------- */
{
  id: 'm7-frac-add-unlike',
  subject: 'maths',
  levels: ['SI-7', 'AU-7'],
  title: 'Adding fractions with different bottoms',
  type: 'concept',
  tier: 'taught',
  prereqs: ['m6-frac-equiv', 'm6-lcm'],
  one_idea: 'You can only add fractions once the pieces are the same size.',
  confusable_with: [
    { id: 'm7-frac-mult', why: 'When you MULTIPLY fractions you do not need the same bottom. Only adding and subtracting need it.' }
  ],
  worked: [
    { step: '1/2 + 1/3. The pieces are different sizes, so you cannot add yet.', note: 'Halves and thirds are not the same thing.' },
    { step: 'Find a size that both can be cut into: sixths. (LCM of 2 and 3 is 6.)', note: 'This is why we did lowest common multiple first.' },
    { step: '1/2 = 3/6 and 1/3 = 2/6.', note: 'Same amounts, recut.' },
    { step: 'Now add the tops only: 3/6 + 2/6 = 5/6.', note: 'The bottom stays 6. You are counting pieces, not resizing them.' }
  ],
  guided: [
    { prompt: '1/4 + 1/8. What size pieces will both become?', answer: 'Eighths. 2/8 + 1/8 = 3/8' },
    { prompt: '2/3 + 1/4. Common bottom?', answer: '12. 8/12 + 3/12 = 11/12' },
    { prompt: '3/5 + 1/2', answer: '6/10 + 5/10 = 11/10 = 1 1/10' }
  ],
  practice: [
    { q: '1/3 + 1/6', a: '1/2  (2/6 + 1/6 = 3/6)', hint: 'Sixths work for both.' },
    { q: '2/5 + 1/3', a: '11/15', hint: 'LCM of 5 and 3.' },
    { q: '3/4 + 5/6', a: '19/12 = 1 7/12', hint: 'Twelfths.' },
    { q: '1/2 + 1/3 + 1/6', a: '1', hint: 'Put all three over 6.' },
    { q: 'Explain why 1/2 + 1/3 is not 2/5.', a: 'Adding the bottoms would change the size of the pieces. 2/5 is smaller than 1/2, so the answer cannot be right.', hint: 'Is your answer bigger or smaller than the one half you started with?' }
  ],
  retrieval: [
    { q: '1/4 + 1/6', a: '5/12' },
    { q: 'Why do the bottoms have to match before you add?', a: 'Because the pieces have to be the same size to count them together.' }
  ]
},

{
  id: 'm7-frac-mult',
  subject: 'maths',
  levels: ['SI-7', 'AU-7'],
  title: 'Multiplying fractions',
  type: 'concept',
  tier: 'stub',
  prereqs: ['m6-frac-equiv'],
  one_idea: 'Multiplying by a fraction means taking a part of a part.',
  confusable_with: [
    { id: 'm7-frac-add-unlike', why: 'Adding needs a common bottom. Multiplying does not — straight across is correct here and wrong there.' }
  ],
  worked: [],
  guided: [],
  practice: [
    { q: '1/2 x 1/3', a: '1/6', hint: 'Half of a third.' },
    { q: '2/3 x 3/4', a: '6/12 = 1/2', hint: 'Multiply tops, multiply bottoms, then simplify.' },
    { q: '3/5 of 20', a: '12', hint: null }
  ],
  retrieval: [
    { q: '1/4 x 2/3', a: '2/12 = 1/6' }
  ]
},

{
  id: 'm7-integers',
  subject: 'maths',
  levels: ['SI-7', 'AU-7'],
  title: 'Negative numbers',
  type: 'concept',
  tier: 'stub',
  prereqs: ['m6-place-value'],
  one_idea: 'Negative numbers carry on past zero in the other direction.',
  confusable_with: [],
  worked: [],
  guided: [],
  practice: [
    { q: '-4 + 7', a: '3', hint: 'Start at -4 and move 7 to the right.' },
    { q: '3 - 8', a: '-5', hint: null },
    { q: 'Which is bigger, -2 or -9?', a: '-2', hint: 'Which one is further right on the line?' }
  ],
  retrieval: [
    { q: '-5 + 2', a: '-3' }
  ]
},

/* ---------- Year 9 ---------- */
{
  id: 'm9-linear-eq',
  subject: 'maths',
  levels: ['SI-9'],
  title: 'Solving linear equations',
  type: 'concept',
  tier: 'stub',
  prereqs: ['m7-integers', 'm7-frac-mult'],
  one_idea: 'Whatever you do to one side of the equals sign, you must do to the other.',
  confusable_with: [],
  worked: [],
  guided: [],
  practice: [
    { q: '3x + 5 = 20', a: 'x = 5', hint: 'Undo the +5 first, then the x3.' },
    { q: '2(x - 4) = 10', a: 'x = 9', hint: 'Divide both sides by 2 first, or expand the bracket.' },
    { q: '5x - 3 = 2x + 9', a: 'x = 4', hint: 'Get all the x terms on one side.' }
  ],
  retrieval: [
    { q: '4x = 28', a: 'x = 7' }
  ]
},

/* ---------- Year 10 ---------- */
{
  id: 'm10-quadratic-factor',
  subject: 'maths',
  levels: ['SI-10'],
  title: 'Factorising quadratics',
  type: 'concept',
  tier: 'stub',
  prereqs: ['m9-linear-eq'],
  one_idea: 'Factorising turns a quadratic back into the two brackets it came from.',
  confusable_with: [],
  worked: [],
  guided: [],
  practice: [
    { q: 'Factorise x^2 + 7x + 12', a: '(x + 3)(x + 4)', hint: 'Two numbers that multiply to 12 and add to 7.' },
    { q: 'Factorise x^2 - 5x + 6', a: '(x - 2)(x - 3)', hint: null },
    { q: 'Factorise x^2 - 9', a: '(x - 3)(x + 3)', hint: 'Difference of two squares.' }
  ],
  retrieval: [
    { q: 'Factorise x^2 + 5x + 6', a: '(x + 2)(x + 3)' }
  ]
}

);
