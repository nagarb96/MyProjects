// 1. Variables
var a = 10;        // Old method (redeclare & reassign possible)
let b = 20;        // Block scope (can reassign)
const c = 30;      // Fixed value (cannot reassign)

// 2. Data Types
let name = "Brijesh";   // String
let age = 21;           // Number
let isStudent = true;   // Boolean
let car = null;         // Null (empty)
let address;            // Undefined
let user = { name: "Brijesh", age: 21 }; // Object
let colors = ["red", "blue", "green"];   // Array

// 3. Operators
// Arithmetic
+ , - , * , / , % , **

// Comparison
== , === , != , !== , > , < , >= , <=

// Logical
&& (AND) , || (OR) , ! (NOT)

// Assignment
= , += , -= , *= , /=


// 4. Conditions
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Ternary Operator (short version)
age >= 18 ? console.log("Adult") : console.log("Minor");

// 5. Loops
// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While Loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// Do While
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// For...of (for arrays)
let fruits = ["apple", "mango", "banana"];
for (let fruit of fruits) {
  console.log(fruit);
}

// For...in (for objects)
let person = { name: "Brijesh", age: 21 };
for (let key in person) {
  console.log(key, ":", person[key]);
}

// 6. Functions
// Normal Function
function greet() {
  console.log("Hello!");
}
greet();

// Function with parameter
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// Arrow Function (Modern)
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

// 7. Arrays
let arr = ["red", "blue", "green"];

// Access
console.log(arr[0]); // red

// Change value
arr[1] = "yellow";

// Add & Remove
arr.push("black");     // Add at end
arr.pop();             // Remove last
arr.unshift("white");  // Add at start
arr.shift();           // Remove first

// Length
console.log(arr.length);

// Loop
for (let color of arr) console.log(color);


// 8. Array Methods
let numbers = [10, 20, 30, 40, 50];

numbers.forEach(n => console.log(n)); // Loop without return

let double = numbers.map(n => n * 2); // [20, 40, 60, 80, 100]
let filtered = numbers.filter(n => n > 25); // [30, 40, 50]
let found = numbers.find(n => n === 30); // 30
let sum = numbers.reduce((a, b) => a + b, 0); // 150
let reversed = numbers.reverse(); // Reverse order
let sliced = numbers.slice(1, 3); // [20,30]
numbers.splice(2, 1, 99); // Replace index 2 item with 99


// 9. Strings
let str = "JavaScript";

// Length
console.log(str.length); // 10

// Access
console.log(str[0]); // J

// Upper / Lower
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Slice & Substring
console.log(str.slice(0, 4)); // Java

// Replace
console.log(str.replace("Java", "Type"));

// Split
console.log(str.split("")); // ["J","a","v","a","S","c","r","i","p","t"]

// Concatenate
let text = "Hello" + " " + "World!";


// 10. Objects
let person = {
  name: "Brijesh",
  age: 21,
  city: "Delhi"
};

// Access
console.log(person.name);
console.log(person["city"]);

// Add new key
person.email = "brijesh@gmail.com";

// Delete key
delete person.age;

// Loop
for (let key in person) {
  console.log(key, ":", person[key]);
}



// 11. Math Object
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.random());   // Random number 0-1
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10

// 12. Date Object
let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1); // (0-based)
console.log(now.getDate());
console.log(now.getHours());
console.log(now.toLocaleDateString());

// 13. Type Conversion
Number("123");   // 123
String(123);     // "123"
Boolean(1);      // true
parseInt("45px") // 45
parseFloat("3.14") // 3.14




// 14. Useful Keywords
// Keyword	            Use

// let	                Variable (block scope)
// const	            Constant value
// if/else	            Conditions
// switch	            Multiple condition check
// for / while	        Loops
// function	            Define function
// return	            Return value
// break	            Stop loop early
// continue	            Skip current loop step
// typeof	            Check data type
// delete	            Remove object property

// 15. Bonus Tips

// Template Literal (easy string + variable)
let user = "Brijesh";
console.log(`Hello ${user}, welcome to JS!`);

// Default Parameter
function greet(name = "Guest") {
  console.log("Hi", name);
}

// Destructuring
let [a, b] = [10, 20];
let { name, city } = { name: "Brijesh", city: "Delhi" };

