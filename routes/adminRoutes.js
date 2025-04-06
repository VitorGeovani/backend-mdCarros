const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');

// Rota de login do admin
router.post('/login', AdminController.login);

// Rota de cadastro do admin
router.post('/cadastrar', AdminController.cadastrar);

module.exports = router;
