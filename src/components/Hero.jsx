import { useEffect, useState } from "react";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const mots = ["Maroc", "désert", "royaume", "voyage", "paysage"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % mots.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-[#e6f0ff] px-6 md:px-12">
      <div className="max-w-3xl text-center">
        <p className="text-sm md:text-base uppercase tracking-widest text-[#002f5f] mb-4 font-semibold">
          🌍 Explorez la magie du Maroc
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-[#002f5f] mb-6 leading-tight">
          Découvrez le{" "}
          <span className="text-[#014080] animate-pulse">{mots[index]}</span>
        </h1>

        <p className="text-base md:text-lg text-[#33475b] mb-8 leading-relaxed">
          Des montagnes de l'Atlas aux dunes dorées du Sahara, partez à la rencontre
          d’un royaume riche en couleurs, traditions et paysages inoubliables.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-[#002f5f] hover:bg-[#014080] text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md">
            Voir les blogs
          </button>
          {/* <button className="bg-white border border-[#002f5f] text-[#002f5f] hover:bg-[#f0f5ff] px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md">
            Notre histoire
          </button> */}
        </div>
      </div>
    </section>
  );
}
