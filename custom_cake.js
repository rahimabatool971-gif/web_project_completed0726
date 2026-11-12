const sizeSelect = document.getElementById("cakeSize");
const flavorSelect = document.getElementById("cakeFlavor");
const summarySize = document.getElementById("summarySize");
const summaryFlavor = document.getElementById("summaryFlavor");
const totalPriceSpan = document.getElementById("totalPrice");

function updatePrice() {
    let price = parseFloat(sizeSelect.value) + parseFloat(flavorSelect.value);
    summarySize.innerText = sizeSelect.options[sizeSelect.selectedIndex].text.split(" ")[0] + " Pound";
    summaryFlavor.innerText = flavorSelect.options[flavorSelect.selectedIndex].text.split(" ")[0];
    totalPriceSpan.innerText = price.toFixed(2);
}

sizeSelect.addEventListener("change", updatePrice);
flavorSelect.addEventListener("change", updatePrice);

function orderCake() {
    alert("Custom cake order placed successfully! 🎂");
}