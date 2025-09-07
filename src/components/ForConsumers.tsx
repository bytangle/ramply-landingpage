import { Smartphone, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForConsumers = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          For Consumers
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Buy crypto with your local currency or cash out to your bank account. 
          No sign-up required for small amounts.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Mobile First</h3>
            <p className="text-muted-foreground text-sm">Optimized for mobile with seamless UX</p>
          </div>
          
          <div className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Secure</h3>
            <p className="text-muted-foreground text-sm">Bank-grade security & compliance</p>
          </div>
          
          <div className="p-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Instant</h3>
            <p className="text-muted-foreground text-sm">Lightning-fast transactions</p>
          </div>
        </div>
        
        <Button 
          variant="hero" 
          size="lg"
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
        >
          Join Waitlist
        </Button>
      </div>
    </section>
  );
};

export default ForConsumers;