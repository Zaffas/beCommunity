import React from "react";
import "./styles.css";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";

const ItemDetail = ({ product }) => {
  const navigate = useNavigate();
  product.stock = 99;
  const [qtyAdded, setQtyAdded] = useState(0);
  const { addItem } = useContext(Shop);
  const handleConfirm = (qty) => {
    setQtyAdded(qty);
    addItem(product, qty);
  };
  const handleTerminate = () => {
    navigate("/cart");
  };

  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={product.image} className="imagen" />

        <Card.Body>
          <Card.Text>
            <span className="titulo">{product.title}: </span>
            <span>{product.description}</span>
            <span className="precio">Precio: ${product.price}</span>
            {!qtyAdded ? (
              <span className="contadorcontainer">
                <ItemCount
                  onConfirm={handleConfirm}
                  StockInicial={1}
                  StockTotal={product.stock}
                />
              </span>
            ) : (
              <span className="contadorcontainer">
                <Button variant="dark" text="light" onClick={handleTerminate}>
                  Ir al carrito
                </Button>
              </span>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemDetail;
