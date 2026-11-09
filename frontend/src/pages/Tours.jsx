import React, { useState } from 'react';
import { Sparkles, Calendar, MapPin, CheckCircle2, AlertCircle, MessageCircle, Clock, Phone, ShieldCheck, Car, CreditCard, Compass, Users, Clock3 } from 'lucide-react';
import { images, whatsapp, phone } from '../data/siteData';
import { packageDetails } from '../data/packageDetails';
import Page from './PageTemplate';
import StatsBanner from '../components/StatsBanner';
import ScrollReveal from '../components/ScrollReveal';
import EasebuzzModal from '../components/EasebuzzModal';
import { useData } from '../context/DataContext';
import SEO from '../components/SEO';
import './Tours.css';

const buildAllVehiclePrices = (pricesArray, startingPriceStr, fleetsList = []) => {
  const baseNum = parseInt((startingPriceStr || '3500').replace(/[^0-9]/g, ''), 10) || 3500;

  const activeFleets = (fleetsList && fleetsList.length > 0) ? fleetsList : [
    { name: 'Sedan (Dzire / Etios)', seats: 4 },
    { name: 'Maruti Ertiga (MUV)', seats: 6 },
    { name: 'Toyota Innova Crysta', seats: 7 },
    { name: 'Toyota Hycross', seats: 7 },
    { name: 'Toyota Fortuner', seats: 7 },
    { name: 'Tempo Traveller 12 Seater', seats: 12 },
    { name: 'Urbania 12 Seater', seats: 12 },
    { name: 'Tempo Traveller 16 Seater', seats: 16 },
    { name: 'Urbania 16 Seater', seats: 16 },
    { name: 'Tempo Traveller 20 Seater', seats: 20 },
    { name: 'Mini Bus 27 Seater', seats: 27 },
    { name: 'Bus 40 Seater', seats: 40 },
    { name: 'Bus 45 Seater', seats: 45 }
  ];

  return activeFleets.map(v => {
    const vName = v.name || v.id || 'Vehicle';
    const vLower = vName.toLowerCase();

    let matchedFare = null;
    if (pricesArray && pricesArray.length > 0) {
      const match = pricesArray.find(([pName]) => {
        const pLower = pName.toLowerCase();
        return vLower.includes(pLower) || pLower.includes(vLower) ||
          (vLower.includes('sedan') && (pLower.includes('dzire') || pLower.includes('etios') || pLower.includes('sedan'))) ||
          (vLower.includes('ertiga') && pLower.includes('ertiga')) ||
          (vLower.includes('innova') && pLower.includes('innova')) ||
          (vLower.includes('hycross') && pLower.includes('hycross')) ||
          (vLower.includes('fortuner') && pLower.includes('fortuner')) ||
          (vLower.includes('tempo') && vLower.includes('12') && pLower.includes('12')) ||
          (vLower.includes('urbania') && vLower.includes('12') && pLower.includes('12')) ||
          (vLower.includes('tempo') && vLower.includes('16') && pLower.includes('16')) ||
          (vLower.includes('urbania') && vLower.includes('16') && pLower.includes('16')) ||
          (vLower.includes('20') && pLower.includes('20')) ||
          (vLower.includes('27') && pLower.includes('27')) ||
          (vLower.includes('40') && pLower.includes('40')) ||
          (vLower.includes('45') && pLower.includes('45'));
      });
      if (match) matchedFare = match[1];
    }

    if (!matchedFare) {
      let mult = 1.0;
      if (vLower.includes('ertiga')) mult = 1.25;
      else if (vLower.includes('crysta') || vLower.includes('innova')) mult = 1.45;
      else if (vLower.includes('hycross')) mult = 1.7;
      else if (vLower.includes('fortuner')) mult = 2.3;
      else if (vLower.includes('urbania') && vLower.includes('12')) mult = 2.5;
      else if (vLower.includes('tempo') && vLower.includes('12')) mult = 1.6;
      else if (vLower.includes('urbania') && vLower.includes('16')) mult = 2.7;
      else if (vLower.includes('tempo') && vLower.includes('16')) mult = 1.95;
      else if (vLower.includes('tempo') && vLower.includes('20')) mult = 2.4;
      else if (vLower.includes('27')) mult = 3.4;
      else if (vLower.includes('40')) mult = 4.2;
      else if (vLower.includes('45')) mult = 4.8;
      else if (v.seats > 20) mult = 3.5;
      else if (v.seats > 10) mult = 2.0;
      else if (v.seats > 6) mult = 1.5;

      const calcPrice = Math.round((baseNum * mult) / 50) * 50;
      matchedFare = `₹${calcPrice.toLocaleString('en-IN')}`;
    }

    let shortName = vName
      .replace(/\(MUV\)|\(Sedan\)|\(SUV\)/i, '')
      .replace(/\(Dzire\s*\/\s*Etios\)/i, '4')
      .replace(/Seater/i, '')
      .trim();

    return [shortName, matchedFare, vName];
  });
};

