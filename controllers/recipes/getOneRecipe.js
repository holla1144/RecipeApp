let sendResponse = require('../sendResponse');
let Recipe = require('../../models/recipe_models/recipe');

let getOneRecipe = function(req, res) {
    let recipeQuery = req.params.recipeId;
    let query = Recipe.findOne({_id: recipeQuery});
    query.exec(function(err, docs) {
          if (err) {
              sendResponse(res, 400, {'message': "Sorry, we couldn't find the recipe you're looking for"});
          } else {
              sendResponse(res, 200, {'data': docs});
          }
    })

};
module.exports = getOneRecipe;
