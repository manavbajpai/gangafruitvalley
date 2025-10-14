import { motion } from "framer-motion";
import { Calendar, RefreshCw } from "lucide-react";

interface PlanToggleProps {
  planType: "weekly" | "monthly";
  setPlanType: (type: "weekly" | "monthly") => void;
}

const PlanToggle = ({ planType, setPlanType }: PlanToggleProps) => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-md mx-auto">
        <div className="relative bg-card border-2 border-primary/30 rounded-full p-2 shadow-soft">
          <motion.div
            className="absolute top-2 left-2 h-[calc(100%-16px)] bg-gradient-to-r from-primary to-leaf rounded-full"
            initial={false}
            animate={{
              width: "calc(50% - 8px)",
              x: planType === "weekly" ? 0 : "calc(100% + 8px)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          
          <div className="relative z-10 grid grid-cols-2 gap-2">
            <button
              onClick={() => setPlanType("weekly")}
              className={`flex items-center justify-center gap-2 py-3 px-6 rounded-full transition-colors ${
                planType === "weekly" ? "text-primary-foreground" : "text-foreground/70"
              }`}
            >
              <RefreshCw size={18} />
              <span className="font-medium">Weekly Plans</span>
            </button>
            
            <button
              onClick={() => setPlanType("monthly")}
              className={`flex items-center justify-center gap-2 py-3 px-6 rounded-full transition-colors ${
                planType === "monthly" ? "text-primary-foreground" : "text-foreground/70"
              }`}
            >
              <Calendar size={18} />
              <span className="font-medium">Monthly Plans</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanToggle;
