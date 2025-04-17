import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex gap-6 justify-center text-lg">
      <Link to="/" className="hover:text-blue-600">Accueil</Link>
      <Link to="/biens" className="hover:text-blue-600">Nos biens</Link>
      <Link to="/contact" className="hover:text-blue-600">Contact</Link>
    </nav>
  );
}

export default Navbar;
