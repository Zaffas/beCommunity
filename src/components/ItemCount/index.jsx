import React, { useState } from "react";
import "./styles.css";

const ItemCount = ({ SumarCarrito, StockTotal, StockInicial }) => {
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
      <p>{count}</p>
      <button onClick={sumarCount}>Sumar</button>
      <button onClick={restarCount}>Restar</button>
      <button onClick={SumarCarrito}>Agregar al carrito</button>
    </div>
  );
};
export default ItemCount;
