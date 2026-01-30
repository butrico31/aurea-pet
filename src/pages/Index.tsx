import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProductsSection from "@/components/landing/ProductsSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import AboutSection from "@/components/landing/AboutSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductsSection />
      <SocialProofSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
