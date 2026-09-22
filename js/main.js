document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");

  const currentTheme = localStorage.getItem("theme") || "light";

  if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      // Toggle the dark-theme class on the <body> tag
      document.body.classList.toggle("dark-theme");

      const newTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
    });
  }
});