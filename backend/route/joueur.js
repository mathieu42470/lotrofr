const express = require('express');
const router = express.Router();

const joueur = require('../controllers/joueur');

router.post('/signup', joueur.signup);
router.post('/login', joueur.login);

module.exports = router;