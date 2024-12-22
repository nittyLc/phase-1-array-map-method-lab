// const tutorials = [
//   'what does the this keyword mean?',
//   'What is the Constructor OO pattern?',
//   'implementing Blockchain Web API',
//   'The Test Driven Development Workflow',
//   'What is NaN and how Can we Check for it',
//   'What is the difference between stopPropagation and preventDefault?',
//   'Immutable State and Pure Functions',
//   'what is the difference between == and ===?',
//   'what is the difference between event capturing and bubbling?',
//   'what is JSONP?'
// ];

// const titleCased = () => {
//   return tutorials
// }
// const tutorials = [
//   "what does the this keyword mean?",
//   "What is the Constructor OO pattern?",
//   "implementing Blockchain Web API",
//   "The Test Driven Development Workflow",
//   "What is NaN and how Can we Check for it",
//   "What is the difference between stopPropagation and preventDefault?",
//   "Immutable State and Pure Functions",
//   "what is the difference between == and ===?",
//   "what is the difference between event capturing and bubbling?",
//   "what is JSONP?",
// ];

// function titleCased(str) {
//   if (typeof str !== 'string') return ''; // Ensure the input is a string

//   return str
//     .split(' ')
//     .map((word, index) => {
//       if (index === 0 || word.length > 3) {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//       }
//       return word.toLowerCase();
//     })
//     .join(' ');
// }

// const titleCasedTutorials = tutorials.map(titleCased); // Applying titleCased to each element in the array

// console.log(titleCasedTutorials);


const tutorials = [
  "What Does The This Keyword Mean?",
  "What Is The Constructor OO Pattern?",
  "Implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What Is NaN And How Can We Check For It",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  "Immutable State And Pure Functions",
  "What Is The Difference Between == And ===?",
  "What Is The Difference Between Event Capturing And Bubbling?",
  "What Is JSONP?"
];

function titleCased() {
  return tutorials.map(str =>
    str
      .split(' ')
      .map(word => {
        // Handle specific exceptions
        if (["NaN", "JSONP?", "StopPropagation", "PreventDefault?", "OO", "API"].includes(word)) {
          return word; // Retain the word as-is
        }
        // Title-case all other words
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ')
  );
}

module.exports = titleCased;


module.exports = titleCased;
// Ensure the function is exported for the test

