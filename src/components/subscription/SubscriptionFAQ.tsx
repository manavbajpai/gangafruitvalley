import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const faqs = [
  {
    question: "How often will I receive my fruit delivery?",
    answer: "Weekly plans deliver fresh fruits every 7 days, while monthly plans provide larger quantities once a month. You can choose the frequency that best fits your lifestyle.",
  },
  {
    question: "Can I pause or change my combo?",
    answer: "Absolutely! You can pause, skip, or switch combos anytime from your account dashboard. We understand that flexibility is important for your wellness journey.",
  },
  {
    question: "Are these fruits organic and pesticide-free?",
    answer: "Yes! All our fruits come from certified organic farms in the Ganga valley region. We ensure they're grown naturally without harmful pesticides or chemicals.",
  },
  {
    question: "What if I'm not satisfied with the quality?",
    answer: "We stand behind our 100% freshness guarantee. If you're not completely satisfied, contact us within 24 hours of delivery for a full refund or replacement.",
  },
  {
    question: "Do you deliver to my area?",
    answer: "We currently deliver to major cities across India. Enter your pincode during checkout to verify availability in your location.",
  },
  {
    question: "Can I gift a subscription to someone?",
    answer: "Yes! Gift subscriptions are available. Choose the combo, duration, and add a personalized message. Perfect for health-conscious loved ones.",
  },
];

const SubscriptionFAQ = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-background via-river/5 to-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-valley mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70">
            Everything you need to know about our subscriptions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-primary/30 bg-card rounded-lg px-6 hover:shadow-soft transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="p-8 bg-gradient-to-br from-primary/10 to-leaf/10 border-2 border-primary/30 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Already a Subscriber?
            </h3>
            <p className="text-foreground/70 mb-6">
              Manage your subscription, view delivery history, and update preferences
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-leaf hover:shadow-float transition-all duration-300"
            >
              <LogIn size={20} />
              View Your Combo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionFAQ;
