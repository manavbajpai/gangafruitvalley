import freshFruits from "@/assets/fresh-fruits.jpg";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-valley">
              About Ganga Fruit Valley
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Born from the serene valleys where the sacred Ganga flows and fruit orchards flourish, our app is your companion in embracing a life rooted in nature's wisdom.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              We believe in the power of organic living, the nourishment of fruit-based diets, and the peace that comes from reconnecting with nature. Every feature is designed to bring you closer to the earth's rhythms and your own wellbeing.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-card rounded-2xl shadow-soft">
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Organic Recipes</div>
              </div>
              <div className="text-center p-4 bg-card rounded-2xl shadow-soft">
                <div className="text-3xl font-bold text-river mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Wellness Practices</div>
              </div>
              <div className="text-center p-4 bg-card rounded-2xl shadow-soft">
                <div className="text-3xl font-bold text-mango mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Valley Experiences</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-float">
              <img
                src={freshFruits}
                alt="Fresh organic fruits including mangoes, guavas, and berries arranged naturally"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-guava/30 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-leaf/30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
