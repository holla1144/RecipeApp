let sendResponse = require('../sendResponse');
let Recipe = require('../../models/recipe_models/recipe');

let getManyRecipes = function(req, res) {
  const setRecipeCount = () => {
    return recipeCountParam === 'all' ? 0 : recipeCountParam;
  };

  let recipeCountParam = Number(req.params.count);
  let recipeQueryCount = setRecipeCount();
  let query = Recipe.find({}).sort({createdAt: -1}).limit(recipeQueryCount);

  query.exec(function(err, docs) {

    if (err) {
      sendResponse(res, 400, {'message': "Sorry, something went wrong"});
    } else {
      sendResponse(res, 200, {'data': docs});
    }
  })
};

module.exports = getManyRecipes;
