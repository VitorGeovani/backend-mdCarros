const Carro = require('../models/Carro');
const Imagem = require('../models/Imagem');

const CarroController = {
  async listar(req, res) {
    const carros = await Carro.listarTodos();
    res.status(200).json(carros);
  },

  async detalhar(req, res) {
    const { id } = req.params;
    const carro = await Carro.encontrarPorId(id);
    if (!carro) return res.status(404).json({ mensagem: 'Carro não encontrado' });

    const imagens = await Imagem.listarPorCarro(id);
    res.status(200).json({ ...carro, imagens });
  },

  async criar(req, res) {
    const { marca, modelo, ano, km, preco, descricao, categoria_id } = req.body;
    await Carro.criar({ marca, modelo, ano, km, preco, descricao, categoria_id });
    res.status(201).json({ mensagem: 'Carro cadastrado com sucesso!' });
  },

  async deletar(req, res) {
    const { id } = req.params;
    const carro = await Carro.encontrarPorId(id);

    if (!carro) {
      return res.status(404).json({ mensagem: 'Carro não encontrado' });
    }

    await Carro.deletar(id);
    res.status(200).json({ mensagem: 'Carro deletado com sucesso!' });
  }
};

module.exports = CarroController;
