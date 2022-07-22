import React, { useState } from "react";
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
      <Button variant="dark" text="light" onClick={restarCount}>
        -
      </Button>
      <Button variant="dark" text="light" onClick={handleConfirm}>
        Agregar al carrito {value} u.
      </Button>
      <Button variant="dark" text="light" onClick={sumarCount}>
        +
      </Button>
    </span>
  );
};
export default ItemCount;
