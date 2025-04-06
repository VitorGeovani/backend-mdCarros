const express = require('express');
const router = express.Router();
const AgendamentoController = require('../controllers/AgendamentoController');

router.post('/', AgendamentoController.criar);
router.get('/', AgendamentoController.listar);
router.put('/:id/status', AgendamentoController.atualizarStatus);

module.exports = router;
