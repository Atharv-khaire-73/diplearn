import React from 'react';
import { Construction } from 'lucide-react';

interface MicroProjectsProps {
  searchQuery: string;
}

const MicroProjects: React.FC<MicroProjectsProps> = ({ searchQuery }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Computer Engineering Microprojects
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <Construction size={64} className="text-yellow-500" />
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Coming Soon!</h2>
          
          <p className="text-gray-600 mb-4">
            We're working hard to bring you a collection of high-quality Computer Engineering microprojects. 
            These projects will help you apply theoretical knowledge and build your portfolio for better career opportunities.
          </p>
          
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-left">
            <p className="text-yellow-800 text-sm">
              <span className="font-medium">What to expect:</span> Our microprojects will include detailed documentation, source code, and demo videos for various subjects including Java Programming, Web Development, Python, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroProjects; 