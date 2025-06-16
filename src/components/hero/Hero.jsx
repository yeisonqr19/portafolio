import "./hero.css";
import fotoHero from "../../assets/foto.png";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="text-container">
        <span>Hola Soy,</span>
        <h1>Yeison Quiroz.</h1>
        <p>
          Soy desarrollador web fullstack con experiencia en React y Django. Me
          gusta crear sitios rápidos, funcionales y con buen diseño para
          cualquier proyecto.
        </p>
        <a
          href="https://www.linkedin.com/in/ing-yeison-quiroz-reyes-b70405148"
          target="_blank"
          className="btn"
        >
          Contacto
        </a>
      </div>

      <div className="imagen-container">
        <img src={fotoHero} alt="imagen del Hero" className="fotoHero" />
      </div>
    </div>
  );
};

export default Hero;
