import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Menu from './components/Menu';
import Usuarios from "./components/Usuarios";
import Sobre from "./pages/about/About";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Menu />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="usuarios" element={<Usuarios />} />
      <Route path="sobre" element={<Sobre />} />
    </Routes>
  </BrowserRouter>
);
