export default function Brands() {
  const brands = [
    {
      id: 1,
      name: "Gás go Pará",
      image: "https://www.gasdopara.com.br/img/logo.png?v",
      bg: "bg-white",
    },
    {
      id: 2,
      name: "max segurança",
      image:
        "https://www.maximaseguranca.com.br/img/logo/logo-maxima-seguran%C3%A7a.svg",
      bg: "bg-black",
    },
    {
      id: 3,
      name: "Gás go Pará",
      image:
        "https://static.wixstatic.com/media/32c4f4_b642db64391841ad9b35255022986956~mv2.png/v1/fill/w_228,h_184,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%2BB_SUPERMERCADO.png",
      bg: "bg-white",
    },
  ];

  return (
    <section
      id="brands"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Empresas que confiam no meu trabalho
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Clientes que confiam em cada entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brands) => (
            <div
              key={brands.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              <div
                className={`relative overflow-hidden flex items-center justify-center h-[200px] sm:h-[300px] ${brands.bg}`}
              >
                <img
                  src={brands.image}
                  alt={brands.image}
                  className="max-w-[70%] max-h-[70%] group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
