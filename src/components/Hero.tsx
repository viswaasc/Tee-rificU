import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/hero-background.jpg)` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-foreground">AI-Designed, </span>
          <span className="text-primary">Customizable</span>
          <br />
          <span className="text-foreground">Tees</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover unique T-shirt designs created by artificial intelligence. 
          Customize colors, add your text, and make it uniquely yours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-lime text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:glow-shadow group"
          >
            <Sparkles className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Browse Designs
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="btn-outline-lime text-lg px-8 py-6 rounded-full font-semibold group"
          >
            Create Custom
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;