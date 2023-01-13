const express =require('express');
const router = express.Router();

const raid =require('../controllers/raid');

router.get('/:idraid', raid.getOneraid);
router.post('/', raid.signup);

module.exports = router;