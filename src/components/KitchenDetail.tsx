
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Star, MapPin, Users, Clock, Wifi, Car, ChefHat, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface KitchenDetailProps {
  kitchen: {
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
    description?: string;
    amenities?: string[];
    images?: string[];
  };
  onBack: () => void;
}

const KitchenDetail = ({ kitchen, onBack }: KitchenDetailProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", 
    "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
  ];

  const amenityIcons = {
    "Wi-Fi": Wifi,
    "Parking": Car,
    "Professional Equipment": ChefHat,
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to listings
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <img 
                src={kitchen.image} 
                alt={kitchen.name}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            {/* Kitchen Info */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{kitchen.name}</h1>
                  <div className="flex items-center mt-2 text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{kitchen.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                    <span className="font-medium text-gray-900">{kitchen.rating}</span>
                    <span className="text-gray-500 ml-1">({kitchen.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{kitchen.capacity} people capacity</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Hourly booking available</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                {kitchen.description || "A professional commercial kitchen space perfect for food entrepreneurs, caterers, and culinary professionals. Fully equipped with modern appliances and tools to help you create amazing culinary experiences."}
              </p>

              {/* Equipment */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Equipment & Features</h3>
                <div className="flex flex-wrap gap-2">
                  {kitchen.equipment.map((item, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {(kitchen.amenities || ["Wi-Fi", "Parking", "Professional Equipment"]).map((amenity, index) => {
                    const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons] || ChefHat;
                    return (
                      <div key={index} className="flex items-center">
                        <IconComponent className="w-5 h-5 mr-2 text-primary" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">€{kitchen.price}<span className="text-base font-normal text-gray-600">/hour</span></span>
                  {kitchen.available ? (
                    <Badge className="bg-green-500 text-white">Available</Badge>
                  ) : (
                    <Badge className="bg-gray-500 text-white">Booked</Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Date Selection */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Select Date</h4>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-lg border"
                    disabled={(date) => date < new Date()}
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Select Time</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        className={selectedTime === time ? "bg-primary" : ""}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Booking Summary */}
                {selectedDate && selectedTime && (
                  <div className="border-t pt-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span>{selectedDate.toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span>{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>1 hour</span>
                      </div>
                      <div className="flex justify-between font-semibold border-t pt-2">
                        <span>Total:</span>
                        <span>€{kitchen.price}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Book Button */}
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={!kitchen.available || !selectedDate || !selectedTime}
                >
                  {kitchen.available ? 'Book Now' : 'Unavailable'}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  You won't be charged until your booking is confirmed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenDetail;
