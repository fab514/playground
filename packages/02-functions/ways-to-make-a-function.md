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
