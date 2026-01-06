
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AIRecommender from './components/AIRecommender';
import Footer from './components/Footer';
import { Page } from './types';
import { GALLERY_IMAGES } from './constants';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('home');

  // Handle simple routing via state
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero onCtaClick={setActivePage} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-100px] relative z-20">
              <AIRecommender />
            </div>
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2070" 
                      alt="Healthy bowl" 
                      className="rounded-3xl shadow-2xl"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <h2 className="text-4xl font-bold mb-6 text-earth">Simply Fresh. <br />Decidedly Green.</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      At Fresh and Green Dz, we believe that food should not only taste incredible but should nourish your body and respect the planet. We partner with local Algerian farmers to bring seasonal, pesticide-free produce directly to your plate.
                    </p>
                    <ul className="space-y-4 mb-10">
                      {[
                        '100% Organic & Local Ingredients',
                        'Artisanal Sourdough & Pastries',
                        'Vegan & Keto Friendly Options',
                        'Sustainable Zero-Waste Kitchen'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 font-medium text-earth">
                          <span className="w-6 h-6 rounded-full bg-green-100 text-primary flex items-center justify-center text-xs">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => setActivePage('about')}
                      className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-orange-500 hover:border-orange-500 transition-all"
                    >
                      Learn more about our mission
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <MenuSection />
          </>
        );

      case 'about':
        return (
          <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <h1 className="text-5xl font-bold text-earth mb-6">Our Story</h1>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                  Founded in 2024, our mission is to redefine healthy dining in Algeria.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <div>
                  <h3 className="text-3xl font-bold mb-6">The Green Revolution</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Fresh and Green Dz started as a small farmer's market stall. Today, we're a thriving community space where food enthusiasts gather to enjoy creative, plant-forward cuisine that doesn't compromise on flavor.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our chef, Sarah Benziane, spent years traveling and learning Mediterranean culinary traditions, bringing back a philosophy of "Simplicity is the ultimate sophistication."
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://picsum.photos/seed/chef1/400/500" alt="Chef Sarah" className="rounded-2xl shadow-lg mt-8" />
                  <img src="https://picsum.photos/seed/kitchen1/400/500" alt="Kitchen" className="rounded-2xl shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'menu':
        return <div className="pt-24"><MenuSection /></div>;

      case 'gallery':
        return (
          <div className="pt-32 pb-24 bg-warm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-earth mb-6">Gallery</h1>
                <p className="text-gray-500">A visual feast of our culinary creations and atmosphere.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {GALLERY_IMAGES.map((img) => (
                  <div key={img.id} className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer">
                    <img 
                      src={img.url} 
                      alt={img.alt} 
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <p className="text-white font-bold text-xl">{img.caption}</p>
                      <p className="text-orange-300 text-sm">{img.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-earth mb-6">Contact Us</h1>
                <p className="text-gray-500">We'd love to hear from you or see you at our table.</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Full Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Subject</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                        <option>General Inquiry</option>
                        <option>Table Reservation</option>
                        <option>Catering Request</option>
                        <option>Feedback</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Message</label>
                      <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Tell us how we can help..."></textarea>
                    </div>
                    <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 shadow-lg active:scale-95 transition-all">
                      Send Message
                    </button>
                  </form>
                </div>
                
                <div className="flex flex-col gap-8">
                  <div className="bg-orange-500 text-white p-10 rounded-3xl shadow-xl">
                    <h3 className="text-2xl font-bold mb-6">Info & Hours</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-white/20 rounded-lg">📍</div>
                        <div>
                          <p className="font-bold">Location</p>
                          <p className="text-orange-100">123 Garden Avenue, Algiers, Algeria</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-white/20 rounded-lg">📞</div>
                        <div>
                          <p className="font-bold">Phone</p>
                          <p className="text-orange-100">+213 (0) 555 123 456</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-white/20 rounded-lg">⏰</div>
                        <div>
                          <p className="font-bold">Operating Hours</p>
                          <p className="text-orange-100">Mon - Fri: 9:00 AM - 10:00 PM</p>
                          <p className="text-orange-100">Sat - Sun: 8:00 AM - 11:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-gray-200 rounded-3xl overflow-hidden shadow-inner relative min-h-[300px]">
                    {/* Placeholder for Map */}
                    <img src="https://picsum.photos/seed/map/800/600" className="w-full h-full object-cover grayscale opacity-50" alt="Map Location" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white p-4 rounded-2xl shadow-2xl flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary rounded-full mb-2 flex items-center justify-center text-white">📍</div>
                        <span className="font-bold text-earth">We are here!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
