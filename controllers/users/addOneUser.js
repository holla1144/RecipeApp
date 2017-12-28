const sendResponse = require('../sendResponse');
const User = require('../../models/user');
const Q = require('Q');
const generateJWT = require('../generateJWT');

const addOneUser = (req, res) => {
    const newUserBody = req.body;

    const hasRequiredFields = ()=> {
        if (!newUserBody.username) {
            return sendResponse(res, 400, {
                'message': 'Username is required for registration'
            });
        } else if (!newUserBody.email) {
            return sendResponse(res, 400, {
                'message': 'Email is required for registration'
            });
        } else if (!newUserBody.password) {
            return sendResponse(res, 400, {
                'message': 'Password is required for registration'
            });
        }
        return true
    };

    const saveNewUser = () => {
      let newUser = new User({
        username: newUserBody.username,
        password: newUserBody.password,
        email: newUserBody.email,
      });

      newUser.save((err, doc) => {
        if (err) {
          sendResponse(res, 400, {
            message: 'Error when saving new user ' + err
          })} else {
          const token = generateJWT(doc);
          sendResponse(res, 200, {
            message: 'New User Saved Successfully',
            token: token
          })
        }
      })
    };

    const checkUniqueUsername = new Q.promise((resolve, reject) => {
        User.findOne({username: newUserBody.username}, (err, doc) => {
          if (err) {
            reject(new Error('Sorry, something went wrong'));
          } else if (doc) {
            reject(new Error('A user with this username has already been registered.'));
          } else {
            resolve()
          }
        });
    });

    const checkUniqueEmail = new Q.promise((resolve, reject) => {
        User.findOne({email: newUserBody.email}, (err, doc) => {
          if (err) {
            reject(new Error('Sorry, something went wrong'));
          } else if (doc) {
            reject(new Error('A user with this email address has already been registered.'));
          } else {
            resolve()
          }
        });
      });

    if (hasRequiredFields()) {
      let allPromises = Q.all([checkUniqueEmail, checkUniqueUsername]);
        allPromises.then(saveNewUser).catch(
        (error) => {
          sendResponse(res, 400, {
            message: error.message
          })
        }).done();
    }
};
module.exports = addOneUser;
