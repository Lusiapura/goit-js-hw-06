const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const list = document.querySelector('ul');
const listGallery = document.querySelector('.gallery');
const imgCard = images.map((image) => `<li><img src="${image.url}" alt="${image.alt}"></li>`).join("");
listGallery.insertAdjacentHTML('afterbegin', imgCard);

const li = document.querySelector('li');
li.classList.add("list-li");

const img = document.querySelector('img');
img.classList.add("list-img");

const listStyle = document.querySelector('.list-li');
listStyle.listStyleType = "none"
img.width = 200;
//console.log(imgCard);


