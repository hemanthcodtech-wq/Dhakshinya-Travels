import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import {
  FaArrowRight, FaShieldHalved, FaClock, FaStar, FaLocationDot,
  FaChevronRight, FaCar, FaBus, FaPhone, FaWhatsapp, FaChevronDown,
  FaCircleCheck, FaRoute, FaLandmark, FaPlane, FaWandMagicSparkles, FaCreditCard,
  FaCalendarCheck, FaClipboardList, FaHandPointer
} from 'react-icons/fa6';
import { destinations, images, services, tours, vehicles, whatsapp, whatsappChat, whatsappBooking, phone } from '../data/siteData';
import SEO from '../components/SEO';
import { fleet } from '../data/fleetData';
import { cabRoutes } from '../data/cabRoutes';
import { useData } from '../context/DataContext';
import PopularPackages from '../components/PopularPackages';
import BookingForm from '../components/BookingForm';
import EasebuzzModal from '../components/EasebuzzModal';
import AnimatedCounter from '../components/AnimatedCounter';
import StatsBanner from '../components/StatsBanner';
import ScrollReveal from '../components/ScrollReveal';
import './Home.css';
import './HomeEnhancements.css';
import './TravelSimple.css';
import './MapSection.css';
import '../components/HowItWorks.css';
import './HomeThemeDark.css';

const homeFaqs = [
  {
    q: 'How do I book a taxi in Tirupati with Dhakshinya Tours & Travels?',
    a: 'You can book instantly by calling +91 90146 77289 or sending a WhatsApp message with your travel date, pickup location, destination, passenger count, and preferred vehicle class.'
  },
  {
    q: 'Are airport transfers available from Tirupati Airport?',
    a: 'Yes! We provide 24/7 airport pickup and drop services between Tirupati Airport (TIR), Tirupati City, Tirumala, Chennai Airport (MAA), and Bangalore Airport (BLR).'
  },
  {
    q: 'Are toll charges, driver allowance, and parking fees included?',
    a: 'We offer transparent pricing. Inclusions (such as toll fees, driver bata, state permits) are clearly specified in your quote before travel.'
  },
  {
    q: 'Can I book a vehicle for Tirumala Balaji Darshan?',
    a: 'Yes! Our local drivers are experienced with Tirumala ghat road regulations, parking points, queue tokens, and local sightseeing in Tirumala.'
  },
  {
    q: 'What vehicle options are available for family and group travel?',
    a: 'Our fleet includes AC Sedans (Etios/Dzire), MUVs (Ertiga), SUVs (Innova Crysta), 12/17/20-seater Tempo Travellers, Force Urbania (12/16-seater), and 27/40/50-seater Luxury Buses.'
  }
];

const homeTestimonials = [
  {
    name: 'Ramesh Kumar',
    location: 'Bengaluru',
    comment: 'Booked an Innova Crysta for our Tirumala family trip. Driver Sarath was very polite and skilled on the ghat road. Driver arrived on time at Tirupati station.',
    rating: 5
  },
  {
    name: 'Priya Sundaram',
    location: 'Chennai',
    comment: 'Excellent 12-seater Tempo Traveller service for our Arunachalam & Golden Temple tour. Clean vehicle, great AC, and transparent pricing without hidden charges.',
    rating: 5
  },
  {
    name: 'Venkat Rao',
    location: 'Hyderabad',
    comment: 'Punctual airport pickup from Tirupati Airport to hotel and Tirumala. Very reliable cab service with instant WhatsApp communication.',
    rating: 5
  },
  {
    name: 'Sahithi M',
    location: 'Google Review',
    comment: 'Excellent experience with a well-planned trip, clean and comfortable vehicle, and a polite, calm, professional driver who made the journey smooth and enjoyable.',
    rating: 5
  }
];

const Slider = ({ children }) => (
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 4200, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    loop={true}
    spaceBetween={14}
    slidesPerView={1.6}
    centeredSlides={true}
    grabCursor={true}
    resistanceRatio={0.85}
    breakpoints={{
      480: { slidesPerView: 1.8, spaceBetween: 16, centeredSlides: true },
      640: { slidesPerView: 1.8, spaceBetween: 16, centeredSlides: false },
      768: { slidesPerView: 2.2, spaceBetween: 18, centeredSlides: false },
      1024: { slidesPerView: 3, spaceBetween: 20, centeredSlides: false }
    }}
    className="home-slider"
  >
    {children}
  </Swiper>
);

