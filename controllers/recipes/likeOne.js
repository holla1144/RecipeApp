const sendResponse = require('../sendResponse');
const Recipe = require('../../models/recipe_models/recipe');
const User = require('../../models/user');
const Q = require('Q');

const likeOne = (req, res) => {
  const likeData = req.body;
  const recipeId = likeData.itemId;
  const userId = likeData.userId;

  const updateRecipe = () => {
    return new Q.promise((resolve, reject) => {
      Recipe.findById(recipeId, (err, doc) => {
        if (err || !doc) {
          reject(new Error('Sorry, something went wrong on the backend'));
        }

        let newUpvotes = ++doc.upvotes;

        doc.update({$set: {upvotes: newUpvotes}}, err => {
          if (err) {
            reject(new Error('Sorry, something went wrong on the backend'))
          } else {
            resolve()
          }
        });
      })
  })};

  const updateUserLikes = () => {
    return new Q.promise((resolve, reject) => {
      User.findById(userId, (err, doc) => {

        if (err || !doc) {
          reject(new Error('Something went wrong on the backend.'));
        }

        let favorites = doc.favorites;
        favorites.push(recipeId);

        doc.update({$set: {favorites: favorites}}, (err, updatedDoc) => {
          if (err) {
            reject(new Error('Something went wrong on the backend'));
          }
          resolve();
        });
      })
  })};

  User.findById(userId, (err, doc) => {
    if (err) {
      return sendResponse(res, 204, {
        message: 'Something went wrong!'
      });
    }

    if (doc.favorites.indexOf(recipeId) !== -1) {
     sendResponse(res, 204, {
       message: 'This recipe has already been liked'
     });
     } else {
      Q.all([updateRecipe(), updateUserLikes()])
        .then()
        .catch()
        .done((response) => {
          console.log('promise done ' + JSON.stringify(response));
        })
    }});
};

module.exports = likeOne;