// Spread Operator
let nums1 = [1, 2];
let nums2 = [3, 4];
let combined = [...nums1, ...nums2]; // [1,2,3,4]


// 16. ES6+ Modern Features (Overview)

// let, const (Block scope variables)
// Arrow functions () => {}
// Template literals `${}`
// Default parameters
// Spread operator ...
// Destructuring [a, b] = arr
// Promises & async/await (for async code)
// Classes (for OOP style)



function square(num){
  return "total of " + num;
}
console.log(square(5));

const cube = (n) => n*n*n;
console.log(cube(5));

const sum = (a,b,c) => a+b+c;
console.log(sum(2,3,4));

function add(a,b) {
  return a+b;
}
let x = add(3,5);
console.log(x);

function isEven(n){
  return n % 2 === 0;
}
console.log(isEven(14));

function greet(name = "Guest") {
  return "Hello " + name;
}
console.log(greet());        // agar kuch nahi diya -> "Hello Guest"
console.log(greet("Brijesh")); // diya -> "Hello Brijesh"

const greet = (name = "Guest") => `Hello ${name}`;
console.log(greet("raka"));

const welcome = (name = "Guest") => `Hi ${name}`;
console.log(welcome("Brijesh"));


const welcome = (name = "guest") =>  `Hello ${name}`;
console.log(welcome("Nagar"));


function calculateRectangle(l,b) {
  return 2 * (l+b);
}
console.log(calculateRectangle(5,10));

function square(num) {
  return num * num;
}
console.log(square(5));


let square = num => num*num;
console.log(square(5));

let cube = num => 2*(num);
console.log(cube(5));

function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(6));

function greet(name = "guest") {
  return "hello " + name;
}
console.log(greet("name"));

const greet = (name = "guest") => `Hello ${name}`;
console.log(greet("Raja"));

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

let color = ["red","blue","yellow"];
for (let i = 0; i < color.length; i++){
  console.log(color[i]);
}

for (let colors of color) {
  console.log(colors)
}

let fruits = ["apple", "Banana", "dragon fruits", "mango", "orange"];
console.log(fruits.reverse());    //any array reverse print
console.log(fruits.includes("orange"));  // check to is it available in array if availble print "true". elther false
console.log(fruits.indexOf("mango"));     // check the position of the array values
console.log(fruits.join(" - "));          // join any things in between of the text but join in last only between
console.log(fruits.slice(2,5));           // get values this number to this number place alaways start count in 0
console.log(fruits.splice(1,3));           // remove values this number to this number place alaways start count in 0

let numbers = [1,2,3,4];
let square = numbers.map(num => num*num);
console.log(square);
// map() array ke har element par ek function chalata hai aur naya array return karta hai jisme har element pe wo function apply ho chuka hota hai.

let fruits = ["apple", "Banana", "dragon fruits", "mango", "orange"];
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);

let users = [
  { name: "Brijesh", age: 21 },
  { name: "Tushar", age: 24 },
  { name: "Aryan", age: 20 }
];

let names = users.map(user => user.name);                     //only for single print
let namesagain = users.map(user => user.name +"  " +user.age);     // if you want multiprint so add + to again pass object
console.log(names); // ["Brijesh", "Tushar", "Aryan"]


users[0].age = 29;

console.log(users);

// 🗓️ Day 6 – JavaScript Objects & DOM Basics

let person = {name:"Brijesh",age:29,job:"digital marketing"}
console.log(person.name);

person.city = "delhi";        //add 
person.age = 28;              //update
person.country = "India";
delete person.country;        //delete
console.log(person);

let car = { 
  brand:"Suzuki",
  model: "Brezza",
  engine: "1200cc",
  start: function(){
    console.log("Car Started");
  }
};

car.start();


for (let key in person) {
  console.log(key + ": " + person[key]);
}


let student = {
  name: "Aryan",
  greet() {
    console.log("Hi " + this.name);
  }
};
student.greet();

// 🧩 Part B: DOM (Browser Control)

document.getElementById("title");   //select any things using id
document.querySelector(".btn");     //select any things using class
document.querySelectorAll("p");     //select any things using tags

document.getElementById("title").innerText = "Welcome Brijesh!";
document.querySelector("p").innerHTML = "<b>Hello</b> World!";

let box = document.getElementById("box");
box.style.backgroundColor = "blue";
box.style.color = "white";



