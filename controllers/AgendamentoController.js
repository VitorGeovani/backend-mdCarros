const Agendamento = require('../models/Agendamento');

const AgendamentoController = {
  listar: (req, res) => {
    Agendamento.buscarTodos((err, results) => {
      if (err) return res.status(500).json({ erro: err });
      res.json(results);
    });
  },

  agendar: (req, res) => {
    Agendamento.criar(req.body, (err, result) => {
      if (err) return res.status(500).json({ erro: err });
      res.status(201).json({ mensagem: 'Agendamento realizado com sucesso', id: result.insertId });
    });
  }
};

module.exports = AgendamentoController;
