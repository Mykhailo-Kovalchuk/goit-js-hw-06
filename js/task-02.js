const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
console.log(ingredientsList);


const ingredientsCopy = ingredients.map(element => {
  const liElelement = document.createElement("li");
  liElelement.textContent = element;
  liElelement.classList.add('item')
  return liElelement;
});

ingredientsList.append(...ingredientsCopy);










// Шаблонна розмітка для того ж. 
// const itemstLi = `<li>   
// ${ingredients}
// </li>`
//  1)  class в такий тег теж можна додати - class = 'Назва класу' . також Append теж не вдасться використати. Натомість можна використовувати .InsertAdjacentHTML(позиція, elementякий передаємо) *позиція-beforebegin,beforeend,after...
//  2) є ще варіант з властивістю .innerHTML - наприклад є умовний list, тоді list.innerHTML = itemstLi; - відбулося те що фактично ми перезаписали list на itemstLi.