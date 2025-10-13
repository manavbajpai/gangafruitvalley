import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const articles = [
  {
    title: "The Morning Ritual of Mango Groves",
    excerpt: "Discover the ancient practice of sunrise walks through mango orchards and how they boost mental clarity...",
    date: "March 15, 2025",
    author: "Dr. Priya Sharma",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1587334207823-5c6a50b1f3d2?w=600&h=400&fit=crop",
  },
  {
    title: "Ganga's Gift: The Science of River Therapy",
    excerpt: "Exploring the therapeutic benefits of spending time near flowing water and its impact on stress reduction...",
    date: "March 12, 2025",
    author: "Rajesh Kumar",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
  },
  {
    title: "Seasonal Fruits and Their Healing Powers",
    excerpt: "A comprehensive guide to understanding how different fruits support your body through changing seasons...",
    date: "March 8, 2025",
    author: "Ananya Patel",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=600&h=400&fit=crop",
  },
];

const NatureJournal = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-valley">
            Nature's Journal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stories, wisdom, and insights from the valley — where health meets harmony
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={article.title}
              className="overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-float hover:-translate-y-2 bg-card cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NatureJournal;
