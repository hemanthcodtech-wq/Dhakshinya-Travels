import { Car, Route, Landmark, Plane, Sparkles, MapPin, BriefcaseBusiness, Bus } from 'lucide-react';

export const companyName = 'Dhakshinya Tours & Travels';
export const phone = '+919014677289';
export const phoneNumbers = [
  { label: 'Primary Contact', number: '+919014677289', display: '+91 90146 77289' },
  { label: 'Booking Desk', number: '+917675808923', display: '+91 76758 08923' },
  { label: 'Support Line 1', number: '+919703801999', display: '+91 97038 01999' },
  { label: 'Support Line 2', number: '+917989217289', display: '+91 79892 17289' }
];

export const fullAddress = {
  plot: 'Plot no 25',
  layout: 'DS Naidu layout',
  landmark: 'near mangalam main road',
  city: 'Tirupati',
  state: 'Andhra Pradesh',
  pincode: '517507',
  formatted: 'Plot no 25, DS Naidu layout, near mangalam main road, Tirupati - 517507'
};

export const whatsapp = `https://wa.me/919014677289`;
export const whatsappBooking = (message = 'Hi, I would like to enquire about your travel services.') => `${whatsapp}?text=${encodeURIComponent(message)}`;
export const whatsappChat = (context = '') => {
  const base = `Hi! I'm interested in booking a cab/tour with Dhakshinya Tours & Travels.`;
  const contextLine = context ? `\nI'm currently viewing: ${context}` : '';
  const closing = `\n\nCould you please help me with availability and pricing?`;
  return `${whatsapp}?text=${encodeURIComponent(base + contextLine + closing)}`;
};
export const email = 'booking@taxi-in-tirupati.com';

export const images = {
  hero: '/images/hero-bus-dhakshinya.jpg',
  temple: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733399/8d17421f-0c51-490c-9fd1-34615a6a9dbd.png',
  taxi: '/images/taxi-clear.jpg',
  place: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733245/2294ffc1-24a6-4284-bd31-20ada6598736.png',
  srikalahasti: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733326/f61277ef-a079-406d-ba99-422c467dcc3d.png',
  kanipakam: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733245/2294ffc1-24a6-4284-bd31-20ada6598736.png',
  goldentemple: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733338/113c0590-3a8d-4dfd-9ea4-c225fab55199.png',
  arunachalam: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733151/78ba506e-406e-419e-9bd0-7310625bdb82.png',
  srisailam: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733358/3544fc65-3444-4a2e-80bc-320384a75b9b.png',
  // Dedicated fallbacks for tour cards so these packages never render a broken image.
  kanchipuram: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733245/2294ffc1-24a6-4284-bd31-20ada6598736.png',
  pondicherry: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786735401/33e36867-e1e5-4785-bbf1-8255a659662e.png',
  tirumala: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733399/8d17421f-0c51-490c-9fd1-34615a6a9dbd.png',
  tirupati: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733408/39dd8a6a-1c70-433d-abb2-7a5491fddf57.png',
  tiruchanur: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733391/c167177a-f7b2-4705-b622-c6d9cf88070f.png',
  etios: 'https://res.cloudinary.com/znbhjevm/image/upload/v1790145949/tirupatibalaji/fleet/etios.png',
  etiosAlt: 'https://res.cloudinary.com/znbhjevm/image/upload/v1790145956/tirupatibalaji/fleet/etios-alt.png',
  ertiga: 'https://res.cloudinary.com/znbhjevm/image/upload/v1790145962/tirupatibalaji/fleet/ertiga.png',
  crysta: 'https://res.cloudinary.com/znbhjevm/image/upload/v1790145970/tirupatibalaji/fleet/innova-crysta.png',
  crystaAlt: 'https://res.cloudinary.com/znbhjevm/image/upload/v1790145983/tirupatibalaji/fleet/crysta-alt.png',
  tempo12: '/images/fleet/tempo12.png',
  tempo17: '/images/fleet/tempo17.png',
  tempo20: '/images/fleet/tempo20.png',
  urbania16: 'https://res.cloudinary.com/znbhjevm/image/upload/v1790146009/tirupatibalaji/fleet/urbania-16.png',
  urbania12: 'https://res.cloudinary.com/dwmjz9csc/image/upload/v1790433309/c1596832-8c82-4746-bb2f-92d4ab2ad812.png',
  bus27: '/images/fleet/bus27.png',
  bus40: '/images/fleet/bus40.png',
  bus45: '/images/fleet/bus45.png',
  hycross: 'https://res.cloudinary.com/dwmjz9csc/image/upload/v1790433054/ee040d23-3f76-4aba-aa1a-0ea6cee4ce2a.png',
  fortuner: 'https://res.cloudinary.com/dwmjz9csc/image/upload/v1790433147/fcf15e93-d12b-4bf4-a54f-d8dd4f425802.png',
  carRental2: 'https://res.cloudinary.com/znbhjevm/image/upload/v1790146024/tirupatibalaji/fleet/car-rental-2.png',
  carRental3: 'https://res.cloudinary.com/znbhjevm/image/upload/v1790146030/tirupatibalaji/fleet/car-rental-3.png',
  tempoGeneric: 'https://res.cloudinary.com/znbhjevm/image/upload/v1790146039/tirupatibalaji/fleet/tempo-generic.png',
  vehicleGeneric: 'https://res.cloudinary.com/znbhjevm/image/upload/v1790146044/tirupatibalaji/fleet/vehicle-generic.png'
};

