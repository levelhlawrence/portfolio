import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Routes, Route, useLocation } from "react-router-dom";

import { useState } from "react";

// importing pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Protfolio";
// localhost:5173
const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();

  return (
    <div id="app">
      <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          path="/"
          element={
            <Home toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
