import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Car, CheckCircle2, CreditCard, Clock, MapPin, MessageCircle,
  ShieldCheck, Wind, Clock3, Compass, Users, ArrowRight, Info,
  Plane, Bus, Sparkles, Landmark, BriefcaseBusiness
} from 'lucide-react';
import Page from './PageTemplate';
import BookingForm from '../components/BookingForm';
import ScrollReveal from '../components/ScrollReveal';
import StatsBanner from '../components/StatsBanner';
import EasebuzzModal from '../components/EasebuzzModal';
import SEO from '../components/SEO';
import { images, services, whatsapp } from '../data/siteData';
import { useData } from '../context/DataContext';
import './Cabs.css';

// Extra metadata per service for richer cards
const SERVICE_META = {
  'Car Rentals in Tirupati':          { category: 'LOCAL HIRE',      tags: [{ icon: Clock,    label: '8h / 80km' }, { icon: Users,   label: '4 Seater' },  { icon: ShieldCheck, label: 'AC Cab' }] },
  'Tempo Traveller Rental':           { category: 'GROUP TRAVEL',    tags: [{ icon: Users,    label: '12–20 Seats' }, { icon: Wind,    label: 'Push-back' }, { icon: MapPin,      label: 'Outstation' }] },
  'Force Urbania Rental':             { category: 'LUXURY GROUP',    tags: [{ icon: Sparkles, label: 'Premium' },    { icon: Users,   label: '12–16 Seats' },{ icon: Wind,        label: 'Luxury AC' }] },
  'Luxury Bus Rental':                { category: 'LARGE GROUP',     tags: [{ icon: Bus,      label: '27–45 Seats' },{ icon: ShieldCheck, label: 'AC Bus' }, { icon: MapPin,      label: 'All Routes' }] },
  'Outstation Taxi Service':          { category: 'INTERCITY',       tags: [{ icon: Compass,  label: 'Per km rate' },{ icon: MapPin,  label: '300km/day' }, { icon: Car,         label: 'One-Way' }] },
  'Taxi Service in Tirupati':         { category: 'CITY TAXI',       tags: [{ icon: Clock,    label: '24/7 Ready' }, { icon: MapPin,  label: 'Temple Runs' },{ icon: ShieldCheck, label: 'Verified' }] },
  'Tirupati Airport Taxi':            { category: 'AIRPORT TRANSFER',tags: [{ icon: Plane,    label: 'Flight Track' },{ icon: Clock,  label: '24/7 Pickup' },{ icon: ShieldCheck, label: 'On-Time' }] },
  'Car for Rent (Day Hire)':          { category: 'DAY RENTAL',      tags: [{ icon: Clock,    label: 'Full Day' },   { icon: Car,    label: 'Self-Plan' },  { icon: Wind,        label: 'AC Cab' }] },
};

