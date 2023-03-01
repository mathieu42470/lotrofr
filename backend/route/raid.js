const express =require('express');
const router = express.Router();

const raid =require('../controllers/raid');

router.post('/', raid.getOneraid);
router.post('/signup', raid.signup);
router.put('/:idraid', raid.modifyRaid);

module.exports = router;