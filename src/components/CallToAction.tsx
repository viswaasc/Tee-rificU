"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input) return;
    setLoading(true);
    setImageUrl(null);

    try {
      // Call Netlify function instead of Outsystems directly
      const res = await fetch(`/.netlify/functions/proxy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      if (!res.ok) throw new Error("Failed to generate image");

      // Function returns image as binary
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      setImageUrl(url);
    } catch (err) {
      console.error(err);
      alert("Something went wrong while generating the image");
    } finally {
      setLoading(false);
    }
  };

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

        <div className="flex justify-center items-center max-w-2xl mx-auto mb-8">
          <div className="relative w-full bg-background rounded-full border border-input shadow-lg overflow-hidden">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Your words, your style"
              className="w-full px-6 py-4 pr-24 text-lg bg-transparent border-0 outline-none focus:ring-0 placeholder:text-muted-foreground"
            />
            <Button
              size="sm"
              onClick={handleGenerate}
              disabled={loading || !input}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {loading ? "Generating..." : "Generate"}
            </Button>
          </div>
        </div>

        {imageUrl && (
          <div className="mt-8 flex justify-center">
            <img
              src={imageUrl}
              alt="Generated T-shirt design"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default CallToAction;