export const services = [
  [Car, 'Car Rentals in Tirupati', 'Economical and comfortable car rental service in Tirupati.', '₹2,880', 'car-rentals-in-tirupati'],
  [Bus, 'Tempo Traveller Rental', 'Spacious 12, 16 & 20 seater Tempo Travellers for group travel.', '₹5,100', 'tempo-traveller-rental-in-tirupati'],
  [Sparkles, 'Force Urbania Rental', 'Luxury 12 & 16 seater Force Urbania with modern interior comfort.', '₹10,000', 'urbania-traveller-rental-in-tirupati'],
  [Bus, 'Luxury Bus Rental', '27, 40 and 45 seater luxury AC buses for large groups and pilgrimages.', '₹12,000', 'bus-rental-in-tirupati'],
  [MapPin, 'Outstation Taxi Service', 'Reliable outstation cab services across South India at per km rates.', '₹15/km', 'outstation-taxi-in-tirupati'],
  [Landmark, 'Taxi Service in Tirupati', 'Punctual local taxi service for Tirupati temple and city trips.', '₹2,880', 'taxi-in-tirupati'],
  [Plane, 'Tirupati Airport Taxi', '24/7 dedicated pickup and drop services for Tirupati Airport.', '₹1,200', 'tirupati-airport-taxi'],
  [Car, 'Car for Rent (Day Hire)', 'Flexible full-day car hire for local travel, business and sightseeing.', '₹2,880', 'car-for-rent-in-tirupati-day-rentals']
];

// Vehicle names, capacities, indicative outstation rates and service notes are based on the official company website.
export const vehicles = [
  ['Sedan (Etios / Dzire)', '4+1 Seats', '2 Bags', images.etios, '₹15/km', 'AC · WITH DRIVER', 'SEDAN', 'Economical local and outstation travel for small groups.', '300 km minimum/day'],
  ['Maruti Ertiga', '6+1 Seats', '3 Bags', images.ertiga, '₹19/km', 'AC · WITH DRIVER', 'MUV', 'Comfortable family travel, temple visits and group trips.', '300 km minimum/day'],
  ['Toyota Innova Crysta', '7+1 Seats', '4 Bags', images.crysta, '₹23/km', 'AC · WITH DRIVER', 'PREMIUM SUV', 'Premium family, corporate and long-distance travel.', '300 km minimum/day'],
  ['Toyota Hycross', '7+1 Seats', '4 Bags', images.hycross, '₹32/km', 'AC · WITH DRIVER', 'PREMIUM SUV', 'Premium comfort for family, corporate and outstation journeys.', '300 km minimum/day'],
  ['Toyota Fortuner', '7+1 Seats', '4 Bags', images.fortuner, '₹43/km', 'AC · WITH DRIVER', 'PREMIUM SUV', 'Executive premium SUV travel for special and long-distance trips.', '300 km minimum/day'],
  ['Tempo Traveller 12', '12 Seats', '8 Bags', images.tempo12, '₹26/km', 'AC · WITH DRIVER', 'TEMPO TRAVELLER', 'Small group pilgrimages, local sightseeing and airport transfers.', '300 km minimum/day'],
  ['Urbania 12 Seater', '12 Seats', '8 Bags', images.urbania12, '₹45/km', 'AC · WITH DRIVER', 'PREMIUM URBANIA', 'Premium group travel with a modern cabin and enhanced comfort.', '300 km minimum/day'],
  ['Tempo Traveller 16', '16 Seats', '10 Bags', images.tempo17, '₹35/km', 'AC · WITH DRIVER', 'TEMPO TRAVELLER', 'Larger family groups, pilgrimages and South India tours.', '300 km minimum/day'],
  ['Urbania 16 Seater', '16 Seats', '10 Bags', images.urbania16, '₹48/km', 'AC · WITH DRIVER', 'PREMIUM URBANIA', 'Premium larger-group journeys, corporate travel and long-distance trips.', '300 km minimum/day'],
  ['Tempo Traveller 20', '20 Seats', '12 Bags', images.tempo20, '₹45/km', 'AC · WITH DRIVER', 'TEMPO TRAVELLER', 'Large group travel, events and extended pilgrimage tours.', '300 km minimum/day'],
  ['Mini Bus 27 Seater', '27 Seats', '15 Bags', images.bus27, '₹55/km', 'AC · WITH DRIVER', 'MINI BUS', 'Group pilgrimages, events, family outings and organized tours.', '300 km minimum/day'],
  ['Bus 40 Seater', '40 Seats', '20 Bags', images.bus40, '₹65/km', 'AC · WITH DRIVER', 'BUS', 'Large pilgrimages, institutions, corporate groups and events.', '300 km minimum/day'],
  ['Bus 45 Seater', '45 Seats', '22 Bags', images.bus45, '₹75/km', 'AC · WITH DRIVER', 'BUS', 'Maximum-capacity group tours, events and large pilgrimages.', '300 km minimum/day']
];

