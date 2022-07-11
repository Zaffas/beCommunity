import React from "react";
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";

export const Cart = () => {
  const { cart } = useContext(Shop);
  return (
    <ul>
      {cart.map((producto) => {
        return <li key={producto.id}>{producto.title}</li>;
      })}
    </ul>
  );
};

export default Cart;
