const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const gerarToken = require('../utils/gerarToken');

const AdminController = {
  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const admin = await Admin.encontrarPorEmail(email);

      if (!admin) {
        return res.status(404).json({ mensagem: 'Admin não encontrado' });
      }

      const senhaValida = await bcrypt.compare(senha, admin.senha);
      if (!senhaValida) {
        return res.status(401).json({ mensagem: 'Senha inválida' });
      }

      const token = gerarToken({ id: admin.id, email: admin.email });
      return res.json({ token, nome: admin.nome });
    } catch (erro) {
      console.error('Erro no login:', erro);
      return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
  },

  async cadastrar(req, res) {
    try {
      const { nome, email, senha } = req.body;

      const adminExistente = await Admin.encontrarPorEmail(email);
      if (adminExistente) {
        return res.status(400).json({ mensagem: 'Email já cadastrado' });
      }

      const senhaCriptografada = await bcrypt.hash(senha, 10);
      const novoAdmin = await Admin.criar(nome, email, senhaCriptografada);

      return res.status(201).json(novoAdmin);
    } catch (erro) {
      console.error('Erro ao cadastrar admin:', erro);
      return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
  }
};

module.exports = AdminController;
