const Agendamento = require('../models/Agendamento');

const AgendamentoController = {
  async criar(req, res) {
    try {
      const agendamento = await Agendamento.criar(req.body);
      res.status(201).json(agendamento);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao criar agendamento' });
    }
  },

  async listar(req, res) {
    const lista = await Agendamento.listar();
    res.json(lista);
  },

  async atualizarStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body;
    await Agendamento.atualizarStatus(id, status);
    res.json({ mensagem: 'Status atualizado com sucesso' });
  }
};

module.exports = AgendamentoController;
