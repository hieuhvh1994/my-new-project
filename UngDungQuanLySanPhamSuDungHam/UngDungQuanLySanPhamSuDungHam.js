
let products = []

let productsList =  "<tr id='header'>" +
    "<th id='product_name_tag'><h4>Product Name</h4></th>" +
    "<th></th>" +
    "<th></th>" +
    "<th id='total_product'></th>" +
    "</tr>"

document.getElementById("table_products").innerHTML = productsList

document.getElementById("total_product").innerHTML = products.length +" products"

function addProduct(newProduct) {
    products.push(newProduct)
    document.getElementById("new_product_box").value = ""

    // console.log(products.length)
    // document.getElementById("total_product").innerHTML = products.length +" products"
    showProducts()
    return products


}



function showProducts() {
    console.log(products.length)


    document.getElementById("table_products").innerHTML = ""

    productsList = "<tr id='header'>" +
        "<th id='product_name_tag'><h4>Product Name</h4></th>" +
        "<th></th>" +
        "<th></th>" +
        "<th id='total_product'></th>" +
        "</tr>"


    for (let i=0; i<products.length; i++) {
        productsList +=     "<tr>" +
                            "<td>"+ products[i] +"</td>" +
                            "<td><input type='button' class='edit_btn' id="+i + " value='Edit' onclick='editProduct(this.id)'></td>" +
                            "<td><input type='button' class='delete_btn' id="+i+" value='Delete' onclick='deleteProduct(this.id)'></td>" +
                            "<td></td>" +
                            "</tr>"


    }

    console.log(productsList)
    console.log(products)
    document.getElementById("table_products").innerHTML = productsList
    document.getElementById("total_product").innerHTML = products.length +" products"

}

function editProduct(id) {
    let editValue = prompt("Enter new name of the product: ")
    products[id] = editValue
    showProducts()
    return products
}

function deleteProduct(id) {
    products.splice(id,1)
    showProducts()
    return products
}



