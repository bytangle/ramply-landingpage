import { ArrowRight, DollarSign, CreditCard, Zap, Code, Smartphone, Shield, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border flex-shrink-0">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            ramply.xyz
          </div>
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
          >
            Join Waitlist
          </Button>
        </div>
      </header>

      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Hero Section */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-3 text-foreground">
              The Seamless{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Crypto Ramp
              </span>
            </h1>
            
            <p className="text-muted-foreground mb-6">
              Convert between crypto and fiat instantly
            </p>
            
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
            >
              Join Waitlist
            </Button>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-6 pb-8 flex-1 flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-3 gap-8">
              {/* How It Works */}
              <div className="text-center">
                <h2 className="text-lg font-semibold mb-4 text-foreground">
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
              <div className="text-center">
                <h2 className="text-lg font-semibold mb-4 text-foreground">
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
                <div className="mt-6">
                  <Button 
                    variant="gradient" 
                    size="sm"
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
                  >
                    Get Access
                  </Button>
                </div>
              </div>

              {/* For Users */}
              <div className="text-center">
                <h2 className="text-lg font-semibold mb-4 text-foreground">
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
                <div className="mt-6">
                  <Button 
                    variant="hero" 
                    size="sm"
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-4 px-6 flex-shrink-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-3 md:mb-0">
              <h3 className="text-sm font-bold gradient-primary bg-clip-text text-transparent">
                ramply.xyz
              </h3>
            </div>
            
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
        </div>
      </footer>
    </div>
  );
};

export default Index;