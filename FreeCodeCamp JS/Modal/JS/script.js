console.log('This is JS Modal')

const modalBtn = document.querySelector('.modal-btn');
const closebtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');

modalBtn.addEventListener('click', function () {
    // console.log(modal.classList)
    modal.classList.add('open-modal');
})

closebtn.addEventListener('click', function () {
    // console.log(modal.classList)
    modal.classList.remove('open-modal');
})