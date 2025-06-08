
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, Utensils } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🍳</div>
        <div className="absolute top-32 right-20 text-4xl">👨‍🍳</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">🥘</div>
        <div className="absolute bottom-10 right-10 text-3xl">🍪</div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border">
              <ChefHat className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">Revolutionizing Food Industry</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Kitchen.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Their Success.
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect kitchen owners with food entrepreneurs in the world's first crowd-sourced commercial kitchen sharing platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg border">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Utensils className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">For Kitchen Owners</h3>
                <p className="text-sm text-gray-600">Monetize your unused space</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg border">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-red-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">For Entrepreneurs</h3>
                <p className="text-sm text-gray-600">Access professional kitchens</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
