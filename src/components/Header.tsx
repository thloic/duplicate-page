"use client";

import { useState } from "react";
import { Search, Phone, ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const mainNavItems = [
    "Rénovation énergétique",
    "Chauffage & Climatisation", 
    "Isolation",
    "Portes & fenêtres",
    "Rénovation électrique",
    "Borne de recharge"
  ];

  const productNavItems = [
    { name: "Pompes à chaleur", icon: "🔥" },
    { name: "Chaudières", icon: "🏠" },
    { name: "Climatisation réversible", icon: "❄️" },
    { name: "Radiateurs électriques", icon: "📻" },
    { name: "Chauffe-eaux", icon: "💧" }
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex justify-between items-center py-2 sm:py-3">
            {/* Logo IZI by EDF */}
            <div className="flex-shrink-0">
              <div className="flex flex-col items-start">
                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    <span className="text-orange-500 font-black text-2xl sm:text-3xl">izi</span>
                  </div>
                </div>
                <div className="text-xs text-blue-700 font-semibold -mt-1">by EDF</div>
              </div>
            </div>

            {/* Search Bar - Visible sur tablette et desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-6 xl:mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Rechercher un produit, une offre de travaux..."
                  className="w-full pl-4 pr-12 py-2 sm:py-2.5 rounded-full text-sm text-gray-600 placeholder-gray-400 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-gray-600 hover:text-blue-600">
                  <Search size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
              {/* Liens desktop */}
              <a href="#" className="hidden lg:block text-sm text-gray-700 hover:text-blue-600 font-medium">Le blog</a>
              <a href="#" className="hidden lg:block text-sm text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <a href="#" className="hidden lg:block text-sm text-gray-700 hover:text-blue-600 font-medium">Mon compte</a>
              
              {/* Phone - Version desktop */}
              <div className="hidden sm:flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg border border-blue-100">
                <Phone size={18} className="text-blue-600 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold text-blue-900 text-sm whitespace-nowrap">01 80 84 60 60</span>
                  <span className="text-blue-600 text-xs hidden xl:block">Prix d'un appel local</span>
                </div>
              </div>

              {/* Phone - Version mobile compacte */}
              <div className="sm:hidden flex items-center space-x-1 bg-blue-50 px-2 py-1.5 rounded-lg border border-blue-100">
                <Phone size={16} className="text-blue-600 flex-shrink-0" />
                <span className="font-bold text-blue-900 text-xs whitespace-nowrap">01 80 84 60 60</span>
              </div>

              {/* Search Icon Mobile */}
              <button className="md:hidden p-1.5 text-gray-600 hover:text-blue-600">
                <Search size={20} />
              </button>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-1.5 text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Search Bar Mobile - Full width */}
          <div className="md:hidden pb-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un produit..."
                className="w-full pl-4 pr-12 py-2.5 rounded-full text-sm text-gray-600 placeholder-gray-400 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-gray-600 hover:text-blue-600">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Desktop */}
      <div className="hidden lg:block border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {mainNavItems.map((item, index) => (
              <div key={index} className="relative group">
                <button 
                  className={`flex items-center space-x-1 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                    item === "Chauffage & Climatisation" 
                      ? "text-blue-600 border-b-2 border-blue-600" 
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  <span className="text-xs xl:text-sm">{item}</span>
                  {item === "Chauffage & Climatisation" && (
                    <ChevronDown size={14} className="text-blue-600 flex-shrink-0" />
                  )}
                </button>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Product Navigation Bar - Desktop */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center space-x-8 xl:space-x-12 py-2">
            {productNavItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center space-x-2 text-sm font-semibold text-blue-600 hover:text-blue-700 whitespace-nowrap transition-colors"
              >
                <span className="text-base">{item.icon}</span>
                <span className="text-xs xl:text-sm">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Product Navigation Bar - Tablet */}
      <div className="hidden md:block lg:hidden bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between py-2 overflow-x-auto">
            {productNavItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center space-x-1 px-2 text-sm font-semibold text-blue-600 hover:text-blue-700 whitespace-nowrap transition-colors flex-shrink-0"
              >
                <span className="text-sm">{item.icon}</span>
                <span className="text-xs">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 fixed inset-x-0 top-[84px] sm:top-[92px] bottom-0 z-50 overflow-y-auto">
          <div className="px-4 py-2 space-y-0">
            {/* Main nav items mobile */}
            {mainNavItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0">
                <button
                  className="flex justify-between items-center w-full py-4 text-left text-gray-700 font-semibold hover:text-blue-600 text-base"
                  onClick={() => setActiveDropdown(
                    activeDropdown === item ? null : item
                  )}
                >
                  {item}
                  {item === "Chauffage & Climatisation" && (
                    <ChevronDown
                      size={18}
                      className={`transform transition-transform flex-shrink-0 ${
                        activeDropdown === item ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                
                {/* Dropdown pour Chauffage & Climatisation sur mobile */}
                {activeDropdown === item && item === "Chauffage & Climatisation" && (
                  <div className="pb-2 pl-4 space-y-2 bg-gray-50 rounded-lg mx-2 mb-2">
                    {productNavItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="flex items-center space-x-3 py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-200 last:border-b-0"
                      >
                        <span className="text-lg">{subItem.icon}</span>
                        <span className="text-sm">{subItem.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Product items mobile - Section séparée */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">Produits</h3>
              <div className="space-y-1">
                {productNavItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center space-x-3 py-3 text-blue-600 font-semibold border-b border-gray-100 last:border-b-0 px-2"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-base">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right actions mobile */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">Compte</h3>
              <div className="space-y-1">
                <a href="#" className="block py-3 text-gray-700 font-medium px-2 border-b border-gray-100">Le blog</a>
                <a href="#" className="block py-3 text-gray-700 font-medium px-2 border-b border-gray-100">Contact</a>
                <a href="#" className="block py-3 text-gray-700 font-medium px-2">Mon compte</a>
              </div>
            </div>

            {/* Phone mobile */}
            <div className="pt-4 border-t border-gray-200 sticky bottom-0 bg-white pb-4">
              <div className="flex items-center space-x-3 bg-blue-50 px-4 py-3 rounded-lg border border-blue-100 mx-2">
                <Phone size={20} className="text-blue-600 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold text-blue-900 text-lg">01 80 84 60 60</span>
                  <span className="text-blue-600 text-sm">Prix d'un appel local</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay pour mobile menu */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 top-[84px] sm:top-[92px]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}