import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#news">News</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li className="about">
        <a className="active" href="#about">
          About
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
