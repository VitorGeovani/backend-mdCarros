// === services/imagemService.js ===
const imagemRepository = require('../repository/imagemRepository');

module.exports = {
  listarPorCarro: (carro_id) => imagemRepository.buscarPorCarro(carro_id),

  adicionar: (dados) => imagemRepository.inserir(dados),

  deletar: (id) => imagemRepository.deletar(id)
};