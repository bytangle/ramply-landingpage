import { ArrowRight, DollarSign, CreditCard, Zap, Code, Smartphone, Shield, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border flex-shrink-0">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-end">
          <div className="flex items-center gap-4">
            <a 
              href="https://twitter.com/ramply" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Twitter className="w-4 h-4" />
            </a>
            
            <a 
              href="https://github.com/ramply" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col justify-center items-center">
        {/* Hero Section - Perfectly Centered */}
        <div className="text-center space-y-6">
          <div className="text-sm font-medium text-primary tracking-widest uppercase">
            ramply.xyz
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            The Seamless{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Crypto Ramp
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Convert between crypto and fiat instantly
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
          >
            Join Waitlist
          </Button>
        </div>

        {/* Columns - Below hero */}
        <div className="mt-16 w-full max-w-4xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* How It Works */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-foreground text-left">
                How It Works
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-medium text-sm text-foreground">Enter Amount</h3>
                    <p className="text-xs text-muted-foreground">Specify currency pair</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-medium text-sm text-foreground">Get Instructions</h3>
                    <p className="text-xs text-muted-foreground">Receive payment details</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-medium text-sm text-foreground">Receive Instantly</h3>
                    <p className="text-xs text-muted-foreground">Get funds after confirmation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Developers */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-foreground text-left">
                For Developers
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-medium text-sm text-foreground">RESTful APIs</h3>
                    <p className="text-xs text-muted-foreground">Clean APIs with SDKs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-medium text-sm text-foreground">Real-time Updates</h3>
                    <p className="text-xs text-muted-foreground">Instant notifications</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-medium text-sm text-foreground">Enterprise Security</h3>
                    <p className="text-xs text-muted-foreground">Bank-grade protection</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Users */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-foreground text-left">
                For Everyone
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-medium text-sm text-foreground">Mobile Optimized</h3>
                    <p className="text-xs text-muted-foreground">Works on any device</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-medium text-sm text-foreground">Secure</h3>
                    <p className="text-xs text-muted-foreground">Funds are protected</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-medium text-sm text-foreground">Lightning Fast</h3>
                    <p className="text-xs text-muted-foreground">Instant transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 px-6 flex-shrink-0">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs text-muted-foreground">&copy; 2024 Ramply. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;