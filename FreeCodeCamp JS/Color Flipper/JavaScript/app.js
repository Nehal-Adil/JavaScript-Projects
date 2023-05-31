console.log('This is Color Flipper');

const colors = ["aqua", "green", "red", "rgba(133, 122, 200)", "#f15025", "cyan", "yellow", "pink", "rgba(50,70,800)", "#E2CFFF", "#33FFD7", "rgba(120,15,400)", "#FF5733", "orange", "#FCC370", "#70E3FC", "#FFD2F2", "#CFCFCF", "#000000", "rgb(240, 172, 172)", "rgb(172, 214, 240)", "rgb(224, 86, 224)"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    // console.log(document.body);
    console.log('Clicked');

    //getting a random number to slect a color from colors.
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

//function to get a random number
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}