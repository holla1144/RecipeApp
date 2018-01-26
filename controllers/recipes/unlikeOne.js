let sendResponse = require('../sendResponse');
let Recipe = require('../../models/recipe_models/recipe');

const unlikeOne = (req, res) => {
  console.log('unlikeOne called');
  console.log('unlikeOne' + req.body)

};

module.exports = unlikeOne;
