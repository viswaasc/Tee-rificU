import { Bot, Palette, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Generated Designs",
      description: "Unique patterns and artwork created by advanced artificial intelligence algorithms, ensuring no two designs are exactly alike.",
      color: "feature-1"
    },
    {
      icon: Palette,
      title: "Full Customization",
      description: "Personalize colors, add your own text or logo, and preview your design in real-time before ordering.",
      color: "feature-2"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "High-quality materials and printing ensure your custom tees look great and last long.",
      color: "feature-3"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Tee-rific U?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of custom apparel with our AI-powered design platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group hover:scale-105 transform"
            >
              <div className={`w-16 h-16 bg-${feature.color}/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-${feature.color}/30 transition-all`}>
                <feature.icon className={`h-8 w-8 text-${feature.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;