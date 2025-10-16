import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroValley from "@/assets/hero-valley.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroValley}
          alt="Lush green valley with Ganga river flowing through fruit orchards"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-river/5 to-background/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-mango/20 blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-20 w-24 h-24 rounded-full bg-river/20 blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-leaf/20 blur-xl animate-float" style={{ animationDelay: "4s" }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to{" "}
          <span className="text-gradient-forest">Ganga Fruit Valley</span>
        </h1>
        
        <p
  className="text-xl md:text-2xl mb-8 text-white tracking-wide animate-fade-in"
  style={{ animationDelay: "0.2s" }}
>
  Where nature meets nourishment
</p>

<p
  className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-white/90 font-medium leading-relaxed animate-fade-in"
  style={{ animationDelay: "0.4s" }}
>
  Experience the serenity of organic living, fruit-based nutrition, and wellness inspired by the lush valleys and pure waters of the sacred Ganga
</p>

        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Link to="/subscription">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-float group transition-all duration-300 hover:scale-105"
            >
              Subscribe Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 rounded-full border-2 border-primary/30 bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
