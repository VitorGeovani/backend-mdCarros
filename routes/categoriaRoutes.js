const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/CategoriaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', CategoriaController.listar);
router.post('/', authMiddleware, CategoriaController.criar);

module.exports = router;
