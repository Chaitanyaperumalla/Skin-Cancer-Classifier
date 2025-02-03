import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Info from "./components/Info";
import Tools from "./components/Tools";
import OurSolutions from "./components/OurSolutions";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/our-solutions" element={<OurSolutions />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
    </Router>
  );
}

export default App;
