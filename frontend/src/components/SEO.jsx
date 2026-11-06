import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { defaultSEO, staticPageSEO } from '../data/seoData';

/**
 * SEO manager component that dynamically sets:
 * - document.title
 * - meta[name="description"]
 * - meta[name="keywords"]
 * - link[rel="canonical"]
 * - og:title, og:description, og:url, og:image
 * - twitter:title, twitter:description, twitter:image
 * - JSON-LD Schema (LocalBusiness, FAQPage, TouristAttraction, BreadcrumbList)
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  schema
}) {
  const location = useLocation();
  const path = location.pathname.replace(/\/$/, '') || '/';
  const staticMeta = staticPageSEO[path] || staticPageSEO[location.pathname] || {};

  const resolvedTitle = title || staticMeta.title || defaultSEO.defaultTitle;
  const resolvedDesc = description || staticMeta.description || defaultSEO.defaultDescription;
  const resolvedCanonical = canonical || `${defaultSEO.domain}${path === '/' ? '' : path}`;
  const resolvedImage = ogImage || defaultSEO.defaultImage;

  useEffect(() => {
    // 1. Title
    document.title = resolvedTitle;

    // Helper to set or create meta tag
    const setMeta = (attr, key, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta
    setMeta('name', 'description', resolvedDesc);
    setMeta('name', 'author', defaultSEO.siteName);

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', resolvedCanonical);

    // 4. Open Graph
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', defaultSEO.siteName);
    setMeta('property', 'og:title', resolvedTitle);
    setMeta('property', 'og:description', resolvedDesc);
    setMeta('property', 'og:url', resolvedCanonical);
    setMeta('property', 'og:image', resolvedImage);

    // 5. Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', resolvedTitle);
    setMeta('name', 'twitter:description', resolvedDesc);
    setMeta('name', 'twitter:image', resolvedImage);

    // 6. Dynamic JSON-LD injection
    const existingDynamicScript = document.getElementById('dynamic-jsonld');
    if (existingDynamicScript) {
      existingDynamicScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'dynamic-jsonld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const cleanupScript = document.getElementById('dynamic-jsonld');
      if (cleanupScript) cleanupScript.remove();
    };
  }, [resolvedTitle, resolvedDesc, resolvedCanonical, resolvedImage, ogType, schema]);

  return null;
}
