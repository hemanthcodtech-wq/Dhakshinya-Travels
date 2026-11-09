import { ShieldCheck, Headphones, Clock3, Users, MapPin, Sparkles, CheckCircle2, MessageCircle, Route, Car, BusFront, Plane, HeartHandshake, Navigation, Star } from 'lucide-react';
import Page from './PageTemplate';
import { images, whatsapp } from '../data/siteData';
import SEO from '../components/SEO';
import AnimatedCounter from '../components/AnimatedCounter';
import StatsBanner from '../components/StatsBanner';
import ScrollReveal from '../components/ScrollReveal';
import './About.css';

const values = [
  [ShieldCheck, 'Safety first', 'Clean, maintained vehicles and experienced drivers for temple, airport and long-distance travel.'],
  [Users, 'Group-ready fleet', 'Cars, Tempo Travellers, Urbania and buses for families, pilgrims, corporate groups and events.'],
  [Clock3, 'Punctual service', 'We plan around pickup times, temple visits, airport schedules and your complete itinerary.'],
  [MessageCircle, 'Clear communication', 'Share your route and requirements on WhatsApp and receive a straightforward travel plan before booking.']
];

const services = [
  [MapPin, 'Tirupati & Tirumala', 'Temple visits, local sightseeing and flexible city travel.'],
  [Plane, 'Airport Transfers', 'Comfortable pickup and drop between Tirupati and the airport.'],
  [Car, 'Car Rentals', 'Cars for local day rentals, airport trips and outstation journeys.'],
  [BusFront, 'Group Travel', 'Tempo Travellers, Urbania and buses for larger groups and tours.']
];

const promises = [
  'Experienced drivers familiar with Tirupati, Tirumala and nearby temple routes',
  'AC vehicles selected around your group size and comfort requirements',
  'Local day rentals, airport transfers and outstation journeys',
  'Flexible travel plans for families, pilgrims, corporate groups and events',
  'Vehicles cleaned and prepared before every trip',
  'WhatsApp-first booking with simple, direct communication'
];

export default function About() {
  return (
    <Page
      eyebrow="ABOUT DHAKSHINYA TOURS & TRAVELS"
      title="About Dhakshinya Tours & Travels – Your Trusted Pilgrimage Partner"
      text="We provide sedans, Innova Crysta, Tempo Travellers, Force Urbania and luxury buses for Tirumala Balaji darshan, airport transfers, family tours and South India pilgrimages."
      image={images.hero}
    >
      <SEO
        title="About Dhakshinya Tours & Travels – 24/7 Tirupati Taxi & Tour Agency"
        description="Learn about Dhakshinya Tours & Travels – the most trusted cab and tour operator in Tirupati. 15+ years experience, 50,000+ happy devotees, verified AC fleet."
        canonical="/about-us"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dhakshinyatourandtravels.in/' },
            { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.dhakshinyatourandtravels.in/about-us' }
          ]
        }}
      />
      <div className="about-page-wrapper">
        <div className="about-container">
          <ScrollReveal direction="up">
            <div className="about-story">
              <div>
                <span className="eyebrow">WHO WE ARE</span>
                <h2>Dedicated temple travel expertise, luxury vehicles and service <span>crafted for devotees</span>.</h2>
              </div>
              <p>
                Tirupati travel often means more than one destination. A family may need Tirumala Balaji darshan, Padmavathi Temple, local shrines, an airport transfer, and outstation trips within the same journey. Dhakshinya Tours & Travels makes every leg effortless with certified mountain drivers, punctuality, and pristine AC vehicles.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="zoom" delay={0.1}>
            <div className="about-highlight">
              <div className="about-highlight-icon">
                <HeartHandshake />
              </div>
              <div>
                <span className="eyebrow">OUR APPROACH</span>
                <h2>Comfort should be guaranteed, not discovered halfway through your pilgrimage.</h2>
                <p>
                  From a compact sedan for couples to a 50-seater luxury bus for large families and devotee groups, we match the ideal vehicle to your group size and luggage needs with 100% upfront pricing.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* --- STATS COUNTER BANNER --- */}
          <StatsBanner
            title="Dedicated to Pilgrims Across South India"
            subtitle="OUR JOURNEY IN NUMBERS"
          />

          <div className="about-section-head">
            <span className="eyebrow">WHY CHOOSE US</span>
            <h2>Tirupati's Most <span>Dependable Travel Partner</span></h2>
          </div>

          <div className="about-values">
            {values.map(([Icon, title, text], i) => (
              <ScrollReveal key={title} direction="up" delay={i * 0.08}>
                <article>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="about-section-head services-head">
            <span className="eyebrow">WHAT WE DO</span>
            <h2>One Trusted Fleet for <span>Every Sacred Journey</span></h2>
          </div>

          <div className="about-services">
            {services.map(([Icon, title, text], i) => (
              <ScrollReveal key={title} direction="up" delay={i * 0.08}>
                <article>
                  <div className="about-service-icon">
                    <Icon />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <Navigation />
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up">
            <div className="about-split">
              <div className="about-panel">
                <span className="eyebrow">OUR COVERAGE</span>
                <h2>From temple hills to South India highways.</h2>
                <div className="about-route-list">
                  <span><MapPin /> Tirupati & Tirumala Balaji Temple Travel</span>
                  <span><Route /> Airport (TIR / MAA / BLR) & Railway Station Transfers</span>
                  <span><Users /> Family & Group Outstation Rentals</span>
                  <span><Sparkles /> Kanipakam, Srikalahasti, Vellore & Arunachalam Tours</span>
                </div>
              </div>

              <div className="about-panel about-check-panel">
                <span className="eyebrow">OUR PROMISE</span>
                <h2>Safe, Transparent & 100% Verified.</h2>
                {promises.map(item => (
                  <p key={item}>
                    <CheckCircle2 /> {item}
                  </p>
                ))}
                <a
                  className="button"
                  href={`${whatsapp}?text=${encodeURIComponent('Hi Dhakshinya Tours & Travels, I want to plan a pilgrimage tour in Tirupati.')}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Plan my trip on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <div className="about-trust">
              <div>
                <span className="eyebrow">BUILT FOR SACRED JOURNEYS</span>
                <h2>Whether darshan, holiday or corporate event, every detail matters.</h2>
                <p>
                  We focus on clean sanitized vehicles, experienced mountain drivers, timely pickups, and 24/7 support throughout your Tirupati stay.
                </p>
              </div>
              <div className="about-trust-points">
                <span><Star /> 4.9/5 Pilgrim Rating (12,500+ Reviews)</span>
                <span><ShieldCheck /> Certified Mountain Ghat Drivers</span>
                <span><Headphones /> 24/7 Dedicated Devotee Support Desk</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="zoom">
            <div className="about-bottom">
              <div>
                <span className="eyebrow">THE RIGHT VEHICLE MATTERS</span>
                <h2>From compact Sedans to 50-seater Luxury Buses.</h2>
                <p>
                  Our extensive fleet includes Swift Dzire, Toyota Etios, Innova Crysta, 12/17/20-seater Tempo Travellers, Force Urbania and luxury coach buses.
                </p>
              </div>
              <div className="about-stat">
                <strong><AnimatedCounter end={120} suffix="+" /></strong>
                <span>Cabs in Fleet</span>
                <strong><AnimatedCounter end={50} suffix=" Seats" /></strong>
                <span>Maximum Capacity</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Page>
  );
}
