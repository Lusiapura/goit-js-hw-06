const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul');

const ingredientsEl = document.createElement('li');
ingredientsEl.innerHTML = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");
ingredientsEl.classList.add('item');
list.append(ingredientsEl);
console.log(ingredientsEl);