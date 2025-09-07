import { Smartphone, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForConsumers = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
          for_users()
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Buy crypto with local currency. Cash out to bank.
          <br />
          <span className="text-sm">// no signup for small amounts</span>
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-4">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Smartphone className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Mobile-first</h3>
            <p className="text-muted-foreground text-sm">Optimized UX</p>
          </div>
          
          <div className="p-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Secure</h3>
            <p className="text-muted-foreground text-sm">Bank-grade security</p>
          </div>
          
          <div className="p-4">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Zap className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Instant</h3>
            <p className="text-muted-foreground text-sm">Lightning settlements</p>
          </div>
        </div>
        
        <Button 
          variant="hero" 
          size="lg"
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
        >
          join_waitlist()
        </Button>
      </div>
    </section>
  );
};

export default ForConsumers;