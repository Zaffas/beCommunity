import React from "react";
import "./styles.css";
import { BsCart } from "react-icons/bs";
import { Shop } from "../../context/ShopContext";

const CartWidget = () => {
  const { cart } = React.useContext(Shop);

  return (
    <div>
      {cart.length && <span>({cart.length})</span>}
      <BsCart />
    </div>
  );
};

export default CartWidget;
