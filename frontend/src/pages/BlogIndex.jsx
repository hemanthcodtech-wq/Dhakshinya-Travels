import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Calendar, Clock, User, ArrowRight, 
  Bookmark, CheckCircle2, MessageCircle, Phone, ShieldCheck, Car,
  MessageSquare, Share2, Pin, Search
} from 'lucide-react';
import { images, whatsapp, phone } from '../data/siteData';
import { blogPosts, blogCategories } from '../data/blogData';
import { useData } from '../context/DataContext';
import StatsBanner from '../components/StatsBanner';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import './BlogIndex.css';
import './BlogDarkTheme.css';

const recentCommentsList = [
  {
    id: 'c1',
    author: 'Ramesh Kumar',
    location: 'Bangalore',
    time: '2 hours ago',
    postTitle: 'Tirupati to Coimbatore Distance: Complete Travel Guide',
    postSlug: 'tirupati-to-coimbatore-distance',
    comment: 'The NH44 distance breakdown was super accurate! Booked an Innova Crysta for our family trip, driver was very helpful.'
  },
  {
    id: 'c2',
    author: 'Suresh M.',
    location: 'Chennai',
    time: '5 hours ago',
    postTitle: 'Thiruttani Murugan Temple: Complete Pilgrim’s Guide',
    postSlug: 'thiruttani-murugan-temple-guide',
    comment: 'Very helpful guide on 365 hill steps vs car route. Driver took us directly up the motorable road for our elderly parents.'
  },
  {
    id: 'c3',
    author: 'Ananya P.',
    location: 'Hyderabad',
    time: '1 day ago',
    postTitle: 'Corporate Cab Services in Tirupati: Complete Guide',
    postSlug: 'corporate-cab-services-in-tirupati',
    comment: 'Great insights on Sri City corporate cabs & airport transfers. Punctual chauffeur and smooth GST billing process!'
  },
  {
    id: 'c4',
    author: 'Venkat Rao',
    location: 'Mysore',
    time: '2 days ago',
    postTitle: 'Mysore to Tirupati Taxi & Tour Packages',
    postSlug: 'mysore-to-tirupati-taxi-tour-packages',
    comment: 'Covered Bangalore NICE road bypass and reached Tirupati safely in 8 hours. Highly recommend the 2-day darshan package.'
  }
];

