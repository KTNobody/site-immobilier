import React, { useEffect, useState } from "react";
import { client } from "../sanity";

function Biens() {
  const [biens, setBiens] = useState([]);
  const [filtreType, setFiltreType] = useState("");
  const [filtreVille, setFiltreVille] = useState("");
  const [filtrePrix, setFiltrePrix] = useState("");

  useEffect(() => {
    client.fetch(`*[_type == "bien"]{
      _id,
      titre,
      ville,
      type,
      prix,
      description,
      "image": image.asset->url
    }`).then(data => setBiens(data));
  }, []);

  const biensFiltres = biens.filter((bien) => {
    return (
      (filtreType === "" || bien.type === filtreType) &&
      (filtreVille === "" || bien.ville === filtreVille) &&
      (filtrePrix === "" || bien.prix <= parseInt(filtrePrix))
    );
  });

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-center text-blue-700">Nos biens disponibles</h2>

      {/* Filtres */}
      <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <select className="border p-2 rounded" onChange={(e) => setFiltreType(e.target.value)}>
          <option value="">Type de bien</option>
          <option value="Maison">Maison</option>
          <option value="Appartement">Appartement</option>
          <option value="Terrain">Terrain</option>
        </select>

        <select className="border p-2 rounded" onChange={(e) => setFiltreVille(e.target.value)}>
          <option value="">Ville</option>
          {[...new Set(biens.map((b) => b.ville))].map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>

        <input
          type="number"
          className="border p-2 rounded"
          placeholder="Prix max (€)"
          onChange={(e) => setFiltrePrix(e.target.value)}
        />
      </div>

      {/* Résultats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {biensFiltres.map((bien) => (
          <div key={bien._id} className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img src={bien.image} alt={bien.titre} className="w-full h-56 object-cover" />
            <div className="p-4 space-y-2">
            <a href={`/biens/${bien._id}`} className="text-xl font-bold text-gray-800 hover:underline">
  {bien.titre}
</a>
              <p className="text-gray-600">{bien.description}</p>
              <p className="text-blue-600 font-semibold">{bien.prix.toLocaleString()} €</p>
              <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                Je suis intéressé
              </button>
            </div>
          </div>
        ))}
        {biensFiltres.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">Aucun bien ne correspond à vos critères.</p>
        )}
      </div>
    </div>
  );
}

export default Biens;
