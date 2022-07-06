import React from "react";
import "./styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const Item = ({ product }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${product.id}`);
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.category}</Card.Text>
          <Button variant="primary" onClick={handleDetail}>
            Ver detalle
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
