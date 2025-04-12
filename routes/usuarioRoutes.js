const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

router.get('/usuarios', UsuarioController.listar);
router.post('/usuarios', UsuarioController.cadastrar);

module.exports = router;
