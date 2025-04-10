import React from 'react';

interface SocialBarProps {
  className?: string;
}

const SocialBar: React.FC<SocialBarProps> = ({ className }) => {
  // Return an empty div instead of the social media links
  return (
    <div className={`${className || ''}`}>
      {/* SocialBar removed as requested */}
    </div>
  );
};

export default SocialBar; 