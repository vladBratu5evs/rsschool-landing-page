document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");

  const currentTheme = localStorage.getItem("theme") || "light";

  if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");

      const newTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
    });
  }

  const burgerBtn = document.getElementById('burger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('is-active');
      burgerBtn.classList.toggle('open');
      document.body.classList.toggle('lock-scroll');
    });

    const navLinks = navMenu.querySelectorAll('a');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
        burgerBtn.classList.remove('open');
        document.body.classList.remove('lock-scroll');
      });
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape')
        navMenu.classList.remove('is-active');
        burgerBtn.classList.remove('open');
        document.body.classList.remove('lock-scroll');
      });
    }

  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  const controls = [
  document.getElementById('first-control'),
  document.getElementById('second-control'),
  document.getElementById('third-control')
  ];

  const sliderItems = document.querySelectorAll('.slider-item');

  let currentIndex = 0;
  let totalItems = controls.length;

  function moveSlider () {
  sliderItems.forEach((item) => {
    item.style.setProperty('transform', `translateX(-${currentIndex * 100}%)`);
  });

  controls.forEach((ctrl, index) => {
    if (index === currentIndex) {
      ctrl.classList.add('active');
    } else {
      ctrl.classList.remove('active');
    }
      });
    }

if (nextBtn && prevBtn){
nextBtn.addEventListener('click', () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  moveSlider();
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1;
  }
  moveSlider();
});
}

let products = [];
async function loadProducts() {
const response = await fetch('./products.json');
products = await response.json();
renderCards('coffee');
}
loadProducts();

const menuGrid = document.querySelector(".menu-grid");

function renderCards(category) {
menuGrid.innerHTML = '';
const filteredItems = products.filter(
item => item.category === category
);
filteredItems.forEach(item => {
const card = `<div class="grid-item">
<img src="${item.image}" alt="${item.name}">
<div class="grid-content">
<p>${item.name}</p>
<p>${item.description}</p>
<p>$${item.price}</p>
</div>
</div>`;
menuGrid.insertAdjacentHTML('beforeend', card);
});
}


const buttons = document.querySelectorAll(".icon");
buttons.forEach(button => {
button.addEventListener("click", () => {
const category = button.dataset.category;
buttons.forEach(btn => btn.classList.remove("active"));
button.classList.add("active");
renderCards(category);
});
});


const refreshBtn = document.querySelector('.refresh');
if (refreshBtn) {
  refreshBtn.addEventListener('click', () => {
    menuGrid.classList.add('show-all');
    refreshBtn.classList.add('hidden');
  })
}
});