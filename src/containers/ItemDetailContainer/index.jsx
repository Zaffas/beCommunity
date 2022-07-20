import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import "./styles.css";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});

  const params = useParams();

  useEffect(() => {
    const getProductos = async () => {
      try {
        const docRef = doc(db, "products", params.productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productDetail = { id: docSnap.id, ...docSnap.data() };
          setProductDetail(productDetail);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        /*         const response = await fetch("../mocks/data.json");
        const data = await response.json();
        const filtrado = data.filter(
          (productos) => productos.id == params.productId
        );
        setProductDetail(filtrado[0]); */
      } catch (error) {
        console.log(error);
      }
    };
    getProductos();
  }, [params]);

  return <ItemDetail product={productDetail} />;
};

export default ItemDetailContainer;