export default function BlogIndex() {
  const { blogs, isLoading } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('feed'); // 'feed' | 'recent' | 'comments' | 'popular'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedId, setCopiedId] = useState(null);

  // Dynamic blogs directly from Admin / Database
  const allBlogs = useMemo(() => {
    return Array.isArray(blogs) ? blogs : [];
  }, [blogs]);

  // Dynamically extract categories from all admin-added blogs
  const categories = useMemo(() => {
    const cats = new Set(allBlogs.map(b => b.category).filter(Boolean));
    return ['All', ...Array.from(cats)];
  }, [allBlogs]);

  // Recent posts sorted by date
  const recentPosts = useMemo(() => {
    return [...allBlogs].slice(0, 5);
  }, [allBlogs]);

  // Filtered posts feed
  const filteredPosts = useMemo(() => {
    return allBlogs.filter(post => {
      const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = !searchTerm.trim() || 
        (post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (post.snippet && post.snippet.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (post.category && post.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (post.tags && post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())));
      return matchesCat && matchesSearch;
    });
  }, [allBlogs, selectedCategory, searchTerm]);

  const handleShare = (post) => {
    const url = `${window.location.origin}/${post.slug}`;
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: url
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      setCopiedId(post.slug);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <div className="blog-social-wrapper">
      <SEO
        title="Dhakshinya Tours & Travels Blog – Pilgrimage Guides & Temple Tips"
        description="Read expert Tirupati travel guides, temple darshan tips, cab distance charts and South India pilgrimage insights from Dhakshinya Tours & Travels."
        canonical="/blog"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dhakshinyatourandtravels.in/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.dhakshinyatourandtravels.in/blog' }
          ]
        }}
      />
      {/* --- HERO BANNER --- */}
      <section className="blog-hero-card">
        <div className="blog-hero-content">
          <span className="blog-badge">
            <Sparkles size={14} /> OFFICIAL DEVOTEE TRAVEL JOURNAL & GUIDES
          </span>
          <h1>Dhakshinya Tours & Travels – Pilgrimage Blog & Travel Insights</h1>
          <p>
            Curated local insights, verified temple darshan guidelines, road trip distance guides, and taxi packages across Andhra Pradesh, Tamil Nadu, and Karnataka.
          </p>

          <div className="blog-hero-stats-row">
            <div className="hero-stat-pill">
              <span className="stat-num">{allBlogs.length}</span>
              <span className="stat-label">Verified Guides</span>
            </div>
            <div className="hero-stat-pill">
              <span className="stat-num">{categories.length - 1}</span>
              <span className="stat-label">Destinations & Categories</span>
            </div>
            <div className="hero-stat-pill">
              <span className="stat-num">100%</span>
              <span className="stat-label">Real-Time Admin Updated</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- TOP CONTROL BAR: SEARCH + CATEGORIES FILTER --- */}
      <div className="blog-controls-card">
        <div className="blog-search-row">
          <div className="blog-search-input-box">
            <Search size={18} className="search-lead-icon" />
            <input
              type="text"
              placeholder="Search guides, temple routes, places (e.g. Tirumala, Mysore, Ooty)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="blog-main-search-input"
            />
            {searchTerm && (
              <button 
                type="button" 
                className="clear-search-btn"
                onClick={() => setSearchTerm('')}
              >
                Clear
              </button>
            )}
          </div>

          <div className="blog-view-tabs">
            <button
              type="button"
              className={`view-tab-btn ${activeTab === 'feed' ? 'active' : ''}`}
              onClick={() => setActiveTab('feed')}
            >
              All Articles ({filteredPosts.length})
            </button>
            <button
              type="button"
              className={`view-tab-btn ${activeTab === 'comments' ? 'active' : ''}`}
              onClick={() => setActiveTab('comments')}
            >
              Devotee Reviews ({recentCommentsList.length})
            </button>
          </div>
        </div>

        {/* CATEGORY PILLS BAR */}
        {categories.length > 1 && (
          <div className="category-scroll-pills-bar">
            <span className="cat-filter-label">Filter by:</span>
            <div className="category-scroll-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat} <span className="cat-count">{cat === 'All' ? allBlogs.length : allBlogs.filter(b => b.category === cat).length}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* --- MAIN LAYOUT: VERTICAL SOCIAL FEED + PINNED SIDEBAR --- */}
      <div className="blog-social-layout">
        {/* LEFT/MAIN COLUMN: VERTICAL SOCIAL MEDIA FEED */}
        <main className="social-feed-column">

          {activeTab === 'comments' ? (
            /* RECENT COMMENTS VIEW */
            <div className="comments-feed-section">
              <div className="feed-header-chip">
                <MessageSquare size={16} /> Devotee Discussions & Recent Comments
              </div>
              <div className="comments-cards-list">
                {recentCommentsList.map(comment => (
                  <article key={comment.id} className="comment-feed-card">
                    <div className="comment-user-row">
                      <div className="user-avatar-circle">
                        {comment.author.charAt(0)}
                      </div>
                      <div className="comment-user-info">
                        <strong>{comment.author} <small>• {comment.location}</small></strong>
                        <span className="comment-time">{comment.time}</span>
                      </div>
                    </div>

                    <p className="comment-text">"{comment.comment}"</p>

                    <div className="comment-post-ref">
                      <span className="ref-label">On Guide:</span>
                      <Link to={`/${comment.postSlug}`} className="ref-link">
                        {comment.postTitle} <ArrowRight size={13} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            /* VERTICAL SOCIAL MEDIA FEED OF BLOG CARDS */
            <div className="social-feed-list">
              {filteredPosts.length === 0 ? (
                <div className="no-blogs-found">
                  <p>
                    {allBlogs.length === 0
                      ? 'No blog articles have been published yet by admin.'
                      : 'No blog posts match your search or category filter.'}
                  </p>
                  {(searchTerm || selectedCategory !== 'All') && (
                    <button 
                      type="button" 
                      className="button"
                      onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                    >
                      Reset Filters
                    </button>
                  )}
                </div>
              ) : (
                filteredPosts.map((post, idx) => (
                  <ScrollReveal key={post.slug} direction="up" delay={(idx % 2) * 0.04}>
                    <article className="social-post-card">
                      {/* POST HEADER BAR */}
                      <header className="social-post-header">
                        <div className="author-media-block">
                          <div className="social-avatar-icon">
                            <User size={18} />
                          </div>
                          <div>
                            <strong className="post-author-name">{post.author.split('@')[0]}</strong>
                            <span className="post-time-meta">Published on {post.date}</span>
                          </div>
                        </div>

                        <div className="post-header-badges">
                          <span className="post-cat-chip">
                            <Bookmark size={11} /> {post.category}
                          </span>
                          <span className="post-readtime-chip">
                            <Clock size={11} /> {post.readTime}
                          </span>
                        </div>
                      </header>

                      {/* POST MEDIA IMAGE */}
                      <div className="social-post-media">
                        <img src={post.image} alt={post.title} loading="lazy" />
                        <div className="media-overlay-gradient"></div>
                      </div>

                      {/* POST BODY CONTENT */}
                      <div className="social-post-content">
                        <h2>
                          <Link to={`/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h2>

                        <p className="post-snippet-text">{post.snippet}</p>

                        {post.highlights && post.highlights.length > 0 && (
                          <div className="social-highlights-list">
                            {post.highlights.slice(0, 3).map((hl, hIdx) => (
                              <div key={hIdx} className="social-hl-item">
                                <CheckCircle2 size={13} className="hl-check" />
                                <span>{hl}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* POST ACTION BAR */}
                        <div className="social-post-action-bar">
                          <Link to={`/${post.slug}`} className="button social-readmore-btn">
                            <span>Read More</span>
                            <ArrowRight size={16} />
                          </Link>

                          <a
                            href={`${whatsapp}?text=${encodeURIComponent(`Hi! I read your blog "${post.title}" and would like to inquire about cab fare packages.`)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="social-action-btn wa-action"
                          >
                            <MessageCircle size={15} /> Inquiry
                          </a>

                          <button 
                            type="button" 
                            className="social-action-btn share-action"
                            onClick={() => handleShare(post)}
                          >
                            <Share2 size={15} /> {copiedId === post.slug ? 'Copied!' : 'Share'}
                          </button>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))
              )}
            </div>
          )}
        </main>

        {/* RIGHT COLUMN: PINNED SIDEBAR WITH RECENT POSTS & COMMENTS WIDGETS */}
        <aside className="social-sidebar-column">
          {/* WIDGET 1: PINNED RECENT POSTS */}
          <div className="pinned-widget-card">
            <div className="widget-header">
              <Pin size={16} className="widget-icon" />
              <h3>Latest Published Articles</h3>
            </div>
            <div className="widget-recent-posts">
              {recentPosts.map(post => (
                <Link key={post.slug} to={`/${post.slug}`} className="widget-post-item">
                  <img src={post.image} alt={post.title} />
                  <div>
                    <span className="widget-post-cat">{post.category}</span>
                    <h4>{post.shortTitle || post.title}</h4>
                    <small><Calendar size={10} /> {post.date}</small>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* WIDGET 2: PINNED RECENT COMMENTS */}
          <div className="pinned-widget-card">
            <div className="widget-header">
              <MessageSquare size={16} className="widget-icon" />
              <h3>Recent Comments</h3>
            </div>
            <div className="widget-comments-list">
              {recentCommentsList.slice(0, 3).map(c => (
                <div key={c.id} className="widget-comment-item">
                  <div className="widget-comment-user">
                    <strong>{c.author}</strong> <small>({c.location})</small>
                  </div>
                  <p>"{c.comment}"</p>
                  <Link to={`/${c.postSlug}`} className="widget-comment-link">
                    Read Guide →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* WIDGET 3: QUICK CONSULTATION BANNER */}
          <div className="pinned-widget-card cta-widget">
            <Sparkles size={20} className="cta-sparkle" />
            <h3>Need a Cab in Tirupati?</h3>
            <p>Book 24/7 verified AC cabs with experienced drivers for Tirumala darshan and outstation trips.</p>
            <a 
              href={`${whatsapp}?text=${encodeURIComponent('Hi Dhakshinya Tours & Travels! I want to book a cab for my trip.')}`}
              target="_blank" 
              rel="noreferrer"
              className="button cta-wa-button"
            >
              <MessageCircle size={16} /> WhatsApp Inquiry
            </a>
          </div>
        </aside>
      </div>

      {/* --- STATS COUNTER BANNER --- */}
      <StatsBanner title="Trusted Tirupati Travel Publisher" subtitle="DEVOTEE INSIGHTS" />
    </div>
  );
}
