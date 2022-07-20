import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

export const Shop = createContext();

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [precioItems, setPrecioItems] = useState([]);
  const [cantidadItems, setCantidadItems] = useState(0);

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

  const removeItem = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const calculoCantidadItems = () => {
    const itemsporcomprar = cart.map((cart) => cart.quantity);
    const cantidaddeitems = itemsporcomprar.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    setCantidadItems(cantidaddeitems);
  };

  const calculoPrecio = () => {
    const itemsprecio = cart.map((cart) => cart.quantity * cart.price);
    if (cart.length >= 1) {
      const preciodeitems = itemsprecio.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );
      setPrecioItems(preciodeitems);
    }
  };

  useEffect(() => {
    calculoCantidadItems();
    calculoPrecio();
  }, [cart]);

  return (
    <Shop.Provider
      value={{
        cart,
        addItem,
        removeAll,
        removeItem,
        cantidadItems,
        precioItems,
      }}
    >
      {children}
    </Shop.Provider>
  );
};

export default ShopProvider;
