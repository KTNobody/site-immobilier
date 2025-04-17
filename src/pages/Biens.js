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
      <h2 className="text-2xl font-semibold text-center">Nos biens disponibles</h2>

      {/* Filtres */}
      <div className="grid md:grid-cols-3 gap-4">
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

      {/* Affichage des biens */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {biensFiltres.map((bien) => (
          <div key={bien._id} className="border p-4 rounded-xl shadow">
            <img src={bien.image} alt={bien.titre} className="rounded mb-3" />
            <h3 className="text-xl font-bold">{bien.titre}</h3>
            <p className="text-gray-600">{bien.description}</p>
            <p className="mt-2 font-semibold text-blue-600">{bien.prix.toLocaleString()} €</p>
          </div>
        ))}
        {biensFiltres.length === 0 && (
          <p className="text-center text-gray-600 col-span-2">Aucun bien ne correspond à vos critères.</p>
        )}
      </div>
    </div>
  );
}

export default Biens;
