import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AntLayout from "./components/antd/AntLayout";
import AntFooter from "./components/antd/AntFooter";
import HomeAnt from "./pages/HomeAnt";
import AboutAnt from "./pages/AboutAnt";

export default function App() {
  return (
    <BrowserRouter>
      <AntLayout>
        <Routes>
          <Route path="/" element={<HomeAnt />} />
          <Route path="/about" element={<AboutAnt />} />
        </Routes>
      </AntLayout>

      <AntFooter />
    </BrowserRouter>
  );
}