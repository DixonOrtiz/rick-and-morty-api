const register = async (request, response) => {
  response.send('Register');
};

const login = async (request, response) => {
  response.send('Login');
};

module.exports = {
  register,
  login,
};
