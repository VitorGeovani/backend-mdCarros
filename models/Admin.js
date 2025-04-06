const { getConexao } = require('../config/database');

const Admin = {
  async encontrarPorEmail(email) {
    const conexao = getConexao();
    const [rows] = await conexao.query('SELECT * FROM admins WHERE email = ?', [email]);
    return rows[0];
  },

  async criar(nome, email, senha) {
    const conexao = getConexao();
    const [result] = await conexao.query(
      'INSERT INTO admins (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, senha]
    );
    return { id: result.insertId, nome, email };
  }
};

module.exports = Admin;
