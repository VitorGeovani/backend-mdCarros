// === services/vendaService.js ===
const vendaRepository = require('../repository/vendaRepository');

module.exports = {
  listar: () => vendaRepository.buscarTodas(),

  registrar: (dados) => vendaRepository.inserir(dados)
};