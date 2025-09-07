import { ArrowRight, DollarSign, CreditCard, Zap, Code, Smartphone, Wallet, Shield, Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import HowItWorks from "@/components/HowItWorks";
import ForDevelopers from "@/components/ForDevelopers";
import ForConsumers from "@/components/ForConsumers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
            The Seamless{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Crypto Ramp
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Bridge local currency ↔ crypto instantly.
            <br />
            <span className="font-medium text-foreground">API-first.</span> Stablecoins + native tokens.
          </p>
          
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
          >
            join_waitlist()
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />
      
      {/* For Developers Section */}
      <ForDevelopers />
      
      {/* For Consumers Section */}
      <ForConsumers />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;