import React from "react";
import "./skills.css";

export const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1>Mis Habilidades</h1>
      <div className="skills-base">

        <div className="skills-box">
          <i className="fa-brands fa-react"></i>
          <h3>Desarrollo de interfaces modernas</h3>
          <p>Me enfoco en construir interfaces modernas, intuitivas y reactivas con React. Cada componente está pensado para ofrecer una experiencia fluida y eficiente, adaptándose a las necesidades reales del usuario.</p>
        </div>

        <div className="skills-box">
          <i className="fa-brands fa-python"></i>
          <h3>Backend sólido y mantenible</h3>
          <p>Diseño y estructuro sistemas robustos con Django, aprovechando su potencia y seguridad para gestionar la lógica de negocio, las bases de datos y las APIs de manera confiable y escalable.</p>
        </div>

        <div className="skills-box">
          <i className="fa-brands fa-linux"></i>
          <h3>Gestión avanzada de servidores Linux</h3>
          <p>Trabajo con servidores VPS sobre Linux, gestionando configuraciones, servicios y entornos de despliegue. Esto me permite tener un control completo sobre el rendimiento y la seguridad de los proyectos.</p>
        </div>

        <div className="skills-box">
          <i className="fa-brands fa-github"></i>
          <h3> Flujo de trabajo con control de versiones</h3>
          <p>Manejo Git y GitHub como herramientas esenciales para el desarrollo colaborativo. Implemento buenas prácticas en versionado, ramas y control de cambios para mantener un flujo de trabajo organizado y eficiente.</p>
        </div>

      </div>
    </div>
  );
};
