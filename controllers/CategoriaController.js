const Categoria = require('../models/Categoria');

const CategoriaController = {
  listar: (req, res) => {
    Categoria.buscarTodas((err, results) => {
      if (err) return res.status(500).json({ erro: err });
      res.json(results);
    });
  },

  criar: (req, res) => {
    const { nome, descricao } = req.body;
    Categoria.criar({ nome, descricao }, (err, result) => {
      if (err) return res.status(500).json({ erro: err });
      res.status(201).json({ mensagem: 'Categoria criada com sucesso', id: result.insertId });
    });
  }
};

module.exports = CategoriaController;
