import { Star, Quote } from "lucide-react";

export default function Depoiments() {
  const Depoiments = [
    {
      id: 1,
      nome: "Maria Silva",
      cargo: "Diretora de Marketing",
      empresa: "TechCorp",
      depoimento:
        "O trabalho do filmmaker superou todas as nossas expectativas. A qualidade cinematográfica e a atenção aos detalhes foram excepcionais. Nosso vídeo institucional ficou incrível!",
      foto: "https://images.unsplash.com/photo-1494790108755-2616b612b169?auto=format&fit=crop&w=150&h=150",
      rating: 5,
    },
    {
      id: 2,
      nome: "Carlos Rodrigues",
      cargo: "CEO",
      empresa: "StartupXYZ",
      depoimento:
        "Profissionalismo exemplar! Entregou o projeto no prazo e com uma qualidade que nos deixou impressionados. O comercial aumentou significativamente nossa conversão.",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
      rating: 5,
    },
    {
      id: 3,
      nome: "Ana Costa",
      cargo: "Produtora Cultural",
      empresa: "Festival de Cinema",
      depoimento:
        "Criatividade e técnica em perfeita harmonia. O documentário que produziu para nosso festival foi premiado e elogiado por todos. Recomendo sem hesitar!",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
      rating: 5,
    },
    {
      id: 4,
      nome: "Roberto Santos",
      cargo: "Músico",
      empresa: "Artista Independente",
      depoimento:
        "Meu videoclipe ficou cinematográfico! A visão artística dele transformou minha música em uma experiência visual única. Trabalho de altíssima qualidade.",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
      rating: 5,
    },
    {
      id: 5,
      nome: "Juliana Moreira",
      cargo: "Coordenadora",
      empresa: "ONG Esperança",
      depoimento:
        "Conseguiu capturar a essência da nossa causa de forma emocionante e respeitosa. O vídeo institucional nos ajudou a aumentar as doações em 40%.",
      foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150",
      rating: 5,
    },
    {
      id: 6,
      nome: "Pedro Oliveira",
      cargo: "Diretor",
      empresa: "Empresa Familiar",
      depoimento:
        "Contou a história da nossa empresa de 50 anos de forma tocante e profissional. O documentário ficou perfeito para nosso aniversário corporativo.",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-600"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      id="depoimentos"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Clientes Satisfeitos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A satisfação dos meus clientes é minha maior recompensa. Veja o que
            eles têm a dizer sobre nossos projetos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Depoiments.map((depoiment) => (
            <div
              key={depoiment.id}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-orange-400" />
              </div>

              {/* Rating */}
              <div className="mb-4">{renderStars(depoiment.rating)}</div>

              {/* depoiment */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{depoiment.depoimento}"
              </p>

              {/* Cliente info */}
              <div className="flex items-center gap-4">
                <img
                  src={depoiment.foto}
                  alt={depoiment.nome}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-400"
                />
                <div>
                  <h4 className="text-white font-semibold">{depoiment.nome}</h4>
                  <p className="text-gray-400 text-sm">{depoiment.cargo}</p>
                  <p className="text-orange-400 text-sm font-medium">
                    {depoiment.empresa}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
              98%
            </div>
            <div className="text-gray-400">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
              100%
            </div>
            <div className="text-gray-400">Projetos Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
              4.9
            </div>
            <div className="text-gray-400">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
              85%
            </div>
            <div className="text-gray-400">Clientes Recorrentes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
