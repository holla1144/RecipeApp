const User = require('../../models/user');
const sendResponse = require('../sendResponse');
const winston = require('winston');
const config = require('../../config');
const JWT_SECRET = config.JWT_SECRET;
const Q = require('Q');
const jwt = require('jsonwebtoken');

const loginUser = (req, res) => {
  /*Checks if a username and password were submitted
  * Checks that a user with the given username exists
  * Verifies the submitted password matches the record in db
  * TODO return a JWT */
  const loginData = req.body;

  winston.log('login user called');

  winston.info(loginData);

  const hasRequiredFields = () => {
    if (!loginData.username) {
      sendResponse(res, 204, {
        message: 'A username is required to log in'
      })
    } else if (!loginData.password) {
      sendResponse(res, 204, {
        message: 'A password is required to log in'
      });
    } else {
      return true
    }
  };

  const checkUserExists = ()=> {
    return new Q.promise((resolve, reject) => {
      User.findOne({username: loginData.username}, (err, doc) => {
        if (err) {
          reject(new Error('Something went wrong'))
        } else if (!doc) {
          reject(new Error("A user with that name doesn't exist"));
        } else {
          resolve(doc)
        }
      })
    });
  };

  const verifyPassword = (err, doc) => {
    doc.comparePassword(loginData.password, (err, isMatch) => {
      if (err) {
        sendResponse(res, 204, {
          message: 'Sorry, something went wrong. Please try logging in again later'
        })
      } else if (isMatch) {
        let token = jwt.sign({data: doc, expiresIn: "5 days"}, JWT_SECRET);
          sendResponse(res, 200, {
            message: 'Good work buddy, the passwords match.',
            token: token
          })
        } else {
          sendResponse(res, 200, {
            message: 'Incorrect password.'

          })
        }
      })
    };

  if (hasRequiredFields()) {
    checkUserExists()
      .then((doc)=> {
        verifyPassword(doc);
      }).catch((err)=> {
        sendResponse(res, 400, {
          message: err.message
        })
      })
      .done()
    }
};

module.exports = loginUser;
