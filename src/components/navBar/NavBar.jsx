import { useContext, useState } from "react";
import "./navBar.css";
import logoLive from "../../assets/logoLive.png";
import logoDark from "../../assets/logoDark.png";
import { TemaToogle } from "../temaToogle/TemaToogle";
import { TemaContext } from "../../temaContext/TemaContext";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { tema } = useContext(TemaContext);

  const handleScroll = (e, seccionID) => {
    e.preventDefault();
    const seccion = document.getElementById(seccionID);

    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setMenuOpen(false);
  };

  return (
    <nav>
      <img
        src={tema === "light" ? logoLive : logoDark}
        alt="logo"
        className="logo"
      />

      <ul className={menuOpen ? "active" : ""}>
        <li>
          <a href="#hero" onClick={(e) => handleScroll(e, "hero")}>
            Home
          </a>
        </li>

        <li>
          <a href="#sobreMi" onClick={(e) => handleScroll(e, "sobreMi")}>
            Sobre mi
          </a>
        </li>

        <li>
          <a
            href="#skills"
            onClick={(e) => handleScroll(e, "skills")}
          >
            Habilidades
          </a>
        </li>

        <li>
          <a href="#proyectos" onClick={(e) => handleScroll(e, "proyectos")}>
            Aplicaciones
          </a>
        </li>

        <li>
          <a href="#contacto" onClick={(e) => handleScroll(e, "contacto")}>
            Contacto
          </a>
        </li>

        <i className="fa-solid fa-xmark" onClick={() => setMenuOpen(false)}></i>
      </ul>

      <TemaToogle />

      <i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
    </nav>
  );
};

export default NavBar;
