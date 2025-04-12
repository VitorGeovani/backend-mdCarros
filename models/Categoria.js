const db = require('../config/database');

const Categoria = {
  buscarTodas: (callback) => {
    const sql = 'SELECT * FROM categorias';
    db.query(sql, callback);
  },

  buscarPorId: (id, callback) => {
    const sql = 'SELECT * FROM categorias WHERE id = ?';
    db.query(sql, [id], callback);
  },

  criar: (categoria, callback) => {
    const sql = 'INSERT INTO categorias (nome, descricao) VALUES (?, ?)';
    db.query(sql, [categoria.nome, categoria.descricao], callback);
  }
};

module.exports = Categoria;
