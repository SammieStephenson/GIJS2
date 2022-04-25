// VERY EASY: Write a function named min that takes two arguments and returns their minimum.

const x = Number(prompt("Pick a Number"))
const y = Number(prompt("Pick another Number"))
function min(x, y) {
    return Math.min(x, y)
}
alert(min(x, y))



// EASY: Create an array of students holding their last name, first name, and age with 3 students. To
// validate, please log a greeting with the first name, last name and age of the 2nd student. The output
// should look like "Hello, my name is John Doe and I'm 19 years old."

let student1 = ["Sammie", "Stephenson", 25]
let student2 = ["Jordan", "Douglas", 22]
let student3 = ["Chance", "Lewis", 35]

console.log(`Hello, my name is ${student3[0]} ${student3[1]} and I am ${student3[2]} years old.`);

// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number
// and its corresponding month. For example: if the user enters the number 3, then it should return the
// month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

const entry = Number(prompt("Type a Number 1-12"));

if (entry === 1) {
    console.log("1. January")
} else if (entry === 2) {
    console.log("2. February")
} else if (entry === 3) {
    console.log("3. March")
} else if (entry === 4) {
    console.log("4. April (THE BEST)")
} else if (entry === 5) {
    console.log("5. May")
} else if (entry === 6) {
    console.log("6. June")
} else if (entry === 7) {
    console.log("7. July")
} else if (entry === 8) {
    console.log("8. August")
} else if (entry === 9) {
    console.log("9. September")
} else if (entry === 10) {
    console.log("10. October")
} else if (entry == 11) {
    console.log("11. November")
} else if (entry === 12) {
    console.log("12. December")
} else if (entry > 12) {
    alert("BETWEEN 1 and 12 please")
} else if (entry < 1) {
    alert("Come on now at least a 1")
}


// HARD: Given the information below for Tom and Jerry.
// ● Tom - height:  9in mass: 8 g
// ● Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
// variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
// console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

const tHeight = 9
const tMass = 8
const jHeight = 10
const jMass = 45

function BMI(m, h) {
    return m / (h * h);
}
// console.log(BMI(jMass, jHeight))

const jerryBMI = Number(BMI(jMass, jHeight))
const tomBMI = BMI(tMass, tHeight)
console.log(jerryBMI)

if (jerryBMI > tomBMI) {
    console.log(true)
} else if (jerryBMI < tomBMI) {
    console.log(false)
}