let user = {
  name:"Brijesh",
  age:29,
  city:"delhi"
}
console.log(user);


console.log(Math.floor(5126.12821));      //Math.floor() ye formula round figure value update krta hai but down side not up.
console.log(Math.ceil(12.15));            //Math.ceil() ye formula round figure value update krta hai but up side not less.
console.log(Math.round(12.65));           //Math.round() ye formula round figure value update krta hai
console.log(Math.trunc(1245.17231));      //Math.floor() ye formula kisi bhi decimal value ko sirf decimal ke pehle ki value fill krta hai.
console.log(Math.pow(2, 3));              // 8          (2³)  three times multiply
console.log(Math.sqrt(25));               // 5          calculate square root
console.log(Math.abs(-50));               // 50         only write positive value
console.log(Math.max(10, 20, 5));         // 20         maximum value in these round bracket
console.log(Math.min(10, 20, 5));         // 5          minimum value in these round bracket
console.log(Math.random());               //            1–10 ke beech random integer
console.log(Math.PI);                     // 

// 🎯 Quick Practice (Try yourself)
// Ek random number 1–100 ke beech print karo
// Ek number ka square aur cube nikalo
// Ek number ka square root print karo
// Math.max() aur Math.min() se max/min value nikaalo 5 numbers me se

console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.pow(4,4));
console.log(Math.pow(2,2));
console.log(Math.sqrt(25));
console.log(Math.max(23,11,45,32,42));
console.log(Math.min(23,11,45,32,42));


// Current Date & Time
let now = new Date();
console.log(now);

// Specific Date
let birthday = new Date("1996-06-01");
console.log(birthday);

// Date Methods
let date = new Date();
console.log(date.getFullYear()); // 2025
console.log(date.getMonth());    // 0–11 (0 = Jan)
console.log(date.getDate());     // 1–31
console.log(date.getDay());      // 0–6 (0 = Sunday)
console.log(date.getHours());    // 0–23
console.log(date.getMinutes());  // 0–59
console.log(date.getSeconds());  // 0–59

// Set Methods (Change date/time)
date.setFullYear(2030);
date.setMonth(5);
date.setDate(15);
console.log(date);

// Format Date (Readable string)
let today = new Date();
console.log(today.toDateString());  // e.g. "Wed Nov 05 2025"
console.log(today.toTimeString());  // e.g. "14:40:22 GMT+0530"

// Time Difference Example
let start = new Date("2025-01-01");
let end = new Date("2025-11-05");
let diff = end - start; // milliseconds
let days = diff / (1000 * 60 * 60 * 24);
console.log("Days passed:", Math.floor(days));

// Florida Time Example (TimeZone)
let options = { timeZone: "America/New_York", timeStyle: "medium", hourCycle: "h23" };
let floridaTime = new Date().toLocaleTimeString("en-US", options);
console.log("Florida Time:", floridaTime);



// 🎯 Quick Practice (for you now):
// Current date aur time print karo
// Math.floor(Math.random() * 100) se random number banao
// Date() object se current year print karo
// Math.sqrt(81) aur Math.pow(5,3) calculate karo

let now = new Date();
console.log(now);

console.log(Math.floor(Math.random() * 100));

let now = new Date();
console.log(now.getFullYear());

console.log(Math.sqrt(81));
console.log(Math.pow(5,3));



// 🧩 PART A — JavaScript Strings Basics
// 🧠 1. String banana

let name1 = "Brijesh";
let last1 = "Nagar";
let sentence = `Hello, ${name1} ${last1}.`;
console.log(sentence);

// 🧠 2. String Length
let text = "Brijesh nagar";
console.log(text.length);

// 🧠 3. Access Character (index se)
let str = "Hello";
console.log(str[0]);
console.log(str.charAt(1));

// 🧠 4. Concatenation (jodne ke 2 ways)
let first = "Brijesh";
let last = "Nagar";
console.log(first + " " + last);      // old way
console.log(`${first} ${last}`);      // modern way (template literal)

// 🧩 PART B — Common String Methods
// 🧠 1. .toUpperCase() / .toLowerCase()
let word = "Hello";
console.log(word.toUpperCase()); // HELLO
console.log(word.toLowerCase()); // hello

// 🧠 2. .trim() — extra spaces remove
let name = "   Brijesh   ";
console.log(name.trim()); // "Brijesh"

