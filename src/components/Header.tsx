import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Shotblakz
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-300 hover:text-orange-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="text-gray-300 hover:text-orange-400 transition-colors"
            >
              A Quebrada no Mapa
            </button>
            <button
              onClick={() => scrollToSection("clips")}
              className="text-gray-300 hover:text-orange-400 transition-colors"
            >
              Clips
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-gray-300 hover:text-orange-400 transition-colors"
            >
              Show & Estrutura
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-orange-400 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("journey")}
                className="text-gray-300 hover:text-orange-400 transition-colors text-left"
              >
                A Quebrada no Mapa
              </button>
              <button
                onClick={() => scrollToSection("clips")}
                className="text-gray-300 hover:text-orange-400 transition-colors text-left"
              >
                Clips
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-gray-300 hover:text-orange-400 transition-colors text-left"
              >
                Show & Estrutura
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-2 rounded-full font-semibold w-fit"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
