const express = require('express');
const router = express.Router();
const CarroController = require('../controllers/CarroController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', CarroController.listar);
router.post('/', authMiddleware, CarroController.criar);
router.delete('/:id', authMiddleware, CarroController.deletar);

module.exports = router;
