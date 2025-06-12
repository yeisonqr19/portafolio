import Hero from "../hero/Hero";
import "./home.css";
import { SobreMi } from "../sobreMi/SobreMi";

export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <SobreMi />
    </div>
  );
};
