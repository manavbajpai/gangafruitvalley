import { motion } from "framer-motion";
import { Truck, Leaf, BookOpen, Gift, Shield } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Delivered fresh to your doorstep with care",
    color: "river",
  },
  {
    icon: Leaf,
    title: "Seasonal Freshness",
    description: "100% guarantee on quality and ripeness",
    color: "leaf",
  },
  {
    icon: BookOpen,
    title: "Storage Tips",
    description: "Natural preservation guide with every box",
    color: "mango",
  },
  {
    icon: Gift,
    title: "Surprise Fruits",
    description: "Occasional delightful additions",
    color: "guava",
  },
  {
    icon: Shield,
    title: "Ganga Valley Story",
    description: "Learn about your fruit's journey",
    color: "accent",
  },
];

const SubscriptionFeatures = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-muted/40 via-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-valley mb-4">
            What's Included
          </h2>
          <p className="text-lg text-foreground/70">
            More than just fruits — it's a complete wellness experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-card border-2 border-primary/30 rounded-2xl hover:shadow-soft transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-${feature.color}/30 to-${feature.color}/10 border-2 border-${feature.color}/40 flex items-center justify-center`}>
                <feature.icon size={28} className={`text-${feature.color}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionFeatures;