// 🧠 3. .includes() — substring check karta hai
let sentence = "I love JavaScript";
console.log(sentence.includes("love")); // true
console.log(sentence.includes("hate")); // false

// 🧠 4. .indexOf() / .lastIndexOf()
let text = "Hello Brijesh Hello";
console.log(text.indexOf("Hello")); // 0
console.log(text.lastIndexOf("Hello")); // 14


// 🧠 5. .slice(start, end)
let word = "JavaScript";
console.log(word.slice(0, 10)); // Java
console.log(word.slice(4));    // Script

// 🧠 6. .replace() / .replaceAll()
let text = "I love JavaScript";
console.log(text.replace("love", "like")); // I like JavaScript

// 🧠 7. .split() — string ko array me todta hai
let data = "apple,banana,mango";
let fruits = data.split(",");
console.log(fruits); // ["apple","banana","mango"]

// 🧠 8. .startsWith() / .endsWith()
let name = "Brijesh Nagar";
console.log(name.startsWith("Bri")); // true
console.log(name.endsWith("gar"));   // true


console.log("Ha ".repeat(3)); // Ha Ha Ha

// 🧠 10. .substring(start, end)
let name = "JavaScript";
console.log(name.substring(0, 4)); // Java

// 🧠 A5 — replace() / replaceAll()
let text = "I love JavaScript. JavaScript is awesome!";
console.log(text.replace("JavaScript", "React"));    // sirf pehla replace karega
console.log(text.replaceAll("JavaScript", "React")); // dono replace karega


// 🧠 A6 — split() (string → array)
let fruits = "apple,banana,mango";
let result = fruits.split(",");
console.log(result);


// 🧠 A7 — startsWith() / endsWith()
let name = "Brijesh Nagar";
console.log(name.startsWith("Bri")); // true
console.log(name.endsWith("gar"));   // true

let text = "JavaScript is JavaScript";
console.log(text.replaceAll("JavaScript", "React"));

let fruits = "apple,banana,grapes,kiwi";
console.log(fruits.split(","));

let text = "Frontend Developer";
console.log(text.startsWith("Front"));
console.log(text.endsWith("Developer"));

let text = "🔥 Learn JS";
console.log(text.repeat(5));


// 🧩 PART A — Numbers & Type Conversion
// 🧠 1. typeof operator
let x = 42;
let y = "42";
console.log(typeof x); // "number"
console.log(typeof y); // "string"


// 🧠 2. parseInt() — String → Integer

let num = "50";
console.log(parseInt(num)); // 50
console.log(typeof parseInt(num)); // number

// 🧠 3. parseFloat() — String → Decimal number
let num = "99.75";
console.log(parseFloat(num)); // 99.75

// 🧠 4. Number() — Convert any value to number
console.log(Number("123"));    // 123
console.log(Number("123.45")); // 123.45
console.log(Number("Hello"));  // NaN


// 🧠 5. isNaN() — Check invalid number
console.log(isNaN(100));     // false
console.log(isNaN("Hello")); // true


// 🧠 6. toFixed() — Decimal precision control
let num = 5.6789;
console.log(num.toFixed(2)); // "5.68"

// 🧠 7. toString() — Number → String
let number = 100;
console.log(number.toString()); // "100"

// 🧠 8. Math + Numbers Example
let marks = 86.556;
console.log("Rounded:", Math.round(marks)); // 87
console.log("Fixed (2):", marks.toFixed(2)); // "86.56"


// 🧩 PART B — JSON (JavaScript Object Notation)
// JSON ka use data save / send karne ke liye hota hai(backend se frontend me ya LocalStorage me).

// 🧠 1. JSON.stringify() — Object → String
let user = { name: "Brijesh", age: 25 };
let jsonData = JSON.stringify(user);
console.log(jsonData);

// 🧠 2. JSON.parse() — String → Object
let str = '{"name":"Brijesh","age":25}';
let obj = JSON.parse(str);
console.log(obj.name); // Brijesh


// 🧠 3. Real Example
let student = { name: "Ankit", marks: 90 };
let jsonString = JSON.stringify(student); // save or send
let backToObject = JSON.parse(jsonString); // use again
console.log(backToObject.marks); // 90


