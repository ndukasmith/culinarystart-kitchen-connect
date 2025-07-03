
import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import KitchenGrid from "@/components/KitchenGrid";
import UserTypeModal from "@/components/UserTypeModal";
import { useUserType } from "@/hooks/useUserType";
import { kitchens } from "@/data/kitchenData";

const Index = () => {
  const {
    userType,
    showUserTypeModal,
    handleUserTypeSelection,
    openUserTypeModal,
    setShowUserTypeModal
  } = useUserType();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType={userType} onSelectUserType={openUserTypeModal} />
      <HeroSection />
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
