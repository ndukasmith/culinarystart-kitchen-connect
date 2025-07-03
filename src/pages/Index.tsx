
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Users, Clock, Star, Calendar, ChefHat, Utensils, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import KitchenCard from "@/components/KitchenCard";
import Hero from "@/components/Hero";
import UserTypeModal from "@/components/UserTypeModal";

const Index = () => {
  const [userType, setUserType] = useState<string | null>(null);
  const [showUserTypeModal, setShowUserTypeModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Kitchen data matching the uploaded design
  const kitchens = [
    {
      id: 1,
      name: "Highly Equipped Professional Kitchen",
      location: "Amsterdam Central",
      price: 90,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1556909114-f6e62ad3d3de?w=400&h=300&fit=crop",
      equipment: ["Commercial Oven", "Industrial Mixer", "Prep Stations"],
      capacity: 8,
      available: true
    },
    {
      id: 2,
      name: "Professional Kitchen",
      location: "Rotterdam",
      price: 80,
      rating: 4.9,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1556909043-4f9a409e2ab0?w=400&h=300&fit=crop",
      equipment: ["Stone Oven", "Proofing Cabinet", "Dough Sheeter"],
      capacity: 4,
      available: true,
      isPopular: true
    },
    {
      id: 3,
      name: "Home Kitchen",
      location: "Utrecht",
      price: 65,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1556908114-5c5ab83d7ec1?w=400&h=300&fit=crop",
      equipment: ["Full Equipment Set", "Recording Setup", "Tasting Area"],
      capacity: 6,
      available: true
    },
    {
      id: 4,
      name: "Small home kitchen",
      location: "The Hague",
      price: 58,
      originalPrice: 60,
      rating: 4.6,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1556908114-4ca8fb8fb0c5?w=400&h=300&fit=crop",
      equipment: ["Large Prep Area", "Industrial Equipment", "Cold Storage"],
      capacity: 10,
      available: true
    },
    {
      id: 5,
      name: "Cooking School Kitchen",
      location: "Eindhoven",
      price: 80,
      rating: 4.5,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1556909114-f6e08ad42e80?w=400&h=300&fit=crop",
      equipment: ["Basic Equipment", "Shared Storage", "Dining Area"],
      capacity: 6,
      available: true
    }
  ];

  useEffect(() => {
    const savedUserType = localStorage.getItem('culinarystart_user_type');
    if (savedUserType) {
      setUserType(savedUserType);
    }
  }, []);

  const handleUserTypeSelection = (type: string) => {
    setUserType(type);
    localStorage.setItem('culinarystart_user_type', type);
    setShowUserTypeModal(false);
  };

  const filteredKitchens = kitchens.filter(kitchen =>
    kitchen.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kitchen.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType={userType} onSelectUserType={() => setShowUserTypeModal(true)} />
      
      {/* Hero Section - Simplified to match design */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-left">
              Cook up your next big idea!
            </h1>
          </div>
        </div>
      </section>

      {/* Kitchen Grid Section - Main focus like in the image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Kitchen Grid - 2x2 layout for first 4, then 1 below */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
            {filteredKitchens.slice(0, 4).map((kitchen) => (
              <KitchenCard key={kitchen.id} kitchen={kitchen} />
            ))}
          </div>
          
          {/* Fifth kitchen card centered below */}
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-1/2">
              {filteredKitchens.slice(4, 5).map((kitchen) => (
                <KitchenCard key={kitchen.id} kitchen={kitchen} />
              ))}
            </div>
          </div>

          {filteredKitchens.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No kitchens found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <UserTypeModal
        isOpen={showUserTypeModal}
        onClose={() => setShowUserTypeModal(false)}
        onSelectType={handleUserTypeSelection}
      />
    </div>
  );
};

export default Index;
