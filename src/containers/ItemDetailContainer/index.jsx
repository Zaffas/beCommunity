import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import "./styles.css";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/1");
        const data = await response.json();
        setProductDetail(data);
      } catch (error) {
        console.log("Hubo un error.");
      }
    };
    getProductos();
  }, []);

  return <ItemDetail product={productDetail} />;
};

export default ItemDetailContainer;
