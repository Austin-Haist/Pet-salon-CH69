function updateProfile() {

    // 1. Get the h1
    let student = document.getElementById("studentName");

    // 2. Change the name
    student.textContent = "Maria Lopez";

    // 3. Get both paragraphs using the class
    let info = document.getElementsByClassName("info");

    // 4. Change the first paragraph
    info[0].textContent = "Grade: A";

    // 5. Change the second paragraph
    info[1].textContent = "Status: Active";

    // 6. Make the first paragraph green
    info[0].style.color = "green";

    // 7. Make the second paragraph blue
    info[1].style.color = "blue";

}