/* ------------------------------------------------------------------
   BASIC AREA — a full sequential block, AU Year 7.

   Sits directly on top of Perimeter and is meant to be taught with it,
   not after a gap. The whole unit exists to make one distinction hold:
   distance around the edge versus surface covered inside. Topic 10 is
   there only to attack that confusion head on.

   Uses the `figure` field throughout. Counting squares cannot be taught
   without squares to count.

   Cross-references: pe-* for the perimeter comparison and unit work,
   fr-02-of-a-set for halving in the triangle formula.
   ------------------------------------------------------------------ */

window.TOPICS = window.TOPICS || [];

window.TOPICS.push(

/* ============================================================ 1 */
{
  id: 'ar-01-what-is',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'What is area?',
  type: 'concept',
  tier: 'taught',
  prereqs: ['pe-01-what-is'],
  one_idea: 'Area is how much surface a shape covers.',
  sections: [
    {
      h: 'The space inside',
      p: ['Perimeter was the walk around the edge. Area is everything your finger would have to colour in to fill the shape.'],
      figure: {
        caption: 'The same rectangle twice. On the left the edge is highlighted, labelled perimeter. On the right the inside is shaded, labelled area.',
        svg: '<svg viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg"><rect class="f-shape" x="25" y="45" width="120" height="70"/><path class="f-mark" d="M25 45h120v70H25z"/><text class="f-label f-mid" x="85" y="138">perimeter</text><rect class="f-shape" x="195" y="45" width="120" height="70"/><rect class="f-fill" x="195" y="45" width="120" height="70"/><text class="f-label f-mid" x="255" y="138">area</text></svg>'
      },
      rule: 'Perimeter is a line. Area is a surface. They answer different questions about the same shape.'
    },
    {
      h: 'Which one does the question want?',
      list: [
        'Carpet for a floor          ->  area',
        'Skirting board for a room   ->  perimeter',
        'Paint for a wall            ->  area',
        'Fence for a paddock         ->  perimeter',
        'Turf for an oval            ->  area'
      ],
      note: 'Covering, filling, painting, tiling, turfing — all area. Fencing, framing, edging, walking round — all perimeter.'
    },
    {
      h: 'Two shapes, same perimeter, different area',
      p: ['This is the fastest proof that they are not the same measurement. Both of these rectangles have a perimeter of 20 cm.'],
      example: {
        label: 'Example',
        lines: [
          '8 cm by 2 cm     perimeter 20 cm     area 16 squares',
          '5 cm by 5 cm     perimeter 20 cm     area 25 squares',
          '',
          'Same fence. Different amount of grass.'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'pe-01-what-is', why: 'Perimeter is the distance around the outside. Area is the surface inside. A shape has both, and they are not related in any simple way.' },
    { label: 'A bigger perimeter means a bigger area', why: 'Not necessarily. An 8 by 2 and a 5 by 5 rectangle have the same perimeter and very different areas.' }
  ],
  practice: [
    { q: 'In one sentence, what is area?', a: 'The amount of surface a shape covers.', hint: null },
    { q: 'Buying carpet for a bedroom: area or perimeter?', a: 'Area.', hint: 'Does it cover or go around?' },
    { q: 'Buying skirting board for the same bedroom: area or perimeter?', a: 'Perimeter.', hint: null },
    { q: 'Two rectangles both have a perimeter of 20 cm. Must they have the same area?', a: 'No.', hint: null },
    { q: 'Painting one wall of a room: area or perimeter?', a: 'Area.', hint: null }
  ],
  retrieval: [
    { q: 'What does area measure?', a: 'How much surface a shape covers.' },
    { q: 'Turfing an oval: area or perimeter?', a: 'Area.' }
  ]
},

/* ============================================================ 2 */
{
  id: 'ar-02-square-units',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Square units',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ar-01-what-is'],
  one_idea: 'Area is measured by how many squares fit inside, so the unit is a square too.',
  sections: [
    {
      h: 'Why the little 2',
      p: ['One square centimetre is a square measuring 1 cm on every side. Area counts how many of those fit in the shape, so the unit is written cm squared.'],
      figure: {
        caption: 'One square centimetre: a single square with 1 cm marked along the top and 1 cm up the side.',
        svg: '<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg"><rect class="f-shape" x="70" y="45" width="70" height="70"/><rect class="f-fill" x="70" y="45" width="70" height="70"/><text class="f-label f-mid" x="105" y="36">1 cm</text><text class="f-label f-end" x="62" y="88">1 cm</text><text class="f-dim f-mid" x="105" y="142">= 1 cm squared</text></svg>'
      },
      rule: 'A length unit measures a line. A squared unit measures a surface. The little 2 is not decoration.'
    },
    {
      h: 'The units you will meet',
      list: [
        'mm squared  —  a fingernail, a stamp corner',
        'cm squared  —  a page, a phone screen',
        'm squared   —  a room, a lawn',
        'km squared  —  a suburb, a national park'
      ]
    },
    {
      h: 'Writing them',
      example: {
        label: 'Example',
        lines: [
          'perimeter of a shape     24 cm       a length',
          'area of the same shape   35 cm2      a surface',
          '',
          'Two different measurements. Two different units.'
        ]
      },
      note: 'An area answer with a plain cm on it is marked wrong, and rightly — it says you measured a line.'
    }
  ],
  confusable_with: [
    { label: 'cm squared means the answer has been squared', why: 'The unit is squared, not the number. An area of 35 cm squared is thirty-five little squares, not 35 multiplied by itself.' },
    { label: 'Area and perimeter can share a unit', why: 'They cannot. One is a length and one is a surface, so cm and cm squared are not interchangeable.' }
  ],
  practice: [
    { q: 'What unit would you use for the area of a page?', a: 'cm squared.', hint: null },
    { q: 'What unit would you use for the area of a classroom floor?', a: 'm squared.', hint: null },
    { q: 'Why does area use a squared unit?', a: 'Because area counts how many squares fit inside.', hint: null },
    { q: 'A student writes "area = 40 cm". What is wrong?', a: 'The unit should be cm squared. Plain cm is a length.', hint: null },
    { q: 'How big is one square metre?', a: 'A square one metre along each side.', hint: null }
  ],
  retrieval: [
    { q: 'What unit does area use?', a: 'A squared unit, like cm squared.' },
    { q: 'Is 24 cm an area or a perimeter?', a: 'A perimeter — it is a length.' }
  ]
},

/* ============================================================ 3 */
{
  id: 'ar-03-grids',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Area by counting squares',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ar-02-square-units'],
  one_idea: 'Before any formula exists, area can always be found by counting the squares inside.',
  sections: [
    {
      h: 'Counting whole squares',
      p: ['Draw the shape on a grid where each square is one unit, then count. Slow, but it always works and it never needs remembering.'],
      figure: {
        caption: 'A grid with a rectangle covering four squares across and three squares down, shaded, making twelve squares in total.',
        svg: '<svg viewBox="0 0 260 210" xmlns="http://www.w3.org/2000/svg"><rect class="f-fill" x="30" y="30" width="120" height="90"/><g class="f-grid"><path d="M30 30h180v150H30z"/><path d="M60 30v150M90 30v150M120 30v150M150 30v150M180 30v150"/><path d="M30 60h180M30 90h180M30 120h180M30 150h180"/></g><path class="f-shape" style="fill:none" d="M30 30h120v90H30z"/><text class="f-dim f-mid" x="90" y="196">12 squares</text></svg>'
      },
      example: {
        label: 'Example',
        lines: [
          '4 squares across, 3 rows down',
          '',
          'row 1   4',
          'row 2   4',
          'row 3   4',
          '',
          'Total: 12 square units'
        ]
      }
    },
    {
      h: 'Part squares',
      p: ['Shapes with slanted edges cut squares in half. Count the whole squares first, then deal with the part ones.'],
      list: [
        'Two halves make one whole square',
        'A square more than half covered counts as one',
        'A square less than half covered counts as none'
      ],
      rule: 'Whole squares first, part squares second. Mixing them up is where the count goes wrong.',
      note: 'For a slanted shape this gives an estimate, not an exact answer. That is expected and it is still useful.'
    }
  ],
  confusable_with: [
    { label: 'Counting the squares around the edge gives the area', why: 'That gives something closer to the perimeter. Area counts every square inside, not just the border ones.' }
  ],
  practice: [
    { q: 'A rectangle on a grid is 5 squares across and 4 down. Area?', a: '20 square units', hint: null },
    { q: 'A shape covers 14 whole squares and 6 half squares. Area?', a: '17 square units', hint: 'Six halves make three.' },
    { q: 'A shape covers 9 whole squares and 2 halves. Area?', a: '10 square units', hint: null },
    { q: 'How do you handle a square that is only a quarter covered?', a: 'Count it as none — it is less than half.', hint: null },
    { q: 'Why is counting squares an estimate for a slanted shape?', a: 'The part squares have to be judged rather than measured exactly.', hint: null },
    { q: 'A grid rectangle is 6 across and 6 down. Area?', a: '36 square units', hint: null }
  ],
  retrieval: [
    { q: 'A grid rectangle is 3 across and 7 down. Area?', a: '21 square units' },
    { q: 'How many half squares make one whole square?', a: 'Two.' }
  ]
},

/* ============================================================ 4 */
{
  id: 'ar-04-rectangles',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Area of a rectangle',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ar-03-grids'],
  one_idea: 'Length times width, because that is a shortcut for counting the rows.',
  sections: [
    {
      h: 'Where the formula comes from',
      p: ['Counting the squares one at a time works, but every row holds the same number. Multiplying is just faster counting.'],
      example: {
        label: 'Example',
        lines: [
          '4 squares in each row',
          '3 rows',
          '',
          '4 + 4 + 4   =  12',
          '4 x 3       =  12',
          '',
          'The formula is the counting, written shorter.'
        ]
      },
      rule: 'Rectangle:  A = length x width.  Square:  A = side x side.'
    },
    {
      h: 'Using it',
      figure: {
        caption: 'A rectangle labelled 7 cm along the top and 4 cm up the side, with its inside shaded.',
        svg: '<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg"><rect class="f-shape" x="60" y="45" width="175" height="80"/><rect class="f-fill" x="60" y="45" width="175" height="80"/><text class="f-label f-mid" x="147" y="36">7 cm</text><text class="f-label f-end" x="52" y="90">4 cm</text><text class="f-dim f-mid" x="147" y="150">area = 28 cm2</text></svg>'
      },
      example: {
        label: 'Example',
        lines: [
          'Rectangle 7 cm by 4 cm',
          '',
          '7 x 4  =  28',
          '',
          'Area = 28 cm2'
        ]
      },
      note: 'The two numbers must be in the same unit before you multiply. 7 m by 40 cm is not 280 of anything.'
    },
    {
      h: 'A square is just an easy rectangle',
      example: {
        label: 'Example',
        lines: [
          'Square with side 6 m',
          '',
          '6 x 6  =  36',
          '',
          'Area = 36 m2'
        ]
      }
    }
  ],
  confusable_with: [
    { id: 'pe-04-formulas', why: 'Perimeter adds the sides; area multiplies them. A 7 by 4 rectangle has perimeter 22 cm and area 28 cm squared.' },
    { label: 'Area = 2 x (l + w)', why: 'That is the perimeter formula. Area is l x w with no doubling and no adding.' }
  ],
  practice: [
    { q: 'Rectangle 9 cm by 3 cm. Area?', a: '27 cm2', hint: null },
    { q: 'Square with side 8 m. Area?', a: '64 m2', hint: null },
    { q: 'Rectangle 12 m by 5 m. Area?', a: '60 m2', hint: null },
    { q: 'A 6 cm by 4 cm rectangle: give both its perimeter and its area.', a: 'Perimeter 20 cm, area 24 cm2.', hint: 'Add for one, multiply for the other.' },
    { q: 'Rectangle 2.5 m by 4 m. Area?', a: '10 m2', hint: null },
    { q: 'A student says a 10 cm by 3 cm rectangle has an area of 26 cm2. What went wrong?', a: 'They added instead of multiplying. The area is 30 cm2 and 26 cm is the perimeter.', hint: null }
  ],
  retrieval: [
    { q: 'Area of a rectangle 5 cm by 6 cm?', a: '30 cm2' },
    { q: 'What is the area formula for a square?', a: 'Side x side.' }
  ]
},

