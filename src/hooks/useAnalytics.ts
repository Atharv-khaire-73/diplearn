import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: {
        page_path?: string;
        page_title?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: any;
      }
    ) => void;
  }
}

export const useAnalytics = () => {
  const location = useLocation();
  
  // Track page views
  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-RKM28NGP9N', {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
    }
  }, [location]);
  
  // Track events (e.g. button clicks, form submissions)
  const trackEvent = useCallback((eventName: string, category: string, label?: string, value?: number) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }, []);
  
  // Track downloads or external links
  const trackLink = useCallback((url: string, type: 'download' | 'external' | 'resource') => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', type === 'download' ? 'download' : 'click', {
        event_category: type,
        event_label: url
      });
    }
  }, []);
  
  // Track search queries
  const trackSearch = useCallback((query: string) => {
    if (typeof window.gtag !== 'undefined' && query.trim()) {
      window.gtag('event', 'search', {
        search_term: query
      });
    }
  }, []);
  
  // Track errors for monitoring
  const trackError = useCallback((error: Error | string, fatal: boolean = false) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'exception', {
        description: typeof error === 'string' ? error : error.message,
        fatal: fatal
      });
    }
  }, []);
  
  return { trackEvent, trackLink, trackSearch, trackError };
};

export default useAnalytics; 