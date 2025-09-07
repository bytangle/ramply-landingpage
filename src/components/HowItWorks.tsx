import { DollarSign, CreditCard, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: DollarSign,
      title: "input_amount()",
      description: "Specify amount + currency pair",
    },
    {
      icon: CreditCard,
      title: "get_instructions()",
      description: "Receive secure payment flow",
    },
    {
      icon: Zap,
      title: "receive_crypto()",
      description: "Instant settlement + confirmation",
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            how_it_works()
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps. That's it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth text-center"
            >
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
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