module.exports.getAllCategies = fetch('http://localhost:3000/recipes/categories');

module.exports.addOneRecipe = (data) => {
  return fetch('http://localhost:3000/api/recipes/new', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
};

module.exports.getManyRecipes = (recipeCount) => {
  return fetch('http://localhost:3000/api/recipes/getMany/' + recipeCount);
};
