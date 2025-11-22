import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">Microworx</h3>
            <p className="text-gray-100 text-sm leading-relaxed">
              Your trusted partner for computer sales, service, and IT solutions in Rochester since 1994. 
              We provide expert repair, custom builds, and managed IT services for home and business.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-100 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-100 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-100 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3 text-gray-100">
                <MapPin className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span>20 Allens Creek Rd<br />Rochester, NY 14618</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-100">
                <Phone className="h-5 w-5 text-white flex-shrink-0" />
                <span>(585) 271-0050</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-100">
                <Mail className="h-5 w-5 text-white flex-shrink-0" />
                <span>sales@microworx.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Business Hours</h3>
            <ul className="space-y-1 text-gray-100">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium text-white">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-gray-300 font-medium">Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-gray-300 font-medium">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-gray-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Microworx Direct, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