// 🌐 Day 10 – JavaScript LocalStorage & SessionStorage
// 🧠 1️⃣ What is Storage in Browser
// localStorage	    -       Permanently (until user clears cache)	    -     Manual clear
// sessionStorage	  -       Jab tak tab open hai	                    -     Tab close hote hi


// 🧩 2️⃣ localStorage – Set, Get & Remove

// ➕ Set data
localStorage.setItem("name", "Brijesh");
localStorage.setItem("city", "Delhi");
// 📖 Get data
console.log(localStorage.getItem("name"));
// ❌ Remove data
localStorage.removeItem("city");
// 🔄 Clear all
localStorage.clear();


// 🧠 3️⃣ JSON with localStorage
// localStorage sirf string store kar sakta hai, isliye hum objects/arrays ko JSON.stringify() karte hain.
let user = { name: "Brijesh", age: 25 };
localStorage.setItem("user", JSON.stringify(user));

let data = JSON.parse(localStorage.getItem("user"));
console.log(data.name); // Brijesh

// 🧠 4️⃣ sessionStorage Example
// Tab close hote hi token khatam ho jaata hai.
sessionStorage.setItem("token", "12345");
console.log(sessionStorage.getItem("token")); // 12345

// Learn breifly After the JSON project wise
try {
  let a = Brijesh; //give error  ""
  console.log(a);
  
} catch (error) {
  console.log("Something went wrong :" ,  error.message);
}

// JSON
// Storage
// Error Handling
// Async JS	
// Promises / Fetch API


for(let i=0; i<= 10;i++){
    console.log(i);
}
// Today i will learn Array uses

let numbers = [10, 20, 30, 40];     // Create an Array

let numbers = [10, 20, 30, 40];     // Access any array use thos console.log code.
console.log(numbers[0]);            // Always Array start from 0 to last array length count.
console.log(numbers[2]);

let numbers = [10, 20, 30, 40];     // 
console.log(numbers.length);        // Know the length of the array

let numbers = [10, 20, 30, 40];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}                                   // This code use, you can write and print all array in console.

let numbers = [10, 20, 30, 40];
let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];              // Know the array sum and more maths formula to check different different answer.
}
console.log(sum);

// Lets start the Practice test

let numbers = [5,10,15,20];

// Question 1: Print the all numbers in console.
// Answer : 
let numbers = [5,10,15,20];
for(let i = 0; i < numbers.length; i++){ 
    console.log(numbers[i]); 
}
// Answer output is : 5, 10, 15, 20 in vertically format without any comma's

// Question 2: Lets Calculate the all numbers Sum.
// Answer is :
let numbers = [5,10,15,20]; 
let sum = 0; 

for(let i = 0; i < numbers.length;i++){ 
    sum += numbers[i]; 
} 
console.log(sum);

// Answer Output is : 50

// Question 3: Print only Even Numbers.
let numbers = [5,10,15,20]; 
for(let i = 0; i < numbers.length; i++) { 
    if( i % 2 !== 0){ 
        console.log(numbers[i]); 
    } 
}
// Answer Output is : 10,20

// Question 4 Find the Largest Number..
let numbers = [8,3,12,5,20];
let max = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
}
console.log("Largest:", max);

// Question 5 Find the Smallest Number..
let numbers = [8,3,12,5,20];
let min = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < min){
        min = numbers[i];
    }
}
console.log("Smallest:", min);

// Question 6 : Count the Even Number..
let numbers = [8,3,12,5,20];
let count = 0;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        count++;
    }
}
console.log("Even count:", count);








let arr = [4,9,2,11,6];
let max = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(`Largest Number is: ${max}`);


let arr = [4,9,2,11,6];
let min = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
}
console.log(`Smallest Number is: ${min}`);


let arr = [4,9,2,11,6];
let sum = 0;

for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(`Total Number Sum is: ${sum}`);



//  Now Start Array Methods pop, push, shift, unshift, includes

let fruits = ["apple","banana"];
fruits.push("mango");                   // Add the end values in array use push methods.
console.log(fruits);

let fruits = ["apple","banana"];
fruits.unshift("orange");                   // Add the beginning values in array use unshift methods.
console.log(fruits);

let fruits = ["apple","banana"];
fruits.pop();                   // Remove values in array use pop methods.
console.log(fruits);

let fruits = ["apple","banana"];
console.log(fruits.includes("apple"));                   // Check values exits in array. Use Includes method

