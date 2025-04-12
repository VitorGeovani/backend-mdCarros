const express = require('express');
const router = express.Router();
const EstoqueController = require('../controllers/EstoqueController');

router.get('/estoque', EstoqueController.listar);
router.post('/estoque', EstoqueController.adicionar);
router.put('/estoque', EstoqueController.atualizar);

module.exports = router;
