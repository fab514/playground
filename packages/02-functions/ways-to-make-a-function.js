/* eslint-disable */
/* function doctorize(firstName) {
  return `Dr. ${firstName}`;
} 
*/
// Anon Function
/* function (firstName) {
    return `Dr. ${firstName}`;
  }  */
// Function Expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// Arrow Functions
// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
}
// Making a function shorter
// const inchToCM = (inches) => {
//     return inches * 2.54;

//   }
// get rid of function block (One line, on left side of fat arrow shows function on right side shows return)

// const inchToCM = inches => inches * 2.54;

// const add = (a, b = 3) => a + b;

// returning an object 
// function makeACat(first, last) {
//     const cat = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return cat;
// }
const makeACat = (first,last) => ({ name: `${first} ${last}`, age: 0 });
// IIFE
// Immediately Invoked Function Expression

// (function() {
//     console.log('Running the Anon Function');
//     return 'You are cool';
// })();

// methods!!
const wes = {
    
}