export const destinations = [
  ['tirumala', 'Tirumala', 'Sri Venkateswara Temple and the seven sacred hills.', images.tirumala, '₹2,499'],
  ['tirupati', 'Tirupati', 'A complete local temple and sightseeing experience.', images.tirupati, '₹2,999'],
  ['tiruchanur', 'Tiruchanur', 'Visit the sacred Padmavathi Ammavari Temple.', images.tiruchanur, '₹2,299'],
  ['srikalahasti', 'Srikalahasti', 'A revered Shiva temple and traditional pilgrimage route.', images.srikalahasti, '₹2,999'],
  ['kanipakam', 'Kanipakam', 'Sri Varasiddhi Vinayaka Temple near Tirupati.', images.kanipakam, '₹3,499'],
  ['golden-temple', 'Golden Temple', 'Vellore Golden Temple spiritual day tour.', images.goldentemple, '₹5,999'],
  ['arunachalam', 'Arunachalam', 'Sacred Annamalaiyar Temple pilgrimage.', images.arunachalam, '₹7,499'],
  ['srisailam', 'Srisailam', 'A memorable hill temple journey.', images.srisailam, '₹10,999']
];

const moreDestinationImages = [
  ['mysore','Mysore','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733509/f11ed58f-ecd1-4f0a-9bae-a9a4f12f9003.png'],
  ['palakkad','Palakkad','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733501/8be483a8-5767-4774-bf16-bbf8547dfb73.png'],
  ['kochi','Kochi','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733495/4982b20a-6439-460b-8543-b7f4701db6ea.png'],
  ['coimbatore','Coimbatore','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733486/77df45e7-3253-405e-a0d3-6438765060ad.png'],
  ['viyanagaram','Viyanagaram','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733480/7c8ee721-ee4c-4c61-abbb-1cbea0245625.png'],
  ['pune','Pune','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733473/848dbd80-4e3d-4758-83df-37b47760b587.png'],
  ['gujarat','Gujarat','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733468/5994d514-59ee-4667-ad5e-1b0c025e416e.png'],
  ['maharastra','Maharastra','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733462/36c2bc34-0ba0-455a-8f19-acab2ff9250d.png'],
  ['delhi','Delhi','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733455/634bd484-005a-4159-a18f-252b480f3149.png'],
  ['kakinada','Kakinada','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733450/1bf3c6f5-bf16-4e66-8f7e-8db9e4d796ef.png'],
  ['vizag','Vizag','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733443/010ec3bb-1834-4253-a8b5-fb1ee37b9b.png'],
  ['chennai','Chennai','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733437/f0ef17ce-caab-45dc-aac2-5d1cfb917d95.png'],
  ['hyderabad','Hyderabad','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733429/95f8f3fb-496a-4711-be13-224ad0fd3f60.png'],
  ['bangalore','Bangalore','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733424/8cc38c53-23f6-4fae-9bd5-0879b2212923.png'],
  ['trichy','Trichy','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733416/626867d8-7a51-4a31-ae66-7f1f7bf897c0.png'],
  ['thiruvananthapuram','Thiruvananthapuram','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733385/1aa62ccd-7449-4ea9-879b-36d9e861d4ca.png'],
  ['thirunallar','Thirunallar','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733373/a6c6e657-7d6a-4356-9fce-8185eca8f6b7.png'],
  ['thanjavur','Thanjavur','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733363/90590760-eba9-462a-a7c8-3e8b50743708.png'],
  ['srirangam','Srirangam','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733347/9f22f2e8-eff4-430a-b67b-021bdbdd056e.png'],
  ['rameswaram','Rameswaram','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733314/324b7f65-5b9a-490e-adb5-c81416fb0d05.png'],
  ['pondicherry','Pondicherry','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733307/ce934d82-a670-474a-91d9-2d7089abb2c3.png'],
  ['mahabalipuram','Mahabalipuram','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733297/51d2c19a-22c0-41ce-b299-9ca4ba7cc078.png'],
  ['madurai','Madurai','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733283/4db94717-d968-4688-8e3e-6d48b31613e0.png'],
  ['kumbakonam','Kumbakonam','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733275/ac617c4f-5131-43c5-ac0d-b18f70b5ed5e.png'],
  ['kerala','Kerala','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733267/a60cbb24-e65b-42b0-a95e-35ffcb4ffd4c.png'],
  ['kanyakumari','Kanyakumari','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733253/e0e2138b-a218-4dfa-92bb-2c51919c4c8d.png'],
  ['kanchipuram','Kanchipuram','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733229/896a9850-f84d-4db9-83cd-5133fe373dfc.png'],
  ['dhanushkoti','Dhanushkoti','https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733194/1c7b8df2-3fd0-446a-8de2-1de505a992b3.png']
];
moreDestinationImages.forEach(([slug,name,image], index) => destinations.push([slug, name, `A curated travel and temple experience in ${name}.`, image, `₹${(4999 + index * 500).toLocaleString('en-IN')}`]));

