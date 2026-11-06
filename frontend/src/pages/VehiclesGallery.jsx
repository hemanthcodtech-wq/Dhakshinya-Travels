import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCar, 
  FaMagnifyingGlassPlus, 
  FaPhoneVolume, 
  FaWhatsapp, 
  FaXmark, 
  FaChevronLeft, 
  FaChevronRight,
  FaShieldHalved,
  FaStar,
  FaCamera
} from 'react-icons/fa6';
import './VehiclesGallery.css';

// Automatically import all images from Gallery and Gallery/gallery2 using Vite's glob import
const primaryGalleryModules = import.meta.glob('../Gallery/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });
const secondaryGalleryModules = import.meta.glob('../Gallery/gallery2/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });

// Convert module objects to structured image lists
const primaryImages = Object.entries(primaryGalleryModules).map(([path, url], idx) => {
  const fileName = path.split('/').pop() || `Vehicle Image ${idx + 1}`;
  return {
    id: `g1-${idx}`,
    url,
    category: 'Fleet Showcase',
    title: `Dhakshinya Luxury Fleet #${idx + 1}`,
    caption: 'Spotless AC vehicle, verified commercial permit & GPS equipped'
  };
});

const secondaryImages = Object.entries(secondaryGalleryModules).map(([path, url], idx) => {
  return {
    id: `g2-${idx}`,
    url,
    category: 'Travel & Interiors',
    title: `Premium Travel Experience #${idx + 1}`,
    caption: 'Executive pushback seating, luggage carrier & deluxe cabin'
  };
});

const allGalleryItems = [
  ...primaryImages.map(img => ({ ...img, album: 'gallery1' })),
  ...secondaryImages.map(img => ({ ...img, album: 'gallery2' }))
];

export default function VehiclesGallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeTab === 'all' 
    ? allGalleryItems 
    : allGalleryItems.filter(item => item.album === activeTab);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showNext = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex(prev => (prev + 1) % filteredItems.length);
      if (e.key === 'ArrowLeft') setLightboxIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div className="vehicles-gallery-page">
      {/* Hero Header Section */}
      <section className="gallery-hero-section">
        <div className="gallery-hero-content">
          <div className="gallery-eyebrow-badge">
            <FaCamera />
            <span>OFFICIAL DHAKSHINYA FLEET ALBUM</span>
          </div>
          <h1>
            Vehicles <span>Gallery</span>
          </h1>
          <p>
            Explore real photographs of our immaculate sedans, SUVs, luxury Innova Crysta, Tempo Travellers, 
            Force Urbania, and tourist coaches. 100% genuine vehicles maintained to the highest hygiene standards.
          </p>

          <div className="gallery-trust-chips">
            <div className="chip">
              <FaShieldHalved /> <span>100% Verified Fleet</span>
            </div>
            <div className="chip">
              <FaStar /> <span>Sanitized & AC Assured</span>
            </div>
            <div className="chip">
              <FaCar /> <span>Commercial Tourist Permits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Album Filters */}
      <div className="gallery-filter-bar-wrapper">
        <div className="gallery-filter-bar">
          <button
            className={`filter-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Photos <span className="tab-count">{allGalleryItems.length}</span>
          </button>
          <button
            className={`filter-tab ${activeTab === 'gallery1' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery1')}
          >
            Gallery 1 (Fleet Showcase) <span className="tab-count">{primaryImages.length}</span>
          </button>
          <button
            className={`filter-tab ${activeTab === 'gallery2' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery2')}
          >
            Gallery 2 (Interiors & Comfort) <span className="tab-count">{secondaryImages.length}</span>
          </button>
        </div>
      </div>

      {/* Grid of Photos */}
      <section className="gallery-grid-section">
        <motion.div 
          layout 
          className="gallery-photos-grid"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: (index % 12) * 0.04 }}
              className="gallery-card"
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-card-image-wrap">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  loading="lazy" 
                  className="gallery-img"
                />
                <div className="gallery-card-overlay">
                  <div className="overlay-badge">
                    <FaCamera size={12} /> {item.category}
                  </div>
                  <div className="zoom-icon-btn">
                    <FaMagnifyingGlassPlus size={18} />
                  </div>
                  <div className="overlay-caption">
                    <h4>{item.title}</h4>
                    <p>{item.caption}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bottom Booking CTA Banner */}
      <section className="gallery-booking-banner">
        <div className="booking-banner-card">
          <div className="banner-text">
            <h3>Like what you see? Book your preferred vehicle today</h3>
            <p>Direct Tirupati pickup, transparent fares with Toll & Driver Batta included.</p>
          </div>
          <div className="banner-actions">
            <a 
              href="https://wa.me/919014677289?text=Hi%2C%20I%20saw%20your%20Vehicles%20Gallery%20and%20want%20to%20book%20a%20cab." 
              className="gallery-wa-btn"
              target="_blank" 
              rel="noreferrer"
            >
              <FaWhatsapp size={18} /> WhatsApp Inquiry
            </a>
            <a href="tel:+919014677289" className="gallery-call-btn">
              <FaPhoneVolume size={16} /> Call +91 90146 77289
            </a>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close Preview">
              <FaXmark size={24} />
            </button>

            <button className="lightbox-nav prev" onClick={showPrev} aria-label="Previous image">
              <FaChevronLeft size={24} />
            </button>

            <div className="lightbox-content-box" onClick={e => e.stopPropagation()}>
              <motion.img 
                key={filteredItems[lightboxIndex].id}
                src={filteredItems[lightboxIndex].url} 
                alt={filteredItems[lightboxIndex].title}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="lightbox-main-img"
              />
              <div className="lightbox-meta-bar">
                <div className="meta-text">
                  <span className="meta-category">{filteredItems[lightboxIndex].category}</span>
                  <h3>{filteredItems[lightboxIndex].title}</h3>
                  <p>{filteredItems[lightboxIndex].caption}</p>
                </div>
                <div className="meta-counter">
                  {lightboxIndex + 1} / {filteredItems.length}
                </div>
              </div>
            </div>

            <button className="lightbox-nav next" onClick={showNext} aria-label="Next image">
              <FaChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

