import React, { useEffect, useState } from "react";
import "./styles.css";
// import ItemCount from "../../components/ItemCount";
import { ItemList } from "../../components/ItemList";
import { useParams } from "react-router-dom";

// const SumarCarrito = () => {
//   console.log("Se agrego al carrito");
// };

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setTimeout(setProductos(data), 3000);
        setTimeout(setProductosFiltrados(data), 3000);
      } catch (error) {
        console.log(error);
      }
    };

    getProductos();
  }, []);

  useEffect(() => {
    if (params?.categoryId) {
      const productosFiltrados = productos.filter(
        (producto) => producto.category === params.categoryId
      );
      setProductosFiltrados(productosFiltrados);
    } else {
      setProductosFiltrados(productos);
    }
  }, [params, productos]);

  return (
    <div>
      {/* <ItemCount SumarCarrito={SumarCarrito} StockTotal={10} StockInicial={7} /> */}
      {productos ? (
        <ItemList products={productosFiltrados} />
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ItemListContainer;
