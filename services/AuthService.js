const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const gerarToken = require('../utils/gerarToken');

const AuthService = {
  async login(email, senha) {
    const admin = await Admin.encontrarPorEmail(email);
    if (!admin) throw new Error('Admin não encontrado');

    const senhaValida = await bcrypt.compare(senha, admin.senha);
    if (!senhaValida) throw new Error('Senha inválida');

    const token = gerarToken({ id: admin.id, email: admin.email });
    return token;
  }
};

module.exports = AuthService;
