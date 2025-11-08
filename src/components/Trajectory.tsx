import StoryBlock from "./custom/StoryBlock";
import img1 from "../../public/img1.jpg"
import img2 from "../../public/img2.png"
import img3 from "../../public/img3.jpg"

export default function Trajectory(){
    return(
        <main className="min-h-screen bg-black">
        {/* Nossa Jornada Section */}
        <section id="journey" className="relative py-20 lg:py-32 overflow-hidden">
            {/* <SoundWave /> */}
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-16 lg:mb-24 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-400 px-4 py-2 rounded-full mb-6">
                {/* <Music className="w-4 h-4 text-primary" /> */}
                <span className="text-sm uppercase tracking-wider text-gray-400">Nossa História</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ">
                {/* De Florianópolis para o mundo:{" "} */}
                <span className="bg-gradient-to-r from-orange-400 via-gold-light to-orange-500 bg-clip-text text-transparent ">
                    A jornada da Shotblakz
                </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                O que começou como um sonho entre irmãos virou um movimento que inspira a nova geração do Trap catarinense.
                </p>
            </div>

            {/* Story Blocks */}
            <div className="space-y-24 lg:space-y-32">
                {/* Bloco 1 - Origem */}
                <StoryBlock
                title="A Origem"
                content={
                    <>
                    <p className="text-gray-400">
                        Criada em <strong className="text-white">2018</strong>, a Shotblakz nasceu da união entre{" "}
                        <strong className="text-white">N-Teen</strong> e{" "}
                        <strong className="text-white">Nego Eve</strong> — dois irmãos apaixonados por música e pela cultura urbana.
                    </p>
                    <p className="text-gray-400">
                        De forma independente, eles começaram a construir seu som autêntico em Florianópolis, misturando vivências reais, identidade e originalidade.
                    </p>
                    </>
                }
                imageSrc={img1}
                imageAlt="Shotblakz no estúdio criando música"
                />

                {/* Bloco 2 - Conquistas */}
                <StoryBlock
                title="Conquistas"
                content={
                    <>
                    <p className="text-gray-400">
                        Ao longo de <strong className="text-white">+6 anos de estrada</strong>, o duo conquistou espaço nas principais casas noturnas da região — como{" "}
                        <strong className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">SK Lounge</strong>,{" "}
                        <strong className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">Terrazo Onze</strong> e{" "}
                        <strong className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">Cash Night</strong> — e firmou parcerias com marcas como <strong className="text-white">Cola na Grade</strong>, <strong className="text-white">Freitas Pub</strong> e <strong className="text-white">Sacramento</strong>.
                    </p>
                    <p className="text-gray-400">
                        Seus projetos ganharam destaque em portais como <strong className="text-white">Rap Malado</strong>,{" "}
                        <strong className="text-white">Trap de Lei</strong>,{" "}
                        <strong className="text-white">RND</strong>, e até mesmo em jornais locais como o Tudo Sobre Floripa.
                    </p>
                    </>
                }
                imageSrc={img2}
                imageAlt="Shotblakz performando ao vivo"
                reverse
                />

                {/* Bloco 3 - Propósito */}
                <StoryBlock
                title="Propósito"
                content={
                    <>
                    <p className="text-gray-400">
                        Mais do que música, a Shotblakz representa <strong className="text-white">movimento, resistência e atitude</strong>.
                    </p>
                    <p className="text-gray-400">
                        Cada batida carrega a essência de quem acredita no próprio som e inspira uma nova geração de artistas a fazer o mesmo.
                    </p>
                    </>
                }
                imageSrc={img3}
                imageAlt="Shotblakz nos bastidores"
                />
            </div>

            {/* <div className="mt-24 lg:mt-32 text-center animate-fade-in-up">
                <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
                
                <div className="relative z-10">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Pronto pra fazer parte dessa história?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Acompanhe a jornada da Shotblakz e faça parte do movimento que está transformando o Trap brasileiro.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-primary to-gold-light hover:from-gold-dark hover:to-primary text-primary-foreground font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow group"
                    >
                        <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Ouça agora
                    </Button>
                    
                    <Button 
                        size="lg" 
                        variant="outline"
                        className="border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground font-bold px-8 py-6 text-lg transition-all duration-300"
                    >
                        Ver trajetória completa
                    </Button>
                    </div>
                </div>
                </div>
            </div> */}
            </div>
        </section>
        </main>
    )
}