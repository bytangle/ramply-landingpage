import { ArrowRight, DollarSign, CreditCard, Zap, Code, Smartphone, Shield, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen bg-background overflow-hidden font-mono">
      {/* API Docs Header */}
      <header className="h-14 bg-card border-b border-border flex items-center px-6">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
            ramply.xyz
          </div>
          <div className="text-sm text-muted-foreground">/</div>
          <div className="text-sm text-muted-foreground">API Documentation v1.0</div>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="text-xs text-muted-foreground">🟢 All systems operational</div>
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
          >
            Get API Access
          </Button>
        </div>
      </header>

      <div className="h-[calc(100vh-3.5rem)] flex">
        
        {/* API Sidebar */}
        <div className="w-80 bg-muted/20 border-r border-border overflow-y-auto">
          <div className="p-4">
            <div className="text-sm font-semibold text-foreground mb-3">API REFERENCE</div>
            
            <div className="space-y-3">
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Authentication</div>
                <div className="ml-3 text-sm text-accent cursor-pointer hover:text-primary">POST /auth</div>
              </div>
              
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Exchange</div>
                <div className="ml-3 space-y-1 text-sm">
                  <div className="text-primary cursor-pointer hover:text-accent">GET /rates</div>
                  <div className="text-secondary cursor-pointer hover:text-primary">POST /exchange</div>
                  <div className="text-accent cursor-pointer hover:text-secondary">GET /status/:id</div>
                </div>
              </div>
              
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Webhooks</div>
                <div className="ml-3 space-y-1 text-sm">
                  <div className="text-primary cursor-pointer hover:text-accent">POST /webhooks</div>
                  <div className="text-secondary cursor-pointer hover:text-primary">DELETE /webhooks/:id</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-sm font-semibold text-foreground mb-3">SDK & EXAMPLES</div>
              <div className="space-y-2 text-xs">
                <div className="text-muted-foreground cursor-pointer hover:text-primary">📦 Node.js</div>
                <div className="text-muted-foreground cursor-pointer hover:text-primary">🐍 Python</div>
                <div className="text-muted-foreground cursor-pointer hover:text-primary">☕ Java</div>
                <div className="text-muted-foreground cursor-pointer hover:text-primary">🦀 Rust</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main API Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 max-w-4xl">
            
            {/* Hero API Description */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4 text-foreground">
                POST /exchange
                <span className="ml-3 text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded">STABLE</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Bridge local currency ↔ crypto instantly. API-first platform for seamless conversions.
                <br />
                Support for stablecoins + native tokens across multiple networks.
              </p>
              
              <div className="flex gap-3 mb-6">
                <Button 
                  variant="hero" 
                  size="sm"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
                >
                  Get API Key
                </Button>
                <Button variant="outline" size="sm">
                  Test in Playground
                </Button>
              </div>
            </div>

            {/* API Specs in Three Columns */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              
              {/* Request Spec */}
              <div className="bg-card rounded-lg border border-border p-4">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-foreground">Request Body</h3>
                </div>
                <div className="text-xs space-y-2">
                  <div className="bg-muted/30 rounded p-2">
                    <div className="text-accent">amount: <span className="text-secondary">number</span></div>
                    <div className="text-accent">from: <span className="text-secondary">"USD" | "NGN"</span></div>
                    <div className="text-accent">to: <span className="text-secondary">"USDT" | "USDC"</span></div>
                    <div className="text-accent">wallet: <span className="text-secondary">string</span></div>
                  </div>
                  <div className="text-muted-foreground">// Specify conversion parameters</div>
                </div>
              </div>

              {/* Response Spec */}
              <div className="bg-muted/30 rounded-lg border border-border p-4">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard className="w-4 h-4 text-secondary" />
                  <h3 className="font-semibold text-foreground">Response</h3>
                </div>
                <div className="text-xs space-y-2">
                  <div className="bg-card rounded p-2">
                    <div className="text-accent">transaction_id: <span className="text-secondary">string</span></div>
                    <div className="text-accent">payment_url: <span className="text-secondary">string</span></div>
                    <div className="text-accent">expires_at: <span className="text-secondary">timestamp</span></div>
                    <div className="text-accent">status: <span className="text-secondary">"pending"</span></div>
                  </div>
                  <div className="text-muted-foreground">// Payment instructions returned</div>
                </div>
              </div>

              {/* Webhook Spec */}
              <div className="bg-card rounded-lg border border-border p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-accent" />
                  <h3 className="font-semibold text-foreground">Webhook Event</h3>
                </div>
                <div className="text-xs space-y-2">
                  <div className="bg-muted/30 rounded p-2">
                    <div className="text-accent">event: <span className="text-secondary">"completed"</span></div>
                    <div className="text-accent">tx_hash: <span className="text-secondary">string</span></div>
                    <div className="text-accent">amount_received: <span className="text-secondary">number</span></div>
                    <div className="text-accent">timestamp: <span className="text-secondary">number</span></div>
                  </div>
                  <div className="text-muted-foreground">// Real-time settlement notification</div>
                </div>
              </div>
            </div>

            {/* Code Examples */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              
              {/* For Developers */}
              <div className="bg-card rounded-lg border border-border p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-foreground">cURL Example</h3>
                </div>
                <div className="bg-muted/30 rounded p-3 text-xs">
                  <div className="text-secondary">curl -X POST https://api.ramply.xyz/v1/exchange \</div>
                  <div className="text-muted-foreground ml-2">-H "Authorization: Bearer $API_KEY" \</div>
                  <div className="text-muted-foreground ml-2">-H "Content-Type: application/json" \</div>
                  <div className="text-accent ml-2">-d '{"{"}"amount": 100, "from": "USD", "to": "USDT"{"}"}'</div>
                </div>
                <div className="mt-3 text-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
                  >
                    Get Started
                  </Button>
                </div>
              </div>

              {/* For Users */}
              <div className="bg-muted/30 rounded-lg border border-border p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Smartphone className="w-4 h-4 text-secondary" />
                  <h3 className="font-semibold text-foreground">User Experience</h3>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">Mobile-first interface</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">Bank-grade security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">No signup for small amounts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">Instant settlements</span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <Button 
                    variant="hero" 
                    size="sm"
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdExample/viewform', '_blank')}
                  >
                    Try Live Demo
                  </Button>
                </div>
              </div>
            </div>

            {/* API Status Footer */}
            <div className="border-t border-border pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>RESTful + Webhooks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Enterprise SLA</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-xs">
                  <a href="https://twitter.com/ramply" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="https://github.com/ramply" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Github className="w-4 h-4" />
                  </a>
                  <span className="text-muted-foreground">© 2024 Ramply</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;