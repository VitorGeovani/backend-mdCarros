const db = require('../config/database');

const Agendamento = {
  async criar({ data_agendamento, observacoes, usuario_id, carro_id }) {
    const [result] = await db.query(
      `INSERT INTO agendamentos (data_agendamento, observacoes, usuario_id, carro_id)
       VALUES (?, ?, ?, ?)`,
      [data_agendamento, observacoes, usuario_id, carro_id]
    );
    return { id: result.insertId };
  },

  async listar() {
    const [rows] = await db.query(
      `SELECT a.*, u.nome AS nome_usuario, c.modelo AS carro_modelo
       FROM agendamentos a
       JOIN usuarios u ON a.usuario_id = u.id
       JOIN carros c ON a.carro_id = c.id`
    );
    return rows;
  },

  async atualizarStatus(id, status) {
    const [result] = await db.query(
      'UPDATE agendamentos SET status = ? WHERE id = ?',
      [status, id]
    );
    return result;
  }
};

module.exports = Agendamento;
