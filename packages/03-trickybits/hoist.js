/* eslint-disable */
// Some coders use hoisting to show what the file is doing first then how.
// What the file is doing.

sayHi();

// How does this file do it.

function sayHi() {
  console.log('hey!');
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}

// variable declaration hoisting. example in md document. 

console.log(age);
var age = 10;
