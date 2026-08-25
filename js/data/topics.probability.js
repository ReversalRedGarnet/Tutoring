/* ------------------------------------------------------------------
   PROBABILITY — a full sequential block, AU Year 7.

   The unit that closes the loop. Probability is where fractions,
   decimals and percentages stop being three ways of writing the same
   thing and start being three ways of answering the same question, so
   this block reaches back into all three.

   Topic 13 exists because probability is unusually rich in confident
   wrong beliefs — the gambler's fallacy, "it is due", "anything can
   happen so it is fifty-fifty". Those are named directly rather than
   left to be corrected later.

   Cross-references: fr-08-simplifying, fr-11-add-like, pc-04-fdp,
   pc-05-comparing.
   ------------------------------------------------------------------ */

window.TOPICS = window.TOPICS || [];

window.TOPICS.push(

/* ============================================================ 1 */
{
  id: 'pb-01-what-is',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'What is probability?',
  type: 'concept',
  tier: 'taught',
  prereqs: [],
  one_idea: 'Probability measures how likely something is, on a scale from impossible to certain.',
  sections: [
    {
      h: 'Putting a number on a chance',
      p: ['Some things definitely will happen. Some definitely will not. Most sit somewhere in between, and probability is how that in-between gets measured instead of guessed at.'],
      example: {
        label: 'Example',
        lines: [
          'The sun rises tomorrow            certain',
          'A tossed coin lands on heads      even chance',
          'You roll a 7 on a normal dice     impossible'
        ]
      },
      rule: 'Probability is about what might happen, not what did. It never promises an outcome.'
    },
    {
      h: 'Three kinds of event',
      list: [
        'Certain      —  it must happen',
        'Impossible   —  it cannot happen',
        'Possible     —  it might, and probability measures how likely'
      ],
      note: 'Most events in life are possible rather than certain or impossible, which is exactly why the middle of the scale needs numbers.'
    }
  ],
  confusable_with: [
    { label: 'Probability tells you what will happen', why: 'It tells you how likely something is. A 90% chance of rain still leaves a dry day on the table.' }
  ],
  practice: [
    { q: 'Is rolling a 3 on a normal dice certain, impossible or possible?', a: 'Possible.', hint: null },
    { q: 'Is rolling an 8 on a normal six-sided dice certain, impossible or possible?', a: 'Impossible.', hint: null },
    { q: 'Give an example of a certain event.', a: 'Any: the sun rises, water is wet, tomorrow follows today.', hint: null },
    { q: 'If the forecast says 80% chance of rain and it stays dry, was the forecast wrong?', a: 'Not necessarily. 80% leaves a real chance of a dry day.', hint: null },
    { q: 'What does probability actually measure?', a: 'How likely something is to happen.', hint: null }
  ],
  retrieval: [
    { q: 'Rolling a 7 on a normal dice: certain, impossible or possible?', a: 'Impossible.' },
    { q: 'Does probability tell you what will happen?', a: 'No — how likely it is.' }
  ]
},

/* ============================================================ 2 */
{
  id: 'pb-02-vocabulary',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Probability words',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pb-01-what-is'],
  one_idea: 'Five words cover the whole scale, in a fixed order from impossible to certain.',
  sections: [
    {
      h: 'The five words',
      example: {
        label: 'In order',
        lines: [
          'impossible    it cannot happen',
          'unlikely      it probably will not',
          'even chance   as likely as not',
          'likely        it probably will',
          'certain       it must happen'
        ]
      },
      rule: 'These are in order. Nothing is more likely than certain and nothing is less likely than impossible.'
    },
    {
      h: 'Using them properly',
      p: ['Unlikely does not mean impossible, and likely does not mean certain. An unlikely thing happening is not a surprise — it is what unlikely means.'],
      list: [
        'Rolling a 6 on a dice                 unlikely',
        'A tossed coin landing on tails        even chance',
        'Rain in Honiara in February           likely',
        'Drawing a red card from a full deck   even chance'
      ],
      note: '"Even chance" is also called "fifty-fifty". It only applies when the two outcomes really are equally likely, which is rarer than people assume.'
    }
  ],
  confusable_with: [
    { label: 'Unlikely means it will not happen', why: 'It means it probably will not. Unlikely things happen all the time — that is why they are unlikely rather than impossible.' },
    { label: 'Two possible outcomes means fifty-fifty', why: 'You either win the lottery or you do not. Two outcomes, nowhere near even.' }
  ],
  practice: [
    { q: 'Describe the chance of rolling a number less than 7 on a normal dice.', a: 'Certain.', hint: null },
    { q: 'Describe the chance of a tossed coin landing heads.', a: 'Even chance.', hint: null },
    { q: 'Describe the chance of rolling a 1 on a normal dice.', a: 'Unlikely.', hint: null },
    { q: 'Describe the chance of rolling an even number on a normal dice.', a: 'Even chance.', hint: 'Three of the six numbers are even.' },
    { q: 'Is "unlikely" the same as "impossible"?', a: 'No. Unlikely things can still happen.', hint: null },
    { q: 'A bag has 9 red and 1 blue marble. Describe the chance of drawing blue.', a: 'Unlikely.', hint: null }
  ],
  retrieval: [
    { q: 'What word describes a chance of exactly one half?', a: 'Even chance.' },
    { q: 'Does unlikely mean impossible?', a: 'No.' }
  ]
},

