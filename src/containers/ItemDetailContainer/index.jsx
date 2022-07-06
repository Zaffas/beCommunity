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
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.productId}`
        );
        const data = await response.json();
        setProductDetail(data);
      } catch (error) {
        console.log("Hubo un error.");
      }
    };
    getProductos();
  }, [params]);

  return <ItemDetail product={productDetail} />;
};

export default ItemDetailContainer;
