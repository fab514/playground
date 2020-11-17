const name = 'felicia';
const middle = 'ann';
const last = `brenner`;

// backslash \ is used as an escape or overridding a symbol of code.
// If Escape is not used the code using '' "" can be considered broken.

const sentence = 'she\'s so "cool"';
const sentence2 = 'she\'s so "cool"';
const sentence3 = `she's so "cool"`;

// Use tick marks to use multiple lines with one string.
const song = `Ohh
yeah
I like
pizza!`;

const templateLiteral = `${name} ${middle} ${last}`;

const concatenation = name + middle + last;

const hello = `Hello my name is ${name}. Nice to meet you. I am ${
  1 + 100
} years old.`;

const html = `
    <div>
        <h2>name</h2>
        <p>hello</p>
    </div> 
   `;

document.body.innerHTML = html;
console.log(html);
