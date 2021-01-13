const menuEl = document.querySelector(".ham");
console.log(menuEl);

const mobNav = document.querySelector(".nav-list");

document.addEventListener("click", function () {
  mobNav.classList.toggle("open");
});
