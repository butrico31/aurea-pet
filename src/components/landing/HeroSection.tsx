import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/dogs-playing.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5519991955501", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(1.1) saturate(1.3) contrast(1.05)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-background/30" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 mt-20">
        <div className="max-w-2xl">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
              Um Hotel Bom
              <span className="text-primary block mt-2">Pra Cachorro</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Hotel e creche especializado para cães e gatos em Mogi Mirim. 
            O primeiro da região com hospedagem adaptada para felinos!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale Conosco no WhatsApp
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              Ambientes Climatizados
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
