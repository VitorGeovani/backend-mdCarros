const Venda = require('../models/Venda');

const VendaController = {
  async listar(req, res) {
    const vendas = await Venda.listarTodas();
    res.status(200).json(vendas);
  },

  async registrar(req, res) {
    const { valor_final, usuario_id, carro_id } = req.body;
    await Venda.registrar({ valor_final, usuario_id, carro_id });
    res.status(201).json({ mensagem: 'Venda registrada com sucesso!' });
  }
};

module.exports = VendaController;
