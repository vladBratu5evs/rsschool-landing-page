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

<h3>${product.name}</h3>

<p>${product.description}</p>

<p>Size</p>
<div class="size">
<div class="size-item">${product.sizes.s.size}</div>
<div class="size-item">${product.sizes.m.size}</div>
<div class="size-item">${product.sizes.l.size}</div>
</div>

<p>Additives</p>
<div class="additives">
<div class="additive-item">${product.additives[0].name}</div>
<div class="additive-item">${product.additives[1].name}</div>
<div class="additive-item">${product.additives[2].name}</div>
</div>

<div class="total-price">
<h3>Total:</h3>
<h3>$${product.price}</h3>
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
document.body.classList.toggle('lock-scroll');

modalWrapper.querySelector(".modal-close").addEventListener("click", () => {
modalWrapper.classList.remove("active");
document.body.classList.remove('lock-scroll');
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