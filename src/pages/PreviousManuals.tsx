import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink, Download, Calendar } from 'lucide-react';

interface ManualItem {
  id: string;
  title: string;
  year: string;
  department: string;
  semester: number;
  url: string;
}

const previousManuals: ManualItem[] = [
  {
    id: 'winter-2022-co',
    title: 'Computer Engineering Winter 2022',
    year: '2022',
    department: 'CO',
    semester: 3,
    url: 'https://example.com/manuals/winter-2022-co.pdf'
  },
  {
    id: 'summer-2022-co',
    title: 'Computer Engineering Summer 2022',
    year: '2022',
    department: 'CO',
    semester: 4,
    url: 'https://example.com/manuals/summer-2022-co.pdf'
  },
  {
    id: 'winter-2021-co',
    title: 'Computer Engineering Winter 2021',
    year: '2021',
    department: 'CO',
    semester: 5,
    url: 'https://example.com/manuals/winter-2021-co.pdf'
  },
  {
    id: 'summer-2021-co',
    title: 'Computer Engineering Summer 2021',
    year: '2021',
    department: 'CO',
    semester: 6,
    url: 'https://example.com/manuals/summer-2021-co.pdf'
  },
  {
    id: 'winter-2022-me',
    title: 'Mechanical Engineering Winter 2022',
    year: '2022',
    department: 'ME',
    semester: 3,
    url: 'https://example.com/manuals/winter-2022-me.pdf'
  },
  {
    id: 'summer-2022-me',
    title: 'Mechanical Engineering Summer 2022',
    year: '2022',
    department: 'ME',
    semester: 4,
    url: 'https://example.com/manuals/summer-2022-me.pdf'
  },
  {
    id: 'winter-2022-if',
    title: 'Information Engineering Winter 2022',
    year: '2022',
    department: 'IF',
    semester: 5,
    url: 'https://example.com/manuals/winter-2022-if.pdf'
  },
  {
    id: 'summer-2022-if',
    title: 'Information Engineering Summer 2022',
    year: '2022',
    department: 'IF',
    semester: 6,
    url: 'https://example.com/manuals/summer-2022-if.pdf'
  }
];

const PreviousManuals: React.FC = () => {
  const seoTitle = "Previous MSBTE Solved Manuals | Past Exam Papers | EduSnippt";
  const seoDescription = "Access previous years' MSBTE solved manuals and past exam papers. Find department-wise and year-wise solved manuals for diploma engineering courses.";

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content="MSBTE, previous manuals, solved papers, past exams, diploma engineering, old question papers" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edusnippt.com/previous-manuals" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://edusnippt.com/previous-manuals" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Previous MSBTE Solved Manuals</h1>
        <div className="prose max-w-none mb-8">
          <p className="text-gray-700">
            Access previous years' MSBTE solved manuals and question papers for diploma engineering courses. 
            These resources will help you prepare for upcoming examinations and understand the pattern of questions.
          </p>
        </div>

        {/* Filter section for future implementation */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8">
          <p className="text-blue-800 text-sm">
            <span className="font-medium">Note:</span> More previous year papers will be added soon. 
            If you need specific manuals, please contact us through the Contact page.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previousManuals.map((manual) => (
            <div key={manual.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-semibold mb-2 text-gray-900">{manual.title}</h2>
                <span className="flex items-center text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  <Calendar size={14} className="mr-1" />
                  {manual.year}
                </span>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600 text-sm">Department: {manual.department}</p>
                <p className="text-gray-600 text-sm">Semester: {manual.semester}</p>
              </div>
              <div className="flex justify-end space-x-2 mt-4 pt-3 border-t border-gray-100">
                <a 
                  href={manual.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <ExternalLink size={16} className="mr-1.5" />
                  View
                </a>
                <a 
                  href={manual.url} 
                  download
                  className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Download size={16} className="mr-1.5" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PreviousManuals; 