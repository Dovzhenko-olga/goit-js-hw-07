const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('change', onInputChange);

function onInputChange (event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}
