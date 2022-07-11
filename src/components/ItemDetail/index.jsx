import React from "react";
import "./styles.css";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";

const ItemDetail = ({ product }) => {
  const navigate = useNavigate();
  product.stock = 9;
  const [qtyAdded, setQtyAdded] = useState(0);
  const { addItem } = useContext(Shop);
  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  };
  const handleTerminate = () => {
    addItem(product, qtyAdded);
    navigate("/cart");
  };

  return (
    <div className="detalle">
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Text>
            {product.title}
            {product.description}
            {!qtyAdded ? (
              <ItemCount
                onConfirm={handleConfirm}
                StockInicial={1}
                StockTotal={product.stock}
              />
            ) : (
              <button onClick={handleTerminate}>Terminar Compra</button>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
