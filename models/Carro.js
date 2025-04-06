const { getConexao } = require('../config/database');

const Carro = {
  async listarTodos() {
    try {
      const conexao = getConexao();
      const [resultados] = await conexao.query('SELECT * FROM carros');
      return resultados;
    } catch (erro) {
      throw erro;
    }
  },

  async encontrarPorId(id) {
    try {
      const conexao = getConexao();
      const [resultados] = await conexao.query('SELECT * FROM carros WHERE id = ?', [id]);
      return resultados[0];
    } catch (erro) {
      throw erro;
    }
  },

  async criar({ marca, modelo, ano, km, preco, descricao, categoria_id }) {
    try {
      const conexao = getConexao();
      const sql = 'INSERT INTO carros (marca, modelo, ano, km, preco, descricao, categoria_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
      const [resultado] = await conexao.query(sql, [marca, modelo, ano, km, preco, descricao, categoria_id]);
      return resultado.insertId;
    } catch (erro) {
      throw erro;
    }
  }
};

module.exports = Carro;
