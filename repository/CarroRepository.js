let carros = [];

const CarroRepository = {
  buscarTodos: async () => carros,

  criar: async (carro) => {
    const novo = { id: Date.now().toString(), ...carro };
    carros.push(novo);
    return novo;
  },

  deletar: async (id) => {
    const index = carros.findIndex((c) => c.id === id);
    if (index === -1) return false;
    carros.splice(index, 1);
    return true;
  }
};

module.exports = CarroRepository;
