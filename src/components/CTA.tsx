import { MessageCircle, Phone, Mail, Clock } from "lucide-react";

const CTA = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "5591982560535"; // Replace with actual number
    const message =
      "Olá! Gostaria de conversar sobre um projeto de filmmaking. Podemos agendar uma conversa?";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleEmail = () => {
    window.open(
      "mailto:lucasoliver@gmail.com?subject=Interesse em Projeto de Filmmaking",
      "_blank"
    );
  };

  const handlePhone = () => {
    window.open("tel:+5591982560535", "_blank");
  };

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-3xl p-8 md:p-12 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Pronto para criar algo incrível?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Vamos conversar sobre seu projeto! Estou aqui para transformar sua
              visão em realidade com qualidade cinematográfica profissional.
            </p>

            <button
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-10 py-4 rounded-full font-bold text-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:scale-105 flex items-center gap-3 mx-auto mb-6"
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp
            </button>

            <p className="text-gray-500 text-sm">
              Resposta em até 2 horas • Orçamento gratuito • Primeira consulta
              sem compromisso
            </p>
          </div>

          {/* Contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <button
              onClick={handleWhatsApp}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-400 text-sm">Resposta rápida e prática</p>
            </button>

            <button
              onClick={handleEmail}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">E-mail</h3>
              <p className="text-gray-400 text-sm">Para projetos detalhados</p>
            </button>

            <button
              onClick={handlePhone}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Telefone</h3>
              <p className="text-gray-400 text-sm">Conversa direta</p>
            </button>
          </div>

          {/* Availability */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-orange-400" />
              <h3 className="text-white font-semibold">
                Horário de Atendimento
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
              <div>
                <strong className="text-white">Segunda a Sexta:</strong> 9h às
                18h
              </div>
              <div>
                <strong className="text-white">Sábado:</strong> 9h às 14h
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Para urgências, o WhatsApp está sempre disponível!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
