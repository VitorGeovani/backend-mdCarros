const db = require('../config/database');

const Venda = {
  async registrar({ valor_final, usuario_id, carro_id }) {
    const [result] = await db.query(
      `INSERT INTO vendas (valor_final, usuario_id, carro_id) 
       VALUES (?, ?, ?)`,
      [valor_final, usuario_id, carro_id]
    );
    return { id: result.insertId };
  },

  async listar() {
    const [rows] = await db.query(
      `SELECT v.*, u.nome AS cliente, c.modelo AS carro 
       FROM vendas v
       JOIN usuarios u ON v.usuario_id = u.id
       JOIN carros c ON v.carro_id = c.id`
    );
    return rows;
  }
};

module.exports = Venda;
