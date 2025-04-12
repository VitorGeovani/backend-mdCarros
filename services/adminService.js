// === services/adminService.js ===
const adminRepository = require('../repository/adminRepository');

module.exports = {
  listar: () => adminRepository.buscarTodos(),

  login: (email, senha) => adminRepository.buscarPorCredenciais(email, senha)
};