/* ============================================================ 3 */
{
  id: 'pb-03-scale',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'The probability scale',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pb-02-vocabulary', 'pc-04-fdp'],
  one_idea: 'Every probability sits between 0 and 1, which is the same as between 0% and 100%.',
  sections: [
    {
      h: 'One line, three labels',
      p: ['The probability scale is the same number line you used for fractions and percentages. Impossible sits at one end, certain at the other, and everything real sits in between.'],
      figure: {
        caption: 'A probability scale from 0 to 1, marked with 0%, 25%, 50%, 75% and 100% underneath, and labelled impossible, unlikely, even chance, likely and certain.',
        svg: '<svg viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg"><path class="f-line" d="M25 50h290"/><g class="f-line"><path d="M25 42v16M97 42v16M170 42v16M242 42v16M315 42v16"/></g><g class="f-label f-mid"><text x="25" y="34">0</text><text x="97" y="34">1/4</text><text x="170" y="34">1/2</text><text x="242" y="34">3/4</text><text x="315" y="34">1</text><text x="25" y="76">0%</text><text x="97" y="76">25%</text><text x="170" y="76">50%</text><text x="242" y="76">75%</text><text x="315" y="76">100%</text></g><g class="f-dim f-mid"><text x="30" y="100">impossible</text><text x="170" y="100">even</text><text x="310" y="100">certain</text></g></svg>'
      },
      rule: 'A probability can never be less than 0 or more than 1. Anything outside that is a mistake, not an unusual event.'
    },
    {
      h: 'Three ways to write the same chance',
      example: {
        label: 'Example',
        lines: [
          'a coin landing heads',
          '',
          'fraction     1/2',
          'decimal      0.5',
          'percentage   50%',
          '',
          'Three forms. One chance.'
        ]
      },
      note: 'A question may ask for any of the three. Convert at the end rather than working in an awkward form the whole way through.'
    }
  ],
  confusable_with: [
    { label: 'A probability of 2 means very likely', why: 'It means an arithmetic mistake. Certain is 1 and nothing goes past it.' },
    { label: 'A probability can be negative', why: 'The lowest possible chance is impossible, which is 0.' }
  ],
  practice: [
    { q: 'What number represents a certain event?', a: '1, or 100%.', hint: null },
    { q: 'What number represents an impossible event?', a: '0.', hint: null },
    { q: 'Write an even chance as a fraction, a decimal and a percentage.', a: '1/2, 0.5, 50%', hint: null },
    { q: 'A probability of 0.2 — is that likely or unlikely?', a: 'Unlikely.', hint: 'Where does 0.2 sit on the line?' },
    { q: 'A student calculates a probability of 1.4. What does that tell you?', a: 'Something went wrong — probabilities cannot exceed 1.', hint: null },
    { q: 'Write a probability of 3/4 as a percentage.', a: '75%', hint: null }
  ],
  retrieval: [
    { q: 'What is the largest a probability can be?', a: '1, or 100%.' },
    { q: 'Write 0.25 as a probability percentage.', a: '25%' }
  ]
},

/* ============================================================ 4 */
{
  id: 'pb-04-likelihood',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Comparing likelihood',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pb-03-scale'],
  one_idea: 'Two events can be ranked by where they sit on the scale, without either one being certain.',
  sections: [
    {
      h: 'More likely, less likely, equally likely',
      p: ['Comparing does not need exact numbers. It only needs to know which event has more ways of happening.'],
      example: {
        label: 'Example',
        lines: [
          'A bag holds 5 red, 3 blue and 2 green marbles.',
          '',
          'red is more likely than blue',
          'blue is more likely than green',
          'red is the most likely of the three'
        ]
      },
      rule: 'More ways for something to happen means more likely. Count the ways before deciding.'
    },
    {
      h: 'Equally likely',
      p: ['Two events are equally likely when they have the same number of ways of happening. On a dice, rolling a 2 and rolling a 5 are equally likely, because each happens exactly one way.'],
      note: 'Equally likely is a statement about the number of ways, not about how it feels. A dice does not know that 6 feels lucky.'
    }
  ],
  confusable_with: [
    { label: 'Likely means it will definitely happen', why: 'Likely means it probably will. A 70% chance still fails three times in ten.' },
    { label: 'Some dice numbers are harder to roll than others', why: 'Each of the six faces has exactly one way of coming up. A fair dice has no favourites.' }
  ],
  practice: [
    { q: 'A bag has 7 red and 2 blue marbles. Which colour is more likely to be drawn?', a: 'Red.', hint: null },
    { q: 'On a normal dice, is rolling a 3 more likely than rolling a 5?', a: 'No — they are equally likely.', hint: null },
    { q: 'Is rolling an even number more likely than rolling a 6?', a: 'Yes. Three ways against one.', hint: null },
    { q: 'A spinner has 4 red sections and 4 blue. Which is more likely?', a: 'Neither — they are equally likely.', hint: null },
    { q: 'A bag has 6 green, 6 yellow and 1 white. Rank the three colours.', a: 'Green and yellow equally likely and most likely; white least likely.', hint: null }
  ],
  retrieval: [
    { q: 'What makes two events equally likely?', a: 'They have the same number of ways of happening.' },
    { q: 'On a fair dice, is a 6 harder to roll than a 2?', a: 'No.' }
  ]
},