function HomeFleetSlideCard({ v, onBook }) {
  const { selectBooking } = useData();
  const [selectedRate, setSelectedRate] = useState('local'); // 'local' | 'localLong' | 'outstation'

  const rawExtraHr = (v.extraHr && v.extraHr !== 'extra hr') ? v.extraHr : '₹200/hr';
  const rawOutstation = v.outstation || '₹15/km';

  const extraHrStr = rawExtraHr.replace(/\/hr?$/i, '/hr');
  const extraKmStr = `${rawOutstation.replace(/\/km?$/i, '')}/extra km`;
  const localExtraInfo = `${extraHrStr} & ${extraKmStr}`;
  const outstationExtraInfo = v.minimum ? (v.minimum.toLowerCase().startsWith('min') ? v.minimum : `Min ${v.minimum}`) : 'Min 300 km/day';

  const cleanPrice = (p) => p ? p.split('/')[0].trim() : '';

  const rateOptions = [
    { key: 'local', label: 'Local 8h/80km', price: cleanPrice(v.local) || '₹2,880', subText: localExtraInfo },
    { key: 'localLong', label: 'Local 12h/150km', price: cleanPrice(v.localLong) || '₹3,650', subText: localExtraInfo },
    { key: 'outstation', label: 'Outstation', price: v.outstation || '₹15/km', subText: outstationExtraInfo }
  ];

  const currentOption = rateOptions.find(r => r.key === selectedRate) || rateOptions[0];

  const handleBook = () => {
    const isOutstation = selectedRate === 'outstation';
    const tripType = isOutstation ? 'Outstation Tour' : 'Local Sightseeing';
    const defaultDest = isOutstation ? 'Arunachalam & Golden Temple' : 'Tirupati Local Sightseeing (8h / 80km)';

    selectBooking({
      vehicle: v.name,
      trip: tripType,
      to: defaultDest,
      price: currentOption.price
    });

    onBook({ 
      name: v.name, 
      vehicle: v.name, 
      service: `${v.name} (${currentOption.label})`, 
      price: currentOption.price,
      selectedRateKey: selectedRate,
      type: 'vehicle'
    });
  };

  return (
    <article className="home-slide-card vehicle-card">
      <div className="slide-image vehicle-image-bg">
        <img src={v.image} alt={v.name} />
        <span className="vehicle-ac-badge">AC · WITH DRIVER</span>
      </div>
      <div className="card-body">
        <div className="card-tag-row">
          <small className="category-tag">{v.category}</small>
          <span className="rate-badge">{currentOption.price}</span>
        </div>
        <h3>{v.name}</h3>
        <div className="vehicle-specs-row">
          <span>👥 {v.seats} Seats</span>
          <span>🧳 {v.bags} Bags</span>
        </div>

        {/* SELECTABLE RATES SECTION */}
        <div className="selectable-rates-container" style={{ marginTop: '0.4rem', marginBottom: '0.4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.25rem' }}>
            {rateOptions.map(opt => (
              <button
                key={opt.key}
                type="button"
                onClick={() => setSelectedRate(opt.key)}
                style={{
                  padding: '0.35rem 0.15rem',
                  borderRadius: 6,
                  border: selectedRate === opt.key ? '2px solid #d97706' : '1px solid #cbd5e1',
                  background: selectedRate === opt.key ? '#fffdf5' : '#f8fafc',
                  cursor: 'pointer',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1px'
                }}
              >
                <small style={{ fontSize: '0.58rem', fontWeight: 800, color: selectedRate === opt.key ? '#d97706' : '#64748b' }}>
                  {opt.label}
                </small>
                <b style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0a0a0a', whiteSpace: 'nowrap' }}>
                  {opt.price}
                </b>
                <small style={{ fontSize: '0.5rem', fontWeight: 700, color: '#d97706', display: 'block', marginTop: '1px', lineHeight: 1.15 }}>
                  {opt.subText}
                </small>
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="button"
          style={{ width: '100%', marginTop: 'auto', background: 'linear-gradient(135deg, #e5a919, #c68a0a)', borderColor: '#e5a919', fontSize: '0.85rem', padding: '0.6rem 0.75rem', borderRadius: '8px', fontWeight: 800 }}
          onClick={handleBook}
        >
          Book {v.name} 💳
        </button>
      </div>
    </article>
  );
}

export default function Home() {
  const { fleets } = useData();
  const [openFaq, setOpenFaq] = useState(null);
  const [homePayVehicle, setHomePayVehicle] = useState(null);

  const toggleFaq = index => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: homeFaqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxi-in-tirupati.com/' }]
      }
    ]
  };

  return (
    <main className="home-page-obsidian">
      <SEO
        title="Taxi in Tirupati – Book AC Cabs 24/7 for Temple Tours & Airport Transfers"
        description="Book trusted taxi in Tirupati for Tirumala darshan, Srikalahasti, Kanipakam, Golden Temple & South India pilgrimage tours. 24/7 AC cabs, verified drivers, transparent pricing."
        canonical="/"
        schema={homeSchema}
      />
      {/* --- HERO SECTION WITH QUICK BOOKING WIDGET --- */}
      <section 
        className="hero home-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.92) 0%, rgba(10, 10, 10, 0.85) 50%, rgba(18, 18, 18, 0.8) 100%), url(${images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-main-grid">
          <div className="hero-copy">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.18,
                    delayChildren: 0.1,
                  }
                }
              }}
            >
              <motion.p 
                className="eyebrow"
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                NO. 1 TAXI & TOUR AGENCY IN TIRUPATI
              </motion.p>
              <motion.h1 
                className="type-title"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                Travel with <em>trust.</em>
                <br />
                Journey with <em>blessings.</em>
              </motion.h1>
              <motion.p 
                className="hero-lead"
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                Book Tirupati to Tirumala, Srikalahasti, Kanipakam, Golden Temple, Arunachalam & South India temple cab packages. Safe rides, flexible itineraries, and 24/7 support.
              </motion.p>

              <div className="hero-trust-row" style={{ marginTop: '24px' }}>
                <span>
                  <FaShieldHalved /> Verified Drivers
                </span>
                <span>
                  <FaClock /> 24×7 Service
                </span>
                <span>
                  <FaStar /> <AnimatedCounter end={4.9} decimals={1} suffix="★" /> Rated
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-action-card"
            initial={{ opacity: 0, x: 35, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              background: 'linear-gradient(145deg, #0d0f17 0%, #161a26 100%)',
              border: '1.5px solid rgba(245, 158, 11, 0.45)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(245, 158, 11, 0.15)'
            }}
          >
            <div className="hero-card-content">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '12px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#ffd700', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>QUICK BOOKING DESK</span>
                  <h3 style={{ margin: '4px 0 0', fontSize: '18px', color: '#ffffff', fontWeight: 800 }}>Book Cab / Tour</h3>
                </div>
                <span style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', fontSize: '11px', padding: '4px 10px', borderRadius: '20px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }}></span> Available 24/7
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '8px 12px' }}>
                  <span style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Starting Fare</span>
                  <strong style={{ display: 'block', fontSize: '16px', color: '#ffd700', marginTop: '2px' }}>₹15 / km</strong>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '8px 12px' }}>
                  <span style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Advance Deposit</span>
                  <strong style={{ display: 'block', fontSize: '16px', color: '#ffffff', marginTop: '2px' }}>₹1,000 Only</strong>
                </div>
              </div>

              <div className="hero-action-card-buttons" style={{ gridTemplateColumns: '1fr', gap: '10px' }}>
                <button 
                  type="button" 
                  className="hero-card-btn hero-btn-book"
                  onClick={() => setHomePayVehicle({
                    name: 'Sedan (4 Seater)',
                    service: 'Tirupati Cab Service',
                    isNavbarBooking: true
                  })}
                  style={{
                    padding: '14px 18px',
                    fontSize: '14px',
                    background: 'linear-gradient(135deg, #fcd34d 0%, #f59e0b 50%, #b45309 100%)',
                    color: '#000000',
                    boxShadow: '0 8px 24px rgba(245, 158, 11, 0.45)'
                  }}
                >
                  <FaCreditCard size={17} /> Instant Online Booking (Adv ₹1000)
                </button>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <a 
                    className="hero-card-btn hero-btn-whatsapp" 
                    href={whatsappBooking('Hi Dhakshinya Tours & Travels! I would like to book a cab / tour package.')} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ background: '#25d366', color: '#ffffff', padding: '11px', fontSize: '12px' }}
                  >
                    <FaWhatsapp size={14} /> WhatsApp Us
                  </a>
                  <Link 
                    className="hero-card-btn hero-btn-packages" 
                    to="/tours"
                    style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#ffffff', padding: '11px', fontSize: '12px' }}
                  >
                    All Packages <FaChevronRight size={11} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FLOATING EXECUTIVE QUICK-BOOKING BAR --- */}
      <div style={{ marginTop: '-45px', position: 'relative', zIndex: 25 }}>
        <BookingForm showPackages={false} />
      </div>

      {/* --- POPULAR TEMPLE TOUR PACKAGES --- */}
      <PopularPackages />

      {/* --- OUR TAXI & PACKAGE SERVICES SECTION --- */}
      <section className="services-section-wrapper">
        <div className="services-section-backdrop" aria-hidden="true">
          <img src={images.tirumala} alt="" />
        </div>

        <div className="services-header-container">
          <span className="services-eyebrow-badge">OUR TAXI & PACKAGE SERVICES</span>
          <h2>
            Everything you need for
            <br />
            <span>a smooth journey.</span>
          </h2>
          <p>
            From airport pickups and local temple sightseeing to long-distance outstation tour circuits, we provide comfortable AC cabs and experienced drivers.
          </p>
        </div>

        <div className="services-cards-grid">
          {[
            { index: '01', title: 'One Way Cab', desc: 'Simple, comfortable point-to-point travel.', link: '/taxi-in-tirupati', Icon: FaCar },
            { index: '02', title: 'Round Trip', desc: 'Flexible return journeys at fair prices.', link: '/outstation-taxi-in-tirupati', Icon: FaRoute },
            { index: '03', title: 'Local Sightseeing', desc: 'Discover Tirupati at your own pace.', link: '/car-rentals-in-tirupati', Icon: FaLandmark },
            { index: '04', title: 'Airport Taxi', desc: 'Punctual pickup and drop, every time.', link: '/tirupati-airport-taxi', Icon: FaPlane },
            { index: '05', title: 'Temple Darshan Taxi', desc: 'Peaceful rides for your sacred visit.', link: '/services/balaji-darshan-packages', Icon: FaWandMagicSparkles },
            { index: '06', title: 'Outstation Taxi', desc: 'Go beyond Tirupati with confidence.', link: '/outstation-taxi-in-tirupati', Icon: FaLocationDot }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="service-glass-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div>
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <item.Icon size={24} />
                  </div>
                  <span className="service-index-number">{item.index}</span>
                </div>

                <div className="service-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>

              <Link to={item.link} className="service-explore-btn">
                Explore <FaArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- POPULAR CAB ROUTES --- */}
      <section className="section pale home-showcase">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">POPULAR OUTSTATION CAB ROUTES</p>
            <h2>Top Temple & City Routes from Tirupati</h2>
          </div>
          <Link className="all-link" to="/cabs">
            All Cab Routes <FaArrowRight size={14} />
          </Link>
        </div>

        <Slider>
          {cabRoutes.map(r => (
            <SwiperSlide key={r.slug}>
              <article className="home-slide-card route-card">
                <div className="slide-image">
                  <img src={r.image || images.temple} alt={r.title} />
                  <span className="route-badge">{r.distance} · {r.time}</span>
                </div>
                <div className="card-body">
                  <div className="card-tag-row">
                    <small className="category-tag">OUTSTATION TAXI</small>
                    <span className="price-tag">Starting from {r.startPrice}</span>
                  </div>
                  <h3>{r.title}</h3>
                  <p>{r.summary}</p>
                  <Link to={`/tirupati-cabs/${r.slug}`} className="card-action-btn">
                    View Route Details <FaArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Slider>
      </section>

      {/* --- VEHICLE FLEET SHOWCASE --- */}
      <section className="section home-showcase">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">VEHICLE FLEET AVAILABILITY</p>
            <h2>Choose the Perfect Ride for Your Group</h2>
          </div>
          <Link className="all-link" to="/fleet">
            View Full Fleet <FaArrowRight size={14} />
          </Link>
        </div>

        <Slider>
          {(fleets || []).map(v => (
            <SwiperSlide key={v.id}>
              <HomeFleetSlideCard 
                v={v} 
                onBook={(payload) => setHomePayVehicle(payload)} 
              />
            </SwiperSlide>
          ))}
        </Slider>
      </section>

      {/* --- SACRED DESTINATIONS SHOWCASE --- */}
      <section className="section destinations-preview">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">SACRED DESTINATIONS</p>
            <h2>Explore Holy Temples & Tourist Attractions</h2>
          </div>
          <Link className="all-link" to="/destinations">
            All Destinations <FaArrowRight size={14} />
          </Link>
        </div>

        <Slider>
          {destinations.slice(0, 9).map(d => (
            <SwiperSlide key={d[0]}>
              <article className="home-slide-card destination-card">
                <div className="slide-image">
                  <img src={d[3]} alt={d[1]} />
                  <span className="price-badge-overlay">FROM {d[4]}</span>
                </div>
                <div className="card-body">
                  <small className="category-tag">PILGRIMAGE SITE</small>
                  <h3>{d[1]}</h3>
                  <p>{d[2]}</p>
                  <Link to={`/destinations/${d[0]}`} className="card-action-btn dest-btn">
                    Read Destination Guide <FaArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Slider>
      </section>

      {/* --- TOP TOUR PACKAGES --- */}
      <section className="section pale home-showcase">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">PILGRIMAGE TOUR PACKAGES</p>
            <h2>Curated South India Pilgrimage Packages</h2>
          </div>
          <Link className="all-link" to="/tours">
            View All Packages <FaArrowRight size={14} />
          </Link>
        </div>

        <div className="tours-static-grid">
          {tours.slice(0, 9).map(t => (
            <article key={t[0]} className="home-slide-card package-card">
              <div className="slide-image">
                <img src={t[4]} alt={t[0]} />
                <span className="duration-badge">{t[1]}</span>
              </div>
              <div className="card-body">
                <div className="card-tag-row">
                  <small className="category-tag">PILGRIMAGE PACKAGE</small>
                  <span className="price-tag">From {t[3]}</span>
                </div>
                <h3>{t[0]}</h3>
                <div className="package-route-pill">{t[2]}</div>
                <Link to="/tours" className="card-action-btn package-btn">
                  View Package Itinerary <FaArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* --- 4-STEP EASY BOOKING FLOW (ENHANCED LUXURY & CRISP) --- */}
      <section className="how-it-works-section">
        <div className="how-it-works-header">
          <div className="how-it-works-badge">
            <FaWandMagicSparkles size={13} />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="how-it-works-title">
            4 Easy Steps to Book Your <span>Tirupati Cab</span>
          </h2>
          <p className="how-it-works-subtitle">
            Experience effortless, transparent, and instant travel planning with Dhakshinya Tours & Travels.
          </p>
        </div>

        <div className="how-it-works-grid">
          {/* STEP 01 */}
          <div className="how-it-works-card">
            <div className="how-it-works-num-wrap">
              <div className="how-it-works-icon-circle">
                <FaCar />
              </div>
              <span className="how-it-works-step-pill">01</span>
            </div>
            <h3 className="how-it-works-heading">Choose Package or Fleet</h3>
            <p className="how-it-works-desc">
              Browse and choose the perfect temple package tour or AC vehicle fleet for your travel group size.
            </p>
            <span className="how-it-works-meta">
              <FaCircleCheck size={11} /> 120+ Verified Cabs
            </span>
          </div>

          {/* STEP 02 */}
          <div className="how-it-works-card">
            <div className="how-it-works-num-wrap">
              <div className="how-it-works-icon-circle">
                <FaHandPointer />
              </div>
              <span className="how-it-works-step-pill">02</span>
            </div>
            <h3 className="how-it-works-heading">Select Your Service</h3>
            <p className="how-it-works-desc">
              Tap to pick your preferred package or vehicle category with transparent, fixed, upfront pricing.
            </p>
            <span className="how-it-works-meta">
              <FaCircleCheck size={11} /> Fixed Fare Guarantee
            </span>
          </div>

          {/* STEP 03 */}
          <div className="how-it-works-card">
            <div className="how-it-works-num-wrap">
              <div className="how-it-works-icon-circle">
                <FaClipboardList />
              </div>
              <span className="how-it-works-step-pill">03</span>
            </div>
            <h3 className="how-it-works-heading">Fill the Information</h3>
            <p className="how-it-works-desc">
              Provide your Name, Contact Number, Travel Date, and convenient Pickup Point in Tirupati or nearby.
            </p>
            <span className="how-it-works-meta">
              <FaCircleCheck size={11} /> 30-Second Quick Form
            </span>
          </div>

          {/* STEP 04 */}
          <div className="how-it-works-card">
            <div className="how-it-works-num-wrap">
              <div className="how-it-works-icon-circle">
                <FaCreditCard />
              </div>
              <span className="how-it-works-step-pill">04</span>
            </div>
            <h3 className="how-it-works-heading">Adv ₹1,000 Payment</h3>
            <p className="how-it-works-desc">
              Pay just ₹1,000 secure advance payment to confirm your cab instantly with driver allocation.
            </p>
            <span className="how-it-works-meta">
              <FaCalendarCheck size={11} /> Instant Confirmation
            </span>
          </div>
        </div>
      </section>

      {/* --- REVIEWS & TESTIMONIALS --- */}
      <section className="section pale">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PILGRIM FEEDBACK & REVIEWS</p>
            <h2>Trusted by Thousands of Devotees & Families</h2>
          </div>
        </div>

        <div className="card-grid home-reviews-grid">
          {homeTestimonials.map(review => (
            <div key={review.name} style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: '#f59e0b', fontSize: '1.15rem', marginBottom: '0.75rem', letterSpacing: '2px' }}>
                {'★'.repeat(review.rating)}
              </div>
              <p style={{ color: '#0f172a', fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.25rem', lineHeight: '1.65', flex: 1 }}>
                "{review.comment}"
              </p>
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ color: '#0a0a0a', fontSize: '0.95rem', fontWeight: 800 }}>{review.name}</strong>
                <span style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600 }}>{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FREQUENTLY ASKED QUESTIONS --- */}
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
            <h2>Everything You Need to Know Before Booking</h2>
          </div>
        </div>

        <div style={{ maxWidth: 850, margin: '2rem auto 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {homeFaqs.map((faq, index) => (
            <div
              key={faq.q}
              style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: '14px', boxShadow: 'var(--shadow-sm)', padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'all 0.3s ease' }}
              onClick={() => toggleFaq(index)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', alignItems: 'center', gap: '1rem' }}>
                <h3 style={{ color: '#0a0a0a', fontSize: '1.05rem', margin: 0, fontWeight: 700 }}>{faq.q}</h3>
                <FaChevronDown
                  size={16}
                  style={{
                    color: '#d97706',
                    transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0
                  }}
                />
              </div>
              {openFaq === index && (
                <p style={{ color: '#334155', fontSize: '0.95rem', marginTop: '0.85rem', lineHeight: '1.65', margin: '0.85rem 0 0' }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- GOOGLE MAPS LOCATION SECTION --- */}
      <section className="section map-section">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">FIND US IN TIRUPATI</p>
            <h2>Visit Our Local Office in Tirupati</h2>
          </div>
          <a
            className="all-link"
            href="https://maps.google.com/?q=13.6535125,79.4574958"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps <FaArrowRight size={14} />
          </a>
        </div>
        <div className="map-card">
          <iframe
            title="Dhakshinya Tours & Travels Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3877.069889729357!2d79.45749577508845!3d13.653512486728275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDM5JzEyLjciTiA3OcKwMjcnMzYuMyJF!5e0!3m2!1sen!2sin!4v1793951443901!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      {/* --- BOTTOM CALL TO ACTION --- */}
      <section className="home-cta">
        <div>
          <p className="eyebrow">LET’S PLAN YOUR JOURNEY</p>
          <h2>
            Planning your <em>Tirupati journey?</em>
          </h2>
          <p>Share your route and group size on WhatsApp. We will help you select the ideal vehicle and fare.</p>
          <a href={whatsappChat('Home Page – Planning a Tirupati journey')} target="_blank" rel="noreferrer" className="button">
            Chat on WhatsApp <FaArrowRight size={14} />
          </a>
        </div>
        <div className="cta-mark">
          <FaStar size={24} />
          <span>
            TRUSTED
            <br />
            TRAVEL
          </span>
        </div>
      </section>

      {/* Vehicle Booking Modal */}
      {homePayVehicle && (
        <EasebuzzModal 
          isOpen={Boolean(homePayVehicle)}
          onClose={() => setHomePayVehicle(null)}
          initialData={{
            type: 'vehicle',
            service: homePayVehicle.service || `${homePayVehicle.name} Booking`,
            vehicle: homePayVehicle.name,
            selectedRateKey: homePayVehicle.selectedRateKey || 'local',
            amount: '1000',
            fullAmount: homePayVehicle.price || '2880',
            isNavbarBooking: homePayVehicle.isNavbarBooking
          }}
        />
      )}
    </main>
  );
}