import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Star className="h-8 w-8 text-yellow-500" />
              <span className="text-2xl font-bold">Ethiopian Skylight Hotel</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Experience luxury and comfort in the heart of Ethiopia. Our hotel combines traditional Ethiopian hospitality with modern amenities to create unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-500 transition-colors">Home</Link></li>
              <li><Link to="/rooms" className="text-gray-300 hover:text-yellow-500 transition-colors">Rooms & Suites</Link></li>
              <li><Link to="/dining" className="text-gray-300 hover:text-yellow-500 transition-colors">Dining</Link></li>
              <li><Link to="/amenities" className="text-gray-300 hover:text-yellow-500 transition-colors">Amenities</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-yellow-500 transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-yellow-500 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-yellow-500" />
                <span className="text-gray-300">123 Skylight Avenue, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-yellow-500" />
                <span className="text-gray-300">+251 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-yellow-500" />
                <span className="text-gray-300">info@ethiopianskylighthotel.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Ethiopian Skylight Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;