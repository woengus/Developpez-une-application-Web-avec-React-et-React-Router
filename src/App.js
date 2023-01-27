import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Erreur from "./pages/Erreur";
import Home from "./pages/Home";
import FooterApp from "./components/Footer";
import Logement from "./pages/Logement";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        {/*page 404*/}
        <Route path="*" element={<Erreur />} />
      </Routes>
      <FooterApp />
    </BrowserRouter>
  );
};

export default App;