/* ============================================================ 5 */
{
  id: 'ar-05-missing-dimensions',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Finding a missing dimension',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ar-04-rectangles'],
  one_idea: 'If area is length times width, then a missing side is area divided by the side you have.',
  sections: [
    {
      h: 'Undoing the multiplication',
      p: ['Multiplication is undone by division. Nothing new is needed here, only the formula run backwards.'],
      example: {
        label: 'Example',
        lines: [
          'A rectangle has area 45 cm2 and a length of 9 cm.',
          '',
          '9  x  width  =  45',
          'width  =  45 / 9  =  5',
          '',
          'Answer: 5 cm'
        ]
      },
      rule: 'Missing side = area / known side.'
    },
    {
      h: 'Squares',
      p: ['A square has both sides the same, so the question becomes: what number times itself gives this area?'],
      example: {
        label: 'Example',
        lines: [
          'A square has area 49 m2.',
          '',
          '?  x  ?  =  49',
          '7  x  7  =  49',
          '',
          'Answer: side = 7 m'
        ]
      },
      note: 'Check by multiplying back. If side x side does not return the area, the number was wrong.'
    }
  ],
  confusable_with: [
    { label: 'Divide the area by 2 to get the missing side', why: 'That is halving, and it is the perimeter habit leaking in. Area divides by the known side.' },
    { id: 'pe-05-missing-sides', why: 'Missing side from a perimeter means subtracting. Missing side from an area means dividing.' }
  ],
  practice: [
    { q: 'A rectangle has area 36 cm2 and a width of 4 cm. Find the length.', a: '9 cm', hint: null },
    { q: 'A rectangle has area 60 m2 and a length of 12 m. Find the width.', a: '5 m', hint: null },
    { q: 'A square has area 25 cm2. Find its side.', a: '5 cm', hint: 'What times itself is 25?' },
    { q: 'A square has area 100 m2. Find its side.', a: '10 m', hint: null },
    { q: 'A rectangle has area 48 cm2 and a side of 6 cm. Find the other side, then find the perimeter.', a: 'Other side 8 cm; perimeter 28 cm.', hint: 'Two steps.' },
    { q: 'A rectangle has area 7.5 m2 and a width of 3 m. Find the length.', a: '2.5 m', hint: null }
  ],
  retrieval: [
    { q: 'Area 24 cm2, width 4 cm. Find the length.', a: '6 cm' },
    { q: 'How do you find a missing side from an area?', a: 'Divide the area by the side you know.' }
  ]
},

