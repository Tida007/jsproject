// control structure in js enssential for controling the flow
// execution in your code. this allow you to dictate how your program should responed base on conditions.

// 1. conditional statement
// conditional statement  execute a block of code if the specified condition is true or false

// a. if statement
let temperature = 30;

if (temperature > 25) {
    console.log("it is a hot day!")
} else {
    console.log("it is a cold day")
}

const lekkiGood = true;
const ojota = false;

if (lekkiGood || ojota) {
    console.log(" then we all move to lekki")
} else {
    console.log("we remain in mainland")
}

const isAdmin = false;

const hasGoodHealth = true;

if (isAdmin && hasGoodHealth) {
    console.log("welcome to class")
} else {
    console.log("go back home")
}

// const shipping = 50;

// if (shipping < 40) {
//     console.log("free shipping")
// } else {
//     console.log("free shipping")
// }

// let yes = true;
// let no = false;

// console.log(!no);

const hasPaid = true;
const goodHealth = true;

if (hasPaid && goodHealth) {
    console.log('welcome to class')
} else {
    console.log('go back home')
}

let age = 25;
if (age > 25) {
    console.log("your age is above 25")
} else if (age < 25) {
    console.log("your age is below 25")
} else {
    console.log("your age is 25")
}

let age1 = 25;

switch (true) {
    case age1 > 25:
        console.log('Your  age is above 25');
        break;
    case age1 < 25:
        console.log("your age is below 25");
        break;
    default:
        console.log("Your age is 25");
}
    
let fruit = "apple";
if (fruit === "bannana") {
    console.log('we have bannana in the store')
} else if (fruit === "orange") {
    console.log('we have orange in our store')
} else if (fruit === 'coconut') {
    console.log('coconut is in our store')
} else if (fruit === 'apple') {
    console.log('we have apple in our store')
} else {
    console.log('we do not have any fruit in our store')
}

let fruit1 = "apple";

switch (fruit1) {
    case "bannana":
        console.log('it is bannana');
        break;
    case "apple":
        console.log('it is apple');
        break;
    default:
        console.log("we do not have bannana")
    
}

// Assignment 
const actions = ["start", "stop", "pause"];
let userAction = "start";
let isLoggedIn = true;

switch (true) {
    case actions.includes(userAction) && isLoggedIn:
        console.log("Action permitted:" + userAction);
        break;
    case actions.includes(userAction) && !isLoggedIn:
        console.log("please log in to perform this");
        break;
    default:
        console.log("No valid case found.");
}

// Terse ifs are one liner
let xander = "Cupid";
// xander = "some other guy";

if (xander === "Cupid") console.log("Ouch, an arrow! Ooo, I'm in love!");

xander = "Some Other Guy";
"Some Other Guy"
if (xander === "Cupid") console.log("Ouch, an arrow! Ooo, I'm in love!");
else console.log("I feel nothing!");




let wantForBirthday = "iphoneXr";
gotForBirthday = "iphoneXr";
angryAboutIt = false;

if (wantForBirthday === gotForBirthday) {
    console.log("bitch i'm fucking happy!");
    angryAboutIt = false;
} else {
    console.log("Damn i'm pissed!");
    angryAboutIt = true;
}

if (angryAboutIt) {
    console.log("I'm Screammmmmmmming!!");
}

if (!angryAboutIt) {
    console.log("I'm Screammmmmmmming Yay!!");
}


