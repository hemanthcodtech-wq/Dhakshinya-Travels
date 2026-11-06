import { images } from './siteData';

const commonNotes = 'Toll, parking, interstate/state permits and extra-kilometre or extra-hour charges may apply. Driver allowance and final trip terms should be confirmed before booking.';
const commonSteps = ['Share your travel plan by call, WhatsApp or enquiry', 'Choose the vehicle that matches your group and route', 'Confirm availability, pricing and pickup details'];
const commonFaqs = [
  ['How do I book a package?', 'Share your travel date, pickup point, destination, passenger count and preferred vehicle by call or WhatsApp to receive an instant customized quote.'],
  ['Are doorstep, airport and railway-station pickups available?', 'Yes! Doorstep pickup and drop can be arranged from Tirupati Airport, Tirupati Railway Station, hotels, or home address.'],
  ['Are tolls, parking and driver charges included?', 'Applicable tolls, parking fees, state border permits and driver bata depend on the selected package terms. Confirm the final inclusions before travel.']
];

export const servicePages = {
  // --- TAXI & VEHICLE RENTALS ---
  'car-rentals-in-tirupati': {
    title: 'Car Rentals in Tirupati – Enjoy a Smooth and Hassle-Free Ride',
    eyebrow: 'CAR RENTALS IN TIRUPATI',
    image: images.etios,
    intro: 'Premium and comfortable car rentals for Tirumala darshan, temple visits, local sightseeing, airport transfers, business travel and outstation journeys.',
    whyTitle: 'Your Reliable Partner for Every Trip',
    whyIntro: 'Choose from Etios, Ertiga and Innova Crysta with air conditioning, experienced drivers, flexible local and outstation plans and 24/7 booking support.',
    vehicles: [
      ['Sedan (Etios / Dzire)', 'Sedan • 4 persons • AC • 2 bags', 'Local ₹2,880 / 8h-80km • ₹3,650 / 12h-150km • ₹15/km outstation'],
      ['Ertiga', 'MUV • 6 persons • AC • 3 bags', 'Local ₹3,380 / 8h-80km • ₹4,150 / 12h-150km • ₹19/km outstation'],
      ['Innova Crysta', 'SUV • 7 persons • AC • 5 bags', 'Local ₹4,380 / 8h-80km • ₹5,150 / 12h-150km • ₹23/km outstation'],
      ['Toyota Hycross', 'Premium SUV • 7 persons • AC • 4 bags', 'Local ₹6,100 / 8h-80km • ₹7,100 / 12h-150km • ₹32/km outstation'],
      ['Toyota Fortuner', 'Executive SUV • 7 persons • AC • 4 bags', 'Local ₹8,800 / 8h-80km • ₹10,500 / 12h-150km • ₹43/km outstation']
    ],
    outstation: 'Published outstation tariffs use a 300 km/day minimum. Local and outstation packages are available for temple visits, city travel, airport transfers and longer routes.',
    highlights: ['Comfort & luxury AC cars', 'Experienced drivers familiar with Tirumala routes', 'Transparent pricing', '24/7 support', 'Customizable local and outstation packages', 'Clean and hygienic fleet'],
    featureDetails: [
      ['Local rental', 'Etios, Ertiga and Innova Crysta are available for local Tirupati and Tirumala travel.'],
      ['Outstation rental', 'Kilometre-based packages are available for longer journeys with a published minimum.'],
      ['Pickup locations', 'Railway station, airport, hotels and agreed doorstep pickup can be arranged.'],
      ['Popular routes', 'Tirumala, Srikalahasti, Kanipakam, Vellore, Arunachalam, Chennai, Pondicherry, Bangalore, Madurai and other routes.']
    ],
    packageNote: 'Local and outstation rentals can be planned around your schedule, group size and temple visits. Ask for the current quotation before confirming.',
    steps: commonSteps,
    faqs: [...commonFaqs, ['Is car rental safe in Tirupati?', 'The source service promotes maintained vehicles and experienced, licensed drivers familiar with local temple routes.']]
  },

  'tempo-traveller-rental-in-tirupati': {
    title: 'Tempo Traveller Rental in Tirupati – Your Comfort Journey Starts Here',
    eyebrow: 'TEMPO TRAVELLER RENTAL',
    image: images.tempo12,
    intro: 'Group travel solutions for pilgrimage, sightseeing and outstation trips using air-conditioned 12, 17 and 20-seater Tempo Travellers.',
    whyTitle: 'Comfortable Group Travel for Tirupati Journeys',
    whyIntro: 'The source page positions Tempo Travellers for families and groups visiting Tirumala, Padmavathi Temple and other local or outstation destinations.',
    vehicles: [
      ['Tempo 12 Seater', 'Mini bus • 12 persons • AC • 8 bags', '₹5,100 / 8h-80km • ₹6,000 / 12h-150km • ₹26/km'],
      ['Tempo 16 Seater', 'Mini bus • 16 persons • AC • 10 bags', '₹6,800 / 8h-80km • ₹7,800 / 12h-150km • ₹35/km'],
      ['Tempo 20 Seater', 'Mini bus • 20 persons • AC • 12 bags', '₹9,000 / 8h-80km • ₹10,500 / 12h-150km • ₹45/km']
    ],
    outstation: 'Published tariffs use a 300 km/day minimum. Tolls, parking, permits and additional hours or kilometres can be charged separately.',
    highlights: ['Air-conditioned group vehicles', 'Experienced Tirumala-route drivers', 'Transparent rental communication', '24/7 support', 'Customizable packages', 'Clean and hygienic fleet'],
    featureDetails: [
      ['Air Conditioning', 'Comfortable AC cabin for temple visits, sightseeing and longer journeys.'],
      ['TV Screen', 'Entertainment feature on applicable vehicles.'],
      ['USB Charging Ports', 'Convenient charging during the journey.'],
      ['Push Back Seats', 'Added comfort for longer routes.'],
      ['Entertainment System', 'Onboard entertainment on applicable vehicles.'],
      ['Hygienic Fleet', 'Vehicles are cleaned and prepared before trips.']
    ],
    packageNote: 'Local and outstation packages can be customized around group size, dates, temple visits and route.',
    steps: commonSteps,
    faqs: [...commonFaqs, ['Which Tempo size should I choose?', 'Choose 12, 17 or 20 seats according to passenger count and luggage.']]
  },

  'urbania-traveller-rental-in-tirupati': {
    title: 'Force Urbania Rental in Tirupati',
    eyebrow: 'URBANIA TRAVELLER RENTAL',
    image: images.urbania16,
    intro: 'Premium Force Urbania group travel from Tirupati for families, corporate groups, pilgrimages, sightseeing and outstation journeys.',
    whyTitle: 'Premium Group Travel with More Cabin Comfort',
    whyIntro: 'Urbania is positioned as a premium traveller option for customers who want more space and a refined group-travel experience.',
    vehicles: [
      ['Urbania 12 Seater', '12 persons • AC • premium group travel', 'Local ₹10,000 / 8h-80km • ₹12,000 / 12h-150km • ₹45/km'],
      ['Urbania 16 Seater', '16 persons • AC • premium group travel', 'Local ₹12,000 / 8h-80km • ₹15,000 / 12h-150km • ₹48/km']
    ],
    outstation: 'The published tariff uses a 300 km/day minimum for outstation Urbania trips. Confirm route-specific local pricing, tolls, parking and permits before booking.',
    highlights: ['Premium cabin', 'Air conditioning', 'More passenger space', 'Experienced drivers', 'Local and outstation plans', 'Suitable for family and corporate groups'],
    featureDetails: [
      ['Premium interior', 'Designed for comfortable group travel with a more premium cabin experience.'],
      ['Group flexibility', '12 and 16-seater options cover different passenger counts.'],
      ['Temple travel', 'Suitable for Tirupati, Tirumala and pilgrimage circuits.'],
      ['Outstation travel', 'Available for longer routes with kilometre-based pricing.']
    ],
    packageNote: 'Share your dates, group size and itinerary to receive the current Urbania availability and route quotation.',
    steps: commonSteps,
    faqs: [...commonFaqs, ['Can Urbania be used for a one-day Tirupati tour?', 'Yes. It is suitable for local temple visits, sightseeing and customized day trips.']]
  },

  'bus-rental-in-tirupati': {
    title: 'Bus Rental in Tirupati – Safe, Comfortable & Affordable Trips',
    eyebrow: 'BUS RENTAL IN TIRUPATI',
    image: images.bus40,
    intro: 'Well-maintained buses for family outings, temple pilgrimages, corporate travel, weddings, events and large group tours.',
    whyTitle: 'Your Reliable Partner for Every Group Trip',
    whyIntro: 'The source page offers bus sizes from compact 27-seaters to larger 50-seaters, with experienced drivers, flexible rental plans and 24/7 support.',
    vehicles: [
      ['Bus 27 Seater', 'Coach bus • 27 persons • AC • 15 bags', '₹12,000 / 8h-80km • ₹13,500 / 12h-150km • ₹55/km'],
      ['Bus 40 Seater', 'Luxury coach • 40 persons • AC • 20 bags', '₹15,200 / 8h-80km • ₹17,500 / 12h-150km • ₹65/km'],
      ['Bus 45 Seater', 'Luxury coach • 45 persons • AC • 22 bags', '₹18,000 / 8h-80km • ₹20,500 / 12h-150km • ₹75/km']
    ],
    outstation: 'The published bus tariff uses a 350 km/day minimum for outstation travel. Applicable tolls, parking, state taxes and other route charges can be extra.',
    highlights: ['27 to 50 seat capacity', 'Clean and comfortable buses', 'Experienced professional drivers', 'Local and outstation rentals', 'Wedding and event travel', '24/7 customer support'],
    featureDetails: [
      ['Group pilgrimages', 'Suitable for large temple and pilgrimage groups.'],
      ['Weddings & events', 'Useful for weddings, functions and organized events.'],
      ['Corporate travel', 'Flexible group transportation for corporate outings.'],
      ['Multi-day tours', 'Suitable for longer South India group itineraries.']
    ],
    packageNote: 'Bus size and rental duration can be planned around passenger count, itinerary and event requirements.',
    steps: commonSteps,
    faqs: [...commonFaqs, ['Are buses available for weddings and events?', 'Yes. The source page specifically positions the fleet for weddings, events, corporate travel and group outings.']]
  },

  'outstation-taxi-in-tirupati': {
    title: 'Outstation Taxi in Tirupati – Trusted Travel Partner 24/7',
    eyebrow: 'OUTSTATION TAXI SERVICE',
    image: images.taxi,
    intro: 'Long-distance taxi travel from Tirupati for families, pilgrimages, sightseeing and corporate groups, with cars, Tempo Travellers, Urbania and buses.',
    whyTitle: 'Long-Distance Travel Made Easier',
    whyIntro: 'The source page presents a broad vehicle range and kilometre-based outstation packages for travel beyond Tirupati city limits.',
    vehicles: [
      ['Sedan (Etios / Dzire)', '4 persons • Sedan • AC', 'From ₹15/km • 300 km/day minimum'],
      ['Ertiga', '6 persons • MUV • AC', 'From ₹19/km • 300 km/day minimum'],
      ['Innova Crysta', '7 persons • SUV • AC', 'From ₹23/km • 300 km/day minimum'],
      ['Toyota Hycross', '7 persons • Premium SUV • AC', 'From ₹32/km • 300 km/day minimum'],
      ['Toyota Fortuner', '7 persons • Executive SUV • AC', 'From ₹43/km • 300 km/day minimum'],
      ['Tempo 12/16/20', '12–20 persons • AC', 'From ₹26/₹35/₹45 per km • 300 km/day minimum'],
      ['Urbania 12/16', '12–16 persons • AC', 'From ₹45/₹48 per km • 300 km/day minimum'],
      ['Bus 27/40/45', '27–45 persons • AC', 'From ₹55 to ₹75 per km • 300 km/day minimum']
    ],
    outstation: 'The published service covers one-way and round-trip outstation travel. Exact pricing depends on vehicle, route, duration and applicable charges.',
    highlights: ['Wide fleet selection', 'Experienced route drivers', 'Customizable itineraries', '24/7 booking support', 'One-way and round-trip options', 'Family and group travel'],
    featureDetails: [
      ['Sedans & SUVs', 'Etios, Ertiga and Innova Crysta for smaller groups.'],
      ['Tempo Travellers', '12, 17 and 20-seater options for larger families.'],
      ['Urbania', '12 and 16-seater premium group options.'],
      ['Buses', '27 to 50-seater options for large groups.']
    ],
    packageNote: 'Share route, dates and passenger count to receive the current outstation quote and vehicle availability.',
    steps: commonSteps,
    faqs: [...commonFaqs]
  },

  'taxi-in-tirupati': {
    title: 'Taxi Service in Tirupati & Cab Booking',
    eyebrow: '24/7 TAXI SERVICE',
    image: images.taxi,
    intro: 'Reliable taxi booking in Tirupati for temple visits, local sightseeing, airport transfers, one-way trips, round trips and outstation travel.',
    whyTitle: 'Local & Outstation Cab Booking',
    whyIntro: 'The source page presents taxi services for pilgrims and travellers with multiple vehicle choices, professional drivers, comfortable rides and 24/7 availability.',
    vehicles: [
      ['Sedan', '4 persons', '₹2,880 (8h/80km) • ₹3,650 (12h/150km) • ₹15/km outstation'],
      ['Ertiga', '6–7 persons', '₹3,380 (8h/80km) • ₹4,150 (12h/150km) • ₹19/km outstation'],
      ['Innova Crysta', '6–7 persons', '₹4,380 (8h/80km) • ₹5,150 (12h/150km) • ₹23/km outstation'],
      ['Hycross', '7 persons', '₹6,100 (8h/80km) • ₹7,100 (12h/150km) • ₹32/km outstation'],
      ['Fortuner', '7 persons', '₹8,800 (8h/80km) • ₹10,500 (12h/150km) • ₹43/km outstation'],
      ['Tempo 12/16/20', '12–20 persons', '₹5,100/₹6,800/₹9,000 (8h) • ₹26/₹35/₹45 per km'],
      ['Urbania 12/16', '12–16 persons', '₹10,000/₹12,000 (8h) • ₹45/₹48 per km'],
      ['Bus 27–45', '27–45 persons', '₹12,000–₹18,000 (8h) • ₹55–₹75 per km']
    ],
    outstation: 'The service covers one-way, round-trip, premium/luxury, local sightseeing, outstation, airport, temple darshan and corporate/business travel.',
    highlights: ['One-way taxi services', 'Round-trip packages', 'Luxury and premium rentals', 'Local sightseeing', 'Outstation taxis', 'Airport pickup and drop', 'Temple darshan travel', 'Corporate travel'],
    featureDetails: [
      ['One-Way', 'Travel without a return charge for the selected route.'],
      ['Round Trip', 'Suitable for temple tours, family visits and business needs.'],
      ['Premium Taxi', 'Higher-end sedan and SUV options for events and VIP transfers.'],
      ['Local Sightseeing', 'Flexible temple and attraction tours with knowledgeable drivers.'],
      ['Airport Transfers', 'On-time airport pickup and drop support.'],
      ['Temple Darshan', 'Comfortable rides for Tirupati Balaji and nearby temples.']
    ],
    packageNote: 'Choose the service type, vehicle and route and request the current fare before booking.',
    steps: commonSteps,
    faqs: [...commonFaqs]
  },

  'tirupati-airport-taxi': {
    title: 'Tirupati Airport Taxi Service',
    eyebrow: 'TIRUPATI AIRPORT TAXI',
    image: images.taxi,
    intro: '24/7 airport pickup and drop between Tirupati Airport and Tirupati, plus longer airport connections with comfortable AC vehicles.',
    whyTitle: 'Prompt Airport Transfers',
    whyIntro: 'The published airport rates cover one-way pickup/drop and include vehicle choices for individuals, families and groups.',
    vehicles: [
      ['Etios', '4 persons', 'Tirupati Airport one-way ₹1,200 • Chennai ₹5,000 • Bangalore ₹8,400'],
      ['Ertiga', '6–7 persons', 'Tirupati Airport one-way ₹1,800 • Chennai ₹6,700 • Bangalore ₹11,500'],
      ['Innova Crysta', '6–7 persons', 'Tirupati Airport one-way ₹2,500 • Chennai ₹8,700 • Bangalore ₹13,500'],
      ['Tempo 12 Seater', '12 persons', 'Tirupati Airport one-way ₹3,500 • Chennai ₹10,700 • Bangalore ₹16,500']
    ],
    outstation: 'The published airport table includes Tirupati Airport (TIR), Chennai Airport (MAA) and Bangalore Airport (BLR) one-way pickup/drop rates.',
    highlights: ['24/7 airport pickup', 'Flight-detail coordination', 'Direct hotel/city drop', 'AC vehicles', 'Family and group options'],
    featureDetails: [
      ['Tirupati Airport', 'One-way pickup/drop starting at ₹1,200 for Etios.'],
      ['Chennai Airport', 'One-way Tirupati connection published from ₹5,000 for Etios.'],
      ['Bangalore Airport', 'One-way Tirupati connection published from ₹8,400 for Etios.']
    ],
    packageNote: 'Send your flight number, arrival/departure time, pickup point and passenger count for airport availability and the current quotation.',
    steps: ['Share your flight details and pickup/drop requirement', 'Choose vehicle size', 'Confirm airport pickup and timing on WhatsApp'],
    faqs: [...commonFaqs]
  },

  'car-for-rent-in-tirupati-day-rentals': {
    title: 'Car for Rent in Tirupati – Day Rentals',
    eyebrow: 'CAR FOR RENT IN TIRUPATI',
    image: images.etios,
    intro: 'Flexible day-rental options for families, pilgrims, solo travellers and groups, with local day hire and outstation kilometre packages.',
    whyTitle: 'Flexible Car Rentals for Local & Outstation Travel',
    whyIntro: 'The published rental information separates local day-rental pricing from outstation kilometre pricing and lists fuel-efficiency information for the vehicles.',
    vehicles: [
      ['Sedan (Etios / Dzire)', '4 persons • AC', 'Local 8h/80km ₹2,880 • 12h/150km ₹3,650 • ₹15/km outstation'],
      ['Ertiga', '6–7 persons • AC', 'Local 8h/80km ₹3,380 • 12h/150km ₹4,150 • ₹19/km outstation'],
      ['Innova Crysta', '6–7 persons • AC', 'Local 8h/80km ₹4,380 • 12h/150km ₹5,150 • ₹23/km outstation'],
      ['Hycross', '7 persons • AC', 'Local 8h/80km ₹6,100 • 12h/150km ₹7,100 • ₹32/km outstation'],
      ['Fortuner', '7 persons • AC', 'Local 8h/80km ₹8,800 • 12h/150km ₹10,500 • ₹43/km outstation']
    ],
    outstation: 'Outstation rentals use a 300 km/day minimum on the published tariff. Local day rental and outstation kilometre pricing are quoted separately.',
    highlights: ['Local day hire', 'Outstation rentals', 'AC cars', 'Multiple vehicle choices', 'Airport/railway/hotel pickup options'],
    featureDetails: [
      ['Etios', 'Compact sedan option for individuals and smaller groups.'],
      ['Ertiga', 'Family MUV option with more passenger capacity.'],
      ['Innova Crysta', 'Premium SUV option for larger families and comfort-focused travel.']
    ],
    packageNote: 'Share the rental duration, pickup location, destination and passenger count to confirm the available car and current price.',
    steps: commonSteps,
    faqs: [...commonFaqs]
  },

  // --- 10 SERVICE PACKAGES ---
  'local-packages': {
    title: 'Tirupati Tirumala Local Cab Packages',
    eyebrow: 'LOCAL TEMPLE & CITY PACKAGES',
    image: images.tirumala,
    intro: 'Book Tirupati Tirumala local cab packages for temple darshan, city tours, and local sightseeing. Explore major temples and attractions with comfortable AC cabs and experienced local drivers.',
    whyTitle: 'Complete Local Temple & Sightseeing Packages',
    whyIntro: 'Choose from 8-Hour / 80 KMs or 12-Hour / 150 KMs local day rentals covering Tirumala, Tiruchanur, Srikalahasti, Kanipakam, Kapila Theertham & Govindaraja Swamy Temple.',
    vehicles: [
      ['Swift Dzire / Sedan', 'Sedan • 4 persons • AC', '8 Hours / 80 KMs: ₹2,880 • 12 Hours / 150 KMs: ₹3,650'],
      ['Maruti Ertiga', 'MUV • 6 persons • AC', '8 Hours / 80 KMs: ₹3,380 • 12 Hours / 150 KMs: ₹4,150'],
      ['Toyota Innova Crysta', 'SUV • 7 persons • AC', '8 Hours / 80 KMs: ₹4,380 • 12 Hours / 150 KMs: ₹5,150'],
      ['Tempo Traveller 12 Seater', 'Minibus • 12 persons • AC', '8 Hours / 80 KMs: ₹5,100 • 12 Hours / 150 KMs: ₹6,000']
    ],
    outstation: 'Packages cover doorstep pickup from Tirupati Airport, Railway Station, Hotels, or home address. Tolls, parking, and driver allowances are clearly detailed.',
    highlights: ['Tirumala Balaji Temple', 'Padmavathi Ammavari Temple (Tiruchanur)', 'Sri Kalahasteeswara Temple (Srikalahasti)', 'Kanipakam Vinayaka Temple', 'Kapila Theertham & Govindaraja Swamy', 'ISKCON Tirupati & Regional Science Centre'],
    featureDetails: [
      ['8 Hours / 80 KMs Package', 'Ideal for same-day local temple visits including Tirumala and Tiruchanur.'],
      ['12 Hours / 150 KMs Package', 'Covers extended temple circuits including Tirupati, Srikalahasti, and Kanipakam.'],
      ['Doorstep Pickup', 'Punctual pickup from Airport, Railway Station, or your hotel.'],
      ['Local Driver Guide', 'Drivers knowledgeable about temple queue timings, parking, and routes.']
    ],
    packageNote: 'Customizable according to your flight/train arrival and temple darshan slots. Contact us to reserve your package.',
    steps: commonSteps,
    faqs: [...commonFaqs, ['What temples are covered in the local package?', 'Local packages cover Tirumala, Tiruchanur, Kapila Theertham, Govindaraja Swamy, ISKCON, Srikalahasti, and Kanipakam based on your selected duration.']]
  },

  'outstation-packages': {
    title: 'Outstation Tour Packages from Tirupati',
    eyebrow: 'OUTSTATION PILGRIMAGE & TRAVEL PACKAGES',
    image: images.goldentemple,
    intro: 'Explore South India’s famous temples and cities with outstation tour packages from Tirupati. Private cabs for Vellore Golden Temple, Arunachalam, Kanchipuram, Pondicherry, Srisailam, Madurai, Rameshwaram & Kanyakumari.',
    whyTitle: 'Seamless Outstation Journeys Across South India',
    whyIntro: 'Hassle-free outstation trips with per-kilometre transparent pricing, interstate border permit management, and experienced highway drivers.',
    vehicles: [
      ['Etios / Dzire', 'Sedan • 4 persons • AC', 'Outstation from ₹15/km (min 300 km/day)'],
      ['Maruti Ertiga', 'MUV • 6 persons • AC', 'Outstation from ₹19/km (min 300 km/day)'],
      ['Innova Crysta', 'SUV • 7 persons • AC', 'Outstation from ₹23/km (min 300 km/day)'],
      ['Tempo Traveller', 'Minibus • 12/16 persons • AC', 'Outstation from ₹26 to ₹35 per km (min 300 km/day)']
    ],
    outstation: 'Packages include 1-day, 2-day, 3-day, 4-day, and 5-day itineraries with round-trip options and flexible intermediate stops.',
    highlights: ['Vellore Sripuram Golden Temple (120 km)', 'Arunachalam Tiruvannamalai (190 km)', 'Kanchipuram Silk & Temple City (110 km)', 'Pondicherry French Quarter & Beach (250 km)', 'Srisailam Mallikarjuna Jyotirlinga (367 km)', 'Madurai Meenakshi & Rameshwaram Char Dham'],
    featureDetails: [
      ['1–2 Day Outstation Trips', 'Vellore Golden Temple, Srikalahasti & Kanchipuram day tours.'],
      ['3–4 Day Pilgrimage Circuits', 'Tirupati to Arunachalam, Madurai, and Srisailam packages.'],
      ['5–7 Day Grand South India Circuit', 'Comprehensive Tamil Nadu & Andhra temple and coastal journeys.']
    ],
    packageNote: 'All outstation packages can be tailored to your group size, travel dates, and hotel booking preferences.',
    steps: commonSteps,
    faqs: [...commonFaqs, ['How is outstation pricing calculated?', 'Outstation tariffs are based on per-kilometre charges with a standard 300 km/day minimum billing. Tolls and state taxes apply as per actuals.']]
  },

  'balaji-darshan-packages': {
    title: 'Tirumala Balaji Darshan Packages',
    eyebrow: 'BALAJI DARSHAN & SACRED PILGRIMAGE',
    image: images.tirumala,
    intro: 'Dedicated Tirumala Balaji Darshan packages engineered for devotees. Doorstep pickup from Tirupati Airport or Railway Station, smooth ghat road journey, Tirumala sightseeing, and return drop.',
    whyTitle: 'Dedicated Transport Support for Tirumala Devotees',whyIntro:'We handle all local transport logistics so your focus remains entirely on Sri Venkateswara Swamy darshan.',
    vehicles: [
      ['Sedan (Dzire / Etios)', '4 Passengers • AC', 'Tirupati to Tirumala Round Trip: ₹3,500'],
      ['MUV (Ertiga)', '6 Passengers • AC', 'Tirupati to Tirumala Round Trip: ₹4,000'],
      ['SUV (Innova Crysta)', '7 Passengers • AC', 'Tirupati to Tirumala Round Trip: ₹4,500'],
      ['Tempo Traveller', '12 Passengers • AC', 'Tirupati to Tirumala Round Trip: ₹5,500']
    ],
    outstation: 'Package covers airport/station pickup, Tirupati to Tirumala uphill & downhill transport, Tirumala local sightseeing (Akasa Ganga, Papavinasanam, Japali), and hotel/station drop.',
    highlights: ['Punctual Airport & Railway Station Pickup', 'Experienced Tirumala Ghat Road Drivers', 'Tirumala Sightseeing (Akasa Ganga, Papavinasanam, Japali)', 'Tiruchanur Padmavathi Temple Visit Included', 'Zero Booking Fee & Transparent Rates'],
    featureDetails: [
      ['Arrival Pickup', 'Driver greets you directly at Tirupati Airport or Railway Station with your name board.'],
      ['Ghat Road Expertise', 'Licensed drivers skilled in navigating the Tirumala hill ghat roads safely.'],
      ['Tirumala Sights', 'Visit sacred sites in Tirumala after your darshan sequence.'],
      ['Return Drop', 'Flexible drop back at your hotel, station, or airport according to your return train/flight.']
    ],
    packageNote: 'Ensure you hold valid TTD Darshan tokens/tickets. Share your darshan slot timing for exact pickup coordination.',
    steps: commonSteps,
    faqs: [...commonFaqs, ['Do you provide TTD Darshan tickets?', 'We provide vehicle and driver transport for Balaji Darshan. Devotees are advised to book TTD darshan tokens online in advance.']]
  },

  'corporate-packages': {
    title: 'Corporate Travel Packages in Tirupati',
    eyebrow: 'CORPORATE & BUSINESS TRAVEL',
    image: images.crysta,
    intro: 'Executive corporate travel packages in Tirupati for business meetings, conferences, VIP airport transfers, executive roadshows, and employee group transportation.',
    whyTitle: 'Professional Corporate Transport Solutions',
    whyIntro: 'Punctual, discreet, and comfortable corporate cab services backed by GST billing support, clean sanitized vehicles, and trained professional chauffeurs.',
    vehicles: [
      ['Executive Sedan', '4 Passengers • AC • Leather Interior', 'Corporate Day Rent from ₹3,000'],
      ['Toyota Innova Crysta', '7 Passengers • Premium Chauffeur', 'Corporate Day Rent from ₹4,500'],
      ['Force Urbania', '12 / 16 Seater • Luxury Recliners', 'VIP Executive Group Transfer'],
      ['AC Coach Bus', '27 / 40 / 50 Seater • Corporate Shuttle', 'Event & Delegation Transport']
    ],
    outstation: 'Custom corporate monthly retainers, city meeting shuttles, airport transfers, and outstation conference delegating transport available.',
    highlights: ['Punctual Airport & Station Chauffeurs', 'Clean, Sanitized Executive Fleet', 'GST Tax Invoice Support for Companies', 'Flight Tracking & Delay Management', 'Discreet & Professional Uniformed Chauffeurs'],
    featureDetails: [
      ['Executive Transfers', 'VIP pickup for clients and company executives.'],
      ['Event Logistics', 'Coordinated group transportation for corporate seminars and retreats.'],
      ['Corporate Billing', 'Structured invoicing with detailed trip logs for corporate accounts.']
    ],
    packageNote: 'Contact our corporate desk for long-term contract pricing and customized corporate itineraries.',
    steps: commonSteps,
    faqs: [...commonFaqs, ['Can we get GST invoices for corporate bookings?', 'Yes. We provide official GST tax invoices for all corporate travel bookings.']]
  },

  'customized-packages': {
    title: 'Customized Tour Packages from Tirupati',
    eyebrow: 'TAILOR-MADE ITINERARIES',
    image: images.tempo12,
    intro: 'Build your own tailor-made tour package from Tirupati. Choose your preferred vehicle, design your pilgrimage or holiday itinerary, set your own trip pace, and travel with complete flexibility.',
    whyTitle: 'Your Itinerary, Your Vehicle, Your Pace',
    whyIntro: 'Whether combining temple visits with coastal beaches or hill retreats, customize every single detail of your journey.',
    vehicles: [
      ['Compact Sedan (Etios/Dzire)', 'Solo / Couples / Small Families', 'Custom Quote Based on Route'],
      ['Spacious MUV (Ertiga)', 'Family Groups (up to 6)', 'Custom Quote Based on Route'],
      ['Luxury SUV (Innova Crysta)', 'Premium Family & VIP Groups', 'Custom Quote Based on Route'],
      ['Tempo Traveller / Urbania', 'Medium & Large Groups (12–20)', 'Custom Quote Based on Route']
    ],
    outstation: 'Create 1-day to 7-day multi-destination circuits across Andhra Pradesh, Tamil Nadu, Karnataka, and Telangana.',
    highlights: ['100% Customized Route Planning', 'Flexible Departure & Return Timings', 'Choice of Vehicle Category & Capacity', 'Add Heritage, Beach, Nature & Temple Stops', 'Direct Chauffeur Communication'],
    featureDetails: [
      ['Multi-State Circuits', 'Combine Tirupati with Pondicherry, Kanchipuram, Mahabalipuram, or Srisailam.'],
      ['Flexible Pacing', 'Spend as much time as you desire at each destination without rigid tour bus schedules.']
    ],
    packageNote: 'Tell us your preferred destinations, passenger count, and travel dates to receive a instant tailor-made itinerary and fare estimate.',
    steps: commonSteps,
    faqs: [...commonFaqs, ['How do I create a customized tour package?', 'Simply message us on WhatsApp with the places you want to visit and your passenger count. We will send a optimized route plan and quotation.']]
  },

  'holiday-packages': {
    title: 'Holiday Tour Packages from Tirupati',
    eyebrow: 'HOLIDAY & LEISURE TOURS',
    image: images.goldentemple,
    intro: 'Exciting holiday tour packages connecting Tirupati with coastal beaches, heritage monuments, and hill stations across South India.',
    whyTitle: 'Memorable Holiday Getaways with Private Cabs',
    whyIntro: 'Relax with family and friends on weekend getaways to Pondicherry, Mahabalipuram, Horsley Hills, Bangalore, or Mysore.',
    vehicles: [
      ['Sedan (Etios / Dzire)', '4 Passengers • AC', 'Holiday Packages from ₹9,500'],
      ['MUV (Ertiga)', '6 Passengers • AC', 'Holiday Packages from ₹12,500'],
      ['SUV (Innova Crysta)', '7 Passengers • AC', 'Holiday Packages from ₹15,000'],
      ['Tempo Traveller', '12 / 16 Seater • AC', 'Holiday Packages from ₹18,500']
    ],
    outstation: 'Packages include door-to-door private cab transport, sightseeing coverage, and flexible travel schedules for multi-day vacations.',
    highlights: ['Pondicherry French Colony & Promenade Beach', 'Mahabalipuram Shore Temple & Monument Park', 'Horsley Hills Nature & Hill Viewpoints', 'Kanchipuram Heritage & Silk Tour', 'Bangalore & Mysore Holiday Circuit'],
    featureDetails: [
      ['Beach Getaways', 'Pondicherry and Mahabalipuram coastal holiday packages.'],
      ['Hill Retreats', 'Scenic drive packages to Horsley Hills and Yelagiri.']
    ],
    packageNote: 'Customizable for weekend trips, long holidays, and festive vacations. Contact us for current holiday package pricing.',
    steps: commonSteps,
    faqs: [...commonFaqs, ['Can holiday packages include sightseeing and hotel drop?', 'Yes. Packages include complete door-to-door sightseeing transport and drop at your chosen hotels.']]
  },

  'family-packages': {
    title: 'Family Tour Packages from Tirupati',
    eyebrow: 'FAMILY PILGRIMAGE & VACATIONS',
    image: images.ertiga,
    intro: 'Comfort-focused family tour packages designed for multi-generational travel. Spacious AC vehicles, child & senior citizen friendly pacing, and door-to-door service.',
    whyTitle: 'Safe & Relaxing Travel for the Entire Family',
    whyIntro: 'We prioritize family comfort with clean sanitized interiors, gentle driving, luggage assistance, and flexible rest stops.',
    vehicles: [
      ['Maruti Ertiga (MUV)', 'Ideal for 4–6 Family Members', 'Local & Outstation Family Rates'],
      ['Toyota Innova Crysta (SUV)', 'Ideal for 6–7 Family Members', 'Premium Family Travel Rates'],
      ['Tempo Traveller (12/16 Seater)', 'Ideal for Extended Joint Families', 'Large Family Group Rates']
    ],
    outstation: 'Family packages cover Tirupati, Tirumala, Srikalahasti, Kanipakam, Vellore Golden Temple, and custom multi-day family vacations.',
    highlights: ['Senior Citizen Friendly Pacing', 'Clean Sanitized Vehicles', 'Spacious Boot Space for Family Luggage', 'Punctual Doorstep Pickup', 'Flexible Meal & Rest Stops'],
    featureDetails: [
      ['Comfort Driving', 'Drivers trained to maintain smooth, steady speeds for family comfort.'],
      ['Flexible Schedule', 'Take breaks whenever kids or senior family members need rest.']
    ],
    packageNote: 'Customized for joint family trips, children, and elderly parents. Book your family cab package today.',
    steps: commonSteps,
    faqs: [...commonFaqs, ['Are the cabs comfortable for senior citizens?', 'Yes! Our Ertiga, Innova Crysta, and Tempo Travellers feature low step-in heights, plush seating, and smooth suspension ideal for seniors.']]
  },

  'student-packages': {
    title: 'Student Group Tour Packages in Tirupati',
    eyebrow: 'STUDENT & EDUCATIONAL TOURS',
    image: images.bus40,
    intro: 'Budget-friendly group tour packages for school and college educational trips, industrial visits, historical excursions, and student group pilgrimages from Tirupati.',
    whyTitle: 'Safe, Affordable & Organized Student Group Travel',
    whyIntro: 'Economical group tariffs using high-capacity Tempo Travellers and Buses with strict safety standards and experienced long-distance drivers.',
    vehicles: [
      ['Tempo Traveller (17/20 Seater)', 'Medium Student Groups', 'Economical Per-head Tariffs'],
      ['Mini Coach Bus (27 Seater)', 'Class / Department Groups', 'Group Rental Rates'],
      ['Luxury Coach Bus (40/50 Seater)', 'Large Institutional Tours', 'Bulk Educational Rates']
    ],
    outstation: 'Packages cover local science centres, heritage sites, Srikalahasti, Vellore, Chennai, Pondicherry, and multi-day educational circuits.',
    highlights: ['Budget-Friendly Group Rates', 'Experienced Long-Distance Drivers', 'Strict Safety & Speed Limit Compliance', 'High Passenger Capacity Fleet', 'Customizable Educational Itineraries'],
    featureDetails: [
      ['Educational Sightseeing', 'Visits to Regional Science Centre, Chandragiri Fort, and historic sites.'],
      ['Industrial & College Tours', 'Transport for college industrial visits and inter-state student excursions.']
    ],
    packageNote: 'Special group discounts available for registered schools, colleges, and student organizations.',
    steps: commonSteps,
    faqs: [...commonFaqs, ['Do you offer discounts for student groups?', 'Yes! We provide special discounted group tariffs for educational institutions and student excursions.']]
  },

  'wedding-packages': {
    title: 'Wedding & Event Vehicle Packages in Tirupati',
    eyebrow: 'WEDDING & EVENT TRANSPORT',
    image: images.crysta,
    intro: 'Comprehensive vehicle fleet management for weddings, marriage functions, bride/groom bridal entry cars, guest airport transfers, and marriage hall shuttles in Tirupati.',
    whyTitle: 'Smooth & Elegant Transportation for Your Big Day',
    whyIntro: 'Ensure your wedding guests and family travel in luxury and comfort with dedicated chauffeurs and coordinated vehicle movement.',
    vehicles: [
      ['Bridal Luxury Cars', 'Premium Chauffeur Driven Cars', 'Bridal & Groom Entry Special'],
      ['Innova Crysta Fleet', 'VIP & Close Family Mobility', 'Wedding Event Day Rates'],
      ['Tempo Travellers / Urbania', 'Guest Airport & Station Shuttles', 'Group Shuttles'],
      ['AC Coach Buses (27–50 Seater)', 'Marriage Hall Guest Shuttles', 'Large Event Transportation']
    ],
    outstation: 'Packages cover guest pickups from Tirupati Airport and Railway Station, hotel transfers, marriage hall shuttles, and post-wedding temple tours.',
    highlights: ['VIP & Bridal Luxury Vehicles', 'Guest Airport & Station Pickup Coordination', 'Marriage Hall & Hotel Shuttle Management', 'Uniformed Chauffeurs & Clean Decorated Fleet', 'Dedicated Transport Event Manager'],
    featureDetails: [
      ['Guest Coordination', 'Punctual group pickups from airport/station to wedding venues.'],
      ['Venue Shuttles', 'Continuous shuttle service between hotels and marriage halls for wedding guests.']
    ],
    packageNote: 'Share your wedding date, venue, guest count, and vehicle requirement for a customized wedding fleet quotation.',
    steps: commonSteps,
    faqs: [...commonFaqs, ['Can we book multiple vehicles for a wedding?', 'Yes! We manage complete wedding fleets including cars, Tempo Travellers, and buses with dedicated transport coordination.']]
  },

  'devotional-packages': {
    title: 'Devotional & Temple Pilgrimage Packages',
    eyebrow: 'DEVOTIONAL & SHRINE CIRCUITS',
    image: images.srisailam,
    intro: 'Sacred pilgrimage packages connecting Tirupati with South India’s most revered temples including Srikalahasti, Kanipakam, Vellore Golden Temple, Arunachalam, Kanchipuram, Srisailam, and Madurai.',
    whyTitle: 'Sacred Journeys Designed for Devotees',
    whyIntro: 'Travel peacefully with drivers who understand temple traditions, darshan timings, dress codes, and holy site routes.',
    vehicles: [
      ['AC Sedan (Etios / Dzire)', '4 Devotees • AC', 'Pilgrimage Packages from ₹3,500'],
      ['AC MUV (Ertiga)', '6 Devotees • AC', 'Pilgrimage Packages from ₹4,200'],
      ['AC SUV (Innova Crysta)', '7 Devotees • AC', 'Pilgrimage Packages from ₹4,800'],
      ['AC Tempo Traveller', '12 / 16 Devotees • AC', 'Pilgrimage Packages from ₹5,800']
    ],
    outstation: 'Packages cover same-day pilgrimage tours as well as multi-day Pancha Linga, Jyotirlinga, and Char Dham sacred circuits.',
    highlights: ['Srikalahasti Rahu-Ketu Kshetram', 'Kanipakam Varasiddhi Vinayaka Temple', 'Vellore Sripuram Lakshmi Narayani Temple', 'Tiruvannamalai Arunachaleswarar Agni Lingam', 'Srisailam Mallikarjuna Swamy Jyotirlinga', 'Kanchipuram & Madurai Meenakshi Amman'],
    featureDetails: [
      ['Rahu-Ketu Pooja Travel', 'Comfortable same-day cab package for Srikalahasti Rahu-Ketu pooja.'],
      ['Sacred Pancha Linga Circuit', 'Multi-day pilgrimage covering major Shiva & Vishnu shrines across AP & TN.']
    ],
    packageNote: 'Customizable according to your pilgrimage dates and pooja schedules. Contact us to reserve your devotional cab package.',
    steps: commonSteps,
    faqs: [...commonFaqs, ['Can driver guide us regarding temple timings?', 'Yes! Our pilgrimage drivers are well-versed with temple opening hours, darshan queues, and local customs.']]
  }
};

