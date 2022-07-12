import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import "./styles.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});

  const params = useParams();

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch("../mocks/data.json");
        const data = await response.json();
        const filtrado = data.filter(
          (productos) => productos.id == params.productId
        );
        setProductDetail(filtrado[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getProductos();
  }, [params]);

  return <ItemDetail product={productDetail} />;
};

export default ItemDetailContainer;
