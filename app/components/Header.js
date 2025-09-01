"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "diensten",
        "over-ons",
        "team",
        "faq",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/90 backdrop-blur-xl shadow-2xl sticky top-0 z-50 transition-all duration-500 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div
            className="flex items-center group cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Zorg van de Zussun Logo"
                width={120}
                height={120}
                className="transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {[
              { id: "diensten", label: "Diensten" },
              { id: "over-ons", label: "Over Ons" },
              { id: "team", label: "Team" },
              { id: "faq", label: "FAQ" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 group ${
                  activeSection === item.id
                    ? "text-blue-600 bg-blue-50 shadow-lg"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : ""
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            {[
              { id: "diensten", label: "Diensten" },
              { id: "over-ons", label: "Over Ons" },
              { id: "team", label: "Team" },
              { id: "faq", label: "FAQ" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-blue-600 bg-blue-50 shadow-md"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
