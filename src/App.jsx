import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chemistry from "./pages/chemistry";
import Atom from "./pages/chemistry/materi/atom";
import Molekul from "./pages/chemistry/materi/molekul";
import AtomGame from "./pages/chemistry/games/atom";
import Navbar from "./components/Navbar";


function App() {
	return <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kimia" element={<Chemistry />} />
        <Route path="/kimia/atom" element={<Atom/>} />
        <Route path="/kimia/molekul" element={<Molekul/>} />
        <Route path="/kimia/atom/game" element={<AtomGame/>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  </>;
}

export default App;
