import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Sparkles } from "lucide-react";

interface Combo {
  id: number;
  name: string;
  fruits: string[];
  benefits: string;
  weeklyPrice: number;
  monthlyPrice: number;
  color: string;
  featured: boolean;
}

interface ComboCardProps {
  combo: Combo;
  planType: "weekly" | "monthly";
}

const ComboCard = ({ combo, planType }: ComboCardProps) => {
  const price = planType === "weekly" ? combo.weeklyPrice : combo.monthlyPrice;

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <Card className="relative h-full p-6 border-2 border-primary/30 bg-gradient-to-br from-card to-primary/5 hover:shadow-float transition-all duration-300 overflow-hidden group">
        {/* Floating sparkles effect */}
        <motion.div
          className="absolute -top-2 -right-2 text-mango opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles size={24} />
        </motion.div>

        {combo.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-mango to-accent text-foreground px-3 py-1 rounded-full text-xs font-semibold">
            <Star size={12} fill="currentColor" />
            <span>Most Loved</span>
          </div>
        )}

        <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${combo.color}/30 to-${combo.color}/10 border-2 border-${combo.color}/40 flex items-center justify-center mb-4`}>
          <span className="text-3xl">🍎</span>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-3">{combo.name}</h3>

        <div className="mb-4">
          <p className="text-sm text-foreground/60 mb-2 font-medium">Includes:</p>
          <div className="flex flex-wrap gap-2">
            {combo.fruits.slice(0, 3).map((fruit, index) => (
              <span
                key={index}
                className="text-xs bg-primary/10 text-foreground/80 px-2 py-1 rounded-full border border-primary/20"
              >
                {fruit}
              </span>
            ))}
            {combo.fruits.length > 3 && (
              <span className="text-xs text-foreground/60 px-2 py-1">
                +{combo.fruits.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="mb-4 p-3 bg-gradient-to-r from-river/10 to-sky/10 rounded-lg border border-river/20">
          <p className="text-xs text-foreground/70 font-medium">Benefits:</p>
          <p className="text-sm text-foreground/90">{combo.benefits}</p>
        </div>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-gradient-valley">₹{price}</span>
          <span className="text-sm text-foreground/60">/ {planType}</span>
        </div>

        <Button className="w-full bg-gradient-to-r from-primary to-leaf hover:shadow-soft transition-all duration-300">
          Subscribe Now
        </Button>
      </Card>
    </motion.div>
  );
};

export default ComboCard;
