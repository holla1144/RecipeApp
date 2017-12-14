let sendResponse = require('../sendResponse');
let Recipe = require('../../models/recipe');

let addOneRecipe = function(req, res) {
    let userRecipe = req.body;

    if (!userRecipe.title ||  !userRecipe.description || !userRecipe.ingredients || !userRecipe.category) {
        sendResponse(res, 400, {'message': 'Title, Description, Ingredients, and Category are required'});
    } else {

        userRecipe = new Recipe({
            title:  userRecipe.title,
            description: userRecipe.description,
            author: userRecipe.author,
            ingredients:  userRecipe.ingredients,
            category:  userRecipe.category
        });

        userRecipe.save(function(err) {
            if (err) {
                sendResponse(res, 400, {'message' : 'ERROR: ' + err.message});
            } else {
                sendResponse(res, 200, {'message' : 'Recipe saved successfully'})
            }
        });
    }
};

module.exports = addOneRecipe;
