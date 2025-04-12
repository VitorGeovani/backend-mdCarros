// === repository/imagemRepository.js ===
const db = require('../utils/db');

module.exports = {
  buscarPorCarro: async (carro_id) => {
    const [linhas] = await db.query('SELECT * FROM imagens WHERE carro_id = ?', [carro_id]);
    return linhas;
  },

  inserir: async ({ caminho, carro_id }) => {
    await db.query('INSERT INTO imagens (caminho, carro_id) VALUES (?, ?)', [caminho, carro_id]);
  },

  deletar: async (id) => {
    await db.query('DELETE FROM imagens WHERE id = ?', [id]);
  }
};