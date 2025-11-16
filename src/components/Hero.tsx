import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

interface HeroProps {
  onJoinClick: () => void;
}

export const Hero = ({ onJoinClick }: HeroProps) => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919799003393?text=Hi%2C%20I%27m%20interested%20in%20joining%20Eagle%20Fitness%21", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-light-text animate-fade-in">
          <span className="block mb-2">EAGLE FITNESS</span>
          <span className="block text-3xl md:text-4xl text-gym-red font-bold">Transform Your Body.</span>
          <span className="block text-3xl md:text-4xl text-gym-red font-bold">Transform Your Life.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto animate-fade-in">
          Join Jaipur's Premier Fitness Destination in Hathoj, Kalwar Road
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            onClick={onJoinClick}
            className="bg-gym-red hover:bg-gym-red-dark text-white font-bold text-lg px-8 py-6 shadow-glow transition-all hover:scale-105"
          >
            Join Now <ArrowRight className="ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={handleWhatsApp}
            className="border-2 border-gym-red text-gym-red hover:bg-gym-red hover:text-white font-bold text-lg px-8 py-6 transition-all hover:scale-105"
          >
            <MessageCircle className="mr-2" /> WhatsApp Us
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
