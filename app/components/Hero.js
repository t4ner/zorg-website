"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-indigo-100/40 to-purple-100/40"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/30 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-indigo-200/30 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-pink-200/30 rounded-full animate-float animation-delay-1500"></div>
          <div className="absolute bottom-1/3 right-10 w-28 h-28 bg-green-200/30 rounded-full animate-float animation-delay-500"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Professionele Zorg
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse-glow">
              Dichtbij Huis
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Wij bieden hoogwaardige thuiszorg en ondersteuning voor u en uw
            dierbaren. Onze ervaren zorgverleners staan 24/7 voor u klaar met
            persoonlijke aandacht en professionele zorg.
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1">
            <span className="relative z-10">Gratis Consultatie</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
          <button className="group relative overflow-hidden border-2 border-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-border text-blue-600 px-10 py-5 rounded-full text-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1">
            <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
              Meer Informatie
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
