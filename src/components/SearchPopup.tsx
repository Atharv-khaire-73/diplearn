import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
  initialQuery?: string;
}

const SearchPopup: React.FC<SearchPopupProps> = ({ isOpen, onClose, onSearch, initialQuery = '' }) => {
  const [searchInput, setSearchInput] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Focus the input field when the popup opens
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
      onClose();
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label="Close search"
        >
          <X size={24} />
        </button>
        
        <div className="p-6 pb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Diplearn!</h2>
            <p className="text-gray-600">What computer engineering topic are you interested in today?</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
                  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none
                  shadow-sm text-gray-900 placeholder-gray-400"
                placeholder="Try Python, Java, Database..."
              />
              {searchInput && (
                <button
                  type="button" 
                  onClick={() => setSearchInput('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 mr-2 self-center">Popular topics:</span>
                {['Python', 'Java', 'Database', 'Semester 4', 'Web Development'].map((term) => (
                  <button 
                    key={term}
                    type="button" 
                    onClick={() => {
                      setSearchInput(term);
                      setTimeout(() => handleSubmit({ preventDefault: () => {} } as React.FormEvent), 100);
                    }}
                    className="px-3 py-1.5 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end mt-8">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm mr-2
                  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Maybe Later
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 border border-transparent rounded-md shadow-sm
                  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup; 