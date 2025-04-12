const Usuario = require('../models/Usuario');

const UsuarioController = {
  listar: (req, res) => {
    Usuario.buscarTodos((err, results) => {
      if (err) return res.status(500).json({ erro: err });
      res.json(results);
    });
  },

  cadastrar: (req, res) => {
    const { nome, email, telefone } = req.body;
    Usuario.criar({ nome, email, telefone }, (err, result) => {
      if (err) return res.status(500).json({ erro: err });
      res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso', id: result.insertId });
    });
  }
};

module.exports = UsuarioController;
