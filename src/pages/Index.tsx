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
      <section className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating circles */}
          <div className="absolute top-20 left-20 w-8 h-8 bg-primary/10 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-32 w-6 h-6 bg-secondary/15 rounded-full animate-float-reverse"></div>
          <div className="absolute bottom-32 left-16 w-10 h-10 bg-primary/8 rounded-full animate-drift"></div>
          <div className="absolute bottom-20 right-20 w-4 h-4 bg-secondary/20 rounded-full animate-float"></div>
          
          {/* Floating squares */}
          <div className="absolute top-60 left-1/4 w-5 h-5 bg-primary/12 rotate-45 animate-drift" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-80 right-1/4 w-3 h-3 bg-secondary/18 rotate-45 animate-float-reverse" style={{ animationDelay: '4s' }}></div>
          
          {/* Code-like elements */}
          <div className="absolute top-32 left-1/3 text-primary/20 text-xs font-mono animate-float-slow" style={{ animationDelay: '1s' }}>
            {"{ }"}
          </div>
          <div className="absolute bottom-40 right-1/3 text-secondary/25 text-xs font-mono animate-drift" style={{ animationDelay: '3s' }}>
            {"( )"}
          </div>
          <div className="absolute top-1/2 left-10 text-primary/15 text-xs font-mono animate-float-reverse" style={{ animationDelay: '5s' }}>
            {"[ ]"}
          </div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
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