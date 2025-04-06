const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
require('dotenv').config();

// Middlewares globais
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Importação das rotas
const adminRoutes = require('./routes/adminRoutes');
const carroRoutes = require('./routes/carroRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const agendamentoRoutes = require('./routes/agendamentoRoutes');
const vendaRoutes = require('./routes/vendaRoutes');
const imagemRoutes = require('./routes/imagemRoutes');

// Uso das rotas
app.use('/api/admin', adminRoutes);
app.use('/api/carros', carroRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/agendamentos', agendamentoRoutes);
app.use('/api/vendas', vendaRoutes);
app.use('/api/imagens', imagemRoutes);

module.exports = app;
