const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const { JWT_SECRET } = require('../config/env.js');
const {
  registerValidation,
  loginValidation,
} = require('../helpers/joi-validations');
const { validate } = require('../model/user');

// Register controller
const register = async (request, response) => {
  // Request body validation
  const validationErrors = registerValidation(request.body);
  if (validationErrors) return response.status(400).send(validationErrors);

  // User existence validation
  const doesUserExists = await User.exists({ email: request.body.email });
  if (doesUserExists)
    return response
      .status(409)
      .send(`The user with email '${request.body.email}' already exists`);

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(request.body.password, salt);

  const user = new User({
    name: request.body.name,
    email: request.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    response.status(201).send(savedUser);
  } catch (error) {
    response.status(500).send(user);
  }
};

// Login controller
const login = async (request, response) => {
  // Request body validation
  const validationErrors = loginValidation(request.body);
  if (validationErrors) return response.status(400).send(validationErrors);

  // User existence validation
  const doesUserExists = await User.exists({ email: request.body.email });
  if (!doesUserExists) {
    return response
      .status(409)
      .send(`The user with email '${request.body.email}' does not exist`);
  }

  // Password validation
  const user = await User.findOne({ email: request.body.email });
  const validPassword = await bcrypt.compare(
    request.body.password,
    user.password
  );
  if (!validPassword) response.status(401).send('The password is incorrect');

  // Create a JWT
  const token = jwt.sign({ _id: user._id }, JWT_SECRET);
  response.header('auth-token', token);

  response.send('Login');
};

module.exports = {
  register,
  login,
};
