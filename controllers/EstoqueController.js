const Estoque = require('../models/Estoque');

const EstoqueController = {
  listar: (req, res) => {
    Estoque.buscarTodos((err, results) => {
      if (err) return res.status(500).json({ erro: err });
      res.json(results);
    });
  },

  adicionar: (req, res) => {
    Estoque.criar(req.body, (err, result) => {
      if (err) return res.status(500).json({ erro: err });
      res.status(201).json({ mensagem: 'Item adicionado ao estoque', id: result.insertId });
    });
  },

  atualizar: (req, res) => {
    const { carro_id, quantidade } = req.body;
    Estoque.atualizarQuantidade(carro_id, quantidade, (err) => {
      if (err) return res.status(500).json({ erro: err });
      res.json({ mensagem: 'Quantidade atualizada' });
    });
  }
};

module.exports = EstoqueController;
