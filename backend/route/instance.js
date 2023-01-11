const express = require('express');
const router = express.Router();

const instance = require('../controllers/instance');

router.get('/:idinstance', instance.getOneinstance);

module.exports = router;