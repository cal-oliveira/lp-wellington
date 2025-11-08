import { MessageCircle, Phone, Mail, Clock, Music } from "lucide-react";
import { Button } from "./ui/button";

export default function CTA() {
  const handleWhatsApp = () => {
    const phoneNumber = "55999684849"; // Replace with actual number
    const message =
      "Olá! Gostaria de conversar sobre um projeto de filmmaking. Podemos agendar uma conversa?";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleEmail = () => {
    window.open(
      "mailto:wellington@gmail.com?subject=Interesse em Show",
      "_blank"
    );
  };

  const handlePhone = () => {
    window.open("tel:+5555999684849", "_blank");
  };

  return (
    <section  id="contato" className="relative py-32 lg:py-40 overflow-hidden bg-[url('/img4.png')] bg-cover bg-center bg-no-repeat">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-yellow-400 to-orange-500 pointer-events-none" />
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
              A história continua —{" "}
              <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                e você pode fazer parte dela
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Da cena independente para os grandes palcos, a Shotblakz segue transformando vivências em som.
              <br />
              <strong className="text-foreground">Agora é a sua vez de se conectar com o movimento.</strong>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-10 py-4 rounded-full font-bold text-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:scale-105 flex items-center gap-3 mx-auto mb-6"
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp
            </button>
              
              {/* <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground font-bold px-10 py-7 text-xl transition-all duration-300 backdrop-blur-sm group"
              >
                <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Entre em contato para shows e collabs
              </Button> */}
            </div>
            
            {/* Decorative element */}
            <div className="mt-10 flex items-center justify-center gap-3 text-muted-foreground">
              {/* <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" /> */}
              {/* <Music className="w-5 h-5 text-primary animate-pulse" /> */}
              {/* <img className="h-14" src="/img4.png" alt="logo shotblaks" /> */}
              {/* <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" /> */}
              <img className="h-28" src="/img4.png" alt="logo shotblaks" />
            </div>
          </div>
        </div>
      </section>
  );
}