/* ============================================================ 6 */
{
  id: 'ar-06-triangles',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Area of a triangle',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ar-04-rectangles', 'fr-02-of-a-set'],
  one_idea: 'A triangle is half of a rectangle, so its area is half of base times height.',
  sections: [
    {
      h: 'Seeing the rectangle',
      p: ['Draw a rectangle around a triangle so the triangle sits on the bottom and reaches the top. The triangle takes exactly half the rectangle every time.'],
      figure: {
        caption: 'A triangle inside a dashed rectangle. The triangle sits on the base and its point touches the top edge, filling half the rectangle.',
        svg: '<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg"><path class="f-dash" d="M60 40h180v100H60z"/><path class="f-shape" d="M60 140h180L150 40z"/><path class="f-fill" d="M60 140h180L150 40z"/><path class="f-dash" d="M150 40v100"/><text class="f-label f-mid" x="150" y="162">base 9 cm</text><text class="f-label f-end" x="144" y="95">height 5 cm</text></svg>'
      },
      example: {
        label: 'Example',
        lines: [
          'Triangle with base 9 cm and height 5 cm',
          '',
          'the rectangle around it   9 x 5  =  45',
          'the triangle is half      45 / 2 =  22.5',
          '',
          'Area = 22.5 cm2'
        ]
      },
      rule: 'Triangle:  A = (base x height) / 2.'
    },
    {
      h: 'Height means straight up',
      p: ['The height is the straight-up distance from the base to the point opposite. On a leaning triangle that is not the same as the slanted side.'],
      note: 'If the triangle leans, the height is often drawn as a dashed line inside it. Use the dashed line, not the slanted edge.'
    },
    {
      h: 'Halve at the end',
      p: ['Multiply the base and height first, then halve. Halving first also works but gives more chances to slip.'],
      example: {
        label: 'Example',
        lines: [
          'base 7 m, height 6 m',
          '',
          '7 x 6  =  42',
          '42 / 2 =  21',
          '',
          'Area = 21 m2'
        ]
      }
    }
  ],
  confusable_with: [
    { label: 'The height is the longest side', why: 'The height is the straight-up distance from base to point. On a leaning triangle it is shorter than the slanted side and is usually drawn dashed.' },
    { label: 'Forget the halving and use base x height', why: 'That gives the whole rectangle. A triangle is half of it, every time.' }
  ],
  practice: [
    { q: 'Triangle with base 8 cm and height 5 cm. Area?', a: '20 cm2', hint: '40, then halve.' },
    { q: 'Triangle with base 10 m and height 6 m. Area?', a: '30 m2', hint: null },
    { q: 'Triangle with base 7 cm and height 4 cm. Area?', a: '14 cm2', hint: null },
    { q: 'Triangle with base 5 cm and height 3 cm. Area?', a: '7.5 cm2', hint: 'It does not have to be a whole number.' },
    { q: 'Why is a triangle half a rectangle?', a: 'A rectangle drawn around it is cut exactly in two by the triangle.', hint: null },
    { q: 'A triangle has area 24 cm2 and a base of 8 cm. Find its height.', a: '6 cm', hint: 'Double the area first, then divide by the base.' }
  ],
  retrieval: [
    { q: 'What is the area formula for a triangle?', a: '(base x height) / 2.' },
    { q: 'Triangle with base 6 cm and height 4 cm. Area?', a: '12 cm2' }
  ]
},

