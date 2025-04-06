const express = require('express');
const router = express.Router();

router.use('/admin', require('./adminRoutes'));
router.use('/carros', require('./carroRoutes'));
router.use('/upload', require('./uploadRoutes'));
router.use('/agendamentos', require('./agendamentoRoutes'));
router.use('/vendas', require('./vendaRoutes'));

module.exports = router;
