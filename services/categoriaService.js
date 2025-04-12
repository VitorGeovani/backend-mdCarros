// === services/categoriaService.js ===
const categoriaRepository = require('../repository/categoriaRepository');

module.exports = {
  listar: () => categoriaRepository.buscarTodas(),

  criar: (dados) => categoriaRepository.inserir(dados),

  atualizar: (id, dados) => categoriaRepository.atualizar(id, dados),

  deletar: (id) => categoriaRepository.deletar(id)
};