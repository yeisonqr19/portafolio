import { useEffect, useState } from "react";
import { createContext } from "react";

export const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState(localStorage.getItem("tema") || "light");

  const toogleTema = () => {
    const newTema = tema === "light" ? "dark" : "light";

    setTema(newTema);
    localStorage.setItem("tema", newTema);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", tema === "dark");
  }, [tema]);

  return (
    <TemaContext.Provider value={{ tema, toogleTema }}>
      {children}
    </TemaContext.Provider>
  );
};
