
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
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">CulinaryStart</h1>
              <p className="text-xs text-gray-500">Kitchen Sharing Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#explore" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Explore Kitchens
            </a>
            <a href="#community" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Community
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              About
            </a>
            {userType && (
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {getUserTypeDisplay()}
              </Badge>
            )}
            <Button onClick={onSelectUserType} className="bg-primary hover:bg-primary/90">
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
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <a href="#explore" className="text-gray-600 hover:text-gray-900 font-medium">
                Explore Kitchens
              </a>
              <a href="#community" className="text-gray-600 hover:text-gray-900 font-medium">
                Community
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">
                About
              </a>
              {userType && (
                <Badge className="bg-primary/10 text-primary border-primary/20 w-fit">
                  {getUserTypeDisplay()}
                </Badge>
              )}
              <Button onClick={onSelectUserType} className="bg-primary hover:bg-primary/90 w-fit">
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
