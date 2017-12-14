const sendResponse = require('../sendResponse');
const Recipe = require('../../models/recipe');

const getManyCategories = function(req, res) {
  const query = Recipe.distinct("category");
  
  query.exec((err, doc) => {
    if (err) {
      sendResponse(res, 500, {
        'message': 'Sorry, something went wrong'
      })
    } else if (doc) {
      sendResponse(res, 200, {
        'date': doc
      })
    } else {
      sendResponse(res, 204, {
        'message': "Sorry, we couldn't find any categories."
      })
    }
  })
};

module.exports = getManyCategories;
