const Usuario = require('../models/Usuario');

const UsuarioController = {
  async listar(req, res) {
    const usuarios = await Usuario.listarTodos();
    res.status(200).json(usuarios);
  },

  async criar(req, res) {
    const { nome, email, telefone } = req.body;

    const usuarioExistente = await Usuario.encontrarPorEmail(email);
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: 'Email já cadastrado' });
    }

    await Usuario.criar({ nome, email, telefone });
    res.status(201).json({ mensagem: 'Usuário criado com sucesso!' });
  }
};

module.exports = UsuarioController;
