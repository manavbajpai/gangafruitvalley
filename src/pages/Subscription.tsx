import { useState } from "react";
import SubscriptionHero from "@/components/subscription/SubscriptionHero";
import PlanToggle from "@/components/subscription/PlanToggle";
import ComboGrid from "@/components/subscription/ComboGrid";
import SubscriptionFeatures from "@/components/subscription/SubscriptionFeatures";
import SubscriptionTestimonials from "@/components/subscription/SubscriptionTestimonials";
import SubscriptionFAQ from "@/components/subscription/SubscriptionFAQ";
import Footer from "@/components/Footer";

const Subscription = () => {
  const [planType, setPlanType] = useState<"weekly" | "monthly">("weekly");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
      <SubscriptionHero />
      <PlanToggle planType={planType} setPlanType={setPlanType} />
      <ComboGrid planType={planType} />
      <SubscriptionFeatures />
      <SubscriptionTestimonials />
      <SubscriptionFAQ />
      <Footer />
    </div>
  );
};

export default Subscription;
