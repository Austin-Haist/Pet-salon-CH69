// Create three pet object literals

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


// Pet object constructor

function Pet(name, age, breed, gender, service) {

    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;

}


// Store the three original pets in the array

let petsList = [
    pet1,
    pet2,
    pet3
];


// Create and return one table row

function displayRow(pet, index) {

    let row = "";

    row += "<tr>";

    row += "<td>" + pet.name + "</td>";
    row += "<td>" + pet.age + "</td>";
    row += "<td>" + pet.gender + "</td>";
    row += "<td>" + pet.service + "</td>";
    row += "<td>" + pet.breed + "</td>";

    row +=
        "<td>" +
        "<button class='btn btn-danger btn-sm' " +
        "onclick='deletePet(" + index + ")'>" +
        "Delete" +
        "</button>" +
        "</td>";

    row += "</tr>";

    return row;

}


// Display all pets in the table

function displayPets() {

    let output = "";

    for (let i = 0; i < petsList.length; i++) {

        output += displayRow(petsList[i], i);

    }

    document.getElementById
    ("petTableBody").innerHTML = output;

}


// Register a new pet

function registerPet() {

    let name = document.getElementById
    ("petName").value;

    let age = document.getElementById
    ("petAge").value;

    let breed = document.getElementById
    ("petBreed").value;

    let gender = document.getElementById
    ("petGender").value;

    let service = document.getElementById
    ("petService").value;


    let newPet = new Pet(
        name,
        age,
        breed,
        gender,
        service
    );


    petsList.push(newPet);

    displayPets();


    // Clear the form fields

    document.getElementById
    ("petName").value = "";

    document.getElementById
    ("petAge").value = "";

    document.getElementById
    ("petBreed").value = "";

    document.getElementById
    ("petGender").value = "";

    document.getElementById
    ("petService").value = "";

}


// Delete a pet with confirmation

function deletePet(index) {

    const confirmation = confirm(
        "Are you sure you want to delete this pet?"
    );

    if (confirmation) {

        petsList.splice(index, 1);

        displayPets();

    }

}


// Display the original pets when the page loads

displayPets();