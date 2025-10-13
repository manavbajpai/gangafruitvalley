import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import wellnessNature from "@/assets/wellness-nature.jpg";

const testimonials = [
  {
    name: "Meera Desai",
    location: "Mumbai",
    text: "Ganga Fruit Valley transformed my approach to health. The fruit tracking feature helped me discover nutrition I never knew existed. I feel more connected to nature than ever.",
    rating: 5,
  },
  {
    name: "Arjun Singh",
    location: "Dehradun",
    text: "The orchard experiences are magical. Walking through fruit groves at sunrise, learning from farmers — it's brought peace of mind I'd lost in city life.",
    rating: 5,
  },
  {
    name: "Kavita Iyer",
    location: "Bangalore",
    text: "This app is a sanctuary in my pocket. The wellness routines by the river sounds, the organic recipes — everything feels so authentic and grounding.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={wellnessNature}
          alt="Peaceful meditation scene by flowing river"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-sunrise">
            Voices from the Valley
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from people who found their path to wellness through nature
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="border-2 border-primary/30 bg-gradient-to-br from-card via-guava/5 to-mango/5 backdrop-blur-sm hover:shadow-float transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-mango text-mango"
                    />
                  ))}
                </div>
                
                <p className="text-foreground/90 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
