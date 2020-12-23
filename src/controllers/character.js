const axios = require('axios');

const { CHARACTERS_ENDPOINT } = require('../config/env');

const getAllCharacters = async (request, response) => {
  console.log('[rick-and-morty-api][Get][/character/getAll][Request]');
  axios
    .get(CHARACTERS_ENDPOINT)
    .then((axiosResponse) => {
      console.log(
        '[rick-and-morty-api][Get][/character/getAll][Success]',
        axiosResponse.data.results
      );
      response.status(200).json(axiosResponse.data.results);
    })
    .catch((error) => {
      console.log('[rick-and-morty-api][Get][/character/getAll][Error]', error);
      response.status(500).json(error);
    })
    .then(() => {
      console.log('[rick-and-morty-api][Get][/character/getAll][Done]');
    });
};

module.exports = {
  getAllCharacters,
};
