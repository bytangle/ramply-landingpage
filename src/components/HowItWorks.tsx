import { DollarSign, CreditCard, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: DollarSign,
      title: "Enter Amount & Details",
      description: "Specify the amount and currency pair you want to exchange. Choose between NGN to crypto or crypto to NGN.",
      delay: "0s"
    },
    {
      icon: CreditCard,
      title: "Get Payment Instructions",
      description: "Receive secure payment instructions tailored to your transaction. Multiple payment methods supported.",
      delay: "0.2s"
    },
    {
      icon: Zap,
      title: "Receive Instantly",
      description: "Get your crypto or fiat instantly after confirmation. Support for stablecoins and native coins like BTC, ETH.",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, fast, and secure. Get started with Ramply in three easy steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth animate-slide-up text-center"
              style={{ animationDelay: step.delay }}
            >
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;