/*
// Function definition//
function calculateBill(billAmount, taxRate) {
  // this is the function body//
  console.log('Running Calculate Bill!!');
  const total = billAmount * 1 + taxRate;
  return total;
}
// Function Call. or **run** //
 const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);
console.log(myTotal, myTotal2); 
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate); //

 function sayHiTo() {
  return `hello $(firstName)`;
}

const greeting = sayHiTo();
console.log(greeting); */
// if you put the variable in the function you can change the data input and the result will match the data.
function sayHiTo(firstName) {
  return `hello ${firstName}`;
}

const greeting = sayHiTo();

function carMan(modelName) {
  return `I like ${modelName}`;
}
const models = carMan();
