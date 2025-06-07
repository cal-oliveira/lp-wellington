import Header from "../components/Header";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Brands from "@/components/Brands";
import Reels from "@/components/Trabalhos";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Reels />
      <Brands />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
