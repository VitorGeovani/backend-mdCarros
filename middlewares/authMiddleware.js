const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mensagem: 'Token não fornecido' });
  }

  try {
    const tokenLimpo = token.replace('Bearer ', '');
    const usuario = jwt.verify(tokenLimpo, process.env.JWT_SECRET);
    req.usuario = usuario;
    next();
  } catch (erro) {
    return res.status(401).json({ mensagem: 'Token inválido ou expirado' });
  }
};

module.exports = authMiddleware;
