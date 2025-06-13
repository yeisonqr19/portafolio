import "./proyectos.css";
import imgProyecto1 from "../../assets/proyecto1.png";
import imgProyecto2 from "../../assets/proyecto2.png";
import imgProyecto3 from "../../assets/proyecto3.png";
import imgProyecto4 from "../../assets/proyecto4.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const proyectosItems = [
  {
    id: 1,
    imagen: imgProyecto1,
    titulo: "Proyecto 1",
    descripcion: "Aqui ira mi primer proyecto",
    enlace: "#",
  },
  {
    id: 2,
    imagen: imgProyecto2,
    titulo: "Proyecto 2",
    descripcion: "Aqui ira mi segundo proyecto",
    enlace: "#",
  },
  {
    id: 3,
    imagen: imgProyecto3,
    titulo: "Proyecto 3",
    descripcion: "Aqui ira mi tercer proyecto",
    enlace: "#",
  },
  {
    id: 4,
    imagen: imgProyecto4,
    titulo: "Proyecto 4",
    descripcion: "Aqui ira mi cuarto proyecto",
    enlace: "#",
  },
];

export const Proyectos = () => {
    
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div className="proyectos">
        <h1>Aplicaciones</h1>
        <div className="proyectos-container">
          {proyectosItems.map((item, index) => (
            <div
              key={item.id}
              className="proyecto-card"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay={index * 150}
            >
              <img
                src={item.imagen}
                alt={item.descripcion}
                className="proyecto-imagen"
              />

              <div className="proyecto-content">
                <h3>{item.titulo}</h3>
                <p>{item.descripcion}</p>
                <a
                  href={item.enlace}
                  target="_blank"
                  rel="noopener norererrer"
                  className="button-verProyecto"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
