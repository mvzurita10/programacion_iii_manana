import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BsNavbar from "./components/bs/BsNavbar";
import BsFooter from "./components/bs/BsFooter";
import HomeBootstrap from "./pages/HomeBootstrap";
import AboutBootstrap from "./pages/AboutBootstrap";

export default function App() {
  return (
    <BrowserRouter>
      <BsNavbar />

      <Routes>
        <Route path="/" element={<HomeBootstrap />} />
        <Route path="/about" element={<AboutBootstrap />} />
      </Routes>

      <BsFooter />
    </BrowserRouter>
  );
}