/* ============================================================ 7 */
{
  id: 'ar-07-compound',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Compound shapes',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ar-06-triangles', 'pe-07-compound'],
  one_idea: 'Cut the shape into rectangles and triangles, find each area, then add them.',
  sections: [
    {
      h: 'Splitting the shape',
      p: ['Draw one line to break the shape into pieces you already know how to handle. Where you draw it does not matter, as long as every piece is a rectangle or a triangle.'],
      figure: {
        caption: 'An L-shaped figure split by a dashed line into two rectangles, labelled A and B.',
        svg: '<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg"><path class="f-shape" d="M40 30h200v80h-80v80H40z"/><path class="f-fill" d="M40 30h200v80h-80v80H40z"/><path class="f-dash" d="M40 110h120"/><g class="f-dim f-mid"><text x="140" y="80">A</text><text x="100" y="165">B</text></g><g class="f-label"><text class="f-mid" x="140" y="22">10 cm</text><text x="248" y="78">4 cm</text><text class="f-mid" x="100" y="205">6 cm</text><text class="f-end" x="32" y="115">8 cm</text></g></svg>'
      },
      example: {
        label: 'Example',
        lines: [
          'A   10 x 4   =  40',
          'B   6 x 4    =  24',
          '',
          'Total area  =  64 cm2'
        ]
      },
      rule: 'Split, find each piece, add. Label the pieces so you know which numbers belong to which.'
    },
    {
      h: 'Rectangles and triangles together',
      p: ['A house-shaped figure is a rectangle with a triangle on top. Same method — two areas, then add.'],
      example: {
        label: 'Example',
        lines: [
          'rectangle   8 x 5          =  40',
          'triangle    (8 x 3) / 2    =  12',
          '',
          'Total area  =  52 m2'
        ]
      },
      note: 'Work out the pieces separately and write each one down before adding. Doing it all in one line is where the numbers get crossed.'
    }
  ],
  confusable_with: [
    { id: 'pe-07-compound', why: 'Perimeter of a compound shape ignores the internal line. Area of one relies on drawing that internal line. Opposite instincts, same figure.' },
    { label: 'Add the two lengths and the two widths, then multiply', why: 'A compound shape is not a rectangle, so there is nothing to multiply. It has to be split first.' }
  ],
  practice: [
    { q: 'A shape splits into a 6 cm by 4 cm rectangle and a 3 cm by 4 cm rectangle. Total area?', a: '36 cm2', hint: '24 + 12.' },
    { q: 'A shape splits into a 10 m by 5 m rectangle and a triangle with base 10 m and height 4 m. Total area?', a: '70 m2', hint: '50 + 20.' },
    { q: 'Why must a compound shape be split before finding its area?', a: 'There is no single formula for it, but there is one for each of its pieces.', hint: null },
    { q: 'An L-shape splits into a 12 cm by 3 cm rectangle and a 5 cm by 3 cm rectangle. Total area?', a: '51 cm2', hint: null },
    { q: 'A house shape is a 6 m by 4 m rectangle with a triangle on top, base 6 m and height 2 m. Total area?', a: '30 m2', hint: null },
    { q: 'Does it matter where you draw the splitting line?', a: 'No, as long as every piece is a shape you have a formula for.', hint: null }
  ],
  retrieval: [
    { q: 'What is the method for a compound area?', a: 'Split into rectangles and triangles, find each, add.' },
    { q: 'Areas of 20 cm2 and 15 cm2 joined. Total?', a: '35 cm2' }
  ]
},

