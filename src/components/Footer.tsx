import {
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
              Shotblakz
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Trap - Show - Produção musical
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/shotblakz/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCt1CA8AuK8SCZiApQa2YaFg"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a> */}
              <a
                href="mailto:shotblakzpro@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("reels")}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  A Quebrada no Mapa
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("reels")}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Discografia
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("depoimentos")}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Show & Estrutura
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>(91) 94002-8922</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-orange-400" />
                <span>shotblakzpro@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-orange-400 mt-1" />
                <span>
                  Florianópolis - SC
                  <br />
                  Fazemos show em todo Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} N-Teen. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-orange-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Portfolio Completo
            </a>
          </div>
        </div>
        {/* Sub Bottom bar */}
        <div className="border-t border-gray-950 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-300 text-sm">
            <a href="https://www.mlpage.com.br" target="_blank">
              <span className="text-gray-700">Developed by</span> Calebe Oliveira
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
