import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const { data: site } = useSiteData();
  const { companyName, contact } = site.settings;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/90 sticky top-0 z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl md:text-2xl text-primary">{companyName}</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
            <Link to="/servicos" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Serviços</Link>
            <Link to="/sobre" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Quem Somos</Link>
            <Link to="/contato" className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-primary-dark hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg">
              <Phone size={16} />
              {contact.phone}
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">Home</Link>
            <Link to="/servicos" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">Serviços</Link>
            <Link to="/sobre" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">Quem Somos</Link>
            <Link to="/contato" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-2 rounded-md text-base font-bold text-primary hover:bg-gray-50">
              Agendar: {contact.phone}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;