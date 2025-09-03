console.log("Hello World, this is my first javascript file");

//Variables
//declare variables using let, const or var

//var
var name = "John";
console.log(name);

//let
let age = 18;
age = 31;
console.log(age);

//const
const pi = 3.14;
console.log(pi);

//data types
//string, number, boolean, null, undefined, symbol, object
let greeting = 'How are you?'
console.log(greeting);

//number(integer, float)
let year = 2024;

//float
let price = 19.99;
console.log(price);

//Boolean(true or false)
let isloggedIn = true;
console.log(isloggedIn);

//undefined(variable declared but not assigned)
let notAssigned;
console.log(notAssigned);

//null (explicitly no value)
let emptyValue = null;
console.log(emptyValue);

//objects
let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    isStudent: true
}
console.log(person);

//Name of the person
let initialName = null;
initialName = "Nick";

//arrays
let fruits = ["apple", "banana", "orange"]
console.log(fruits);

//conditional statements
let score;
score = 85;
let condition = score > 50;
if (condition) {
    console.log("You passed!"); // code to be executed if condition is true
} else {
    console.log("You failed!"); //code to be executed if condition is false
}

// == means equal, === means strict equal to
let value;
value = "10";
if (value === 10) {
    console.log("Value is exactly 10");
}

if (cal !== "20") {
    console.log("true, they are not equal");
}

let num;
num = 75;
if (num >= 95) {
    console.log("Grade A");
} else if (num >= 85) {
    console.log("Grade B");
}

function functionName() {
    console.log("this is a function declaration");
}

let a = 5;
let b = 6;
let sum;
sum = a + b;
console.log("the sum ")




//arrow function
const multiply = function(x,y) {
    return x * y;
}

//or using es6 arrow function syntax
const arrowFunc = () =>  {
    console.log("this is an arrow function");
}

const multiplyArrow = (x, y) => x * y; 

console.log(multiply(3, 4));
console.log("this is the result of arrow fuction: " + multiplyArrow(3, 4));

//arrow function with multiple lines
const complexFunc = (a, b) => {
    let sum = a + b;
    let product = a * b;
    let difference = b - a;
    return {sum: sum, product: product, difference: difference};
}
console.log(complexFunc(5, 6));

//loops
// for loop
const colors = ["red", "green", "blue", "black"];
//methods under arrays 
//length
console.log(colors.length)//4
console.log("red")
console.log("green")
console.log("blue")
console.log("black")

//push
colors.push("black")
console.log(colors)

//pop
colors.pop()// removes the last element
consolelog(colors)

//splice
colors.splice(2, 1)
console.log(colors)

//shift
colors.shift() //removes first element
console.log(colors)

//unshift
colors.unshift("orange") //adds an element to the beginning of the array
console.log(colors)

//IndexOf
let index = colors.indexOf("blue")
console.log(index)
colors.splice(index, 1)
console.log(colors)

//indexing

//using a for loop to iterate through the array
for (let i = 0; i < colors.length; i++) {
    console.log("this is from the loop", colors[i]);
}

//while loop
