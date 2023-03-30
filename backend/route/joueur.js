const express = require('express');
const router = express.Router();

const joueur = require('../controllers/joueur');
const auth = require('../middleware/auth')

router.post('/signup', joueur.signup);
router.post('/login', joueur.login);

module.exports = router;