// function
// function is a block of code that perform an action & is reuseble

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isEven(num) {
    return num % 2 === 0;
}

// 1, function decleration.
function add(a, b) {
    return(a+b)
}

const sum = add(2, 4);
console.log(sum)

function mult(a, b) {
    return(a*b)
}
const product = mult(4, 8);
console.log(product)

function greet(name) {
    console.log(`Hello ${name} Welcome to our app`)
}
greet("tony")

const name = "Tida"
console.log(`hello ${name}`)

function info(name, course) {
    console.log(`I am ${name}, i am doing ${course}`)
}
info("tony", "frontend dev")


// function Expression
const add2 = function (a, b) {
    return a + b 
}
const sum2 = add(1, 2)
console.log(sum2)

const fair = function (hello, world) {
    return hello
}
const greeting = fair("hello world")
console.log(greeting)

const greet2 = function (name, course, school) {
    console.log(`Hello my name is ${name}, i am studying ${course} at ${school} `)
}
greet2("tida", "web dev", "New Horizon") 


// Arrow Function
const logIn = name => console.log(`${name} is logged in`);
logIn("Tida");