import { useState } from "react";
import axios from "axios";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      setSubmitStatus({
        success: false,
        message: "Veuillez remplir tous les champs.",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await axios.post("http://localhost:5000/api/contact/", {
        name: form.name,
        email: form.email,
        message: form.message,
      });

      setSubmitStatus({
        success: true,
        message: "Merci pour votre message ! Nous vous contacterons bientôt.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "Une erreur est survenue. Veuillez réessayer plus tard.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Formulaire */}
        <div>
          <h2 className="text-3xl font-bold text-[#002f5f] mb-6">Contactez-nous</h2>
          
          {submitStatus.message && (
            <div
              className={`mb-4 p-3 rounded-md ${
                submitStatus.success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={form.name}
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
              disabled={isSubmitting}
              className={`bg-[#002f5f] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#014080] transition ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
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