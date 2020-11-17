# Types
Values into variables, can be stuck in a variable or pass to a function like console.log

Types of values
- SNOB'N'US
- String
- Numbers
- Boolean (true or false)
- Null (set to nothing)
- Undefined (set to nothing)
- Symbol (unique identifier)
- Object (all code is object)

# Type: Strings
- 'Single' "Double" and `Back ticks` can be used 
- Back slashes will cancel out unwanted code. 'she/'s so cute' Without backslash the JS code will stop at 'she'.
- When wanting to use multiple lines `back ticks`
`I
Love 
it`
## concatination
const hello = 'hello my name is' + name + ". Nice to meet you";
## interperable
variable within a string 
 templateLiteral = `${name} ${middle} ${last}`;

 ## Other types of string
 
 const hello = `Hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old.`;

const html = `
    <div>
        <h2>name</h2>
        <p>hello</p>
    </div> 
   `;

document.body.innerHTML = html;
console.log(html);
