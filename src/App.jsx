import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Nature from "./components/Nature";
import Uncertainty from "./components/Uncertainty";

function App() {
  return (
    <Router>
      <>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="naturaleza" element={<Nature />} />
          <Route path="/incertidumbre" element={<Uncertainty />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
