import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "₹1,500",
    period: "/month",
    features: [
      "Full gym access",
      "All equipment",
      "Locker facility",
      "Basic guidance"
    ]
  },
  {
    name: "Quarterly",
    price: "₹4,000",
    period: "/3 months",
    popular: true,
    features: [
      "Full gym access",
      "All equipment",
      "Locker facility",
      "Personal training sessions",
      "Diet consultation"
    ]
  },
  {
    name: "Yearly",
    price: "₹12,000",
    period: "/year",
    features: [
      "Full gym access",
      "All equipment",
      "Locker facility",
      "Unlimited personal training",
      "Complete diet plan",
      "Progress tracking"
    ]
  }
];

interface MembershipPlansProps {
  onSelectPlan: () => void;
}

export const MembershipPlans = ({ onSelectPlan }: MembershipPlansProps) => {
  return (
    <section id="plans" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-light-text">
          Membership <span className="text-gym-red">Plans</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-card border-border hover:border-gym-red transition-all ${
                plan.popular ? 'border-gym-red shadow-glow scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gym-red text-white px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-light-text mb-2">{plan.name}</CardTitle>
                <div className="text-4xl font-black text-gym-red">
                  {plan.price}
                  <span className="text-lg text-muted-foreground font-normal">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="text-gym-red flex-shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-gym-red hover:bg-gym-red-dark text-white font-bold"
                  onClick={onSelectPlan}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
