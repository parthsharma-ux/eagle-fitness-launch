import { Dumbbell, Heart, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const facilities = [
  {
    icon: Dumbbell,
    title: "Weight Training Zone",
    description: "Premium dumbbells, barbells, and weight machines for strength building"
  },
  {
    icon: Heart,
    title: "Cardio Area",
    description: "Latest treadmills, ellipticals, and bikes for cardiovascular fitness"
  },
  {
    icon: Zap,
    title: "Functional Training",
    description: "Battle ropes, TRX, kettlebells, and agility equipment"
  },
  {
    icon: Users,
    title: "Personal Trainers",
    description: "Certified professionals to guide your fitness journey"
  }
];

export const Facilities = () => {
  return (
    <section id="facilities" className="py-20 bg-darker-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-light-text">
          World-Class <span className="text-gym-red">Facilities</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <Card key={index} className="bg-card border-border hover:border-gym-red transition-all hover:shadow-glow">
              <CardContent className="p-6 text-center">
                <facility.icon className="w-12 h-12 mx-auto mb-4 text-gym-red" />
                <h3 className="text-xl font-bold mb-2 text-light-text">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
