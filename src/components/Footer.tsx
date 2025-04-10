import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">About Diplearn</h3>
            <p className="text-sm text-gray-600">
              Diplearn provides free educational resources for MSBTE students, including study materials, solved manuals, and microprojects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-pink-600">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-pink-600">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-pink-600">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-pink-600">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Departments</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/diploma/computer-engineering" className="text-sm text-gray-600 hover:text-pink-600">Computer Engineering</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Email: contact@diplearn.in</li>
              <li className="text-sm text-gray-600">Phone: +91 7387182100</li>
              <li className="text-sm text-gray-600">Nashik, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 pt-8 border-t border-gray-200">
          {/* Copyright Text */}
          <div className="text-gray-700 text-sm">
            © {new Date().getFullYear()} Diplearn. All rights reserved.
          </div>

          {/* Social Media Icons - Only Instagram and YouTube */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com/diplearn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@diplearn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 