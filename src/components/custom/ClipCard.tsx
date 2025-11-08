import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface ClipCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
}

export function ClipCard({ 
  title, 
  description, 
  imageSrc, 
  imageAlt,
  ctaText = "Assistir agora"
}: ClipCardProps){
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-border shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in">
      {/* Thumbnail com overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay escuro que aparece no hover */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="w-10 h-10 text-primary fill-primary" />
          </div>
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-6">
          {description}
        </p>
        
        <Button 
          className="w-full bg-gradient-to-r to-orange-400 via-gold-light from-orange-500 hover:from-gold-dark hover:to-primary text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          <Play className="w-4 h-4 mr-2" />
          {ctaText}
        </Button>
      </div>
    </div>
  );
};
