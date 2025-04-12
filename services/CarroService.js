const carroRepository = require('../repository/carroRepository');

module.exports = {
  listarTodos: () => carroRepository.buscarTodos(),

  buscarPorId: (id) => carroRepository.buscarPorId(id),

  criar: (dados) => carroRepository.inserir(dados),

  atualizar: (id, dados) => carroRepository.atualizar(id, dados),

  deletar: (id) => carroRepository.deletar(id)
};