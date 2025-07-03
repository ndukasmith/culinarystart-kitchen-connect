
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Users, Clock } from "lucide-react";

interface Kitchen {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  equipment: string[];
  capacity: number;
  available: boolean;
  isPopular?: boolean;
  originalPrice?: number;
}

interface KitchenCardProps {
  kitchen: Kitchen;
}

const KitchenCard = ({ kitchen }: KitchenCardProps) => {
  const hasDiscount = kitchen.originalPrice && kitchen.originalPrice > kitchen.price;

  return (
    <Card className="bg-card border-border overflow-hidden shadow-sm">
      <div className="relative">
        <img 
          src={kitchen.image} 
          alt={kitchen.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {kitchen.isPopular && (
            <Badge className="bg-green-700 text-white px-3 py-1 text-sm font-medium">
              Most Popular
            </Badge>
          )}
          {hasDiscount && (
            <Badge className="bg-black text-white px-3 py-1 text-sm font-medium">
              Discount
            </Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-card-foreground">
            {kitchen.name}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">€ {kitchen.price},00</span>
              {hasDiscount && (
                <span className="text-sm text-muted-foreground line-through">
                  € {kitchen.originalPrice},00
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KitchenCard;
