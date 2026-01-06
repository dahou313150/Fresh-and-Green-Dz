
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Fresh & Green <span className="text-orange-500">Dz</span></h3>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Bringing you the finest selection of organic, farm-fresh ingredients crafted into culinary masterpieces. Healthy eating has never tasted so good.
            </p>
            <div className="flex space-x-4">
              {/* Social icons placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">IG</div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">FB</div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">TW</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-orange-300 transition-colors">Our Menu</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Reservations</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Order Online</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Catering</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li>123 Garden Avenue, Algiers</li>
              <li>+213 (0) 555 123 456</li>
              <li>hello@freshgreen.dz</li>
              <li className="pt-2 text-orange-400 font-semibold">Open: 9 AM - 10 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Fresh and Green Dz. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
