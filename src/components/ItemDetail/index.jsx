import React from "react";
import "./styles.css";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ product }) => {
  const navigate = useNavigate();
  product.stock = 10;
  const [qtyAdded, setQtyAdded] = useState(0);
  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  };
  const handleTerminate = () => {
    navigate("/cart");
  };

  return (
    <div className="detalle">
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Text>
            <h2>{product.title}</h2>
            {product.description}
          </Card.Text>
          {!qtyAdded ? (
            <ItemCount
              onConfirm={handleConfirm}
              StockInicial={1}
              StockTotal={product.stock}
            />
          ) : (
            <button onClick={handleTerminate}>Terminar Compra</button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
