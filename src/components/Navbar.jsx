import { Link } from 'react-router-dom';
import { Menu, X, Computer, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <img src={logo} alt="Microworx" className="h-10 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-900 hover:text-primary font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-gray-900 hover:text-primary font-medium transition-colors">Services</Link>
            <Link to="/products" className="text-gray-900 hover:text-primary font-medium transition-colors">Products</Link>
            <Link to="/about" className="text-gray-900 hover:text-primary font-medium transition-colors">About Us</Link>
            <Link to="/contact" className="bg-primary text-white px-5 py-2 rounded-md hover:bg-secondary transition-colors font-medium">
              Contact Us
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-primary font-bold hover:bg-brand-gray-light" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

