console.log('My Calculator');

let string= '';
let display = document.querySelector('.input');
let buttons = Array.from(document.querySelectorAll('.button'));
console.log(buttons);

for(item of buttons){
    item.addEventListener('click', function (e) {
        buttonText = e.target.innerText;
        console.log(buttonText);

        if (buttonText == 'AC') {
            string = '';
            display.value = string;
        }
        else if (buttonText == '='){
            display.value = eval(string);
        }
        else{
            string += buttonText;
            display.value = string;
        }

    });
}