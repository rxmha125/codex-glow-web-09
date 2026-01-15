import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export const useSEO = ({
  title = "Welcome | Axtrio AI",
  description = "Axtrio AI pioneers cutting-edge AI models from Bangladesh, delivering powerful, scalable intelligence through the Txa series.",
  keywords = "AI, Artificial Intelligence, Bangladesh, AI Models, Machine Learning, Deep Learning, Axtrio AI, Txa Series, AI Technology, AI Innovation",
  ogImage = "https://www.axtrioai.com/og-logo.png",
  ogType = "website",
  canonicalUrl,
  structuredData
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper function to update meta tags
    const updateMetaTag = (property: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:url', canonicalUrl || window.location.href, 'property');

    // Update Twitter Card tags
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');

    // Update canonical URL
    if (canonicalUrl) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonicalUrl);
    }

    // Add structured data
    if (structuredData) {
      const scriptId = 'structured-data';
      let scriptElement = document.getElementById(scriptId);
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        (scriptElement as HTMLScriptElement).type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, structuredData]);
};

export default useSEO;
