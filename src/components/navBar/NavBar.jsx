import React from "react";
import "./navBar.css";
import logoLive from "../../assets/logoLive.png";
import logoDark from "../../assets/logoDark.png";

const NavBar = () => {
  return (
    <nav>
      <img src={logoLive} alt="logo" className="logo" />

      <ul>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">Sobre mi</a>
        </li>

        <li>
          <a href="#">Habilidades</a>
        </li>

        <li>
          <a href="#">Portafolio</a>
        </li>

        <li>
          <a href="#">Contacto</a>
        </li>

        <i className="fa-solid fa-xmark"></i>
      </ul>

      <i className="fa-solid fa-bars"></i>
    </nav>
  );
};

export default NavBar;
