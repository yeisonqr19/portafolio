import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import { Home } from "./components/home/home"
import NavBar from "./components/navBar/NavBar"

function App() {

  return (
    <>
      <Router>

          < NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
