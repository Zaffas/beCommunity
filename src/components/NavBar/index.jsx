import React from "react";
import "./styles.css";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="logo">
            Be Community
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/category/asesoramiento" className="category">
                  Asesoramiento
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/diseño" className="category">
                  Diseño
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/community manager" className="category">
                  Community Manager
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/fotografia" className="category">
                  Fotografia
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
