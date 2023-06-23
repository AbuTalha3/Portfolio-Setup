/* eslint-disable no-unused-vars */
const works = [
  {
    id: 0,
    name: 'Tonic',
    company: 'Canopy',
    role: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.Lorem ispum...',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'images/card1.png',
    image_alt: 'Tonic project image',
    portfolioLive: 'https://abutalha3.github.io/Portfolio-Setup/',
    softLinkToRepo: 'https://github.com/AbuTalha3/Portfolio-Setup',
    live: 'See live',
    source: 'See-source',
    IconSource: '<i class="fa-brands fa-github"></i>',
    IconLive: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    company: 'Canopy',
    role: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.Lorem ispum...',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'images/card2.png',
    image_alt: 'Multi-Post project image',
    portfolioLive: 'https://abutalha3.github.io/Portfolio-Setup/',
    softLinkToRepo: 'https://github.com/AbuTalha3/Portfolio-Setup',
    live: 'See live',
    source: 'See-source',
    IconSource: '<i class="fa-brands fa-github"></i>',
    IconLive: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
  },
  {
    id: 2,
    name: 'Tonic',
    company: 'Canopy',
    role: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.Lorem ispum...',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: './images/card3img.png',
    image_alt: 'Tonic project image',
    portfolioLive: 'https://abutalha3.github.io/Portfolio-Setup/',
    softLinkToRepo: 'https://github.com/AbuTalha3/Portfolio-Setup',
    live: 'See live',
    source: 'See-source',
    IconSource: '<i class="fa-brands fa-github"></i>',
    IconLive: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
  },
  {
    id: 3,
    name: 'Multi-Post Stories',
    company: 'Canopy',
    role: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.Lorem ispum...',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: './images/card4img.png',
    image_alt: 'Multi-Post project image',
    portfolioLive: 'https://abutalha3.github.io/Portfolio-Setup/',
    softLinkToRepo: 'https://github.com/AbuTalha3/Portfolio-Setup',
    live: 'See live',
    source: 'See-source',
    IconSource: '<i class="fa-brands fa-github"></i>',
    IconLive: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
  },
];

document.getElementById('portfolio').innerHTML = works.map((item) => `
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
              <ul class = "list-inline">
                <li class = "list-inline-item">${item.company}</li>
                <li class = "list-inline-itemp"><img src="./images/Counter.png" alt="A dot"></li>
                <li class = "list-inline-item">${item.role}</li>
                <li class = "list-inline-itemp"><img src="./images/Counter.png" alt="A dot"></li>
                <li class = "list-inline-item">${item.year}</li>
              </ul>
            </div>
            <p>${item.description}</p>
            <div class="programes">
              <ul class="tag">
                <li>${item.tags[0]}</li>
                <li>${item.tags[1]}</li>
                <li>${item.tags[2]}</li>
              </ul>
            </div>
            <button class="card-button" id="${item.id}" onclick = "display(${item.id})">See project</button>
          </div>
          </div>
          <div class ="container" id="item-${item.id}">
          <i class="fas fa-times closecross" onclick = "nodisplay(${item.id})"></i>
          <h3 class ="cardtitle">${item.name}</h3>
          <div class ="expertise">
              <ul>
                <li>CANOPY</li>
                <li><img src="./images/Counter.png" alt="A dot"></li>
                <li>Back End Dev</li>
                <li><img src="./images/Counter.png" alt="A dot"></li>
                <li>2015</li>
              </ul>
            </div>
            <div>
            <img class="Popupimage" src="${item.image}">
            </div>
            <div>
            <p class="modal-p">${item.description}</p>
            </div>
            <div class="programes">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
            <div class="m-button">
            <a href="${item.portfolioLive}">${item.live} ${item.IconLive} </a>
            <a href="${item.softLinkToRepo}">${item.source} ${item.IconSource} </a>           
            </div>
            </div> 
          
                   
  `);

function display(itemId) {
  const container = document.getElementById(`item-${itemId}`);
  container.style.display = 'block';
}
function nodisplay(itemId) {
  const container = document.getElementById(`item-${itemId}`);
  container.style.display = 'none';
}
