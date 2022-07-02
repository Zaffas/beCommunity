import React from "react";
import "./styles.css";

export const Item = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt="Imagen del producto" />
      <div className="container">
        <h4>
          <b>{product.title}</b>
        </h4>
        <p>{product.category}</p>
      </div>
    </div>
  );
};
