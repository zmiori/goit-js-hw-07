// =================================================
// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию в список
// ul.ingredients. Для создания DOM-узлов используй document.createElement().
// =================================================

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

// функция создания одной li
const createIngredient = ingredient => {
  const ingredientItemRef = document.createElement('li');
  ingredientItemRef.textContent = ingredient;

  return ingredientItemRef;
};

// функция добавления всех li массива в список
const addIngredients = array =>
  array.map(ingredient =>
    ingredientsRef.appendChild(createIngredient(ingredient)),
  );

addIngredients(ingredients);
