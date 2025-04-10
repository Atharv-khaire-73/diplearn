import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  ogImageAlt?: string;
  schemaData?: object;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = '',
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://diplearn.in/og-image.png',
  ogImageAlt = 'Diplearn - MSBTE Study Materials',
  schemaData,
  children,
}) => {
  // Default schema for the website
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Diplearn",
    "url": "https://diplearn.in",
    "description": "Free MSBTE study materials, solved manuals, and resources for engineering students.",
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
        "url": "https://diplearn.in/logo.png"
      },
      "sameAs": [
        "https://www.instagram.com/diplearn/",
        "https://youtube.com/@diplearn"
      ]
    }
  };

  // Merge provided schema with default schema if it exists
  const finalSchema = schemaData || defaultSchema;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Diplearn - MSBTE Study Materials" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:locale" content="en_IN" />
      <meta property="article:publisher" content="https://www.instagram.com/diplearn/" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:domain" content="diplearn.in" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>

      {/* Additional metadata */}
      <meta name="author" content="Diplearn" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#1e40af" />
      
      {/* Allow for additional custom meta tags */}
      {children}
    </Helmet>
  );
};

export default SEO; 