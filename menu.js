const menu = document.querySelector('.mobile');
const closeicons = document.querySelector('.close');
const hamburger = document.querySelector('.menubars');
const contentMenu = document.querySelector('.content_menu');

const showMenu = () => {
  menu.classList.toggle('active');
};

const hideMenu = () => {
  menu.classList.toggle('active');
};

const contentMenuFunc = () => {
  menu.classList.toggle('active');
};

hamburger.addEventListener('click', showMenu);
contentMenu.addEventListener('click', contentMenuFunc);
closeicons.addEventListener('click', hideMenu);

