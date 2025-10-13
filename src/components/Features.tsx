import { Apple, MapPin, Heart, BookOpen, Leaf, Droplets } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Apple,
    title: "Fruit-Based Nutrition",
    description: "Track your fruit intake, discover nutritional benefits, and create personalized fruit-based diet plans",
    color: "mango",
  },
  {
    icon: MapPin,
    title: "Orchard Experiences",
    description: "Book immersive visits to authentic fruit orchards and learn from local farmers",
    color: "leaf",
  },
  {
    icon: Heart,
    title: "Wellness Routines",
    description: "Curated meditation and yoga practices inspired by riverside serenity",
    color: "guava",
  },
  {
    icon: BookOpen,
    title: "Nature Knowledge",
    description: "Explore our library of fruit species, growing practices, and organic living guides",
    color: "primary",
  },
  {
    icon: Leaf,
    title: "Organic Living",
    description: "Daily tips and practices for sustainable, organic lifestyle choices",
    color: "leaf",
  },
  {
    icon: Droplets,
    title: "Ganga Wisdom",
    description: "Stories and teachings from the sacred valley, connecting you to ancient wellness practices",
    color: "river",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-sunrise">
            Nurture Your Natural Life
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover features designed to harmonize your body, mind, and spirit with nature's rhythm
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-float hover:-translate-y-2 bg-card/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-14 h-14 rounded-2xl bg-${feature.color}/10 flex items-center justify-center mb-6`}>
                  <feature.icon className={`h-7 w-7 text-${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
