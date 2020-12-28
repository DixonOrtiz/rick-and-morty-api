const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env.js');

const verifyToken = (request, response, next) => {
  const token = request.header('auth-token');
  if (!token)
    return response.status(401).send('There is no token, access denied');

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    request.user = verified;
    next();
  } catch (error) {
    response.status(400).send('Invalid token');
  }
};

module.exports = {
  verifyToken,
};
