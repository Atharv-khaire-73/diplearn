import React from 'react';
import useAnalytics from '../hooks/useAnalytics';

interface DirectLinkProps {
  className?: string;
  text?: string;
}

const DirectLink: React.FC<DirectLinkProps> = ({ 
  className, 
  text = "Click here for more resources" 
}) => {
  const { trackEvent } = useAnalytics();
  
  const handleClick = () => {
    // Track click for analytics
    trackEvent('direct_link_click', 'ad_engagement', 'direct_link_ad');
    
    // Open the link in a new tab
    window.open('https://solemnbible.com/wrzibpmdaw?key=0a4c5b2dd01ccdf29dded29829882e5f', '_blank');
  };
  
  return (
    <div className={`my-4 ${className || ''}`}>
      <button
        onClick={handleClick}
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors shadow-md"
      >
        {text}
      </button>
    </div>
  );
};

export default DirectLink; 