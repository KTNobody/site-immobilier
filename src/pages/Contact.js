import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xxx", // ← Remplace par ton ID
      "template_xxx", // ← Remplace par ton template
      form.current,
      "publicKey_xxx" // ← Remplace par ta clé publique EmailJS
    ).then(() => {
      alert("Message envoyé avec succès !");
      form.current.reset();
    }).catch(() => {
      alert("Une erreur est survenue.");
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6 text-blue-700">Contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4 bg-white p-6 shadow rounded-xl">
        <input name="from_name" type="text" placeholder="Nom" className="w-full border p-3 rounded" required />
        <input name="from_email" type="email" placeholder="Email" className="w-full border p-3 rounded" required />
        <input name="from_tel" type="tel" placeholder="Téléphone" className="w-full border p-3 rounded" />
        <textarea name="message" placeholder="Votre message" className="w-full border p-3 rounded h-32" required></textarea>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;
