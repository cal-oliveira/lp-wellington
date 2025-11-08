import { Play, Star } from "lucide-react";

export default function Hero() {
  const handleWhatsApp = () => {
    const phoneNumber = "5511999999999"; // Replace with actual number
    const message =
      "Olá! Gostaria de saber mais sobre seus serviços de filmmaking.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-gray-300 text-sm">
              Filmmaker Profissional
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Shotblakz
            </span>
          </h1>
          
          <h2 className="text-4xl font-semibold leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              O Trap que vem de Floripa para o Brasil
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed mt-2">
            Desde 2018 representando a força do Trap nacional com autenticidade e propósito.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">+6</div>
              <div className="text-gray-400">Estrada</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">+10</div>
              <div className="text-gray-400">Produções</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">1</div>
              <div className="text-gray-400">Propósito</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:scale-105"
            >
              Chamar no WhatsApp
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("reels")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Ver Trabalhos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
