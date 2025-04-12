const Imagem = require('../models/Imagem');

const ImagemController = {
  listarPorCarro: (req, res) => {
    const { carroId } = req.params;
    Imagem.buscarPorCarro(carroId, (err, results) => {
      if (err) return res.status(500).json({ erro: err });
      res.json(results);
    });
  },

  criar: (req, res) => {
    const { caminho, carro_id } = req.body;
    Imagem.criar({ caminho, carro_id }, (err, result) => {
      if (err) return res.status(500).json({ erro: err });
      res.status(201).json({ mensagem: 'Imagem cadastrada com sucesso', id: result.insertId });
    });
  }
};

module.exports = ImagemController;
