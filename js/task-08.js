const createBoxes = (amount) => {
    for (let i = 1; i <= amount; i += 1) {
        console.log(document.createElement('div'));
    }
};

function getRandomColor() {
    const color = function () { return Math.floor(Math.random()*256) };
    return `rgb( ${color},${color},${color})`;
}

 const input = document.querySelector('input');
 const renderBtn = document.querySelector('#controls button[data-action="render"]');
 const destroyBtn = document.querySelector('#controls button[data-action="destroy"]');
 const boxes = document.querySelector('#boxes');
 
renderBtn.addEventListener('click', () => {
boxes.insertAdjacentHTML('beforeend', `${createBoxes(Number(input.value))}`);
let size = 30;
const boxArray = boxes.querySelectorAll('div');
boxArray.forEach(box => {
    box.style.backgroundColor = `${getRandomColor()}`;
    box.style.width = `${size += 10}px`;
    box.style.height = `${size += 10}px`;
});
});

destroyBtn.addEventListener('click', () => {
    boxes.innerHTML = ''
});

// function getRandColor() {
//     const r = Math.floor(Math.random() * (256)),
//           g = Math.floor(Math.random() * (256)),
//           b = Math.floor(Math.random() * (256));
//     return `# ${r.toString(16)} ${g.toString(16)} ${b.toString(16)}`;
// }