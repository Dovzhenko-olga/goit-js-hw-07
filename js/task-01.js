const listRef = document.querySelector('#categories')
const listCategoriesEl = listRef.querySelectorAll('.item');
const headingEl = listRef.querySelectorAll('h2')
listCategoriesEl.forEach(elem =>{
    console.log(`Категория: ${elem.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${elem.querySelectorAll('li').length}`);
})