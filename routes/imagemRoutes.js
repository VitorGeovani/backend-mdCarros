const express = require('express');
const router = express.Router();
const ImagemController = require('../controllers/ImagemController');
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const unique = `${Date.now()}-${file.originalname}`;
    cb(null, unique);
  }
});

const upload = multer({ storage });

router.post('/', authMiddleware, upload.array('imagens', 10), ImagemController.salvar);

module.exports = router;
