import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import Display from "./pages/display";
import Submit from "./pages/submit";

function App() { 
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
