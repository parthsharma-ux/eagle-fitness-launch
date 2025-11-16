import { MapPin } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-light-text">
            About <span className="text-gym-red">Eagle Fitness</span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground">
            <MapPin className="text-gym-red" size={20} />
            <p className="text-lg">Hathoj, Kalwar Road, Jaipur</p>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Eagle Fitness is Jaipur's premier fitness destination, dedicated to helping you achieve your fitness goals. 
            Located in the heart of Hathoj on Kalwar Road, we offer state-of-the-art equipment, certified trainers, 
            and a motivating environment that pushes you to be your best.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're a beginner starting your fitness journey or an experienced athlete looking to take your 
            training to the next level, Eagle Fitness provides the perfect environment to transform your body and life.
          </p>
        </div>
      </div>
    </section>
  );
};
