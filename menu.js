
const menu = document.querySelector(".mobile");
const closeicons = document.querySelector(".close");
const hamburger = document.querySelector(".menubars");
const contentMenu = document.querySelector('.content_menu');

const showMenu = () => {
  menu.classList.toggle('active')
};

const hideMenu = () => {
  menu.classList.toggle('active')
};

const contentMenuFunc = () => {
  menu.classList.toggle('active')
};

hamburger.addEventListener("click", showMenu);
contentMenu.addEventListener("click", contentMenuFunc);
closeicons.addEventListener("click", hideMenu);

const theList =[
  { id:1,
    name:"Tonic",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image:"images/card1.png",
    portfolioLive:"https://abutalha3.github.io/Portfolio-Setup/",
    softLinkToRepo: "https://github.com/AbuTalha3/Portfolio-Setup",
    live:"see live",
    source: "See-source",
    IconSource: '<i class="fa-brands fa-github"></i>',
    IconLive: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
  },
  { id:1,
    name:"Tonic",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image:"images/card2.png",
    portfolioLive:"https://abutalha3.github.io/Portfolio-Setup/",
    softLinkToRepo: "https://github.com/AbuTalha3/Portfolio-Setup",
    live:"see live",
    source: "See-source",
    IconSource: '<i class="fa-brands fa-github"></i>',
    IconLive: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
  },
  { id:1,
    name:"Tonic",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image:"./images/card3img.png",
    portfolioLive:"https://abutalha3.github.io/Portfolio-Setup/",
    softLinkToRepo: "https://github.com/AbuTalha3/Portfolio-Setup",
    live:"see live",
    source: "See-source",
    IconSource: '<i class="fa-brands fa-github"></i>',
    IconLive: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
  },
  { id:1,
    name:"Tonic",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image:"./images/card4img.png",
    portfolioLive:"https://abutalha3.github.io/Portfolio-Setup/",
    softLinkToRepo: "https://github.com/AbuTalha3/Portfolio-Setup",
    live:"see live",
    source: "See-source",
    IconSource: '<i class="fa-brands fa-github"></i>',
    IconLive: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
  }
]

document.getElementById('portfolio').innerHTML = theList.map((item)=>{
  return`
  <div id="cardone" class="card">
  <div class="card-image">
            <img class="SSimage" src="${item.image}"
              alt="A school dropout detail who became a web designer at facebook">
            <img class="BSimage" src="${item.image}"
              alt="An image with a tenis ball, a swiming pool ladder and a decorative plant">
          </div>
          <div class="card-text">
            <h3>${item.name}</h3>
            <div class="expertise">
              <ul>
                <li>CANOPY</li>
                <li><img src="./images/Counter.png" alt="A dot"></li>
                <li>Back End Dev</li>
                <li><img src="./images/Counter.png" alt="A dot"></li>
                <li>2015</li>
              </ul>
            </div>
            <p>${item.description}</p>
            <div class="programes">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
            <button>See project</button>
          </div>
          </div>
          
  `
})