let fruits = ["apple","banana"];
fruits.splice(1,1);                                      // remove specific values in array use splice methods.
console.log(fruits);


//  Now Start Array manipulation powerful tools is slice(), splice(), reverse(), sort()

let numbers = [10,20,30];
numbers.push(40);
console.log(numbers);

numbers.unshift(5);
console.log(numbers);

numbers.pop()
console.log(numbers);

console.log(numbers.includes(20));


let numbers = [3,8,12,5,7,20];      // Lets Find Even Number in Array.
let EvenNumbers = numbers.filter(num => num % 2 === 0);
console.log(EvenNumbers)

for(let i=0;i<numbers.length;i++){
  if(numbers[i] % 2 === 0){
    console.log(numbers[i])
  }
}



let numbers = [3,8,12,5,7,20];   // Lets try to double numbers
let Double = numbers.map(num => num *2);
console.log(Double);

for(let i=0;i<numbers.length;i++){
  let result = numbers[i] *2    
  console.log(result);
  }

let numbers = [2,3,4,5];   // Calculate the square of numbers.
let squareNumber = [];          // First Use Old Method.
for(let i = 0; i < numbers.length;i++){
  squareNumber.push(numbers[i] * numbers[i]);
}
console.log(squareNumber);

let squareNumbers = numbers.map(num => num * num);        //New ES6 Script Method. Means New Method.
console.log(squareNumbers);



let numbers = [1,2,3,4,5,6];                                // Find Odd Numbers
for(let i=0;i<numbers.length;i++){
  if(numbers[i] % 2 !== 0){
    console.log(numbers[i]);
  }
}

let  oddNumbers = numbers.filter(num => num % 2 !== 0);    // Find odd numbers.
console.log(oddNumbers);


let names = ["Rahul","Amit","Neha"];
let nameWithTitle = names.map(name => "Mr. " + name);       // Add Title in every name 
console.log(nameWithTitle);


let names = ["Rahul","Amit","Neha"];                        // Add Title in every name using old method.
let nameWithTitles = [];
for(let i = 0; i < names.length; i++){
    nameWithTitles = "Mr. " + names[i];
    console.log(nameWithTitles);
}


let products = [                                        // Extract only Prices 
  {name:"Mobile", price:10000},
  {name:"Laptop", price:50000},
  {name:"Tablet", price:20000}
];

let productsPrices = products.map(item => item.price);
console.log(productsPrices);

let nums = [5,10,15];                                   // lets try to use reduce(). 
let sum = nums.reduce((acc,add) => acc + add,0);
console.log(sum);


let nums = [5,12,8,20,3,15];                            // Lets try to count.
let count = nums.reduce((acc,curr) => {
  if(curr > 10){
    return acc + 1;
  }
  return acc;
},0);
console.log(count);


let nums = [5,12,8,20,3,15];                            // Lets try to count. new method and short
let count = nums.reduce((acc,curr) => curr > 10 ? acc + 1:acc,0);
console.log(count);


let users = [
  {name:"Rahul", age:22},
  {name:"Amit", age:17},
  {name:"Neha", age:25}
];
let countAdultUsers = users.reduce((acc,curr) => curr.age >= 18 ? acc + 1:acc,0);
console.log(countAdultUsers);


let cart = [
  {name:"Mobile", price:10000, qty:2},
  {name:"Laptop", price:50000, qty:1},
  {name:"Tablet", price:20000, qty:3}
];

let cartItemQty = cart.reduce((acc,curr) => acc + curr.qty,0 );
console.log(cartItemQty);


let cart = [
  {name:"Mobile", price:10000, qty:2},
  {name:"Laptop", price:50000, qty:1},
  {name:"Tablet", price:20000, qty:3}
];
let total = 0;
for(let i=0; i < cart.length;i++) {
total = total + cart[i].qty;
}
console.log(total);


let cart = [
  {name:"Mobile", price:10000, qty:2},
  {name:"Laptop", price:50000, qty:1},
  {name:"Tablet", price:20000, qty:3}
];
let total = 0;
for(let i=0; i < cart.length;i++) {
  total = total + cart[i].price * cart[i].qty;
}
console.log(total);

let gtotal = cart.reduce((acc,curr) => acc + curr.price * curr.qty,0 );
console.log(gtotal);


