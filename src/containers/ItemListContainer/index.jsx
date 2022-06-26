import React from "react";
import "./styles.css";
import ItemCount from "../../components/ItemCount";

const SumarCarrito = () => {
  console.log("Se agrego al carrito");
};

const ItemListContainer = () => {
  return (
    <div>
      <ItemCount SumarCarrito={SumarCarrito} StockTotal={10} StockInicial={7} />
    </div>
  );
};

export default ItemListContainer;
