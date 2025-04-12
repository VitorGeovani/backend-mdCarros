const Admin = require('../models/Admin');

const AdminController = {
  listar: (req, res) => {
    Admin.buscarTodos((err, results) => {
      if (err) return res.status(500).json({ erro: err });
      res.json(results);
    });
  },

  login: (req, res) => {
    const { email, senha } = req.body;
    Admin.buscarPorEmail(email, (err, results) => {
      if (err) return res.status(500).json({ erro: err });

      const admin = results[0];
      if (!admin || admin.senha !== senha) {
        return res.status(401).json({ erro: 'Credenciais inválidas' });
      }

      res.json({ mensagem: 'Login realizado com sucesso', admin });
    });
  }
};

module.exports = AdminController;
