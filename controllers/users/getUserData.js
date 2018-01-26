const User = require('../../models/user');
const sendResponse = require('../sendResponse');

const getUserData = (req, res) => {
  const userId = req.params.userId;

  User.findById(userId, (err, doc) => {
    if (err) {
      return sendResponse(res, 500, {
        message: 'Something has gone wrong here  '
      })
    }

    sendResponse(res, 200, {
      data: {
        favorites: doc.favorites,
        recipes: doc.recipes,
        reviews: doc.reviews
      }
    })
  })
};

module.exports = getUserData;
