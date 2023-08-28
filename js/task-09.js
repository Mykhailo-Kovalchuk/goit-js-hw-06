const button = document.querySelector('.change-color');
const bodySection = document.querySelector('body');
const colorName = document.querySelector('.color');


const onClickButton = () => {
  bodySection.style.backgroundColor = colorName.textContent = getRandomHexColor();
}

button.addEventListener('click', onClickButton);



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
