import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ChevronDown, MessageCircle, ShieldCheck, Sparkles, Snowflake, MonitorPlay, 
  BatteryCharging, Armchair, Headphones, SprayCan, CalendarDays, Phone, MapPin, 
  Clock3, ArrowRight, CheckCircle2, CarFront, Luggage, Users, Route as RouteIcon, 
  Car, Award, Navigation, Info, Fuel, CreditCard
} from 'lucide-react';
import { images, destinations, whatsapp, phone } from '../data/siteData';
import { servicePages } from '../data/servicePages';
import { fleet } from '../data/fleetData';
import { useData } from '../context/DataContext';
import StatsBanner from '../components/StatsBanner';
import EasebuzzModal from '../components/EasebuzzModal';
import SEO from '../components/SEO';
import './ServiceLanding.css';

const featureIcons = [Snowflake, MonitorPlay, BatteryCharging, Armchair, Headphones, SprayCan];

const defaultTrips = [
  ['Tirumala Darshan', 'Tirupati → Tirumala', 'Temple visit • Same day'],
  ['Srikalahasti Temple', 'Tirupati → Srikalahasti', 'Pilgrimage • Same day'],
  ['Kanipakam Temple', 'Tirupati → Kanipakam', 'Pilgrimage • Same day'],
  ['Golden Temple', 'Tirupati → Vellore', 'Temple tour • Same day'],
  ['Kanchipuram', 'Tirupati → Kanchipuram', 'Temple circuit • Same day'],
  ['Pondicherry', 'Tirupati → Pondicherry', 'Sightseeing • 1–2 days']
];

const tripMap = {
  'car-rentals-in-tirupati': [
    ['Tirupati Local Temple Tour', 'Tirumala • Tiruchanur • Kapila Theertham', 'Local 8h/80km • Same day'],
    ['Srikalahasti Rahu-Ketu', 'Tirupati → Srikalahasti (36 km)', 'Pilgrimage • Same day'],
    ['Kanipakam Varasiddhi Vinayaka', 'Tirupati → Kanipakam (72 km)', 'Pilgrimage • Same day'],
    ['Vellore Sripuram Golden Temple', 'Tirupati → Vellore (110 km)', 'Temple tour • Same day'],
    ['Kanchipuram Silk & Temples', 'Tirupati → Kanchipuram (110 km)', 'Temple circuit • Same day'],
    ['Horsley Hills Scenic Tour', 'Tirupati → Horsley Hills (130 km)', 'Hill station • 1 day']
  ],
  'tempo-traveller-rental-in-tirupati': [
    ['Joint Family Tirumala Tour', 'Tirupati → Tirumala Hill', '12–20 Seater AC • Same day'],
    ['Srikalahasti & Kanipakam Group', 'Tirupati → Srikalahasti → Kanipakam', 'Group pilgrimage • 1 day'],
    ['Vellore & Kanchipuram Circuit', 'Tirupati → Vellore → Kanchipuram', 'Temple circuit • 1 day'],
    ['Arunachalam Agni Lingam Tour', 'Tirupati → Arunachalam', 'Pilgrimage • 2 days'],
    ['Pondicherry Group Sightseeing', 'Tirupati → Pondicherry', 'Coastal tour • 2 days'],
    ['Srisailam Jyotirlinga Yatra', 'Tirupati → Srisailam', 'Group yatra • 3 days']
  ],
  'urbania-traveller-rental-in-tirupati': [
    ['VIP Tirumala Balaji Pilgrimage', 'Tirupati → Tirumala', 'Ultra luxury Force Urbania'],
    ['Corporate Retreat: Pondicherry', 'Tirupati → Pondicherry', 'Executive group tour'],
    ['VIP Temple Circuit', 'Srikalahasti • Kanipakam • Vellore', 'Luxury group travel'],
    ['Executive Bangalore Connection', 'Tirupati → Bangalore City/Airport', 'VIP transfer'],
    ['Chennai Luxury Airport Transfer', 'Tirupati → Chennai Airport', 'Corporate transfer'],
    ['South India Heritage Circuit', 'Multi-city VIP route', 'Custom luxury tour']
  ],
  'bus-rental-in-tirupati': [
    ['Marriage & Wedding Guest Shuttles', 'Tirupati City & Venues', '27 to 50 Seater Coaches'],
    ['Large Group Tirumala Pilgrimage', 'Tirupati → Tirumala Hill', 'AC Coach Bus • 1 day'],
    ['School & College Excursions', 'Chandragiri • Science Centre • Srikalahasti', 'Educational tour'],
    ['Corporate Seminar Transportation', 'Hotel → Venue → Airport Shuttles', 'Event logistics'],
    ['Arunachalam Bus Pilgrimage', 'Tirupati → Arunachalam', 'Group pilgrimage • 2 days'],
    ['Grand Tamil Nadu Temple Tour', 'Tirupati → Madurai → Rameshwaram', 'Multi-day bus circuit']
  ],
  'outstation-taxi-in-tirupati': [
    ['Tirupati → Chennai (MAA)', '135 km • ~3 hrs', 'One-way / Round trip'],
    ['Tirupati → Bangalore (BLR)', '250 km • ~5.5 hrs', 'One-way / Round trip'],
    ['Tirupati → Vellore Golden Temple', '110 km • ~2.5 hrs', 'Same-day return'],
    ['Tirupati → Arunachalam', '200 km • ~5 hrs', 'Pilgrimage circuit'],
    ['Tirupati → Pondicherry', '200 km • ~5 hrs', 'Weekend retreat'],
    ['Tirupati → Srisailam Jyotirlinga', '370 km • ~7.5 hrs', 'Multi-day yatra']
  ],
  'taxi-in-tirupati': [
    ['One-Way Point to Point Cab', 'City Drop • Railway Station Drop', 'Instant 24x7 Cab'],
    ['Full Day Local Tirupati Cab', '8 Hours / 80 KMs City Package', 'Temple & Sightseeing'],
    ['Tirumala Express Taxi', 'Tirupati → Tirumala Hill', 'Up & Down Express'],
    ['Airport Transfer Taxi', 'Tirupati Airport (TIR) Transfer', 'Doorstep pickup'],
    ['Outstation Round Trip Cab', 'Flexible interstate mileage', 'Km-based tariff'],
    ['24/7 Night & Emergency Taxi', 'Round-the-clock availability', 'Immediate dispatch']
  ],
  'tirupati-airport-taxi': [
    ['TIR Airport → Tirupati Hotel', '15 km • ~25 min', 'Doorstep hotel transfer'],
    ['TIR Airport → Tirumala Hill', '38 km • ~1 hr', 'Direct temple transfer'],
    ['TIR Airport → Srikalahasti', '30 km • ~40 min', 'Express temple pickup'],
    ['TIR Airport → Kanipakam', '85 km • ~1.5 hrs', 'Direct cab transfer'],
    ['TIR Airport → Chennai City/MAA', '135 km • ~3 hrs', 'Intercity airport transfer'],
    ['TIR Airport → Bangalore (BLR)', '250 km • ~5.5 hrs', 'Interstate connection']
  ],
  'car-for-rent-in-tirupati-day-rentals': [
    ['Full Day City Hire (8h / 80km)', 'Tirupati City & Temples', 'Flat package tariff'],
    ['Extended Day Hire (12h / 150km)', 'Tirupati + Srikalahasti', 'Extended mileage package'],
    ['Tirumala Hill Half-Day Hire', 'Tirupati → Tirumala Hill', 'Express hill rental'],
    ['Dual Temple Day Hire', 'Srikalahasti & Kanipakam', 'Full day pilgrimage hire'],
    ['Golden Temple Day Trip', 'Tirupati → Vellore', 'Outstation day hire'],
    ['Custom Hourly Rental', 'Flexible hours & distance', 'Tailor-made day plan']
  ]
};

