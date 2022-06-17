import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <ul>
      <li className="logo">
        <a href="#home">Be Community</a>
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
