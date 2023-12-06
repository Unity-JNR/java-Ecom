
let check = JSON.parse(localStorage.getItem('bought')) || [];

// Remove duplicates based on the 'description' property
let unique = check.filter((value, index, self) => self.findIndex(obj => obj.description === value.description) === index);



let ul = document.querySelector('.cart');

ul.innerHTML += unique.map((item,index) => {
   

    return `
    <li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
            <h6 class="my-0">${item.brand}</h6>
            <small class="text-body-secondary">${item.description}</small>
        </div>
        <span class="text-body-secondary">R${item.price}</span>
            <input type="number" class="quantity-input" placeholder="Qty" min="1" value="0" data-index=${index}>
    
            
        
    </li>
    
    `;
}).join('');

let totalAmountDisplay = document.getElementById('priceTotal');
// Function to calculate the total amount based on quantities and item prices
function calculateTotalAmount() {
    return unique.reduce((total, item, index) => {
        const quantity = getQuantityInputValue(index);
        const totalPrice = calculateItemTotalPrice(item.price, quantity);
        return total + totalPrice;
    }, 0).toFixed(2);
}

// Function to get the value of the quantity input field based on the index
function getQuantityInputValue(index) {
    const quantityInput = document.querySelector(`.quantity-input[data-index="${index}"]`);
    return parseInt(quantityInput.value, 10) || 0;
}

// Function to calculate the total price for a specific item
function calculateItemTotalPrice(itemPrice, quantity) {
    return (itemPrice * quantity);
}

// Function to update the total amount display
function updateTotalAmountDisplay() {
    const totalAmount = calculateTotalAmount();
    totalAmountDisplay.textContent = `Total Amount: R${totalAmount}`;
}

// Event listener for input changes within the 'ul' element
ul.addEventListener('input', function (event) {
    if (event.target.classList.contains('quantity-input')) {
        handleQuantityChange(event.target.dataset.index, event.target.value);
        updateTotalAmountDisplay();
    }
});

// Function to handle quantity changes
function handleQuantityChange(index, quantity) {
    alert(`You have selected ${quantity} ${quantity > 1 ? 'items' : 'item'} of ${unique[index].brand}.`);
}








