import { Code, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForDevelopers = () => {
  return (
    <section className="py-12 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
          for_developers()
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          API-first platform. Built for scale.
          <br />
          <span className="text-sm">// docs coming soon</span>
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Code className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">RESTful APIs</h3>
            <p className="text-muted-foreground text-sm">Clean endpoints + SDKs</p>
          </div>
          
          <div className="p-4">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Zap className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Webhooks</h3>
            <p className="text-muted-foreground text-sm">Real-time notifications</p>
          </div>
          
          <div className="p-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">99.9% SLA</h3>
            <p className="text-muted-foreground text-sm">Enterprise reliability</p>
          </div>
        </div>
        
        <Button 
          variant="gradient" 
          size="lg" 
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
        >
          join_waitlist()
        </Button>
      </div>
    </section>
  );
};

export default ForDevelopers;