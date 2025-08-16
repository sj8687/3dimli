"use client";

import { useState } from "react";
// import { Button } from "@/components/ui/button";
import { 
  Box, 
  ShoppingCart, 
  Tag, 
  Users, 
  Download, 
  Heart, 
  Search, 
  Grid3X3, 
  Upload,
  Star,
  Headphones
} from "lucide-react";

interface IconData {
  id: number;
  x: number;
  y: number;
  icon: React.ReactNode;
  color: string;
  clor:string;
  card: {
    title: string;
    description: string;
  };
}

const icons: IconData[] = [
  {
    id: 1,
    x: 8,
    y: 20,
    icon: <Box className="w-6 h-6" />,
    color: "bg-gray-800",
    clor:"text-purple-500",
    card: {
      title: "3D Models",
      description: "Premium 3D assets for your projects"
    }
  },
  {
    id: 2,
    x: 88,
    y: 15,
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "bg-gray-800",
        clor:"text-orage-500",

    card: {
      title: "Shopping Cart",
      description: "Easy checkout and instant downloads"
    }
  },
  {
    id: 3,
    x: 20,
    y: 35,
    icon: <Tag className="w-6 h-6" />,
    color: "bg-gray-800",
        clor:"text-pink-500",

    card: {
      title: "Digital Products",
      description: "Browse thousands of digital creations"
    }
  },
  {
    id: 4,
    x: 5,
    y: 50,
    icon: <Users className="w-6 h-6" />,
    color: "bg-gray-800",
        clor:"text-blue-500",

    card: {
      title: "Creator Community",
      description: "Join our community of digital creators"
    }
  },
  {
    id: 5,
    x: 85,
    y: 45,
    icon: <Search className="w-6 h-6" />,
    color: "bg-gray-800",
        clor:"text-green-500",

    card: {
      title: "Advanced Search",
      description: "Find exactly what you're looking for"
    }
  },
  {
    id: 6,
    x: 18,
    y: 70,
    icon: <Download className="w-6 h-6" />,
    color: "bg-gray-800",
        clor:"text-gray-500",

    card: {
      title: "Instant Downloads",
      description: "Get your purchases immediately"
    }
  },
  {
    id: 7,
    x: 90,
    y: 75,
    icon: <Upload className="w-6 h-6" />,
    color: "bg-gray-800",
        clor:"text-red-500",

    card: {
      title: "Upload Content",
      description: "Share your creations with the community"
    }
  },
  {
    id: 8,
    x: 10,
    y: 85,
    icon: <Heart className="w-6 h-6" />,
    color: "bg-gray-800",
        clor:"text-orange-500",

    card: {
      title: "Favorites",
      description: "Save your favorite digital products"
    }
  },
  {
    id: 9,
    x: 40,
    y: 88,
    icon: <Star className="w-6 h-6" />,
    color: "bg-gray-800",
        clor:"text-purple-300",

    card: {
      title: "Featured Models",
      description: "Discover our handpicked selection"
    }
  },
  {
    id: 10,
    x: 60,
    y: 88,
    icon: <Headphones className="w-6 h-6" />,
    color: "bg-gray-800",
        clor:"text-blue-500",

    card: {
      title: "Audio Assets",
      description: "High-quality audio files and music"
    }
  },
  {
    id: 11,
    x: 85,
    y: 85,
    icon: <Grid3X3 className="w-6 h-6" />,
    color: "bg-gray-800",
        clor:"text-gray-300",

    card: {
      title: "Categories",
      description: "Explore different types of digital content"
    }
  }
];

export default function HeroSection() {
  const [hoveredIcon, setHoveredIcon] = useState<IconData | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top 
    });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center text-center px-6 relative"
      onMouseMove={handleMouseMove}
    >
      {icons.map((iconData) => (
        <div
          key={iconData.id}
          className={`absolute w-18 h-18 ${iconData.color} rounded-full flex items-center justify-center ${iconData.clor} cursor-pointer shadow-2xl hover:scale-110 transition-transform duration-300 z-10`}
          style={{
            left: `${iconData.x}%`,
            top: `${iconData.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          onMouseEnter={() => setHoveredIcon(iconData)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          {iconData.icon}
        </div>
      ))}

      <div className="max-w-5xl z-20 relative">
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Discover, Buy, and Sell<br />
            Digital Products
          </h1>
        </div>
        
        <div className="mb-12">
          <p className="text-xl md:text-[20px] text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Your one-stop digital platform for 3D models and digital creations Join our community of creators and collectors today.
          </p>
        </div>

        <div>
          <button 
           
            className="bg-transparent border-2 hover:bg-gray-900 transition-all duration-300 px-8 py-2 text-lg rounded-full"
          >
            Explore all products
          </button>
        </div>
      </div>

      {hoveredIcon && (
        <div
          className="absolute bg-gray-800 text-white p-4 rounded-lg shadow-2xl border border-gray-700 max-w-xs z-50 pointer-events-none"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y + 20,
          }}
        >
          <div className="flex items-center mb-2">
            <div className={`w-6 h-6 ${hoveredIcon.color} rounded-full mr-2`}></div>
            <h3 className="font-semibold">{hoveredIcon.card.title}</h3>
          </div>
          <p className="text-sm text-gray-300">
            {hoveredIcon.card.description}
          </p>
        </div>
      )}
    </section>
  );
}