import React from 'react';
import SEO from '../components/SEO';

interface DepartmentPageProps {
  departmentName: string;
  departmentCode: string;
  description: string;
  subjects: Array<{
    name: string;
    code: string;
    semester: number;
  }>;
}

const DepartmentPage: React.FC<DepartmentPageProps> = ({
  departmentName,
  departmentCode,
  description,
  subjects
}) => {
  const seoTitle = `${departmentName} Study Materials & Notes | MSBTE ${departmentCode} | EduSnippt`;
  const seoDescription = `Access comprehensive ${departmentName} study materials, solved manuals, and engineering notes for MSBTE ${departmentCode} courses. Find subject-wise notes and solved manuals.`;
  const canonicalUrl = `https://diplearn.in/department/${departmentCode.toLowerCase()}`;
  const keywords = `${departmentName}, ${departmentCode}, MSBTE, study material, notes, solved manual, engineering, ${departmentCode.toLowerCase()}-notes, lab manual, I Scheme, K Scheme`;
  
  // Enhanced schema for department page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${departmentName} Department`,
    "description": description,
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
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": subjects.map((subject, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Course",
          "name": subject.name,
          "courseCode": subject.code,
          "educationalLevel": `Semester ${subject.semester}`,
          "teaches": subject.name,
          "provider": {
            "@type": "Organization",
            "name": "MSBTE",
            "sameAs": "https://msbte.org.in"
          },
          "url": `https://diplearn.in/subject/${subject.name.toLowerCase().replace(/\s+/g, '-')}`
        }
      }))
    },
    "inLanguage": "en-IN",
    "url": canonicalUrl
  };

  return (
    <>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogType="article"
        ogImage={`https://diplearn.in/og-images/${departmentCode.toLowerCase()}-department.png`}
        ogImageAlt={`${departmentName} department study materials thumbnail`}
        schemaData={schemaData}
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{departmentName} Study Materials</h1>
        <div className="prose max-w-none mb-8">
          <p>{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div key={subject.code} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{subject.name}</h2>
              <p className="text-gray-600">Course Code: {subject.code}</p>
              <p className="text-gray-600">Semester: {subject.semester}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DepartmentPage; 