
import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Menu', value: 'menu' },
    { label: 'Gallery', value: 'gallery' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <span 
              onClick={() => setActivePage('home')}
              className="text-2xl font-bold text-primary cursor-pointer tracking-tight"
            >
              Fresh & Green <span className="text-orange-500">Dz</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => setActivePage(link.value)}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  activePage === link.value ? 'text-orange-600' : 'text-earth'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => setActivePage('contact')}
              className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition-all shadow-md active:scale-95"
            >
              Book a Table
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-earth hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-2 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => {
                setActivePage(link.value);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                activePage === link.value ? 'bg-orange-50 text-orange-600' : 'text-earth hover:bg-warm'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => {
              setActivePage('contact');
              setIsOpen(false);
            }}
            className="w-full mt-4 bg-primary text-white px-3 py-3 rounded-md text-center font-bold"
          >
            Book a Table
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
