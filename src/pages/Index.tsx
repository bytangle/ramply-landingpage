import { ArrowRight, DollarSign, CreditCard, Zap, Code, Smartphone, Shield, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border flex-shrink-0" role="banner">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-end">
          <nav className="flex items-center gap-4" aria-label="Social media links">
            <a 
              href="https://twitter.com/ramply" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Follow Ramply on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            
            <a 
              href="https://github.com/ramply" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="View Ramply on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content - Centered */}
      <main className="flex-1 flex flex-col justify-center items-center" role="main">
        {/* Hero Section - Perfectly Centered */}
        <section className="text-center space-y-6" aria-labelledby="hero-heading">
          <div className="text-sm font-medium text-primary tracking-widest uppercase">
            ramply.xyz
          </div>
          
          <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold text-foreground">
            The Seamless{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Crypto Ramp
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Convert between crypto and local fiat instantly
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
            aria-label="Join waitlist for early access to Ramply crypto exchange platform"
          >
            Join Waitlist
          </Button>
        </section>

        {/* Features Section */}
        <section className="mt-16 w-full max-w-4xl px-6" aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">Ramply Features and Services</h2>
          <div className="grid md:grid-cols-3 gap-8 divide-x divide-border">
            
            {/* How It Works */}
            <article className="pr-8 first:pr-0 first:pl-0 pl-8">
              <h3 className="text-lg font-semibold mb-4 text-foreground text-left">
                How It Works
              </h3>
              <div className="space-y-4" role="list">
                <div className="flex items-center gap-3" role="listitem">
                  <DollarSign className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <div className="text-left">
                    <h4 className="font-medium text-sm text-foreground">Enter Amount</h4>
                    <p className="text-xs text-muted-foreground">Specify currency pair for conversion</p>
                  </div>
                </div>
                <div className="flex items-center gap-3" role="listitem">
                  <CreditCard className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <div className="text-left">
                    <h4 className="font-medium text-sm text-foreground">Get Instructions</h4>
                    <p className="text-xs text-muted-foreground">Receive secure payment details</p>
                  </div>
                </div>
                <div className="flex items-center gap-3" role="listitem">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <div className="text-left">
                    <h4 className="font-medium text-sm text-foreground">Receive Instantly</h4>
                    <p className="text-xs text-muted-foreground">Get funds after confirmation</p>
                  </div>
                </div>
              </div>
            </article>

            {/* For Developers */}
            <article className="pr-8 first:pr-0 first:pl-0 pl-8">
              <h3 className="text-lg font-semibold mb-4 text-foreground text-left">
                For Developers
              </h3>
              <div className="space-y-4" role="list">
                <div className="flex items-center gap-3" role="listitem">
                  <Code className="w-5 h-5 text-secondary flex-shrink-0" aria-hidden="true" />
                  <div className="text-left">
                    <h4 className="font-medium text-sm text-foreground">RESTful APIs</h4>
                    <p className="text-xs text-muted-foreground">Clean APIs with comprehensive SDKs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3" role="listitem">
                  <Zap className="w-5 h-5 text-secondary flex-shrink-0" aria-hidden="true" />
                  <div className="text-left">
                    <h4 className="font-medium text-sm text-foreground">Real-time Updates</h4>
                    <p className="text-xs text-muted-foreground">Instant transaction notifications</p>
                  </div>
                </div>
                <div className="flex items-center gap-3" role="listitem">
                  <Shield className="w-5 h-5 text-secondary flex-shrink-0" aria-hidden="true" />
                  <div className="text-left">
                    <h4 className="font-medium text-sm text-foreground">Enterprise Security</h4>
                    <p className="text-xs text-muted-foreground">Bank-grade protection for all transactions</p>
                  </div>
                </div>
              </div>
            </article>

            {/* For Users */}
            <article className="pr-8 first:pr-0 first:pl-0 pl-8">
              <h3 className="text-lg font-semibold mb-4 text-foreground text-left">
                For Everyone
              </h3>
              <div className="space-y-4" role="list">
                <div className="flex items-center gap-3" role="listitem">
                  <Smartphone className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <div className="text-left">
                    <h4 className="font-medium text-sm text-foreground">Mobile Optimized</h4>
                    <p className="text-xs text-muted-foreground">Works seamlessly on any device</p>
                  </div>
                </div>
                <div className="flex items-center gap-3" role="listitem">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <div className="text-left">
                    <h4 className="font-medium text-sm text-foreground">Secure</h4>
                    <p className="text-xs text-muted-foreground">Your funds are always protected</p>
                  </div>
                </div>
                <div className="flex items-center gap-3" role="listitem">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <div className="text-left">
                    <h4 className="font-medium text-sm text-foreground">Lightning Fast</h4>
                    <p className="text-xs text-muted-foreground">Instant cryptocurrency transactions</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-4 px-6 flex-shrink-0" role="contentinfo">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 Ramply. All rights reserved. | 
            <span className="sr-only">Seamless cryptocurrency to local fiat exchange platform</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;