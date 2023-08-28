const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


const sizeChange = event => {
    const fontSize = event.target.value + "px";
    text.style.fontSize = fontSize;
}


input.addEventListener ("input", sizeChange); 