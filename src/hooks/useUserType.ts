
import { useState, useEffect } from "react";

export const useUserType = () => {
  const [userType, setUserType] = useState<string | null>(null);
  const [showUserTypeModal, setShowUserTypeModal] = useState(false);

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

  const openUserTypeModal = () => setShowUserTypeModal(true);

  return {
    userType,
    showUserTypeModal,
    handleUserTypeSelection,
    openUserTypeModal,
    setShowUserTypeModal
  };
};
