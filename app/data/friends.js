
    
// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var surveyArray = [
    {
        "name":"Fat Murph",
        "photo":"https://upload.wikimedia.org/wikipedia/commons/b/bf/1905_cartoon_of_Charlie_Murphy_as_a_prisoner.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
    {
        "name":"Thaddaeus Peithner ",
        "photo":"https://upload.wikimedia.org/wikipedia/commons/7/76/Thaddaeus_Peithner_von_Lichtenfels_1870.jpg",
        "scores":[
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ]
      },
    {
        "name":"Cosplay Cat",
        "photo":"https://upload.wikimedia.org/wikipedia/commons/7/7a/Celtic_tiger_cartoon.png",
        "scores":[
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ]
      },
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = surveyArray;
  