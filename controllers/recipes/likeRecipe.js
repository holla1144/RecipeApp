let sendResponse = require('../sendResponse');
let Recipe = require('../../models/recipe_models/recipe');

const likeOneRecipe = (req, res) => {
  const recipeId = req.body.recipeId;

  Recipe.findById(recipeId, (err, doc) => {
    if (err) {
      sendResponse(res, 500, {
        message: 'Sorry, something went wrong' + err
      })
    } else {
      const newUpvotes = doc.upvotes + 1;
      doc.set({upvotes: newUpvotes});
      doc.save((err) => {
        if (err) {
          sendResponse(res, 500, {
            message: 'Sorry, something went wrong' + err
          })
        }
      })
    }
  })
};
module.exports = likeOneRecipe;
