import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chemistry from "./pages/chemistry";
function App() {
	return <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chemistry" element={<Chemistry />} />
      </Routes>
    </Router>
  </>;
}

export default App;
