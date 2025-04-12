const express = require('express');
const router = express.Router();
const ImagemController = require('../controllers/ImagemController');

router.get('/imagens/:carroId', ImagemController.listarPorCarro);
router.post('/imagens', ImagemController.criar);

module.exports = router;
