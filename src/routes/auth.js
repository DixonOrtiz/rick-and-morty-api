const router = require('express').Router();

const { register, login } = require('../controllers/auth');

router.route('/auth/register').post(register);
router.route('/auth/login').post(login);

module.exports = router;
