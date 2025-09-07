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
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            how_it_works()
          </h2>
          <p className="text-muted-foreground">
            Three simple steps. That's it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-5 shadow-card hover:shadow-elegant transition-smooth text-center"
            >
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <step.icon className="w-5 h-5 text-white" />
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