/* ============================================================ 5 */
{
  id: 'pb-05-outcomes',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Outcomes and sample space',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pb-01-what-is'],
  one_idea: 'The sample space is the list of everything that could happen.',
  sections: [
    {
      h: 'Listing what could happen',
      p: ['An outcome is one thing that could result. The sample space is all of them together, written out.'],
      example: {
        label: 'Example',
        lines: [
          'tossing a coin      { heads, tails }              2 outcomes',
          'rolling a dice      { 1, 2, 3, 4, 5, 6 }          6 outcomes',
          'a traffic light     { red, amber, green }         3 outcomes'
        ]
      },
      rule: 'You cannot calculate a probability until you know how many outcomes there are. The list comes first.'
    },
    {
      h: 'Being organised about it',
      p: ['For two things happening together, work through the first one in order and pair it with every option from the second. That way nothing gets missed.'],
      example: {
        label: 'Example',
        lines: [
          'Tossing two coins',
          '',
          'HH    HT    TH    TT',
          '',
          '4 outcomes, not 3.'
        ]
      },
      note: 'HT and TH are different outcomes. The first coin landing heads and the second landing tails is not the same event as the reverse.'
    }
  ],
  confusable_with: [
    { label: 'Two coins have three outcomes: two heads, two tails, one of each', why: 'One of each happens two ways — HT and TH. That is why there are four outcomes and why one of each is the most likely result.' },
    { label: 'The sample space can be worked out in your head', why: 'It can, right up until it cannot. Writing it out is what stops an outcome going missing.' }
  ],
  practice: [
    { q: 'List the sample space for rolling a normal dice.', a: '1, 2, 3, 4, 5, 6', hint: null },
    { q: 'How many outcomes are there when tossing two coins?', a: '4', hint: 'HH, HT, TH, TT.' },
    { q: 'List the sample space for a spinner with sections red, blue and green.', a: 'red, blue, green', hint: null },
    { q: 'Why are HT and TH counted separately?', a: 'They are different results — the coins landed in a different order.', hint: null },
    { q: 'A bag has one red, one blue and one green marble. How many outcomes when drawing one?', a: '3', hint: null },
    { q: 'How many outcomes when tossing a coin and rolling a dice together?', a: '12', hint: 'Each of the 2 coin results pairs with each of the 6 dice results.' }
  ],
  retrieval: [
    { q: 'What is a sample space?', a: 'The list of every possible outcome.' },
    { q: 'How many outcomes does one dice have?', a: 'Six.' }
  ]
},

