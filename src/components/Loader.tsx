import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-pink-200 rounded-full animate-spin"></div>
        {/* Inner ring */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-pink-500 rounded-full animate-ping opacity-75"></div>
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-pink-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader; 