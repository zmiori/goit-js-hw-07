// ====================================
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
// ======================================

const categoriesRef = document.querySelectorAll('.item');
// console.log(categoriesRef);
// const arrayOfCategories = [...categoriesRef];

// Посчитать и вывести количество категорий
const getCategoriesAmmount = array => {
  console.log(`В списке ${array.length} категории`);
};

// вывести заголовок каждой категории и количество элементов в ней.
const getCategoriesInfo = array =>
  array.forEach(item => {
    const itemName = item.querySelector('h2').textContent;
    const itemList = item.querySelector('ul').children;
    console.log(`Категория: ${itemName}`);
    console.log(`Количество элементов: ${itemList.length}`);
  });

getCategoriesAmmount(categoriesRef);
getCategoriesInfo(categoriesRef);