/* ============================================================ 8 */
{
  id: 'ar-08-missing-areas',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Areas with a piece taken out',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ar-07-compound'],
  one_idea: 'Find the whole shape, find the hole, subtract.',
  sections: [
    {
      h: 'The other way to handle a compound shape',
      p: ['Instead of splitting a shape into pieces and adding, you can imagine the whole rectangle it came from and take away what is missing. Some shapes are much easier this way.'],
      figure: {
        caption: 'A large rectangle with a smaller rectangle cut out of one corner, the cut-out shown dashed.',
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><rect class="f-shape" x="40" y="35" width="220" height="120"/><rect class="f-fill" x="40" y="35" width="220" height="120"/><rect class="f-dash" x="180" y="35" width="80" height="60" style="fill:var(--bg)"/><g class="f-label"><text class="f-mid" x="150" y="27">11 cm</text><text x="270" y="100">6 cm</text><text class="f-mid" x="220" y="62">cut out</text><text class="f-mid" x="220" y="80">4 by 3</text></g></svg>'
      },
      example: {
        label: 'Example',
        lines: [
          'whole rectangle    11 x 6   =  66',
          'the cut-out        4 x 3    =  12',
          '',
          '66 - 12  =  54',
          '',
          'Area = 54 cm2'
        ]
      },
      rule: 'Whole minus hole. Works whenever the missing piece is a shape you can measure.'
    },
    {
      h: 'Which method to use',
      list: [
        'Splitting and adding  —  when the shape is made of obvious blocks',
        'Whole minus hole      —  when a chunk is missing from a neat rectangle',
        'Both give the same answer, so use whichever needs fewer steps'
      ],
      note: 'A path around a garden, a border around a photo and a window in a wall are all whole-minus-hole questions.'
    }
  ],
  confusable_with: [
    { label: 'Subtract the side lengths instead of the areas', why: 'Areas are subtracted from areas. Taking 4 from 11 first and multiplying afterwards gives a different, wrong answer.' }
  ],
  practice: [
    { q: 'A 10 cm by 8 cm rectangle has a 3 cm by 2 cm rectangle cut out. Area left?', a: '74 cm2', hint: '80 - 6.' },
    { q: 'A 12 m by 9 m yard has a 4 m by 3 m shed on it. How much yard is left?', a: '96 m2', hint: null },
    { q: 'A 20 cm by 15 cm photo has a 16 cm by 11 cm picture in the middle. What is the area of the border?', a: '124 cm2', hint: '300 - 176.' },
    { q: 'A 6 m by 6 m room has a 2 m by 2 m rug. How much floor is uncovered?', a: '32 m2', hint: null },
    { q: 'Why can you not just subtract the side lengths?', a: 'Areas subtract from areas. The sides are lengths and do not combine that way.', hint: null }
  ],
  retrieval: [
    { q: 'A 10 cm by 5 cm rectangle with a 2 cm by 2 cm hole. Area left?', a: '46 cm2' },
    { q: 'What is the whole-minus-hole method?', a: 'Find the full area, find the missing piece, subtract.' }
  ]
},

