import React from "react";
import "./index.css"
import Home from "./routes/Home"
import Contatos from "./routes/Contatos"
import Projetos from "./routes/Projetos"
import Sobre from "./routes/Sobre"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projetos" element={<Projetos />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Contatos" element={<Contatos />} />
    </Routes>
    </>
  );
}

export default App;
