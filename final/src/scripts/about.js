document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  const navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("open");
    menuButton.classList.add("hidden");
  });

  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && !menuButton.contains(event.target)) {
      navMenu.classList.remove("open");
      menuButton.classList.remove("hidden");
    }
  });
});
