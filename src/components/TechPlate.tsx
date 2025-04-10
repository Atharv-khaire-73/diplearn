import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface TechPlateProps {
  name: string;
  icon: React.ReactNode;
  backgroundColor: string;
  courseCode: string;
  department: string;
  semester: number;
  subject: string;
  iconBg: string;
  id?: string;
  isNote?: boolean;
}

const TechPlate: React.FC<TechPlateProps> = ({ 
  name, 
  backgroundColor, 
  courseCode, 
  department, 
  semester,
  subject,
  iconBg,
  id,
  isNote = false
}) => {
  const techPlateId = id || name.toLowerCase().replace(/\s+/g, '-');
  const isPythonPwp = techPlateId === 'python-pwp';
  const isAvailable = isPythonPwp || isNote;
  
  const handleClick = (e: React.MouseEvent) => {
    // Show popunder ad when techplate is clicked (only if no ad blocker detected)
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
    
    if (!isAvailable) {
      e.preventDefault();
      alert('This content is coming soon! Currently only Python PWP (314004) is available.');
    }
  };
  
  return (
    <div className="animate-fade-in-up">
      <Link to={isNote ? `/notes-detail/${techPlateId}` : `/tech-plate/${techPlateId}`} onClick={handleClick}>
        <div 
          className={`${backgroundColor} rounded-lg p-3 transition-all duration-300 hover:scale-102 hover:shadow-lg active:scale-98 cursor-pointer flex items-center gap-2 shadow-sm border border-gray-200/80 ${!isAvailable ? 'opacity-75' : ''}`}
        >
          {/* Subject Logo */}
          <div className={`${iconBg} w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
            <span className="text-[11px] font-medium text-white">{subject}</span>
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <h3 className="text-[15px] font-semibold text-gray-900 truncate">
              {courseCode}
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-xs text-gray-700 truncate">{department}</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-700">sem {semester}</span>
              {isNote && (
                <span className="ml-1 text-xs px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded-sm">Notes</span>
              )}
              {!isAvailable && (
                <span className="ml-1 text-xs px-1.5 py-0.5 bg-yellow-100 text-yellow-800 rounded-sm">Coming Soon</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Section Title Component
const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
);

interface TechPlatesGridProps {
  searchQuery: string;
  department?: string;
  isDiploma?: boolean;
  isNotes?: boolean;
}

// Container component to hold all tech plates
const TechPlatesGrid: React.FC<TechPlatesGridProps> = ({ searchQuery, department, isDiploma = false, isNotes = false }) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedScheme, setSelectedScheme] = useState<string>('all');
  const [selectedSemester, setSelectedSemester] = useState<string>('all');

  const techPlates = [
    {
      id: 'python-pwp',
      name: 'Python PWP',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-indigo-600',
      courseCode: '314004',
      subject: 'PWP',
      department: 'CO',
      semester: 4,
      icon: null
    },
    {
      id: 'mobile-app-development',
      name: 'ChatGPT',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-emerald-600',
      courseCode: '22602',
      subject: 'MAD',
      department: 'CO',
      semester: 6,
      icon: null
    },
    {
      id: 'python',
      name: 'Python',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-blue-600',
      courseCode: '22316',
      subject: 'PYT',
      department: 'CO',
      semester: 3,
      icon: null
    },
    {
      id: 'java',
      name: 'Java',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-orange-600',
      courseCode: '22412',
      subject: 'JVA',
      department: 'CO',
      semester: 4,
      icon: null
    },
    {
      id: 'database',
      name: 'Database',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-purple-600',
      courseCode: '22317',
      subject: 'DMS',
      department: 'CO',
      semester: 3,
      icon: null
    },
    {
      id: 'web',
      name: 'Web Development',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-pink-600',
      courseCode: '22412',
      subject: 'WBP',
      department: 'CO',
      semester: 4,
      icon: null
    },
    {
      id: 'operating-systems',
      name: 'Operating Systems',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-cyan-600',
      courseCode: '22316',
      subject: 'OSY',
      department: 'CO',
      semester: 3,
      icon: null
    },
    {
      id: 'data-structures',
      name: 'Data Structures',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-violet-600',
      courseCode: '22317',
      subject: 'DSU',
      department: 'CO',
      semester: 3,
      icon: null
    },
    {
      id: 'software-engineering',
      name: 'Software Engineering',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-rose-600',
      courseCode: '22412',
      subject: 'SEN',
      department: 'CO',
      semester: 4,
      icon: null
    }
  ];

  // Separate array for notes content
  const notesContent = [
    {
      id: 'data-communication-notes',
      name: 'Data Communication',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-green-600',
      courseCode: '22414',
      subject: 'DCO',
      department: 'CO',
      semester: 4,
      icon: null
    },
    {
      id: 'database-management-notes',
      name: 'Database Management',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-purple-600',
      courseCode: '22317',
      subject: 'DMS',
      department: 'CO',
      semester: 3,
      icon: null
    },
    {
      id: 'java-programming-notes',
      name: 'Java Programming',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-orange-600',
      courseCode: '22412',
      subject: 'JPR',
      department: 'CO',
      semester: 4,
      icon: null
    },
    {
      id: 'operating-systems-notes',
      name: 'Operating Systems',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-cyan-600',
      courseCode: '22316',
      subject: 'OSY',
      department: 'CO',
      semester: 3,
      icon: null
    }
  ];

  // Choose the appropriate content based on isNotes prop
  const contentToDisplay = isNotes ? notesContent : techPlates;

  // Get unique departments and semesters for filters
  const departments = Array.from(new Set(contentToDisplay.map(plate => plate.department)));
  
  // Include all semesters 1-6 instead of only those in the techPlates data
  const allSemesters = [1, 2, 3, 4, 5, 6];

  const getDepartmentCode = (departmentPath: string | undefined): string | undefined => {
    if (!departmentPath) return undefined;
    
    if (departmentPath.includes('computer-engineering')) return 'CO';
    
    return undefined;
  };

  const departmentCode = getDepartmentCode(department);
  
  // Generate a title based on selected department and route type
  const getSectionTitle = () => {
    const departmentName = departmentCode === 'CO' ? 'Computer Engineering' : '';
    
    if (isNotes) {
      return departmentName ? `${departmentName} Notes` : 'MSBTE Notes';
    } else if (isDiploma) {
      return departmentName ? `${departmentName} Diploma Courses` : 'MSBTE Diploma Courses';
    } else {
      return departmentName ? `${departmentName} Solved Manuals` : 'MSBTE Solved Manuals';
    }
  };

  // Filter tech plates based on selected filters and search query
  const filteredTechPlates = contentToDisplay.filter(plate => {
    // First filter by URL department if provided
    if (departmentCode && plate.department !== departmentCode) {
      return false;
    }
    
    // Then apply user-selected filters
    const matchesScheme = selectedScheme === 'all'; // In this example, we're not filtering by scheme yet
    const matchesSemester = selectedSemester === 'all' || plate.semester === parseInt(selectedSemester);
    const matchesSearch = searchQuery === '' || 
      plate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plate.courseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plate.subject.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesScheme && matchesSemester && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="space-y-4">
        {/* Scheme Filter - Show on all pages */}
        <div className="mb-4 sm:mb-0">
          <div className="text-sm font-medium text-gray-700 mb-2 px-4 sm:px-2">Scheme:</div>
          <div className="overflow-x-auto -mx-4 sm:mx-0 pb-1">
            <div className="flex gap-2 min-w-min px-4 sm:px-2 py-1">
              <button
                onClick={() => setSelectedScheme('all')}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium border border-gray-300 whitespace-nowrap transition-colors ${
                  selectedScheme === 'all'
                    ? 'bg-gray-800 text-white border-gray-800'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                aria-label="Filter by All Schemes"
              >
                All
              </button>
              {['I', 'K'].map(scheme => (
                <button
                  key={scheme}
                  onClick={() => setSelectedScheme(scheme)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium border border-gray-300 whitespace-nowrap transition-colors ${
                    selectedScheme === scheme
                      ? 'bg-gray-800 text-white border-gray-800'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  aria-label={`Filter by Scheme ${scheme}`}
                >
                  Scheme {scheme}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Semester Filter - Improved mobile experience */}
        <div className="mb-4 sm:mb-0">
          <div className="text-sm font-medium text-gray-700 mb-2 px-4 sm:px-2">Semester:</div>
          <div className="overflow-x-auto -mx-4 sm:mx-0 pb-1">
            <div className="flex gap-2 min-w-min px-4 sm:px-2 py-1">
              <button
                onClick={() => setSelectedSemester('all')}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium border border-gray-300 whitespace-nowrap transition-colors ${
                  selectedSemester === 'all'
                    ? 'bg-gray-800 text-white border-gray-800'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                aria-label="Filter by All Semesters"
              >
                All
              </button>
              {allSemesters.map(sem => (
                <button
                  key={sem}
                  onClick={() => setSelectedSemester(sem.toString())}
                  className={`min-w-[32px] sm:min-w-[40px] px-2 py-1.5 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium border border-gray-300 whitespace-nowrap transition-colors ${
                    selectedSemester === sem.toString()
                      ? 'bg-gray-800 text-white border-gray-800'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  aria-label={`Filter by Semester ${sem}`}
                >
                  <span className="hidden sm:inline">Semester {sem}</span>
                  <span className="sm:hidden">{sem}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="mt-8">
        <SectionTitle title={getSectionTitle()} />
      </div>

      {/* Tech Plates Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {filteredTechPlates.map((plate, index) => (
          <div 
            key={plate.id} 
            className="opacity-0 animate-fade-in-up"
            style={{ 
              animationDelay: `${index * 0.05}s`,
              animationFillMode: 'forwards'
            }}
          >
            <TechPlate {...plate} isNote={isNotes} />
          </div>
        ))}
        {filteredTechPlates.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No results found for the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechPlatesGrid; 