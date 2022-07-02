import React, { useEffect, useState } from "react";
import "./styles.css";
import ItemCount from "../../components/ItemCount";
import { ItemList } from "../../components/ItemList";

const SumarCarrito = () => {
  console.log("Se agrego al carrito");
};

const ItemListContainer = () => {
  const [productos, setProductos] = useState(null);
  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setTimeout(setProductos(data), 3000);
      } catch (error) {
        console.log("Error");
        console.log(error);
      }
    };

    getProductos();
  }, []);
  return (
    <div>
      <ItemCount SumarCarrito={SumarCarrito} StockTotal={10} StockInicial={7} />
      {productos ? <ItemList products={productos} /> : null}
    </div>
  );
};

export default ItemListContainer;
