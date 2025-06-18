
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
    <Card className="culinary-card group bg-card border-border">
      <div className="relative">
        <img 
          src={kitchen.image} 
          alt={kitchen.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          {kitchen.isPopular && (
            <Badge className="popular-badge">Most Popular</Badge>
          )}
          {hasDiscount && (
            <Badge className="discount-badge ml-2">Discount</Badge>
          )}
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors">
          {kitchen.name}
        </CardTitle>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="price-text">€ {kitchen.price}</span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through ml-2">
                € {kitchen.originalPrice}
              </span>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{kitchen.location}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{kitchen.capacity} people</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
              <span className="font-medium text-card-foreground">{kitchen.rating}</span>
              <span className="ml-1">({kitchen.reviews})</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {kitchen.equipment.slice(0, 2).map((item, index) => (
              <Badge key={index} variant="outline" className="text-xs bg-secondary text-secondary-foreground border-border">
                {item}
              </Badge>
            ))}
            {kitchen.equipment.length > 2 && (
              <Badge variant="outline" className="text-xs bg-secondary text-secondary-foreground border-border">
                +{kitchen.equipment.length - 2} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KitchenCard;
