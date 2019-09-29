var name = 'Javascript';

var price = '10';

//Escape Characters
var sentence = "I'm Learning \"JS\"";

// \n => new line

var para = "Hello My Name is Js. \n I am very \t famous now \u0026"

console.log(name);

console.log(typeof name);

console.log(price);

console.log(typeof price);

console.log(sentence);

console.log(para);


// Concatenation operator +

var firstName = 'Java ';

var lastName = 'Script';

var fullName = firstName+lastName;

console.log(fullName);


var age = 27;

//Hello, I am Java Script. I am 27 years old.

var about = "Hello, I am " + firstName + " " + lastName +"." + "I am "+age+" years old.";
console.log(about);

var numStr = "hello"+10;

console.log(numStr);

console.log(typeof numStr);

// Coercion 1. Implicit 2. Explicit

var boolConcat = 'hi'+true;

console.log(boolConcat);

console.log(typeof boolConcat);

var numConcat = 10+true;

console.log(numConcat);

console.log(typeof numConcat);

// String Literal


var strLiteral = `Hello I'm "JS"
I am famous now.`;

console.log(strLiteral);

console.log(typeof strLiteral);

var abt = `Hello I am ${firstName} ${lastName}. I am ${age} years old.${10+20}`

console.log(abt);

console.log(abt.length)