/* ============================================================ 9 */
{
  id: 'ar-09-unit-conversion',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Converting square units',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ar-04-rectangles', 'pe-02-measuring'],
  one_idea: 'Squared units convert by the square of the number, so 1 m squared is 10 000 cm squared, not 100.',
  sections: [
    {
      h: 'Why it is not 100',
      p: ['A square metre is a square one metre on every side. That is 100 cm across and 100 cm down, so it holds 100 rows of 100 little squares.'],
      figure: {
        caption: 'One square metre drawn as a grid, 100 cm across and 100 cm down, holding ten thousand square centimetres.',
        svg: '<svg viewBox="0 0 270 200" xmlns="http://www.w3.org/2000/svg"><rect class="f-shape" x="75" y="35" width="150" height="120"/><g class="f-grid"><path d="M105 35v120M135 35v120M165 35v120M195 35v120"/><path d="M75 65h150M75 95h150M75 125h150"/></g><text class="f-label f-mid" x="150" y="27">100 cm</text><text class="f-label f-end" x="67" y="100">100 cm</text><text class="f-dim f-mid" x="145" y="178">100 x 100 = 10 000 cm2</text></svg>'
      },
      example: {
        label: 'Example',
        lines: [
          'length     1 m   =  100 cm',
          'area       1 m2  =  100 x 100  =  10 000 cm2',
          '',
          'The length step is 100. The area step is 100 squared.'
        ]
      },
      rule: 'Whatever the length conversion is, square it for the area conversion.'
    },
    {
      h: 'The ones you need',
      example: {
        label: 'Learn these',
        lines: [
          '1 cm2   =  100 mm2          (10 squared)',
          '1 m2    =  10 000 cm2       (100 squared)',
          '1 km2   =  1 000 000 m2     (1000 squared)'
        ]
      },
      note: 'Converting the sides first and then finding the area avoids all of this. 2 m by 50 cm becomes 200 cm by 50 cm, and the answer comes out in cm squared with no conversion at the end.'
    }
  ],
  confusable_with: [
    { label: '1 m2 = 100 cm2', why: 'That is the length conversion used by mistake. A square metre holds 10 000 square centimetres.' },
    { id: 'pe-02-measuring', why: 'Lengths convert by 10, 100 or 1000. Areas convert by those numbers squared. Same units, different step.' }
  ],
  practice: [
    { q: 'How many cm squared in 1 m squared?', a: '10 000', hint: '100 x 100.' },
    { q: 'How many mm squared in 1 cm squared?', a: '100', hint: '10 x 10.' },
    { q: 'Convert 3 m squared to cm squared.', a: '30 000 cm2', hint: null },
    { q: 'A rectangle is 2 m by 50 cm. Find its area in cm squared.', a: '10 000 cm2', hint: 'Convert the 2 m to 200 cm first.' },
    { q: 'Convert 50 000 cm squared to m squared.', a: '5 m2', hint: 'Divide by 10 000.' },
    { q: 'Why is the area conversion bigger than the length conversion?', a: 'The conversion happens in two directions at once, so it is squared.', hint: null }
  ],
  retrieval: [
    { q: 'How many cm squared in a square metre?', a: '10 000.' },
    { q: 'What do you do to a length conversion to get the area one?', a: 'Square it.' }
  ]
},

