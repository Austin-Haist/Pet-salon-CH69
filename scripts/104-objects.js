let name = "Fernanda";
let lastname = "Murillo";
let age = 34;

let name2 = "Walter";
let lastname2 = "White";
let age2 = 8;

// Literal Object

let student1 = {
    name: "Fernanda",
    date: "05/31/1992",
    studentNumber: 1234
}

console.log(student1);

//1. Access a Value -> .
student1.name
console.log("Hello, my name is", student1.name);

// Interpolation
console.log(` Hello, my name is ${student1.name} and my student number is ${student1.studentNumber}`);

//Create an object
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
};

//1. Print the entire object
console.log(car);

//2. Print the brand using dot notation
console.log(car.brand);

//3. Print a sentence using a template literal
console.log(`My car is a ${car.brand} ${car.model} from ${car.year}`);

//2. update a value -> =
student1.name = "Maria Fernanda";
console.log(student1.name);

student1.studentNumber = 567;
console.log(student1.studentNumber);