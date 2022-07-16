import React from "react";
import { Item } from "../Item";
import Row from "react-bootstrap/Row";

export const ItemList = ({ products }) => {
  return (
    <Row className="d-flex justify-content-between">
      {products.map((producto) => {
        return <Item product={producto} key={producto.id} />;
      })}
    </Row>
  );
};
