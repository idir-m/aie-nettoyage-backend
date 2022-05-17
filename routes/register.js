const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.post('/', registerController.signupUser);
router.post('/entreprise', registerController.signupEntreprise);



module.exports = router;