export default function Cabs() {
  const [q] = useSearchParams();
  const { selectBooking } = useData();
  const [payService, setPayService] = useState(null);

  return (
    <Page
      eyebrow="TIRUPATI CAB SERVICE"
      title="A cab for every sacred journey."
      text="Reliable local, outstation, airport and temple taxi service from Tirupati. Clean AC vehicles, professional drivers, transparent fares."
      image={images.taxi}
    >
      <SEO
        title="Tirupati Cabs Service – Book Outstation & Local Taxi | Taxi in Tirupati"
        description="Explore verified Tirupati cab routes to Srikalahasti, Kanipakam, Vellore, Arunachalam, Chennai, Bangalore and Tirumala. Clean AC cabs with transparent tariffs."
        canonical="https://www.dhakshinyatourandtravels.in/cabs"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dhakshinyatourandtravels.in/' },
            { '@type': 'ListItem', position: 2, name: 'Tirupati Cabs', item: 'https://www.dhakshinyatourandtravels.in/cabs' }
          ]
        }}
      />

      <div className="content">

        <BookingForm />

        {q.get('from') && (
          <p className="cabs-result-notice">
            <Info size={15} />
            Your search: <b>{q.get('from')} → {q.get('to')}</b>. Select a service below or{' '}
            <a href={whatsapp} target="_blank" rel="noreferrer">message us on WhatsApp</a>.
          </p>
        )}

        {/* PRICING STRIP */}
        <div className="fleet-pricing-strip" style={{ marginTop: '2.5rem' }}>
          <div className="fleet-strip-card">
            <div className="fleet-strip-badge">
              <Clock size={13} className="gold-icon" />
              <span>LOCAL SIGHTSEEING</span>
            </div>
            <div className="fleet-strip-meta">8 HRS / 80 KM</div>
            <div className="fleet-strip-price">
              <span className="from-txt">From</span>
              <strong className="amount">₹2,880</strong>
            </div>
            <div className="fleet-strip-perk">
              <CheckCircle2 size={12} className="check-icon" />
              <span>Fuel &amp; Chauffeur Included</span>
            </div>
          </div>

          <div className="fleet-strip-card featured">
            <div className="strip-highlight-tag">POPULAR</div>
            <div className="fleet-strip-badge">
              <Compass size={13} className="gold-icon" />
              <span>OUTSTATION TAXI</span>
            </div>
            <div className="fleet-strip-meta">300 KM / DAY MINIMUM</div>
            <div className="fleet-strip-price">
              <span className="from-txt">From</span>
              <strong className="amount gold-gradient-text">₹15/km</strong>
            </div>
            <div className="fleet-strip-perk">
              <CheckCircle2 size={12} className="check-icon" />
              <span>One-Way &amp; Round Trips</span>
            </div>
          </div>

          <div className="fleet-strip-card">
            <div className="fleet-strip-badge">
              <Users size={13} className="gold-icon" />
              <span>GROUP TRAVEL</span>
            </div>
            <div className="fleet-strip-meta">TEMPO / BUS HIRE</div>
            <div className="fleet-strip-price">
              <span className="from-txt">From</span>
              <strong className="amount">₹5,100</strong>
            </div>
            <div className="fleet-strip-perk">
              <CheckCircle2 size={12} className="check-icon" />
              <span>12 to 45 Seater Options</span>
            </div>
          </div>
        </div>

        {/* RENTAL BANNER */}
        <ScrollReveal direction="up">
          <div className="cabs-rental-banner">
            <div>
              <p className="eyebrow">INSIDE TIRUPATI · RENTALS</p>
              <h2>Need a car on rent?</h2>
              <p>Compare available cars, travellers and buses with clear daily starting rates.</p>
            </div>
            <Link className="button" to="/fleet">View vehicle availability</Link>
          </div>
        </ScrollReveal>

        {/* SERVICES GRID */}
        <div className="cabs-section-heading">
          <span className="eyebrow">CITY &amp; HIGHWAY CABS</span>
          <h2>Specialized Taxi Services</h2>
        </div>

        <div className="cabs-services-grid">
          {services.map(([I, title, desc, price, slug], idx) => {
            const meta = SERVICE_META[title] || { category: 'CAB SERVICE', tags: [] };
            return (
              <ScrollReveal key={title} direction="up" delay={idx * 0.05}>
                <article className="cabs-service-card" style={{}}>

                  {/* HERO BAND */}
                  <div className="cabs-card-hero">
                    <div className="cabs-card-hero-icon">
                      <I size={24} />
                    </div>
                    {price && (
                      <div className="cabs-card-price-badge">
                        <span className="price-from">From</span>
                        <span className="price-value">{price}</span>
                      </div>
                    )}
                  </div>

                  {/* BODY */}
                  <div className="cabs-card-body">
                    <span className="cabs-card-category">{meta.category}</span>
                    <h3><Link to={`/${slug}`}>{title}</Link></h3>
                    <p className="cabs-card-desc">{desc}</p>

                    {meta.tags.length > 0 && (
                      <div className="cabs-card-tags">
                        {meta.tags.map(({ icon: TagIcon, label }) => (
                          <span className="cabs-card-tag" key={label}>
                            <TagIcon size={10} /> {label}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="cabs-card-divider" />

                    <div className="cabs-card-actions">
                      <Link to={`/${slug}`} className="cabs-card-btn details-btn">
                        <ArrowRight size={13} /> Details
                      </Link>
                      <button
                        type="button"
                        className="cabs-card-btn book-btn"
                        onClick={() => setPayService({ title, price, type: 'service' })}
                      >
                        <CreditCard size={13} /> Book 💳
                      </button>
                    </div>
                  </div>

                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <StatsBanner title="Tirupati's Most Trusted Cab Service" subtitle="WHY CHOOSE US" />

        {/* TRUST FOOTER */}
        <ScrollReveal direction="up">
          <div className="fleet-intro" style={{ marginTop: '1rem' }}>
            <div>
              <p className="eyebrow">OUR PROMISE</p>
              <h2>Safe, clean and on time — every ride.</h2>
              <div className="fleet-pricing-info">
                <div className="fleet-pricing-info-row">
                  <div className="fpi-item">
                    <Clock size={15} className="fpi-icon" />
                    <div>
                      <span className="fpi-label">Local Packages</span>
                      <span className="fpi-value">8 hr / 80 km &amp; 12 hr / 150 km</span>
                    </div>
                  </div>
                  <div className="fpi-divider" />
                  <div className="fpi-item">
                    <Compass size={15} className="fpi-icon" />
                    <div>
                      <span className="fpi-label">Outstation</span>
                      <span className="fpi-value">Per-km rate · 300 km/day min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fleet-trust">
              <span><ShieldCheck size={15} /> Professional drivers</span>
              <span><Wind size={15} /> AC vehicles</span>
              <span><Clock3 size={15} /> 24/7 support</span>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {payService && (
        <EasebuzzModal
          isOpen={Boolean(payService)}
          onClose={() => setPayService(null)}
          initialData={{
            service: payService.title,
            fullAmount: payService.price,
            type: payService.type || 'service'
          }}
        />
      )}
    </Page>
  );
}
