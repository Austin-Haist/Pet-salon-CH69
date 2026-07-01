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

let petsList = [pet1, pet2, pet3];

function displayPets() {
    let output = "<ol>";

    for (let i = 0; i < petsList.length; i++) {
        output += "<li>" + petsList[i].name + "</li>";
    }

    output += "</ol>";

    document.getElementById("pets").innerHTML = output;
}

displayPets();