
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChefHat, User, Menu, X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface NavigationProps {
  userType: string | null;
  onSelectUserType: () => void;
}

const Navigation = ({ userType, onSelectUserType }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getUserTypeDisplay = () => {
    if (userType === 'owner') return 'Kitchen Owner';
    if (userType === 'renter') return 'Food Entrepreneur';
    return null;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-cream-300 rounded-lg flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CULINARY</h1>
              <h2 className="text-xl font-bold text-foreground">START</h2>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search..."
                className="pl-10 bg-background border-border focus:ring-primary"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('explore')}
              className="text-foreground hover:text-primary font-medium transition-colors cursor-pointer"
            >
              Rent your Kitchen
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="text-foreground hover:text-primary font-medium transition-colors cursor-pointer"
            >
              Try Demo
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary font-medium transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              className="text-foreground hover:text-primary font-medium transition-colors cursor-pointer"
            >
              Members
            </button>
            <button 
              className="text-foreground hover:text-primary font-medium transition-colors cursor-pointer"
            >
              More
            </button>
            {userType && (
              <Badge className="bg-primary/20 text-primary border-primary/30">
                {getUserTypeDisplay()}
              </Badge>
            )}
            <Button onClick={onSelectUserType} className="bg-foreground text-background hover:bg-foreground/90">
              <User className="w-4 h-4 mr-2" />
              Log In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search..."
                  className="pl-10 bg-background border-border"
                />
              </div>
              <button 
                onClick={() => scrollToSection('explore')}
                className="text-foreground hover:text-primary font-medium text-left"
              >
                Rent your Kitchen
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="text-foreground hover:text-primary font-medium text-left"
              >
                Try Demo
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary font-medium text-left"
              >
                About
              </button>
              {userType && (
                <Badge className="bg-primary/20 text-primary border-primary/30 w-fit">
                  {getUserTypeDisplay()}
                </Badge>
              )}
              <Button onClick={onSelectUserType} className="bg-foreground text-background hover:bg-foreground/90 w-fit">
                <User className="w-4 h-4 mr-2" />
                Log In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