/* ============================================================ 6 */
{
  id: 'pb-06-as-a-fraction',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Probability as a fraction',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pb-05-outcomes', 'fr-08-simplifying'],
  one_idea: 'Favourable outcomes over total outcomes.',
  sections: [
    {
      h: 'The formula',
      p: ['Count the outcomes you want. Count all the outcomes there are. The first goes on top.'],
      example: {
        label: 'Example',
        lines: [
          'Rolling an even number on a dice',
          '',
          'favourable   2, 4, 6      =  3',
          'total        1 to 6       =  6',
          '',
          'P(even)  =  3/6  =  1/2'
        ]
      },
      rule: 'P(event) = favourable outcomes / total outcomes. Simplify at the end, the same as any fraction.'
    },
    {
      h: 'Writing it down',
      p: ['P stands for probability, and the event goes in the brackets. P(red) is read as "the probability of red".'],
      example: {
        label: 'Example',
        lines: [
          'A bag has 4 red, 3 blue and 5 green marbles.',
          '',
          'total   4 + 3 + 5  =  12',
          '',
          'P(red)    =  4/12  =  1/3',
          'P(blue)   =  3/12  =  1/4',
          'P(green)  =  5/12'
        ]
      },
      note: 'The total is every marble in the bag, not the number of colours. Three colours, twelve outcomes.'
    }
  ],
  confusable_with: [
    { label: 'The bottom number is how many types there are', why: 'It is how many outcomes there are. A bag with 4 red and 8 blue has 12 outcomes, not 2.' },
    { label: 'Put the total on top', why: 'The favourable outcomes go on top. If your answer came out bigger than 1, the fraction is upside down.' },
    { id: 'fr-08-simplifying', why: 'Same simplifying. 3/6 becomes 1/2 here for the same reason it does anywhere else.' }
  ],
  practice: [
    { q: 'P(rolling a 4) on a normal dice.', a: '1/6', hint: null },
    { q: 'P(rolling an odd number) on a normal dice.', a: '3/6 = 1/2', hint: null },
    { q: 'A bag has 5 red and 3 blue. P(red)?', a: '5/8', hint: 'Eight marbles in total.' },
    { q: 'A bag has 2 red, 4 blue and 6 green. P(blue)?', a: '4/12 = 1/3', hint: null },
    { q: 'P(rolling a number greater than 4) on a dice.', a: '2/6 = 1/3', hint: '5 and 6.' },
    { q: 'A spinner has 8 equal sections, 3 of them red. P(red)?', a: '3/8', hint: null },
    { q: 'A bag has 10 marbles, all red. P(blue)?', a: '0', hint: 'No favourable outcomes.' }
  ],
  retrieval: [
    { q: 'What is the probability formula?', a: 'Favourable outcomes over total outcomes.' },
    { q: 'P(rolling a 2) on a dice?', a: '1/6' }
  ]
},

/* ============================================================ 7 */
{
  id: 'pb-07-experimental',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Experimental probability',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pb-06-as-a-fraction'],
  one_idea: 'Do the thing many times, record what happened, and divide by the number of trials.',
  sections: [
    {
      h: 'Probability from results',
      p: ['Instead of reasoning about what should happen, run the experiment and count what did.'],
      example: {
        label: 'Example',
        lines: [
          'A coin is tossed 50 times. Heads comes up 27 times.',
          '',
          'experimental P(heads)  =  27/50  =  0.54  =  54%'
        ]
      },
      rule: 'Experimental probability = times it happened / number of trials.'
    },
    {
      h: 'Why it does not match exactly',
      p: ['A fair coin should give 50%, but 50 tosses will rarely land on exactly 25. That gap is normal and it shrinks as the number of trials goes up.'],
      example: {
        label: 'Example',
        lines: [
          '10 tosses      6 heads     60%      a long way off',
          '100 tosses     53 heads    53%      closer',
          '1000 tosses    508 heads   50.8%    closer again'
        ]
      },
      note: 'More trials means a closer match. This is the single most useful fact in the unit.'
    },
    {
      h: 'When experiment is the only option',
      p: ['Some things have no formula. Whether a drawing pin lands point-up cannot be reasoned out, so it has to be tested.'],
      list: [
        'Testing whether a dice is loaded',
        'A drawing pin landing point-up',
        'How often a bus is late',
        'Whether a spinner is fairly made'
      ]
    }
  ],
  confusable_with: [
    { label: 'If the experiment does not give the expected answer, the coin is unfair', why: 'Small numbers of trials wander. 6 heads in 10 tosses is completely ordinary for a fair coin.' },
    { label: 'More trials makes each toss more predictable', why: 'Each toss stays exactly as unpredictable. It is the overall proportion that settles down, not the individual result.' }
  ],
  practice: [
    { q: 'A dice is rolled 60 times and shows a 3 on 12 of them. Experimental P(3)?', a: '12/60 = 1/5', hint: null },
    { q: 'A coin is tossed 40 times and lands heads 18 times. Experimental P(heads) as a percentage?', a: '45%', hint: null },
    { q: 'A spinner is spun 200 times and lands red 96 times. Experimental P(red)?', a: '96/200 = 0.48', hint: null },
    { q: 'Would 20 trials or 500 trials give a better estimate?', a: '500 — more trials get closer to the true probability.', hint: null },
    { q: 'A coin gives 7 heads in 10 tosses. Does that prove it is unfair?', a: 'No. Small numbers of trials vary a lot.', hint: null },
    { q: 'Name something whose probability can only be found by experiment.', a: 'Any: a drawing pin landing point-up, a bus running late, a bottle-cap landing upright.', hint: null }
  ],
  retrieval: [
    { q: 'How do you calculate experimental probability?', a: 'Times it happened, divided by number of trials.' },
    { q: 'What happens to accuracy as trials increase?', a: 'It gets closer to the true probability.' }
  ]
},

