import { Code, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForDevelopers = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          For Developers
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Integrate Ramply APIs to accept fiat and payout crypto. 
          Built for developers, designed for scale. Documentation coming soon.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">RESTful APIs</h3>
            <p className="text-muted-foreground text-sm">Clean, documented APIs with comprehensive SDKs</p>
          </div>
          
          <div className="p-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Real-time</h3>
            <p className="text-muted-foreground text-sm">Webhook support for instant notifications</p>
          </div>
          
          <div className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Secure</h3>
            <p className="text-muted-foreground text-sm">Bank-grade security with 99.9% uptime</p>
          </div>
        </div>
        
        <Button 
          variant="gradient" 
          size="lg" 
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
        >
          Join the Waitlist
        </Button>
      </div>
    </section>
  );
};

export default ForDevelopers;