import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, FileText, BookOpen, Info } from 'lucide-react';

interface TechPlateDetailProps {
  name: string;
  courseCode: string;
  department: string;
  semester: number;
  subject: string;
  backgroundColor: string;
  iconBg: string;
  scheme?: string;
}

const TechPlateDetail: React.FC<TechPlateDetailProps> = ({
  name,
  courseCode,
  department,
  semester,
  subject,
  backgroundColor,
  iconBg,
  scheme = "G Scheme"
}) => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
      {/* Back Button */}
      <button 
        onClick={() => window.history.back()}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-4 sm:mb-6 text-sm sm:text-base"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        Back
      </button>

      {/* Subject Header */}
      <div className={`${backgroundColor} rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-sm border border-gray-200`}>
        <div className="flex items-start sm:items-center gap-3 sm:gap-4">
          <div className={`${iconBg} w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
            <span className="text-xs sm:text-sm font-medium text-white">{subject}</span>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{name}</h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-600">
              <span>Course Code: {courseCode}</span>
              <span className="hidden sm:inline">•</span>
              <span>Department: {department}</span>
              <span className="hidden sm:inline">•</span>
              <span>Semester: {semester}</span>
              <span className="hidden sm:inline">•</span>
              <span>Scheme: {scheme}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Overview */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
          Subject Overview
        </h2>
        <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {name} is a fundamental course that covers essential concepts and principles in the field. 
            This course provides students with a comprehensive understanding of core topics and their practical applications.
            Through theoretical knowledge and practical examples, students will develop the necessary skills to apply these concepts in real-world scenarios.
          </p>
        </div>
      </section>

      {/* PDF Preview */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
          <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
          PDF Preview
        </h2>
        <div className="bg-white rounded-lg p-3 sm:p-6 border border-gray-200">
          <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://drive.google.com/file/d/1bxcZLCHs6ZprUTbFkl5mwZkPJd8KmTrp/preview"
              width="100%"
              height="100%"
              allow="autoplay"
              className="border-0"
            />
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="mb-6 sm:mb-8">
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <Info className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-pink-900 mb-2">Important Note</h3>
              <p className="text-sm sm:text-base text-pink-800">
                This is a non-downloadable resource. We do not provide any downloading options in the article. 
                Please use our preview option which is attached below in PDF format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">How to Use</h2>
        <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3">For PDF Review</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
            Use Google Drive PDF Viewer (Fastest External Method)
          </p>
          <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-gray-600">
              Demo PDF Link: <br />
              <a 
                href="https://drive.google.com/file/d/1bxcZLCHs6ZprUTbFkl5mwZkPJd8KmTrp/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 break-all"
              >
                https://drive.google.com/file/d/1bxcZLCHs6ZprUTbFkl5mwZkPJd8KmTrp/view?usp=drive_link
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechPlateDetail; 