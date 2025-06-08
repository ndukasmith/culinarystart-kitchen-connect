
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Plus, Settings, MessageSquare, TrendingUp } from "lucide-react";

interface UserDashboardProps {
  userType: string;
  onBack: () => void;
}

const UserDashboard = ({ userType, onBack }: UserDashboardProps) => {
  const isOwner = userType === 'owner';

  // Mock data
  const upcomingBookings = [
    {
      id: 1,
      kitchenName: "Modern Commercial Kitchen",
      date: "2024-01-15",
      time: "14:00 - 18:00",
      status: "confirmed",
      price: 180
    },
    {
      id: 2,
      kitchenName: "Artisan Bakery Space",
      date: "2024-01-18",
      time: "09:00 - 12:00",
      status: "pending",
      price: 114
    }
  ];

  const ownerStats = [
    { label: "Total Earnings", value: "€2,450", icon: TrendingUp },
    { label: "Bookings This Month", value: "12", icon: Calendar },
    { label: "Average Rating", value: "4.8", icon: Clock },
    { label: "Response Rate", value: "98%", icon: MessageSquare }
  ];

  const renterStats = [
    { label: "Total Bookings", value: "8", icon: Calendar },
    { label: "Hours Booked", value: "32", icon: Clock },
    { label: "Favorite Locations", value: "3", icon: MapPin },
    { label: "Saved Kitchens", value: "5", icon: Plus }
  ];

  const stats = isOwner ? ownerStats : renterStats;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isOwner ? 'Kitchen Owner Dashboard' : 'My Dashboard'}
            </h1>
            <p className="text-gray-600 mt-1">
              {isOwner ? 'Manage your kitchen listings and bookings' : 'Track your bookings and discover new kitchens'}
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onBack}>
              Back to Home
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              {isOwner ? 'Add Kitchen' : 'Book Kitchen'}
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Bookings */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-900">
                  {isOwner ? 'Recent Bookings' : 'Upcoming Bookings'}
                </CardTitle>
                <CardDescription>
                  {isOwner ? 'Latest bookings for your kitchens' : 'Your scheduled kitchen sessions'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{booking.kitchenName}</h4>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{booking.date}</span>
                          <Clock className="w-4 h-4 ml-4 mr-1" />
                          <span>{booking.time}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          className={booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                        >
                          {booking.status}
                        </Badge>
                        <p className="text-sm font-semibold text-gray-900 mt-1">€{booking.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {isOwner ? (
                    <>
                      <Button variant="outline" className="h-20 flex-col">
                        <Plus className="w-6 h-6 mb-2" />
                        Add New Kitchen
                      </Button>
                      <Button variant="outline" className="h-20 flex-col">
                        <Calendar className="w-6 h-6 mb-2" />
                        Manage Availability
                      </Button>
                      <Button variant="outline" className="h-20 flex-col">
                        <TrendingUp className="w-6 h-6 mb-2" />
                        View Analytics
                      </Button>
                      <Button variant="outline" className="h-20 flex-col">
                        <MessageSquare className="w-6 h-6 mb-2" />
                        Messages
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" className="h-20 flex-col">
                        <MapPin className="w-6 h-6 mb-2" />
                        Browse Kitchens
                      </Button>
                      <Button variant="outline" className="h-20 flex-col">
                        <Calendar className="w-6 h-6 mb-2" />
                        Book Session
                      </Button>
                      <Button variant="outline" className="h-20 flex-col">
                        <MessageSquare className="w-6 h-6 mb-2" />
                        Messages
                      </Button>
                      <Button variant="outline" className="h-20 flex-col">
                        <Settings className="w-6 h-6 mb-2" />
                        Account Settings
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-900">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="text-gray-900">New booking confirmed</p>
                    <p className="text-gray-500">2 hours ago</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-900">Payment received</p>
                    <p className="text-gray-500">1 day ago</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-900">New review received</p>
                    <p className="text-gray-500">2 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Completion */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-900">Profile Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Profile Info</span>
                    <Badge className="bg-green-100 text-green-800">Complete</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Payment Setup</span>
                    <Badge className="bg-green-100 text-green-800">Complete</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Profile Photo</span>
                    <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">80% Complete</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