/* ============================================================ 10 */
{
  id: 'ar-10-vs-perimeter',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Perimeter against area',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ar-04-rectangles', 'pe-04-formulas'],
  one_idea: 'Two shapes can share a perimeter and not an area, or share an area and not a perimeter.',
  sections: [
    {
      h: 'Same perimeter, different area',
      p: ['All of these rectangles have a perimeter of 24 cm. Their areas are nothing like each other.'],
      example: {
        label: 'Example',
        lines: [
          '11 x 1     perimeter 24 cm     area 11 cm2',
          '9 x 3      perimeter 24 cm     area 27 cm2',
          '6 x 6      perimeter 24 cm     area 36 cm2',
          '',
          'Same fence, very different amounts of grass.'
        ]
      },
      rule: 'For a fixed perimeter, the closer the shape is to a square, the bigger its area.'
    },
    {
      h: 'Same area, different perimeter',
      example: {
        label: 'Example',
        lines: [
          '1 x 36     area 36 cm2     perimeter 74 cm',
          '4 x 9      area 36 cm2     perimeter 26 cm',
          '6 x 6      area 36 cm2     perimeter 24 cm',
          '',
          'Same grass, very different amounts of fence.'
        ]
      },
      note: 'Long thin shapes need far more edge for the same amount of surface. This is why paddocks are not built one metre wide.'
    },
    {
      h: 'Telling the question apart',
      list: [
        'Around the edge   ->  perimeter  ->  add  ->  cm',
        'Across the inside ->  area       ->  multiply  ->  cm2'
      ],
      rule: 'Decide which one the question wants before writing a single number down.'
    }
  ],
  confusable_with: [
    { label: 'If the perimeter goes up the area goes up', why: 'A 1 by 36 rectangle has a far bigger perimeter than a 6 by 6, and exactly the same area.' },
    { label: 'Two shapes with the same area are the same shape', why: 'A 4 by 9 and a 6 by 6 both cover 36 squares and look nothing alike.' }
  ],
  practice: [
    { q: 'Give two different rectangles with a perimeter of 20 cm.', a: 'Any two of: 9x1, 8x2, 7x3, 6x4, 5x5.', hint: 'The two sides must add to 10.' },
    { q: 'Which rectangle with perimeter 20 cm has the biggest area?', a: '5 x 5, with 25 cm2.', hint: 'The closest to a square.' },
    { q: 'Give two different rectangles with an area of 24 cm2.', a: 'Any two of: 24x1, 12x2, 8x3, 6x4.', hint: null },
    { q: 'Of the rectangles with area 24 cm2, which has the smallest perimeter?', a: '6 x 4, with 20 cm.', hint: null },
    { q: 'A 2 cm by 8 cm and a 4 cm by 4 cm rectangle. Compare their perimeters and areas.', a: 'Perimeters 20 cm and 16 cm; areas both 16 cm2.', hint: null },
    { q: 'Why do farmers prefer square paddocks?', a: 'Less fencing is needed for the same amount of land.', hint: null }
  ],
  retrieval: [
    { q: 'Can two shapes have the same area and different perimeters?', a: 'Yes.' },
    { q: 'For a fixed perimeter, which rectangle has the largest area?', a: 'The one closest to a square.' }
  ]
},

/* ============================================================ 11 */
{
  id: 'ar-11-real-world',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Area in real situations',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ar-08-missing-areas', 'ar-09-unit-conversion'],
  one_idea: 'Area answers "how much do I need to cover it?" — and the cost follows from there.',
  sections: [
    {
      h: 'Where it shows up',
      list: [
        'Carpet or tiles for a floor',
        'Paint for a wall',
        'Turf for a lawn',
        'Fabric for a curtain',
        'Land for a block',
        'Fertiliser spread over a garden'
      ]
    },
    {
      h: 'Working out a cost',
      example: {
        label: 'Example',
        lines: [
          'A room 5 m by 4 m. Carpet costs $45 per square metre.',
          '',
          'area    5 x 4    =  20 m2',
          'cost    20 x 45  =  900',
          '',
          'Answer: $900'
        ]
      },
      rule: 'Area first, cost second. Two separate steps, each written down.'
    },
    {
      h: 'Coverage questions',
      p: ['Materials are often sold by how much they cover. Divide the area by the coverage to find how many you need.'],
      example: {
        label: 'Example',
        lines: [
          'A wall of 24 m2. One tin of paint covers 9 m2.',
          '',
          '24 / 9  =  2.67',
          '',
          'Answer: 3 tins  —  round up, because two thirds of a tin cannot be bought'
        ]
      },
      note: 'Coverage answers round up, always. Rounding down leaves part of the wall bare.'
    }
  ],
  confusable_with: [
    { label: 'Round coverage answers the normal way', why: 'Needing 2.1 tins means buying 3. Anything left over is waste; anything short is a job unfinished.' },
    { id: 'pe-09-real-world', why: 'Fencing and skirting go around the edge. Carpet and paint cover the surface. Read what the material actually does.' }
  ],
  practice: [
    { q: 'A room is 6 m by 4 m. Tiles cost $30 per square metre. Total cost?', a: '$720', hint: '24 m2.' },
    { q: 'A lawn is 12 m by 8 m. Turf costs $9 per square metre. Total cost?', a: '$864', hint: null },
    { q: 'A wall is 15 m2. One tin covers 6 m2. How many tins?', a: '3', hint: '2.5, rounded up.' },
    { q: 'A floor is 20 m2. Boxes of tiles cover 3 m2 each. How many boxes?', a: '7', hint: '6.67, rounded up.' },
    { q: 'A 5 m by 4 m room has a 2 m by 1 m cupboard in one corner. How much carpet is needed?', a: '18 m2', hint: 'Whole minus hole.' },
    { q: 'Why do coverage answers always round up?', a: 'Part of a tin or box cannot be bought, and rounding down leaves the job unfinished.', hint: null }
  ],
  retrieval: [
    { q: 'A room 3 m by 5 m, carpet at $20 per m2. Cost?', a: '$300' },
    { q: 'You need 4.2 tins of paint. How many do you buy?', a: '5.' }
  ]
},

