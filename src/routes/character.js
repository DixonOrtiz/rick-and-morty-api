const express = require('express');
const router = express.Router();

const { getAllCharacters } = require('../controllers/character');

router.route('/character/getAll').get(getAllCharacters);

module.exports = router;
