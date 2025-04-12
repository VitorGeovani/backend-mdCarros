// === repository/adminRepository.js ===
const db = require('../utils/db');

module.exports = {
  buscarTodos: async () => {
    const [linhas] = await db.query('SELECT id, nome, email FROM admins');
    return linhas;
  },

  buscarPorCredenciais: async (email, senha) => {
    const [linhas] = await db.query('SELECT * FROM admins WHERE email = ? AND senha = ?', [email, senha]);
    return linhas[0];
  }
};