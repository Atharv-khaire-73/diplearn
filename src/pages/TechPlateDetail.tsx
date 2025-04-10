import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BannerAd from '../components/BannerAd';
import SocialBar from '../components/SocialBar';
import DirectLink from '../components/DirectLink';
import useAnalytics from '../hooks/useAnalytics';
import SEO from '../components/SEO';

interface TechPlateDetailProps {
  title: string;
  semester: string;
  subject: string;
  university: string;
  description: string;
  overview: string;
}

interface Practical {
  id: number;
  title: string;
  pdfUrl: string;
}

const TechPlateDetail: React.FC<TechPlateDetailProps> = ({
  title = "Python PWP Practicals",
  semester = "Semester 4",
  subject = "Python Programming With Project (314004)",
  university = "Mumbai University",
  description = "Python Programming With Project (PWP) is a practical-oriented subject for computer engineering students in Semester 4. This course covers fundamentals of Python programming, data structures, functions, modules, packages, and object-oriented programming concepts with hands-on implementation.",
  overview = "",
}) => {
  // Analytics tracking
  const { trackEvent, trackLink } = useAnalytics();
  
  // Python PWP practicals data from the provided spreadsheet
  const practicals: Practical[] = [
    { id: 1, title: "Install Python IDE", pdfUrl: "https://drive.google.com/file/d/1JrLeRoWiPtsxGTuzkvP3uKcZhKafbTyH/preview" },
    { id: 2, title: "Write a simple Python program to display a message on screen", pdfUrl: "https://drive.google.com/file/d/1teFusK5ggZGQUoAhFEk9ySPEg5ZmAU3W/preview" },
    { id: 3, title: "Write a simple Python program using operators (Arithmetic, Logical, Bitwise)", pdfUrl: "https://drive.google.com/file/d/101kr8y32qsppD5uuscOa1lVIXnDiqieP/preview" },
    { id: 4, title: "Write a simple Python program to demonstrate the use of conditionals", pdfUrl: "https://drive.google.com/file/d/1wNp5pTmNSwcnmZCFF_icfsvKeUYJQ-IJ/preview" },
    { id: 5, title: "Write a Python program to demonstrate looping statements (while, for, nested loops)", pdfUrl: "https://drive.google.com/file/d/12kIUwEAywUdIuWZNr_-3d4_kHjGraOAh/preview" },
    { id: 6, title: "Write a Python program to demonstrate loop control statements (continue, pass, break)", pdfUrl: "https://drive.google.com/file/d/1XzCFMmrv5IfoxXTBCRja9Dg1tPirCjaC/preview" },
    { id: 7, title: "Write a Python program to perform operations on Lists (Create, Access, Update, Delete)", pdfUrl: "https://drive.google.com/file/d/1NcyRKaNikv-owwPT0nUGy5PqqF9ZYPoO/preview" },
    { id: 8, title: "Write a Python program to use built-in list functions (len, max, append, count, extend, pop, etc.)", pdfUrl: "https://drive.google.com/file/d/1kJi8J9kDn3cS9T8yBS7e2P223TqBcI6c/preview" },
    { id: 9, title: "Write a Python program to perform operations on Tuples (Create, Access, Delete, Convert to/from List)", pdfUrl: "https://drive.google.com/file/d/1oxMu27K4pBOdeMupo0K9t6jLRVZ4984V/preview" },
    { id: 10, title: "Write a Python program to perform operations on Sets (Create, Access, Update, Delete)", pdfUrl: "https://drive.google.com/file/d/1OvYv568LeXVgxJUfVizIvJ7Hw3C-0-29/preview" },
    { id: 11, title: "Write a Python program to perform Set operations (Union, Intersection, Difference, Symmetric Difference)", pdfUrl: "https://drive.google.com/file/d/1xVKHLdtIEJRqBxLm9jXXQBj5dTG0AmlP/preview" },
    { id: 12, title: "Write a Python program to perform operations on Dictionaries (Create, Access, Update, Delete, Loop, Convert from List)", pdfUrl: "https://drive.google.com/file/d/1ytKmdDC4mX8AD9lgh4PVGVYGBSoaCu-Y/preview" },
    { id: 13, title: "Write a user-defined function (without argument, with argument, returning value)", pdfUrl: "https://drive.google.com/file/d/1Dlt3fAr1jWlspjZ-yuviHn9Mh9LLJmBb/preview" },
    { id: 14, title: "Write a user-defined function (positional, keyword, default, variable-length arguments)", pdfUrl: "https://drive.google.com/file/d/1vxoqepgkhkVzwIBYDRQNIZRYd6GvqaBV/preview" },
    { id: 15, title: "Write a Python program to demonstrate advanced functions (lambda, map, reduce)", pdfUrl: "https://drive.google.com/file/d/1pctQgV1BHZSoHF6GYeGAHGNdjuCOkz4S/preview" },
    { id: 16, title: "Write a Python program to create and use a user-defined module", pdfUrl: "https://drive.google.com/file/d/16Gua095tg8wlvyV6jKsgJzqYLjtCO24s/preview" },
    { id: 17, title: "Write a Python program to demonstrate modules (math, random, os)", pdfUrl: "https://drive.google.com/file/d/1aO1O7mnHw7fWHh6x0m42duRsY3ssEzBt/preview" },
    { id: 18, title: "Write a Python program to create and use a user-defined package", pdfUrl: "https://drive.google.com/file/d/1sPl1C826aCykyWFQK20Ix9_WS3w4BnGj/preview" },
    { id: 19, title: "Write a Python program using numpy (matrix operations) and matplotlib (graphical data representation)", pdfUrl: "https://drive.google.com/file/d/18W7dapjtGE9SaPhkXs5GmlHq2crrrPZZ/preview" },
    { id: 20, title: "Develop a Python program to demonstrate OOP (Class, Objects, Methods)", pdfUrl: "https://drive.google.com/file/d/1i2wSkbvHJOMGIU3pMbA0_9eAIT9cr81o/preview" },
    { id: 21, title: "Demonstrate the use of Constructors in Python", pdfUrl: "https://drive.google.com/file/d/1xhx9ruGlIQuTZU30kO2e2DjObA27dcxu/preview" },
    { id: 22, title: "Method Overloading and Overriding in Python", pdfUrl: "https://drive.google.com/file/d/1avLOzYYhPjGcexULBySP89-dXcmOe3Ff/preview" },
    { id: 23, title: "Data Hiding in Python", pdfUrl: "https://drive.google.com/file/d/1VrRxtKAbKcIIi5ebMA5HXX8BKqTMUN73/preview" },
    { id: 24, title: "Inheritance in Python", pdfUrl: "https://drive.google.com/file/d/1Eif3WCS5F1mqSkFKfIUcS3sTw7Bh09w8/preview" },
    { id: 25, title: "Perform operations using the Pandas package", pdfUrl: "https://drive.google.com/file/d/1FRVHXv5JUewtfOClnaXYru625F56JAmi/preview" },
    { id: 26, title: "Load a CSV file into a Pandas DataFrame and perform operations", pdfUrl: "https://drive.google.com/file/d/1CX1Fxo3Fb6y7W7DgAMUdY88tv1HEvMpn/preview" },
    { id: 27, title: "Create a GUI window using Tkinter", pdfUrl: "https://drive.google.com/file/d/19GPol08BsD-p9q1aRjr854EnVNeA5kWS/preview" },
    { id: 28, title: "Add Labels and Buttons to a Tkinter Window", pdfUrl: "https://drive.google.com/file/d/1eG-kiEqGGWEJr5U2PmWZAgC-Ts4YVOjq/preview" },
    { id: 29, title: "Create a connection between a database and Python", pdfUrl: "https://drive.google.com/file/d/1OT231SReuYXPezrAQASuwZIirXfK8P3e/preview" },
    { id: 30, title: "Select records from a database table and display the result", pdfUrl: "https://drive.google.com/file/d/1jUcMI2fZpdG45P1oO0X-fQN2H_nLvYxP/preview" }
  ];

  // State to track selected practical
  const [selectedPractical, setSelectedPractical] = useState<Practical>(practicals[0]);
  
  // State to toggle mobile view between PDF and list
  const [showPdfOnMobile, setShowPdfOnMobile] = useState(false);

  // State for PDF container height
  const [pdfHeight, setPdfHeight] = useState('842px'); // A4 page height
  
  // State to track if popunder already shown for this session
  const [popunderShown, setPopunderShown] = useState(false);
  
  // Update PDF height based on viewport size
  useEffect(() => {
    const updatePdfSize = () => {
      // Calculate height for ideal A4 ratio (1:1.414) with some padding
      const isLargeScreen = window.innerWidth >= 1024;
      const isMediumScreen = window.innerWidth >= 640 && window.innerWidth < 1024;
      
      if (isLargeScreen) {
        // On desktop, maintain A4 ratio with fixed height
        setPdfHeight('842px'); // Standard A4 height
      } else if (isMediumScreen) {
        // Medium screens (tablets)
        setPdfHeight('90vh');
      } else {
        // Small screens (phones)
        setPdfHeight(showPdfOnMobile ? '80vh' : '70vh');
      }
    };

    updatePdfSize();
    window.addEventListener('resize', updatePdfSize);
    return () => window.removeEventListener('resize', updatePdfSize);
  }, [showPdfOnMobile]);
  
  // Load popunder ad on initial page load
  useEffect(() => {
    if (!popunderShown) {
      // Skip loading popunder if ad blocker detected
      if ((window as any).adBlockerDetected === true) {
        setPopunderShown(true);
        return;
      }
      
      // Load popunder ad script when component mounts
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//solemnbible.com/cc/3d/9d/cc3d9dd2b1b50fc03cdd5cb8c6457f81.js';
      script.async = true;
      
      // Add error handling
      script.onerror = () => {
        if ((window as any).adBlockerDetected === undefined) {
          (window as any).adBlockerDetected = true;
        }
      };
      
      document.body.appendChild(script);
      
      setPopunderShown(true);
      
      return () => {
        // Clean up script when component unmounts
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [popunderShown]);
  
  // Tracking when PDF is viewed (iframe loaded)
  const handlePdfLoad = () => {
    trackEvent('view_practical_pdf', 'engagement', `${subject} - Practical ${selectedPractical.id}`);
  };
  
  // Track sharing functionality
  const handleShare = () => {
    trackEvent('share_material', 'social', `${subject} - ${semester}`);
    
    // Simple share functionality
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out these ${subject} notes for ${semester}`,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Handle practical selection (different behavior on mobile)
  const handlePracticalSelect = (practical: Practical) => {
    setSelectedPractical(practical);
    
    // Show popunder ad when user selects a practical (if no ad blocker)
    if (!(window as any).adBlockerDetected) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//solemnbible.com/cc/3d/9d/cc3d9dd2b1b50fc03cdd5cb8c6457f81.js';
      script.async = true;
      
      // Add error handling
      script.onerror = () => {
        if ((window as any).adBlockerDetected === undefined) {
          (window as any).adBlockerDetected = true;
        }
      };
      
      document.body.appendChild(script);
      
      // Remove script after execution
      setTimeout(() => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      }, 2000);
    }
    
    // On mobile, switch to PDF view when a practical is selected
    if (window.innerWidth < 1024) {
      setShowPdfOnMobile(true);
    }
  };

  // Create SEO metadata
  const seoTitle = `${subject} - ${semester} ${university} Study Material | Diplearn`;
  const seoDescription = `${description.substring(0, 160)}...`;
  const keywords = `${subject}, ${semester}, ${university}, MSBTE, study material, notes, solved manual, engineering, computer-science, lab manual, I Scheme, K Scheme`;
  const canonicalUrl = `https://diplearn.in/subject/python-pwp`;
  
  // Enhanced schema for tech plate detail page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": title,
    "description": description,
    "educationalLevel": semester,
    "educationalUse": "Study Material",
    "teaches": subject,
    "url": canonicalUrl,
    "provider": {
      "@type": "Organization",
      "name": "Diplearn",
      "url": "https://diplearn.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://diplearn.in/logo.png"
      },
      "sameAs": [
        "https://www.instagram.com/diplearn/",
        "https://youtube.com/@diplearn"
      ]
    },
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "Engineering Students"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Python Programming",
        "description": "Python programming language fundamentals and advanced concepts"
      },
      {
        "@type": "Thing",
        "name": "MSBTE",
        "description": "Maharashtra State Board of Technical Education curriculum"
      }
    ],
    "hasPart": practicals.map(practical => ({
      "@type": "LearningResource",
      "name": practical.title,
      "learningResourceType": "Practical Assignment",
      "url": practical.pdfUrl
    })),
    "isAccessibleForFree": true,
    "inLanguage": "en-IN",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  return (
    <>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogType="article"
        ogImage={`https://diplearn.in/og-images/${subject.toLowerCase().replace(/\s+/g, '-')}.png`}
        ogImageAlt={`${subject} study material thumbnail`}
        schemaData={schemaData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
          <Link to="/" className="hover:text-blue-600">Homepage</Link>
          <span className="mx-2">•</span>
          <span>Python PWP</span>
          <span className="mx-2">•</span>
          <span>Practicals</span>
          <button 
            className="ml-auto px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            onClick={handleShare}
          >
            Share
          </button>
        </nav>

        {/* Main Title - More responsive on small screens */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Python Programming With Project (314004) | {semester} | CO
        </h1>
        
        {/* Ad below title */}
        <BannerAd className="mb-4 sm:mb-6" />
        
        {/* Social Bar */}
        <SocialBar className="my-4" />

        {/* Mobile Toggle Buttons */}
        <div className="flex lg:hidden justify-center space-x-4 mb-4">
          <button
            onClick={() => setShowPdfOnMobile(false)}
            className={`px-4 py-2 rounded-md ${!showPdfOnMobile 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700'}`}
          >
            Practicals List
          </button>
          <button
            onClick={() => setShowPdfOnMobile(true)}
            className={`px-4 py-2 rounded-md ${showPdfOnMobile 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700'}`}
          >
            PDF Preview
          </button>
        </div>

        {/* Main Content Grid - with mobile optimization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 mt-4 lg:mt-8">
          {/* Left Column - PDF Preview (hidden on mobile when showing list) */}
          <div className={`lg:col-span-6 ${!showPdfOnMobile && 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              {/* PDF Preview Header */}
              <div className="bg-gray-50 border-b border-gray-200 p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 truncate max-w-[80%]">
                    Practical {selectedPractical.id}: {selectedPractical.title}
                  </span>
                  <span className="text-xs text-gray-500">PDF</span>
                </div>
              </div>
              
              {/* Back button on mobile */}
              {showPdfOnMobile && (
                <button 
                  onClick={() => setShowPdfOnMobile(false)}
                  className="lg:hidden flex items-center text-blue-600 p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to list
                </button>
              )}
              
              {/* PDF Viewer - sized to display a full page */}
              <div className="w-full bg-gray-100" style={{ height: pdfHeight }}>
                <iframe
                  src={selectedPractical.pdfUrl}
                  className="w-full h-full border-0"
                  allow="autoplay"
                  allowFullScreen
                  onLoad={handlePdfLoad}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column - Practicals List (hidden on mobile when showing PDF) */}
          <div className={`lg:col-span-6 ${showPdfOnMobile && 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">Practicals List</h3>
                <div className="text-sm text-gray-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="hidden sm:inline">Scroll to view all</span>
                  <span className="sm:hidden">Scroll</span>
                </div>
              </div>
              <div 
                className="grid grid-cols-1 gap-3 max-h-[400px] md:max-h-[800px] overflow-y-auto pr-1 touch-scroll custom-scrollbar p-3"
                style={{ 
                  willChange: 'scroll-position', // Optimize for scrolling
                  padding: '8px' // Ensures the scrollable area is active
                }}
              >
                {practicals.map((practical, index) => (
                  <React.Fragment key={practical.id}>
                    <div 
                      className={`${selectedPractical.id === practical.id 
                        ? 'bg-blue-100 border-l-4 border-blue-500' 
                        : 'bg-gray-100 hover:bg-gray-200'} 
                        transition-colors rounded-md p-3 md:p-4 cursor-pointer flex items-center`}
                      onClick={() => handlePracticalSelect(practical)}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handlePracticalSelect(practical);
                          e.preventDefault();
                        }
                      }}
                    >
                      <div className="flex-shrink-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        {practical.id}
                      </div>
                      <h3 className="text-sm sm:text-base font-medium text-gray-800 line-clamp-2">{practical.title}</h3>
                    </div>
                    
                    {/* Insert banner ad after every 5 practicals */}
                    {practical.id % 5 === 0 && (
                      <div className="my-3 p-2 bg-gray-50 rounded-lg">
                        <BannerAd 
                          customKey="5dc2ce15743f866e2634d2523966780e"
                          customHeight={60}
                          customWidth={468}
                          slot="second"
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Banner Ad (Middle) */}
        <BannerAd className="my-6" />
        
        {/* Description Section - responsive padding and margins */}
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm my-6 sm:my-8">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                {description}
              </p>
          <div className="mt-3 p-3 sm:p-4 bg-blue-50 rounded-lg">
            <p className="text-xs sm:text-sm text-blue-800">
                  We provide you the genuine study material which is made by our subject experts specifically,
                  where we have subject experts who made this possible of any study material of simplicity.
                </p>
              </div>
            </div>

        {/* Banner Ad (Above Social Bar) */}
        <BannerAd className="mb-6" slot="second" />
        
        {/* Social Bar (Bottom) */}
        <SocialBar className="my-6" />
        
        {/* Banner Ad (Bottom) */}
        <BannerAd className="mt-6 sm:mt-10" />
      </div>
    </>
  );
};

export default TechPlateDetail; 