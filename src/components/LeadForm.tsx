import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface LeadFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LeadForm = ({ open, onOpenChange }: LeadFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "",
    time: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send to WhatsApp
    const message = `New Membership Inquiry:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AGoal: ${formData.goal}%0APreferred Time: ${formData.time}`;
    window.open(`https://wa.me/919799003393?text=${message}`, "_blank");
    
    toast({
      title: "Inquiry Sent!",
      description: "We'll contact you shortly via WhatsApp.",
    });
    
    onOpenChange(false);
    setFormData({ name: "", phone: "", goal: "", time: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-light-text">Join Eagle Fitness</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in your details and we'll contact you shortly
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-light-text">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-secondary border-border text-light-text"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-light-text">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="bg-secondary border-border text-light-text"
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
            />
          </div>
          
          <div>
            <Label htmlFor="goal" className="text-light-text">Fitness Goal</Label>
            <Select value={formData.goal} onValueChange={(value) => setFormData({ ...formData, goal: value })}>
              <SelectTrigger className="bg-secondary border-border text-light-text">
                <SelectValue placeholder="Select your goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weight-loss">Weight Loss</SelectItem>
                <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                <SelectItem value="general-fitness">General Fitness</SelectItem>
                <SelectItem value="strength-training">Strength Training</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="time" className="text-light-text">Preferred Time</Label>
            <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
              <SelectTrigger className="bg-secondary border-border text-light-text">
                <SelectValue placeholder="Select preferred time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (6 AM - 10 AM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (10 AM - 4 PM)</SelectItem>
                <SelectItem value="evening">Evening (4 PM - 9 PM)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button type="submit" className="w-full bg-gym-red hover:bg-gym-red-dark text-white font-bold">
            Submit Inquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
