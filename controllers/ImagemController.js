const Imagem = require('../models/Imagem');

const ImagemController = {
  async salvar(req, res) {
    const { carro_id } = req.body;
    const imagens = req.files;

    if (!imagens || imagens.length === 0) {
      return res.status(400).json({ mensagem: 'Nenhuma imagem enviada' });
    }

    for (const img of imagens) {
      await Imagem.adicionar(img.filename, carro_id);
    }

    res.status(201).json({ mensagem: 'Imagens enviadas com sucesso' });
  }
};

module.exports = ImagemController;
