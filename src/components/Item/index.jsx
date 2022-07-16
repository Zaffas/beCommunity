import React from "react";
import "./styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
export const Item = ({ product }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${product.id}`);
  };

  return (
    <Col className="columna">
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <div className="badge">
            <Badge bg="dark">Categoria: {product.category}</Badge>
          </div>
          <div className="titulo">
            <Card.Title>{product.title}</Card.Title>{" "}
          </div>

          <div className="button">
            {" "}
            <span className="precio">${product.price}</span>
            <Button variant="secondary" onClick={handleDetail}>
              Ver detalle
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
