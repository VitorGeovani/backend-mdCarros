// === repository/estoqueRepository.js ===
const db = require('../utils/db');

module.exports = {
  buscarTodos: async () => {
    const [linhas] = await db.query('SELECT * FROM estoque');
    return linhas;
  },

  inserir: async ({ carro_id, quantidade, localizacao }) => {
    await db.query('INSERT INTO estoque (carro_id, quantidade, localizacao) VALUES (?, ?, ?)', [carro_id, quantidade, localizacao]);
  },

  atualizar: async (carro_id, quantidade) => {
    await db.query('UPDATE estoque SET quantidade = ? WHERE carro_id = ?', [quantidade, carro_id]);
  },

  deletar: async (id) => {
    await db.query('DELETE FROM estoque WHERE id = ?', [id]);
  }
};