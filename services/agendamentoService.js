// === services/agendamentoService.js ===
const agendamentoRepository = require('../repository/agendamentoRepository');

module.exports = {
  listar: () => agendamentoRepository.buscarTodos(),

  criar: (dados) => agendamentoRepository.inserir(dados),

  atualizarStatus: (id, status) => agendamentoRepository.atualizarStatus(id, status),

  deletar: (id) => agendamentoRepository.deletar(id)
};