const validarCamposObrigatorios = (objeto, campos) => {
    for (let campo of campos) {
      if (!objeto[campo]) {
        return `Campo obrigatório ausente: ${campo}`;
      }
    }
    return null;
  };
  
  module.exports = validarCamposObrigatorios;
  