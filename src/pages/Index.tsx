import Header from "../components/Header";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Brands from "@/components/Brands";

import Hero from "@/components/Hero";
import Reels from "@/components/Reels";
import Trajectory from "@/components/Trajectory";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Trajectory />
      <Brands />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
