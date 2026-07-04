// Product Object Constructor
function Product(valueName, valuePrice, valueCategory) {
    this.name = valueName;
    this.price = valuePrice;
    this.category = valueCategory;
}

function registerProduct(event){
    //Testing the function and button connection
    //console.log("Connected")

    // Prevent the browser from being refresh
    event.preventDefault();
    //console.log(event);

    // 1. get the values
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;
    let productCategory = document.getElementById("productCategory").value;

    // 2. use the values
    // 2.1 Create the object
    let newProduct = new Product(productName, productPrice, productCategory);
    console.log(newProduct);

    displayCard(newProduct);
}

   


function displayCard(newProduct){
    // 2.2 display the product object in the browser (DOM manipulation)
    const container = document.getElementById("productList");

    //Add the card to the container
    container.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                ${newProduct.name}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${newProduct.price}</li>
            <li class="list-group-item">${newProduct.category}</li>
        </ul>
</div>
    `;
}