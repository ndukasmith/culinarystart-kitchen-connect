
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
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 hover:scale-105">
      <div className="relative">
        <img 
          src={kitchen.image} 
          alt={kitchen.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          {kitchen.available ? (
            <Badge className="bg-green-600 hover:bg-green-700">Available</Badge>
          ) : (
            <Badge variant="secondary">Booked</Badge>
          )}
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{kitchen.name}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {kitchen.location}
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
              <span className="font-medium">{kitchen.rating}</span>
              <span className="text-muted-foreground text-sm ml-1">({kitchen.reviews})</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1 text-muted-foreground" />
              <span>{kitchen.capacity} people capacity</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1 text-muted-foreground" />
              <span>Hourly rates</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {kitchen.equipment.slice(0, 2).map((item, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {item}
              </Badge>
            ))}
            {kitchen.equipment.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{kitchen.equipment.length - 2} more
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div>
              <span className="text-2xl font-bold">€{kitchen.price}</span>
              <span className="text-muted-foreground">/hour</span>
            </div>
            <Button size="sm" disabled={!kitchen.available}>
              {kitchen.available ? 'View Details' : 'Unavailable'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KitchenCard;
