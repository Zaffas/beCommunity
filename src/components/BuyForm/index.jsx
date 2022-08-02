import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Shop } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState } from "react";
import validarEmail from "../../utils/validarEmail";
import ordenGenerada from "../../utils/ordenGenerada";

export const BuyForm = () => {
  const { cart, precioItems, removeAll } = useContext(Shop);
  useContext(Shop);

  const [compraRealizada, setCompraRealizada] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inputsValidated, setInputsValidated] = useState(null);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  const handleFinish = () => {
    validateInputs();
  };

  const handleBuyAgain = () => {
    navigate("/");
    removeAll();
  };

  const validateInputs = () => {
    if (name.length >= 3 && validarEmail(email) && phone.length >= 8) {
      setInputsValidated(true);
      confirmarOrden();
    } else {
      setInputsValidated(false);
    }
  };

  const confirmarOrden = async () => {
    const orden = ordenGenerada(name, email, phone, cart, precioItems);

    const docRef = await addDoc(collection(db, "orders"), {
      orden,
    });

    const codigoPedido = docRef.id;
    setCompraRealizada(codigoPedido);
  };

  if (cart.length == 0) {
    return (
      <Container>
        <h2>Para continuar tu compra, primero agrega productos al carrito.</h2>
        <Button variant="danger" onClick={handleBack}>
          Volver a la tienda
        </Button>
      </Container>
    );
  }
  if (compraRealizada !== false) {
    return (
      <Container>
        <h3>
          Tu pedido ya fue realizado con exito, tu codigo de orden es:
          <b>{compraRealizada}</b>.
        </h3>
        <Button variant="danger" onClick={handleBuyAgain}>
          Volver a comprar
        </Button>
      </Container>
    );
  }
  if (inputsValidated == false) {
    return (
      <Container>
        <h3>
          Uno de los datos que has ingresados es incorrecto o se encuentra
          incompleto.
        </h3>
        <h2>Estas armando un pedido por un total de ${precioItems}.</h2>
        <Form>
          <Form.Group
            className="mb-3"
            controlId="formName"
            onChange={(event) => setName(event.target.value)}
          >
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="name" placeholder="Escribe tu nombre" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formEmail"
            onChange={(event) => setEmail(event.target.value)}
          >
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Escribe tu correo electronico"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formTel"
            onChange={(event) => setPhone(event.target.value)}
          >
            <Form.Label>Numero de telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="Escribe tu numero de telefono"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button variant="dark" text="light" onClick={() => handleFinish()}>
            Terminar Compra
          </Button>
        </Form>
      </Container>
    );
  }
  return (
    <Container>
      <h2>Estas armando un pedido por un total de ${precioItems}.</h2>
      <Form>
        <Form.Group
          className="mb-3"
          controlId="formName"
          onChange={(event) => setName(event.target.value)}
        >
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="name" placeholder="Escribe tu nombre" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formEmail"
          onChange={(event) => setEmail(event.target.value)}
        >
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Escribe tu correo electronico"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formTel"
          onChange={(event) => setPhone(event.target.value)}
        >
          <Form.Label>Numero de telefono</Form.Label>
          <Form.Control
            type="number"
            placeholder="Escribe tu numero de telefono"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="dark" text="light" onClick={() => handleFinish()}>
          Terminar Compra
        </Button>
      </Form>
    </Container>
  );
};
export default BuyForm;
