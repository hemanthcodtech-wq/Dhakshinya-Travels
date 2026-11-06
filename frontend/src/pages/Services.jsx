import { Link } from 'react-router-dom';
import { MapPin, Route, Sparkles, BriefcaseBusiness, SlidersHorizontal, Palmtree, Heart, GraduationCap, Gem, Church, ShieldCheck, Clock3, Users, Plane, ArrowRight, MessageCircle } from 'lucide-react';
import Page from './PageTemplate';
import { images } from '../data/siteData';
import { serviceLinks } from '../data/servicePages';
import StatsBanner from '../components/StatsBanner';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import './Services.css';

const serviceContent = [
  ['local-packages','Local Packages',MapPin,'Explore city rides, local tours, temple visits and short trips with practical local travel packages.'],
  ['outstation-packages','Outstation Packages',Route,'Comfortable outstation travel for pilgrimages, family holidays, business trips and multi-city journeys.'],
  ['balaji-darshan-packages','Balaji Darshan Packages',Sparkles,'Plan your Tirupati and Tirumala visit with pickup, drop and travel support around your temple itinerary.'],
  ['corporate-packages','Corporate Packages',BriefcaseBusiness,'Reliable transportation for meetings, airport transfers, team travel, events and business journeys.'],
  ['customized-packages','Customized Packages',SlidersHorizontal,'Build a package around your vehicle, group size, route, travel dates and preferred pace.'],
  ['holiday-packages','Holiday Packages',Palmtree,'Stress-free travel plans for family, friends and groups exploring temples, hills, beaches and heritage destinations.'],
  ['family-packages','Family Packages',Heart,'Comfort-focused journeys with flexible schedules and vehicles matched to your family and luggage.'],
  ['student-packages','Student Packages',GraduationCap,'Budget-conscious group travel with practical vehicles and plans designed around student trips.'],
  ['wedding-packages','Wedding Packages',Gem,'Guest transportation, event shuttles and coordinated vehicle movement for weddings and celebrations.'],
  ['devotional-packages','Devotional Packages',Church,'Peaceful temple journeys with comfortable transport for pilgrims and devotional group tours.']
];

const travelTypes = [
  ['Temple Tours','Tirupati, Tirumala and sacred destinations with comfortable group and family travel.'],
  ['Hill Station Tours','Cool-weather escapes and scenic hill journeys with flexible multi-day travel.'],
  ['Adventure Tours','Group-ready transport for experiences where the journey is part of the adventure.'],
  ['Heritage Tours','Discover historic cities, monuments and cultural destinations at your own pace.'],
  ['Beach & Backwater Tours','Relaxed coastal and backwater trips with comfortable point-to-point travel.'],
  ['Group Tours','One vehicle, one itinerary and a smoother journey for families, friends and organizations.']
];

const taxiLinks = serviceLinks.filter(x => ['car-rentals-in-tirupati','tempo-traveller-rental-in-tirupati','urbania-traveller-rental-in-tirupati','bus-rental-in-tirupati','outstation-taxi-in-tirupati','taxi-in-tirupati','tirupati-airport-taxi','car-for-rent-in-tirupati-day-rentals'].includes(x.slug));
const packageLinks = serviceLinks.filter(x => x.slug.includes('packages'));

