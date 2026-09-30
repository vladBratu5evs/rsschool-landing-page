document.addEventListener("DOMContentLoaded", async () => {

let products = [];

const modalWrapper = document.querySelector(".modal-wrapper");
const menuGrid = document.querySelector(".menu-grid");

const response = await fetch('./products.json');
products = await response.json();

function renderModal(name) {
const product = products.find((p) => p.name === name);
if (!product) return;

modalWrapper.innerHTML = `
<div class="modal">

<div class="img-modal">
<img src="${product.image}" alt="${product.name}">
</div>

<div class="modal-contents">

<h2>${product.name}</h2>

<p>${product.description}</p>

<p>Size</p>
<div class="size">
<div>${product.sizes.s.size}</div>
<div>${product.sizes.m.size}</div>
<div>${product.sizes.l.size}</div>
</div>

<p>Additives</p>
<div class="additives">
<div>${product.additives[0].name}</div>
<div>${product.additives[1].name}</div>
<div>${product.additives[2].name}</div>
</div>

<div class="total-price">
<h2>Total:</h2>
<h2>$${product.price}</h2>
</div>

<div class="disclaimer">
<p>The total price depends on the selected size and additives. After adding the product, you can review it in My order.</p>
</div>

<div class="modal-close">
Close
</div>
</div>
</div>
`;
modalWrapper.classList.add("active");

modalWrapper.querySelector(".modal-close").addEventListener("click", () => {
modalWrapper.classList.remove("active");
modalWrapper.innerHTML = "";
});
}
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
        modalWrapper.classList.remove("active");
        modalWrapper.innerHTML = "";
        }
      });
menuGrid.addEventListener("click", (event) => {
const card = event.target.closest(".grid-item");
if (card) {
renderModal(card.dataset.name);
}
});
});