/* ------------------------------------------------------------------
   LEARNERS — generated file. Do not hand-edit.

   Edit private/learners.source.js instead, then regenerate this with
   tools/encrypt.html. The plaintext source is gitignored.

   Each entry holds:
     name    the child's name, in the clear because the login dropdown
             has to render it
     verify  a slow-derived check value for the password
     data    levels, subjects, homework and unit list, encrypted with
             that password

   So this file discloses who is taught. It does not disclose what any
   named child is working on, which is the part that matters. Anyone
   reading it sees five names and two opaque strings each.

   The encryption is defence in depth against one learner reading
   another's record over their shoulder. It is not a substitute for
   keeping private/learners.source.js out of the repository, which is
   the protection that actually matters.
   ------------------------------------------------------------------ */

window.LEARNERS = {

  elliot: {
    name: 'Elliot',
    verify: '7bf7c9bc1ef763abd5c68fe07f6fb28ca2cbc5dc702d0d9497e41c1900cb7409',
    data: 'FAHjYI+DtA1SKclO9qSR8bc0bDoMEfYFbl4/0t2zDbW4UeJdegAJ92moyh34+TfuhIOiXSBQJvHONaD5GChm762tONeWGRUT4UsC//RZi9j5VPQW90Cewh9KVJR9t9G9OpJ8iqbpN8OIA+4abPQVqhwhTB1/bvHhT5RSwAZk26AazruyL7PTR9374DZoKv59E6CnIgxl3Yez6Gm4WTjjpg=='
  },

  honitalo: {
    name: 'Honitalo',
    verify: 'c7689499d746e3a56ef374fa1f8109fe606f09e06b4b8ed8e186b9d0db516874',
    data: 'v39DNMXPdv1D4o5EWinfVFJY+h9/UhEI7luRKIfRJs88K8uk6qva27mJhQIPzJ/Cd4MVBBSW6BDoHbre6WKkCDwjGsC53OhmLaSr9m9DcCVL4TAwQ2yM1rYhJmrtNc4P1/fDTPQ7gvGAZKNhTlT0GMDfXnqgOdrQZ9PH9ituBzjV5JNMsBdWQ/w='
  },

  letisha: {
    name: 'Letisha',
    verify: '893cb56eb6d049ef6253c83281a961af3115d9cf78238df82c3f807332f68230',
    data: 'WP/jIUBWHYX7AKsqXNz7asq72AKBTWKMI+VX1GahlGBiZISdT+biUIPRJ7U8BHv+HEDP0UFixAbnAjqQQ1xFTLaa8Ffcf2oUFkOE0Ktbcrm6LoFFg9xB36o9FN2hgNkfz77/Fwkpe6stm36fzm+C3RqWqgkEdrkn8o1HAqStWPexFgQwx91uslsur6U3'
  },

  jordesh: {
    name: 'Jordesh',
    verify: 'b16705a59a63b8210c1ab2719eb2300bf006228a6694d33e60625e79e02a6981',
    data: 'poYjlzC3AhvyoWyRU2/HamlF2e0nmHXAr0CW8dMyFQKwKHrjzUcFGv+UjR2XMpuPREH4icA3eU7eiTywEu6bFUQ1Q6gwYg9yhhqnUIpW9yp3ddNmvYTsCWWJIyJc2d1FLSEyOn0NYhBWpVtDPlEr2MO55zCByQnzvr9MLw=='
  },

  yvonne: {
    name: 'Yvonne',
    verify: '92bf39a31a7e43c6f7efccf0c32247cabec2fc867cc2553d5e07a8b5171c488b',
    data: 'dz/IjONmFzP0vm1W0X3xen9LTgG9KxjCd6b73WW8lP/F650kckSuUQLkr82FKlRQrsJ9DJIFGi9I9Q05dMYOeSpthvGBn08o+yFUDQoZrYkDsTjA1k5E9rdrbYCjd9Vp+Sz1rn2LcMn4CQbOtP2QvohgZnaCbwijDCafEzPr4L0='
  }

};
