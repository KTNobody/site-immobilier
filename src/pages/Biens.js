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
        "image": galerie[0].asset->url
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
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
          >
            <img
              src={bien.image}
              alt={bien.titre}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#20575a]">{bien.titre}</h3>
                <p className="text-gray-500">{bien.ville} - {bien.type}</p>
                <p className="text-gray-700 whitespace-pre-line">{bien.description}</p>
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold text-[#20575a]">
                  {bien.prix.toLocaleString()} €
                </p>
                <a
                  href={`/biens/${bien._id}`}
                  className="mt-3 inline-block w-full bg-[#20575a] hover:bg-[#174345] text-white text-center py-2 rounded-lg transition"
                >
                  Je suis intéressé
                </a>
              </div>
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
