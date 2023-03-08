const btns = document.querySelectorAll(".btn");
const background = document.querySelector("body");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const color = e.currentTarget.classList;
    if (color.contains("btn1")) {
      background.style.setProperty("--bg-color", "#F5F5F5");
    } else if (color.contains("btn2")) {
      background.style.setProperty("--bg-color", "#2F4F4F");
    }
  });
});

/*============ Hide and show menu ======================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*============ Remove menu mobile ======================*/

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
