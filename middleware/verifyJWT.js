const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config').JWT_SECRET;
const sendResponse = require('../controllers/sendResponse');

module.exports = verifyJWT = (req, res, next) => {
  const candidateToken = req.body.token;
  jwt.verify(candidateToken, JWT_SECRET, (err, token) => {
    if (err) {
      sendResponse(res, 204, {
        message: 'Sorry, something went wrong. Please log in again.'
      });
    } else {
      next();
    }
  });

};
