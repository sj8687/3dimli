"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
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
  Headphones,
} from "lucide-react";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

interface IconData {
  id: number;
  x: number;
  y: number;
  icon: React.ElementType; // use component type instead of node
  color: string;
  clor: string;
  card: {
    title: string;
    description: string;
  };
}

const icons: IconData[] = [
  { id: 1, x: 8, y: 20, icon: Box, color: "bg-gray-800", clor: "text-purple-500", card: { title: "3D Models", description: "Premium 3D assets for your projects" } },
  { id: 2, x: 88, y: 15, icon: ShoppingCart, color: "bg-gray-800", clor: "text-orange-500", card: { title: "Shopping Cart", description: "Easy checkout and instant downloads" } },
  { id: 3, x: 20, y: 35, icon: Tag, color: "bg-gray-800", clor: "text-pink-500", card: { title: "Digital Products", description: "Browse thousands of digital creations" } },
  { id: 4, x: 5, y: 50, icon: Users, color: "bg-gray-800", clor: "text-blue-500", card: { title: "Creator Community", description: "Join our community of digital creators" } },
  { id: 5, x: 85, y: 45, icon: Search, color: "bg-gray-800", clor: "text-green-500", card: { title: "Advanced Search", description: "Find exactly what you're looking for" } },
  { id: 6, x: 18, y: 70, icon: Download, color: "bg-gray-800", clor: "text-gray-500", card: { title: "Instant Downloads", description: "Get your purchases immediately" } },
  { id: 7, x: 90, y: 75, icon: Upload, color: "bg-gray-800", clor: "text-red-500", card: { title: "Upload Content", description: "Share your creations with the community" } },
  { id: 8, x: 10, y: 85, icon: Heart, color: "bg-gray-800", clor: "text-orange-500", card: { title: "Favorites", description: "Save your favorite digital products" } },
  { id: 9, x: 40, y: 88, icon: Star, color: "bg-gray-800", clor: "text-purple-300", card: { title: "Featured Models", description: "Discover our handpicked selection" } },
  { id: 10, x: 60, y: 88, icon: Headphones, color: "bg-gray-800", clor: "text-blue-500", card: { title: "Audio Assets", description: "High-quality audio files and music" } },
  { id: 11, x: 85, y: 85, icon: Grid3X3, color: "bg-gray-800", clor: "text-gray-300", card: { title: "Categories", description: "Explore different types of digital content" } },
];

const phrases = [
  "Discover, Buy, and Sell Products",
  "Your Marketplace for 3D Models",
  "Join Our Community of Creators",
  "Instant Downloads, Anytime",
];

export default function HeroSection() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const iconRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    phrases.forEach((phrase) => {
      tl.to(textRef.current, {
        duration: phrase.length * 0.07,
        text: phrase,
        ease: "none",
      });
      tl.to({}, { duration: 2 });
      tl.to(textRef.current, {
        duration: phrase.length * 0.05,
        text: "",
        ease: "none",
      });
    });

    gsap.to(cursorRef.current, {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });

    const iconsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
      },
    });

    const targetX = window.innerWidth / 2;
    const targetY = window.innerHeight / 2;

    iconRefs.current.forEach((icon, i) => {
      const iconData = icons[i];
      iconsTimeline.to(
        icon,
        {
          x: targetX - (window.innerWidth * iconData.x) / 100,
          y: targetY - (window.innerHeight * iconData.y) / 100,
          xPercent: -50,
          yPercent: -50,
          opacity: 0,
          scale: 2,
          duration: 1.5,
          ease: "power2.inOut",
        },
        i * 0.6
      );
    });
  }, []);

  return (
    <section className="hero-section min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
      {icons.map((iconData, i) => {
        const IconComp = iconData.icon;
        return (
          <div
            key={iconData.id}
            ref={(el) => {
              if (el) iconRefs.current[i] = el;
            }}
            className={`absolute 
              w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
              ${iconData.color} rounded-full flex items-center justify-center ${iconData.clor} cursor-pointer shadow-2xl`}
            style={{
              left: `${iconData.x}%`,
              top: `${iconData.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <IconComp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </div>
        );
      })}

      <div className="max-w-4xl z-20 relative">
        <div className="mb-8">
          <h1
            ref={textRef}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight inline-block"
          ></h1>
          <span
            ref={cursorRef}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-400"
          >
            |
          </span>
        </div>

        <div className="mb-12">
          <p className="text-base sm:text-lg md:text-[20px] text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Your one-stop digital platform for 3D models and digital creations.
            Join our community of creators and collectors today.
          </p>
        </div>

        <div>
          <button className="bg-transparent border-2 hover:bg-gray-900 transition-all duration-300 px-6 sm:px-8 py-2 text-sm sm:text-base md:text-lg rounded-full">
            Explore all products
          </button>
        </div>
      </div>
    </section>
  );
}
