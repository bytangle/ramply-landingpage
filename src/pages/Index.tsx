import { ArrowRight, DollarSign, CreditCard, Zap, Code, Smartphone, Shield, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen bg-background overflow-hidden font-mono">
      {/* Terminal Header */}
      <header className="h-12 bg-card border-b border-border flex items-center px-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-destructive rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-sm text-muted-foreground">ramply.xyz — crypto_ramp.js</span>
        </div>
        <div className="text-xs text-muted-foreground">
          Live Server
        </div>
      </header>

      {/* Main Terminal Content */}
      <div className="h-[calc(100vh-3rem)] flex">
        
        {/* Sidebar - File Explorer */}
        <div className="w-64 bg-muted/20 border-r border-border p-3">
          <div className="text-xs text-muted-foreground mb-2">EXPLORER</div>
          <div className="space-y-1 text-sm">
            <div className="text-primary cursor-pointer">📁 ramply/</div>
            <div className="ml-3 text-foreground cursor-pointer hover:bg-muted/30 px-1 rounded">📄 index.js</div>
            <div className="ml-3 text-muted-foreground cursor-pointer hover:bg-muted/30 px-1 rounded">📄 api.js</div>
            <div className="ml-3 text-muted-foreground cursor-pointer hover:bg-muted/30 px-1 rounded">📄 users.js</div>
            <div className="ml-3 text-muted-foreground cursor-pointer hover:bg-muted/30 px-1 rounded">📄 docs.md</div>
          </div>
          
          <div className="mt-6">
            <div className="text-xs text-muted-foreground mb-2">FUNCTIONS</div>
            <div className="text-xs space-y-1">
              <div className="text-primary">input_amount()</div>
              <div className="text-secondary">get_instructions()</div>
              <div className="text-accent">receive_crypto()</div>
            </div>
          </div>
        </div>

        {/* Main Code Area */}
        <div className="flex-1 flex flex-col">
          
          {/* Code Editor Header */}
          <div className="h-8 bg-muted/10 border-b border-border flex items-center px-4 text-xs text-muted-foreground">
            <span>1</span>
            <span className="ml-4">const ramply = {"{"}</span>
          </div>

          {/* Hero Section as Code */}
          <div className="flex-1 p-6 bg-card/30">
            <div className="max-w-4xl mx-auto">
              
              {/* Main Function */}
              <div className="mb-6">
                <div className="text-sm text-muted-foreground mb-2">2</div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                  <span className="text-muted-foreground">function</span>{" "}
                  <span className="text-primary">seamlessCryptoRamp</span>
                  <span className="text-muted-foreground">()</span>{" "}
                  <span className="text-muted-foreground">{"{"}</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-4 ml-4">
                  <span className="text-secondary">// Bridge local currency ↔ crypto instantly</span><br />
                  <span className="text-accent">// API-first. Stablecoins + native tokens.</span>
                </p>
              </div>

              {/* Three Column Layout as Code Blocks */}
              <div className="grid lg:grid-cols-3 gap-6 mb-6">
                
                {/* How It Works */}
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-primary font-semibold mb-3">how_it_works() {"{"}</div>
                  <div className="space-y-2 ml-4 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="text-secondary">input_amount()</span>
                    </div>
                    <div className="text-xs text-muted-foreground ml-6">// Specify amount + currency</div>
                    
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-primary" />
                      <span className="text-secondary">get_instructions()</span>
                    </div>
                    <div className="text-xs text-muted-foreground ml-6">// Secure payment flow</div>
                    
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-secondary">receive_crypto()</span>
                    </div>
                    <div className="text-xs text-muted-foreground ml-6">// Instant settlement</div>
                  </div>
                  <div className="text-primary mt-2">{"}"}</div>
                </div>

                {/* For Developers */}
                <div className="bg-muted/30 rounded-lg p-4 border border-border">
                  <div className="text-primary font-semibold mb-3">for_developers() {"{"}</div>
                  <div className="space-y-2 ml-4 text-sm">
                    <div className="text-xs text-muted-foreground">// API-first platform. Built for scale.</div>
                    <div className="text-xs text-muted-foreground">// docs coming soon</div>
                    
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-secondary" />
                      <span className="text-accent">RESTful APIs</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-secondary" />
                      <span className="text-accent">Webhooks</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-secondary" />
                      <span className="text-accent">99.9% SLA</span>
                    </div>
                  </div>
                  <div className="text-primary mt-2">{"}"}</div>
                  
                  <div className="mt-3 ml-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
                    >
                      join_waitlist()
                    </Button>
                  </div>
                </div>

                {/* For Users */}
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-primary font-semibold mb-3">for_users() {"{"}</div>
                  <div className="space-y-2 ml-4 text-sm">
                    <div className="text-xs text-muted-foreground">// Buy crypto, cash out to bank</div>
                    <div className="text-xs text-muted-foreground">// no signup for small amounts</div>
                    
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-secondary" />
                      <span className="text-accent">Mobile-first</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-secondary" />
                      <span className="text-accent">Secure</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-secondary" />
                      <span className="text-accent">Instant</span>
                    </div>
                  </div>
                  <div className="text-primary mt-2">{"}"}</div>
                  
                  <div className="mt-3 ml-4">
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

              {/* Closing Brace and Export */}
              <div className="text-lg">
                <div className="text-muted-foreground">{"}"}</div>
                <div className="mt-2">
                  <span className="text-muted-foreground">export default</span>{" "}
                  <span className="text-primary">ramply</span>
                  <span className="text-muted-foreground">;</span>
                </div>
              </div>

            </div>
          </div>

          {/* Terminal Footer */}
          <div className="h-6 bg-muted/10 border-t border-border flex items-center justify-between px-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>Ln 42, Col 1</span>
              <span>JavaScript</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/ramply" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Twitter className="w-3 h-3" />
              </a>
              <a href="https://github.com/ramply" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Github className="w-3 h-3" />
              </a>
              <span>© 2024 ramply</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;