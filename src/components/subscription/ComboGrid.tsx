import { motion } from "framer-motion";
import ComboCard from "./ComboCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface ComboGridProps {
  planType: "weekly" | "monthly";
}

const combos = [
  {
    id: 1,
    name: "Tropical Sunrise",
    fruits: ["Mango", "Papaya", "Banana", "Pineapple", "Guava"],
    benefits: "Energy, digestion, vitamins",
    weeklyPrice: 599,
    monthlyPrice: 2199,
    color: "mango",
    featured: true,
  },
  {
    id: 2,
    name: "Valley Boost",
    fruits: ["Apple", "Pomegranate", "Orange", "Kiwi", "Amla"],
    benefits: "Immunity, antioxidants",
    weeklyPrice: 699,
    monthlyPrice: 2599,
    color: "leaf",
    featured: false,
  },
  {
    id: 3,
    name: "Detox Delight",
    fruits: ["Cucumber", "Lemon", "Coconut", "Green Apple", "Tulsi"],
    benefits: "Detox, hydration, skin clarity",
    weeklyPrice: 549,
    monthlyPrice: 1999,
    color: "river",
    featured: false,
  },
  {
    id: 4,
    name: "Sweet & Tangy Trail",
    fruits: ["Lychee", "Orange", "Grapes", "Strawberry", "Watermelon"],
    benefits: "Hydration, mood lift",
    weeklyPrice: 649,
    monthlyPrice: 2399,
    color: "guava",
    featured: false,
  },
  {
    id: 5,
    name: "Seasonal Surprise",
    fruits: ["Rotating seasonal fruits", "Autumn", "Summer", "Monsoon variants"],
    benefits: "Local, fresh, diverse",
    weeklyPrice: 699,
    monthlyPrice: 2599,
    color: "accent",
    featured: false,
  },
  {
    id: 6,
    name: "Berry Bliss",
    fruits: ["Strawberry", "Blueberry", "Raspberry", "Blackberry", "Gooseberry"],
    benefits: "Antioxidants, brain health",
    weeklyPrice: 799,
    monthlyPrice: 2999,
    color: "guava",
    featured: false,
  },
  {
    id: 7,
    name: "Citrus Power",
    fruits: ["Orange", "Sweet Lime", "Grapefruit", "Lemon", "Mandarin"],
    benefits: "Vitamin C, immunity boost",
    weeklyPrice: 499,
    monthlyPrice: 1799,
    color: "mango",
    featured: false,
  },
  {
    id: 8,
    name: "Green Vitality",
    fruits: ["Green Apple", "Kiwi", "Avocado", "Green Grapes", "Pear"],
    benefits: "Energy, heart health",
    weeklyPrice: 749,
    monthlyPrice: 2799,
    color: "leaf",
    featured: false,
  },
];

const ComboGrid = ({ planType }: ComboGridProps) => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-valley mb-4">
            Choose Your Perfect Combo
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Handpicked combinations designed for wellness, taste, and nature's best nutrition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {combos.map((combo, index) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ComboCard combo={combo} planType={planType} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-accent to-mango hover:shadow-float transition-all duration-300 text-foreground font-semibold"
          >
            <Plus size={20} />
            Build Your Own Basket
          </Button>
          <p className="text-sm text-foreground/60 mt-3">
            Mix & match your favorite 5 fruits
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComboGrid;
