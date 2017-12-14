const sendResponse = require('../sendResponse');
const Recipe = require('../../models/recipe');

const getRecipesByCategory = function(req, res) {
  const category = req.params.category.toLowerCase();
  const query = Recipe.find({category: category}).limit(10);

  query.exec((err, doc) => {
    if (err) {
      sendResponse(res, 204, {
        'message': 'Sorry, something went wrong'
      })
    } else if (doc.length) {
      sendResponse(res, 200, {
        data: doc
      })
    } else {
      sendResponse(res, 204, {
        'message': "We couldn't find any recipes in this category, sorry"
      })
    }
  })
};

module.exports = getRecipesByCategory;
