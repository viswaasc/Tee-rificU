import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cosmic Nebula",
      category: "Space",
      rating: 4.8,
      price: 599,
      originalPrice: 899,
      isNew: true,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Abstract Geometry",
      category: "Abstract",
      rating: 4.6,
      price: 699,
      originalPrice: 999,
      isNew: false,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Digital Forest",
      category: "Nature",
      rating: 4.9,
      price: 699,
      originalPrice: 999,
      isNew: true,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      name: "Neon Dreams",
      category: "Cyberpunk",
      rating: 4.7,
      price: 699,
      originalPrice: 999,
      isNew: false,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=center"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-rating-gold fill-current' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Designs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular AI-generated T-shirt designs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="product-card group">
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square bg-secondary">
                {product.isNew && (
                  <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">
                    New
                  </Badge>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                    <span className="text-sm text-muted-foreground ml-1">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    className="btn-lime flex-1 group/btn"
                    size="sm"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="btn-outline-lime group/btn"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="btn-outline-lime group"
          >
            View All Designs
            <Eye className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;