import Hero from "../hero/Hero";
import "./home.css";
import { SobreMi } from "../sobreMi/SobreMi";
import { Skills } from "../skills/Skills";
import { Proyectos } from "../proyectos/Proyectos";

export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <SobreMi />
      <Skills />
      <Proyectos />
    </div>
  );
};
