const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());
app.use(fileUpload());

// Servir arquivos estáticos da pasta uploads (ex: imagens dos carros)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Importação das rotas
const carroRoutes = require('./routes/carroRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const agendamentoRoutes = require('./routes/agendamentoRoutes');
const imagemRoutes = require('./routes/imagemRoutes');
const vendaRoutes = require('./routes/vendaRoutes');
const estoqueRoutes = require('./routes/estoqueRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Aplicação das rotas SEM /api no prefixo, conforme solicitado
app.use(carroRoutes);
app.use(categoriaRoutes);
app.use(usuarioRoutes);
app.use(agendamentoRoutes);
app.use(imagemRoutes);
app.use(vendaRoutes);
app.use(estoqueRoutes);
app.use(adminRoutes);

module.exports = app;
