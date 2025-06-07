import { Play, Clock, Eye } from "lucide-react";

const Works = () => {
  const reels = [
    {
      id: 1,
      titulo: "Reel Comercial 2024",
      thumbnail:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400",
      duracao: "1:45",
      visualizacoes: "15.2K",
      descricao:
        "Compilação dos melhores momentos dos comerciais produzidos em 2024",
    },
    {
      id: 2,
      titulo: "Reel Cinematográfico",
      thumbnail:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=400",
      duracao: "2:15",
      visualizacoes: "23.1K",
      descricao:
        "Trabalhos autorais com foco na narrativa visual e estética cinematográfica",
    },
    {
      id: 3,
      titulo: "Reel Corporativo",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400",
      duracao: "1:30",
      visualizacoes: "8.7K",
      descricao:
        "Projetos institucionais e corporativos que transmitem profissionalismo",
    },
    {
      id: 4,
      titulo: "Reel Musical",
      thumbnail:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
      duracao: "2:00",
      visualizacoes: "31.5K",
      descricao:
        "Videoclipes e projetos musicais com criatividade e originalidade",
    },
  ];

  return (
    <section
      id="reels"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Videos institucionais e corporativos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Confira uma seleção dos meus melhores trabalhos compilados em reels
            que demonstram a qualidade e versatilidade das minhas produções.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={reel.thumbnail}
                  alt={reel.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play
                      className="w-8 h-8 text-black ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {reel.duracao}
                </div>

                {/* Views */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {reel.visualizacoes}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {reel.titulo}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {reel.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Reel */}
        {/* <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Reel Completo 2024</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Uma compilação especial com os melhores momentos de todos os projetos realizados este ano. 
              4 minutos de pura criatividade e técnica cinematográfica.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:scale-105 flex items-center gap-2 mx-auto">
              <Play className="w-5 h-5" fill="currentColor" />
              Assistir Reel Completo
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Works;
