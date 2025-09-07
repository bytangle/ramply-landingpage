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
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            The Seamless On/Off Ramp for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Local Currencies
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Seamlessly bridge local currency and cryptocurrency with instant conversions. 
            Support for stablecoins and native tokens across multiple blockchains. 
            <br className="hidden md:block" />
            <span className="font-medium text-foreground">API-first platform</span> — convert local currency to crypto and back with ease.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              className="animate-slide-up"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
            >
              Join the Waitlist
              <ArrowRight className="ml-2" />
            </Button>
          </div>
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