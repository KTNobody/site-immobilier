import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 text-sm py-6 mt-12 border-t">
      <p>&copy; {new Date().getFullYear()} H&M Immobilier – Tous droits réservés</p>
      <p className="mt-2">Site réalisé avec ❤️ à La Réunion</p>
    </footer>
  );
}

export default Footer;
