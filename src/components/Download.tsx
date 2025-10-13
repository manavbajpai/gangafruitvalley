import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const Download = () => {
  return (
    <section className="py-20 px-4 bg-gradient-valley relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Nature in Your Pocket
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed">
              Download Ganga Fruit Valley and carry the wisdom of organic living, the serenity of valley landscapes, and the nourishment of nature wherever you go.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Personalized Wellness</h3>
                  <p className="text-white/80">Customized plans based on your health goals and preferences</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Offline Access</h3>
                  <p className="text-white/80">Take your wellness journey anywhere, even without internet</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Community Connection</h3>
                  <p className="text-white/80">Join thousands embracing organic living together</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="text-lg px-8 py-6 rounded-full bg-white text-primary hover:bg-white/90 shadow-float group transition-all duration-300"
              >
                <Apple className="mr-2 h-5 w-5" />
                App Store
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Google Play
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img
                src={appMockup}
                alt="Ganga Fruit Valley app interface on smartphone"
                className="w-full max-w-md mx-auto drop-shadow-2xl animate-float"
              />
              
              {/* Floating Icons */}
              <div className="absolute top-10 -left-10 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <Apple className="h-10 w-10 text-white" />
              </div>
              
              <div className="absolute bottom-20 -right-10 w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                <Smartphone className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
