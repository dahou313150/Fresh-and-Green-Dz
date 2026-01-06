
import React from 'react';
import { Page } from '../types';

interface HeroProps {
  onCtaClick: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070" 
          alt="Appetizing food background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-orange-500/90 text-white text-sm font-bold tracking-widest uppercase">
            EST. 2024
          </span>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
            Nourishing Your <br />
            <span className="text-orange-300">Body & Soul</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed font-light">
            Experience the vibrant flavors of locally sourced, organic ingredients prepared with passion. 
            Fresh and Green Dz brings high-quality, sustainable dining to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button 
              onClick={() => onCtaClick('menu')}
              className="bg-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-green-800 transition-all shadow-xl active:scale-95"
            >
              View Our Menu
            </button>
            <button 
              onClick={() => onCtaClick('about')}
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-all shadow-xl active:scale-95"
            >
              Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
