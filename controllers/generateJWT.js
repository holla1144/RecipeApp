const jwt = require('jsonwebtoken');
const config = require('../config');
const JWT_SECRET = config.JWT_SECRET;
const generateJWT = (data) => {
  return jwt.sign({data: data}, JWT_SECRET, { expiresIn: '1 day'});
};

module.exports = generateJWT;
