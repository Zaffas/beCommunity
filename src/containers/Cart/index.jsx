import React from "react";
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";
import Table from "react-bootstrap/Table";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cart } = useContext(Shop);
  const { removeAll, removeItem } = useContext(Shop);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  if (cart.length == 0) {
    return (
      <Container>
        <h2>El carrito esta vacio...</h2>
        <Button variant="danger" onClick={handleBack}>
          Volver a la tienda
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <h3>Los items que agregaste son:</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((producto) => {
            return (
              <tr key={producto.id}>
                <td>{producto.title}</td>
                <td>${producto.price}</td>
                <td>{producto.quantity} u.</td>
                <td>${producto.price * producto.quantity}</td>
                <td>
                  <Button
                    /* onClick={removeItem(producto.id)} */ variant="danger"
                  >
                    Borrar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;
