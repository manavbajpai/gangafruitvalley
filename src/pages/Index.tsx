import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import NatureJournal from "@/components/NatureJournal";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import RiverAnimation from "@/components/RiverAnimation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <RiverAnimation />
      <Hero />
      <About />
      <Features />
      <NatureJournal />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
