const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const listIngredients = document.querySelector('#ingredients');
//   const list = [];
//   for ( const ingredient of ingredients) {
//     const listEl = document.createElement('li');
//     listEl.textContent =`${ingredient}`;
//     list.push(listEl);
// }
const list = ingredients.map(ingredient =>{
    const listEl = document.createElement('li');
    listEl.textContent =`${ingredient}`;
    return listEl;
});

listIngredients.append(...list);