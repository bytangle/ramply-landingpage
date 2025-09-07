import { Smartphone, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import cryptoImage from "@/assets/crypto-coins-dark.jpg";

const ForConsumers = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-slide-up order-2 lg:order-1">
            <img 
              src={cryptoImage} 
              alt="Cryptocurrency Coins" 
              className="rounded-2xl shadow-card w-full h-auto"
            />
            
            {/* Floating coin elements */}
            <div className="absolute -top-6 -right-6 bg-card rounded-full p-4 shadow-elegant animate-float">
              <div className="w-8 h-8 gradient-primary rounded-full"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card rounded-full p-4 shadow-elegant animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-6 h-6 bg-secondary rounded-full"></div>
            </div>
          </div>
          
          <div className="animate-fade-in order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              For Consumers
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Buy crypto with your local currency or cash out to your bank account. 
              No sign-up required for small amounts.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Mobile First</h3>
                  <p className="text-muted-foreground">Optimized for mobile with a seamless user experience across all devices.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Secure & Compliant</h3>
                  <p className="text-muted-foreground">Bank-grade security with full regulatory compliance and KYC/AML support.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Instant Transactions</h3>
                  <p className="text-muted-foreground">Lightning-fast transactions with competitive rates and transparent fees.</p>
                </div>
              </div>
            </div>
            
            <Button 
              variant="hero" 
              size="lg" 
              className="animate-slide-up"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
            >
              Join Waitlist
              <Smartphone className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForConsumers;