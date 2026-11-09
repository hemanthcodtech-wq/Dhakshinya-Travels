import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, MapPin, CheckCircle2, XCircle, Car, Phone, 
  MessageCircle, Sparkles, ShieldCheck, ArrowRight, ChevronRight, 
  CreditCard, Navigation, ChevronDown, Award, Users, Compass,
  Wind, Luggage, Fuel, Check
} from 'lucide-react';
import { destinations, phone, whatsapp } from '../data/siteData';
import { getVehicleInfo } from '../data/packageData';
import { fleet } from '../data/fleetData';
import { useData } from '../context/DataContext';
import EasebuzzModal from '../components/EasebuzzModal';
import SEO from '../components/SEO';
import './DestinationDetail.css';
import './TariffCardTheme.css';

export default function DestinationDetail() {
  const { destinations: contextDestinations, selectBooking, fleets } = useData();
  const { slug } = useParams();
  const [payModalData, setPayModalData] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const destinationsList = (contextDestinations && contextDestinations.length > 0)
    ? contextDestinations
    : destinations;

  const dest = destinationsList.find(d => {
    if (Array.isArray(d)) return d[0] === slug;
    return d.slug === slug || d.id === slug;
  }) || destinationsList.find(d => {
    if (Array.isArray(d)) return d[0] === 'tirumala';
    return d.slug === 'tirumala' || d.id === 'tirumala';
  }) || destinationsList[0];

  const destSlug = Array.isArray(dest) ? dest[0] : (dest?.slug || dest?.id || slug);
  const destName = Array.isArray(dest) ? dest[1] : (dest?.name || 'Destination');
  const destDesc = Array.isArray(dest) ? dest[2] : (dest?.desc || dest?.description || '');
  const destImage = Array.isArray(dest) ? dest[3] : (dest?.image || '');
  const destPrice = Array.isArray(dest) ? dest[4] : (dest?.price || '₹2,999');

  const handleBookDestination = (name, price, vehicleName) => {
    const selectedVehicle = vehicleName || 'Swift Dzire / Etios (Sedan 4-Seater)';
    selectBooking({
      to: destName,
      trip: 'Outstation Tour',
      vehicle: selectedVehicle,
      price: price
    });
    setPayModalData({ 
      name, 
      price, 
      vehicle: selectedVehicle,
      route: `Tirupati to ${destName}`
    });
  };

  const whatsappUrl = `${whatsapp}?text=${encodeURIComponent(`Hi, I would like to book or inquire about the ${destName} Tour starting from ${destPrice}. Please share vehicle availability.`)}`;

  const faqs = [
    {
      q: `What is included in the ${destName} cab package?`,
      a: `The package includes a private AC vehicle with a dedicated driver, fuel charges for the entire round trip from Tirupati, and basic route guidance.`
    },
    {
      q: `Where will the driver pick us up for ${destName}?`,
      a: `We provide 24/7 doorstep pickup from Tirupati Railway Station, Tirupati Airport, hotels, or your residence in Tirupati.`
    },
    {
      q: `Can we visit additional nearby temples on the ${destName} route?`,
      a: `Yes! Our itineraries are flexible. You can request customized en-route stops when booking via WhatsApp or directly with your assigned driver.`
    },
    {
      q: `How do I confirm my booking for ${destName}?`,
      a: `You can instantly reserve your cab by paying a ₹1,000 advance token fee via our secure payment gateway or contacting us on WhatsApp.`
    }
  ];

  // Map destination specific indicative vehicle rates dynamically from admin fleets
  const basePriceNum = parseInt(destPrice.replace(/[^0-9]/g, '')) || 2999;

  const activeFleets = (fleets && fleets.length > 0) ? fleets : fleet;
  const vehicleRates = activeFleets.map(v => {
    const vName = v.name || v.id;
    const vLower = vName.toLowerCase();

    let mult = 1.0;
    if (vLower.includes('ertiga')) mult = 1.25;
    else if (vLower.includes('crysta') || vLower.includes('innova')) mult = 1.55;
    else if (vLower.includes('hycross')) mult = 1.9;
    else if (vLower.includes('fortuner')) mult = 2.5;
    else if (vLower.includes('urbania') && (vLower.includes('16') || vLower.includes('17'))) mult = 2.9;
    else if (vLower.includes('urbania')) mult = 2.6;
    else if (vLower.includes('tempo') && (vLower.includes('20') || vLower.includes('21'))) mult = 2.7;
    else if (vLower.includes('tempo') && (vLower.includes('16') || vLower.includes('17'))) mult = 2.2;
    else if (vLower.includes('tempo') || vLower.includes('12')) mult = 1.8;
    else if (vLower.includes('27') || vLower.includes('mini bus')) mult = 3.4;
    else if (vLower.includes('40')) mult = 4.2;
    else if (vLower.includes('45')) mult = 4.8;
    else if (v.seats > 20) mult = 3.8;
    else if (v.seats > 10) mult = 2.2;
    else if (v.seats > 5) mult = 1.4;

    const calculatedPrice = Math.round((basePriceNum * mult) / 50) * 50;
    return {
      name: vName,
      price: `₹${calculatedPrice.toLocaleString('en-IN')}`,
      vehicleObj: v
    };
  });

  return (
    <div className="dest-detail-page">
      <SEO
        title={`${destName} Tour Package from Tirupati – Book AC Cab`}
        description={`Book a private cab from Tirupati to ${destName}. ${destDesc} Starting from ${destPrice}. 24/7 doorstep pickup, verified drivers, transparent pricing.`}
        canonical={`/destinations/${destSlug}`}
        image={destImage}
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'TouristAttraction',
              name: destName,
              description: destDesc,
              url: `https://www.dhakshinyatourandtravels.in/destinations/${destSlug}`
            },
            {
              '@type': 'FAQPage',
              mainEntity: faqs.map(f => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a }
              }))
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dhakshinyatourandtravels.in/' },
                { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://www.dhakshinyatourandtravels.in/destinations' },
                { '@type': 'ListItem', position: 3, name: destName, item: `https://www.dhakshinyatourandtravels.in/destinations/${destSlug}` }
              ]
            }
          ]
        }}
      />
      {/* BREADCRUMB */}
      <nav className="dest-breadcrumb" aria-label="Breadcrumb">
        <div className="dest-container">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to="/destinations">Destinations</Link>
          <ChevronRight size={14} />
          <span>{destName}</span>
        </div>
      </nav>

      {/* HERO BANNER SECTION */}
      <section 
        className="dest-hero-section"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.82) 100%), url(${destImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="dest-container dest-hero-grid">
          <motion.div 
            className="dest-hero-content"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="dest-eyebrow-badge">
              <Compass size={14} /> SACRED PILGRIMAGE DESTINATION
            </span>
            <h1>{destName} Tour Package</h1>
            
            <div className="dest-key-meta">
              <span className="meta-item"><Clock size={16} /> <strong>Flexible Timings</strong></span>
              <span className="meta-item"><MapPin size={16} /> <strong>Doorstep Tirupati Pickup</strong></span>
              <span className="meta-item price-highlight"><Sparkles size={16} /> Starts at <strong>{destPrice}</strong></span>
            </div>

            <p className="dest-hero-desc">
              {destDesc} Enjoy a private, comfortable cab journey from Tirupati with courteous local drivers who know the best routes and temple schedules.
            </p>

            <div className="dest-route-corridor">
              <div className="corridor-title">
                <Navigation size={15} /> <span>Route Corridor</span>
              </div>
              <p className="corridor-text">Tirupati Pickup → {destName} Sightseeing & Temple Darshan → Tirupati Drop</p>
            </div>

            <div className="dest-hero-actions">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-hero-whatsapp">
                <MessageCircle size={18} /> Book via WhatsApp
              </a>
              <button 
                type="button"
                className="btn-hero-pay"
                onClick={() => handleBookDestination(`${destName} Tour`, destPrice)}
              >
                <CreditCard size={18} /> Book ₹1,000 Advance 💳
              </button>
              <a href={`tel:${phone}`} className="btn-hero-call">
                <Phone size={16} /> Call Driver/Manager
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="dest-hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="hero-card-image">
              <img src={destImage} alt={destName} />
              <div className="image-badge">★ Top Destination</div>
              <div className="trust-pill"><ShieldCheck size={14} /> Verified AC Cab</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TARIFF / VEHICLE SELECTION SECTION */}
      <section className="dest-pricing-section">
        <div className="dest-container">
          <div className="section-header">
            <span className="sub-tag">TRANSPARENT TARIFFS</span>
            <h2>Select Vehicle for {destName} Tour</h2>
            <p>Choose your vehicle based on group size and luxury preferences.</p>
          </div>

          <div className="vehicle-tariff-grid">
            {vehicleRates.map(({ name: vehicle, price }, i) => {
              const vInfo = getVehicleInfo(vehicle, fleets);
              const waMessage = `Hi, I want to book ${vehicle} for ${destName} Tour at ${price}. Please confirm availability.`;
              const featuresList = Array.isArray(vInfo.features) ? vInfo.features : (vInfo.features ? [vInfo.features] : ['AC', 'Music', 'USB']);

              return (
                <motion.article 
                  className="tariff-card tour-fleet-style-card"
                  key={vehicle}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <div className="tour-vehicle-media">
                    <img src={vInfo.image} alt={`${vehicle} for ${destName}`} loading="lazy" />
                    <span className="tour-media-type">{vInfo.category || 'AC CAB'}</span>
                    <div className="tour-media-bottom">
                      <span className="tour-media-rate">{price}</span>
                      <span className="tour-media-seats"><Users size={13} /> {vInfo.seats || '4+1'}</span>
                    </div>
                  </div>

                  <div className="tour-vehicle-info">
                    <div className="tour-vehicle-heading">
                      <div>
                        <span className="tour-vehicle-subcat">{vInfo.category || 'CAB SERVICE'}</span>
                        <h3>{vehicle}</h3>
                      </div>
                      <span className="tour-vehicle-capacity">{vInfo.seats ? `${vInfo.seats} seats` : 'AC CAB'}</span>
                    </div>

                    {vInfo.use && (
                      <p className="tour-vehicle-summary">{vInfo.use}</p>
                    )}

                    <div className="tour-vehicle-features">
                      {featuresList.map(feature => (
                        <span key={feature}><Wind size={12} /> {feature}</span>
                      ))}
                      {vInfo.bags && <span><Luggage size={12} /> {vInfo.bags} bags</span>}
                      {vInfo.fuel && <span><Fuel size={12} /> {vInfo.fuel}</span>}
                    </div>

                    <div className="tour-vehicle-rate-pill">
                      <div className="rate-pill-left">
                        <small>Indicative Tour Fare</small>
                        <strong>{price}</strong>
                      </div>
                      <div className="rate-pill-badge">
                        <Check size={13} /> Tolls & Driver Incl.
                      </div>
                    </div>

                    <div className="tour-vehicle-actions">
                      <button 
                        type="button" 
                        className="tour-btn-book"
                        onClick={() => handleBookDestination(`${destName} (${vehicle})`, price, vehicle)}
                      >
                        Book ₹1,000 Token 💳
                      </button>
                      <a 
                        href={`${whatsapp}?text=${encodeURIComponent(waMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tour-btn-wa"
                      >
                        <MessageCircle size={15}/> WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ITINERARY & INCLUSIONS GRID */}
      <section className="dest-details-main">
        <div className="dest-container main-grid">
          
          {/* SIGHTSEEING HIGHLIGHTS */}
          <div className="itinerary-column">
            <div className="column-title">
              <Calendar size={22} />
              <h2>{destName} Tour Highlights & Sightseeing</h2>
            </div>

            <div className="itinerary-timeline">
              <div className="timeline-item">
                <div className="timeline-badge">STEP 1</div>
                <div className="timeline-content">
                  <h3>Tirupati Doorstep Pickup</h3>
                  <p>Our driver picks you up from Tirupati Railway Station, Airport, or your hotel at your convenient time.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-badge">STEP 2</div>
                <div className="timeline-content">
                  <h3>Scenic Drive to {destName}</h3>
                  <p>Enjoy a comfortable, smooth ride in an air-conditioned vehicle with complimentary bottled water guidance.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-badge">STEP 3</div>
                <div className="timeline-content">
                  <h3>Temple Darshan & Sightseeing</h3>
                  <p>Visit the main temple complex, historical heritage points, and local markets at your own pace.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-badge">STEP 4</div>
                <div className="timeline-content">
                  <h3>Return Drop at Tirupati</h3>
                  <p>Relax as our driver safely brings you back to your Tirupati stay or transit point.</p>
                </div>
              </div>
            </div>

            {/* INCLUSIONS & EXCLUSIONS */}
            <div className="inc-exc-box">
              <div className="inc-block">
                <h3><CheckCircle2 size={18} className="icon-inc" /> What’s Included</h3>
                <p>Private AC vehicle with driver, fuel for the route corridor, Tirupati pickup & drop, and route assistance.</p>
              </div>
              <div className="exc-block">
                <h3><XCircle size={18} className="icon-exc" /> What’s Excluded</h3>
                <p>Darshan tickets, temple entry fees, toll gates, parking charges, meals, accommodation, and personal expenses.</p>
              </div>
            </div>
          </div>

          {/* SIDEBAR BOOKING WIDGET */}
          <div className="sidebar-column">
            <div className="sidebar-sticky-card">
              <div className="card-top">
                <span className="sidebar-badge">QUICK TOUR BOOKING</span>
                <div className="sidebar-price">
                  <small>Package Starts At</small>
                  <h3>{destPrice}</h3>
                </div>
              </div>

              <div className="sidebar-perks">
                <div><ShieldCheck size={16} /> <span>100% Guaranteed Doorstep Pickup</span></div>
                <div><Award size={16} /> <span>Transparent Rates & Verified Cabs</span></div>
                <div><Clock size={16} /> <span>24x7 Customer Support Line</span></div>
              </div>

              <div className="sidebar-actions">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="sidebar-wa-btn">
                  <MessageCircle size={18} /> Book on WhatsApp
                </a>
                <button 
                  type="button" 
                  className="sidebar-pay-btn"
                  onClick={() => handleBookDestination(`${destName} Tour`, destPrice)}
                >
                  <CreditCard size={18} /> Book ₹1,000 Advance Token 💳
                </button>
                <a href={`tel:${phone}`} className="sidebar-call-btn">
                  <Phone size={16} /> Call Driver/Manager: {phone}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="dest-faq-section">
        <div className="dest-container">
          <div className="section-header">
            <span className="sub-tag">GOT QUESTIONS?</span>
            <h2>Frequently Asked Questions for {destName}</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${activeFaq === idx ? 'open' : ''}`}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className="faq-chevron" />
                </div>
                {activeFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EASEBUZZ PAYMENT MODAL */}
      {payModalData && (
        <EasebuzzModal 
          isOpen={Boolean(payModalData)}
          onClose={() => setPayModalData(null)}
          initialData={{
            type: 'tour',
            service: `${payModalData.name}`,
            vehicle: payModalData.vehicle,
            route: payModalData.route || `Tirupati to ${destName}`,
            amount: '1000',
            fullAmount: payModalData.price || '2999'
          }}
        />
      )}
    </div>
  );
}
