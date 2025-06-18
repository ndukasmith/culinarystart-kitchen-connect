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

  // Sample kitchen data
  const kitchens = [
    {
      id: 1,
      name: "Modern Commercial Kitchen",
      location: "Amsterdam Central",
      price: 45,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      equipment: ["Commercial Oven", "Industrial Mixer", "Prep Stations"],
      capacity: 8,
      available: true
    },
    {
      id: 2,
      name: "Artisan Bakery Space",
      location: "Rotterdam",
      price: 38,
      rating: 4.9,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
      equipment: ["Stone Oven", "Proofing Cabinet", "Dough Sheeter"],
      capacity: 4,
      available: true
    },
    {
      id: 3,
      name: "Test Kitchen Studio",
      location: "Utrecht",
      price: 52,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1556909114-4f983e9b3f43?w=400&h=300&fit=crop",
      equipment: ["Full Equipment Set", "Recording Setup", "Tasting Area"],
      capacity: 6,
      available: false
    },
    {
      id: 4,
      name: "Professional Catering Kitchen",
      location: "The Hague",
      price: 55,
      rating: 4.6,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      equipment: ["Large Prep Area", "Industrial Equipment", "Cold Storage"],
      capacity: 10,
      available: true
    },
    {
      id: 5,
      name: "Cozy Community Kitchen",
      location: "Eindhoven",
      price: 32,
      rating: 4.5,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      equipment: ["Basic Equipment", "Shared Storage", "Dining Area"],
      capacity: 6,
      available: true
    },
    {
      id: 6,
      name: "High-End Culinary Lab",
      location: "Amsterdam South",
      price: 75,
      rating: 4.9,
      reviews: 142,
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&h=300&fit=crop",
      equipment: ["Sous Vide Station", "Molecular Equipment", "Premium Tools"],
      capacity: 4,
      available: true
    }
  ];

  const stats = [
    { icon: ChefHat, label: "Kitchens Available", value: "500+" },
    { icon: Users, label: "Active Users", value: "2,500+" },
    { icon: Calendar, label: "Bookings This Month", value: "1,200+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" }
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
    <div className="min-h-screen bg-white">
      <Navigation userType={userType} onSelectUserType={() => setShowUserTypeModal(true)} />
      
      <Hero onGetStarted={() => setShowUserTypeModal(true)} />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section - This is the "Explore Kitchens" section */}
      <section id="explore" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Kitchen</h2>
            <p className="text-gray-600 mb-8">
              Discover commercial-grade kitchens available for rent in your area
            </p>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search by location or kitchen type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg border-gray-200 focus:border-primary focus:ring-primary"
              />
            </div>
          </div>

          {/* Kitchen Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredKitchens.map((kitchen) => (
              <KitchenCard key={kitchen.id} kitchen={kitchen} />
            ))}
          </div>

          {filteredKitchens.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-gray-500">No kitchens found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section - This is the "About" section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CulinaryStart?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're revolutionizing the food industry by connecting entrepreneurs with professional kitchen spaces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-gray-900">Prime Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Access commercial kitchens in the best locations across the Netherlands
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-gray-900">Flexible Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Book by the hour, day, or month. Perfect for any culinary project size
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-gray-900">Community Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Connect with fellow food entrepreneurs and grow your culinary network
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with fellow food entrepreneurs and kitchen owners in the CulinaryStart community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-gray-900">Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Connect with other food entrepreneurs and share experiences
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-gray-900">Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Share and read honest reviews from the community
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-gray-900">Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Access resources and tips to grow your culinary business
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of kitchen owners and food entrepreneurs who are already part of the CulinaryStart community
          </p>
          <Button 
            size="lg" 
            onClick={() => setShowUserTypeModal(true)}
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg"
          >
            Join CulinaryStart Today
          </Button>
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
