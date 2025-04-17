import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../sanity";

function BienDetail() {
  const { id } = useParams();
  const [bien, setBien] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "bien" && _id == "${id}"][0]{
      titre, description, prix, ville, type, "image": image.asset->url
    }`).then(setBien);
  }, [id]);

  if (!bien) return <div className="p-6 text-center">Chargement...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={bien.image} alt={bien.titre} className="w-full h-80 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2">{bien.titre}</h1>
      <p className="text-gray-500">{bien.type} à {bien.ville}</p>
      <p className="text-xl text-blue-600 font-bold mt-4">{bien.prix.toLocaleString()} €</p>
      <p className="mt-4 text-gray-700">{bien.description}</p>
    </div>
  );
}

export default BienDetail;
