
export interface Kitchen {
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

export const kitchens: Kitchen[] = [
  {
    id: 1,
    name: "Highly Equipped Professional Kitchen",
    location: "Amsterdam Central",
    price: 90,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1556909114-f6e62ad3d3de?w=400&h=300&fit=crop&auto=format",
    equipment: ["Commercial Oven", "Industrial Mixer", "Prep Stations"],
    capacity: 8,
    available: true
  },
  {
    id: 2,
    name: "Professional Kitchen",
    location: "Rotterdam",
    price: 80,
    rating: 4.9,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1556909043-4f9a409e2ab0?w=400&h=300&fit=crop&auto=format",
    equipment: ["Stone Oven", "Proofing Cabinet", "Dough Sheeter"],
    capacity: 4,
    available: true,
    isPopular: true
  },
  {
    id: 3,
    name: "Home Kitchen",
    location: "Utrecht",
    price: 65,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1556908114-5c5ab83d7ec1?w=400&h=300&fit=crop&auto=format",
    equipment: ["Full Equipment Set", "Recording Setup", "Tasting Area"],
    capacity: 6,
    available: true
  },
  {
    id: 4,
    name: "Small home kitchen",
    location: "The Hague",
    price: 58,
    originalPrice: 60,
    rating: 4.6,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1556908114-4ca8fb8fb0c5?w=400&h=300&fit=crop&auto=format",
    equipment: ["Large Prep Area", "Industrial Equipment", "Cold Storage"],
    capacity: 10,
    available: true
  },
  {
    id: 5,
    name: "Cooking School Kitchen",
    location: "Eindhoven",
    price: 80,
    rating: 4.5,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1556909114-f6e08ad42e80?w=400&h=300&fit=crop&auto=format",
    equipment: ["Basic Equipment", "Shared Storage", "Dining Area"],
    capacity: 6,
    available: true
  }
];
