import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Biens from "./pages/Biens";
import Contact from "./pages/Contact";
import BienDetail from "./pages/BienDetail";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* ✅ Le logo et menu sont dans le Header uniquement */}
        <Header />

        {/* ✅ Toutes les routes de ton site ici */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/biens" element={<Biens />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/biens/:id" element={<BienDetail />} />
            <Route path="/biens/:id" element={<BienDetail />} />
          </Routes>
        </div>

        {/* ✅ Le footer en bas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
