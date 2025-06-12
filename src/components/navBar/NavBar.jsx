import { useContext, useState } from "react";
import "./navBar.css";
import logoLive from "../../assets/logoLive.png";
import logoDark from "../../assets/logoDark.png";
import { TemaToogle } from "../temaToogle/TemaToogle";
import { TemaContext } from "../../temaContext/TemaContext";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { tema } = useContext(TemaContext);

  return (
    <nav>
      <img
        src={tema === "light" ? logoLive : logoDark}
        alt="logo"
        className="logo"
      />

      <ul className={menuOpen ? "active" : ""}>
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">Sobre mi</a>
        </li>

        <li>
          <a href="#">Portafolio</a>
        </li>

        <li>
          <a href="#">Habilidades</a>
        </li>

        <li>
          <a href="#">Contacto</a>
        </li>

        <i className="fa-solid fa-xmark" onClick={() => setMenuOpen(false)}></i>
      </ul>

      <TemaToogle />

      <i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
    </nav>
  );
};

export default NavBar;