export default function Tours() {
  const { tours, fleets, selectBooking } = useData();
  const [filter, setFilter] = useState('All');
  const [selectedPayTour, setSelectedPayTour] = useState(null);

  const durationOptions = [
    { key: 'All', label: 'All Packages' },
    { key: '1-Day', label: '1 Day' },
    { key: '2-Days', label: '2 Days' },
    { key: '3-Days', label: '3 Days' },
    { key: '4-Days', label: '4 Days' },
    { key: '5+Days', label: '5+ Days' }
  ];

  const parseDurationDays = (dStr) => {
    if (!dStr) return 1;
    const match = dStr.match(/(\d+)\s*Days?/i);
    if (match) return parseInt(match[1], 10);
    if (dStr.toLowerCase().includes('full day') || dStr.toLowerCase().includes('1 day')) return 1;
    return 1;
  };

  const sortedPackages = [...tours].sort((a, b) => parseDurationDays(a[1]) - parseDurationDays(b[1]));

  const filteredPackages = sortedPackages.filter(t => {
    const days = parseDurationDays(t[1]);
    if (filter === 'All') return true;
    if (filter === '1-Day') return days === 1;
    if (filter === '2-Days') return days === 2;
    if (filter === '3-Days') return days === 3;
    if (filter === '4-Days') return days === 4;
    if (filter === '5+Days') return days >= 5;
    return true;
  });

  const oneDayCount = tours.filter(t => parseDurationDays(t[1]) === 1).length;
  const multiDayCount = tours.filter(t => parseDurationDays(t[1]) > 1).length;
  const startingPrice = tours.find(t => t[3])?.[ 3] || '₹3,500';

  return (
    <Page
      eyebrow="PILGRIMAGE & TOUR PACKAGES"
      title="Curated Journeys of Faith & Discovery."
      text="Book private cab tour packages for Tirupati Balaji darshan, temple circuits across Andhra Pradesh & Tamil Nadu, and customized South India holiday getaways."
      image={images.hero}
    >
      <SEO
        title="Tirupati Tour Packages – Temple Pilgrimage & South India Cab Tours"
        description="Book 1-day to 7-day Tirupati tour packages for Tirumala darshan, Srikalahasti, Kanipakam, Arunachalam, Madurai & South India temple circuits. Private AC cabs with driver."
        canonical="https://www.dhakshinyatourandtravels.in/tours"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dhakshinyatourandtravels.in/' },
            { '@type': 'ListItem', position: 2, name: 'Tours', item: 'https://www.dhakshinyatourandtravels.in/tours' }
          ]
        }}
      />

      <section className="content" id="tours-content">

        {/* PRICING STRIP */}
        <div className="fleet-pricing-strip">
          <div className="fleet-strip-card">
            <div className="fleet-strip-badge">
              <Clock size={13} className="gold-icon" />
              <span>1-DAY PACKAGES</span>
            </div>
            <div className="fleet-strip-meta">{oneDayCount} ITINERARIES</div>
            <div className="fleet-strip-price">
              <span className="from-txt">From</span>
              <strong className="amount">{startingPrice}</strong>
            </div>
            <div className="fleet-strip-perk">
              <CheckCircle2 size={12} className="check-icon" />
              <span>Tirupati Local Temple Circuits</span>
            </div>
          </div>

          <div className="fleet-strip-card featured">
            <div className="strip-highlight-tag">POPULAR</div>
            <div className="fleet-strip-badge">
              <Compass size={13} className="gold-icon" />
              <span>MULTI-DAY TOURS</span>
            </div>
            <div className="fleet-strip-meta">{multiDayCount} ITINERARIES</div>
            <div className="fleet-strip-price">
              <span className="from-txt">From</span>
              <strong className="amount gold-gradient-text">₹6,500</strong>
            </div>
            <div className="fleet-strip-perk">
              <CheckCircle2 size={12} className="check-icon" />
              <span>South India Temple Circuits</span>
            </div>
          </div>

          <div className="fleet-strip-card">
            <div className="fleet-strip-badge">
              <Users size={13} className="gold-icon" />
              <span>GROUP TOURS</span>
            </div>
            <div className="fleet-strip-meta">TEMPO / BUS OPTIONS</div>
            <div className="fleet-strip-price">
              <span className="from-txt">Custom</span>
              <strong className="amount">Quotation</strong>
            </div>
            <div className="fleet-strip-perk">
              <CheckCircle2 size={12} className="check-icon" />
              <span>12 to 45 Seater Vehicles</span>
            </div>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="tours-sticky-filter-wrapper">
          <div className="tours-filter-bar">
            {durationOptions.map(opt => {
              const count = opt.key === 'All'
                ? tours.length
                : tours.filter(t => {
                    const d = parseDurationDays(t[1]);
                    if (opt.key === '1-Day') return d === 1;
                    if (opt.key === '2-Days') return d === 2;
                    if (opt.key === '3-Days') return d === 3;
                    if (opt.key === '4-Days') return d === 4;
                    if (opt.key === '5+Days') return d >= 5;
                    return false;
                  }).length;

              if (opt.key !== 'All' && count === 0) return null;

              return (
                <button
                  key={opt.key}
                  type="button"
                  className={`tours-filter-btn ${filter === opt.key ? 'active' : ''}`}
                  onClick={() => {
                    setFilter(opt.key);
                    const el = document.getElementById('tours-cards-section');
                    if (el) {
                      const rect = el.getBoundingClientRect();
                      if (rect.top < 130) {
                        window.scrollTo({ top: Math.max(0, window.pageYOffset + rect.top - 140), behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {opt.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* TOUR CARDS GRID */}
        <section className="tours-section" id="tours-cards-section">
          <div className="tours-grid">
            {filteredPackages.map((pkg, idx) => {
              const title = pkg[0];
              const duration = pkg[1];
              const route = pkg[2];
              const price = pkg[3];
              const image = pkg[4];
              const details = packageDetails[title] || {
                included: 'Includes Tolls, Parking, Driver Batta',
                excluded: 'Excludes Accommodation, Food, Darshan Tickets & Personal Expenses'
              };
              const allVehiclePrices = buildAllVehiclePrices(details.prices, price, fleets);

              return (
                <ScrollReveal key={title + idx} direction="up" delay={idx * 0.05}>
                  <article className="tour-card compact-tour-card">
                    <div className="tour-card-header compact-header">
                      <img src={image} alt={title} loading="lazy" />
                      <span className="tour-duration-badge">
                        <Clock size={12} /> {duration}
                      </span>
                      <div className="tour-price-badge">
                        <small>Starting from</small>
                        <strong>{price}</strong>
                      </div>
                    </div>

                    <div className="tour-card-body compact-body">
                      <div className="compact-title-row">
                        <span className="tour-category-tag">PILGRIMAGE PACKAGE</span>
                        <h3>{title}</h3>
                      </div>

                      <div className="compact-route-box">
                        <MapPin size={12} className="route-icon" />
                        <span className="route-label">Route:</span>
                        <span className="route-text" title={route}>{route}</span>
                      </div>

                      <div className="compact-pricing-box">
                        <span className="pricing-box-label">
                          <Car size={12} /> Vehicles & Buses Fare Rates:
                        </span>
                        <div className="compact-prices-grid">
                          {allVehiclePrices.map(([shortLabel, fare]) => (
                            <div className="compact-price-pill" key={shortLabel}>
                              <span className="v-label">{shortLabel}</span>
                              <strong className="v-fare">{fare}</strong>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="compact-inc-exc-rows">
                        <div className="compact-inc-row">
                          <CheckCircle2 size={12} className="inc-icon" />
                          <span><strong>Includes:</strong> {details.included || 'Tolls, Parking, Driver Batta'}</span>
                        </div>
                        <div className="compact-exc-row">
                          <AlertCircle size={12} className="exc-icon" />
                          <span><strong>Excludes:</strong> {details.excluded || 'Accommodation, Food, Darshan Tickets & Personal Expenses'}</span>
                        </div>
                      </div>

                      <div className="tour-card-actions compact-actions">
                        <a
                          href={`${whatsapp}?text=${encodeURIComponent(`Hello! I want to book ${title} (${duration}) starting from ${price}. Please share availability.`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="tour-book-btn wa-btn"
                        >
                          <MessageCircle size={14} /> WhatsApp
                        </a>
                        <button
                          type="button"
                          className="tour-book-btn pay-btn"
                          onClick={() => {
                            selectBooking({ to: title, trip: 'Outstation Tour', vehicle: 'Swift Dzire / Etios (Sedan 4-Seater)', price });
                            setSelectedPayTour({ type: 'tour', title, price, duration, prices: allVehiclePrices.map(([short, fare, full]) => [full || short, fare]), route });
                          }}
                        >
                          <CreditCard size={14} /> Book Cab 💳
                        </button>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        <StatsBanner title="Trusted Tour Package Operator" subtitle="WHY TRAVEL WITH US" />

        {/* TRUST FOOTER */}
        <div className="fleet-intro" style={{ marginTop: '2rem' }}>
          <div>
            <p className="eyebrow">OUR PROMISE</p>
            <h2>Every journey planned with care.</h2>
            <div className="fleet-pricing-info">
              <div className="fleet-pricing-info-row">
                <div className="fpi-item">
                  <ShieldCheck size={15} className="fpi-icon" />
                  <div>
                    <span className="fpi-label">All Inclusive</span>
                    <span className="fpi-value">Tolls, parking & driver batta included</span>
                  </div>
                </div>
                <div className="fpi-divider" />
                <div className="fpi-item">
                  <Clock3 size={15} className="fpi-icon" />
                  <div>
                    <span className="fpi-label">Flexible Timing</span>
                    <span className="fpi-value">Pickup at your preferred time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fleet-trust">
            <span><ShieldCheck size={15} /> Professional drivers</span>
            <span><Car size={15} /> AC vehicles</span>
            <span><Clock3 size={15} /> 24/7 support</span>
          </div>
        </div>

        {/* CUSTOM QUOTATION BANNER */}
        <section className="tours-custom-banner">
          <span className="custom-badge"><Sparkles size={14} /> TAILOR-MADE ITINERARIES</span>
          <h2>Want a Tailor-Made Custom Tour Package?</h2>
          <p>
            We can customize your tour route, vehicle model, departure timings, and hotel arrangements for family groups, corporate delegations, and large pilgrim groups.
          </p>
          <div className="tours-custom-actions">
            <a
              href={`${whatsapp}?text=${encodeURIComponent('Hi Taxi in Tirupati! I want to request a customized tour itinerary for my group.')}`}
              target="_blank"
              rel="noreferrer"
              className="button hero-wa-btn"
            >
              <MessageCircle size={18} /> Request Custom Quotation
            </a>
            <a href={`tel:${phone}`} className="button hero-call-btn">
              <Phone size={16} /> Call Manager: {phone}
            </a>
          </div>
        </section>

      </section>

      {selectedPayTour && (
        <EasebuzzModal
          isOpen={Boolean(selectedPayTour)}
          onClose={() => setSelectedPayTour(null)}
          initialData={{
            type: 'tour',
            service: selectedPayTour.title,
            duration: selectedPayTour.duration,
            prices: selectedPayTour.prices,
            route: selectedPayTour.route,
            amount: '1000',
            fullAmount: selectedPayTour.price || '2500'
          }}
        />
      )}
    </Page>
  );
}
