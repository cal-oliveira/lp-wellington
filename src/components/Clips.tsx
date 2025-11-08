import { ClipCard } from "./custom/ClipCard";
import img1 from "../../public/img1.jpg"

export default function Clips(){
    return(
        <section id="clipes" className="relative py-20 lg:py-32 bg-black">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full mb-6">
              {/* <Play className="w-4 h-4 text-primary" /> */}
              <span className="text-sm uppercase tracking-wider text-muted-foreground">Nosso Som Visual</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Clipes em Destaque
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Histórias, vivências e batidas que mostram o verdadeiro som da Shotblakz.
            </p>
          </div>

          {/* Grid de Clipes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 lg:mb-20">
            <ClipCard
              title="Trap in Brazil (feat. Lil Tecco)"
              description="Lançado durante a Copa do Mundo, esse som colocou a Shotblakz no radar nacional. Direção de Morlock Art Lab e produção visual de alto impacto."
              imageSrc={img1}
              imageAlt="Clipe Trap in Brazil da Shotblakz"
              ctaText="Assistir agora"
            />
            
            <ClipCard
              title="Party – Nego Eve"
              description="Um dos maiores sucessos da dupla, com patrocínio da Sem Crise e apoio de MZ Bebidas e Nego D'água. Dirigido por Kura Films, com roteiro e direção executiva de N-Teen."
              imageSrc={img1}
              imageAlt="Clipe Party da Shotblakz"
              ctaText="Ver clipe"
            />
            
            <ClipCard
              title="200 KM"
              description="Single icônico da dupla, com direção de arte de Marcio Muller e fotografia de Jackson Einstein. Uma história sobre trajetória, resistência e superação."
              imageSrc={img1}
              imageAlt="Clipe 200 KM da Shotblakz"
              ctaText="Assistir clipe"
            />
          </div>

          {/* CTA Final */}
          {/* <div className="text-center animate-fade-in-up">
            <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  Quer ver mais?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Explore toda a discografia visual da Shotblakz e acompanhe os próximos lançamentos.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-gold-light hover:from-gold-dark hover:to-primary text-primary-foreground font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Youtube className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Assista todos os clipes
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground font-bold px-8 py-6 text-lg transition-all duration-300"
                  >
                    <Music className="w-5 h-5 mr-2" />
                    Ouça no Spotify
                  </Button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    )
}