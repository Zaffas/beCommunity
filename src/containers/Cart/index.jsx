import React from "react";
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";
import Table from "react-bootstrap/Table";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./styles.css";

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
            <th>
              <div className="centrar">Item</div>
            </th>
            <th>
              <div className="centrar">Precio</div>
            </th>
            <th>
              <div className="centrar">Cantidad</div>
            </th>
            <th>
              <div className="centrar">Subtotal</div>
            </th>
            <th>
              <div className="centrar">Acciones</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((producto) => {
            return (
              <tr key={producto.id}>
                <td>
                  <div className="centrar">{producto.title}</div>
                </td>
                <td>
                  <div className="centrar">${producto.price}</div>
                </td>
                <td>
                  <div className="centrar">{producto.quantity} u.</div>
                </td>
                <td>
                  <div className="centrar">
                    ${producto.price * producto.quantity}
                  </div>
                </td>
                <td>
                  <div className="centrar">
                    <Button
                      /* onClick={removeItem(producto.id)} */ variant="danger"
                    >
                      Borrar
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
          <tr>
            <th colSpan={2}>
              <div className="centrar">Total:</div>
            </th>
            <th>
              <div className="centrar"> u.</div>
            </th>
            <th>
              <div className="centrar">$</div>
            </th>
            <th>
              <div className="centrar">
                <Button onClick={removeAll} variant="danger">
                  Borrar todo
                </Button>
              </div>
            </th>
          </tr>
        </tbody>
      </Table>
      <div className="end">
        <Button variant="dark" text="light">
          Terminar Compra
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
