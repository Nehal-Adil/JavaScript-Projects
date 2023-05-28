console.log('This is Toggle NavBar');

const toggleBtn = document.querySelector('.toggle-menu')
const navLinks = document.querySelector('.nav-links')

// directly targets the class

toggleBtn.addEventListener('click', function () {
    navLinks.classList.toggle('show-links')
})