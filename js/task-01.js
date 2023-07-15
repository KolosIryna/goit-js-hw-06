const listCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${listCategories.length}`);

listCategories.forEach(function listEl(item) {
    const title  = item.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    
    const liElCategories = item.querySelectorAll('li');
    console.log(`Elements: ${liElCategories.length}`)
  });
