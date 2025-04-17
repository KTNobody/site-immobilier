import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center px-8">
      <h1 className="text-xl font-bold text-blue-700">🏡 H&M Immobilier</h1>
      <div className="flex space-x-6 text-gray-700">
        <Link to="/" className="hover:text-blue-600">Accueil</Link>
        <Link to="/biens" className="hover:text-blue-600">Nos biens</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
