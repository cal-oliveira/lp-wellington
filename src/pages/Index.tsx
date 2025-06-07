import Header from "../components/Header";
import Hero from "../components/Hero";
import Trabalhos from "../components/Trabalhos";
import Reels from "../components/Reels";
import Depoimentos from "../components/Depoimentos";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Trabalhos />
      {/* <Reels /> */}
      {/* <Depoimentos /> */}
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
