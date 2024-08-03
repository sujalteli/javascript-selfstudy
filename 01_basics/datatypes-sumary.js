// primity

// there are tota lthree types of primity datatypes are present : (1) String, (2) Number, (3) Boolearn, (4) null, (5) Undefined, (6) Symbol, (7) BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 18453654896123289n

// reference (Non primitive)

// there are total three types of non primity datatypes are present : (1) Array, (2) Objects, (3) Functions

const heros = ["shaktiman", "nagraj", "doga"];

let myObj = {
    name: "sujal",
    age: 18,
}

const myFunctions = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof id);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunctions);
