const API = "https://dummyjson.com/products";

async function fetchData() {
    const response = await fetch(API);
    const data = await response.json();
    
    const productsList = document.getElementById("products-list");
    
    if (data?.products?.length > 0) {
        for (let i = 0; i < data.products.length; i++) {
            const div = document.createElement("div");
            div.className = "product-card"; // Add class for styling
            div.innerText = data.products[i].title; // Set text to product title
            productsList.appendChild(div); // Append to products list
        }
    } else {
        productsList.innerText = "No products available."; // Message if no products found
    }
}

fetchData(); // Call the function to fetch products