/* ============================================================ 8 */
{
  id: 'pb-08-theoretical',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Theoretical probability',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pb-06-as-a-fraction'],
  one_idea: 'What should happen, worked out by reasoning rather than by testing.',
  sections: [
    {
      h: 'The two kinds side by side',
      example: {
        label: 'Example',
        lines: [
          'theoretical    what should happen     reasoned from the outcomes',
          'experimental   what did happen        counted from trials',
          '',
          'A coin:  theoretical P(heads) = 1/2 before a single toss.'
        ]
      },
      rule: 'Theoretical probability only works when every outcome is equally likely. Check that before using it.'
    },
    {
      h: 'Fair and unfair',
      p: ['Fair means every outcome has the same chance. A normal dice is fair. A dice with a weight glued inside is not, and no amount of reasoning will tell you its probabilities — that one has to be tested.'],
      list: [
        'A coin, a normal dice, a spinner with equal sections   —  fair',
        'A weighted dice, a spinner with uneven sections        —  not fair'
      ],
      note: 'If the sections of a spinner are different sizes, counting them gives the wrong answer. The size of each section is what matters.'
    },
    {
      h: 'Expected results',
      p: ['Theoretical probability predicts roughly how many times something should happen in a given number of trials.'],
      example: {
        label: 'Example',
        lines: [
          'Rolling a dice 60 times, how many 4s should you expect?',
          '',
          'P(4)  =  1/6',
          '1/6 of 60  =  10',
          '',
          'Expect about 10. Not exactly 10.'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'pb-07-experimental', why: 'Theoretical is worked out in advance from the outcomes. Experimental is counted afterwards from trials. They should be close, and they will not be identical.' },
    { label: 'Expecting 10 means you will get 10', why: 'Expected means the long-run average. Getting 8 or 13 is entirely normal.' },
    { label: 'A spinner with 3 sections gives each a 1/3 chance', why: 'Only if the sections are the same size. Uneven sections are not equally likely.' }
  ],
  practice: [
    { q: 'Theoretical P(heads) for a fair coin?', a: '1/2', hint: null },
    { q: 'A dice is rolled 120 times. How many 5s would you expect?', a: 'About 20', hint: '1/6 of 120.' },
    { q: 'A spinner has 4 equal sections, one red. In 80 spins, how many reds would you expect?', a: 'About 20', hint: null },
    { q: 'A bag has 3 red and 7 blue. In 50 draws with replacement, how many reds would you expect?', a: 'About 15', hint: 'P(red) is 3/10.' },
    { q: 'Why can theoretical probability not be used on a weighted dice?', a: 'The outcomes are not equally likely, so counting them gives the wrong answer.', hint: null },
    { q: 'You expect 20 heads in 40 tosses and get 23. Is anything wrong?', a: 'No. Expected is an average, not a guarantee.', hint: null }
  ],
  retrieval: [
    { q: 'What must be true for theoretical probability to work?', a: 'Every outcome must be equally likely.' },
    { q: 'Rolling a dice 30 times, how many 2s would you expect?', a: 'About 5.' }
  ]
},

/* ============================================================ 9 */
{
  id: 'pb-09-tables',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Tables and outcome diagrams',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pb-05-outcomes', 'pb-08-theoretical'],
  one_idea: 'When two things happen together, a grid finds every outcome without missing any.',
  sections: [
    {
      h: 'The two-way table',
      p: ['Put one event down the side and the other along the top. Every cell in the grid is one outcome, and the grid cannot miss one.'],
      example: {
        label: 'Example — two coins',
        lines: [
          '         H       T',
          'H        HH      HT',
          'T        TH      TT',
          '',
          '2 x 2  =  4 outcomes'
        ]
      },
      rule: 'Number of outcomes = outcomes of the first x outcomes of the second.'
    },
    {
      h: 'Two dice',
      p: ['Two dice give 36 outcomes, which is far too many to list safely by hand. A grid of the totals makes the pattern visible immediately.'],
      example: {
        label: 'Example — totals of two dice',
        lines: [
          '        1    2    3    4    5    6',
          '1       2    3    4    5    6    7',
          '2       3    4    5    6    7    8',
          '3       4    5    6    7    8    9',
          '4       5    6    7    8    9    10',
          '5       6    7    8    9    10   11',
          '6       7    8    9    10   11   12'
        ]
      },
      note: 'Count 7s in that grid: there are six of them. Count 12s: only one. That is why 7 comes up so much more often, and it is visible rather than something to be told.'
    }
  ],
  confusable_with: [
    { label: 'Two dice have 12 outcomes', why: 'That adds the two dice instead of pairing them. It is 6 x 6 = 36.' },
    { label: 'Every total from 2 to 12 is equally likely', why: 'The grid shows otherwise. A 7 happens six ways, a 2 happens one way.' }
  ],
  practice: [
    { q: 'How many outcomes when rolling two dice?', a: '36', hint: '6 x 6.' },
    { q: 'Using the grid, P(total of 7) with two dice?', a: '6/36 = 1/6', hint: 'Count the 7s.' },
    { q: 'P(total of 12) with two dice?', a: '1/36', hint: 'Only 6 and 6.' },
    { q: 'How many outcomes when tossing a coin and rolling a dice?', a: '12', hint: '2 x 6.' },
    { q: 'P(total of 2) with two dice?', a: '1/36', hint: null },
    { q: 'Why is a total of 7 the most common with two dice?', a: 'It can be made six different ways, more than any other total.', hint: null }
  ],
  retrieval: [
    { q: 'How many outcomes do two dice have?', a: '36.' },
    { q: 'Which total is most likely with two dice?', a: '7.' }
  ]
},

