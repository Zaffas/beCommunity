import React, { useState } from "react";
import "./styles.css";
import Button from "react-bootstrap/Button";

const ItemCount = ({ onConfirm, StockTotal, StockInicial }) => {
  const [count, setCount] = useState(StockInicial);

  const sumarCount = () => {
    if (count < StockTotal) {
      setCount(count + 1);
    } else {
    }
  };
  const restarCount = () => {
    if (count <= 0) {
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={restarCount}>
        -
      </Button>
      <Button variant="primary" onClick={onConfirm}>
        Agregar al carrito {count} u.
      </Button>
      <Button variant="primary" onClick={sumarCount}>
        +
      </Button>
    </div>
  );
};
export default ItemCount;
