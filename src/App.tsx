import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import TechPlatesGrid from './components/TechPlate';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Loader from './components/Loader';
import MicroProjects from './components/MicroProjects';
import AboutUs from './components/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TechPlateDetail from './pages/TechPlateDetail';
import PreviousManuals from './pages/PreviousManuals';
import DepartmentPage from './pages/DepartmentPage';
import BannerAd from './components/BannerAd';
import SocialBar from './components/SocialBar';
import DirectLink from './components/DirectLink';
import useAnalytics from './hooks/useAnalytics';
import AdBlockDetector from './components/AdBlockDetector';
import NotesDetail from './pages/NotesDetail';

// TechPlateRouteHandler component to route to the right detail page
interface TechPlateRouteHandlerProps {
  sampleData: {
    title: string;
    semester: string;
    subject: string;
    university: string;
    description: string;
    overview: string;
  };
  pythonPwpData: {
    title: string;
    semester: string;
    subject: string;
    university: string;
    description: string;
    overview: string;
  };
  notesData: {
    title: string;
    semester: string;
    subject: string;
    university: string;
    description: string;
    overview: string;
  };
}

const TechPlateRouteHandler: React.FC<TechPlateRouteHandlerProps> = ({ sampleData, pythonPwpData, notesData }) => {
  const { id } = useParams();
  
  // Check if this is a notes page
  const isNote = id?.includes('-notes');
  
  if (isNote) {
    return <NotesDetail notesData={notesData} />;
  }
  
  // For regular tech plates, select the appropriate data
  const techPlateData = id === 'python-pwp' ? pythonPwpData : sampleData;
  
  return <TechPlateDetail {...techPlateData} />;
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  
  // Initialize analytics
  const { trackSearch } = useAnalytics();
  
  // Handle search with analytics tracking
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      trackSearch(query);
    }
  };

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  
  // Load popunder ad on initial app load
  useEffect(() => {
    if (!isLoading) {
      // Skip loading popunder if ad blocker detected
      if ((window as any).adBlockerDetected === true) {
        return;
      }
      
      // Add popunder ad script when app loads
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//solemnbible.com/cc/3d/9d/cc3d9dd2b1b50fc03cdd5cb8c6457f81.js';
      script.async = true;
      document.body.appendChild(script);
      
      // Error handling
      script.onerror = () => {
        if ((window as any).adBlockerDetected === undefined) {
          (window as any).adBlockerDetected = true;
        }
      };
      
      // Clean up script after execution
      setTimeout(() => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      }, 2000);
    }
  }, [isLoading]);

  // Only show banner on home page
  const showBanner = location.pathname === '/';

  const sampleData = {
    title: "OS Notes Semester 4 Engineering",
    semester: "4th Semester",
    subject: "Operating Systems",
    university: "Mumbai University",
    description: "Namaste Students, In this article we provided Operating System Notes for the Engineering 4th Semester under Mumbai University Syllabus. This subject have the Mid difficult level because it contain large theory answers and diagrams of Computer Engineering. In fact why we provided the OS Handwritten Notes, which you can be used instead of long answers for handwrite.",
    overview: "In Operating system subject, you will study the various types of operating systems and why they created and the syllabus calls them in devices and are built in OS. Operating System is a program which is loading in the computer by a boot program which helps the other application programs to communicate with the computer without knowing how to use the computer's hardware. The program is Operating System is to interface that abstracts the underlying hardware of operating hardware and software and acts as an interface for accessing network and file system."
  };

  // Add Python PWP data
  const pythonPwpData = {
    title: "Python Programming With Project (PWP) Practicals",
    semester: "Semester 4",
    subject: "Python Programming With Project (314004)",
    university: "Mumbai University",
    description: "Python Programming With Project (PWP) is a comprehensive subject for computer engineering students in Semester 4. This course covers fundamentals of Python programming, data structures, functions, modules, packages, OOP concepts, GUI programming with Tkinter, data analysis with Pandas, and database connectivity. Complete with 30 practical exercises from basic syntax to advanced applications.",
    overview: ""
  };

  // Sample notes data
  const notesData = {
    title: "Computer Engineering Notes",
    semester: "All Semesters",
    subject: "Various Subjects",
    university: "MSBTE",
    description: "Comprehensive notes for Computer Engineering students following MSBTE curriculum. These notes cover key concepts, explanations, and examples to help students prepare for exams and understand complex topics more easily.",
    overview: "These notes are designed to supplement your textbooks and classroom learning. They focus on important topics that commonly appear in examinations and provide clear explanations with diagrams where needed."
  };

  return (
    <>
      <AdBlockDetector />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 animate-fadeIn">
          <Navigation 
            searchQuery={searchQuery}
            onSearchChange={handleSearch}
          />
          <div className="flex-1 lg:ml-64">
            <div className="flex flex-col min-h-screen">
              {showBanner && <Banner />}
              <main className="flex-1">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
                  {/* Top Banner Ad - Clean and contained */}
                  <div className="w-full flex justify-center mb-6 p-3 rounded-lg bg-gray-50 shadow-sm">
                    <div className="w-full max-w-[728px] h-[90px]">
                      <BannerAd className="w-full h-full" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {/* Main Content - Full width */}
                    <div>
                      {/* Social Bar (moved from sidebar) */}
                      <SocialBar className="mb-6" />
                      
                      <div className="space-y-6 sm:space-y-8">
                        <Routes>
                          <Route path="/" element={<TechPlatesGrid searchQuery={searchQuery} />} />
                          <Route 
                            path="/microprojects/computer-engineering" 
                            element={<MicroProjects searchQuery={searchQuery} />}
                          />
                          <Route path="/about" element={<AboutUs />} />
                          
                          {/* Department-specific diploma routes */}
                          <Route 
                            path="/diploma/computer-engineering" 
                            element={<TechPlatesGrid searchQuery={searchQuery} department="computer-engineering" isDiploma={true} />} 
                          />

                          {/* Notes routes */}
                          <Route 
                            path="/notes/computer-engineering" 
                            element={<TechPlatesGrid searchQuery={searchQuery} department="computer-engineering" isNotes={true} />} 
                          />

                          {/* Department-specific manual routes (keeping for backwards compatibility) */}
                          <Route 
                            path="/manuals/computer-engineering" 
                            element={<TechPlatesGrid searchQuery={searchQuery} department="computer-engineering" isDiploma={false} />} 
                          />

                          {/* Department pages */}
                          <Route 
                            path="/department/computer-engineering" 
                            element={<TechPlatesGrid searchQuery={searchQuery} department="computer-engineering" isDiploma={false} />}
                          />

                          {/* TechPlate Detail Route */}
                          <Route 
                            path="/tech-plate/:id" 
                            element={
                              <TechPlateRouteHandler
                                sampleData={sampleData}
                                pythonPwpData={pythonPwpData}
                                notesData={notesData}
                              />
                            } 
                          />
                          
                          {/* Notes Detail Route */}
                          <Route 
                            path="/notes-detail/:id" 
                            element={
                              <NotesDetail
                                notesData={notesData}
                              />
                            } 
                          />
                          
                          {/* New pages */}
                          <Route path="/contact" element={<ContactUs />} />
                          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                          <Route path="/previous-manuals" element={<PreviousManuals />} />
                        </Routes>
                      </div>
                      
                      {/* Bottom Banner for All Pages (Centered in main content area only) */}
                      <div className="mt-12 mb-8">
                        <div className="flex justify-center">
                          <BannerAd 
                            customKey="bc7ad908b9b26c08f097d12764e1d4be"
                            customWidth={728}
                            customHeight={90}
                            slot="first"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Content (Mobile only) */}
                  <div className="lg:hidden mt-8">
                    <SocialBar className="my-6" />
                  </div>
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;