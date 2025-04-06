const express = require('express');
const router = express.Router();
const VendaController = require('../controllers/VendaController');

router.post('/', VendaController.registrar);
router.get('/', VendaController.listar);

module.exports = router;
