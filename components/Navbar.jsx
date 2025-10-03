import React, { useState } from 'react';
import { Search, Bell, Heart, ShoppingCart, User, ChevronDown, Home, Grid, Info, Mail, HelpCircle, Menu, X, LogOut } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src="image/logo.png" alt="Tungfalas" className="p-1 w-20 h-auto" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/dashboard" className="flex items-center space-x-1 text-gray-500 hover:text-orange-600 transition">
              <Home size={16} strokeWidth={2} />
              <span className="text-sm font-medium">Home</span>
            </a>
            
            <a href="/categories" className="flex items-center space-x-1 text-gray-500 hover:text-orange-600 transition">
              <Grid size={16} strokeWidth={2} />
              <span className="text-sm font-medium">Our Category</span>
            </a>
            
            <a href="/about" className="flex items-center space-x-1 text-gray-500 hover:text-orange-600 transition">
              <Info size={16} strokeWidth={2} />
              <span className="text-sm font-medium">About Us</span>
            </a>
            
            <a href="/contact" className="flex items-center space-x-1 text-gray-500 hover:text-orange-600 transition">
              <Mail size={16} strokeWidth={2} />
              <span className="text-sm font-medium">Contact Us</span>
            </a>
            
            <a href="/faqs" className="flex items-center space-x-1 text-gray-500 hover:text-orange-600 transition">
              <HelpCircle size={16} strokeWidth={2} />
              <span className="text-sm font-medium">FAQs</span>
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-5">
            <button className="text-gray-600 hover:text-gray-800 transition">
              <Search size={20} strokeWidth={2} />
            </button>
            
            <button className="text-gray-600 hover:text-gray-800 transition">
              <Bell size={20} strokeWidth={2} />
            </button>
            
            <button className="text-gray-600 hover:text-gray-800 transition">
              <Heart size={20} strokeWidth={2} />
            </button>
            
            <button className="relative text-gray-600 hover:text-gray-800 transition">
              <ShoppingCart size={20} strokeWidth={2} />
            </button>
            
            <button className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition">
              <span className="text-sm font-medium">EN</span>
              <ChevronDown size={16} strokeWidth={2} />
            </button>
            
            <button className="text-gray-600 hover:text-gray-800 transition">
              <a href="logout">
              <LogOut size={20} strokeWidth={2} />
              </a>
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200">
            <a href="/dashboard" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
              <Home size={18} strokeWidth={2} />
              <span className="text-sm font-medium">Home</span>
            </a>
            
            <a href="/category" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
              <Grid size={18} strokeWidth={2} />
              <span className="text-sm font-medium">Our Category</span>
            </a>
            
            <a href="/about" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
              <Info size={18} strokeWidth={2} />
              <span className="text-sm font-medium">About Us</span>
            </a>
            
            <a href="/contact" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
              <Mail size={18} strokeWidth={2} />
              <span className="text-sm font-medium">Contact Us</span>
            </a>
            
            <a href="/faqs" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
              <HelpCircle size={18} strokeWidth={2} />
              <span className="text-sm font-medium">FAQs</span>
            </a>

            {/* Language selector for mobile */}
            <button className="flex items-center space-x-2 px-4 py-2 w-full text-gray-700 hover:bg-gray-100 transition">
              <span className="text-sm font-medium">EN</span>
              <ChevronDown size={16} strokeWidth={2} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}