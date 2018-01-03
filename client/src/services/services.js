const services = (() => {

  const getAllCategories = () => {
    return fetch('http://localhost:3000/recipes/categories');
  };

  const addOneRecipe  = (data) => {
    return fetch('http://localhost:3000/api/recipes/new', {
      method: 'POST',
      body: data,
      headers: {
      }
    })
  };

  const getManyRecipes = (recipeCount) => {
    return fetch('http://localhost:3000/api/recipes/getMany/' + recipeCount);
  };

  const getOneRecipe = (recipeId) => {
    return fetch('http://localhost:3000/api/recipes/' + recipeId);
  };

  const likeRecipe = (recipeId) => {
    return fetch('http://localhost:3000/api/recipes/new', {
      method: 'POST',
      body: JSON.stringify({recipeId: recipeId}),
      headers: {
        "Content-Type": "application/json"
      }
    })
  };

  const loginUser = (candidateDate) => {
    return fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      body: JSON.stringify(candidateDate),
      headers: {
        "Content-Type": "application/json"
      }
    })
  };

  const signupUser = (data) => {
    return fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  const setToken = (token, callback) => {
    localStorage.setItem('reciprocityData', token);
    if (callback) {
      callback();
    }
  };

  const removeToken = () => {
    localStorage.removeItem('reciprocityData');
  };

  const getToken = () => {
    return localStorage.getItem('reciprocityData');
  };

  const verifyToken = (token) => {
    const payload = token.split('.')[1];
    const decodedToken = atob(payload);
    const expirationDate = JSON.parse(decodedToken).exp;
    const now = Date.now() / 1000;

    return now <= expirationDate;
  };

  return {
    getAllCategories: getAllCategories,
    addOneRecipe: addOneRecipe,
    getManyRecipes: getManyRecipes,
    getOneRecipe: getOneRecipe,
    likeRecipe: likeRecipe,
    loginUser: loginUser,
    signupUser: signupUser,
    getToken: getToken,
    setToken: setToken,
    removeToken: removeToken,
    verifyToken: verifyToken
  }
})();

module.exports = services;
