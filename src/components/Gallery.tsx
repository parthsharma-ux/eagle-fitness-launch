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
        
        <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
          {galleryImages.map((item, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden group hover:border-gym-red transition-all">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
