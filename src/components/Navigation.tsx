import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import BannerAd from './BannerAd';

interface NavItem {
  title: string;
  path?: string;
  sublinks?: { title: string; path: string }[];
}

const navItems: NavItem[] = [
  { title: 'Home', path: '/' },
  { 
    title: 'MSBTE Solved Manuals',
    sublinks: [
      { title: 'Computer Engineering', path: '/department/computer-engineering' }
    ]
  },
  {
    title: 'Notes',
    sublinks: [
      { title: 'Computer Engineering', path: '/notes/computer-engineering' }
    ]
  },
  {
    title: 'Microprojects',
    sublinks: [
      { title: 'Computer Engineering', path: '/microprojects/computer-engineering' }
    ]
  },
  { title: 'About Us', path: '/about' },
  { title: 'Contact Us', path: '/contact' }
];

interface NavigationProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ searchQuery, onSearchChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const toggleItem = (title: string) => {
    if (expandedItems.includes(title)) {
      // If this item is already expanded, close it
      setExpandedItems([]);
    } else {
      // If it's not expanded, close all others and open only this one
      setExpandedItems([title]);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:fixed lg:inset-y-0 lg:bg-white lg:border-r lg:border-gray-200 lg:flex-col">
        {/* Logo */}
        <div className="flex items-center h-16 px-6 border-b border-gray-200">
          <Link to="/" className="text-xl font-bold text-gray-900">Diplearn</Link>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-200 focus:border-pink-400 outline-none transition-all text-gray-900 placeholder-gray-500 text-sm"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.title}>
              {item.sublinks ? (
                <div>
                  <button 
                    onClick={() => toggleItem(item.title)}
                    className="w-full flex items-center justify-between px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
                  >
                    <span>{item.title}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transform transition-transform ${
                        expandedItems.includes(item.title) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedItems.includes(item.title) && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.sublinks.map((sublink) => (
                        <Link
                          key={sublink.title}
                          to={sublink.path}
                          className={`block px-4 py-2 text-sm rounded-lg hover:bg-gray-100 ${
                            location.pathname === sublink.path
                              ? 'text-pink-600 bg-pink-50'
                              : 'text-gray-600'
                          }`}
                        >
                          {sublink.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path || '#'}
                  className={`flex items-center px-4 py-2 rounded-lg hover:bg-gray-100 ${
                    location.pathname === item.path
                      ? 'text-pink-600 bg-pink-50'
                      : 'text-gray-700'
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        {/* Bottom Ad Banner */}
        <div className="mt-auto p-2 border-t border-gray-200">
          <div className="flex justify-center p-2">
            <BannerAd 
              customKey="5dc2ce15743f866e2634d2523966780e"
              customWidth={468}
              customHeight={60}
              slot="third"
              className="mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden w-full">
        <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Mobile menu button */}
              <div className="flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-200"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>

              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-lg font-bold text-gray-900">Diplearn</Link>
              </div>

              {/* Search Bar - Full width on mobile when focused */}
              <div className={`flex-1 max-w-2xl mx-4 ${isSearchFocused ? 'absolute left-0 right-0 px-4 bg-white z-50 top-16 border-b border-gray-200 py-2 shadow-sm' : ''}`}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => {
                      // Short delay to allow for clicking search results
                      setTimeout(() => setIsSearchFocused(false), 200);
                    }}
                    placeholder={isSearchFocused ? "Search by course code, subject or department..." : "Search..."}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-200 focus:border-pink-400 outline-none transition-all text-gray-900 placeholder-gray-500 text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                {isSearchFocused && searchQuery.length > 0 && (
                  <div className="absolute bg-white shadow-md rounded-lg mt-1 left-4 right-4 max-h-60 overflow-y-auto z-50">
                    <div className="p-2 text-sm text-gray-500">
                      Searching for "{searchQuery}"...
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Page content padding to prevent overlap with fixed navbar */}
        <div className="pt-16"></div>

        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile menu - Slide from left */}
        <div 
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Mobile menu header */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
            <span className="text-lg font-bold text-gray-900">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-200"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="px-4 py-2 space-y-1 overflow-y-auto max-h-[calc(100vh-4rem)]">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.sublinks ? (
                  <div>
                    <button
                      onClick={() => toggleItem(item.title)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      <span>{item.title}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transform transition-transform ${
                          expandedItems.includes(item.title) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedItems.includes(item.title) && (
                      <div className="pl-4 space-y-1">
                        {item.sublinks.map((sublink) => (
                          <Link
                            key={sublink.title}
                            to={sublink.path}
                            onClick={closeMenu}
                            className={`block px-3 py-2 rounded-md text-sm font-medium hover:text-gray-900 hover:bg-gray-50 ${
                              location.pathname === sublink.path
                                ? 'text-pink-600 bg-pink-50'
                                : 'text-gray-600'
                            }`}
                          >
                            {sublink.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path || '#'}
                    onClick={closeMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium hover:text-gray-900 hover:bg-gray-50 ${
                      location.pathname === item.path
                        ? 'text-pink-600 bg-pink-50'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Ad Banner */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-center">
                <BannerAd 
                  customKey="bc7ad908b9b26c08f097d12764e1d4be"
                  customWidth={250}
                  customHeight={100}
                  slot="first"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;