import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./components/home/home";
import NavBar from "./components/navBar/NavBar";
import { TemaProvider } from "./temaContext/TemaContext";

function App() {
  return (
    <>
      <TemaProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </TemaProvider>
    </>
  );
}

export default App;
