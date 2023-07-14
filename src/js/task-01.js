const listCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${listCategories.length}`);

listCategories.forEach(function listEl(item) {
    const title  = item.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    
    const liElCategories = item.querySelectorAll('li');
    console.log(`Elements: ${liElCategories.length}`)
  });


// Напиши скрипт, який:

// 1.Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2.Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
// і кількість елементів в категорії (усіх <li>, вкладених в нього).

