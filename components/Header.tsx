"use client";

import { useState } from "react";
import { Search, Upload, User, Menu, X } from "lucide-react";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa6";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/3d.svg" alt="3dimli Logo" width={110} height={40} />
          <span className="text-xs text-purple-400">BETA 1.0.1</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-300 text-[15px] font-light">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Discover</a>
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Pricing</a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          {/* Search (desktop only) */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <Search className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          </div>

          {/* Buttons */}
          <button className="hidden sm:flex items-center space-x-1 rounded-lg bg-teal-900 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
            <FaDiscord className="h-4 w-4" />
            <span>Discord</span>
          </button>

          <button className="hidden sm:flex items-center space-x-1 rounded-lg bg-teal-900 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
            <Upload className="h-4 w-4" />
            <span>Upload</span>
          </button>

          <button className="rounded-full bg-white/10 p-2 border hover:bg-white/20">
            <User className="h-5 w-5 text-white" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden rounded-lg p-2 border border-white/10 hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4 space-y-4">
          <a href="#" className="block text-gray-300 hover:text-white">Home</a>
          <a href="#" className="block text-gray-300 hover:text-white">Discover</a>
          <a href="#" className="block text-gray-300 hover:text-white">Features</a>
          <a href="#" className="block text-gray-300 hover:text-white">Pricing</a>

          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <button className="flex items-center justify-center space-x-2 rounded-lg bg-teal-900 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
              <FaDiscord className="h-4 w-4" />
              <span>Discord</span>
            </button>

            <button className="flex items-center justify-center space-x-2 rounded-lg bg-teal-900 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
              <Upload className="h-4 w-4" />
              <span>Upload</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
