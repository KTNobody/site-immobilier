import React from "react";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?house,ocean')" }}>
      <div className="bg-black/60 w-full h-full flex flex-col justify-center items-center text-white text-center p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Votre projet immobilier à La Réunion</h1>
        <p className="text-lg md:text-xl mb-6">Maisons, appartements, terrains – nous avons le bien qu’il vous faut</p>
        <Link to="/biens">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-medium">
            Voir nos biens
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Accueil;
