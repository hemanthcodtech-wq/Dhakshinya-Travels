import { packageDetails } from './packageDetails';
import { packageItineraries } from './packageItineraries';
import { fleet } from './fleetData';

export function getVehicleInfo(name, customFleets = null) {
  const activeFleet = (customFleets && customFleets.length > 0) ? customFleets : fleet;
  if (!name) return activeFleet[0] || fleet[0];
  const n = name.toLowerCase();

  // Try direct match from active fleet first (including admin added vehicles)
  const directMatch = activeFleet.find(f => {
    const fName = (f.name || '').toLowerCase();
    const fId = (f.id || '').toLowerCase();
    return fName === n || fId === n || n.includes(fName) || fName.includes(n);
  });
  if (directMatch) return directMatch;

  if (n.includes('fortuner')) return activeFleet.find(f => f.id === 'fortuner') || fleet[4];
  if (n.includes('hycross')) return activeFleet.find(f => f.id === 'hycross') || fleet[3];
  if (n.includes('crysta') || n.includes('innova')) return activeFleet.find(f => f.id === 'innova-crysta') || fleet[2];
  if (n.includes('ertiga')) return activeFleet.find(f => f.id === 'ertiga') || fleet[1];
  if (n.includes('urbania 16') || n.includes('urbania (16')) return activeFleet.find(f => f.id === 'urbania-16') || fleet[8];
  if (n.includes('urbania')) return activeFleet.find(f => f.id === 'urbania-12') || fleet[6];
  if (n.includes('20 seater') || n.includes('20-seater')) return activeFleet.find(f => f.id === 'tempo-20') || fleet[9];
  if (n.includes('16 seater') || n.includes('16-seater')) return activeFleet.find(f => f.id === 'tempo-16') || fleet[7];
  if (n.includes('12 seater') || n.includes('12-seater')) return activeFleet.find(f => f.id === 'tempo-12') || fleet[5];
  if (n.includes('45 seater') || n.includes('45-seater')) return activeFleet.find(f => f.id === 'bus-45') || fleet[12];
  if (n.includes('40 seater') || n.includes('40-seater')) return activeFleet.find(f => f.id === 'bus-40') || fleet[11];
  if (n.includes('27 seater') || n.includes('mini bus')) return activeFleet.find(f => f.id === 'bus-27') || fleet[10];
  if (n.includes('sedan') || n.includes('etios') || n.includes('dzire')) return activeFleet.find(f => f.id === 'sedan') || fleet[0];
  return activeFleet[0] || fleet[0];
}

