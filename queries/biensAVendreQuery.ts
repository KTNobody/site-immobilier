export const biensAVendreQuery = `*[_type == "bien" && categorie == "À vendre"]{
    _id,
    titre,
    ville,
    type,
    prix,
    "mainImage": galerie[0].asset->url,
    "slug": slug.current
  }`;
  