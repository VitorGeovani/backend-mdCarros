const db = require('../config/database');

const Categoria = {
  async listarTodas() {
    const [rows] = await db.execute('SELECT * FROM categorias');
    return rows;
  },

  async criar(nome, descricao) {
    await db.execute(
      'INSERT INTO categorias (nome, descricao) VALUES (?, ?)',
      [nome, descricao]
    );
  }
};

module.exports = Categoria;
