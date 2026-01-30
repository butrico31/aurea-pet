import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Shield } from "lucide-react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5519991955501", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Seu Pet Merece o Melhor Cuidado!
          </h2>
          <p className="text-xl mb-10 text-primary-foreground/90">
            Agende agora a hospedagem, creche ou banho e tosa do seu pet. 
            Estamos em Mogi Mirim com todo carinho e estrutura que seu amigo merece.
          </p>
          
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="text-lg px-10 py-7 bg-background text-primary hover:bg-background/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            Fale com Nossa Equipe
          </Button>
          
          <div className="mt-12 grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <Clock className="h-10 w-10 mb-3 text-primary-foreground/80" />
              <p className="text-sm text-primary-foreground/90">
                Atendimento Rápido e Personalizado
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-10 w-10 mb-3 text-primary-foreground/80" />
              <p className="text-sm text-primary-foreground/90">
                Garantia de Qualidade Premium
              </p>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle className="h-10 w-10 mb-3 text-primary-foreground/80" />
              <p className="text-sm text-primary-foreground/90">
                Suporte Via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
