console.log('This is a Simple Counter');

//set up an initial value
let count =0;

//select span and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

console.log(btns);

//now we target each buttons using forEach
btns.forEach(function (item) {
    // console.log(item);
    item.addEventListener('click', function (e) {
        const target = e.currentTarget.classList;
        // console.log(target);
        if (target.contains("decrease")) {
            count--;
        }
        else if (target.contains("reset")) {
            count = 0;
        }
        else if(target.contains("increase")){
            count++;
        }
        if (count>0) {
            value.style.color = 'green'
        }
        else if (count<0) {
            value.style.color = 'darkred'
        }
        else{
            value.style.color = 'black'
        }
        value.textContent = count;
    })
})