/* ============================================================ 10 */
{
  id: 'pb-10-complementary',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Complementary events',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pb-06-as-a-fraction', 'fr-11-add-like'],
  one_idea: 'Something either happens or it does not, so the two probabilities add to 1.',
  sections: [
    {
      h: 'The two halves of certainty',
      p: ['There is no third option. Either the event happens or it does not, and between them they cover everything.'],
      example: {
        label: 'Example',
        lines: [
          'P(rolling a 6)      =  1/6',
          'P(not rolling a 6)  =  5/6',
          '',
          '1/6  +  5/6  =  1'
        ]
      },
      rule: 'P(not A) = 1 - P(A). The two always add to 1.'
    },
    {
      h: 'Why it saves work',
      p: ['Sometimes the thing you do not want is much easier to count than the thing you do.'],
      example: {
        label: 'Example',
        lines: [
          'P(rolling at least a 2) on a dice',
          '',
          'the hard way   2, 3, 4, 5, 6   =  5/6',
          'the easy way   1 - P(rolling a 1)  =  1 - 1/6  =  5/6',
          '',
          'Same answer, less counting.'
        ]
      },
      note: 'Look for the word "not" or "at least" in a question. Both are signals that the complement will be quicker.'
    }
  ],
  confusable_with: [
    { label: 'Subtract a fraction from 100, or a percentage from 1', why: 'The forms have to match. A fraction comes off 1, a percentage comes off 100%. Mixing them gives an answer that is nowhere near right.' },
    { label: 'If P(red) is 1/4, then P(not red) is 3/4 only when there are 4 marbles', why: 'It holds for any number of marbles. The complement depends on the probability, not on the count.' }
  ],
  practice: [
    { q: 'P(rain) is 0.3. What is P(no rain)?', a: '0.7', hint: null },
    { q: 'P(red) is 1/5. What is P(not red)?', a: '4/5', hint: null },
    { q: 'P(winning) is 20%. What is P(not winning)?', a: '80%', hint: null },
    { q: 'P(rolling a 3) is 1/6. What is P(not rolling a 3)?', a: '5/6', hint: null },
    { q: 'A bag has 3 red and 9 blue. Find P(not red).', a: '9/12 = 3/4', hint: 'Two ways to get there.' },
    { q: 'Use the complement to find P(rolling more than 1) on a dice.', a: '5/6', hint: '1 minus P(rolling a 1).' }
  ],
  retrieval: [
    { q: 'What do an event and its complement add to?', a: '1, or 100%.' },
    { q: 'P(A) is 0.4. What is P(not A)?', a: '0.6' }
  ]
},

