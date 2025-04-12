// === services/usuarioService.js ===
const usuarioRepository = require('../repository/usuarioRepository');

module.exports = {
  listar: () => usuarioRepository.buscarTodos(),

  cadastrar: (dados) => usuarioRepository.inserir(dados),

  buscarPorId: (id) => usuarioRepository.buscarPorId(id)
};