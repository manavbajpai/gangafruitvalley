import { motion } from "framer-motion";
import { Leaf, Apple, Cherry } from "lucide-react";

const SubscriptionHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-river/10 to-mango/10">
      {/* Floating fruit elements */}
      <motion.div
        className="absolute top-20 left-10 text-mango"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Apple size={48} className="opacity-30" />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-guava"
        animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cherry size={40} className="opacity-30" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-1/4 text-leaf"
        animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf size={36} className="opacity-30" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-valley">
            Subscribe to Wellness
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            Bring Nature to Your Doorstep
          </p>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose your perfect fruit combo and enjoy fresh, seasonal, and handpicked produce delivered weekly or monthly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionHero;
