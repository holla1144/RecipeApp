let sendResponse = require('../sendResponse');
let Recipe = require('../../models/recipe_models/recipe');

const likeOne = (req, res) => {
  console.log('likeOne' + req.body)
  console.log(req);
};
module.exports = likeOne;
