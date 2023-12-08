let purchased = [];
// gets your  localstorage you created in admin
let products = JSON.parse(localStorage.getItem("storage"));
//main is used to call the tag so u can display the items in there
let main = document.querySelector("main");
//function addtopage will render the items that are in local storage
function addToPage(product) {
  if (product.length === 0) {
    main.innerHTML = "<p>no items found</p>";
    //when item does not appear inside the array
  } else {
    //The items will appear on the main
    main.innerHTML = product
      .map((item, index) => {
        return `
     
     <div class="div shoe-section"  data-brand ='${item.brand}'>
         <img class="image" src="${item.url}" alt="${item.brand}">
         <h2 class="h2">${item.brand}</h2>
         <p class="p">${item.description}</p>
         <p class="p">R${item.price}</p>
         <button class="cart" value="${index}" data-add>Add to Cart</button>
     </div>
    
     `;
      })
      .join("");
  }
}

// addToPage(products)
//if the products page is empty a spinner will appear
if (products.length === 0) {
  main.innerHTML = `<div id="cen">
            <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
  `;
} else {
  addToPage(products);
}

//this function will run if items you search for are in the array
function search() {
  let search = document.getElementById("input").value.toLowerCase();
  let filter = products.filter((item) => {
    return item.brand.toLowerCase().includes(search);
  });
  addToPage(filter);
}

document.getElementById("input").addEventListener("input", search);
//this will sort the prices from high to low or low to high
function sort() {
  let sort = document.getElementById("select").value;
  let filter = products.filter((item) => {
    return item.brand.toLowerCase();
  });
  if (sort === "least") {
    filter.sort((a, b) => a.price - b.price);
  } else {
    filter.sort((a, b) => b.price - a.price);
  }
  addToPage(filter);
}

document.getElementById("select").addEventListener("change", sort);

// Function to show or hide sections based on the selected brand
function showShoes(brand) {
  // Hide all sections
  hideAllSections();

  // Show only the selected brand or all shoes
  if (brand === "all") {
    showAllSections();
  } else {
    showSelectedBrandSections(brand);
  }
}

// Function to hide all sections
function hideAllSections() {
  let allSections = document.querySelectorAll(".shoe-section, .main-section");
  allSections.forEach(function (section) {
    section.style.display = "none";
  });
}

// Function to show all sections
function showAllSections() {
  let allSections = document.querySelectorAll(".shoe-section, .main-section");
  allSections.forEach(function (section) {
    section.style.display = "block";
  });
}

/*
This code defines a function, showSelectedBrandSections, that displays specific sections of a shoe collection based on the selected brand. When the page loads, it initially shows all shoe sections. Each brand link, such as "Adidas" or "Nike," has a click event listener that hides all sections, then shows the relevant sections for the clicked brand,*/
function showSelectedBrandSections(brand) {
  let selectedBrandSections = document.querySelectorAll(
    '.shoe-section[data-brand="' + brand + '"]'
  );
  selectedBrandSections.forEach(function (section) {
    section.style.display = "block";
  });
}

// Initialize display when the page loads
window.onload = function () {
  showAllSections();
};

// Event listener for the "allShoesLink" element
document.getElementById("allShoesLink").addEventListener("click", function () {

  // Hide all sections on the page
  hideAllSections();

  // Show all sections related to shoes
  showAllSections();

  // Display all shoes, regardless of brand
  showShoes("all");
});

// Event listener for the "adidasLink" element
document.getElementById("adidasLink").addEventListener("click", function () {

  // Hide all sections on the page
  hideAllSections();

  // Display shoes with the brand "Adidas"
  showShoes("adidas");
});

// Event listener for the "converseLink" element
document.getElementById("converseLink").addEventListener("click", function () {

  // Display shoes with the brand "Converse"
  showShoes("converse");
});

// Event listener for the "pumaLink" element
document.getElementById("pumaLink").addEventListener("click", function () {

  // Display shoes with the brand "Puma"
  showShoes("puma");
});

// Event listener for the "nikeLink" element
document.getElementById("nikeLink").addEventListener("click", function () {

  // Display shoes with the brand "Nike"
  showShoes("Nike");
});

// Event listener for the "vanLink" element
document.getElementById("vanLink").addEventListener("click", function () {

  // Display shoes with the brand "Vans"
  showShoes("vans");
});


/*


This function, addToCart, adds a product from the 'products' array to the 'purchased' array at the specified 'index' and then stores the updated 'purchased' array in the browser's local storage as a JSON string. Essentially, it simulates adding items to an online shopping cart and ensures the cart contents persist even if the user refreshes the page.



*/
function addToCart(index) {
  purchased.push(products[index]);
  localStorage.setItem("bought", JSON.stringify(purchased));
}

/*

This code makes it so when we click something on the page called "main," it checks if the thing we clicked has a special tag called "data-add." If it does, it tells the computer to add that thing to the shopping cart.

*/
main.addEventListener("click", function name(event) {
  if (event.target.hasAttribute("data-add")) {
    addToCart(event.target.value);
  }
});
