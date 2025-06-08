
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChefHat, User, Menu, X } from "lucide-react";

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

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CulinaryStart</h1>
              <p className="text-xs text-muted-foreground">Kitchen Sharing Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#explore" className="text-foreground hover:text-primary transition-colors">
              Explore Kitchens
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors">
              Community
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            {userType && (
              <Badge variant="secondary" className="ml-2">
                {getUserTypeDisplay()}
              </Badge>
            )}
            <Button variant="ghost" size="sm" onClick={onSelectUserType}>
              <User className="w-4 h-4 mr-2" />
              {userType ? 'Switch Role' : 'Get Started'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <a href="#explore" className="text-foreground hover:text-primary transition-colors">
                Explore Kitchens
              </a>
              <a href="#community" className="text-foreground hover:text-primary transition-colors">
                Community
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              {userType && (
                <Badge variant="secondary" className="w-fit">
                  {getUserTypeDisplay()}
                </Badge>
              )}
              <Button variant="ghost" size="sm" onClick={onSelectUserType} className="w-fit">
                <User className="w-4 h-4 mr-2" />
                {userType ? 'Switch Role' : 'Get Started'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
