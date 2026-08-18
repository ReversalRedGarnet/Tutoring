/* SOCIAL STUDIES — mostly 'recall' type. See topics.maths.js for schema. */
window.TOPICS = window.TOPICS || [];

window.TOPICS.push(

{
  id: 'ss6-provinces',
  subject: 'social-studies',
  levels: ['SI-6'],
  title: 'Provinces of Solomon Islands',
  type: 'recall',
  tier: 'stub',
  prereqs: [],
  one_idea: 'Solomon Islands is divided into nine provinces plus the capital territory.',
  confusable_with: [],
  worked: [],
  guided: [],
  practice: [
    { q: 'How many provinces are there?', a: 'Nine, plus Honiara Town Council.', hint: null },
    { q: 'Which province is Honiara in?', a: 'Honiara is its own capital territory on Guadalcanal.', hint: null },
    { q: 'Name the provincial capital of Malaita.', a: 'Auki', hint: null }
  ],
  retrieval: [
    { q: 'Which island is the capital on?', a: 'Guadalcanal' }
  ]
},

{
  id: 'ss9-government',
  subject: 'social-studies',
  levels: ['SI-9', 'SI-10'],
  title: 'How the national government works',
  type: 'recall',
  tier: 'stub',
  prereqs: ['ss6-provinces'],
  one_idea: 'Parliament makes the laws, the cabinet runs the country, and the courts decide what the laws mean.',
  confusable_with: [],
  worked: [],
  guided: [],
  practice: [
    { q: 'Who chooses the Prime Minister?', a: 'Members of Parliament, after an election.', hint: null },
    { q: 'What are the three branches of government?', a: 'Legislature, executive, judiciary.', hint: null },
    { q: 'What is the job of the judiciary?', a: 'To interpret and apply the law.', hint: null }
  ],
  retrieval: [
    { q: 'Which branch makes laws?', a: 'The legislature — Parliament.' }
  ]
}

);
