const input = document.querySelector('#validation-input');


const inputCheck = event => {
    const symbolLength = input.dataset.length;

    const inputContentLength = input.value.length;
if (inputContentLength === Number(symbolLength)) {
    input.classList.remove('invalid')
    input.classList.add('valid')
} else {
    input.classList.remove('valid')
    input.classList.add('invalid')
}

}

input.addEventListener('blur', inputCheck);