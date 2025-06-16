import React from "react";
import "./footer.css";

export const Footer = () => {
  const yearActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <hr />
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github-alt"></i>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
      <p>
        Copyright {yearActual} &copy; YeisonTech - Todos los derechos
        reservados.
      </p>
    </footer>
  );
};
