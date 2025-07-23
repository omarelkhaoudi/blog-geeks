import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nom || !form.email || !form.message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    console.log("Message envoyé :", form);
    alert("Merci pour votre message !");
    setForm({ nom: "", email: "", message: "" });
  };

  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Formulaire */}
        <div>
          <h2 className="text-3xl font-bold text-[#002f5f] mb-6">Contactez-nous</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              value={form.nom}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#002f5f]"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#002f5f]"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 h-32 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-[#002f5f]"
            />
            <button
              type="submit"
              className="bg-[#002f5f] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#014080] transition"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Infos de contact */}
        <div className="bg-[#e6f0ff] p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold text-[#002f5f] mb-4">Informations de contact</h2>
          <p className="text-gray-700 mb-2"><strong>Email :</strong> contact@maroc-decouverte.com</p>
          <p className="text-gray-700 mb-2">
            <strong>Téléphone :</strong> +212 5 24 00 00 00<br />
            <span className="text-sm text-gray-500">Sam-Jeu 9h - 18h (GMT+1)</span>
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Localisation :</strong> Marrakech, Maroc<br />
            <span className="text-sm text-gray-500">Au cœur du royaume</span>
          </p>
          <p className="text-gray-700"><strong>Temps de réponse :</strong> sous 24h.</p>
        </div>
      </div>
    </section>
  );
}
