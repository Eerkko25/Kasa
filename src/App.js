import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import ScrollToTop from './assets/utils/ScrollToTop';
import Navbar from "./components/Navbar/Navbar.js"
import Home from "./pages/home/Home.js"
import NotFound from "./pages/not-found/NotFound.js"
import APropos from "./pages/a-propos/APropos.js"
import FicheLogement from "./pages/fiche-logement/FicheLogement.js"
import Footer from "./components/Footer/Footer.js"

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
        <div className="app">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/fiche-logement/:id" element={<FicheLogement />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/" element={<Home />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/*" element={<Navigate replace to="/not-found" />} />
            </Routes>
          </div>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