/* ============================================================ 11 */
{
  id: 'pb-11-comparing',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Comparing probabilities',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pb-06-as-a-fraction', 'pc-05-comparing'],
  one_idea: 'Convert both to the same form, then compare them like any other numbers.',
  sections: [
    {
      h: 'Fractions with different bottoms',
      p: ['Two probabilities written as fractions with different denominators cannot be compared as they stand. Percentages are usually the fastest common ground.'],
      example: {
        label: 'Example',
        lines: [
          'Which is more likely?',
          '',
          'bag A   3 red out of 8     3/8   =  37.5%',
          'bag B   4 red out of 10    4/10  =  40%',
          '',
          'Bag B, but only just.'
        ]
      },
      rule: 'Never compare 3/8 with 4/10 by looking at them. Convert first.'
    },
    {
      h: 'The bigger bag trap',
      p: ['More red marbles does not mean a better chance. What matters is the share of the bag, not the count.'],
      example: {
        label: 'Example',
        lines: [
          'bag A   5 red out of 10     =  50%',
          'bag B   8 red out of 20     =  40%',
          '',
          'Bag B has more red marbles and a worse chance.'
        ]
      },
      note: 'This is the same idea as comparing test scores in the percentages unit. Different totals, so the raw counts say nothing.'
    }
  ],
  confusable_with: [
    { label: 'More favourable outcomes means more likely', why: '8 red out of 20 is worse than 5 red out of 10. The total has to be part of the comparison.' },
    { id: 'pc-05-comparing', why: 'Identical method. Probabilities are just fractions, decimals and percentages doing a different job.' }
  ],
  practice: [
    { q: 'Which is more likely, 1/4 or 30%?', a: '30%, since 1/4 is 25%.', hint: null },
    { q: 'Bag A has 2 red out of 5. Bag B has 3 red out of 10. Which gives a better chance of red?', a: 'Bag A — 40% against 30%.', hint: null },
    { q: 'Order from least to most likely: 0.4, 1/2, 35%', a: '35%, 0.4, 1/2', hint: null },
    { q: 'Bag A has 6 red out of 12. Bag B has 9 red out of 15. Which is better?', a: 'Bag B — 60% against 50%.', hint: null },
    { q: 'Why can you not just compare the number of red marbles?', a: 'The bags may hold different totals, so the same count is a different share.', hint: null },
    { q: 'Which is more likely, rolling a 6 on a dice or drawing a red from a bag of 3 red and 9 blue?', a: 'The bag — 1/4 against 1/6.', hint: null }
  ],
  retrieval: [
    { q: 'Before comparing two probabilities, what do you do?', a: 'Convert them to the same form.' },
    { q: 'Which is bigger, 1/5 or 25%?', a: '25%.' }
  ]
},

/* ============================================================ 12 */
{
  id: 'pb-12-real-world',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Probability in real life',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pb-11-comparing'],
  one_idea: 'Most real probabilities come from records rather than from reasoning.',
  sections: [
    {
      h: 'Where it shows up',
      list: [
        'Weather      —  chance of rain, from years of records',
        'Sport        —  a player\'s goal-scoring rate',
        'Health       —  how well a treatment works',
        'Surveys      —  what a sample says about everyone',
        'Games        —  whether a game is fair to both players'
      ],
      rule: 'A real-world probability is nearly always experimental. Nobody reasons out the weather from first principles.'
    },
    {
      h: 'Reading a forecast properly',
      p: ['A 70% chance of rain means that on days that looked like this one, it rained about 7 times in 10. It does not mean 70% of the sky, or rain for 70% of the day.'],
      note: 'A forecast is not wrong when the unlikely thing happens. It would only be wrong if the unlikely thing kept happening.'
    },
    {
      h: 'Is the game fair?',
      p: ['A game is fair when every player has the same chance of winning. Working out each player\'s probability is how you find out.'],
      example: {
        label: 'Example',
        lines: [
          'Player A wins on an even roll.  P  =  3/6  =  1/2',
          'Player B wins on a 5 or 6.     P  =  2/6  =  1/3',
          '',
          'Not fair. A has the better chance.'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'A 70% chance of rain means it rains for 70% of the day', why: 'It means about 7 days in 10 that look like this one end up with rain.' },
    { label: 'A game with two players is automatically fair', why: 'Fair means equal chances. Two players with different winning conditions are usually not equal.' }
  ],
  practice: [
    { q: 'What does a 30% chance of rain actually mean?', a: 'On days like this one, it rained about 3 times in 10.', hint: null },
    { q: 'A player scores 18 goals from 30 shots. What is their experimental probability of scoring?', a: '18/30 = 0.6 = 60%', hint: null },
    { q: 'Player A wins on a roll of 1, 2 or 3. Player B wins on 4, 5 or 6. Is the game fair?', a: 'Yes — both have 1/2.', hint: null },
    { q: 'Player A wins on an even roll, Player B on a roll of 6. Is that fair?', a: 'No. A has 1/2, B has 1/6.', hint: null },
    { q: 'Why is the chance of rain an experimental probability?', a: 'It comes from records of what happened on similar days, not from reasoning.', hint: null },
    { q: 'A survey of 200 people finds 130 own a bike. Estimate the probability a person owns a bike.', a: '130/200 = 0.65 = 65%', hint: null }
  ],
  retrieval: [
    { q: 'What makes a game fair?', a: 'Every player has the same chance of winning.' },
    { q: 'Are real-world probabilities usually theoretical or experimental?', a: 'Experimental.' }
  ]
},

/* ============================================================ 13 */
{
  id: 'pb-13-misconceptions',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Things that sound true and are not',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pb-07-experimental', 'pb-08-theoretical'],
  one_idea: 'A coin has no memory, and a small number of trials proves nothing.',
  sections: [
    {
      h: 'The coin has no memory',
      p: ['Five heads in a row does not make tails more likely on the sixth toss. The coin does not know what it did before. Every toss is still 1/2.'],
      example: {
        label: 'Example',
        lines: [
          'tosses so far    H  H  H  H  H',
          '',
          'P(heads next)  =  1/2',
          'P(tails next)  =  1/2',
          '',
          'Unchanged. The coin was not watching.'
        ]
      },
      rule: 'Nothing is ever "due". That belief has a name — the gambler\'s fallacy — and it has cost people a great deal of money.'
    },
    {
      h: 'Small samples wander',
      p: ['Ten tosses giving seven heads is completely ordinary. It is not evidence of anything. A thousand tosses giving seven hundred heads would be worth investigating.'],
      note: 'The question to ask is always "how many trials?" A result without a sample size is not information.'
    },
    {
      h: 'Possible is not the same as likely',
      p: ['Winning the lottery is possible. Being struck by lightning is possible. Neither is likely, and "you never know" is not a probability.'],
      list: [
        'Two outcomes does not mean fifty-fifty',
        'Unlikely does not mean impossible',
        'Likely does not mean certain',
        'Possible does not mean worth planning around'
      ]
    }
  ],
  confusable_with: [
    { label: 'After a run of heads, tails is due', why: 'The coin has no memory. The next toss is 1/2 no matter what came before.' },
    { label: 'Either it happens or it does not, so it is fifty-fifty', why: 'Two outcomes are not automatically equal. You either win the lottery or you do not, and that is nowhere near even.' },
    { label: 'A lucky number comes up more often', why: 'A fair dice treats all six faces identically. No number is luckier than another.' }
  ],
  practice: [
    { q: 'A coin lands heads 4 times in a row. What is P(heads) on the next toss?', a: '1/2', hint: null },
    { q: 'A dice has not shown a 6 in 20 rolls. Is a 6 more likely now?', a: 'No. Still 1/6.', hint: null },
    { q: 'What is the gambler\'s fallacy?', a: 'Believing a result is "due" because it has not happened recently.', hint: null },
    { q: '"Either I pass or I fail, so it is fifty-fifty." What is wrong?', a: 'Two outcomes are not automatically equally likely.', hint: null },
    { q: 'A spinner lands red 7 times in 10. Is it unfair?', a: 'Not necessarily. Ten trials is far too few to tell.', hint: null },
    { q: 'What question should you ask about any experimental result?', a: 'How many trials was it based on?', hint: null }
  ],
  retrieval: [
    { q: 'After 5 heads in a row, what is P(heads) next?', a: '1/2.' },
    { q: 'Does two possible outcomes mean fifty-fifty?', a: 'No.' }
  ]
},

