import React from "react";
import "./skills.css";

export const Habilidades = () => {
  return (
    <div className="skills">
      <h1>Mis Habilidades</h1>
      <div className="skills-base">

        <div className="skills-box">
          <i className="fa-brands fa-react"></i>
          <h3>Frontends veloces con React</h3>
          <p>Me especializo en el desarrollo de aplicaciones web completas, donde utilizo React para realizar aplicaciones.</p>
        </div>

        <div className="skills-box">
          <i className="fa-brands fa-python"></i>
          <h3>backends seguros con Django</h3>
          <p>realizo el sistema de backend usando Django web y python para un mejor control.</p>
        </div>

        <div className="skills-box">
          <i className="fa-brands fa-linux"></i>
          <h3>Control total de vps Linux</h3>
          <p>Me especializo en el desarrollo de aplicaciones web completas, donde utilizo React para realizar aplicaciones.</p>
        </div>

        <div className="skills-box">
          <i className="fa-brands fa-github"></i>
          <h3>Experiencia en el control de versiones</h3>
          <p>Me especializo en el desarrollo de aplicaciones web completas, donde utilizo React para realizar aplicaciones.</p>
        </div>

      </div>
    </div>
  );
};
