let random = document.querySelector('#code');
let randomNumber = document.querySelector('#price');
let check = JSON.parse(localStorage.getItem('bought')) || [];

// Remove duplicates based on the 'description' property
let unique = check.filter((value, index, self) => self.findIndex(obj => obj.description === value.description) === index);

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const randomString = Array.from({ length: 8 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');

random.innerHTML = `${randomString}`;

let x = Math.floor((Math.random() * 100) + 1);
randomNumber.innerHTML = `R${x}`;

let ul = document.querySelector('.cart');

// Display unique items in the UI
ul.innerHTML += unique.map(item => {
    return `
    <li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
            <h6 class="my-0">${item.brand}</h6>
            <small class="text-body-secondary">${item.description}</small>
        </div>
        <span class="text-body-secondary">R${item.price}</span>
    </li>`;
}).join('');
