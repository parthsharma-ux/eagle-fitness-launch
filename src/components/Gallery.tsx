import { Card } from "@/components/ui/card";
import gymPromo1 from "@/assets/gym-promo-1.jpg";

const galleryImages = [
  {
    image: gymPromo1,
    title: "Train Hard, Feel Strong",
    description: "Professional training environment"
  }
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-center text-light-text">
          Our <span className="text-gym-red">Gym</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Experience World-Class Fitness</p>
        
        <div className="grid md:grid-cols-1 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((item, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden group hover:border-gym-red transition-all">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-auto object-contain"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
