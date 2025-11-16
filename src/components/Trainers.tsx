import { Card, CardContent } from "@/components/ui/card";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";

const trainers = [
  {
    name: "Rajesh Kumar",
    title: "Head Trainer",
    specialization: "Strength & Conditioning",
    image: trainer1,
    experience: "8+ years"
  },
  {
    name: "Priya Sharma",
    title: "Fitness Coach",
    specialization: "Weight Loss & Nutrition",
    image: trainer2,
    experience: "5+ years"
  }
];

export const Trainers = () => {
  return (
    <section id="trainers" className="py-20 bg-darker-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-light-text">
          Expert <span className="text-gym-red">Trainers</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trainers.map((trainer, index) => (
            <Card key={index} className="bg-card border-border hover:border-gym-red transition-all overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <CardContent className="p-6 -mt-20 relative z-10">
                <h3 className="text-2xl font-bold mb-1 text-light-text">{trainer.name}</h3>
                <p className="text-gym-red font-semibold mb-2">{trainer.title}</p>
                <p className="text-muted-foreground mb-1">{trainer.specialization}</p>
                <p className="text-sm text-muted-foreground">{trainer.experience} experience</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
