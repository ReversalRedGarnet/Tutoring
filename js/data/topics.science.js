/* SCIENCE — see topics.maths.js for the full schema comment. */
window.TOPICS = window.TOPICS || [];

window.TOPICS.push(

{
  id: 's6-states-matter',
  subject: 'science',
  levels: ['SI-6'],
  title: 'Solids, liquids and gases',
  type: 'concept',
  tier: 'stub',
  prereqs: [],
  one_idea: 'The same stuff can be a solid, a liquid or a gas depending on how tightly its particles are held.',
  confusable_with: [],
  worked: [],
  guided: [],
  practice: [
    { q: 'Why does a gas fill its whole container but a liquid does not?', a: 'Gas particles move freely and spread out; liquid particles stay touching and settle at the bottom.', hint: 'Think about how close the particles are.' },
    { q: 'Water boils into steam. Is this a new substance?', a: 'No — it is the same water, just as a gas.', hint: null },
    { q: 'Name the change from gas to liquid.', a: 'Condensation', hint: null }
  ],
  retrieval: [
    { q: 'What happens to particles when a solid melts?', a: 'They gain energy and move apart enough to slide past each other.' }
  ]
},

{
  id: 's7-cells',
  subject: 'science',
  levels: ['SI-7'],
  title: 'Cells',
  type: 'concept',
  tier: 'stub',
  prereqs: [],
  one_idea: 'Every living thing is built from cells.',
  confusable_with: [],
  worked: [],
  guided: [],
  practice: [
    { q: 'Name two parts a plant cell has that an animal cell does not.', a: 'Cell wall and chloroplasts', hint: null },
    { q: 'What does the nucleus do?', a: 'Controls the cell and holds its instructions.', hint: null },
    { q: 'Why can plant cells make their own food but animal cells cannot?', a: 'Plant cells have chloroplasts for photosynthesis.', hint: 'Which part is missing in an animal cell?' }
  ],
  retrieval: [
    { q: 'What is the job of the cell membrane?', a: 'Controls what goes in and out of the cell.' }
  ]
},

{
  id: 's9-forces',
  subject: 'science',
  levels: ['SI-9'],
  title: 'Forces and motion',
  type: 'concept',
  tier: 'stub',
  prereqs: ['s6-states-matter'],
  one_idea: 'A thing only changes speed or direction when an unbalanced force acts on it.',
  confusable_with: [],
  worked: [],
  guided: [],
  practice: [
    { q: 'A book rests on a table. Name the two forces on it.', a: 'Weight pulling down, normal force from the table pushing up.', hint: 'They are balanced, which is why it stays still.' },
    { q: 'A car travels at a steady 60 km/h. Are the forces balanced?', a: 'Yes — steady speed in a straight line means balanced.', hint: 'Is it changing speed?' },
    { q: 'Calculate the force on a 5 kg mass accelerating at 2 m/s^2.', a: '10 N  (F = ma)', hint: null }
  ],
  retrieval: [
    { q: 'What does an unbalanced force do to a moving object?', a: 'Changes its speed or its direction.' }
  ]
},

{
  id: 's10-chem-reactions',
  subject: 'science',
  levels: ['SI-10'],
  title: 'Chemical reactions',
  type: 'concept',
  tier: 'stub',
  prereqs: ['s6-states-matter'],
  one_idea: 'In a chemical reaction atoms are rearranged, never created or destroyed.',
  confusable_with: [],
  worked: [],
  guided: [],
  practice: [
    { q: 'Why must a chemical equation be balanced?', a: 'Because the same atoms exist before and after — none are made or lost.', hint: null },
    { q: 'Balance: H2 + O2 -> H2O', a: '2H2 + O2 -> 2H2O', hint: 'Count oxygens on each side first.' },
    { q: 'Is dissolving salt in water a chemical reaction?', a: 'No — no new substance forms, and it can be reversed by evaporating.', hint: 'Could you get the salt back?' }
  ],
  retrieval: [
    { q: 'Balance: Mg + O2 -> MgO', a: '2Mg + O2 -> 2MgO' }
  ]
}

);
