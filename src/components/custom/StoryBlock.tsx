import { ReactNode } from "react";

interface StoryBlockProps {
  title: string;
  content: ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function StoryBlock({ title, content, imageSrc, imageAlt, reverse = false}:StoryBlockProps){
    return(
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'} animate-fade-in-up`}>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">{title}</h3>
                <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4">
                {content}
                </div>
            </div>
            <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'} animate-fade-in-up`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                    src={imageSrc} 
                    alt={imageAlt}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </div>
        </div>
    )
}