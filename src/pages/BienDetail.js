import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../sanity";

function BienDetail() {
  const { id } = useParams();
  const [bien, setBien] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "bien" && _id == $id][0]{
        _id,
        titre,
        ville,
        type,
        prix,
        description,
        superficie,
        chambres,
        "image": image.asset->url
      }`, { id })
      .then((data) => setBien(data));
  }, [id]);

  if (!bien) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">Chargement du bien...</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <img src={bien.image} alt={bien.titre} className="w-full h-96 object-cover rounded-lg shadow mb-8" />

      <h1 className="text-3xl font-bold text-[#20575a] mb-2">{bien.titre}</h1>
      <p className="text-lg text-gray-600 mb-4">
        {bien.ville} · {bien.type}
      </p>
      <p className="text-2xl font-semibold text-[#20575a] mb-6">
        {bien.prix.toLocaleString()} €
      </p>

      <p className="text-gray-800 leading-relaxed mb-4">{bien.description}</p>

      {bien.superficie && (
        <p className="text-gray-700">
          📐 Superficie : <strong>{bien.superficie} m²</strong>
        </p>
      )}
      {bien.chambres && (
        <p className="text-gray-700">
          🛏️ Chambres : <strong>{bien.chambres}</strong>
        </p>
      )}

      <button className="mt-8 bg-[#20575a] text-white px-6 py-3 rounded hover:bg-[#1b474a] transition">
        Je suis intéressé
      </button>
    </div>
  );
}

export default BienDetail;
