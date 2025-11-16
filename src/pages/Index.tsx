import { useState } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Facilities } from "@/components/Facilities";
import { MembershipPlans } from "@/components/MembershipPlans";
import { Trainers } from "@/components/Trainers";
import { Gallery } from "@/components/Gallery";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Hero onJoinClick={() => setShowLeadForm(true)} />
      <About />
      <Facilities />
      <MembershipPlans onSelectPlan={() => setShowLeadForm(true)} />
      <Trainers />
      <Gallery />
      <Benefits />
      <Testimonials />
      <Contact />
      <LeadForm open={showLeadForm} onOpenChange={setShowLeadForm} />
      <WhatsAppButton />
      
      <footer className="bg-darker-bg py-6 text-center border-t border-border">
        <p className="text-muted-foreground">
          © 2024 Eagle Fitness. All rights reserved. | Hathoj, Kalwar Road, Jaipur
        </p>
      </footer>
    </div>
  );
};

export default Index;
