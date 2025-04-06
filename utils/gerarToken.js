const jwt = require('jsonwebtoken');
require('dotenv').config();

const gerarToken = (adminId) => {
  return jwt.sign({ id: adminId }, process.env.JWT_SECRET, { expiresIn: '8h' });
};

module.exports = gerarToken;
