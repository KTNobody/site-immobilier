import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Biens from "./pages/Biens";
import Contact from "./pages/Contact";
import BienDetail from "./pages/BienDetail"; // On l'ajoute bientôt

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/biens" element={<Biens />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/biens/:id" element={<BienDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
