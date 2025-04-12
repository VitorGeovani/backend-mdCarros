// === repository/usuarioRepository.js ===
const db = require('../utils/db');

module.exports = {
  buscarTodos: async () => {
    const [linhas] = await db.query('SELECT * FROM usuarios');
    return linhas;
  },

  buscarPorId: async (id) => {
    const [linhas] = await db.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    return linhas[0];
  },

  inserir: async ({ nome, email, telefone }) => {
    await db.query('INSERT INTO usuarios (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]);
  }
};