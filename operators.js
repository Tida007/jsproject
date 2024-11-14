// operators in js are special symbols that performs operations on one or more files in our js file system

// 1. Arrithmetic operatons
// addition 
let sum = 5 + 3;
console.log(sum);

// subtractions
let difference = 10 - sum;
console.log(difference)

// multiplication
let product = sum * difference;
console.log(product)

// division
let quotient = product / 4;
console.log(quotient)

// modulus
let remainder = quotient % 3;
console.log(remainder)

// Asssignment Operators
// These operators assign values to variables

// assignment
let x = 5;
console.log(x)

// addition assignment
let y = 5;
y += 1;
console.log(y)

// subtraction assignment
let z = 10;
z -= y;
console.log(z)

// 3. Comparison Operators
// These operations compare values and return a boolean value

// Equal
console.log(5 == "5");

// strict Equal
console.log(5 === "5");

// Not Equal
console.log(5 != "5");

let u = 4;
let v = 5;
console.log(u != v)

// strict not Equal
console.log(5 !== "5");
let c = "tida";
let d = 10;
console.log(c !== d);

// Greater than 
console.log(10 > 5)
let g = 12
let k = 10
let p = g + k 
console.log(k > g)

// less than
console.log(3 < 2)
let l = 12 
let i = 10
let w = l - i
console.log(p < w)

// greater than & equal
console.log(4 >= 5);
let r = 6
let s = 6
let n = r * 2
console.log(r >= s)

let o = s - 3

console.log(n >= o)

// using logical operators declare four variables that logs boolean value on console.
// using comments on the vs code editor explain the meaning and how it functions

// Logical operators Assignment below
let team = "group";
let animal = "ape";
let company = "samsung";
let number = 35;

console.log(team === "group" && animal === "samsung" && number === 35);

console.log(team === "group" || animal === "samsung")

console.log(team === "group" || company === "ape" && animal === 35)

// line 97 using logical && (and) operators ask if the complete statement of the log evalute down to true if not javaScript returns false

// line 99 using logical || (or) operators ask if just one of the variable is true irrespective of the rest being false javaScript returns true and only returns false if the complete statement evalute down to false the console returns the false boolean

// Note if both operators are used at the same time javaScript evalute the && operators first before the || operators are checked

// Logical operators
const hasDriverLicense = true;
const hasInsurance = true;

const carDrive = hasDriverLicense && hasInsurance;
console.log(carDrive);

const foodMan = true;
const waterGiver = true;

const theater = foodMan && waterGiver;
console.log(theater);

// in this kind of logic, if any of the variable is negative it will return false
const isAdult = true;
const isHungry = false;
const canEnter = isAdult && isHungry;
console.log(canEnter);

const dream = true;
const matter = false;
const remoteRiver = dream && matter;
console.log(remoteRiver);

const knowsHtml = false;
const knowsCSS = true;
const canDesignWebsite = knowsHtml || knowsCSS;
console.log(canDesignWebsite);

const getHouse = false;
const buildPlane = true;
const truth = getHouse || buildPlane
console.log(truth);

// in this kind of logic, if any of the variable is negetive it will return false
const isAdmin = true;
const isSuperUser = false;

const canAccessPage = isAdmin || isSuperUser;
console.log(canAccessPage)

// Ternary operators
let gadget = "airConditional";

gadget === "airConditional"
    ? console.log("you are freezing cool!")
    : console.log("that was not very cool of you!!");

// let job = gadget === "airConditional" ? "freezing cool" : " cool of you";