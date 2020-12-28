const axios = require('axios');

const { CHARACTERS_ENDPOINT } = require('../config/env');

// Get all characters controller
const getAllCharacters = async (request, response) => {
  axios
    .get(CHARACTERS_ENDPOINT)
    .then((axiosResponse) => {
      response.status(200).json(axiosResponse.data.results);
    })
    .catch((error) => {
      response.status(500).json(error);
    });
};

module.exports = {
  getAllCharacters,
};
