
function Student(nameValue, ageValue, courseValue) {

    this.name = nameValue;
    this.age = ageValue;
    this.course = courseValue;

}

function registerStudent(){
    event.preventDefault();
    // a. Pull the values from the input fields
    
    let studentName = document.getElementById
    ("studentName").value;

    let studentAge = document.getElementById
    ("studentAge").value;

    let studentCourse = document.getElementById
    ("studentCourse").value;


    // b. Create a new student object with those values

    let newStudent = new Student(
        studentName,
        studentAge,
        studentCourse
    );


    // c. Print the student object in the console

    console.log(newStudent);

    let body = document.getElementById("body");

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${newStudent.name}</td>
        <td>${newStudent.age}</td>
        <td>${newStudent.course}</td>
        <td> <button class="btn btn-danger" >Delete</button> </td>
    `;

    body.appendChild(row);
}