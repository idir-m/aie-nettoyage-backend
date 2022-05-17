const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/', authController.handleLogin);
router.post('/entreprise', authController.handleLoginEntreprise);

module.exports = router;