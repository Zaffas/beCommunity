import React, { useEffect, useState } from "react";
import "./styles.css";
import { ItemList } from "../../components/ItemList";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getProductos = async () => {
      try {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          productos.push({ id: doc.id, ...doc.data() });
        });
        setTimeout(setProductos(productos), 3000);
        setTimeout(setProductosFiltrados(productos), 3000);
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
