
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
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Choose Your Role</DialogTitle>
          <DialogDescription className="text-center">
            Select how you'd like to use CulinaryStart
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 hover:border-orange-200"
            onClick={() => onSelectType('owner')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-xl">Kitchen Owner</CardTitle>
              <CardDescription>
                I have a kitchen space to rent out
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• List your kitchen space</li>
                <li>• Set your own pricing</li>
                <li>• Manage bookings easily</li>
                <li>• Earn passive income</li>
              </ul>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Continue as Owner
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 hover:border-red-200"
            onClick={() => onSelectType('renter')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-xl">Food Entrepreneur</CardTitle>
              <CardDescription>
                I need access to professional kitchens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Browse available kitchens</li>
                <li>• Book flexible time slots</li>
                <li>• Access professional equipment</li>
                <li>• Connect with community</li>
              </ul>
              <Button className="w-full bg-red-600 hover:bg-red-700">
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