/* ============================================================ 12 */
{
  id: 'ar-12-estimation',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Estimating and checking',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ar-03-grids', 'ar-04-rectangles'],
  one_idea: 'Round the sides to easy numbers, multiply those, and see whether the exact answer lands nearby.',
  sections: [
    {
      h: 'Rough first',
      example: {
        label: 'Example',
        lines: [
          'A rectangle 8.9 m by 4.2 m',
          '',
          'about 9 x about 4   =  36 m2      the estimate',
          '',
          'Exact:  8.9 x 4.2   =  37.38 m2',
          '',
          'Close, so it is believable.'
        ]
      }
    },
    {
      h: 'Sense checks that catch real mistakes',
      list: [
        'The unit must be squared. If it is not, area was not what you found',
        'The area must be bigger than either single side length, for shapes bigger than 1 unit across',
        'A triangle must come out smaller than the rectangle around it',
        'An area with a piece cut out must be smaller than the whole'
      ],
      rule: 'If the triangle came out bigger than its rectangle, the halving was missed.'
    },
    {
      h: 'Estimating awkward shapes',
      p: ['A shape with curved or slanted edges can be estimated by putting it on a grid and counting, or by comparing it to a rectangle it nearly fills.'],
      note: 'An estimate is a real answer for a real question. A lake has no formula, and "about 40 square kilometres" is genuinely useful.'
    }
  ],
  confusable_with: [
    { label: 'An estimate close to the answer proves it is right', why: 'It proves the answer is not badly wrong. A decimal-point slip can still get past it.' }
  ],
  practice: [
    { q: 'Estimate the area of a 9.8 m by 5.1 m rectangle.', a: 'About 50 m2.', hint: null },
    { q: 'A student says a triangle with base 8 and height 6 has area 48 cm2. What went wrong?', a: 'They forgot to halve. It is 24 cm2.', hint: null },
    { q: 'A student gives the area of a room as 18 m. What is wrong?', a: 'The unit. Area is in m squared.', hint: null },
    { q: 'Estimate the area of a 19.6 cm by 4.9 cm rectangle.', a: 'About 100 cm2.', hint: null },
    { q: 'A shape on a grid covers about 23 whole squares and 8 halves. Estimate its area.', a: 'About 27 square units.', hint: null },
    { q: 'Why can a triangle never have a bigger area than the rectangle drawn around it?', a: 'It only fills half of it.', hint: null }
  ],
  retrieval: [
    { q: 'Estimate the area of a 4.9 m by 6.1 m room.', a: 'About 30 m2.' },
    { q: 'What must an area answer always carry?', a: 'A squared unit.' }
  ]
},

/* ============================================================ 13 */
{
  id: 'ar-13-review',
  subject: 'maths',
  levels: ['AU-7'],
  title: 'Area review',
  type: 'concept',
  tier: 'taught',
  prereqs: ['ar-11-real-world', 'ar-12-estimation'],
  one_idea: 'Area is squares covered. Every formula in the unit is a faster way to count them.',
  sections: [
    {
      h: 'The unit on one page',
      example: {
        label: 'Summary',
        lines: [
          'meaning        surface covered',
          'units          mm2, cm2, m2, km2  —  always squared',
          'counting       squares inside; two halves make one',
          'rectangle      l x w',
          'square         side x side',
          'triangle       (base x height) / 2',
          'compound       split into pieces, add',
          'piece missing  whole minus hole',
          'converting     square the length conversion'
        ]
      }
    },
    {
      h: 'The traps, in one place',
      list: [
        'Area multiplies, perimeter adds',
        'A triangle needs the halving',
        '1 m2 is 10 000 cm2, not 100',
        'Areas subtract from areas, never side lengths from side lengths',
        'Coverage answers round up',
        'The unit is squared or it is not an area'
      ],
      rule: 'When an area answer looks wrong, check the unit first. It usually names the mistake for you.'
    }
  ],
  confusable_with: [],
  practice: [
    { q: 'Rectangle 14 cm by 6 cm. Area?', a: '84 cm2', hint: null },
    { q: 'Triangle with base 12 m and height 5 m. Area?', a: '30 m2', hint: null },
    { q: 'A square has area 81 cm2. Find its side, then its perimeter.', a: 'Side 9 cm, perimeter 36 cm.', hint: null },
    { q: 'A rectangle has area 72 m2 and a width of 8 m. Find its length.', a: '9 m', hint: null },
    { q: 'An L-shape splits into a 9 cm by 4 cm rectangle and a 5 cm by 4 cm rectangle. Area?', a: '56 cm2', hint: null },
    { q: 'A 10 m by 7 m yard has a 3 m by 2 m shed. How much yard is left?', a: '64 m2', hint: null },
    { q: 'Convert 2 m squared to cm squared.', a: '20 000 cm2', hint: null },
    { q: 'A 6 m by 5 m room needs carpet at $35 per square metre. Cost?', a: '$1050', hint: null }
  ],
  retrieval: [
    { q: 'What is the area formula for a triangle?', a: '(base x height) / 2.' },
    { q: 'Does area add or multiply?', a: 'Multiply.' }
  ]
}

);
