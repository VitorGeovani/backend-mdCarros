const express = require('express');
const router = express.Router();
const VendaController = require('../controllers/VendaController');

router.get('/vendas', VendaController.listar);
router.post('/vendas', VendaController.registrar);

module.exports = router;
