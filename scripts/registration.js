let pet1 = {
    name: "Walter",
    age: 5,
    gender: "Male",
    service: "Grooming",
    breed: "Golden Retriever"
};

let pet2 = {
    name: "Tato",
    age: 3,
    gender: "Male",
    service: "Nail Trim",
    breed: "Chihuahua"
};

let pet3 = {
    name: "Rocky",
    age: 7,
    gender: "Male",
    service: "Bath",
    breed: "Bulldog"
};

function Pet(name, age, breed, gender, service) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
}

let pet4 = new Pet("Luna", 2, "Husky", "Female", "Bath");
let pet5 = new Pet("Max", 4, "Poodle", "Male", "Grooming");
let pet6 = new Pet("Bella", 6, "Beagle", "Female", "Nail Trim");

let petsList = [pet1, pet2, pet3, pet4, pet5, pet6];

function displayPets() {
    let output = "<ol class='list-group list-group-numbered'>";

    for (let i = 0; i < petsList.length; i++) {
        output += "<li class='list-group-item'>" + petsList[i].name + "</li>";
    }

    output += "</ol>";

    document.getElementById("pets").innerHTML = output;
}

displayPets();