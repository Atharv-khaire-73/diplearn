import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, FileText, BookOpen, Info } from 'lucide-react';
import SEO from '../components/SEO';

interface Practical {
  id: number;
  title: string;
  pdfUrl: string;
}

interface NotesDetailProps {
  notesData: {
    title: string;
    semester: string;
    subject: string;
    university: string;
    description: string;
    overview: string;
  };
}

const NotesDetail: React.FC<NotesDetailProps> = ({ notesData }) => {
  const { id } = useParams<{ id: string }>();
  const { university } = notesData;
  
  // Notes data based on the id
  const getNotesData = () => {
    // Extract subject name from id (e.g., 'java-programming-notes' => 'Java Programming')
    const subjectName = id?.replace(/-notes$/, '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    switch(id) {
      case 'java-programming-notes':
        return {
          title: "Java Programming Notes",
          semester: "Semester 4",
          subject: "Java Programming (22412)",
          description: "Comprehensive Java programming notes for computer engineering students in Semester 4. These notes cover core Java concepts, OOP principles, exception handling, multithreading, and more.",
          materials: []
        };
      case 'operating-systems-notes':
        return {
          title: "Operating Systems Notes",
          semester: "Semester 3",
          subject: "Operating Systems (22316)",
          description: "Essential operating systems notes covering process management, memory management, file systems, and more for computer engineering students.",
          materials: []
        };
      case 'database-management-notes':
        return {
          title: "Database Management Notes",
          semester: "Semester 3",
          subject: "Database Management Systems (22317)",
          description: "Comprehensive database management notes covering SQL, normalization, ER diagrams, and database design principles.",
          materials: []
        };
      case 'data-communication-notes':
        return {
          title: "Data Communication Notes",
          semester: "Semester 4",
          subject: "Data Communication (22414)",
          description: "Detailed notes on data communication concepts, network protocols, transmission media, and network architectures.",
          materials: []
        };
      default:
        return {
          title: subjectName || "Subject Notes",
          semester: "All Semesters",
          subject: "MSBTE Subject",
          description: "Comprehensive study notes for MSBTE diploma students",
          materials: []
        };
    }
  };
  
  const noteData = getNotesData();
  
  // SEO metadata
  const seoTitle = `${noteData.title} | ${university} | Diplearn`;
  const seoDescription = noteData.description || notesData.description;
  const canonicalUrl = `https://diplearn.in/tech-plate/${id}`;
  
  // Enhanced schema for tech plate detail page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": noteData.title,
    "description": noteData.description,
    "educationalLevel": noteData.semester,
    "educationalUse": "Study Material",
    "teaches": noteData.subject,
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
        "name": noteData.title,
        "description": noteData.description
      },
      {
        "@type": "Thing",
        "name": "MSBTE",
        "description": "Maharashtra State Board of Technical Education curriculum"
      }
    ],
    "isAccessibleForFree": true,
    "inLanguage": "en-IN",
    "dateModified": new Date().toISOString().split('T')[0]
  };
  
  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
        ogType="article"
        ogImage="https://diplearn.in/og-images/notes-thumbnail.png"
        ogImageAlt={`${noteData.title} notes thumbnail`}
        schemaData={schemaData}
      />
      
      {/* Back Button */}
      <button 
        onClick={() => window.history.back()}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-4 sm:mb-6 text-sm sm:text-base"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        Back
      </button>

      {/* Notes Header */}
      <div className="bg-blue-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-sm border border-blue-100">
        <div className="flex items-start sm:items-center gap-3 sm:gap-4">
          <div className="bg-blue-600 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-xs sm:text-sm font-medium text-white">Notes</span>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{noteData.title}</h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-600">
              <span>Subject: {noteData.subject}</span>
              <span className="hidden sm:inline">•</span>
              <span>Semester: {noteData.semester}</span>
              <span className="hidden sm:inline">•</span>
              <span>University: {university}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Overview */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
          Notes Overview
        </h2>
        <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {noteData.description || notesData.overview}
          </p>
        </div>
      </section>

      {/* Notes Materials */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
          <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
          Study Materials
        </h2>
        <div className="grid gap-4">
          <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
            <p className="text-gray-500 font-medium mb-3">Notes materials for {noteData.title} are coming soon!</p>
            <div className="mt-4 bg-blue-50 p-4 rounded-md text-left inline-block mx-auto">
              <h3 className="text-sm font-medium text-blue-800 mb-2">What to expect:</h3>
              <ul className="list-disc pl-5 text-xs text-blue-700 space-y-1">
                <li>Comprehensive topic coverage</li>
                <li>Illustrated examples and diagrams</li>
                <li>Practice questions with solutions</li>
                <li>Exam preparation guides</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="mb-8">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
          <Info className="w-4 h-4 sm:w-5 sm:h-5" />
          Important Note
        </h2>
        <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 border border-yellow-200">
          <p className="text-sm sm:text-base text-yellow-800 leading-relaxed">
            These notes are provided for educational purposes only. They are meant to supplement your textbooks and classroom learning, not replace them. We recommend using these notes alongside your official course materials for the best learning experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NotesDetail; 