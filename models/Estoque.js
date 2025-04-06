const db = require('../config/database');

const Estoque = {
  async atualizarEstoque(carro_id, quantidade) {
    const [result] = await db.query(
      `INSERT INTO estoque (carro_id, quantidade)
       VALUES (?, ?)
       ON DUPLICATE KEY UPDATE quantidade = ?`,
      [carro_id, quantidade, quantidade]
    );
    return result;
  },

  async buscarTodos() {
    const [rows] = await db.query(
      `SELECT e.*, c.modelo FROM estoque e
       JOIN carros c ON c.id = e.carro_id`
    );
    return rows;
  }
};

module.exports = Estoque;
