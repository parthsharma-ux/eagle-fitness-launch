import { Card } from "@/components/ui/card";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";

const transformations = [
  {
    before: before1,
    after: after1,
    duration: "6 Months",
    name: "Member Transformation"
  }
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-center text-light-text">
          Transformation <span className="text-gym-red">Gallery</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Real Results from Real Members</p>
        
        <div className="max-w-4xl mx-auto">
          {transformations.map((transformation, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden">
              <div className="grid md:grid-cols-2 gap-4 p-6">
                <div className="text-center">
                  <p className="text-gym-red font-bold mb-2 uppercase">Before</p>
                  <img 
                    src={transformation.before} 
                    alt="Before transformation"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <p className="text-gym-red font-bold mb-2 uppercase">After</p>
                  <img 
                    src={transformation.after} 
                    alt="After transformation"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="text-center pb-6">
                <p className="text-light-text font-bold text-xl mb-1">{transformation.name}</p>
                <p className="text-muted-foreground">Duration: {transformation.duration}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
