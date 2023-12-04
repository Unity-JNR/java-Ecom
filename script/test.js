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
    showShoes('nike');
});
document.getElementById('vanLink').addEventListener('click', function() {
    showShoes('van');
});
