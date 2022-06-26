import React from "react";
import { Item } from "../Item";

export const ItemList = ({ products }) => {
  return (
    <ul>
      {products.map((producto) => {
        return <Item product={producto} key={producto.id} />;
      })}
    </ul>
  );
};
