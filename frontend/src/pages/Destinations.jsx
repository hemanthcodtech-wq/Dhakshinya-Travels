import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Compass, Sparkles, Search, MapPin, Phone, MessageCircle } from 'lucide-react';
import { images, whatsapp, phone } from '../data/siteData';
import { useData } from '../context/DataContext';
import ScrollReveal from '../components/ScrollReveal';
import EasebuzzModal from '../components/EasebuzzModal';
import SEO from '../components/SEO';
import './Destinations.css';

export default function Destinations() {
  const { destinations, selectBooking, isLoading } = useData();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDestSlug, setSelectedDestSlug] = useState('');
  const [payModalData, setPayModalData] = useState(null);

  // Dynamic admin-added destinations list
  const allDestinations = useMemo(() => {
    return Array.isArray(destinations) ? destinations : [];
  }, [destinations]);

  // Filtered destinations list
  const filteredDestinations = useMemo(() => {
    return allDestinations.filter(d => {
      const slug = d[0] || '';
      const name = d[1] || '';
      const desc = d[2] || '';
      const term = searchTerm.toLowerCase().trim();
      if (!term) return true;
      return name.toLowerCase().includes(term) || 
             desc.toLowerCase().includes(term) || 
             slug.toLowerCase().includes(term);
    });
  }, [allDestinations, searchTerm]);

  const handleHeroExplore = () => {
    const targetSlug = selectedDestSlug || allDestinations[0]?.[0];
    if (targetSlug) {
      navigate(`/destinations/${targetSlug}`);
    }
  };

  const handleBookNow = (e, destItem) => {
    e.preventDefault();
    e.stopPropagation();
    const name = destItem[1];
    const price = destItem[4] || '₹2,999';
    selectBooking({
      to: name,
      trip: 'Outstation Destination Tour',
      vehicle: 'Swift Dzire / Etios (Sedan 4-Seater)',
      price: price
    });
    setPayModalData({ name, price });
  };

  return (
    <main className="page destinations-main-page">
      <SEO
        title="Pilgrimage Destinations from Tirupati – Sacred Temples & Hill Towns"
        description="Explore popular holy shrines and tourist destinations around Tirupati including Tirumala, Srikalahasti, Kanipakam, Sripuram Golden Temple, and Arunachalam."
        canonical="https://taxi-in-tirupati.com/destinations"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxi-in-tirupati.com/' },
            { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://taxi-in-tirupati.com/destinations' }
          ]
        }}
      />
      {/* HERO BANNER WITH DESTINATION SELECTION & BOOKING BUTTON */}
      <section 
        className="destinations-hero-section"
        style={{ backgroundImage: `linear-gradient(135deg, rgba(6, 12, 44, 0.94) 0%, rgba(12, 24, 94, 0.88) 100%), url(${images.place})` }}
      >
        <div className="dest-hero-inner">
          <span className="dest-hero-badge">
            <Sparkles size={14} /> SACRED PILGRIMAGE DESTINATIONS & TOUR CIRCUITS
          </span>
          <h1>Every stop tells a sacred story.</h1>
          <p>
            Explore handpicked temple circuits, historical landmarks, and outstation pilgrimage destinations from Tirupati.
          </p>

          {/* DYNAMIC DESTINATION SELECTOR BAR */}
          {allDestinations.length > 0 && (
            <div className="dest-hero-booking-card">
              <div className="dest-select-group">
                <label htmlFor="hero-dest-select">
                  <MapPin size={13} /> Select Pilgrimage Destination
                </label>
                <select 
                  id="hero-dest-select"
                  className="dest-select-field"
                  value={selectedDestSlug || allDestinations[0]?.[0]}
                  onChange={(e) => setSelectedDestSlug(e.target.value)}
                >
                  {allDestinations.map(d => (
                    <option key={d[0]} value={d[0]}>
                      {d[1]} (from {d[4]})
                    </option>
                  ))}
                </select>
              </div>

              <button 
                type="button" 
                className="dest-hero-book-btn"
                onClick={handleHeroExplore}
              >
                <span>View Route Guide</span>
                <ArrowRight size={15} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SEARCH AND COUNTS FILTER BAR */}
      <div className="destinations-controls-bar">
        <div className="dest-search-box">
          <Search size={18} className="dest-search-icon" />
          <input
            type="text"
            placeholder="Search pilgrimage destinations (e.g. Tirumala, Chennai, Pondicherry, Rameswaram)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="dest-search-input"
          />
          {searchTerm && (
            <button 
              type="button" 
              className="dest-clear-btn"
              onClick={() => setSearchTerm('')}
            >
              Clear
            </button>
          )}
        </div>
        <div className="dest-count-pill">
          Showing <strong>{filteredDestinations.length}</strong> of {allDestinations.length} Destinations
        </div>
      </div>

      {/* CARDS LIST SECTION */}
      <div className="destinations-page-section">
        {filteredDestinations.length === 0 ? (
          <div className="dest-empty-state">
            <Compass size={40} className="empty-icon" />
            <h3>No destinations match your search</h3>
            <p>Try searching for a different sacred place or reset the search filter.</p>
            <button 
              type="button" 
              className="button"
              onClick={() => setSearchTerm('')}
            >
              Show All Destinations
            </button>
          </div>
        ) : (
          <div className="destinations-grid-container">
            {filteredDestinations.map((d, i) => (
              <ScrollReveal key={d[0]} direction="up" delay={i * 0.03}>
                <article className="dest-card">
                  <div className="dest-card-image-wrapper">
                    <img src={d[3]} alt={d[1]} className="dest-card-img" loading="lazy" />
                    <span className="dest-price-badge">
                      From {d[4]}
                    </span>
                    <span className="dest-number-chip">
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </span>
                  </div>

                  <div className="dest-card-content">
                    <div className="dest-card-header">
                      <span className="dest-route-eyebrow">
                        <Compass size={12} /> SACRED PILGRIMAGE ROUTE
                      </span>
                      <h3 className="dest-title">{d[1]}</h3>
                    </div>

                    <p className="dest-description">{d[2]}</p>

                    <div className="dest-actions-grid">
                      <Link to={`/destinations/${d[0]}`} className="dest-btn-details">
                        <span>Read Guide</span>
                        <ArrowRight size={14} />
                      </Link>

                      <button
                        type="button"
                        className="dest-btn-book"
                        onClick={(e) => handleBookNow(e, d)}
                      >
                        Book Cab
                      </button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      {/* SECURE EASEBUZZ ONLINE PAYMENT MODAL */}
      {payModalData && (
        <EasebuzzModal
          isOpen={Boolean(payModalData)}
          onClose={() => setPayModalData(null)}
          initialData={{
            type: 'tour',
            service: `${payModalData.name} Tour Package`,
            amount: '1000',
            fullAmount: payModalData.price || '2999',
            route: `Tirupati to ${payModalData.name}`
          }}
        />
      )}
    </main>
  );
}

