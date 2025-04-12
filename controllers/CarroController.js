const Carro = require('../models/Carro');

const CarroController = {
  listar: (req, res) => {
    Carro.buscarTodos((err, results) => {
      if (err) return res.status(500).json({ erro: err });
      res.json(results);
    });
  },

  buscar: (req, res) => {
    const { id } = req.params;
    Carro.buscarPorId(id, (err, result) => {
      if (err) return res.status(500).json({ erro: err });
      if (!result.length) return res.status(404).json({ mensagem: 'Carro não encontrado' });
      res.json(result[0]);
    });
  },

  criar: (req, res) => {
    Carro.criar(req.body, (err, result) => {
      if (err) return res.status(500).json({ erro: err });
      res.status(201).json({ mensagem: 'Carro cadastrado com sucesso', id: result.insertId });
    });
  },

  deletar: (req, res) => {
    const { id } = req.params;
    Carro.deletar(id, (err) => {
      if (err) return res.status(500).json({ erro: err });
      res.json({ mensagem: 'Carro deletado com sucesso' });
    });
  }
};

module.exports = CarroController;
