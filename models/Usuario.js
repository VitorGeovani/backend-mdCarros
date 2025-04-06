const db = require('../config/database');

const Usuario = {
  async criar({ nome, email, telefone }) {
    const [result] = await db.query(
      'INSERT INTO usuarios (nome, email, telefone) VALUES (?, ?, ?)',
      [nome, email, telefone]
    );
    return { id: result.insertId, nome, email, telefone };
  },

  async buscarPorEmail(email) {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    return rows[0];
  },

  async listarTodos() {
    const [rows] = await db.query('SELECT * FROM usuarios');
    return rows;
  }
};

module.exports = Usuario;
