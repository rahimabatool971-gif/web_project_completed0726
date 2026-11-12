const products = [
    { id: 1, name: "Chocolate Truffle Cake", price: 15.00 },
    { id: 2, name: "Red Velvet Cupcake", price: 3.50 },
    { id: 3, name: "Butter Cookie Pack", price: 5.00 },
    { id: 4, name: "Blueberry Cheesecake", price: 18.00 }
];
let cart = [];
const productsGrid = document.getElementById("productsGrid");
const cartItemsList = document.getElementById("cartItems");
const totalPriceSpan = document.getElementById("totalPrice");
const searchInput = document.getElementById("searchInput");

function displayProducts(items) {
    productsGrid.innerHTML = "";
    items.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `<h3>${p.name}</h3><p>$${p.price.toFixed(2)}</p><button onclick="addToCart(${p.id})">Add to Cart</button>`;
        productsGrid.appendChild(card);
    });
}
function addToCart(id) {
    const prod = products.find(p => p.id === id);
    const item = cart.find(i => i.id === id);
    if(item) item.quantity++; else cart.push({...prod, quantity: 1});
    updateCart();
}
function updateCart() {
    cartItemsList.innerHTML = "";
    if(cart.length === 0) { cartItemsList.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`; totalPriceSpan.innerText = "0.00"; return; }
    let total = 0;
    cart.forEach((item, index) => {
        let t = item.price * item.quantity; total += t;
        const li = document.createElement("li");
        li.classList.add("cart-item");
        li.innerHTML = `<span>${item.name} (x${item.quantity})</span><span>$${t.toFixed(2)} <button onclick="removeFromCart(${index})">X</button></span>`;
        cartItemsList.appendChild(li);
    });
    totalPriceSpan.innerText = total.toFixed(2);
}
function removeFromCart(index) { cart.splice(index, 1); updateCart(); }
searchInput.addEventListener("input", (e) => {
    displayProducts(products.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase())));
});
function checkout() {
    if(cart.length === 0) { alert("Cart is empty!"); return; }
    alert("Order placed successfully!"); cart = []; updateCart();
}
displayProducts(products);