const carRoutes = [
  ['Tirupati → Tirumala', '22 km', '~40 min'],
  ['Tirupati → Sri Kalahasti', '36 km', '~50 min'],
  ['Tirupati → Kanipakam', '72 km', '~1.5–2 hrs'],
  ['Tirupati → Vellore (Golden Temple)', '110 km', '~2.5 hrs'],
  ['Tirupati → Arunachalam', '200 km', '~5 hrs'],
  ['Tirupati → Chennai', '135 km', '~3 hrs'],
  ['Tirupati → Pondicherry', '200 km', '~5 hrs'],
  ['Tirupati → Bangalore', '250 km', '~5–6 hrs'],
  ['Tirupati → Hyderabad', '570 km', '~10–11 hrs'],
  ['Tirupati → Madurai', '430 km', '~8.5–9 hrs'],
  ['Tirupati → Coimbatore', '470 km', '~9–10 hrs'],
  ['Tirupati → Trichy', '390 km', '~7.5–8 hrs']
];

const tripImage = (title = '', route = '') => {
  const text = `${title} ${route}`.toLowerCase();

  const keywordImages = [
    [['tirumala', 'balaji', 'venkateswara'], images.tirumala],
    [['srikalahasti', 'kalahasti'], images.srikalahasti],
    [['kanipakam'], images.kanipakam],
    [['golden temple', 'vellore', 'sripuram'], images.goldentemple],
    [['arunachalam', 'tiruvannamalai'], images.arunachalam],
    [['kanchipuram'], images.kanchipuram],
    [['pondicherry', 'puducherry'], images.pondicherry],
    [['srisailam'], images.srisailam],
    [['tiruchanur', 'padmavathi'], images.tiruchanur],
  ];

  const matched = keywordImages.find(([keywords]) =>
    keywords.some(keyword => text.includes(keyword))
  );
  if (matched) return matched[1];

  const destinationMatch = destinations.find(([, name, , image]) =>
    text.includes(name.toLowerCase())
  );
  if (destinationMatch?.[3]) return destinationMatch[3];

  return images.temple;
};

const vehicleImage = (name = '') => {
  const n = name.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

  const matchers = [
    [['fortuner'], 'fortuner'],
    [['hycross'], 'hycross'],
    [['innova crysta', 'crysta'], 'innova-crysta'],
    [['urbania 16', 'urbania (16'], 'urbania-16'],
    [['urbania 12', 'urbania'], 'urbania-12'],
    [['tempo traveller 20', '20 seater', '20-seater'], 'tempo-20'],
    [['tempo traveller 16', '16 seater', '16-seater'], 'tempo-16'],
    [['tempo traveller 12', '12 seater', '12-seater'], 'tempo-12'],
    [['bus 45', '45 seater', '45-seater'], 'bus-45'],
    [['bus 40', '40 seater', '40-seater'], 'bus-40'],
    [['bus 27', '27 seater', '27-seater', 'mini bus'], 'bus-27'],
    [['ertiga'], 'ertiga'],
    [['sedan', 'etios', 'dzire'], 'sedan']
  ];

  const match = matchers.find(([keywords]) => keywords.some(keyword => n.includes(keyword)));
  const vehicle = match ? fleet.find(item => item.id === match[1]) : null;

  return vehicle?.image || images.taxi;
};

