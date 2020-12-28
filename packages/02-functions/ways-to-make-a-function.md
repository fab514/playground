#Ways to Declare a function
## Anonimous function
- a function that has not been given a name
## Hoisting (will learn more about later)
- A function can moved higher in the list if you declare a function before creating a function. 
- Hoisting does not work when you put the function into a variable. 
- POSSIBLE INTERVIEW QUESTION
## FUnction Expression
- This is when you use a function as a variable within a expression. 
- const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};
## Arrow Function
- => fat arrow -> skinny arrow
- Use the fat arrow after the paranthesis to replace the word function. 
- const inchToCM= (inches) => {
    return inches * 2.54;
    - Don't always use arrow function by default besides listing the entire function. 
## returning an object
- How to implicitely return an object so vs code does not get confused over curly brackets. Put paranthesis around the object to contain it. 
- const makeACat = (first,last) => ({ name: `${first} ${last}`, age: 0 });
-  from 
function makeACat(first, last) {
    const cat = {
        name: `${first} ${last}`,
        age: 0
        }
     return cat;
 }
 ## IIFE (Immediately Invoked Function Expression)
 - in JS paranthesis are read first no matter where they are. If you put paranthesis around your function it will run that function first and is considered a IIFE. 
 ## Methods
 - console.log, console is an object and log is a function. You can use other function within console object. When putting a function with an object is called a method. 
