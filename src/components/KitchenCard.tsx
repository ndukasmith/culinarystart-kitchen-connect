
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
}

interface KitchenCardProps {
  kitchen: Kitchen;
}

const KitchenCard = ({ kitchen }: KitchenCardProps) => {
  return (
    <Card className="culinary-card group">
      <div className="relative">
        <img 
          src={kitchen.image} 
          alt={kitchen.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          {kitchen.available ? (
            <Badge className="bg-green-500 hover:bg-green-600 text-white">Available</Badge>
          ) : (
            <Badge className="bg-gray-500 text-white">Booked</Badge>
          )}
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg text-gray-900 group-hover:text-primary transition-colors">
              {kitchen.name}
            </CardTitle>
            <CardDescription className="flex items-center mt-1 text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              {kitchen.location}
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
              <span className="font-medium text-gray-900">{kitchen.rating}</span>
              <span className="text-gray-500 text-sm ml-1">({kitchen.reviews})</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{kitchen.capacity} people capacity</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>Hourly rates</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {kitchen.equipment.slice(0, 2).map((item, index) => (
              <Badge key={index} variant="outline" className="text-xs bg-gray-50 text-gray-700 border-gray-200">
                {item}
              </Badge>
            ))}
            {kitchen.equipment.length > 2 && (
              <Badge variant="outline" className="text-xs bg-gray-50 text-gray-700 border-gray-200">
                +{kitchen.equipment.length - 2} more
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div>
              <span className="text-2xl font-bold text-gray-900">€{kitchen.price}</span>
              <span className="text-gray-600">/hour</span>
            </div>
            <Button 
              size="sm" 
              disabled={!kitchen.available}
              className="bg-primary hover:bg-primary/90 disabled:bg-gray-300"
            >
              {kitchen.available ? 'View Details' : 'Unavailable'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KitchenCard;
