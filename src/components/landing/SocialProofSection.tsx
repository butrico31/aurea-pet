import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import communityImage from "@/assets/facade-photo.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Cliente",
    pet: "Bebê",
    text: "Eu agradeço por todo cuidado e carinho com a minha bebê. Que Deus abençoe vcs muitooo... Sucesso!!!",
    rating: 5
  },
  {
    name: "Cliente",
    pet: "Theo",
    text: "Obrigado por cuidar tão bem do theo.",
    rating: 5
  },
  {
    name: "Cliente",
    pet: "Amorzinho",
    text: "Eu quero agracer imensamente por todo carinho. E também pela tranquilidade por saber onde deixar com segurança meu amorzinho quado precisar. De coração o meu muito obrigada!",
    rating: 5
  },
  {
    name: "Cliente",
    pet: "Kobe",
    text: "Tô achando que ele é que não vai querer voltar kkkkkkk Curtiuuuu muito essa hospedagem top!!!!",
    rating: 5
  },
  {
    name: "Cliente",
    pet: "Pet",
    text: "Ai que delícia!!! Melhor hospedagem da vidaaaaa",
    rating: 5
  }
];

const SocialProofSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Comunidade Áurea Pet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clientes que confiam e recomendam nossos serviços
          </p>
        </div>
        
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img 
              src={communityImage} 
              alt="Comunidade Áurea Pet" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full">
                  <CardContent className="pt-6 flex flex-col h-full min-h-[280px]">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <Quote className="h-8 w-8 text-primary/20 mb-3" />
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
