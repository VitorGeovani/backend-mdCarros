const mysql = require('mysql2/promise');
require('dotenv').config();

let conexao;

const conectarBanco = async () => {
  try {
    conexao = await mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    console.log('🟢 Banco de dados conectado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error);
    process.exit(1);
  }
};

const getConexao = () => conexao;

module.exports = conectarBanco;
module.exports.getConexao = getConexao;
