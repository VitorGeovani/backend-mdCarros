const Categoria = require('../models/Categoria');

const CategoriaController = {
  async listar(req, res) {
    const categorias = await Categoria.listarTodas();
    res.status(200).json(categorias);
  },

  async criar(req, res) {
    const { nome, descricao } = req.body;
    await Categoria.criar(nome, descricao);
    res.status(201).json({ mensagem: 'Categoria criada com sucesso!' });
  }
};

module.exports = CategoriaController;
