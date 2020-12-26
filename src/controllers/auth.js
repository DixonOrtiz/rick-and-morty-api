const User = require('../model/user');
const { registerValidation } = require('../helpers/joi-validations');

const register = async (request, response) => {
  const validationErrors = registerValidation(request.body);
  if (validationErrors) return response.status(400).send(validationErrors);

  const user = new User({
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
  });

  try {
    const savedUser = await user.save();
    response.status(200).send(savedUser);
  } catch (error) {
    response.status(500).send(user);
  }
};

const login = async (request, response) => {
  response.send('Login');
};

module.exports = {
  register,
  login,
};
