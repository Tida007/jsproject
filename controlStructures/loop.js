// Loops are used to execute a block of code repeatedly until
// specific conditions are met

for (let i = 0; i < 10; i++) {
    console.log("hello from Loop" + i);
}

// FOR LOOP SEQUENTIAL
// looping over an array 
let pageNames = [
    "Home",
    "About Us",
    "Contact Us",
    "News",
    "JavaScript Basics",
    "conditionalStatement",
    "operators"
];
for (i = 0; i < pageNames.length; i++) {
    if (document.title === pageNames[i]) {
        console.log("We are currently here: " + pageNames[i]);
        break;
    } else {
        console.log("We are not here! " + pageNames[i]);
    }
}

const colors = ["red", "green", "blue", "yellow"]

// for (let i = 0; i < colors.length; i++){
//     console.log("Color:", colors[i]);
// }
while (i < 5) {
    console.log("Colors: " + i)
    i++
}


const students = [
    { name: "Tida", grade: 85 },
    { name: "Tony", grade: 92 },
    { name: "Tmg", grade: 99 }
]

for (let i = 0; i < students.length; i++) {
    console.log("Student:", students[i].name, "Grade:", students[i].grade);
}

const userInfo = [
    { name: "Tida Tmg", school: "New Horizon", course: "Front-end" }
]

for (let i = 0; i < userInfo.length; i++) {
    console.log("My name is " + userInfo[i].name, "My school is ", userInfo[i].school, "my course is", userInfo[i].course);
}

for (let i = 0; i < userInfo.length; i++) {
    console.log("My Name:", userInfo[i].name);
    console.log("School:", userInfo[i].school);
    console.log("Course:", userInfo[i].course);
}


// syntax for while loop below.
// while loop
// let i = 0;
// while (i < 5) {
//     console.log("count is: " + i)
//     i++
// }

// Class details containing students names, age, course, gender,

const studentDetails = [
    { name: 'Ladipoe Branch', course: 'Cyber-security', age: 24, gender: 'male', phone: '+234 814352748921' },
    { name: 'Tony Vory', course: 'Data-Science', age: 21, gender: 'male', phone: '+1 53742973419' },
    { name: 'Maria tequsha', course: 'Dev-ops', age: 22, gender: 'female', phone: '+44 379625408' },
    { name: 'samantha jaquin', course: 'Web Dev', age: 27, gender: 'female', phone: '+44 362912931'}
]

for (let i = 0; i < studentDetails.length; i++) {
    console.log("userName:", studentDetails[i].name, "Major:", studentDetails[i].course, "age:", studentDetails[i].age, "SEX:", studentDetails[i].gender, "Contact INFO:", studentDetails[i].phone);
}