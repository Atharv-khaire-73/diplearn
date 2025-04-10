import React, { useEffect, useState } from 'react';

const AdBlockDetector: React.FC = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);
  const [checkComplete, setCheckComplete] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  
  useEffect(() => {
    // Check if device is mobile or tablet
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /iphone|ipod|android|blackberry|opera mini|iemobile|mobile/i.test(userAgent);
      const isTablet = /ipad|tablet|playbook|silk/i.test(userAgent) || 
                      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /macintosh/i.test(userAgent));
      
      // Alternative check using screen size (tablet is typically <= 1024px width)
      const isTabletBySize = window.innerWidth <= 1024 && window.innerWidth > 640;
      
      setIsMobileOrTablet(isMobile || isTablet || isTabletBySize);
    };
    
    checkDevice();
    
    // Add resize listener for responsive changes
    window.addEventListener('resize', checkDevice);
    
    // Method 1: Test if a bait element gets blocked
    const detectWithBaitElement = () => {
      // Skip detection for mobile/tablet
      if (isMobileOrTablet) {
        return;
      }
      
      const bait = document.createElement('div');
      bait.className = 'ad-banner ad-banner-top adsbox';
      bait.innerHTML = '&nbsp;';
      bait.style.height = '1px';
      bait.style.position = 'absolute';
      bait.style.left = '-10000px';
      bait.setAttribute('data-ad-status', 'not-blocked');
      document.body.appendChild(bait);
      
      // Check after a short delay if the bait element was altered
      setTimeout(() => {
        const isBlocked = bait.offsetHeight === 0 ||
                          bait.getAttribute('data-ad-status') === 'blocked' ||
                          !bait.offsetHeight ||
                          !bait.clientHeight || 
                          window.getComputedStyle(bait).display === 'none';
        
        if (isBlocked) {
          setAdBlockDetected(true);
          (window as any).adBlockerDetected = true;
        }
        
        // Clean up
        if (document.body.contains(bait)) {
          document.body.removeChild(bait);
        }
      }, 100);
    };
    
    // Method 2: Load our bait script and see if it loads
    const detectWithBaitScript = () => {
      // Skip detection for mobile/tablet
      if (isMobileOrTablet) {
        setCheckComplete(true);
        return;
      }
      
      try {
        // Check if the adBlockerTest property exists after a delay
        setTimeout(() => {
          if (typeof (window as any).adBlockerTest === 'undefined' || 
              !(window as any).adBlockerTest.loaded) {
            setAdBlockDetected(true);
            (window as any).adBlockerDetected = true;
          }
          setCheckComplete(true);
        }, 500);
      } catch (error) {
        setAdBlockDetected(true);
        (window as any).adBlockerDetected = true;
        setCheckComplete(true);
      }
    };
    
    // Method 3: Attempt to load an actual ad script and see if it fails
    const detectWithAdScript = () => {
      // Skip detection for mobile/tablet
      if (isMobileOrTablet) {
        setCheckComplete(true);
        return;
      }
      
      const adScript = document.createElement('script');
      adScript.src = '//solemnbible.com/5dc2ce15743f866e2634d2523966780e/invoke.js';
      adScript.async = true;
      adScript.onerror = () => {
        setAdBlockDetected(true);
        (window as any).adBlockerDetected = true;
        setCheckComplete(true);
      };
      adScript.onload = () => {
        setCheckComplete(true);
      };
      document.body.appendChild(adScript);
      
      // Set a timeout in case the event handlers don't fire
      setTimeout(() => {
        setCheckComplete(true);
        if (document.body.contains(adScript)) {
          document.body.removeChild(adScript);
        }
      }, 2000);
    };
    
    // Run all detection methods
    detectWithBaitElement();
    detectWithBaitScript();
    detectWithAdScript();
    
    // Create a fake ad-related element as bait
    const fakeAd = document.createElement('div');
    fakeAd.innerHTML = '&nbsp;';
    fakeAd.className = 'adsbygoogle';
    document.body.appendChild(fakeAd);
    
    // Check if fakeAd got hidden by ad blocker
    setTimeout(() => {
      if (!isMobileOrTablet && window.getComputedStyle(fakeAd).display === 'none') {
        setAdBlockDetected(true);
      }
      if (document.body.contains(fakeAd)) {
        document.body.removeChild(fakeAd);
      }
    }, 100);
    
    // Load the bait script
    const baitScript = document.createElement('script');
    baitScript.src = '/ad-banner.js';
    document.head.appendChild(baitScript);
    
    return () => {
      // Clean up
      if (document.head.contains(baitScript)) {
        document.head.removeChild(baitScript);
      }
      window.removeEventListener('resize', checkDevice);
    };
  }, [isMobileOrTablet]);
  
  // Only show the message after checks are complete and an ad blocker was detected
  // Also don't show on mobile or tablet
  if (!checkComplete || !adBlockDetected || isMobileOrTablet) {
    return null;
  }
  
  // Improved responsive mobile-friendly UI
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center text-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto my-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10 text-red-500 mx-auto mb-3" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
          />
        </svg>
        <h2 className="text-lg sm:text-xl font-bold mb-2">Ad Blocker Detected</h2>
        <p className="mb-3 text-gray-700 text-sm sm:text-base">
          Please disable your ad blocker to continue.
        </p>
        
        <div className="mb-3 text-left bg-gray-50 p-2 sm:p-3 rounded-md">
          <h3 className="font-medium text-gray-800 mb-1 text-sm">How to disable:</h3>
          <ul className="text-xs sm:text-sm text-gray-600 list-disc pl-4 space-y-1">
            <li>Click the ad blocker icon in your browser</li>
            <li>Select "Disable" or "Turn off for this site"</li>
            <li>Refresh the page</li>
          </ul>
        </div>
        
        <button 
          onClick={() => window.location.reload()}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm sm:text-base"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default AdBlockDetector; 