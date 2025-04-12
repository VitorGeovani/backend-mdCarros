const db = require('../config/database');

const Usuario = {
  buscarTodos: (callback) => {
    const sql = 'SELECT * FROM usuarios';
    db.query(sql, callback);
  },

  buscarPorEmail: (email, callback) => {
    const sql = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(sql, [email], callback);
  },

  criar: (usuario, callback) => {
    const sql = 'INSERT INTO usuarios (nome, email, telefone) VALUES (?, ?, ?)';
    db.query(sql, [usuario.nome, usuario.email, usuario.telefone], callback);
  }
};

module.exports = Usuario;
