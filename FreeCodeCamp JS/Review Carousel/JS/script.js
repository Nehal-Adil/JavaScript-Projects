console.log('This is Review Carousel');

let reviews = [{
    id: 1,
    name: 'Beatrix Smith',
    job: 'UX Designer',
    img: 'https://i.postimg.cc/v8qrKV2m/pexels-victor-miyata-1845534.jpg',
    text: 'Hi! I am Beatrix Smith. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos a repudiandae nobis, aliquam quibusdam veniam voluptas harum facilis labore ex? Explicabo quidem inventore facilis. At.'
},
{
    id: 2,
    name: 'Mikasa Ackerman',
    job: 'Web Developer',
    img: 'https://i.postimg.cc/x1HLqFfk/pexels-mohamed-abdelghaffar-764529.jpg',
    text: 'Hi! I am Mikasa Ackerman. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos a repudiandae nobis, aliquam quibusdam veniam voluptas harum facilis labore ex? Explicabo quidem inventore facilis. At.'
},
{
    id: 3,
    name: 'Erwin Smith',
    job: 'Project Manager',
    img: 'https://i.postimg.cc/4NY6RxjQ/pexels-italo-melo-2379004.jpg',
    text: 'Hi! I am Erwin Smith. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos a repudiandae nobis, aliquam quibusdam veniam voluptas harum facilis labore ex? Explicabo quidem inventore facilis. At.'
},
{
    id: 4,
    name: 'Teresa Lisbon',
    job: 'Intern',
    img: 'https://i.postimg.cc/9fhZ9t0L/pexels-vinicius-wiesehofer-1130626.jpg',
    text: 'Hi! I am Teresa Lisbon. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos a repudiandae nobis, aliquam quibusdam veniam voluptas harum facilis labore ex? Explicabo quidem inventore facilis. At.'
},
]

const img = document.getElementById('profile-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevbtn = document.getElementById('prev-btn');
const nextbtn = document.getElementById('next-btn');
const randombtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showPerson();
})

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextbtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson();
})

prevbtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

randombtn.addEventListener('click', function () {
    currentItem = randomNumber();
    // console.log(currentItem);
    showPerson();
})

function randomNumber(){
    return Math.floor(Math.random() * reviews.length)
}