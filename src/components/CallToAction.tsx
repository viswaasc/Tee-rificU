import { Button } from "@/components/ui/button";
import { Eye, Brush } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="bg-primary py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Create Your Perfect Tee?
        </h2>
        
        <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Start with our AI-generated designs or upload your own ideas. Our customization tool 
          makes it easy to create something unique.
        </p>

        <div className="flex justify-center items-center max-w-2xl mx-auto">
          <div className="relative w-full bg-background rounded-full border border-input shadow-lg overflow-hidden">
            <input
              type="text"
              placeholder="create your first custom tees"
              className="w-full px-6 py-4 pr-16 text-lg bg-transparent border-0 outline-none focus:ring-0 placeholder:text-muted-foreground"
            />
            <Button
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;