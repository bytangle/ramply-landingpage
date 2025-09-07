import { ArrowRight, DollarSign, CreditCard, Zap, Code, Smartphone, Shield, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
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

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            The Seamless{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Crypto Ramp
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Convert between crypto and fiat instantly.
          </p>
          
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
          >
            Join Waitlist
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-card text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Enter Amount
              </h3>
              <p className="text-muted-foreground">
                Specify amount and currency pair
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Get Instructions
              </h3>
              <p className="text-muted-foreground">
                Receive payment instructions
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-card text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Receive Instantly
              </h3>
              <p className="text-muted-foreground">
                Get funds after confirmation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* For Developers */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Built for Developers
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Integrate our API to accept payments and distribute crypto.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">RESTful APIs</h3>
                    <p className="text-muted-foreground">Clean APIs with comprehensive SDKs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Real-time Updates</h3>
                    <p className="text-muted-foreground">Instant transaction notifications</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  variant="gradient" 
                  size="lg"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
                >
                  Get Early Access
                </Button>
              </div>
            </div>

            {/* For Users */}
            <div className="bg-muted/30 rounded-2xl p-8">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Simple for Everyone
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Buy crypto or cash out to your bank account.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Mobile Optimized</h3>
                    <p className="text-muted-foreground">Works on any device</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Secure</h3>
                    <p className="text-muted-foreground">Your funds are protected</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
                >
                  Join Waitlist
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
                ramply.xyz
              </h3>
              <p className="text-muted-foreground mt-1">
                The seamless crypto ramp
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://twitter.com/ramply" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </a>
              
              <a 
                href="https://github.com/ramply" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 Ramply. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;