import { IndianRupee, Trophy, UserCheck, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Best membership rates in Jaipur with flexible payment options"
  },
  {
    icon: Trophy,
    title: "Modern Equipment",
    description: "Latest machines and free weights for optimal training"
  },
  {
    icon: UserCheck,
    title: "Certified Trainers",
    description: "Expert guidance from qualified fitness professionals"
  },
  {
    icon: Users,
    title: "Friendly Environment",
    description: "Supportive community that motivates you every day"
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-darker-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-light-text">
          Why Choose <span className="text-gym-red">Eagle Fitness?</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card border-border hover:border-gym-red transition-all text-center hover:shadow-glow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gym-red/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-gym-red" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-light-text">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
