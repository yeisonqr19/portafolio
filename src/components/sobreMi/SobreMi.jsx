import React from "react";
import "./sobreMi.css";
import imagensobreMi from "../../assets/imagensobreMi.png";

export const SobreMi = () => {
  return (
    <div className="sobreMi-detalles">
      <img src={imagensobreMi} alt="Sobre mi" />

      <div className="sobreMi-infos">
        <h1>Sobre mí</h1>
        <p className="descripcion">
          Llevo más de 3 años trabajando como programador freelance, combinando
          estudio constante y experiencia práctica. He colaborado en diversos
          proyectos, adaptándome a las necesidades del cliente y siempre
          buscando mejorar como desarrollador. Me siento cómodo trabajando con
          herramientas modernas y en entornos Linux, utilizando Git y GitHub
          como base para una gestión de versiones ordenada y profesional.
        </p>

        <div className="seccion-experiencias">
          <div className="experiencia">
            <i className=" fas fa-plus"></i>
            <span>3</span>
            <p>Años de experiencia</p>
          </div>

          <div className="experiencia">
            <i className=" fas fa-plus"></i>
            <span>4</span>
            <p>Proyectos Realizados</p>
          </div>

          <div className="experiencia">
            <i className=" fas fa-plus"></i>
            <span>1</span>
            <p>Trabajo Profesional</p>
          </div>
        </div>
      </div>

      

    </div>
  );
};
