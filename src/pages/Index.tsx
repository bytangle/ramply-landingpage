import { ArrowRight, DollarSign, CreditCard, Zap, Code, Smartphone, Wallet, Shield, Twitter, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import HowItWorks from "@/components/HowItWorks";
import ForDevelopers from "@/components/ForDevelopers";
import ForConsumers from "@/components/ForConsumers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="h-1/3 flex items-center justify-center px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground leading-tight">
            The Seamless{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Crypto Ramp
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            Bridge local currency ↔ crypto instantly. <span className="font-medium text-foreground">API-first.</span> Stablecoins + native tokens.
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
          >
            join_waitlist()
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="h-1/2 px-6 py-4">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* How It Works */}
          <div className="bg-card rounded-xl p-4 shadow-card">
            <h2 className="text-xl font-bold mb-3 text-foreground text-center">how_it_works()</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">input_amount()</h3>
                  <p className="text-xs text-muted-foreground">Specify amount + currency pair</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">get_instructions()</h3>
                  <p className="text-xs text-muted-foreground">Receive secure payment flow</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">receive_crypto()</h3>
                  <p className="text-xs text-muted-foreground">Instant settlement + confirmation</p>
                </div>
              </div>
            </div>
          </div>

          {/* For Developers */}
          <div className="bg-muted/30 rounded-xl p-4 shadow-card">
            <h2 className="text-xl font-bold mb-3 text-foreground text-center">for_developers()</h2>
            <p className="text-sm text-muted-foreground mb-4 text-center">
              API-first platform. Built for scale.<br />
              <span className="text-xs">// docs coming soon</span>
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">RESTful APIs</h3>
                  <p className="text-xs text-muted-foreground">Clean endpoints + SDKs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">Webhooks</h3>
                  <p className="text-xs text-muted-foreground">Real-time notifications</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">99.9% SLA</h3>
                  <p className="text-xs text-muted-foreground">Enterprise reliability</p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button 
                variant="gradient" 
                size="sm" 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
              >
                join_waitlist()
              </Button>
            </div>
          </div>

          {/* For Users */}
          <div className="bg-card rounded-xl p-4 shadow-card">
            <h2 className="text-xl font-bold mb-3 text-foreground text-center">for_users()</h2>
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Buy crypto with local currency. Cash out to bank.<br />
              <span className="text-xs">// no signup for small amounts</span>
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">Mobile-first</h3>
                  <p className="text-xs text-muted-foreground">Optimized UX</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">Secure</h3>
                  <p className="text-xs text-muted-foreground">Bank-grade security</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">Instant</h3>
                  <p className="text-xs text-muted-foreground">Lightning settlements</p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button 
                variant="hero" 
                size="sm"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
              >
                join_waitlist()
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="h-1/6 flex items-center justify-center px-6 border-t border-border">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-base font-bold gradient-primary bg-clip-text text-transparent">
                ramply.xyz
              </h3>
              <p className="text-muted-foreground text-xs">
                // seamless crypto ramp
              </p>
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
          
          <div className="mt-2 text-center text-muted-foreground text-xs">
            <p>© 2024 ramply</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;