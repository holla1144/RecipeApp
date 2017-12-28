const jwt = require('jsonwebtoken');
const config = require('../config');
const JWT_SECRET = config.JWT_SECRET;
const generateJWT = (data) => {
  return jwt.sign({data: data, expiresIn: "5 days"}, JWT_SECRET);
};

module.exports = generateJWT;
