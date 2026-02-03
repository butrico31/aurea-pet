import { Heart, Shield, Sparkles } from "lucide-react";
import catImage from "@/assets/cat-hotel.jpg";

const values = [
  {
    icon: Heart,
    title: "Amor pelos Animais",
    description: "Cuidamos de cada pet como se fosse da nossa família"
  },
  {
    icon: Shield,
    title: "Segurança e Conforto",
    description: "Ambientes climatizados e áreas separadas para cada porte"
  },
  {
    icon: Sparkles,
    title: "Transparência Total",
    description: "Nossas portas estão sempre abertas para você conhecer"
  }
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Quem Somos
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Somos a Áurea Pet, um espaço completo dedicado ao bem-estar dos animais de 
            estimação em Mogi Mirim. Atuamos como hotel e creche para cães e gatos, 
            além de oferecermos banho e tosa, táxi pet e contamos com clínica veterinária 
            nas instalações para maior segurança e tranquilidade.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={catImage} 
                alt="Gato hospedado na Áurea Pet" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nossa proposta é oferecer em um único lugar tudo o que o tutor precisa para 
                cuidar do seu melhor amigo com segurança, carinho e praticidade. Nos destacamos 
                por sermos o primeiro hotel/creche da região com hospedagem adaptada e 
                especializada para gatos, além de áreas climatizadas e separadas por porte para 
                garantir o conforto de todos. Contamos também com clínica veterinária nas 
                instalações para atendimento imediato sempre que necessário.
              </p>
              
              <div className="grid gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1">
                          {value.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
