import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Erreur from "./pages/Erreur";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*page 404*/}
        <Route path="*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
