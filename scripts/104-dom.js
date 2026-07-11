function update(){

    let title = document.getElementById("title");

    title.textContent = "<i> Hello, class! </i>";


    //2. get the text elements (p)
    let pList = document.getElementsByClassName("text");
    console.log(pList);

    //2.1 Change the p1 color to red, and p2 to blue
    // Ask google: JS change color

    pList[0].style.color = "red";
    pList[1].style.color = "blue";
}
function addItem() {
    let input = document.getElementById("itemInput");

    let itemText = input.value;

    let list = document.getElementById("itemList");

    list.innerHTML += "<li>" + itemText + "</li>";

    input.value = "";
}