
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, Utensils, ArrowRight } from "lucide-react";

interface UserTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectType: (type: string) => void;
}

const UserTypeModal = ({ isOpen, onClose, onSelectType }: UserTypeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-gray-900">Choose Your Role</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Select how you'd like to use CulinaryStart
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 hover:border-primary/30 bg-white"
            onClick={() => onSelectType('owner')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-gray-900">Kitchen Owner</CardTitle>
              <CardDescription className="text-gray-600">
                I have a kitchen space to rent out
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• List your kitchen space</li>
                <li>• Set your own pricing</li>
                <li>• Manage bookings easily</li>
                <li>• Earn passive income</li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Continue as Owner
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 hover:border-primary/30 bg-white"
            onClick={() => onSelectType('renter')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-gray-900">Food Entrepreneur</CardTitle>
              <CardDescription className="text-gray-600">
                I need access to professional kitchens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Browse available kitchens</li>
                <li>• Book flexible time slots</li>
                <li>• Access professional equipment</li>
                <li>• Connect with community</li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Continue as Entrepreneur
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserTypeModal;
