const db = require('../config/database');

const Imagem = {
  async criar(caminho, carro_id) {
    const [result] = await db.query(
      'INSERT INTO imagens (caminho, carro_id) VALUES (?, ?)',
      [caminho, carro_id]
    );
    return { id: result.insertId, caminho };
  },

  async buscarPorCarroId(carro_id) {
    const [rows] = await db.query(
      'SELECT * FROM imagens WHERE carro_id = ?',
      [carro_id]
    );
    return rows;
  }
};

module.exports = Imagem;
