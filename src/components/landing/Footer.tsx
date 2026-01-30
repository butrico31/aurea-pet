import { Heart, Phone, MapPin, Mail } from "lucide-react";
import imersaLogo from "@/assets/logo-imersa.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logoInteira.svg" alt="Áurea Pet" className="h-6" />
            </div>
            <p className="text-background/80 text-sm">
              Cuidados com amor e dedicação para o seu melhor amigo em Mogi Mirim
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("servicos")} className="text-background/80 hover:text-primary transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("sobre")} className="text-background/80 hover:text-primary transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("depoimentos")} className="text-background/80 hover:text-primary transition-colors">
                  Depoimentos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="text-background/80 hover:text-primary transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Serviços</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Hotel & Creche Pet</li>
              <li>Banho e Tosa</li>
              <li>Táxi Dog</li>
              <li>Hospedagem para Gatos</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-background/80">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>(19) 99195-5501</div>
                  <div>(19) 3806-6619</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-background/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Mogi Mirim - SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-xs">
            © {new Date().getFullYear()} Áurea Pet. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-2 text-xs text-background/60">
            <span>Criado por</span>
            <a 
              href="https://imersa.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img src={imersaLogo} alt="Imersa" className="h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