export const tours = [
  // 1-Day Tours
  ['Tirupati 1 Day Taxi Package', '1 Day', 'Tirupati → Padmavathi → Tirumala → Varahaswamy → Balaji Darshan → Kapila Theertham → Tirupati', '₹3,500', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290873/tirupati-1-day-taxi.png'],
  ['1 Day Arunachalam Package', '1 Day', 'Tirupati → Kanipakam → Golden Temple → Arunachalam → Tirupati', '₹7,000', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290831/arunachalam-1-day.webp'],
  ['Tirupati to Golden Temple Vellore Tour', '1 Day', 'Tirupati → Srinivasa Mangapuram → Kanipakam → Golden Temple → Tirupati', '₹5,000', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290888/vellore-golden-temple.jpg'],
  ['Tirupati to Kanipakam Temple Tour', '1 Day', 'Tirupati → Vakula Devi → Srinivasa Mangapuram → Kanipakam → Tirupati', '₹3,580', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290895/kanipakam-tour.jpg'],
  ['Tirupati 5 Local Temples Tour Package', '1 Day', 'Tirupati → Kapila Theertham → ISKCON → Govindaraja Swamy → Padmavathi → Srikalahasti → Tirupati', '₹3,800', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290903/tirupati-5-local-temples.png'],
  ['Tirupati to Kanchipuram Taxi Service', '1 Day', 'Tirupati → Tiruttani → Kanchipuram → Varadaraja Perumal Temple → Kamakshi Amman Temple → Kailasanathar Temple → Tirupati', '₹5,000', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290910/kanchipuram-taxi.png'],

  // 2-Day Tours
  ['Tirupati 2 Days Taxi Package', '2 Days', 'Tirupati → Tirumala → Balaji Darshan → Kapila Theertham → ISKCON → Govindaraja → Padmavathi → Srikalahasti → Tirupati', '₹7,500', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290881/tirupati-2-days-taxi.png'],
  ['2 Days Arunachalam Package', '2 Days', 'Tirupati → Tiruttani → Kanchipuram → Arunachalam → Vellore → Kanipakam → Tirupati', '₹9,500', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290980/arunachalam-2-days.png'],
  ['Tirupati to Mahabalipuram Taxi Service', '2 Days', 'Tirupati → Kanchipuram → Kailasanathar Temple → Vaikunta Perumal Temple → Mahabalipuram Beach → Pancha Rathas → Arjuna’s Penance → Shore Temple → Tirupati', '₹10,000', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290918/mahabalipuram-taxi.png'],
  ['Tirupati to Golden Temple Arunachalam Kanchipuram Taxi Service', '2 Days', 'Tirupati → Kanipakam → Vellore → Arunachalam → Kanchipuram → Tiruttani → Tirupati', '₹9,500', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290933/arunachalam-golden-temple-kanchipuram.jpg'],
  ['2 Days Tirupati to Madurai Tour Package', '2 Days', 'Tirupati → Madurai → Meenakshi Amman Temple → Madurai Sightseeing → Tirupati', '₹18,000', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290940/tirupati-madurai-2-days.png'],
  ['Pondicherry Tour Package', '2 Days', 'Tirupati → Pondicherry → Promenade Beach → Rock Beach → French Colony → Paradise Beach → Auroville → Pondicherry Sightseeing → Tirupati', '₹10,000', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290948/pondicherry-tour.png'],
  ['2 Days Tirupati to Srisailam Taxi Package', '2 Days', 'Tirupati → Srisailam → Mallikarjuna Swamy Temple → Bhramaramba Devi Temple → Srisailam Dam → Akkamahadevi Caves → Paladhara Panchadhara → Tirupati', '₹13,000', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290954/tirupati-srisailam-2-days.jpg'],

  // 3-Day Tours
  ['Pancha Linga Tour from Tirupati', '3 Days', 'Tirupati → Srikalahasti → Kanchipuram → Chidambaram → Srirangam → Arunachalam → Vellore → Kanipakam → Tirupati', '₹19,500', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290858/pancha-linga-tour.png'],
  ['3 Days Tirupati to Madurai Taxi Tour Package', '3 Days', 'Tirupati → Arunachalam → Srirangam → Madurai → Tirupati', '₹23,000', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290962/tirupati-madurai-3-days.png'],
  ['3 Days Tirupati Pondicherry via Kanchipuram Tour Package', '3 Days', 'Tirupati → Tiruttani → Kanchipuram → Pondicherry → Auroville → Tirupati', '₹15,500', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291129/tirupati-pondicherry-3-days.webp'],
  ['3 Days Tirupati Kanchipuram Temple Tour Package', '3 Days', 'Tirupati → Tirumala → Tiruttani → Kanchipuram → Tirupati → Srikalahasti → Tirupati', '₹13,500', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291137/tirupati-kanchipuram-3-days.jpg'],
  ['3 Days Tirupati Srisailam Srikalahasti Taxi Package', '3 Days', 'Tirupati → Srikalahasti → Srisailam → Tirupati', '₹15,500', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291143/tirupati-srisailam-srikalahasti-3-days.jpg'],
  ['3 Days Tirupati Golden Temple Taxi Package', '3 Days', 'Tirupati → Tirumala → Srinivasa Mangapuram → Kanipakam → Vellore → Tirupati → Srikalahasti → Tirupati', '₹13,000', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291152/tirupati-golden-temple-3-days.png'],

  // 4-Day Tours
  ['4 Days Tirupati Temple Tour Package – South India Pilgrimage Tour', '4 Days', 'Tirupati → Tirumala → Kanipakam → Vellore → Arunachalam → Kanchipuram → Tiruttani → Srikalahasti → Tirupati', '₹16,500', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290864/tirupati-4-days-temple-tour.jpg'],
  ['4 Days Tirupati to Madurai Meenakshi Temple Tour Package', '4 Days', 'Tirupati → Arunachalam → Srirangam → Madurai → Rameswaram → Tirupati', '₹29,000', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290970/meenakshi-temple-4-days.png'],

  // 5-Day & 7-Day Tours
  ['Divine 5 Day South India Temple Tour Package', '5 Days', 'Tirupati → Tirumala → Srinivasa Mangapuram → Kanipakam → Golden Temple (Vellore) → Arunachalam → Srirangam → Kanchipuram → Tiruttani → Tirupati → Srikalahasti → Tirupati', '₹26,500', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789290925/south-india-temple-tour.png'],
  ['Best 5 Day Tirupati Arunachalam Mahabalipuram Tour Package', '5 Days', 'Tirupati → Tirumala → Kanipakam → Vellore → Arunachalam → Mahabalipuram → Kanchipuram → Tiruttani → Tirupati → Srikalahasti → Tirupati', '₹22,000', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291158/tirupati-arunachalam-mahabalipuram-5-days.jpg'],
  ['7 Days Divine Tamil Nadu Temple Tour from Tirupati', '7 Days', 'Tirupati → Vellore → Arunachalam → Srirangam → Madurai → Trivandrum → Kanyakumari → Rameswaram → Kumbakonam → Chidambaram → Kanchipuram → Tirupati', '₹51,000', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto/v1789291165/tamil-nadu-temple-tour-7-days.png']
];
