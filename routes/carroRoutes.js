const express = require('express');
const router = express.Router();
const CarroController = require('../controllers/CarroController');

router.get('/carros', CarroController.listar);
router.get('/carros/:id', CarroController.buscar);
router.post('/carros', CarroController.criar);
router.delete('/carros/:id', CarroController.deletar);

module.exports = router;