export const packagesData = [
  {
    name: '2 Days Arunachalam Package',
    duration: '2 Days',
    route: 'Tirupati → Tiruttani → Kanchipuram → Arunachalam → Vellore → Kanipakam → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290980/arunachalam-2-days.png',
    slug: '2-days-arunachalam-package',
    aliases: ['tirupati-to-arunachalam-packages', 'arunachalam-2-days']
  },
  {
    name: '1 Day Arunachalam Package',
    duration: '1 Day',
    route: 'Tirupati → Kanipakam → Golden Temple → Arunachalam → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290831/arunachalam-1-day.webp',
    slug: '1-day-arunachalam-package',
    aliases: ['tirupati-to-arunachalam-taxi-service', 'arunachalam-1-day']
  },
  {
    name: 'Pancha Linga Tour from Tirupati',
    duration: '3 Days',
    route: 'Tirupati → Srikalahasti → Kanchipuram → Chidambaram → Srirangam → Arunachalam → Vellore → Kanipakam → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290858/pancha-linga-tour.png',
    slug: 'pancha-linga-tour-from-tirupati',
    aliases: ['pancha-linga-tour']
  },
  {
    name: '4 Days Tirupati Temple Tour Package – South India Pilgrimage Tour',
    duration: '4 Days',
    route: 'Tirupati → Tirumala → Kanipakam → Vellore → Arunachalam → Kanchipuram → Tiruttani → Srikalahasti → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290864/tirupati-4-days-temple-tour.jpg',
    slug: '4-days-tirupati-temple-tour-package',
    aliases: ['south-india-pilgrimage-tour', 'tirupati-4-days-temple-tour']
  },
  {
    name: 'Tirupati 1 Day Taxi Package',
    duration: '1 Day',
    route: 'Tirupati → Padmavathi → Tirumala → Varahaswamy → Balaji Darshan → Kapila Theertham → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290873/tirupati-1-day-taxi.png',
    slug: 'tirupati-1-day-taxi-package',
    aliases: ['tirupati-to-tirumala-taxi-service', 'tirupati-1-day-taxi']
  },
  {
    name: 'Tirupati 2 Days Taxi Package',
    duration: '2 Days',
    route: 'Tirupati → Tirumala → Balaji Darshan → Kapila Theertham → ISKCON → Govindaraja → Padmavathi → Srikalahasti → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290881/tirupati-2-days-taxi.png',
    slug: 'tirupati-2-days-taxi-package',
    aliases: ['tirupati-2-days-taxi']
  },
  {
    name: 'Tirupati to Golden Temple Vellore Tour',
    duration: '1 Day',
    route: 'Tirupati → Srinivasa Mangapuram → Kanipakam → Golden Temple → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290888/vellore-golden-temple.jpg',
    slug: 'tirupati-to-golden-temple-vellore-tour',
    aliases: ['tirupati-to-golden-temple-vellore-taxi-service', 'vellore-golden-temple']
  },
  {
    name: 'Tirupati to Kanipakam Temple Tour',
    duration: '1 Day',
    route: 'Tirupati → Vakula Devi → Srinivasa Mangapuram → Kanipakam → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290895/kanipakam-tour.jpg',
    slug: 'tirupati-to-kanipakam-temple-tour',
    aliases: ['tirupati-to-kanipakam-taxi-service', 'kanipakam-tour']
  },
  {
    name: 'Tirupati 5 Local Temples Tour Package',
    duration: '1 Day',
    route: 'Tirupati → Kapila Theertham → ISKCON → Govindaraja Swamy → Padmavathi → Srikalahasti → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290903/tirupati-5-local-temples.png',
    slug: 'tirupati-5-local-temples-tour-package',
    aliases: ['tirupati-5-local-temples-taxi-service', 'tirupati-5-local-temples']
  },
  {
    name: 'Tirupati to Kanchipuram Taxi Service',
    duration: '1 Day',
    route: 'Tirupati → Tiruttani → Kanchipuram → Varadaraja Perumal Temple → Kamakshi Amman Temple → Kailasanathar Temple → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290910/kanchipuram-taxi.png',
    slug: 'tirupati-to-kanchipuram-taxi-service',
    aliases: ['kanchipuram-taxi']
  },
  {
    name: 'Tirupati to Mahabalipuram Taxi Service',
    duration: '2 Days',
    route: 'Tirupati → Kanchipuram → Kailasanathar Temple → Vaikunta Perumal Temple → Mahabalipuram Beach → Pancha Rathas → Arjuna’s Penance → Shore Temple → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290918/mahabalipuram-taxi.png',
    slug: 'tirupati-to-mahabalipuram-taxi-service',
    aliases: ['mahabalipuram-taxi']
  },
  {
    name: 'Divine 5 Day South India Temple Tour Package',
    duration: '5 Days',
    route: 'Tirupati → Tirumala → Srinivasa Mangapuram → Kanipakam → Golden Temple (Vellore) → Arunachalam → Srirangam → Kanchipuram → Tiruttani → Tirupati → Srikalahasti → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290925/south-india-temple-tour.png',
    slug: 'divine-5-day-south-india-temple-tour-package',
    aliases: ['south-india-temple-tour']
  },
  {
    name: 'Tirupati to Golden Temple Arunachalam Kanchipuram Taxi Service',
    duration: '2 Days',
    route: 'Tirupati → Kanipakam → Vellore → Arunachalam → Kanchipuram → Tiruttani → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290933/arunachalam-golden-temple-kanchipuram.jpg',
    slug: 'tirupati-to-golden-temple-arunachalam-kanchipuram-taxi-service',
    aliases: ['tirupati-to-golden-temple-arunachalam-kanchipuram-taxi-service-2']
  },
  {
    name: '2 Days Tirupati to Madurai Tour Package',
    duration: '2 Days',
    route: 'Tirupati → Madurai → Meenakshi Amman Temple → Madurai Sightseeing → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290940/tirupati-madurai-2-days.png',
    slug: '2-days-tirupati-to-madurai',
    aliases: ['tirupati-madurai-2-days']
  },
  {
    name: 'Pondicherry Tour Package',
    duration: '2 Days',
    route: 'Tirupati → Pondicherry → Promenade Beach → Rock Beach → French Colony → Paradise Beach → Auroville → Pondicherry Sightseeing → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290948/pondicherry-tour.png',
    slug: 'pondicherry-tour-packages',
    aliases: ['pondicherry-tour']
  },
  {
    name: '2 Days Tirupati to Srisailam Taxi Package',
    duration: '2 Days',
    route: 'Tirupati → Srisailam → Mallikarjuna Swamy Temple → Bhramaramba Devi Temple → Srisailam Dam → Akkamahadevi Caves → Paladhara Panchadhara → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290954/tirupati-srisailam-2-days.jpg',
    slug: '2-days-tirupati-to-srisailam-taxi-package',
    aliases: ['tirupati-srisailam-2-days']
  },
  {
    name: '3 Days Tirupati to Madurai Taxi Tour Package',
    duration: '3 Days',
    route: 'Tirupati → Arunachalam → Srirangam → Madurai → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290962/tirupati-madurai-3-days.png',
    slug: 'tirupati-to-madurai-taxi',
    aliases: ['tirupati-madurai-3-days']
  },
  {
    name: '4 Days Tirupati to Madurai Meenakshi Temple Tour Package',
    duration: '4 Days',
    route: 'Tirupati → Arunachalam → Srirangam → Madurai → Rameswaram → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290970/meenakshi-temple-4-days.png',
    slug: '4-days-tirupati-to-madurai-meenakshi-temple-distance-tour-package',
    aliases: ['meenakshi-temple-4-days']
  },
  {
    name: '3 Days Tirupati Pondicherry via Kanchipuram Tour Package',
    duration: '3 Days',
    route: 'Tirupati → Tiruttani → Kanchipuram → Pondicherry → Auroville → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291129/tirupati-pondicherry-3-days.webp',
    slug: '3-days-tirupati-pondicherry-tour-package',
    aliases: ['tirupati-pondicherry-3-days']
  },
  {
    name: '3 Days Tirupati Kanchipuram Temple Tour Package',
    duration: '3 Days',
    route: 'Tirupati → Tirumala → Tiruttani → Kanchipuram → Tirupati → Srikalahasti → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291137/tirupati-kanchipuram-3-days.jpg',
    slug: '3-days-tirupati-kanchipuram-temple-tour-package',
    aliases: ['tirupati-kanchipuram-3-days']
  },
  {
    name: '3 Days Tirupati Srisailam Srikalahasti Taxi Package',
    duration: '3 Days',
    route: 'Tirupati → Srikalahasti → Srisailam → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291143/tirupati-srisailam-srikalahasti-3-days.jpg',
    slug: '3-days-tirupati-srisailam-srikalahasti-taxi-package',
    aliases: ['tirupati-srisailam-srikalahasti-3-days']
  },
  {
    name: '3 Days Tirupati Golden Temple Taxi Package',
    duration: '3 Days',
    route: 'Tirupati → Tirumala → Srinivasa Mangapuram → Kanipakam → Vellore → Tirupati → Srikalahasti → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291152/tirupati-golden-temple-3-days.png',
    slug: '3-days-tirupati-golden-temple-package',
    aliases: ['tirupati-golden-temple-3-days']
  },
  {
    name: 'Best 5 Day Tirupati Arunachalam Mahabalipuram Tour Package',
    duration: '5 Days',
    route: 'Tirupati → Tirumala → Kanipakam → Vellore → Arunachalam → Mahabalipuram → Kanchipuram → Tiruttani → Tirupati → Srikalahasti → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291158/tirupati-arunachalam-mahabalipuram-5-days.jpg',
    slug: 'tirupati-arunachalam-mahabalipuram-tour-package',
    aliases: ['tirupati-arunachalam-mahabalipuram-5-days']
  },
  {
    name: '7 Days Divine Tamil Nadu Temple Tour from Tirupati',
    duration: '7 Days',
    route: 'Tirupati → Vellore → Arunachalam → Srirangam → Madurai → Trivandrum → Kanyakumari → Rameswaram → Kumbakonam → Chidambaram → Kanchipuram → Tirupati',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291165/tamil-nadu-temple-tour-7-days.png',
    slug: '7-day-divine-tamil-nadu-temple-tour-from-tirupati',
    aliases: ['tamil-nadu-temple-tour-7-days']
  },
  {
    name: 'Tirupati to Kandukur Taxi Package',
    duration: '1 Day',
    route: 'Tirupati → Naidupeta → Gudur → Nellore → Kavali → Kandukur',
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290873/tirupati-1-day-taxi.png',
    slug: 'kandukur',
    aliases: ['tirupati-to-kandukur-taxi-service', 'kandukur-tour']
  }
];

export function getTourBySlug(slugParam) {
  if (!slugParam) return null;
  const cleanSlug = slugParam.toLowerCase().replace(/^\/+|\/+$/g, '');
  
  const found = packagesData.find(p => 
    p.slug === cleanSlug || 
    p.aliases?.includes(cleanSlug) ||
    p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === cleanSlug
  );

  if (!found) return null;

  const details = packageDetails[found.name] || {
    prices: [['Sedan (4 Seater)', '₹3,500'], ['Ertiga (6 Seater)', '₹4,500'], ['Innova Crysta (7 Seater)', '₹5,500']],
    included: 'Includes Tolls, Parking, Driver Batta & Taxes',
    excluded: 'Excludes Accommodation, Food & Temple Tickets'
  };

  const itinerary = packageItineraries[found.name] || [
    { day: 'Day 1', places: found.route }
  ];

  const startingPrice = details.prices?.[0]?.[1] || '₹3,500';

  return {
    ...found,
    details,
    prices: details.prices,
    included: details.included,
    excluded: details.excluded,
    itinerary,
    startingPrice
  };
}
