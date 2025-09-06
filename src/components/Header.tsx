import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border px-4 py-3 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
           <img 
              src={`${import.meta.env.BASE_URL}logo.png`} 
              alt="Tee-rific U" 
              className="h-10 w-22" 
            />


        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
            Home
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-smooth font-medium">
            Catalog
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-smooth font-medium">
            About
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-smooth font-medium">
            Contact
          </a>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Search - Desktop */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search designs..." 
              className="pl-10 w-64 bg-secondary border-border focus:border-primary"
            />
          </div>
          
          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative hover:bg-secondary">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Button>

          {/* Login - Desktop */}
          <Button variant="outline" className="hidden sm:flex items-center space-x-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <User className="h-4 w-4" />
            <span>Login</span>
          </Button>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium py-2">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth font-medium py-2">
              Catalog
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth font-medium py-2">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth font-medium py-2">
              Contact
            </a>
            
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search designs..." 
                className="pl-10 bg-secondary border-border focus:border-primary"
              />
            </div>

            {/* Mobile Login */}
            <Button variant="outline" className="flex items-center space-x-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground justify-center">
              <User className="h-4 w-4" />
              <span>Login</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;