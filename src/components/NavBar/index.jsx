import React from "react";
import "./styles.css";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Shop } from "../../context/ShopContext";

const NavBar = () => {
  const { estadoA } = useContext(Shop);

  return (
    <ul>
      <li className="logo">
        <Link to="/">
          <div>Be Community</div>
        </Link>
      </li>
      <li>
        <Link to="/category/asesoramiento">Asesoramiento</Link>
      </li>
      <li>
        <Link to="/category/diseño">Diseño</Link>
      </li>
      <li>
        <Link to="/category/community manager">Community Manager</Link>
      </li>
      <li>
        <Link to="/category/fotografia">Fotografia</Link>
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
