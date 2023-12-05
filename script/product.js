let purchased = []
let products = JSON.parse(localStorage.getItem('storage'))
let main = document.querySelector('main')

function addToPage(product) {
  main.innerHTML = product.map((item,index) => {
    return `
    
    <div class="div shoe-section"  data-brand ='${item.brand}'>
        <img class="image" src="${item.url}" alt="${item.brand}">
        <h2 class="h2">${item.brand}</h2>
        <p class="p">${item.description}</p>
        <p class="p">R${item.price.toFixed(2)}</p>
        <button class="cart" value="${index}" data-add>Add to Cart</button>
    </div>

    `
  }).join('')  
}

// addToPage(products)
if(products.length === 0){
    main.innerHTML = `<div class="spinner-border text-danger" role="status">
    <span class="visually-hidden">Loading...</span>`
} else {
    addToPage(products)
}


// Function to show or hide sections based on the selected brand
function showShoes(brand) {
    // Hide all sections
    hideAllSections();

    // Show only the selected brand or all shoes
    if (brand === 'all') {
        showAllSections();
    } else {
        showSelectedBrandSections(brand);
    }
}

// Function to hide all sections
function hideAllSections() {
    let allSections = document.querySelectorAll('.shoe-section, .main-section');
    allSections.forEach(function (section) {
        section.style.display = 'none';
    });
}

// Function to show all sections
function showAllSections() {
    let allSections = document.querySelectorAll('.shoe-section, .main-section');
    allSections.forEach(function (section) {
        section.style.display = 'block';
    });
}

// Function to show sections of the selected brand
function showSelectedBrandSections(brand) {
    let selectedBrandSections = document.querySelectorAll('.shoe-section[data-brand="' + brand + '"]');
    selectedBrandSections.forEach(function (section) {
        section.style.display = 'block';
    });
}

// Initialize display when the page loads
window.onload = function () {
    showAllSections(); // or hideAllSections(); if you want to hide all sections by default
};

// Event listeners for brand links
document.getElementById('allShoesLink').addEventListener('click', function() {
    hideAllSections();
    showAllSections();
    showShoes('all');
});

document.getElementById('adidasLink').addEventListener('click', function() {
    hideAllSections();
    showShoes('adidas');

});

document.getElementById('converseLink').addEventListener('click', function() {
    showShoes('converse');
});

document.getElementById('pumaLink').addEventListener('click', function() {
    showShoes('puma');
});
document.getElementById('nikeLink').addEventListener('click', function() {
    showShoes('Nike');
});
document.getElementById('vanLink').addEventListener('click', function() {
    showShoes('vans');
});
