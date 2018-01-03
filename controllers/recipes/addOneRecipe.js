const sendResponse = require('../sendResponse');
const Recipe = require('../../models/recipe_models/recipe');
const fs = require('fs');
const mongoose = require('mongoose');

let addOneRecipe = function(req, res) {
    let userRecipe = req.body;
    let userFiles = req.files;

    const getRecipePath = () => {
      //This function returns a new filename for the image a user uploaded, or an empty string

      if (userFiles) {
        //Expect recipeImage to be an array consisting of one element
        const recipeImage = userFiles[0];
        const filename = (new Date).getTime() + '-' + recipeImage.originalname;
        fs.rename(recipeImage.path, 'public/images/recipe_images/' + filename, (err) => {
          if (err) {
            throw err;
          }
        });

        return filename;
      }

      return '';
    };

    if (!userRecipe.title ||  !userRecipe.description || !userRecipe.ingredients || !userRecipe.category) {
        sendResponse(res, 400, {'message': 'Title, Description, Ingredients, and Category are required'});

    } else {

      let newUserRecipe = new Recipe({
          title:  userRecipe.title,
          description: userRecipe.description,
          author: mongoose.Types.ObjectId(userRecipe.author),
          ingredients: JSON.parse(userRecipe.ingredients),
          category: userRecipe.category,
          directions: userRecipe.directions,
          imagePath: getRecipePath()
      });

      newUserRecipe.save(function(err) {
          if (err) {
              sendResponse(res, 400, {'message' : err.message});
          } else {
              sendResponse(res, 200, {'message' : 'Recipe saved successfully'})
          }
      });
    }
};

module.exports = addOneRecipe;
