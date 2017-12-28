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

module.exports.getOneRecipe = (recipeId) => {
  return fetch('http://localhost:3000/api/recipes/' + recipeId);
};

module.exports.likeRecipe = (recipeId) => {
  return fetch('http://localhost:3000/api/recipes/new', {
    method: 'POST',
    body: JSON.stringify({recipeId: recipeId}),
    headers: {
      "Content-Type": "application/json"
    }
  })
};

module.exports.loginUser = (candidateDate) => {
  return fetch('http://localhost:3000/api/users/login', {
    method: 'POST',
    body: JSON.stringify(candidateDate),
    headers: {
      "Content-Type": "application/json"
    }
  })
};

module.exports.signupUser = (data) => {
  return fetch('http://localhost:3000/api/users/new', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
};
