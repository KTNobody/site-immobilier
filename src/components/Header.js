import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="shadow-md sticky top-0 z-50"
      style={{ backgroundColor: "#20575a" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Nom */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo H&M"
            className="h-20 w-20 object-contain"
          />
          <span className="text-2xl font-bold text-white">H&M Immobilier</span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <Link to="/" className="hover:text-yellow-400">Accueil</Link>
          <Link to="/biens" className="hover:text-yellow-400">Nos biens</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </nav>

        {/* Menu mobile burger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Dropdown mobile */}
      {isOpen && (
        <nav
          className="md:hidden px-4 pb-4 flex flex-col gap-4 text-white font-medium"
          style={{ backgroundColor: "#20575a" }}
        >
          <Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link to="/biens" onClick={() => setIsOpen(false)}>Nos biens</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
