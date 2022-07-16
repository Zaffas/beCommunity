import React, { useEffect, useState } from "react";
import "./styles.css";
import { ItemList } from "../../components/ItemList";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch("../mocks/data.json");
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
        (producto) => producto.category == params.categoryId
      );
      console.log(productosFiltrados);
      setProductosFiltrados(productosFiltrados);
    } else {
      setProductosFiltrados(productos);
    }
  }, [params, productos]);

  return (
    <Container>
      {productos ? (
        <ItemList products={productosFiltrados} />
      ) : (
        <p>Cargando productos...</p>
      )}
    </Container>
  );
};

export default ItemListContainer;
