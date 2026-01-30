import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quais serviços a Áurea Pet oferece?",
    answer: "Oferecemos hotel e creche para cães e gatos, banho e tosa completo, e táxi dog para transporte seguro do seu pet. Somos o primeiro da região com hospedagem especializada para gatos!"
  },
  {
    question: "Como funciona a hospedagem para gatos?",
    answer: "Temos ambientes especialmente adaptados e climatizados para felinos, com áreas separadas que respeitam as necessidades específicas dos gatos, garantindo conforto e tranquilidade."
  },
  {
    question: "Posso visitar as instalações antes?",
    answer: "Claro! Nossas portas estão sempre abertas para você conhecer nosso espaço e ver onde seu pet ficará. Acreditamos na transparência e queremos que você se sinta seguro."
  },
  {
    question: "Como faço para agendar?",
    answer: "É simples! Entre em contato pelo WhatsApp (19) 99195-5501 ou telefone (19) 3806-6619. Nossa equipe irá te atender e agendar o melhor horário para você."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre nossos produtos e serviços
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg border border-border px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
