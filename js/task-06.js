const input = document.querySelector('#validation-input');

input.addEventListener('blur', isInputValid);

function isInputValid() {
    if(input.value.length === Number(input.dataset.length)) {
        input.classList ='valid';
    } else {
        input.classList = 'invalid';
}
};
// if(input.value.length === Number(input.dataset.length)) {
//     input.classList.remove('invalid');
//     input.classList.add('valid');
// } else {
//     input.classList.add('invalid');
//     input.classList.remove('valid');
// }