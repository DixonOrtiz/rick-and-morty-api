const axios = require('axios');

const fetchCharactersUrl = 'https://rickandmortyapi.com/api/character';

const getAllCharacters = async (request, response) => {
  console.log('[rick-and-morty-api][Get][/auth/register][Request]');
  axios
    .get(fetchCharactersUrl)
    .then((axiosResponse) => {
      console.log(
        '[rick-and-morty-api][Get][/auth/register][Success]',
        axiosResponse.data.results
      );
      response.status(200).json(axiosResponse.data.results);
    })
    .catch((error) => {
      console.log('[rick-and-morty-api][Get][/auth/register][Error]', error);
      response.status(500).json(error);
    })
    .then(() => {
      console.log('[rick-and-morty-api][Get][/auth/register][Done]');
    });
};

module.exports = {
  getAllCharacters,
};
