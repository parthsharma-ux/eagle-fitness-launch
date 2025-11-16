import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Instagram } from "lucide-react";

export const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919799003393?text=Hi, I want to know more about Eagle Fitness!", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919799003393";
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/eagle_fitnessclub", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-darker-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-light-text">
          Visit <span className="text-gym-red">Us Today</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-light-text">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="text-gym-red flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-light-text">Location</p>
                  <p className="text-muted-foreground">Hathoj, Kalwar Road, Jaipur, Rajasthan</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="text-gym-red flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-light-text">Phone</p>
                  <p className="text-muted-foreground">+91 9799003393</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="text-gym-red flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-light-text">Instagram</p>
                  <p className="text-muted-foreground">@eagle_fitnessclub</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsApp}
                className="bg-gym-red hover:bg-gym-red-dark text-white font-bold"
              >
                <MessageCircle className="mr-2" /> WhatsApp
              </Button>
              <Button 
                onClick={handleCall}
                variant="outline"
                className="border-2 border-gym-red text-gym-red hover:bg-gym-red hover:text-white font-bold"
              >
                <Phone className="mr-2" /> Call Now
              </Button>
              <Button 
                onClick={handleInstagram}
                variant="outline"
                className="border-2 border-gym-red text-gym-red hover:bg-gym-red hover:text-white font-bold"
              >
                <Instagram className="mr-2" /> Follow
              </Button>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden border-2 border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.6684989865896!2d75.6842!3d26.8894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e4e4e4e4e5%3A0x4e4e4e4e4e4e4e4e!2sHathoj%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eagle Fitness Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
