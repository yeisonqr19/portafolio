import { useContext } from "react";
import { TemaContext } from "../../temaContext/TemaContext";
import "./temaToogle.css"

export const TemaToogle = () => {
  const { tema, toogleTema } = useContext(TemaContext);

  return (
    <>
      <button className="tema-toogle-button" onClick={toogleTema}>
        <i className={tema === "light" ? "fas fa-moon" : "fas fa-sun"}></i>
      </button>
    </>
  );
};
