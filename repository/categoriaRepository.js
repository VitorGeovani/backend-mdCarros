// === repository/categoriaRepository.js ===
const db = require('../utils/db');

module.exports = {
  buscarTodas: async () => {
    const [linhas] = await db.query('SELECT * FROM categorias');
    return linhas;
  },

  inserir: async ({ nome, descricao }) => {
    await db.query('INSERT INTO categorias (nome, descricao) VALUES (?, ?)', [nome, descricao]);
  },

  atualizar: async (id, { nome, descricao }) => {
    await db.query('UPDATE categorias SET nome = ?, descricao = ? WHERE id = ?', [nome, descricao, id]);
  },

  deletar: async (id) => {
    await db.query('DELETE FROM categorias WHERE id = ?', [id]);
  }
};