import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Clock3, MapPin, Phone, MessageCircle, 
  Route as RouteIcon, ShieldCheck, Landmark, Info, Sparkles, Car, 
  Users, Fuel, ChevronDown, Award, Calendar, Navigation, CreditCard,
  Wind, Luggage, Check
} from 'lucide-react';
import { phone, whatsappBooking, vehicles } from '../data/siteData';
import { getCabRoute } from '../data/cabRoutes';
import { srikalahastiContent } from '../data/srikalahastiContent';
import { cabRouteContent } from '../data/cabRouteContent';
import { getVehicleInfo } from '../data/packageData';
import StatsBanner from '../components/StatsBanner';
import EasebuzzModal from '../components/EasebuzzModal';
import SEO from '../components/SEO';
import { useData } from '../context/DataContext';
import './CabRoutePage.css';
import './TariffCardTheme.css';

function DetailedRouteContent({ content, route }) {
  const { fleets } = useData();
  const [activeTab, setActiveTab] = useState('vehicles');
  const [payCar, setPayCar] = useState(null);
  const fleet = route.prices?.length ? route.prices : vehicles.slice(0, 5).map(v => [v[0], v[4]]);
  const stops = route.route.split('→').map(s => s.trim());

  return (
    <>
      {/* Visual Route Timeline & Highlights Section */}
      <section className="section route-timeline-section">
        <div className="section-header-centered">
          <span className="badge-pill"><Navigation size={13} /> JOURNEY CORRIDOR</span>
          <h2>Route Map & Travel Experience</h2>
          <p>Detailed road overview from Tirupati to {route.shortTitle.split('→')[1]?.trim() || 'destination'}</p>
        </div>

        <div className="route-guide-grid">
          <div className="timeline-card">
            <div className="card-badge"><RouteIcon size={16} /> Route Stops</div>
            <div className="route-timeline">
              {stops.map((stop, i) => (
                <div className="timeline-item" key={i}>
                  <div className={`timeline-dot ${i === 0 ? 'start' : i === stops.length - 1 ? 'end' : 'stop'}`}>
                    <span>{i + 1}</span>
                  </div>
                  <div className="timeline-content">
                    <h4>{stop}</h4>
                    <p>{i === 0 ? 'Starting Point • Pickup from Tirupati Airport / Railway Station / Hotel' : i === stops.length - 1 ? 'Final Destination • Temple Shrine / Sightseeing Drop' : 'En-route Stop / Highway Connection'}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="route-desc-text">{content.routeText}</p>
          </div>

          <div className="highlights-card">
            <div className="highlights-header">
              <Sparkles size={18} />
              <h3>Journey Highlights</h3>
            </div>
            <div className="highlights-list">
              {content.highlights.map(x => (
                <div key={x} className="highlight-chip">
                  <CheckCircle2 size={16} />
                  <span>{x}</span>
                </div>
              ))}
            </div>
            <div className="driver-guarantee-box">
              <ShieldCheck size={20} />
              <div>
                <strong>Experienced Outstation Driver</strong>
                <p>Well-versed with local temple routes, state border procedures, and safe highway driving.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temple Experience & Information */}
      <section className="section longform-section pale">
        <div className="temple-experience-card">
          <div className="longform-copy">
            <span className="badge-pill gold"><Landmark size={13} /> {content.eyebrow}</span>
            <h2>{content.templeTitle}</h2>
            <p className="lead-text">{content.templeText}</p>

            <div className="info-strip">
              {content.facts.map(([label, value]) => (
                <div key={label} className="fact-box">
                  <Info size={16} />
                  <div>
                    <b>{label}</b>
                    <small>{value}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Fleet & Tariff Section */}
      <section className="section longform-section" id="tariff">
        <div className="section-header-centered">
          <span className="badge-pill no-box"><Car size={13} /> OUTSTATION FLEET & FARES</span>
          <h2>Select Your Preferred Vehicle</h2>
          <p>Clean, sanitized, comfortable AC cabs with professional drivers</p>
        </div>

        <div className="fleet-card-grid enhanced-cab-fleet-grid">
          {(() => {
            const activeFleets = (fleets && fleets.length > 0) ? fleets : null;
            const baseSedanNum = parseInt((route.starting || route.prices?.[0]?.[1] || '2880').replace(/[^0-9]/g, ''), 10) || 2880;

            // Compute prices and vehicle info for every fleet vehicle
            const carList = (activeFleets || vehicles).map(v => {
              const vName = v.name || v[0] || v.id;
              const vLower = vName.toLowerCase();
              const vInfo = getVehicleInfo(vName, activeFleets);

              // Match predefined route price if available
              const foundPrice = route.prices?.find(([pName]) => {
                const pLower = pName.toLowerCase();
                return vLower.includes(pLower) || pLower.includes(vLower);
              });

              let priceStr = foundPrice ? foundPrice[1] : null;
              if (!priceStr) {
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
                else if ((v.seats || 4) > 20) mult = 3.8;
                else if ((v.seats || 4) > 10) mult = 2.2;
                else if ((v.seats || 4) > 5) mult = 1.4;

                const calc = Math.round((baseSedanNum * mult) / 50) * 50;
                priceStr = `₹${calc.toLocaleString('en-IN')}`;
              }

              const featuresList = Array.isArray(vInfo.features) ? vInfo.features : (vInfo.features ? [vInfo.features] : ['AC', 'Music', 'USB']);
              const isPopular = vLower.includes('ertiga') || vLower.includes('innova') || vLower.includes('crysta');

              return {
                name: vName,
                category: vInfo.category || v.category || (vInfo.seats > 10 ? 'TEMPO / MINIBUS' : vInfo.seats > 5 ? 'SUV / MUV' : 'AC SEDAN'),
                seats: vInfo.seats || v.seats || '4+1',
                bags: vInfo.bags || v.bags || '3',
                fuel: vInfo.fuel || '10 km/l',
                image: vInfo.image || v.image,
                use: vInfo.use,
                features: featuresList,
                price: priceStr,
                popular: isPopular
              };
            });

            const allComputedPrices = carList.map(c => [c.name, c.price]);

            return carList.map((car, idx) => {
              const waMessage = `Hi, I want to book a ${car.name} for ${route.title} at ${car.price}. Please confirm availability and driver pickup.`;

              return (
                <div className={`tariff-card tour-fleet-style-card ${car.popular ? 'featured' : ''}`} key={idx}>
                  <div className="tour-vehicle-media">
                    <img src={car.image} alt={`${car.name} for ${route.title}`} loading="lazy" />
                    <span className="tour-media-type">{car.category}</span>
                    <div className="tour-media-bottom">
                      <span className="tour-media-rate">{car.price}</span>
                      <span className="tour-media-seats"><Users size={13} /> {car.seats} Seats</span>
                    </div>
                  </div>

                  <div className="tour-vehicle-info">
                    <div className="tour-vehicle-heading">
                      <div>
                        <span className="tour-vehicle-subcat">{car.category}</span>
                        <h3>{car.name}</h3>
                      </div>
                      <span className="tour-vehicle-capacity">{car.seats ? `${car.seats} seats` : 'AC CAB'}</span>
                    </div>

                    {car.use && (
                      <p className="tour-vehicle-summary">{car.use}</p>
                    )}

                    <div className="tour-vehicle-features">
                      {car.features.map(f => (
                        <span key={f}><Wind size={12} /> {f}</span>
                      ))}
                      {car.bags && <span><Luggage size={12} /> {car.bags} bags</span>}
                      {car.fuel && <span><Fuel size={12} /> {car.fuel}</span>}
                    </div>

                    <div className="tour-vehicle-rate-pill">
                      <div className="rate-pill-left">
                        <small>All-Inclusive Route Fare</small>
                        <strong>{car.price}</strong>
                      </div>
                      <div className="rate-pill-badge">
                        <Check size={13} /> Tolls & Driver Incl.
                      </div>
                    </div>

                    <div className="tour-vehicle-actions">
                      <button 
                        type="button" 
                        className="tour-btn-book"
                        onClick={() => setPayCar({ name: car.name, price: car.price, title: route.title, prices: allComputedPrices })}
                      >
                        Book ₹500 Token 💳
                      </button>
                      <a 
                        href={`https://wa.me/919014677289?text=${encodeURIComponent(waMessage)}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="tour-btn-wa"
                      >
                        <MessageCircle size={15}/> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              );
            });
          })()}
        </div>
      </section>

      {/* Visitor Guide & Guidelines */}
      <section className="section longform-section pale">
        <div className="section-header">
          <span className="badge-pill"><ShieldCheck size={13} /> PILGRIM & VISITOR ADVISORY</span>
          <h2>Temple Guidelines & Travel Tips</h2>
          <p>Essential information to help you plan a seamless pilgrimage</p>
        </div>

        <div className="feature-list">
          {content.guide.map(([title, text]) => (
            <div key={title} className="guide-card">
              <div className="guide-icon"><ShieldCheck size={20} /></div>
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tour Packages Section: ENHANCED RECOMMENDED CIRCUITS */}
      <section className="section longform-section">
        <div className="section-header">
          <span className="badge-pill gold"><Calendar size={13} /> RECOMMENDED CIRCUITS</span>
          <h2>Popular Tour & Pilgrimage Packages</h2>
          <p>Combine multiple temples and sacred destinations into one seamless, custom itinerary</p>
        </div>

        <div className="package-grid">
          {content.packages.map(([title, duration, routeText, price]) => {
            const placesArr = routeText ? routeText.split(/→|->/).map(s => s.trim()) : [];
            return (
              <article key={title} className="package-card enhanced-circuit-card">
                <div className="package-card-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span className="package-card-badge" style={{ margin: 0 }}>{duration} · ★ Recommended</span>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#15803d', background: '#dcfce7', padding: '3px 8px', borderRadius: 12 }}>
                    🚕 Tolls Included
                  </span>
                </div>
                <h3>{title}</h3>
                
                {/* 2-COLUMN PLACES VISIT GRID */}
                <div className="popular-places-box" style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: 12, border: '1px solid #e2e8f0', margin: '10px 0 16px 0' }}>
                  <h4 style={{ margin: '0 0 6px 0', fontSize: '11px', fontWeight: 800, color: '#e5a919', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Places Visit
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px 8px' }}>
                    {placesArr.map((place, idx) => (
                      <span key={idx} style={{ fontSize: '10.5px', fontWeight: 600, color: '#334155', display: 'flex', alignItems: 'center', gap: '3px' }}>
                        📍 {place}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="package-footer" style={{ marginTop: 'auto' }}>
                  <div className="package-price">
                    <small>Starting from</small>
                    <strong>{price}</strong>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <a 
                      href={whatsappBooking(`Hi, I would like to enquire about the package: ${title}.`)} 
                      target="_blank" 
                      rel="noreferrer"
                      className="package-btn secondary"
                      style={{ padding: '7px 10px', fontSize: '0.8rem', background: '#f1f5f9', color: '#e5a919', borderRadius: 8, textDecoration: 'none', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      <MessageCircle size={14} /> WhatsApp
                    </a>
                    <button
                      type="button"
                      className="button"
                      style={{ background: 'linear-gradient(135deg, #e5a919, #c68a0a)', borderColor: '#e5a919', padding: '7px 12px', fontSize: '0.8rem', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '4px', borderRadius: 8, cursor: 'pointer' }}
                      onClick={() => setPayCar({ name: `${title} (${duration})`, price, title: 'Recommended Circuit' })}
                    >
                      Book 💳
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Why Book With Us Section */}
      <section className="section longform-section pale">
        <div className="section-header-centered">
          <span className="badge-pill"><Award size={13} /> TRUST & RELIABILITY</span>
          <h2>Why Devotees Choose Taxi in Tirupati</h2>
          <p>Your comfort, safety, and spiritual journey are our top priority</p>
        </div>

        <div className="why-grid six">
          {[
            { title: 'Punctual Doorstep Pickup', desc: 'Pickup directly from Airport, Railway Station, or Hotel at your chosen time.' },
            { title: 'Experienced Local Drivers', desc: 'Drivers who know temple routes, darshan rules, and highway conditions thoroughly.' },
            { title: '100% Transparent Fares', desc: 'No surprise charges or hidden fees. All toll and permit details explained clearly.' },
            { title: 'Clean & Sanitized Cabs', desc: 'Regularly serviced AC vehicles with comfortable seats and ample luggage space.' },
            { title: '24/7 Booking Support', desc: 'Instant WhatsApp and call assistance before, during, and after your trip.' },
            { title: 'Flexible Multi-Stop Plans', desc: 'Customize your itinerary to add nearby temples, restaurants, or sightseeing stops.' }
          ].map(x => (
            <div key={x.title} className="why-card">
              <CheckCircle2 className="why-icon" size={22} />
              <div>
                <strong>{x.title}</strong>
                <p>{x.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section longform-section">
        <div className="section-header">
          <span className="badge-pill"><Info size={13} /> GOT QUESTIONS?</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about Tirupati to {route.shortTitle.split('→')[1]?.trim() || 'destination'} cab service</p>
        </div>

        <div className="faq-list">
          {content.faqs.map(([q, a]) => (
            <details key={q} className="faq-item">
              <summary className="faq-question">
                <span>{q}</span>
                <ChevronDown className="faq-chevron" size={18} />
              </summary>
              <div className="faq-answer">
                <p>{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {payCar && (
        <EasebuzzModal 
          isOpen={Boolean(payCar)}
          onClose={() => setPayCar(null)}
          initialData={{
            type: 'route',
            service: `${payCar.title || route.title}`,
            vehicle: payCar.name,
            prices: payCar.prices || route.prices,
            amount: '500',
            fullAmount: payCar.price || route.starting,
            slug: route.slug,
            route: route.route
          }}
        />
      )}
    </>
  );
}

export default function CabRoutePage({ route: routeProp }) {
  const { slug } = useParams();
  const route = routeProp || getCabRoute(slug);
  const [showHeroPayModal, setShowHeroPayModal] = useState(false);

  if (!route) {
    return (
      <main className="cab-route-page">
        <section className="section not-found-section">
          <h1>Cab Route Not Found</h1>
          <p>We couldn't find the specific cab route you were looking for.</p>
          <Link className="button" to="/cabs">
            Browse Tirupati Cab Routes
          </Link>
        </section>
      </main>
    );
  }

  const isSrikalahasti = route.slug.includes('tirupati-to-srikalahasti');

  const cabSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dhakshinyatourandtravels.in/' },
          { '@type': 'ListItem', position: 2, name: 'Tirupati Cabs', item: 'https://www.dhakshinyatourandtravels.in/cabs' },
          { '@type': 'ListItem', position: 3, name: route.title, item: `https://www.dhakshinyatourandtravels.in/tirupati-cabs/${route.slug}` }
        ]
      }
    ]
  };

  const dest = route.shortTitle.split('→')[1]?.trim() || 'destination';
  const srikalahastiStandardContent = isSrikalahasti ? {
    eyebrow: 'SRIKALAHASTI PILGRIMAGE CAB',
    intro: srikalahastiContent.intro,
    facts: [
      ['Distance', route.distance],
      ['Typical drive', route.time],
      ['Primary route', route.route]
    ],
    templeTitle: 'Srikalahasti Temple Experience',
    templeText: srikalahastiContent.templeIntro,
    routeTitle: 'Tirupati to Srikalahasti Route & Travel Guide',
    routeText: 'A comfortable same-day pilgrimage route via Renigunta with flexible doorstep pickup and return timing.',
    highlights: srikalahastiContent.route.details,
    guideTitle: 'Temple Guidelines & Travel Tips',
    guide: [
      ['Best time to visit', srikalahastiContent.bestTimes[0]],
      ['Dress code', 'Wear traditional or modest clothing and follow current temple entry rules.'],
      ['Temple rules', 'Follow the temple guidance for mobile phones, photography and different darshan queues.'],
      ['Travel planning', 'Start early from Tirupati for a more relaxed same-day pilgrimage.']
    ],
    packages: srikalahastiContent.packageHighlights.slice(0, 4).map(p => [p.title, p.duration, p.route, p.price]),
    faqs: srikalahastiContent.faqs
  } : null;

  const content = cabRouteContent[route.slug] || srikalahastiStandardContent || {
    eyebrow: 'OUTSTATION PILGRIMAGE TAXI',
    intro: route.description,
    facts: [
      ['Distance', route.distance],
      ['Typical drive', route.time],
      ['Primary route', route.route]
    ],
    templeTitle: `${route.title}: Journey & Pilgrimage Details`,
    templeText: route.description,
    routeTitle: `Route & Distance Information`,
    routeText: `The journey covers approximately ${route.distance} and takes around ${route.time} depending on traffic and road conditions.`,
    highlights: route.highlights || ['Comfortable AC cab', 'Doorstep pickup', 'Experienced driver'],
    guideTitle: 'Travel Guidelines',
    guide: [
      ['Booking', 'Advance booking is recommended for weekend and festival rush.'],
      ['Timings', 'Departure time can be customized according to your convenience.']
    ],
    packages: [
      [`${route.title} Round Trip`, '1 Day', route.route, route.starting]
    ],
    faqs: [
      [`What is the distance for ${route.title}?`, `The road distance is ${route.distance}.`],
      [`How long does the journey take?`, `It takes approximately ${route.time} by private cab.`]
    ]
  };

  const fleet = route.prices?.length ? route.prices : vehicles.slice(0, 5).map(v => [v[0], v[4]]);

  return (
    <main className="cab-route-page">
      <SEO
        title={`${route.title} – Book AC Cab from Tirupati`}
        description={`${route.description} Distance: ${route.distance}. Time: ${route.time}. Starting from ${route.starting}. 24/7 doorstep pickup, verified drivers.`}
        canonical={`/tirupati-cabs/${route.slug}`}
        image={route.image}
        schema={cabSchema}
      />
      {/* Hero Section */}
      <section className="cab-route-hero">
        <div className="cab-route-hero-backdrop"></div>
        <div className="cab-route-hero-copy">
          <div className="hero-badge">
            <Sparkles size={14} className="sparkle-icon" />
            <span>TIRUPATI OUTSTATION CABS • 24x7 TAXI SERVICE</span>
          </div>

          <h1>{route.title}</h1>
          
          <p className="hero-intro-text">
            {content?.intro || route.description}
          </p>

          <div className="hero-badges-row">
            <span><CheckCircle2 size={14} /> Doorstep Pickup</span>
            <span><CheckCircle2 size={14} /> Verified Drivers</span>
            <span><CheckCircle2 size={14} /> Instant Confirmation</span>
          </div>

          <div className="cab-route-actions" style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <a className="button hero-call-btn" href={`tel:${phone}`}>
              <Phone size={16} /> Call {phone}
            </a>
            <a 
              className="button secondary hero-wa-btn" 
              href={whatsappBooking(`Hi, I would like to book ${route.title}. Please share availability and current fare.`)} 
              target="_blank" 
              rel="noreferrer"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <button
              type="button"
              className="button"
              style={{ background: 'linear-gradient(135deg, #e5a919, #c68a0a)', borderColor: '#e5a919', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              onClick={() => setShowHeroPayModal(true)}
            >
              <CreditCard size={16} /> Book 💳
            </button>
          </div>
        </div>

        <div className="cab-route-hero-image">
          <img src={route.image} alt={route.title} />
          <div className="route-price-glass">
            <span className="price-label">STARTING FARE</span>
            <strong className="price-val">{route.starting}</strong>
            <small className="price-sub">Includes vehicle & driver</small>
          </div>
        </div>
      </section>

      {/* Quick Route Facts Strip */}
      <section className="section route-facts-container">
        <div className="route-facts">
          <div className="fact-item">
            <div className="fact-icon-wrap"><MapPin size={20} /></div>
            <div>
              <span>Road Distance</span>
              <strong>{route.distance}</strong>
            </div>
          </div>

          <div className="fact-item">
            <div className="fact-icon-wrap"><Clock3 size={20} /></div>
            <div>
              <span>Estimated Time</span>
              <strong>{route.time}</strong>
            </div>
          </div>

          <div className="fact-item">
            <div className="fact-icon-wrap"><RouteIcon size={20} /></div>
            <div>
              <span>Route Corridor</span>
              <strong>{route.shortTitle}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body — one consistent UI for every cab route */}
      <DetailedRouteContent content={content} route={route} />

      {/* --- STATS COUNTER BANNER --- */}
      <StatsBanner title="Trusted Outstation Taxi Partner" subtitle="SERVICE HIGHLIGHTS" />

      {/* Bottom Call to Action Banner */}
      <section className="route-cta">
        <div className="cta-content">
          <span className="badge-pill gold"><Sparkles size={13} /> READY FOR A COMFORTABLE JOURNEY?</span>
          <h2>Book your {route.shortTitle} Cab Today</h2>
          <p>Share your travel date, passenger count, and vehicle choice. We'll send you an instant fare quotation with vehicle details.</p>
        </div>

        <div className="cab-route-actions cta-actions">
          <a className="button hero-call-btn" href={`tel:${phone}`}>
            <Phone size={16} /> Call Now: {phone}
          </a>
          <a 
            className="button secondary hero-wa-btn" 
            href={whatsappBooking(`Hi, I would like to enquire about booking ${route.title}.`)} 
            target="_blank" 
            rel="noreferrer"
          >
            <MessageCircle size={16} /> WhatsApp Inquiry
          </a>
        </div>
      </section>

      {/* Floating Bottom Sticky Bar for Quick Mobile Access */}
      <div className="mobile-sticky-bar">
        <a href={`tel:${phone}`} className="sticky-btn call">
          <Phone size={16} /> Call Now
        </a>
        <a 
          href={whatsappBooking(`Hi, I want to book a cab for ${route.title}.`)} 
          target="_blank" 
          rel="noreferrer" 
          className="sticky-btn whatsapp"
        >
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>
      {/* Hero Easebuzz Payment Modal */}
      {showHeroPayModal && (
        <EasebuzzModal
          isOpen={showHeroPayModal}
          onClose={() => setShowHeroPayModal(false)}
          initialData={{
            type: 'route',
            service: route.title,
            prices: route.prices,
            amount: '500',
            fullAmount: route.starting,
            slug: route.slug,
            route: route.route
          }}
        />
      )}
    </main>
  );
}
