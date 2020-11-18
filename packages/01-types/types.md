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

# Number
{Dan question- can I have multiple js sources in the same html file? Also, why did I have a hard time with commenting function}
## typeof 
The typeof command in your console will show the type of variable you are using in that command.
- [in vs code] const age = '100' const name = 'felicia'
- [in browser console] typeof name "string" typeof age "number"
- You can also use type of in just the console. ex. typeof 11 is number and typeof 12312 is string
- Looking up typeof in console is good for if you are getting information from a user. 
## Numbers
- You can use an interger (a full number) ex. 100 3 etc.
- a decimal is called a float ex. 100.5 7.3 etc.
- Use const of smaller number to create addition, subtraction, multiplication and division equations (operators) in console.

- in vs code numbers can be listed a = 10; b = 20; In the console if you type a + b the value will show 30. 

- Be careful when using the + symbol in javascipt. This symbol is also used in concatination. If you mix up 2 types such as 1 + "1" = 11 (or a number + a string) it will come up with a unpredictable result. multiplication, division and subtraction are only used with numbers so the result for "10" * "10" will still be considered numbers instead of strings. 
## Math Helpers
- in the console there are several options of Math helpers. 
- The 4 that will be used the most are Math.round (round to the closest interger ex. 10.3=10, 8.9=9), Math.floor(will bring the decimal to the lower interger ex. 9.9= 9), Math.ceil(will bring the decimal to the higher interger ex. 1.4=2) and Math.random(will give you a random number{interger or decimal} from 0-10).
- Modulo (remainder %) is another type of operations. Equal to what is left over after the left number is divided by the right. 8 % 3 will return as two because 3 goes in 8 two times and 2 will be the remainder. 
- Floating Point Math A Computer can natively only store intergers so they need to find a way to represent decimals which is not always accurate.{.1 + .2 = .300000004}This can be fixed by using cents intead of dollars and cents. {Instead of doing 10.34 use 1034, when display to a costumer bring back to 10.34}
- ** is to the power of, so 10 ** 2 =100. 
- If a number goes too high or two low where the computer does understand it will bring back infinity or -infinity. (these will both be defined as true numbers when using typeof)
- NaN (Not a Number) If you try to use operations with something that is not a number you will see NaN. {ex. 10 / 'dog' = NaN}. When using the command typeof NaN it will however be listed as a number. 
# Null and Undefined 
- two types of variables that stand for nothing. 
## undefined
- If you create a variable but is not set to a value when you try to access it will be shown as undefined (or not yet defined). 
- Unlike undefined which is a created variable, trying to access something that has not been made into a variable will cause a reference error. 
## Null
- Is a variable that is set to null (which means nothing). 
- {const somethingnull = null}
