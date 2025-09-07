import { ArrowRight, DollarSign, CreditCard, Zap, Code, Smartphone, Shield, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen bg-background overflow-hidden font-mono">
      {/* Dashboard Header */}
      <header className="h-16 bg-card border-b border-border flex items-center px-6">
        <div className="flex items-center gap-6">
          <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            ramply.xyz
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">Live</span>
            </div>
            <div className="text-muted-foreground">|</div>
            <div className="text-muted-foreground">The Seamless Crypto Ramp</div>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="text-xs text-green-400 font-semibold">⚡ All Systems Online</div>
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
          >
            join_waitlist()
          </Button>
        </div>
      </header>

      <div className="h-[calc(100vh-4rem)] p-4 grid grid-cols-12 gap-4">
        
        {/* Left Panel - Market Overview */}
        <div className="col-span-3 space-y-4">
          
          {/* Market Stats */}
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="text-sm font-semibold text-foreground mb-3">MARKET STATS</div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Volume 24h</span>
                <span className="text-green-400 font-semibold">$2.4M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Transactions</span>
                <span className="text-primary font-semibold">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Success Rate</span>
                <span className="text-green-400 font-semibold">99.9%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Avg Speed</span>
                <span className="text-secondary font-semibold">~2.3s</span>
              </div>
            </div>
          </div>

          {/* Supported Pairs */}
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="text-sm font-semibold text-foreground mb-3">ACTIVE PAIRS</div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">USD → USDT</span>
                <span className="text-green-400">✓ Live</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">EUR → USDC</span>
                <span className="text-green-400">✓ Live</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">GBP → DAI</span>
                <span className="text-green-400">✓ Live</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">NGN → USDT</span>
                <span className="text-yellow-400">⚡ Coming Soon</span>
              </div>
            </div>
          </div>

        </div>

        {/* Center Panel - Main Dashboard */}
        <div className="col-span-6 space-y-4">
          
          {/* Hero Section as Trading Interface */}
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold mb-3 text-foreground">
                Bridge local currency ↔ crypto instantly
              </h1>
              <p className="text-muted-foreground mb-4">
                <span className="text-primary font-semibold">API-first.</span> Stablecoins + native tokens. Real-time settlements.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
              >
                join_waitlist() →
              </Button>
            </div>
          </div>

          {/* Process Flow as Trading Steps */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-muted/30 rounded-lg border border-border p-4 text-center">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div className="text-sm font-semibold text-foreground mb-2">input_amount()</div>
              <div className="text-xs text-muted-foreground">Specify currency pair + amount</div>
            </div>
            
            <div className="bg-muted/30 rounded-lg border border-border p-4 text-center">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div className="text-sm font-semibold text-foreground mb-2">get_instructions()</div>
              <div className="text-xs text-muted-foreground">Receive secure payment flow</div>
            </div>
            
            <div className="bg-muted/30 rounded-lg border border-border p-4 text-center">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="text-sm font-semibold text-foreground mb-2">receive_crypto()</div>
              <div className="text-xs text-muted-foreground">Instant settlement</div>
            </div>
          </div>

          {/* Live Activity Feed */}
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="text-sm font-semibold text-foreground mb-3">LIVE ACTIVITY</div>
            <div className="space-y-2 text-xs max-h-32 overflow-y-auto">
              <div className="flex justify-between text-muted-foreground">
                <span>🔄 USD → USDT completed</span>
                <span className="text-green-400">$1,250</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>🔄 EUR → USDC completed</span>
                <span className="text-green-400">€890</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>🔄 GBP → DAI completed</span>
                <span className="text-green-400">£650</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>🔄 USD → USDT completed</span>
                <span className="text-green-400">$2,100</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>🔄 EUR → USDC completed</span>
                <span className="text-green-400">€1,450</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Panel - Developer & User Info */}
        <div className="col-span-3 space-y-4">
          
          {/* Developer Console */}
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="text-sm font-semibold text-foreground mb-3">for_developers()</div>
            <div className="space-y-3 text-xs">
              <div className="bg-muted/30 rounded p-2">
                <div className="text-accent">RESTful APIs</div>
                <div className="text-muted-foreground">Clean endpoints + SDKs</div>
              </div>
              <div className="bg-muted/30 rounded p-2">
                <div className="text-secondary">Webhooks</div>
                <div className="text-muted-foreground">Real-time notifications</div>
              </div>
              <div className="bg-muted/30 rounded p-2">
                <div className="text-primary">99.9% SLA</div>
                <div className="text-muted-foreground">Enterprise reliability</div>
              </div>
              <div className="text-center mt-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
                >
                  Get API Access
                </Button>
              </div>
            </div>
          </div>

          {/* User Experience */}
          <div className="bg-muted/30 rounded-lg border border-border p-4">
            <div className="text-sm font-semibold text-foreground mb-3">for_users()</div>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-secondary" />
                <div>
                  <div className="text-foreground font-semibold">Mobile-first</div>
                  <div className="text-muted-foreground">Optimized UX</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <div>
                  <div className="text-foreground font-semibold">Secure</div>
                  <div className="text-muted-foreground">Bank-grade security</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <div>
                  <div className="text-foreground font-semibold">Instant</div>
                  <div className="text-muted-foreground">Lightning settlements</div>
                </div>
              </div>
              <div className="text-center mt-3">
                <Button 
                  variant="hero" 
                  size="sm"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
                >
                  Try Demo
                </Button>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="text-sm font-semibold text-foreground mb-3">SYSTEM STATUS</div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">API Health</span>
                <span className="text-green-400">● Online</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Blockchain Sync</span>
                <span className="text-green-400">● Synced</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment Rails</span>
                <span className="text-green-400">● Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Support</span>
                <span className="text-green-400">● 24/7</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Dashboard Footer */}
      <div className="h-8 bg-muted/10 border-t border-border flex items-center justify-between px-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-6">
          <span>ramply.xyz Dashboard v1.0</span>
          <span>Last updated: just now</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://twitter.com/ramply" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <Twitter className="w-3 h-3" />
          </a>
          <a href="https://github.com/ramply" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <Github className="w-3 h-3" />
          </a>
          <span>© 2024 Ramply</span>
        </div>
      </div>
    </div>
  );
};

export default Index;