import React, { useState } from "react";
import "./styles.css";
import Button from "react-bootstrap/Button";

const ItemCount = ({ onConfirm, StockTotal, StockInicial }) => {
  const [value, setValue] = useState(StockInicial);

  const sumarCount = () => {
    if (value < StockTotal) {
      setValue(value + 1);
    } else {
    }
  };
  const restarCount = () => {
    if (value <= 0) {
    } else {
      setValue(value - 1);
    }
  };

  const handleConfirm = () => {
    if (value <= StockTotal) {
      onConfirm(value);
    }
  };

  return (
    <span>
      <Button variant="primary" onClick={restarCount}>
        -
      </Button>
      <Button variant="primary" onClick={handleConfirm}>
        Agregar al carrito {value} u.
      </Button>
      <Button variant="primary" onClick={sumarCount}>
        +
      </Button>
    </span>
  );
};
export default ItemCount;
