const express  = require('express');
const router = express.Router();

const classeCont = require('../controllers/classe');

router.get('/:id_classe', classeCont.getOneclasse);

module.exports = router;