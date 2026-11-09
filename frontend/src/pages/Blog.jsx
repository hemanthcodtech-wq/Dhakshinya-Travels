import { useState, useMemo } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, User, Eye, CheckCircle2, MessageCircle, Phone,
  ArrowRight, ChevronRight, Sparkles, ChevronDown, Share2, Tag, Home, Bookmark
} from 'lucide-react';
import Page from './PageTemplate';
import { images, whatsappBooking, phone } from '../data/siteData';
import { blogPosts } from '../data/blogData';
import { useData } from '../context/DataContext';
import StatsBanner from '../components/StatsBanner';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import './Blog.css';
import './BlogDarkTheme.css';

export default function Blog({ post: propPost, slug: propSlug }) {
  const params = useParams();
  const location = useLocation();
  const { blogs, isLoading } = useData();
  const [openFaq, setOpenFaq] = useState(null);
  const [copied, setCopied] = useState(false);

  // Available blog posts list from database/admin
  const allBlogs = useMemo(() => {
    return Array.isArray(blogs) ? blogs : [];
  }, [blogs]);

  // Derive target slug from props, params, or location pathname
  const currentPathSlug = location.pathname.replace(/^\//, '');
  const targetSlug = propSlug || propPost?.slug || params.slug || currentPathSlug;

  // Find target post by slug or id
  const currentPost = propPost || allBlogs.find(
    p => p.slug === targetSlug || p.id === targetSlug
  ) || allBlogs.find(
    p => p.slug === currentPathSlug || p.id === currentPathSlug
  );

  // If loading, show empty placeholder or wait
  if (!currentPost && isLoading) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#64748b', fontWeight: 600 }}>Loading article...</p>
      </div>
    );
  }

  // If no matching post is found, redirect to blog index or first post
  if (!currentPost) {
    const fallbackPost = allBlogs[0];
    if (!fallbackPost) return <Navigate to="/blog" replace />;
    return <Navigate to={`/${fallbackPost.slug}`} replace />;
  }

  // Related posts (excluding current post)
  const relatedPosts = allBlogs.filter(
    p => (p.slug !== currentPost.slug && p.id !== currentPost.id)
  ).slice(0, 6);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentPost.title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <Page
      eyebrow="TIRUPATI TRAVEL JOURNAL"
      title={currentPost.shortTitle || currentPost.title}
      text="Comprehensive pilgrimage insights, road distance guides, and taxi service packages."
      image={currentPost.image || images.temple}
    >
      <SEO
        title={`${currentPost.title} | Dhakshinya Tours & Travels`}
        description={currentPost.snippet || currentPost.intro || `Read about ${currentPost.title} on Dhakshinya Tours & Travels travel journal.`}
        canonical={`https://www.dhakshinyatourandtravels.in/${currentPost.slug}`}
        ogImage={currentPost.image || images.temple}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: currentPost.title,
          description: currentPost.snippet,
          image: currentPost.image || images.temple,
          author: {
            '@type': 'Organization',
            name: 'Dhakshinya Tours & Travels'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Dhakshinya Tours & Travels',
            logo: {
              '@type': 'ImageObject',
              url: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786735401/33e36867-e1e5-4785-bbf1-8255a659662e.png'
            }
          }
        }}
      />
      <div className="single-blog-page-wrapper">
        <article className="single-blog-article">
        {/* --- BREADCRUMBS --- */}
        <div className="single-blog-breadcrumbs">
          <Link to="/"><Home size={14} /> Home</Link>
          <ChevronRight size={13} />
          <Link to="/blog">Blog</Link>
          <ChevronRight size={13} />
          <span className="crumb-active">{currentPost.category}</span>
          <ChevronRight size={13} />
          <span className="crumb-title">{currentPost.shortTitle || currentPost.title}</span>
        </div>

        {/* --- ARTICLE HEADER --- */}
        <header className="single-blog-header">
          <div className="single-blog-meta-top">
            <span className="single-category-badge">
              <Bookmark size={12} /> {currentPost.category}
            </span>
            <span className="single-read-time">
              <Clock size={13} /> {currentPost.readTime}
            </span>
          </div>

          <h1 className="single-blog-title">{currentPost.title}</h1>

          <div className="single-blog-author-bar">
            <div className="single-author-info">
              <div className="author-avatar-icon">
                <User size={16} />
              </div>
              <div className="author-details">
                <span className="author-name">{currentPost.author}</span>
                <span className="author-role">Updated on {currentPost.date}</span>
              </div>
            </div>

            <div className="single-header-actions">
              <span className="views-count">
                <Eye size={14} /> {currentPost.views || '12,500+ Devotee Reads'}
              </span>
              <button type="button" className="share-btn" onClick={handleShare}>
                <Share2 size={15} /> {copied ? 'Link Copied!' : 'Share Guide'}
              </button>
            </div>
          </div>
        </header>

        {/* --- HERO CLOUDINARY IMAGE --- */}
        <div className="single-blog-featured-image-wrapper">
          <img
            src={currentPost.image}
            alt={currentPost.title}
            className="single-blog-featured-img"
          />
        </div>

        {/* --- KEY HIGHLIGHTS CHECKLIST BOX --- */}
        {currentPost.highlights && currentPost.highlights.length > 0 && (
          <ScrollReveal direction="up">
            <div className="single-highlights-card">
              <div className="highlights-header">
                <Sparkles size={18} className="sparkle-gold" />
                <h3>Key Travel Highlights & Essential Takeaways</h3>
              </div>
              <ul className="highlights-list">
                {currentPost.highlights.map((hl, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        )}

        {/* --- UNIQUE ROUTE & TRIP SPECIFICATIONS CARD --- */}
        {currentPost.quickFacts && (
          <ScrollReveal direction="up">
            <div className="single-quickfacts-card">
              <div className="quickfacts-header">
                <Sparkles size={16} className="sparkle-gold" />
                <h3>Quick Specifications & Route Details</h3>
              </div>
              <div className="quickfacts-grid">
                {Object.entries(currentPost.quickFacts).map(([key, val], fIdx) => (
                  <div className="quickfact-item" key={fIdx}>
                    <span className="quickfact-label">{key}:</span>
                    <strong className="quickfact-value">{val}</strong>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* --- ARTICLE FULL CONTENT SECTIONS --- */}
        <div className="single-article-body">
          {currentPost.fullContent?.intro && (
            <p className="article-intro-lead">
              "{currentPost.fullContent.intro}"
            </p>
          )}

          {currentPost.fullContent?.sections ? (
            currentPost.fullContent.sections.map((sec, idx) => (
              <section key={idx} className="article-section">
                <h2>{sec.heading}</h2>
                <p>{sec.text}</p>
              </section>
            ))
          ) : (
            <section className="article-section">
              <p>{currentPost.snippet}</p>
            </section>
          )}

          {/* TAGS ROW */}
          {currentPost.tags && currentPost.tags.length > 0 && (
            <div className="article-tags-wrapper">
              <span className="tags-label"><Tag size={14} /> Related Topics:</span>
              <div className="tags-chips">
                {currentPost.tags.map((t, idx) => (
                  <span key={idx} className="single-tag-chip">#{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* --- CAB BOOKING CALL TO ACTION BOX --- */}
        <ScrollReveal direction="zoom">
          <div className="single-blog-cta-card">
            <div className="cta-content">
              <span className="cta-badge"><Sparkles size={13} /> 24/7 TAXI & TOUR PACKAGES</span>
              <h2>Planning Your Trip for this Route?</h2>
              <p>
                Book clean AC Sedans (Dzire/Etios), Executive Innova Crysta, or Luxury 12/17-Seater Tempo Travellers with experienced local drivers for a hassle-free journey.
              </p>
              <div className="cta-buttons-row">
                <a
                  href={whatsappBooking(`Hi! I read your blog "${currentPost.title}" and would like to inquire about cab fare packages and availability.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-btn cta-whatsapp"
                >
                  <MessageCircle size={18} /> Inquire on WhatsApp
                </a>
                <a href={`tel:${phone}`} className="cta-btn cta-call">
                  <Phone size={18} /> Call +91 90146 77289
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* --- DYNAMIC UNIQUE FAQ SECTION --- */}
        <section className="single-faq-section">
          <div className="faq-header">
            <p className="faq-eyebrow">HELPFUL TRAVEL TIPS</p>
            <h2>Devotee Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion-list">
            {(currentPost.faqs || [
              {
                q: `What is the best vehicle for traveling on the ${currentPost.shortTitle || 'Tirupati'} route?`,
                a: 'For 1-4 passengers with moderate luggage, an AC Sedan (Dzire/Etios) is economical and comfortable. For families of 5-7 or elderly pilgrims, Toyota Innova Crysta is highly recommended.'
              },
              {
                q: 'Are driver bata, tolls, and state permits included in your taxi package quotes?',
                a: 'Yes, all quotes provided by Dhakshinya Tours & Travels are 100% all-inclusive.'
              },
              {
                q: 'Can we customize our route to include nearby temple visits?',
                a: 'Absolutely! Our drivers are local experts who can seamlessly add temple halts to your itinerary.'
              }
            ]).map((faq, idx) => (
              <div
                key={idx}
                className={`single-faq-item ${openFaq === idx ? 'is-open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="faq-question-row">
                  <h3>{faq.q}</h3>
                  <ChevronDown size={18} className="faq-chevron" />
                </div>
                {openFaq === idx && (
                  <p className="faq-answer-text">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* --- STATS BANNER --- */}
        <StatsBanner
          title="Trusted Tirupati Cab & Tour Service"
          subtitle="DEVOTEE SATISFACTION GUARANTEED"
        />

        {/* --- OTHER INDIVIDUAL BLOGS DROPDOWN / GRID SECTION --- */}
        <section className="related-blogs-section">
          <div className="related-header">
            <div>
              <span className="related-eyebrow">EXPLORE MORE GUIDES</span>
              <h2>Other Recommended Travel Blogs</h2>
            </div>
          </div>

          <div className="related-blogs-grid">
            {relatedPosts.map(post => (
              <Link key={post.slug} to={`/${post.slug}`} className="related-blog-card">
                <div className="related-card-img">
                  <img src={post.image} alt={post.title} />
                  <span className="related-cat-chip">{post.category}</span>
                </div>
                <div className="related-card-body">
                  <div className="related-meta">
                    <span><Calendar size={12} /> {post.date}</span>
                    <span><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3>{post.shortTitle || post.title}</h3>
                  <p>{post.snippet}</p>
                  <span className="related-read-link">
                    Read Guide <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  </Page>
);
}
