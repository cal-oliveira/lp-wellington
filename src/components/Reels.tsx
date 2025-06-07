import { ExternalLink } from "lucide-react";
import { useRef } from "react";

export default function Reels() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handleToggleMute = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === index) {
        const isMuted = video.muted;
        video.muted = !isMuted;
        video.volume = isMuted ? 1 : 0;

        if (!video.paused) return;
        video.play().catch((e) => {
          console.warn("Falha ao reproduzir o vídeo:", e);
        });
      } else {
        video.muted = true;
      }
    });
  };

  const trabalhos = [
    {
      id: 1,
      titulo: "Vinhos",
      categoria: "Restaurante",
      descricao: "Vídeo promocional para restaurante fino no centro de Belém",
      video: "https://archive.org/download/adega/vinhos.mp4",
      duracao: "2:30",
    },
    {
      id: 2,
      titulo: "Apresentação",
      categoria: "Adega",
      descricao: "Adegaria no centro de Belém",
      video: "https://archive.org/download/adega/adega.mp4",
      duracao: "15:00",
    },
    {
      id: 3,
      titulo: "Backstage",
      categoria: "Making Off",
      descricao: "Bastidores de produção para o restaurante Coco Bambu",
      video: "https://archive.org/download/adega/cocobambu.mp4",
      duracao: "4:15",
    },
  ];

  return (
    <section
      id="reels"
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
          {trabalhos.map((trabalho, index) => (
            <div
              key={trabalho.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  src={trabalho.video}
                  className="w-full h-[500px] object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Categoria */}
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
                  <button
                    onClick={() => handleToggleMute(index)}
                    className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-2 text-sm font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Clique para ativar/desativar som
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
