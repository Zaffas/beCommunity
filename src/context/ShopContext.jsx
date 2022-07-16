import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Shop = createContext();

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (producto, cantidad) => {
    const productoRepetido = isInCart(producto);
    if (productoRepetido) {
      productoRepetido.quantity += cantidad;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...producto, quantity: cantidad }]);
    }
  };

  const isInCart = (producto) => {
    return cart.find((elemento) => elemento.id === producto.id);
  };

  const removeAll = () => {
    setCart([]);
  };

  const removeItem = (item) => {
    const currentCart = [...cart];
    const newCart = currentCart.filter((product) => product.id !== item);
    setCart(newCart);
  };

  return (
    <Shop.Provider value={{ cart, addItem, removeAll, removeItem }}>
      {children}
    </Shop.Provider>
  );
};

export default ShopProvider;
