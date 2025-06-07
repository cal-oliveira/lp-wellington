import { ExternalLink, Play } from "lucide-react";
import { useRef } from "react";

const Trabalhos = () => {
  const videoRef = useRef(null);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1;
      video.play().catch((e) => {
        console.warn("Falha ao reproduzir o vídeo:", e);
      });
    }
  };
  const trabalhos = [
    {
      id: 1,
      titulo: "Apresentação - Vinhos",
      categoria: "Restaurante",
      descricao:
        "Vídeo promocional para startup de tecnologia, focando na inovação e modernidade da empresa.",
      thumbnail:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=600",
      video: "https://archive.org/download/adega/vinhos.mp4",
      duracao: "2:30",
    },
    {
      id: 2,
      titulo: "Apresentação - Adega",
      categoria: "Adega",
      descricao: "Descricao qualquer",
      thumbnail:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=600",
      video: "https://archive.org/download/adega/adega.mp4",
      duracao: "15:00",
    },
    {
      id: 3,
      titulo: "Apresentação - Making Off",
      categoria: "Making Off",
      descricao: "Basidores de produção para o restaurante Coco Bambu",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600",
      video: "https://archive.org/download/adega/cocobambu.mp4",

      duracao: "4:15",
    },
  ];

  return (
    <section
      id="trabalhos"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Reels Produzidos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma seleção dos meus projetos mais marcantes, cada um contando uma
            história única através da linguagem audiovisual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trabalhos.map((trabalho) => (
            <div
              key={trabalho.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                {/* <img
                  src={trabalho.thumbnail}
                  alt={trabalho.titulo}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                /> */}
                <video
                  src={trabalho.video}
                  className="w-full h-[500px] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  ref={videoRef}
                  onClick={handleUnmute}
                ></video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Play button overlay */}
                {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Play
                      className="w-6 h-6 text-black ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div> */}

                {/* Duration badge */}
                {/* <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                  {trabalho.duracao}
                </div> */}

                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-orange-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-black font-semibold">
                  {trabalho.categoria}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {trabalho.titulo}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {trabalho.descricao}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <button className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-2 text-sm font-semibold">
                    <ExternalLink className="w-4 h-4" />
                    Ver Projeto
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-3 rounded-full font-semibold hover:from-gray-700 hover:to-gray-600 transition-all hover:scale-105">
            Ver Todos os Trabalhos
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Trabalhos;