export default function Services(){
  return <Page eyebrow="TRAVEL SERVICES" title="Complete travel solutions, built around your journey." text="From a local Tirupati ride to a multi-day group tour, choose a service, tell us your plan and we will help you arrange the right vehicle and route." image={images.taxi}>
    <SEO
      title="Travel Services & Vehicle Rental Packages | Taxi in Tirupati"
      description="Comprehensive travel services in Tirupati: Local 8h/80km packages, Balaji Darshan tours, corporate travel, weddings, and customized pilgrimage itineraries."
      canonical="https://taxi-in-tirupati.com/services"
      schema={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxi-in-tirupati.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://taxi-in-tirupati.com/services' }
        ]
      }}
    />
    <section className="content services-page">
      <ScrollReveal direction="up">
        <section className="services-presence">
          <div><span className="eyebrow">OUR PRESENCE</span><h2>Local knowledge with travel support that goes beyond one route.</h2></div>
          <p>With reliable operations across key cities and towns in India, Taxi in Tirupati brings comfortable vehicles and experienced drivers closer to your journey. Our services cover local travel, outstation trips, Balaji Darshan, corporate travel, customized plans, holidays and group occasions.</p>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="zoom" delay={0.1}>
        <section className="services-benefits">
          <div className="services-benefit"><ShieldCheck/><strong>Comfort-first fleet</strong><span>Cars, Tempo Travellers, Urbania and buses.</span></div>
          <div className="services-benefit"><Users/><strong>Every group size</strong><span>From individual rides to large group travel.</span></div>
          <div className="services-benefit"><Clock3/><strong>Flexible support</strong><span>Local, airport and outstation travel planning.</span></div>
          <div className="services-benefit"><MessageCircle/><strong>WhatsApp planning</strong><span>Simple direct communication before booking.</span></div>
        </section>
      </ScrollReveal>

      {/* --- LIVE COUNTER STATS BANNER --- */}
      <StatsBanner title="Proven Performance & Satisfied Devotees" subtitle="OUR MILESTONES" />

      <section className="services-section" style={{ marginTop: '3rem' }}>
        <div className="services-section-head">
          <div><span className="eyebrow">OUR SERVICES</span><h2>Choose the journey that fits your purpose.</h2></div>
          <p>Explore focused packages or ask us to build one around your itinerary.</p>
        </div>
        <div className="services-grid">
          {serviceContent.map(([slug,title,Icon,text],i)=>(
            <ScrollReveal key={slug} direction="up" delay={i * 0.05}>
              <article className="service-card">
                <span className="service-number">{String(i+1).padStart(2,'0')}</span>
                <div className="service-icon"><Icon/></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to={`/${slug}`}>Explore service <ArrowRight/></Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="india-travel">
        <div className="services-section-head">
          <div><span className="eyebrow">EXPLORE INDIA</span><h2>Temple, hill, heritage, beach & adventure tours.</h2></div>
          <p>Reliable transport for popular destinations across India, starting from Tirupati.</p>
        </div>
        <div className="travel-type-grid">
          {travelTypes.map(([title,text], i)=>(
            <ScrollReveal key={title} direction="up" delay={i * 0.05}>
              <article>
                <span className="travel-dot"><Sparkles/></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ScrollReveal direction="zoom">
        <section className="service-fleet-cta">
          <div><span className="eyebrow">FIND THE RIGHT VEHICLE</span><h2>Need a taxi, Tempo Traveller, Urbania or bus?</h2><p>Match your group size and route with the fleet before you request a quote.</p></div>
          <Link className="button" to="/fleet">Explore our fleet <ArrowRight/></Link>
        </section>
      </ScrollReveal>

      <section className="services-links">
        <div className="services-link-column">
          <span className="eyebrow">TAXI & VEHICLE SERVICES</span>
          {taxiLinks.map(x=><Link key={x.slug} to={`/${x.slug}`}>{x.title}<ArrowRight/></Link>)}
        </div>
        <div className="services-link-column">
          <span className="eyebrow">SERVICE PACKAGES</span>
          {packageLinks.map(x=><Link key={x.slug} to={`/${x.slug}`}>{x.title}<ArrowRight/></Link>)}
        </div>
      </section>

      <ScrollReveal direction="up">
        <section className="services-why">
          <div><span className="eyebrow">WHY CHOOSE US</span><h2>A smoother travel experience from pickup to return.</h2></div>
          <div className="why-list">
            <span><ShieldCheck/> Experienced drivers familiar with Tirupati, Tirumala and temple routes.</span>
            <span><Sparkles/> Clean, air-conditioned vehicles selected around your group size.</span>
            <span><Clock3/> 24/7 support for local, airport and outstation travel.</span>
            <span><SlidersHorizontal/> Customizable itineraries with clear communication before booking.</span>
            <span><Heart/> Family, student, wedding, corporate and devotional travel options.</span>
            <span><Users/> Flexible fleet choices for individuals, families and large groups.</span>
          </div>
        </section>
      </ScrollReveal>

      <section className="services-faq">
        <div><span className="eyebrow">FAQ</span><h2>Common questions before you book.</h2></div>
        <div>
          {[
            ['Are packages customizable?','Yes. Share your schedule, destinations, group size and vehicle preference and the itinerary can be planned around your needs.'],
            ['Do you provide airport and railway pickups?','Yes. Pickup and drop can be arranged for Tirupati Airport, railway station, hotels and local pickup points.'],
            ['What vehicles are available?','Cars, 12/17/20-seater Tempo Travellers, Urbania options and buses are available based on group size and route.'],
            ['Do you provide Tirumala and Balaji Darshan travel?','Yes. The services include Tirupati and Tirumala temple travel, sightseeing and devotional group journeys.'],
            ['Can I request an outstation trip?','Yes. Outstation travel is available for families, pilgrims, corporate groups and customized multi-day tours.']
          ].map(([q,a])=>(
            <details key={q}><summary>{q}<ArrowRight/></summary><p>{a}</p></details>
          ))}
        </div>
      </section>
    </section>
  </Page>
}
