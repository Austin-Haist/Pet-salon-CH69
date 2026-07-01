let names = ["Edwin", "Jay", "Austin"];
let age = [20, 30, 25];

console.log(names); // ["Edwin", "Jay", "Austin"]
//2. Accessubg an element ->index/position
names[0]; // "Edwin"
console.log(names[2]); // "Austin"

console.log(age[1]); // 30

//3. modify an element value -> = 
names[1] = "Chante";
console.log(names); // ["Edwin", "Chante", "Austin"]

age[0] = 21;
console.log(age); // [21, 30, 25]

//4. how many elements we have in the array? --> length
names.length; // 3
console.log(names.length); // 3

console.log(names,age); // ["Edwin", "Chante", "Austin"] [21, 30, 25]

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(age[0]);
console.log(age[1]);
console.log(age[2]);

//5. travel the array
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let student1 = {
    name: "Fernanda",
    age: 34
};

let student2 = {
    name: "Edwin",
    age: 21
};

let student3 = {
    name: "Denica",
    age: 30
};

//create the array with the objects
let studentsList = [student1, student2, student3];

// Accessing the objects in the studentsList array
studentsList[0].name; // "Fernanda"

console.log(studentsList[0].name); // "Fernanda"    