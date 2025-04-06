const Carro = require('../models/Carro');
const Imagem = require('../models/Imagem');

const CarroService = {
  async listarTodos() {
    return await Carro.listarTodos();
  },

  async detalhar(id) {
    const carro = await Carro.encontrarPorId(id);
    if (!carro) throw new Error('Carro não encontrado');

    const imagens = await Imagem.listarPorCarro(id);
    return { ...carro, imagens };
  },

  async criar(dadosCarro) {
    return await Carro.criar(dadosCarro);
  },

  async deletar(id) {
    const carro = await Carro.encontrarPorId(id);
    if (!carro) throw new Error('Carro não encontrado');
    return await Carro.deletar(id);
  }
};

module.exports = CarroService;