function TaxiVehicleCard({ vehicle, onBook, pageSlug = '' }) {
  const { selectBooking } = useData();
  const [selectedRate, setSelectedRate] = useState('local');

  const sLower = (pageSlug || '').toLowerCase();
  const isOutstationPage = sLower.includes('outstation');

  const isDedicatedTaxiRental = !isOutstationPage && (
    sLower.includes('car-rentals') || sLower.includes('car rentals') ||
    sLower.includes('tempo-traveller') || sLower.includes('tempo traveller') || sLower.includes('tempo rental') ||
    sLower.includes('urbania') ||
    sLower.includes('bus-rental') || sLower.includes('bus rental') || sLower.includes('luxury bus') ||
    sLower.includes('taxi-service') || sLower.includes('taxi service') || sLower.includes('taxi-in-tirupati') || (sLower.includes('taxi') && sLower.includes('tirupati')) ||
    sLower.includes('airport-taxi') || sLower.includes('airport taxi') ||
    sLower.includes('car-for-rent') || sLower.includes('day hire') || sLower.includes('day-rentals')
  );

  const isLocalPackages = sLower.includes('local-packages') || sLower.includes('local packages');
  const isStudentPackages = sLower.includes('student-packages') || sLower.includes('student packages');
  const isCustomPackages = sLower.includes('customized-packages') || sLower.includes('customized packages');
  const isBalajiTour = sLower.includes('balaji-darshan') || sLower.includes('balaji darshan');

  const rawExtraHr = (vehicle.extraHr && vehicle.extraHr !== 'extra hr') ? vehicle.extraHr : '₹200/hr';
  const rawOutstation = vehicle.outstation || '₹15/km';

  const extraHrStr = rawExtraHr.replace(/\/hr?$/i, '/hr');
  const extraKmStr = `${rawOutstation.replace(/\/km?$/i, '')}/extra km`;
  const localExtraInfo = `${extraHrStr} & ${extraKmStr}`;
  const outstationExtraInfo = vehicle.minimum ? (vehicle.minimum.toLowerCase().startsWith('min') ? vehicle.minimum : `Min ${vehicle.minimum}`) : 'Min 300 km/day';

  const cleanPrice = (p) => p ? p.split('/')[0].trim() : '';

  const rateOptions = isLocalPackages ? [
    { key: 'local', label: 'Local 8h / 80km', price: cleanPrice(vehicle.local), subText: localExtraInfo },
    { key: 'localLong', label: 'Local 12h / 150km', price: cleanPrice(vehicle.localLong), subText: localExtraInfo }
  ] : [
    { key: 'local', label: 'Local 8h / 80km', price: cleanPrice(vehicle.local), subText: localExtraInfo },
    { key: 'localLong', label: 'Local 12h / 150km', price: cleanPrice(vehicle.localLong), subText: localExtraInfo },
    { key: 'outstation', label: 'Outstation', price: vehicle.outstation, subText: outstationExtraInfo }
  ];

  const currentOption = rateOptions.find(r => r.key === selectedRate) || rateOptions[0];

  const waMessage = isDedicatedTaxiRental 
    ? `Hi, I want to book ${vehicle.name} in Tirupati (${vehicle.local || vehicle.price}). Please share availability.`
    : `Hi, I want to book ${vehicle.name} in Tirupati for ${currentOption.label} (${currentOption.price}). Please share availability.`;

  const handleBookClick = () => {
    const isOutstation = selectedRate === 'outstation';
    const tripType = isOutstation ? 'Outstation Tour' : 'Local Sightseeing';
    const defaultDest = isOutstation ? 'Outstation Tour (Arunachalam / Vellore)' : 'Tirupati Local Sightseeing';

    selectBooking({
      vehicle: vehicle.name,
      trip: tripType,
      to: defaultDest,
      price: vehicle.local || currentOption.price
    });

    onBook({
      name: vehicle.name,
      service: isDedicatedTaxiRental ? `${vehicle.name} Rental` : `${vehicle.name} - ${currentOption.label} (${currentOption.price})`,
      price: vehicle.local || currentOption.price,
      slug: pageSlug,
      pageSlug: pageSlug
    });
  };

  return (
    <article className="vehicle-card" key={vehicle.id}>
      <div className="vehicle-photo-wrap">
        <img src={vehicle.image} alt={vehicle.name} />
        <span className="vehicle-driver-tag">WITH EXPERIENCED DRIVER</span>
      </div>
      <div className="vehicle-card-content">
        <div className="vehicle-top-badge">
          <Sparkles size={14} />
          <span>{vehicle.category}</span>
        </div>
        <h3>{vehicle.name}</h3>
        <p className="vehicle-capacity">{vehicle.seats} Seats • {vehicle.bags} Bags</p>

        <div className="vehicle-specs-pills">
          <span><Users size={13} /> {vehicle.seats} Seats</span>
          <span><Luggage size={13} /> {vehicle.bags} Bags</span>
          <span><Snowflake size={13} /> Air Conditioned</span>
        </div>

        {/* SELECTABLE RATES SECTION - Hidden on dedicated taxi/rental pages */}
        {!isDedicatedTaxiRental && !isCustomPackages && !isStudentPackages && (
          <div className="selectable-rates-container" style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', display: 'block', marginBottom: '0.35rem', letterSpacing: '0.04em' }}>
              SELECT RATE PLAN:
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${rateOptions.length}, 1fr)`, gap: '0.35rem' }}>
              {rateOptions.map(opt => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => setSelectedRate(opt.key)}
                  style={{
                    padding: '0.5rem 0.2rem',
                    borderRadius: 8,
                    border: selectedRate === opt.key ? '2px solid #d97706' : '1.5px solid #cbd5e1',
                    background: selectedRate === opt.key ? '#fffdf5' : '#f8fafc',
                    cursor: 'pointer',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2px',
                    boxShadow: selectedRate === opt.key ? '0 4px 10px rgba(217, 119, 6, 0.15)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <small style={{ fontSize: '0.6rem', fontWeight: 800, color: selectedRate === opt.key ? '#d97706' : '#64748b', textTransform: 'uppercase' }}>
                    {opt.label}
                  </small>
                  <b style={{ fontSize: '0.76rem', fontWeight: 800, color: '#0a0a0a', whiteSpace: 'nowrap' }}>
                    {opt.price}
                  </b>
                  <small style={{ fontSize: '0.52rem', fontWeight: 700, color: '#d97706', display: 'block', marginTop: '1px', lineHeight: 1.15 }}>
                    {opt.subText}
                  </small>
                </button>
              ))}
            </div>
          </div>
        )}

        {isDedicatedTaxiRental && (
          <div style={{ margin: '0.6rem 0', background: '#fffdf5', padding: '0.5rem 0.75rem', borderRadius: 8, border: '1.5px solid #fde68a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700 }}>Starting Fare:</span>
            <strong style={{ fontSize: '1rem', color: '#d97706', fontWeight: 800 }}>{vehicle.local || '₹2,880'}</strong>
          </div>
        )}

        {isStudentPackages && (
          <div style={{ margin: '0.6rem 0', background: '#f0fdf4', padding: '0.5rem 0.75rem', borderRadius: 8, border: '1px solid #bbf7d0', fontSize: '0.78rem', color: '#15803d', fontWeight: 800 }}>
            🎓 Student Group Special Fare Applicable
          </div>
        )}

        {isCustomPackages && (
          <div style={{ margin: '0.6rem 0', background: '#fffbeb', padding: '0.5rem 0.75rem', borderRadius: 8, border: '1px solid #fde68a', fontSize: '0.78rem', color: '#c68a0a', fontWeight: 800 }}>
            💬 Custom Itinerary Quote on Request
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '0.5rem' }}>
          <a 
            href={`${whatsapp}?text=${encodeURIComponent(waMessage)}`} 
            target="_blank" 
            rel="noreferrer"
            className="button vehicle-book-btn"
            style={{ flex: 1, padding: '0.6rem 0.4rem', fontSize: '0.82rem' }}
          >
            <MessageCircle size={14} /> WhatsApp
          </a>
          <button 
            type="button"
            className="button vehicle-book-btn"
            style={{ flex: 1, padding: '0.6rem 0.4rem', fontSize: '0.82rem', background: 'linear-gradient(135deg, #e5a919, #c68a0a)', borderColor: '#e5a919' }}
            onClick={handleBookClick}
          >
            <CreditCard size={14} /> Book 💳
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ServiceLanding({ slug: routeSlug }) {
  const { fleets } = useData();
  const currentFleets = fleets && fleets.length > 0 ? fleets : fleet;
  const params = useParams();
  const slug = routeSlug || params.slug;
  const data = servicePages[slug];
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedPayVehicle, setSelectedPayVehicle] = useState(null);

  if (!data) {
    return (
      <main className="service-page content not-found-page">
        <h1>Service Page Not Found</h1>
        <p>The requested rental or taxi service page could not be found.</p>
        <Link className="button" to="/services">
          View All Services
        </Link>
      </main>
    );
  }

  const booking = `${whatsapp}?text=${encodeURIComponent(
    `Hi, I am interested in ${data.title}. Please share vehicle availability and exact trip fare.`
  )}`;
  
  const initialCategory = 
    slug === 'tempo-traveller-rental-in-tirupati' ? 'tempo' :
    slug === 'urbania-traveller-rental-in-tirupati' ? 'urbania' :
    slug === 'bus-rental-in-tirupati' ? 'bus' :
    (slug === 'car-rentals-in-tirupati' || slug === 'car-for-rent-in-tirupati-day-rentals') ? 'cars' :
    'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [slug]);

  // Helper matchers for categories (works for existing seeded fleets and newly added admin fleets)
  const isCarVehicle = (v) => {
    const cat = (v.category || '').toUpperCase();
    const id = (v.id || '').toLowerCase();
    const name = (v.name || '').toLowerCase();
    return ['sedan', 'ertiga', 'innova-crysta', 'hycross', 'fortuner'].includes(id) ||
      cat.includes('SEDAN') || cat.includes('MUV') || cat.includes('SUV') || cat.includes('CAR') ||
      name.includes('sedan') || name.includes('etios') || name.includes('dzire') || name.includes('ertiga') || name.includes('innova') || name.includes('hycross') || name.includes('fortuner');
  };

  const isTempoVehicle = (v) => {
    const cat = (v.category || '').toUpperCase();
    const id = (v.id || '').toLowerCase();
    const name = (v.name || '').toLowerCase();
    return ['tempo-12', 'tempo-16', 'tempo-20'].includes(id) ||
      (cat.includes('TEMPO') && !cat.includes('URBANIA')) ||
      (name.includes('tempo') && !name.includes('urbania'));
  };

  const isUrbaniaVehicle = (v) => {
    const cat = (v.category || '').toUpperCase();
    const id = (v.id || '').toLowerCase();
    const name = (v.name || '').toLowerCase();
    return ['urbania-12', 'urbania-16'].includes(id) ||
      cat.includes('URBANIA') || name.includes('urbania');
  };

  const isBusVehicle = (v) => {
    const cat = (v.category || '').toUpperCase();
    const id = (v.id || '').toLowerCase();
    const name = (v.name || '').toLowerCase();
    return ['bus-27', 'bus-40', 'bus-45'].includes(id) ||
      cat.includes('BUS') || cat.includes('COACH') || name.includes('bus') || name.includes('coach');
  };

  const carsCount = currentFleets.filter(isCarVehicle).length;
  const tempoCount = currentFleets.filter(isTempoVehicle).length;
  const urbaniaCount = currentFleets.filter(isUrbaniaVehicle).length;
  const busCount = currentFleets.filter(isBusVehicle).length;

  const isCarOnlyPage = slug === 'car-rentals-in-tirupati' || slug === 'car-for-rent-in-tirupati-day-rentals';
  const isTempoOnlyPage = slug === 'tempo-traveller-rental-in-tirupati';
  const isUrbaniaOnlyPage = slug === 'urbania-traveller-rental-in-tirupati';
  const isBusOnlyPage = slug === 'bus-rental-in-tirupati';
  const isDedicatedFleetPage = isCarOnlyPage || isTempoOnlyPage || isUrbaniaOnlyPage || isBusOnlyPage;

  const displayedVehicles = isCarOnlyPage
    ? currentFleets.filter(isCarVehicle)
    : isTempoOnlyPage
    ? currentFleets.filter(isTempoVehicle)
    : isUrbaniaOnlyPage
    ? currentFleets.filter(isUrbaniaVehicle)
    : isBusOnlyPage
    ? currentFleets.filter(isBusVehicle)
    : (selectedCategory === 'all' 
        ? currentFleets 
        : currentFleets.filter(v => {
            if (selectedCategory === 'cars') return isCarVehicle(v);
            if (selectedCategory === 'tempo') return isTempoVehicle(v);
            if (selectedCategory === 'urbania') return isUrbaniaVehicle(v);
            if (selectedCategory === 'bus') return isBusVehicle(v);
            return false;
          }));

  const trips = tripMap[slug] || defaultTrips;
  const isPackagePage = [
    'local-packages', 'outstation-packages', 'balaji-darshan-packages',
    'corporate-packages', 'customized-packages', 'holiday-packages',
    'family-packages', 'student-packages', 'wedding-packages', 'devotional-packages'
  ].includes(slug);
  const isTaxiServicePage = [
    'taxi-in-tirupati',
    'car-rentals-in-tirupati',
    'car-for-rent-in-tirupati-day-rentals',
    'outstation-taxi-in-tirupati',
    'tirupati-airport-taxi'
  ].includes(slug);

  return (
    <main className={`service-page ${isPackagePage ? 'package-detail-page' : ''} ${isTaxiServicePage ? 'taxi-service-page' : ''}`}>
      <SEO
        title={`${data.title} | Taxi in Tirupati`}
        description={`${data.intro} Book online or call +91-9014677289. 24/7 AC cabs, verified drivers, transparent pricing.`}
        canonical={`/${slug.startsWith('services/') ? slug : (isPackagePage ? `services/${slug}` : slug)}`}
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'FAQPage',
              mainEntity: data.faqs.map(([q, a]) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a }
              }))
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://taxi-in-tirupati.com/' },
                { '@type': 'ListItem', position: 2, name: data.title, item: `https://taxi-in-tirupati.com/${slug}` }
              ]
            }
          ]
        }}
      />
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-backdrop-gradient"></div>
        <div className="service-hero-copy">
          <div className="hero-badge-pill">
            <Sparkles size={14} className="sparkle-icon" />
            <span>TAXI IN TIRUPATI • 24x7 VERIFIED SERVICE</span>
          </div>

          <span className="hero-kicker-tag">{data.eyebrow}</span>
          <h1>{data.title}</h1>
          <p className="hero-description">{data.intro}</p>

          <div className="hero-trust-badges">
            {slug === 'tirupati-airport-taxi' ? (
              <>
                <span><CheckCircle2 size={15} /> 24/7 Flight Tracking</span>
                <span><CheckCircle2 size={15} /> Zero Surge Pricing</span>
                <span><CheckCircle2 size={15} /> Direct Hotel & Temple Drop</span>
              </>
            ) : slug === 'tempo-traveller-rental-in-tirupati' ? (
              <>
                <span><CheckCircle2 size={15} /> Reclining Push-Back Seats</span>
                <span><CheckCircle2 size={15} /> TV & USB Charging Ports</span>
                <span><CheckCircle2 size={15} /> Ample Luggage Boot</span>
              </>
            ) : slug === 'urbania-traveller-rental-in-tirupati' ? (
              <>
                <span><CheckCircle2 size={15} /> Ultra Luxury Recliner Cabin</span>
                <span><CheckCircle2 size={15} /> Executive Corporate Comfort</span>
                <span><CheckCircle2 size={15} /> Air Suspension Smooth Ride</span>
              </>
            ) : slug === 'bus-rental-in-tirupati' ? (
              <>
                <span><CheckCircle2 size={15} /> 27 to 50 Seater Coaches</span>
                <span><CheckCircle2 size={15} /> Wedding & Event Shuttles</span>
                <span><CheckCircle2 size={15} /> Experienced Highway Drivers</span>
              </>
            ) : slug === 'outstation-taxi-in-tirupati' ? (
              <>
                <span><CheckCircle2 size={15} /> Interstate Border Permits</span>
                <span><CheckCircle2 size={15} /> Per KM Transparent Rates</span>
                <span><CheckCircle2 size={15} /> One-Way & Round Trips</span>
              </>
            ) : (
              <>
                <span><CheckCircle2 size={15} /> Verified Local Drivers</span>
                <span><CheckCircle2 size={15} /> Clean Sanitized AC Fleet</span>
                <span><CheckCircle2 size={15} /> Doorstep Pickup & Drop</span>
              </>
            )}
          </div>

          <div className="service-actions" style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <a className="button hero-call-btn" href={`tel:${phone}`}>
              <Phone size={16} /> Call {phone}
            </a>
            <a className="button hero-wa-btn" href={booking} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> WhatsApp Quote
            </a>
            <button
              type="button"
              className="button hero-pay-btn"
              style={{ background: 'linear-gradient(135deg, #e5a919, #c68a0a)', borderColor: '#e5a919', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              onClick={() => setSelectedPayVehicle({ 
                service: data.title,
                price: '2500', 
                isHero: true,
                slug,
                category: selectedCategory || initialCategory
              })}
            >
              <CreditCard size={16} /> Book 💳
            </button>
          </div>
        </div>

        <div className="service-hero-image-card">
          <img src={data.image || images.etios} alt={data.title} />
          <div className="hero-image-glass-tag">
            <Award size={18} />
            <div>
              <strong>Top Rated Service</strong>
              <small>Doorstep Pickup & 24/7 Support</small>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Specs Container */}
      <section className="section service-quick-container">
        <div className="service-quick-grid">
          {slug === 'tirupati-airport-taxi' ? (
            <>
              <div className="quick-item">
                <Clock3 size={22} />
                <div><b>24×7 Flight Tracking</b><small>Pickup matched to your flight schedule</small></div>
              </div>
              <div className="quick-item">
                <CreditCard size={22} />
                <div><b>Fixed Airport Rates</b><small>TIR, Chennai & Bangalore transfers</small></div>
              </div>
              <div className="quick-item">
                <MapPin size={22} />
                <div><b>Direct Hotel Drop</b><small>Doorstep service from airport</small></div>
              </div>
            </>
          ) : slug === 'tempo-traveller-rental-in-tirupati' ? (
            <>
              <div className="quick-item">
                <Users size={22} />
                <div><b>12 to 20 Seater Fleet</b><small>Push-back seats & spacious interior</small></div>
              </div>
              <div className="quick-item">
                <Luggage size={22} />
                <div><b>Luggage & Media Amenities</b><small>Boot space, TV screen & USB ports</small></div>
              </div>
              <div className="quick-item">
                <ShieldCheck size={22} />
                <div><b>Hill Route Drivers</b><small>Expert drivers for Tirumala ghat road</small></div>
              </div>
            </>
          ) : slug === 'urbania-traveller-rental-in-tirupati' ? (
            <>
              <div className="quick-item">
                <Sparkles size={22} />
                <div><b>Ultra Luxury Cabin</b><small>Plush recliners & quiet ride</small></div>
              </div>
              <div className="quick-item">
                <Award size={22} />
                <div><b>Executive & Family Use</b><small>Ideal for VIPs & corporate travel</small></div>
              </div>
              <div className="quick-item">
                <Clock3 size={22} />
                <div><b>24/7 Dedicated Support</b><small>Personal trip coordinator</small></div>
              </div>
            </>
          ) : slug === 'bus-rental-in-tirupati' ? (
            <>
              <div className="quick-item">
                <CarFront size={22} />
                <div><b>27 to 50 Seater Coaches</b><small>High capacity AC buses</small></div>
              </div>
              <div className="quick-item">
                <Users size={22} />
                <div><b>Event & Marriage Fleet</b><small>Coordinated guest transportation</small></div>
              </div>
              <div className="quick-item">
                <Navigation size={22} />
                <div><b>Interstate Permits</b><small>Managed state border permits</small></div>
              </div>
            </>
          ) : slug === 'outstation-taxi-in-tirupati' ? (
            <>
              <div className="quick-item">
                <Fuel size={22} />
                <div><b>Per-KM Transparent Rates</b><small>300 km/day standard minimum</small></div>
              </div>
              <div className="quick-item">
                <ShieldCheck size={22} />
                <div><b>Interstate Permits Handled</b><small>Hassle-free border crossing</small></div>
              </div>
              <div className="quick-item">
                <RouteIcon size={22} />
                <div><b>One-Way & Round Trips</b><small>Routes across AP, TN, KA & TS</small></div>
              </div>
            </>
          ) : (
            <>
              <div className="quick-item">
                <MapPin size={22} />
                <div><b>Local & Outstation</b><small>Flexible pickup from airport, station, hotel</small></div>
              </div>
              <div className="quick-item">
                <Clock3 size={22} />
                <div><b>24×7 Instant Booking</b><small>Round-the-clock driver & vehicle assistance</small></div>
              </div>
              <div className="quick-item">
                <ShieldCheck size={22} />
                <div><b>Experienced Drivers</b><small>Familiar with Tirumala & South India routes</small></div>
              </div>
            </>
          )}
          <div className="quick-action-box">
            <button
              type="button"
              className="button quick-book-btn"
              style={{ border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              onClick={() => setSelectedPayVehicle({ service: data.title, price: '2880', slug })}
            >
              Book Cab 💳 <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* About & Key Features Section */}
      <section className="section longform-section service-about-section">
        <div className="service-about-grid">
          <div>
            <span className="badge-pill"><CarFront size={13} /> ABOUT THIS SERVICE</span>
            <h2>{slug === 'car-rentals-in-tirupati' ? 'Car Rentals in Tirupati — Your Reliable Partner for Every Journey' : data.whyTitle || 'Travel around Tirupati with a plan tailored to your group'}</h2>
            <p className="lead-about-text">
              {data.intro} Whether you need a short temple transfer, a full-day city trip, or a multi-day South India pilgrimage circuit, choose the exact vehicle model that fits your group size and budget.
            </p>
          </div>

          <div className="service-about-points">
            <div className="point-card">
              <CheckCircle2 size={20} />
              <div>
                <strong>Doorstep Pickup & Drop</strong>
                <p>Pickup directly from Tirupati Airport, Railway Station, Hotel, or your home address.</p>
              </div>
            </div>
            <div className="point-card">
              <CheckCircle2 size={20} />
              <div>
                <strong>Local & Outstation Circuits</strong>
                <p>Cover Tirumala, Srikalahasti, Kanipakam, Vellore Golden Temple, Arunachalam, Pondicherry & more.</p>
              </div>
            </div>
            <div className="point-card">
              <CheckCircle2 size={20} />
              <div>
                <strong>Versatile Vehicle Options</strong>
                <p>Sedans, MUVs, Innova Crysta, 12-20 Seater Tempo Travellers, Urbania & Luxury Buses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Booking Process */}
      <section className="section longform-section pale">
        <div className="section-header-centered">
          <span className="badge-pill"><Navigation size={13} /> EASY 4-STEP BOOKING</span>
          <h2>Simple Booking. Exceptional Travel.</h2>
          <p>Book your preferred vehicle in under two minutes with zero hassle</p>
        </div>

        <div className="booking-steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3>Choose Package Tour or Fleet</h3>
            <p>Select your desired tour package, cab route, or vehicle rental based on your travel needs.</p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Select That</h3>
            <p>Choose your preferred rate plan (Local 8h, Local 12h, or Outstation) and click Book 💳 or WhatsApp.</p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Fill the Information</h3>
            <p>Enter your details including Name, Phone, Vehicle, Date, and Pickup Point.</p>
          </div>

          <div className="step-card">
            <div className="step-number">04</div>
            <h3>Adv ₹1,000 Payment</h3>
            <p>Pay only ₹1,000 advance to instantly lock your booking & vehicle with 100% confirmation.</p>
          </div>
        </div>
      </section>

      {/* Vehicle Options & Pricing Grid (ALL 13 VEHICLES WITH CATEGORY FILTER) */}
      <section className="section longform-section" id="vehicles">
        <div className="section-header">
          <span className="badge-pill gold"><Car size={13} /> {slug === 'car-rentals-in-tirupati' ? 'OUR CAR RENTAL PACKAGES' : 'VEHICLE OPTIONS & TARIFFS'}</span>
          <h2>{slug === 'car-rentals-in-tirupati' ? 'Select Your Car — Comfort, Space or Luxury' : 'Choose the Perfect Vehicle for Your Trip'}</h2>
          <p>{data.outstation}</p>
        </div>

        {/* Category Filter Tabs */}
        {!isDedicatedFleetPage && (
          <div className="fleet-filter-tabs" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem', justifyContent: 'center' }}>
            {[
              { key: 'all', label: `All Vehicles (${currentFleets.length})` },
              { key: 'cars', label: `Cars (${carsCount})` },
              { key: 'tempo', label: `Tempo Travellers (${tempoCount})` },
              { key: 'urbania', label: `Urbania (${urbaniaCount})` },
              { key: 'bus', label: `Buses (${busCount})` }
            ].map(cat => (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.key);
                  const el = document.getElementById('service-vehicles-grid');
                  if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < 120) {
                      const y = window.pageYOffset + rect.top - 130;
                      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
                    }
                  }
                }}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: '999px',
                  border: selectedCategory === cat.key ? '2px solid #e5a919' : '1.5px solid #cbd5e1',
                  background: selectedCategory === cat.key ? '#e5a919' : '#ffffff',
                  color: selectedCategory === cat.key ? '#ffffff' : '#334155',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: selectedCategory === cat.key ? '0 4px 12px rgba(2, 132, 199, 0.25)' : 'none'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        <div className="service-vehicles-grid" id="service-vehicles-grid">
          {displayedVehicles.map(vehicle => (
            <TaxiVehicleCard 
              key={vehicle.id} 
              vehicle={vehicle} 
              pageSlug={slug}
              onBook={(payload) => setSelectedPayVehicle(payload)} 
            />
          ))}
        </div>

        {(slug === 'car-rentals-in-tirupati' || isTaxiServicePage) && (
          <div className="fare-note-box">
            <Info size={18} />
            <p>
              <b>Important Tariff Note:</b> Tolls, parking, state/interstate permit fees, driver bata, and additional hour/km charges apply as per actual trip usage. Minimum billing distances are calculated from our Tirupati office.
            </p>
          </div>
        )}
      </section>

      {/* Popular Routes Distance Chart for Car Rentals / Outstation */}
      {(slug === 'car-rentals-in-tirupati' || slug === 'car-for-rent-in-tirupati-day-rentals' || slug === 'outstation-taxi-in-tirupati' || slug === 'taxi-in-tirupati') && (
        <section className="section longform-section pale">
          <div className="section-header">
            <span className="badge-pill"><RouteIcon size={13} /> DISTANCE & TIME GUIDE</span>
            <h2>Popular Outstation Routes & Travel Times</h2>
            <p>Quick reference distances from Tirupati to major pilgrimage destinations and cities</p>
          </div>

          <div className="route-table-card">
            <div className="route-table-grid">
              {carRoutes.map(([route, distance, time]) => (
                <div className="route-row-item" key={route}>
                  <span className="route-name"><RouteIcon size={16} /> {route}</span>
                  <b className="route-dist">{distance}</b>
                  <small className="route-time">{time}</small>
                  <a 
                    href={`${whatsapp}?text=${encodeURIComponent(`Hi, I want to plan a cab trip from ${route}.`)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="route-plan-link"
                  >
                    Plan Trip <ArrowRight size={13} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Top Features Grid */}
      {data.featureDetails && (
        <section className="section longform-section">
          <div className="section-header">
            <span className="badge-pill"><Award size={13} /> VEHICLE AMENITIES</span>
            <h2>Comfort & Features On-Board</h2>
            <p>Enjoy premium amenities designed for a smooth and relaxing journey</p>
          </div>

          <div className="features-grid">
            {data.featureDetails.map((x, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <article key={x[0]} className="feature-card">
                  <div className="feature-icon-box"><Icon size={22} /></div>
                  <h3>{x[0]}</h3>
                  <p>{x[1]}</p>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* Popular Trips Grid */}
      <section className="section longform-section pale">
        <div className="section-header">
          <span className="badge-pill gold"><MapPin size={13} /> POPULAR TRIPS & DESTINATIONS</span>
          <h2>Favorite Circuits Customers Plan from Tirupati</h2>
          <p>Choose an itinerary below or send us your customized travel plan</p>
        </div>

        <div className="service-trip-grid">
          {trips.map(([title, route, meta]) => (
            <article key={title} className="trip-card">
              <div className="trip-image-wrap">
                <img src={tripImage(title, route)} alt={title} />
              </div>
              <div className="trip-card-content">
                <small className="trip-meta-tag">{meta}</small>
                <h3>{title}</h3>
                <p className="trip-route-desc">{route}</p>
                <a 
                  href={`${whatsapp}?text=${encodeURIComponent(`Hi, I would like to plan the trip: ${title} (${route}). Please share details.`)}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="trip-plan-btn"
                >
                  Plan This Trip <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Included & Additional Details Card */}
      <section className="section longform-section">
        <div className="section-header">
          <span className="badge-pill"><ShieldCheck size={13} /> TRANSPARENT TERMS</span>
          <h2>What's Included & Arranged</h2>
        </div>

        <div className="inclusions-grid">
          <div className="inclusion-card">
            <h3>Included & Arranged</h3>
            <p>Air-conditioned vehicle with fuel, experienced driver for confirmed itinerary, doorstep pickup & drop, and trip coordination support.</p>
          </div>
          <div className="inclusion-card">
            <h3>Usually Additional</h3>
            <p>Interstate permits, toll gate fees, parking charges, driver bata, and entry tickets as per actual trip route usage.</p>
          </div>
          <div className="inclusion-card">
            <h3>Pre-Trip Advice</h3>
            <p>Share your departure date, pickup location, destination, group size, and preferred vehicle to receive a finalized quotation.</p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section longform-section pale">
        <div className="section-header">
          <span className="badge-pill"><Info size={13} /> FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Find quick answers to common questions regarding our taxi and rental services</p>
        </div>

        <div className="service-faq-list">
          {data.faqs.map(([q, a], i) => (
            <details 
              key={q} 
              className="service-faq-item"
              open={openFaq === i}
              onClick={(e) => {
                e.preventDefault();
                setOpenFaq(openFaq === i ? null : i);
              }}
            >
              <summary className="service-faq-summary">
                <span>{q}</span>
                <ChevronDown className="faq-chevron" size={18} />
              </summary>
              <div className="service-faq-answer">
                <p>{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* --- STATS COUNTER BANNER --- */}
      <StatsBanner title="Trusted Vehicle Rentals & Cab Services" subtitle="WHY CHOOSE US" />

      {/* Bottom CTA Banner */}
      <section className="service-final-cta">
        <div className="final-cta-copy">
          <span className="badge-pill gold"><Sparkles size={13} /> READY FOR YOUR TRIP?</span>
          <h2>Plan Your Journey with Taxi in Tirupati</h2>
          <p>Share your travel date, pickup point, destination, and vehicle preference. We will confirm vehicle availability and send an instant quote.</p>
          
          <div className="service-actions cta-actions">
            <a className="button hero-call-btn" href={`tel:${phone}`}>
              <Phone size={16} /> Call {phone}
            </a>
            <a className="button hero-wa-btn" href={booking} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Easebuzz Checkout Modal */}
      {selectedPayVehicle && (
        <EasebuzzModal 
          isOpen={Boolean(selectedPayVehicle)}
          onClose={() => setSelectedPayVehicle(null)}
          initialData={{
            service: selectedPayVehicle.service || data.title || slug,
            slug: selectedPayVehicle.slug || slug,
            pageSlug: slug,
            pageTitle: data?.title,
            vehicle: selectedPayVehicle.name,
            amount: '1000',
            fullAmount: selectedPayVehicle.price || '2880'
          }}
        />
      )}
    </main>
  );
}
