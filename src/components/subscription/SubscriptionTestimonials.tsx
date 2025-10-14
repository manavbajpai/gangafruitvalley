import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    combo: "Tropical Sunrise",
    quote: "The freshness is unmatched! My mornings feel brighter with these fruits.",
    benefit: "Improved energy & digestion",
    rating: 5,
  },
  {
    name: "Amit Patel",
    combo: "Valley Boost",
    quote: "Haven't fallen sick in months. The immunity combo really works!",
    benefit: "Better immunity",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    combo: "Detox Delight",
    quote: "My skin has never glowed like this. Pure, natural detox magic.",
    benefit: "Radiant skin",
    rating: 5,
  },
  {
    name: "Rahul Kumar",
    combo: "Sweet & Tangy Trail",
    quote: "Every delivery is a delightful surprise. Love the variety!",
    benefit: "Mood & hydration boost",
    rating: 5,
  },
];

const SubscriptionTestimonials = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Soft background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-leaf rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-mango rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-valley mb-4">
            Stories from Our Community
          </h2>
          <p className="text-lg text-foreground/70">
            Real people, real wellness transformations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 border-2 border-primary/30 bg-gradient-to-br from-card via-guava/5 to-mango/5 hover:shadow-float transition-all duration-300 relative overflow-hidden">
                <Quote className="absolute top-4 right-4 text-primary/20" size={40} />
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-mango fill-mango" />
                  ))}
                </div>

                <p className="text-foreground/80 mb-4 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="mb-3 p-2 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xs text-foreground/60">Using:</p>
                  <p className="text-sm font-semibold text-primary">{testimonial.combo}</p>
                </div>

                <div className="mb-3 p-2 bg-leaf/5 rounded-lg border border-leaf/10">
                  <p className="text-xs text-foreground/60">Wellness Benefit:</p>
                  <p className="text-sm font-semibold text-leaf">{testimonial.benefit}</p>
                </div>

                <p className="text-sm font-bold text-foreground">— {testimonial.name}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionTestimonials;
