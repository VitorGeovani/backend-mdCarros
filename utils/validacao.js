// === utils/validacao.js ===
module.exports = {
    camposObrigatorios: (campos, objeto) => {
      for (const campo of campos) {
        if (!objeto[campo]) return `O campo ${campo} é obrigatório.`;
      }
      return null;
    }
  };