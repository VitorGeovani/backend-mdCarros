const db = require('../config/database');

const Agendamento = {
  buscarTodos: (callback) => {
    const sql = `
      SELECT ag.*, us.nome as nome_usuario, ca.modelo as modelo_carro
      FROM agendamentos ag
      JOIN usuarios us ON ag.usuario_id = us.id
      JOIN carros ca ON ag.carro_id = ca.id
    `;
    db.query(sql, callback);
  },

  criar: (agendamento, callback) => {
    const sql = `INSERT INTO agendamentos 
      (data_agendamento, status, observacoes, usuario_id, carro_id) 
      VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [
      agendamento.data_agendamento,
      agendamento.status,
      agendamento.observacoes,
      agendamento.usuario_id,
      agendamento.carro_id
    ], callback);
  }
};

module.exports = Agendamento;
