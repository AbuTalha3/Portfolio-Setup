
const menu = document.querySelector(".heading-menu");
const closeicons = document.querySelector(".close");
const hamburger = document.querySelector(".menubars");

const showMenu = () => {
  hamburger.style.display = "block";
  closeicons.style.transform = "translateY(0)";
  menu.style.transform = "translateY(0)";
};

const hideMenu = () => {
  closeicons.style.transform = "translateY(-20rem)";
  menu.style.transform = "translateY(-200%)";
};

hamburger.addEventListener("click", showMenu);
closeicons.addEventListener("click", hideMenu);
