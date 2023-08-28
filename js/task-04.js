const counterValueBox = document.querySelector('#counter');
console.log(counterValueBox);

//plus+
const buttonPlus = document.querySelector('[data-action="increment"]');
//minus-
const buttonMinus = document.querySelector('[data-action="decrement"]');
//value
let beginingValue = document.querySelector('#value');


let counterValue = 0;


buttonPlus.addEventListener('click', () => {
    counterValue += 1;
    beginingValue.textContent = counterValue;

    // console.log('click')
});

buttonMinus.addEventListener('click', () => {
counterValue -= 1;
beginingValue.textContent = counterValue
});








