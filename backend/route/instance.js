const express = require('express');
const router = express.Router();

const instance = require('../controllers/instance');

router.post('/', instance.getOneinstance);
router.post('/signup', instance.signup);

module.exports = router;