export const taxiLinks = [
  { slug: 'car-rentals-in-tirupati', title: 'Car Rentals in Tirupati', starting: '₹2,880' },
  { slug: 'tempo-traveller-rental-in-tirupati', title: 'Tempo Traveller Rental', starting: '₹5,100' },
  { slug: 'urbania-traveller-rental-in-tirupati', title: 'Force Urbania Rental', starting: '₹10,000' },
  { slug: 'bus-rental-in-tirupati', title: 'Luxury Bus Rental', starting: '₹12,000' },
  { slug: 'outstation-taxi-in-tirupati', title: 'Outstation Taxi Service', starting: '₹15/km' },
  { slug: 'taxi-in-tirupati', title: 'Taxi Service in Tirupati', starting: '₹2,880' },
  { slug: 'tirupati-airport-taxi', title: 'Tirupati Airport Taxi', starting: '₹1,200' },
  { slug: 'car-for-rent-in-tirupati-day-rentals', title: 'Car for Rent (Day Hire)', starting: '₹2,880' }
];

export const serviceLinks = Object.entries(servicePages).map(([slug, data]) => ({
  slug,
  title: data.eyebrow
    ? data.eyebrow.split('–')[0].split('|')[0].trim()
    : data.title.split('–')[0].trim()
}));
