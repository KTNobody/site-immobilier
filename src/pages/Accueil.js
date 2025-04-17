import React from "react";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/30 text-white px-4 flex flex-col items-center text-center justify-end pb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Votre projet immobilier à La Réunion
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Maisons, appartements, terrains – H&M Immobilier vous accompagne avec
            professionnalisme et passion.
          </p>
          <Link to="/biens">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white text-lg font-semibold transition duration-300">
              Voir nos biens
            </button>
          </Link>
        </div>
      </div>

      {/* Pourquoi nous choisir */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Pourquoi choisir H&M Immobilier ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-blue-600 text-5xl mb-4">💼</div>
            <h3 className="text-xl font-semibold mb-2">Expertise locale</h3>
            <p className="text-gray-600">
              Implantés à La Réunion, nous connaissons parfaitement le marché et ses spécificités.
            </p>
          </div>
          <div
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-blue-600 text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Accompagnement personnalisé</h3>
            <p className="text-gray-600">
              Chaque projet est unique. Nous vous guidons de la recherche jusqu’à la signature.
            </p>
          </div>
          <div
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-blue-600 text-5xl mb-4">🔑</div>
            <h3 className="text-xl font-semibold mb-2">Biens exclusifs</h3>
            <p className="text-gray-600">
              Découvrez des opportunités rares que vous ne trouverez nulle part ailleurs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accueil;
