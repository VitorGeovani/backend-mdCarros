const db = require('../config/database');

const Admin = {
  buscarTodos: (callback) => {
    const sql = 'SELECT * FROM admins';
    db.query(sql, callback);
  },

  buscarPorEmail: (email, callback) => {
    const sql = 'SELECT * FROM admins WHERE email = ?';
    db.query(sql, [email], callback);
  },

  criar: (admin, callback) => {
    const sql = 'INSERT INTO admins (nome, email, senha) VALUES (?, ?, ?)';
    db.query(sql, [admin.nome, admin.email, admin.senha], callback);
  }
};

module.exports = Admin;
