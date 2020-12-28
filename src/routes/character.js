const router = require('express').Router();

const { getAllCharacters } = require('../controllers/character');
const { verifyToken } = require('../middlewares/verify-token');

router.route('/character/getAll').get(verifyToken, getAllCharacters);

module.exports = router;
