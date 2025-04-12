const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/CategoriaController');

router.get('/categorias', CategoriaController.listar);
router.post('/categorias', CategoriaController.criar);

module.exports = router;
