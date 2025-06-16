import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
import { TemaProvider } from "./temaContext/TemaContext";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <TemaProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </TemaProvider>
    </>
  );
}

export default App;
