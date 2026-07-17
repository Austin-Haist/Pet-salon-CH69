// Pet object constructor

function Pet(name, age, breed, gender, service) {

    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;

}


// Store registered pets in the array

let petsList = [];


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
        "type='button' " +
        "onclick='deletePet(" + index + ")'>" +
        "Delete" +
        "</button>" +
        "</td>";

    row += "</tr>";

    return row;

}


// Display all registered pets in the table

function displayPets() {

    let output = "";

    for (let i = 0; i < petsList.length; i++) {

        output += displayRow(petsList[i], i);

    }

    document.getElementById(
        "petTableBody"
    ).innerHTML = output;

}


// Register a new pet

function registerPet() {

    let name = document.getElementById(
        "petName"
    ).value.trim();

    let age = document.getElementById(
        "petAge"
    ).value.trim();

    let breed = document.getElementById(
        "petBreed"
    ).value.trim();

    let gender = document.getElementById(
        "petGender"
    ).value;

    let service = document.getElementById(
        "petService"
    ).value;


    // Make sure all fields have information

    if (
        name == "" ||
        age == "" ||
        breed == "" ||
        gender == "" ||
        service == ""
    ) {

        alert("Please complete all fields.");

        return;

    }


    // Create the new pet object

    let newPet = new Pet(
        name,
        age,
        breed,
        gender,
        service
    );


    // Add the pet to the array

    petsList.push(newPet);


    // Display the pet in the table

    displayPets();


    // Clear the form fields

    document.getElementById(
        "petName"
    ).value = "";

    document.getElementById(
        "petAge"
    ).value = "";

    document.getElementById(
        "petBreed"
    ).value = "";

    document.getElementById(
        "petGender"
    ).value = "";

    document.getElementById(
        "petService"
    ).value = "";

}


// Delete a pet with confirmation

function deletePet(index) {

    let petName = petsList[index].name;

    const confirmation = confirm(
        "Are you sure you want to delete " +
        petName +
        "?"
    );


    if (confirmation) {

        petsList.splice(index, 1);

        displayPets();

    }

}


// Change between light mode and dark mode

$("#changeModeButton").click(function () {

    $("body").toggleClass("dark-mode");

    const isDark =
        $("body").hasClass("dark-mode");


    if (isDark) {

        $("#changeModeButton").text(
            "☀️ Change Mode"
        );

    }
    else {

        $("#changeModeButton").text(
            "🌙 Change Mode"
        );

    }

});


// Display the registered-pets table when the page loads

displayPets();