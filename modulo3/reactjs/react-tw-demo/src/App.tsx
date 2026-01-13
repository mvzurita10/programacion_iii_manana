import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TwNavbar from "./components/tw/TwNavbar";
import TwFooter from "./components/tw/TwFooter";
import HomeTW from "./pages/HomeTW";
import AboutTW from "./pages/AboutTW";

export default function App() {
  return (
    <BrowserRouter>
      <TwNavbar />

      <Routes>
        <Route path="/" element={<HomeTW />} />
        <Route path="/about" element={<AboutTW />} />
      </Routes>

      <TwFooter />
    </BrowserRouter>
  );
}