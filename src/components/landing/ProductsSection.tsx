import { Hotel, Scissors, Car, Cat, Home } from "lucide-react";
import productsImage from "/cachorros-brincando.jfif";

const differentials = [
  {
    icon: Hotel,
    title: "Hotel & Creche Pet",
    description: "Hospedagem especializada para cães e gatos com ambientes separados e climatizados"
  },
  {
    icon: Scissors,
    title: "Banho e Tosa",
    description: "Serviço completo de higiene e estética para deixar seu pet limpinho"
  },
  {
    icon: Car,
    title: "Táxi Dog",
    description: "Transporte seguro para seu pet com todo conforto e cuidado"
  },
  {
    icon: Cat,
    title: "Especialistas em Gatos",
    description: "Primeiro hotel da região com hospedagem adaptada para felinos"
  },
  {
    icon: Home,
    title: "Portas Abertas",
    description: "Visite nosso espaço quando quiser e conheça onde seu pet ficará"
  }
];

const ProductsSection = () => {
  return (
    <section id="servicos" className="py-20 bg-muted">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Tudo em Um Só Lugar
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Na Áurea Pet, você encontra todos os serviços que seu pet precisa em Mogi Mirim. 
              Somos o primeiro hotel da região com hospedagem especializada para gatos, além de 
              oferecer creche, banho e tosa e transporte. Tudo com amor e dedicação!
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {differentials.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className="flex gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={productsImage} 
                alt="Produtos Premium Áurea Pet" 
                className="w-full max-h-[75vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
