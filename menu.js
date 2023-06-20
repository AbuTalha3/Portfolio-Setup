// document.querySelector('.menubars').addEventListener('click', () => {
//     document.querySelector('.heading-menu').classList.toggle('show');
//     document.querySelector('.menubars').classList.toggle('close-icon');
//   });
  
//   const navItems = document.querySelectorAll('.heading-menu li a');
  
//   navItems.forEach((item) => {
//     item.addEventListener('click', () => {
//       document.querySelector('.heading-menu').classList.toggle('show');
//       document.querySelector('.menubars').classList.toggle('close-icon');
//     });
//   });
const menu = document.querySelector(".heading-menu");
const closeicons = document.querySelector(".close");
const hamburger = document.querySelector(".menubars");

const showMenu = () => {
  hamburger.style.display = "none";
  closeicons.style.transform = "translateY(0)";
  menu.style.transform = "translateY(0)";

  showMenu();
};

const hideMenu = () => {
  hamburger.style.display = "block";
  closeicons.style.transform = "translateY(-20rem)";
  menu.style.transform = "translateY(-200%)";

  hideMenu();
};

hamburger.addEventListener("click", showMenu);


let body = document.querySelector('body')
let MENU = `<div>
<h1>Option1</h1>
</div>`

function MenU(){
  body.innerHTML = ""
  body.innerHTML = MENU
}