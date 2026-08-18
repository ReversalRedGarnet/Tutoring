/* ENGLISH — see topics.maths.js for the full schema comment. */
window.TOPICS = window.TOPICS || [];

window.TOPICS.push(

{
  id: 'e6-sentence-parts',
  subject: 'english',
  levels: ['SI-6'],
  title: 'Subject and verb',
  type: 'concept',
  tier: 'stub',
  prereqs: [],
  one_idea: 'Every sentence needs someone or something, and something they do.',
  confusable_with: [],
  worked: [],
  guided: [],
  practice: [
    { q: 'Find the subject and verb: "The rain flooded the road."', a: 'Subject: the rain. Verb: flooded.', hint: 'Who or what did something?' },
    { q: 'Is this a full sentence? "Running down to the wharf."', a: 'No — there is no subject. Who was running?', hint: null },
    { q: 'Fix it into a full sentence.', a: 'Any answer with a subject added, e.g. "The boys were running down to the wharf."', hint: null }
  ],
  retrieval: [
    { q: 'What two things must every sentence have?', a: 'A subject and a verb.' }
  ]
},

{
  id: 'e9-paragraph-argument',
  subject: 'english',
  levels: ['SI-9', 'SI-10'],
  title: 'Building a paragraph that argues',
  type: 'concept',
  tier: 'stub',
  prereqs: ['e6-sentence-parts'],
  one_idea: 'A paragraph makes one point, proves it, then explains why the proof works.',
  confusable_with: [],
  worked: [],
  guided: [],
  practice: [
    { q: 'What are the three moves in an argument paragraph?', a: 'Point, evidence, explanation.', hint: null },
    { q: 'A paragraph gives a quote and stops. What is missing?', a: 'The explanation — why that quote proves the point.', hint: null },
    { q: 'Write a point sentence for: school should start later.', a: 'Any single clear claim, e.g. "Starting school later would improve concentration in the first lessons."', hint: 'One claim only, no evidence yet.' }
  ],
  retrieval: [
    { q: 'What goes immediately after your evidence?', a: 'The explanation of how it supports your point.' }
  ]
}

);
