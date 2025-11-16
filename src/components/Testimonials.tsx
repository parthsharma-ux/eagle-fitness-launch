import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Verma",
    location: "Hathoj, Jaipur",
    rating: 5,
    text: "Best gym in the area! The trainers are knowledgeable and the equipment is top-notch. Lost 15 kgs in 4 months!"
  },
  {
    name: "Neha Singh",
    location: "Kalwar Road",
    rating: 5,
    text: "Eagle Fitness changed my life. The personal trainers helped me achieve my fitness goals faster than I imagined."
  },
  {
    name: "Rohit Sharma",
    location: "Jaipur",
    rating: 5,
    text: "Affordable prices, great atmosphere, and amazing results. Highly recommend to anyone serious about fitness!"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-light-text">
          What Our Members <span className="text-gym-red">Say</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-gym-red transition-all">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gym-red text-gym-red" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-light-text">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
