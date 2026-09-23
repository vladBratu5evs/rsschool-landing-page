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
    addEventListener('keydown', (event) => {
        if (event.key === 'Escape')
        navMenu.classList.remove('is-active');
        burgerBtn.classList.remove('open');
        document.body.classList.remove('lock-scroll');
      });
    }});