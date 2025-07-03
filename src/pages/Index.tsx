
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import KitchenGrid from "@/components/KitchenGrid";
import UserTypeModal from "@/components/UserTypeModal";
import { kitchens } from "@/data/kitchenData";

const Index = () => {
  const [userType, setUserType] = useState<string | null>(null);
  const [showUserTypeModal, setShowUserTypeModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

      {/* Kitchen Grid Section */}
      <KitchenGrid kitchens={kitchens} searchTerm={searchTerm} />

      <UserTypeModal
        isOpen={showUserTypeModal}
        onClose={() => setShowUserTypeModal(false)}
        onSelectType={handleUserTypeSelection}
      />
    </div>
  );
};

export default Index;
