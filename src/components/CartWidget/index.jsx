import React from "react";
import "./styles.css";
import { BsCart3 } from "react-icons/bs";
import { Shop } from "../../context/ShopContext";
import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { cart, calculoCantidadItems, cantidadItems } = React.useContext(Shop);
  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div onClick={handleCart} style={{ alignItems: "center" }}>
      <Badge pill bg="light" text="dark">
        {cart.length > 0 && <span>{cantidadItems}</span>}
      </Badge>
      <BsCart3 size="2rem" className="chango" />
    </div>
  );
};

export default CartWidget;
