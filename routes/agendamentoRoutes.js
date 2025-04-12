const express = require('express');
const router = express.Router();
const AgendamentoController = require('../controllers/AgendamentoController');

router.get('/agendamentos', AgendamentoController.listar);
router.post('/agendamentos', AgendamentoController.agendar);

module.exports = router;
