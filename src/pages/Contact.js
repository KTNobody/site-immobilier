import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xxx123",     // Remplace par ton Service ID
      "template_abc456",    // Remplace par ton Template ID
      form.current,
      "123XYZabc456"        // Remplace par ta Public Key
    )
    .then(
      (result) => {
        alert("Message envoyé avec succès !");
        form.current.reset();
      },
      (error) => {
        alert("Une erreur est survenue. Merci de réessayer.");
        console.log(error.text);
      }
    );
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-center">Contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4 mt-6">
        <input name="from_name" type="text" placeholder="Votre nom" className="w-full border p-2 rounded" required />
        <input name="from_email" type="email" placeholder="Votre email" className="w-full border p-2 rounded" required />
        <input name="from_tel" type="tel" placeholder="Votre téléphone" className="w-full border p-2 rounded" />
        <textarea name="message" placeholder="Votre message" className="w-full border p-2 rounded h-32" required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
