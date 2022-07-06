import React from "react";
import "./styles.css";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li className="logo">
        <Link to="/">Be Community</Link>
      </li>
      <li>
        <Link to="/category/electronics">Electronics</Link>
      </li>
      <li>
        <Link to="/category/jewelery">Jewelery</Link>
      </li>
      <li>
        <Link to="/category/women's clothing">Women</Link>
      </li>
      <li>
        <Link to="/category/men's clothing">Man</Link>
      </li>
      <li className="about">
        <a className="active" href="#about">
          About
        </a>
      </li>
      <li className="about">
        <a href="cart">
          <CartWidget />
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