/* ============================================================ 14 */
{
  id: 'pb-14-review',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Probability review',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pb-12-real-world', 'pb-13-misconceptions'],
  one_idea: 'Count the outcomes you want, count all of them, and write it as a fraction.',
  sections: [
    {
      h: 'The unit on one page',
      example: {
        label: 'Summary',
        lines: [
          'scale          0 to 1, or 0% to 100%',
          'words          impossible, unlikely, even, likely, certain',
          'sample space   the list of every outcome',
          'probability    favourable / total',
          'theoretical    reasoned in advance, needs equal outcomes',
          'experimental   counted from trials, better with more trials',
          'two events     grid of outcomes, first x second',
          'complement     P(not A) = 1 - P(A)',
          'comparing      convert to one form first'
        ]
      }
    },
    {
      h: 'The traps, in one place',
      list: [
        'Probabilities never go above 1 or below 0',
        'The bottom number is total outcomes, not number of colours',
        'Two outcomes does not mean fifty-fifty',
        'Nothing is ever due',
        'Two dice give 36 outcomes, not 12',
        'More favourable outcomes does not mean a better chance'
      ],
      rule: 'When a probability answer comes out above 1, the fraction is upside down. That is the check worth doing every time.'
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'P(rolling a number less than 3) on a dice.', a: '2/6 = 1/3', hint: null },
    { q: 'A bag has 4 red, 6 blue and 10 green. P(green)?', a: '10/20 = 1/2', hint: null },
    { q: 'P(not green) for that same bag?', a: '1/2', hint: null },
    { q: 'How many outcomes when tossing three coins?', a: '8', hint: '2 x 2 x 2.' },
    { q: 'A coin is tossed 80 times and lands tails 36 times. Experimental P(tails) as a percentage?', a: '45%', hint: null },
    { q: 'Rolling a dice 180 times, how many 3s would you expect?', a: 'About 30', hint: null },
    { q: 'Which is more likely, 2 red out of 5 or 5 red out of 12?', a: '5 out of 12 — about 41.7% against 40%.', hint: 'Convert both to percentages.' },
    { q: 'A coin has landed heads 6 times running. P(tails) next?', a: '1/2', hint: null }
  ],
  retrieval: [
    { q: 'What is the probability formula?', a: 'Favourable outcomes over total outcomes.' },
    { q: 'What do P(A) and P(not A) add to?', a: '1.' }
  ]
}

);
