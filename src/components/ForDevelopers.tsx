import { Code, GitBranch, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import apiImage from "@/assets/api-integration-v2.jpg";

const ForDevelopers = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              For Developers
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Integrate Ramply APIs to accept fiat and payout crypto. 
              Built for developers, designed for scale. Documentation coming soon.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">RESTful APIs</h3>
                  <p className="text-muted-foreground">Clean, documented APIs with comprehensive SDKs for major programming languages.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GitBranch className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Webhook Support</h3>
                  <p className="text-muted-foreground">Real-time notifications for transaction status updates and confirmations.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Lightning Fast</h3>
                  <p className="text-muted-foreground">Sub-second API responses with 99.9% uptime SLA guarantee.</p>
                </div>
              </div>
            </div>
            
            <Button 
              variant="gradient" 
              size="lg" 
              className="animate-slide-up"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
            >
              Join the Waitlist
              <Code className="ml-2" />
            </Button>
          </div>
          
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src={apiImage} 
              alt="API Integration Illustration" 
              className="rounded-2xl shadow-card w-full h-auto"
            />
            
            {/* Floating code elements */}
            <div className="absolute -top-4 -left-4 bg-card rounded-lg p-3 shadow-elegant animate-float">
              <Code className="w-6 h-6 text-primary" />
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card rounded-lg p-3 shadow-elegant animate-float" style={{ animationDelay: '1.5s' }}>
              <GitBranch className="w-6 h-6 text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDevelopers;