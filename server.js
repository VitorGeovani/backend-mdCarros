const app = require('./app');
const conectarBanco = require('./config/database');
require('dotenv').config();

const port = process.env.PORT || 3001;

(async () => {
  try {
    await conectarBanco();
    app.listen(port, () => {
      console.log(`🚗 Servidor rodando em http://localhost:${port}`);
    });
  } catch (error) {
    console.error('❌ Erro ao iniciar o servidor:', error);
  }
})();
