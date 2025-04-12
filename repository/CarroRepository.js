// === repository/carroRepository.js ===
const db = require('../utils/db');

module.exports = {
  buscarTodos: async () => {
    const [linhas] = await db.query('SELECT * FROM carros');
    return linhas;
  },

  buscarPorId: async (id) => {
    const [linhas] = await db.query('SELECT * FROM carros WHERE id = ?', [id]);
    return linhas[0];
  },

  inserir: async (dados) => {
    const { marca, modelo, ano, km, preco, descricao, categoria_id } = dados;
    await db.query('INSERT INTO carros (marca, modelo, ano, km, preco, descricao, categoria_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [marca, modelo, ano, km, preco, descricao, categoria_id]);
  },

  atualizar: async (id, dados) => {
    const { marca, modelo, ano, km, preco, descricao, categoria_id } = dados;
    await db.query('UPDATE carros SET marca = ?, modelo = ?, ano = ?, km = ?, preco = ?, descricao = ?, categoria_id = ? WHERE id = ?', [marca, modelo, ano, km, preco, descricao, categoria_id, id]);
  },

  deletar: async (id) => {
    await db.query('DELETE FROM carros WHERE id = ?', [id]);
  }
};