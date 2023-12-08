// gets items u added to the cart from product page in localstorage
let check = JSON.parse(localStorage.getItem("bought")) || [];

// Remove duplicates based on the 'description' property
let unique = check.filter(
  (value, index, self) =>
    self.findIndex((obj) => obj.description === value.description) === index
);
// displays items as lists in checkout page
let ul = document.querySelector(".cart");

if (unique.length === 0) {
  //if array is empty display spinner
  ul.innerHTML = `
        <div id="cen">
            <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>`;
} else {
  ul.innerHTML += unique
    .map((item, index) => {
      // display items into a list which is your cart
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
// total price will display here
let totalAmountDisplay = document.getElementById("priceTotal");
//used to calculate the total price if multiple items appear
function calculateTotalAmount() {
  return unique
    .reduce((total, item, index) => {
      const quantity = getQuantityInputValue(index);
      const totalPrice = calculateItemTotalPrice(item.price, quantity);
      return total + totalPrice;
    }, 0)
    .toFixed(2);
}
// function used to get the quanity of items
function getQuantityInputValue(index) {
  const quantityInput = document.querySelector(
    `.quantity-input[data-index="${index}"]`
  );
  return parseInt(quantityInput.value, 10) || 0;
}
//function takes the item price and number of quantity and times it together
function calculateItemTotalPrice(itemPrice, quantity) {
  return itemPrice * quantity;
}
//function used to display the total amount
function updateTotalAmountDisplay() {
  const totalAmount = calculateTotalAmount();
  totalAmountDisplay.textContent = `Total Amount: R${totalAmount}`;
}

ul.addEventListener("input", function (event) {
  if (event.target.classList.contains("quantity-input")) {
    handleQuantityChange(event.target.dataset.index, event.target.value);
    updateTotalAmountDisplay();
  }
});
// alert will show u how many quantitys u added
function handleQuantityChange(index, quantity) {
  // alert(`Quantity changed for item at index ${index} to ${quantity}`);
}

let checkout = document.querySelector("#checkout");
// used to clear checkout page when item has been purchased
function clear() {
  unique = [];
  localStorage.setItem("bought", JSON.stringify(unique));
  ul.innerHTML = "";
  totalAmountDisplay.innerHTML = "";
  location.reload();
}
/*
This JavaScript code attaches a function to a form's submission event. It prevents the default form submission, checks if the form is valid, and either shows a "Thank you" alert and clears the form if valid, or alerts the user to fill in required fields if not valid. */

document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Check if the form is valid
    if (form.checkValidity()) {
      // If the form is valid, show the alert and clear the form
      alert("Thank you for your purchase");
      clearForm();
      clear();
    } else {
      // If the form is not valid, you can optionally provide feedback to the user
      alert("Please fill in all required fields.");
    }
  });

  // Function to clear the form
  function clearForm() {
    // Clear the values of all input fields in the form
    var inputFields = form.querySelectorAll("input");
    inputFields.forEach(function (input) {
      input.value = "";
    });
  }
});

// Auto set the input spinner to 1 when adding an item
document.addEventListener("DOMContentLoaded", function () {
  unique.forEach((item,index) => {
    const quantityInput = document.querySelector(
      `.quantity-input[data-index="${index}"]`
    );
    quantityInput.value = 1;
  });
  updateTotalAmountDisplay();
});
