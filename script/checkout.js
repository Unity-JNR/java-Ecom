// Retrieve items added to the cart from the product page in local storage
let check = JSON.parse(localStorage.getItem("bought")) || [];

// Remove duplicate items based on the 'description' property
let unique = check.filter(
  (value, index, self) =>
  self.findIndex((obj) => obj.description === value.description) === index
);

// Display items as lists in the checkout page
let ul = document.querySelector(".cart");

// Check if the array of unique items is empty
if (unique.length === 0) {

  // If empty, display a spinner in the checkout page
  ul.innerHTML = `
    <div id="cen">
      <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>`;
} else {

  // If not empty, create and display HTML lists for each unique item
  ul.innerHTML += unique
    .map((item, index) => {
      return `
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0">${item.brand}</h6>
            <small class="text-body-secondary">${item.description}</small>
          </div>
          <span class="text-body-secondary">R${item.price}</span>
          <div class="input-group">
            <input type="number" class="quantity-input" placeholder="Qty" min="1" value="0" data-index=${index}>
          </div>
        </li>`;
    })
    .join("");
}

// Element to display the total price
let totalAmountDisplay = document.getElementById("priceTotal");

// Calculate the total amount considering the quantity of each item
function calculateTotalAmount() {
  return unique
    .reduce((total, item, index) => {
      const quantity = getQuantityInputValue(index);
      const totalPrice = calculateItemTotalPrice(item.price, quantity);
      return total + totalPrice;
    }, 0)
    .toFixed(2);
}

// Get the quantity of items from the input field
function getQuantityInputValue(index) {
  const quantityInput = document.querySelector(
    `.quantity-input[data-index="${index}"]`
  );
  return parseInt(quantityInput.value, 10) || 0;
}

// Calculate the total price for a single item times it it by its quantity number
function calculateItemTotalPrice(itemPrice, quantity) {
  return itemPrice * quantity;
}

// Update the display for the total amount
function updateTotalAmountDisplay() {
  const totalAmount = calculateTotalAmount();
  totalAmountDisplay.textContent = `Total Amount: R${totalAmount}`;
}

// Event listener for changes in the quantity input fields
ul.addEventListener("input", function (event) {
  if (event.target.classList.contains("quantity-input")) {

    // Handle changes in quantity and update the total amount display
    handleQuantityChange(event.target.dataset.index, event.target.value);
    updateTotalAmountDisplay();
  }
});

// Alert function  to show quantity changes
function handleQuantityChange(index, quantity) {
  // alert(`Quantity changed for item at index ${index} to ${quantity}`);
}

// Element to trigger the checkout process of button
let checkout = document.querySelector("#checkout");

// Function to clear the checkout page after purchase
function clear() {
  unique = [];
  localStorage.setItem("bought", JSON.stringify(unique));
  ul.innerHTML = "";
  totalAmountDisplay.innerHTML = "";
  location.reload();
}


// Execute the following code when the HTML document content has been fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the form element in the document
  let form = document.querySelector("form");

  // Add an event listener to the form for the "submit" event
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if the form passes its validation checks
    if (form.checkValidity()) {
      // If the form is valid, display a thank you alert message
      // and then clear both the form inputs and the checkout page
      alert("Thank you for your purchase");
      clearForm();
      clear();
    } else {
      // If the form is not valid, provide feedback to the user with an alert
      alert("Please fill in all required fields.");
    }
  });


  // Function to clear the form
  function clearForm() {

    // Clear the values of all input fields in the form
    let inputFields = form.querySelectorAll("input");
    inputFields.forEach(function (input) {
      input.value = "";
    });
  }
});

// Auto set the input spinner to 1 when adding an item
document.addEventListener("DOMContentLoaded", function () {

  // Set the quantity input for each item to 1 on page load
  unique.forEach((item, index) => {
    const quantityInput = document.querySelector(
      `.quantity-input[data-index="${index}"]`
    );
    quantityInput.value = 1;
  });

  // Update the total amount display based on the initial quantities 
  
  updateTotalAmountDisplay();
});
