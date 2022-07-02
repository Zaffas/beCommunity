import React from "react";
import "./styles.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="detalle">
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Text>
            <h2>{product.title}</h2>
            {product.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
