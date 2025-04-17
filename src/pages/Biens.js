import React, { useEffect, useState } from "react";
import { client } from "../sanity";

function Biens() {
  const [biens, setBiens] = useState([]);
  const [filtreType, setFiltreType] = useState("");
  const [filtreVille, setFiltreVille] = useState("");
  const [filtrePrix, setFiltrePrix] = useState("");

  useEffect(() => {
    client
      .fetch(`*[_type == "bien"]{
        _id,
        titre,
        ville,
        type,
        prix,
        description,
        "image": image.asset->url
      }`)
      .then((data) => setBiens(data));
  }, []);

  const biensFiltres = biens.filter((bien) => {
    return (
      (filtreType === "" || bien.type === filtreType) &&
      (filtreVille === "" || bien.ville === filtreVille) &&
      (filtrePrix === "" || bien.prix <= parseInt(filtrePrix))
    );
  });

  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#20575a]">
        Nos biens disponibles
      </h1>

      {/* Filtres */}
      <div className="grid md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
        <select
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#20575a]"
          onChange={(e) => setFiltreType(e.target.value)}
        >
          <option value="">Type de bien</option>
          <option value="Maison">Maison</option>
          <option value="Appartement">Appartement</option>
          <option value="Terrain">Terrain</option>
        </select>

        <select
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#20575a]"
          onChange={(e) => setFiltreVille(e.target.value)}
        >
          <option value="">Ville</option>
          {[...new Set(biens.map((b) => b.ville))].map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Prix max (€)"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#20575a]"
          onChange={(e) => setFiltrePrix(e.target.value)}
        />
      </div>

      {/* Résultats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {biensFiltres.map((bien) => (
          <div
            key={bien._id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={bien.image}
              alt={bien.titre}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 space-y-2">
              <a
                href={`/biens/${bien._id}`}
                className="text-xl font-semibold text-[#20575a] hover:underline"
              >
                {bien.titre}
              </a>
              <p className="text-gray-600">{bien.description}</p>
              <p className="text-[#20575a] font-bold text-lg">
                {bien.prix.toLocaleString()} €
              </p>
              <button className="mt-2 w-full bg-[#20575a] hover:bg-[#174345] text-white py-2 rounded-lg transition">
                Je suis intéressé
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Aucun résultat */}
      {biensFiltres.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          Aucun bien ne correspond à vos critères.
        </p>
      )}
    </div>
  );
}

export default Biens;
