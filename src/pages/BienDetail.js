import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../sanity";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function BienDetail() {
  const { id } = useParams();
  const [bien, setBien] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "bien" && _id == "${id}"][0]{
          titre,
          ville,
          type,
          prix,
          description,
          "galerie": galerie[].asset->url
        }`
      )
      .then((data) => setBien(data));
  }, [id]);

  if (!bien) {
    return (
      <p className="text-center mt-10 text-gray-500">Chargement du bien...</p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Galerie seulement */}
      {bien.galerie && bien.galerie.length > 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {bien.galerie.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Photo ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              />
            ))}
          </div>

          {isOpen && (
            <Lightbox
              mainSrc={bien.galerie[photoIndex]}
              nextSrc={bien.galerie[(photoIndex + 1) % bien.galerie.length]}
              prevSrc={
                bien.galerie[
                  (photoIndex + bien.galerie.length - 1) % bien.galerie.length
                ]
              }
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex(
                  (photoIndex + bien.galerie.length - 1) %
                    bien.galerie.length
                )
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % bien.galerie.length)
              }
            />
          )}
        </>
      )}

      {/* Contenu */}
      <h1 className="text-3xl font-bold text-[#20575a] mb-4">{bien.titre}</h1>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <p className="text-gray-600">
          📍 {bien.ville} — 🏡 {bien.type}
        </p>
        <p className="text-2xl font-semibold text-[#20575a] mt-2 md:mt-0">
          {bien.prix.toLocaleString()} €
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-8">
        {bien.description}
      </p>

      {/* Bouton d’action */}
      <a
        href="/contact"
        className="inline-block bg-[#20575a] hover:bg-[#174345] text-white px-8 py-3 rounded-lg transition text-lg"
      >
        Je souhaite être recontacté
      </a>
    </div>
  );
}

export default BienDetail;
