// === services/estoqueService.js ===
const estoqueRepository = require('../repository/estoqueRepository');

module.exports = {
  listar: () => estoqueRepository.buscarTodos(),

  atualizarQuantidade: (carro_id, quantidade) => estoqueRepository.atualizar(carro_id, quantidade),

  adicionar: (dados) => estoqueRepository.inserir(dados),

  deletar: (id) => estoqueRepository.deletar(id)
};