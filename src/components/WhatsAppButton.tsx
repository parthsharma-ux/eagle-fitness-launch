import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/919799003393?text=Hi%2C%20I%27m%20interested%20in%20joining%20Eagle%20Fitness%21", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gym-red hover:bg-gym-red-dark shadow-glow p-0 hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </Button>
  );
};
