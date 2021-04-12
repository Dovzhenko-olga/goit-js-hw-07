const input = document.querySelector('#validation-input');

input.addEventListener('blur', isInputValid);

function isInputValid() {
    if(input.value.length === Number(input.dataset.length)) {
        input.classList ='valid';
    } else {
        input.classList = 'invalid';
}
};