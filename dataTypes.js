// alert("hello jsclass");
console.log("welcome to my website");

// var
// let
// const

var name = "Tida Tmg";
console.log(name)

let age = 40;
age = 50
console.log(age);

const email = "tonytidatmg@gmail.com";
console.log(email);

// primitive datatypes
// String
let name2 = "Tony";

// Number
// intejers
// float has decimals
let age2 = 25
let Number = 0.94

// Boolean
// true or false
let isMarried = false;
let isGudMan = true;

// undefined
let notAssigned;

// null
let isActive = null;

// Non-Primitive Datatypes
// Array

let products = ["bag", "shoes", "cloth", "phone", "laptop",];
console.log(products);

// Object
let user = {
    name: "Tida Tmg",
    age: 20,
    email: "tonytidatmg@gmail.com",
    isStudent: false
};

console.log(user);

const user2 = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    username: "johndoe123",
    email: "tonytidatmg@gmail.com",
    password: "securePassword123",
    phone: "+1234567890",
    address: {
        street: "123 Main St",
        city: "Lagos",
        state: "Lagos",
        postalCode: "100001",
        country: "Nigeria"
    },
    dateOfBirth: "1995-12-01",
    isActive: true,
    roles: ["user", "Admin"],
    lastLogin: "2024-10-14T10:30:00Z"
};

console.log(user2);

// ASSIGNMENT
let lenght = 240, width = 400;
let area = lenght + width;

console.log(lenght);
console.log(width);
console.log(area);

const firstName = "Tida";
const lastName = "Tmg";
const age1 = 25;
const isStudent1 = true;
const greetings = `My name is ${firstName} ${lastName}! i am ${age1} years old, and it is ${isStudent1} that i am a student.`;

console.log(greetings);

let favMovies = ["They cloned tyrone", "Dune", "before dawn", "deadpool", "furiosa",];

console.log(favMovies);
console.log(favMovies[0]);
console.log(favMovies[4]);

const book = {
    title: "Dead beat",
    author: "Tony Tida",
    publishedYear: 2024,
    genre: ["crime", "sci-fi", "comedy",],
    isAvailable: false
};
// adding new data to object file 
book.newInfo = "new age",
book.color = "orange",
// removing data from object file 
delete book.color 
console.log(book);



let pounds = 2700;
let naira = 100;
console.log(pounds != naira);