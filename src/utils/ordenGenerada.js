const ordenGenerada = (nombre, email, phone, cart, total) => {
  return {
    buyer: {
      nombre: nombre,
      email: email,
      numero: phone,
    },
    items: cart,
    total: total,
    createdAt: new Date().toLocaleDateString(),
  };
};

export default ordenGenerada;
