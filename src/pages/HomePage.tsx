import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  // SEO metadata
  const seoTitle = "Diplearn | Free MSBTE Diploma Study Materials and Notes";
  const seoDescription = "Access free MSBTE study materials, lab manuals, and solved assignments for Diploma in Engineering. Download I-Scheme and K-Scheme notes for all subjects.";
  const keywords = "MSBTE, diploma, engineering, study materials, notes, lab manuals, solved assignments, I Scheme, K Scheme, free resources, diploma education, engineering diploma, computer science, electronics, mechanical engineering, civil engineering";
  const canonicalUrl = "https://diplearn.in";
  
  // Enhanced schema data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://diplearn.in",
    "name": "Diplearn - MSBTE Diploma Study Resources",
    "description": seoDescription,
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://diplearn.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Diplearn",
      "logo": {
        "@type": "ImageObject",
        "url": "https://diplearn.in/logo.png",
        "width": "180",
        "height": "60"
      },
      "sameAs": [
        "https://www.instagram.com/diplearn/",
        "https://youtube.com/@diplearn"
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": featuredSubjects.map((subject, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Course",
          "name": subject.name,
          "description": subject.description || `${subject.name} study materials for MSBTE diploma students`,
          "provider": {
            "@type": "Organization",
            "name": "MSBTE",
            "sameAs": "https://msbte.org.in"
          },
          "url": `/subject/${subject.id}`
        }
      }))
    },
    "audience": {
      "@type": "EducationalAudience",
      "educationalLevel": "Undergraduate",
      "audienceType": "Diploma Students"
    },
    "keywords": keywords,
    "inLanguage": "en-IN"
  };
  
  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogType="website"
        ogImage="https://diplearn.in/og-images/diplearn-home.png"
        ogImageAlt="Diplearn - MSBTE Diploma Study Resources"
        schemaData={schemaData}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* ... existing code ... */}
      </div>
    </>
  );
};

export default HomePage; 