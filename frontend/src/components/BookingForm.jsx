import { useState, useEffect } from 'react';
import { CalendarDays, MapPin, Route, MessageCircle, CreditCard, Car, Sparkles, Check, ChevronDown, ArrowRightLeft } from 'lucide-react';
import { whatsappBooking } from '../data/siteData';
import { packageDetails } from '../data/packageDetails';
import { cabRoutes } from '../data/cabRoutes';
import { getVehicleInfo } from '../data/packageData';
import PopularPackages from './PopularPackages';
import EasebuzzModal from './EasebuzzModal';
import { useData } from '../context/DataContext';
import './BookingForm.css';

const popularRoutes = [
  { from: 'Tirupati', to: 'Tirumala', price: '₹900' },
  { from: 'Tirupati', to: 'Srikalahasti', price: '₹2,880' },
  { from: 'Tirupati', to: 'Kanipakam', price: '₹3,580' },
  { from: 'Tirupati', to: 'Arunachalam', price: '₹4,500' },
  { from: 'Tirupati', to: 'Vellore Golden Temple', price: '₹5,000' },
  { from: 'Tirupati', to: 'Chennai Airport', price: '₹3,500' },
  { from: 'Tirupati', to: 'Bangalore', price: '₹5,500' }
];

const fallbackVehicleOptions = [
  { label: 'Sedan (4 Seater) — ₹2,880 (Local: 8h/80km ₹2,880 | 12h/150km ₹3,650 | ₹200/h & ₹15/extra km | Out: ₹15/km)', key: 'Sedan', matchKeys: ['dzire', 'etios', 'sedan'] },
  { label: 'Ertiga (6 Seater) — ₹3,380 (Local: 8h/80km ₹3,380 | 12h/150km ₹4,150 | ₹300/h & ₹19/extra km | Out: ₹19/km)', key: 'Ertiga', matchKeys: ['ertiga', 'muv'] },
  { label: 'Innova Crysta (7 Seater) — ₹4,380 (Local: 8h/80km ₹4,380 | 12h/150km ₹5,150 | ₹400/h & ₹23/extra km | Out: ₹23/km)', key: 'Innova', matchKeys: ['innova', 'crysta'] },
  { label: 'Hycross (7 Seater) — ₹6,100 (Local: 8h/80km ₹6,100 | 12h/150km ₹7,100 | ₹600/h & ₹32/extra km | Out: ₹32/km)', key: 'Hycross', matchKeys: ['hycross', 'hybrid'] },
  { label: 'Fortuner (7 Seater) — ₹8,800 (Local: 8h/80km ₹8,800 | 12h/150km ₹10,500 | ₹800/h & ₹43/extra km | Out: ₹43/km)', key: 'Fortuner', matchKeys: ['fortuner'] },
  { label: 'Tempo Traveller 12 Seater — ₹5,100 (Local: 8h/80km ₹5,100 | 12h/150km ₹6,000 | ₹1000/h & ₹26/extra km | Out: ₹26/km)', key: 'Tempo Traveller 12', matchKeys: ['12 seater', '12-seater', 'tempo traveller 12'] },
  { label: 'Urbania 12 Seater — ₹10,000 (Local: 8h/80km ₹10,000 | 12h/150km ₹12,000 | ₹1200/h & ₹45/extra km | Out: ₹45/km)', key: 'Urbania 12', matchKeys: ['urbania 12', 'urbania'] },
  { label: 'Tempo Traveller 16 Seater — ₹6,800 (Local: 8h/80km ₹6,800 | 12h/150km ₹7,800 | ₹1400/h & ₹35/extra km | Out: ₹35/km)', key: 'Tempo Traveller 16', matchKeys: ['16 seater', '16-seater', 'tempo traveller 16'] },
  { label: 'Urbania 16 Seater — ₹12,000 (Local: 8h/80km ₹12,000 | 12h/150km ₹15,000 | ₹1600/h & ₹48/extra km | Out: ₹48/km)', key: 'Urbania 16', matchKeys: ['urbania 16'] },
  { label: 'Tempo Traveller 20 Seater — ₹9,000 (Local: 8h/80km ₹9,000 | 12h/150km ₹10,500 | ₹1800/h & ₹45/extra km | Out: ₹45/km)', key: 'Tempo Traveller 20', matchKeys: ['20 seater', '20-seater', 'tempo traveller 20'] },
  { label: 'Mini Bus 27 Seater — ₹12,000 (Local: 8h/80km ₹12,000 | 12h/150km ₹13,500 | ₹2000/h & ₹55/extra km | Out: ₹55/km)', key: 'Mini Bus 27', matchKeys: ['mini bus', '27 seater', 'bus 27'] },
  { label: 'Bus 40 Seater — ₹15,200 (Local: 8h/80km ₹15,200 | 12h/150km ₹17,500 | ₹3000/h & ₹65/extra km | Out: ₹65/km)', key: 'Bus 40', matchKeys: ['40 seater', 'bus 40'] },
  { label: 'Bus 45 Seater — ₹18,000 (Local: 8h/80km ₹18,000 | 12h/150km ₹20,500 | ₹4000/h & ₹75/extra km | Out: ₹75/km)', key: 'Bus 45', matchKeys: ['45 seater', 'bus 45'] }
];

export default function BookingForm({ showPackages = true }) {
  const { addQuery, bookingSelection, fleets } = useData();

  // Dynamically map all admin-added and default fleet vehicles
  const vehicleOptions = (fleets && fleets.length > 0)
    ? fleets.map(v => {
        const rawLocal = v.local || '₹2,880';
        const rawLocalLong = v.localLong || '₹3,650';
        const rawOut = v.outstation || '₹15/km';
        const rawExtraHr = v.extraHr || '₹200/hr';
        const cleanName = v.name || v.id;
        const seatText = v.seats ? ` (${v.seats} Seater)` : '';

        const label = `${cleanName}${cleanName.includes('Seater') || cleanName.includes('seater') ? '' : seatText} — ${rawLocal} (Local: 8h/80km ${rawLocal} | 12h/150km ${rawLocalLong} | ${rawExtraHr} | Out: ${rawOut})`;
        const key = cleanName;
        const matchKeys = [
          cleanName.toLowerCase(),
          (v.id || '').toLowerCase(),
          ...(v.seats ? [`${v.seats} seater`, `${v.seats}-seater`] : [])
        ];

        return { label, key, matchKeys, vehicleObj: v };
      })
    : fallbackVehicleOptions;

  const [f, setF] = useState({ 
    from: 'Tirupati', 
    to: 'Tirumala', 
    date: '', 
    trip: 'One Way', 
    vehicle: vehicleOptions[0]?.label || fallbackVehicleOptions[0].label,
    name: '', 
    phone: '' 
  });
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);

  // Sync with global bookingSelection when user interacts with package/tour/destination/vehicle cards
  useEffect(() => {
    if (bookingSelection) {
      let matchedVehLabel = prev => prev.vehicle;
      if (bookingSelection.vehicle) {
        const foundOpt = vehicleOptions.find(v => {
          const cleanV = bookingSelection.vehicle.toLowerCase();
          return v.matchKeys.some(k => cleanV.includes(k)) || v.label.toLowerCase().includes(cleanV);
        });
        if (foundOpt) {
          matchedVehLabel = () => foundOpt.label;
        }
      }

      setF(prev => ({
        ...prev,
        from: bookingSelection.from || prev.from || 'Tirupati',
        to: bookingSelection.to || bookingSelection.name || bookingSelection.title || prev.to,
        trip: bookingSelection.trip || prev.trip,
        vehicle: typeof matchedVehLabel === 'function' ? matchedVehLabel(prev) : matchedVehLabel
      }));
    }
  }, [bookingSelection]);

  // Find matched cab route from cabRoutes data
  const matchedCabRoute = cabRoutes.find(r => {
    if (!f.to) return false;
    const toClean = f.to.toLowerCase().trim();
    const titleClean = r.title.toLowerCase();
    const shortClean = r.shortTitle.toLowerCase();
    const destName = shortClean.split('→')[1]?.trim().toLowerCase() || '';

    return (
      toClean.includes(titleClean) ||
      titleClean.includes(toClean) ||
      (destName && (toClean.includes(destName) || destName.includes(toClean))) ||
      (r.slug && r.slug.toLowerCase().includes(toClean.replace(/[^a-z0-9]/g, '')))
    );
  });

  // Find package details matching current destination/package name
  const matchedPkgData = packageDetails[f.to] || 
    Object.entries(packageDetails).find(([key]) => f.to && (f.to.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(f.to.toLowerCase())))?.[1];

  const getFareForVehicleOption = (vOpt) => {
    // 1. Check cabRoutes prices array first (Tirupati Cabs dropdown links)
    if (matchedCabRoute?.prices?.length) {
      const match = matchedCabRoute.prices.find(([vName]) => {
        const vLower = vName.toLowerCase();
        return vOpt.matchKeys.some(k => vLower.includes(k));
      });
      if (match) return match[1];

      // Calculate proportional fare if specific vehicle option is not explicitly in route prices
      const sedanMatch = matchedCabRoute.prices.find(([vName]) => {
        const vLower = vName.toLowerCase();
        return vLower.includes('etios') || vLower.includes('dzire') || vLower.includes('sedan');
      });
      const sedanFareStr = sedanMatch ? sedanMatch[1] : matchedCabRoute.starting;
      if (sedanFareStr) {
        const numPrice = parseInt(sedanFareStr.replace(/[^0-9]/g, ''), 10);
        if (!isNaN(numPrice) && numPrice > 0) {
          let mult = 1.0;
          if (vOpt.key.includes('Ertiga')) mult = 1.25;
          else if (vOpt.key.includes('Innova')) mult = 1.4;
          else if (vOpt.key.includes('Hycross')) mult = 1.6;
          else if (vOpt.key.includes('Fortuner')) mult = 2.0;
          else if (vOpt.key.includes('Tempo Traveller 12')) mult = 1.75;
          else if (vOpt.key.includes('Urbania 12')) mult = 2.1;
          else if (vOpt.key.includes('Tempo Traveller 16')) mult = 2.35;
          else if (vOpt.key.includes('Urbania 16')) mult = 2.6;
          else if (vOpt.key.includes('Tempo Traveller 20')) mult = 2.8;
          else if (vOpt.key.includes('Mini Bus')) mult = 3.5;
          else if (vOpt.key.includes('Bus 40')) mult = 4.5;
          else if (vOpt.key.includes('Bus 45')) mult = 5.0;

          const calc = Math.round((numPrice * mult) / 50) * 50;
          return `₹${calc.toLocaleString('en-IN')}`;
        }
      }
    }

    // 2. Check packageDetails prices array
    if (matchedPkgData?.prices) {
      const match = matchedPkgData.prices.find(([vName]) => {
        const vLower = vName.toLowerCase();
        return vOpt.matchKeys.some(k => vLower.includes(k));
      });
      if (match) return match[1];
    }

    // 3. Direct bookingSelection match
    if (bookingSelection?.price && bookingSelection?.vehicle && f.vehicle === vOpt.label) {
      return bookingSelection.price;
    }

    // 4. Check popularRoutes
    const matchedRoute = popularRoutes.find(
      r => r.from.toLowerCase() === f.from.trim().toLowerCase() && r.to.toLowerCase() === f.to.trim().toLowerCase()
    );
    if (matchedRoute) {
      const numPrice = parseInt(matchedRoute.price.replace(/[^0-9]/g, ''), 10);
      if (!isNaN(numPrice) && numPrice > 0) {
        let mult = 1.0;
        if (vOpt.key.includes('Ertiga')) mult = 1.3;
        else if (vOpt.key.includes('Innova')) mult = 1.6;
        else if (vOpt.key.includes('Hycross')) mult = 1.9;
        else if (vOpt.key.includes('Fortuner')) mult = 2.4;
        else if (vOpt.key.includes('Tempo Traveller 12')) mult = 2.1;
        else if (vOpt.key.includes('Urbania')) mult = 2.5;
        else if (vOpt.key.includes('Tempo Traveller 16')) mult = 2.8;
        else if (vOpt.key.includes('Bus')) mult = 4.5;

        const calc = Math.round((numPrice * mult) / 50) * 50;
        return `₹${calc.toLocaleString('en-IN')}`;
      }
      return matchedRoute.price;
    }

    // 5. Fallback base rate from vehicleObj or helper
    if (vOpt.vehicleObj?.local) {
      return vOpt.vehicleObj.local.split('/')[0].trim();
    }
    return getVehicleBaseRate(vOpt.label);
  };

  const getVehicleBaseRate = (vehicleName) => {
    if (vehicleName.includes('Ertiga')) return '₹3,380';
    if (vehicleName.includes('Innova')) return '₹4,380';
    if (vehicleName.includes('Hycross')) return '₹6,100';
    if (vehicleName.includes('Fortuner')) return '₹8,800';
    if (vehicleName.includes('Tempo Traveller 12')) return '₹5,100';
    if (vehicleName.includes('Urbania 12')) return '₹10,000';
    if (vehicleName.includes('Tempo Traveller 16')) return '₹6,800';
    if (vehicleName.includes('Urbania 16')) return '₹12,000';
    if (vehicleName.includes('Tempo Traveller 20')) return '₹9,000';
    if (vehicleName.includes('Mini Bus 27')) return '₹12,000';
    if (vehicleName.includes('Bus 40')) return '₹15,200';
    if (vehicleName.includes('Bus 45')) return '₹18,000';
    return '₹2,880';
  };

  // Compute estimated price for currently selected vehicle
  const selectedOpt = vehicleOptions.find(v => v.label === f.vehicle) || vehicleOptions[0];
  const estimatedPrice = getFareForVehicleOption(selectedOpt);

  function submit(e) {
    e.preventDefault();
    addQuery({
      name: f.name || 'Site Visitor',
      phone: f.phone || 'WhatsApp Visitor',
      from: f.from,
      to: f.to,
      date: f.date || 'Not specified',
      trip: f.trip,
      vehicle: f.vehicle,
      status: 'Pending'
    });

    const message = `🙏 *Cab / Tour Enquiry – Dhakshinya Tours & Travels*

📍 *Pickup:* ${f.from}
📍 *Drop / Destination:* ${f.to}
📅 *Travel Date:* ${f.date || 'Not specified'}
🔄 *Trip Type:* ${f.trip}
🚗 *Vehicle:* ${selectedOpt?.vehicleObj?.name || selectedOpt?.key || f.vehicle.split('—')[0].trim()}
💰 *Estimated Fare:* ${estimatedPrice}

Please confirm availability and share the final quote. Thank you!`;
    window.open(whatsappBooking(message), '_blank', 'noopener,noreferrer');
  }

  const handleTripChange = (type) => {
    let defaultTo = f.to;
    if (type === 'Local Sightseeing') defaultTo = 'Tirupati Local Sightseeing (8h / 80km)';
    else if (type === 'Outstation Tour') defaultTo = 'Arunachalam & Golden Temple';
    else if (type === 'One Way' && f.to.includes('Sightseeing')) defaultTo = 'Tirumala';
    
    setF(prev => ({ ...prev, trip: type, to: defaultTo }));
  };

  const handleSelectQuickRoute = (routeItem) => {
    setF(prev => ({ ...prev, from: routeItem.from, to: routeItem.to }));
  };

  const swapLocations = () => {
    setF(prev => ({ ...prev, from: prev.to, to: prev.from }));
  };

  const todayStr = new Date().toISOString().split('T')[0];

  const destLabel = (f.trip === 'Local Sightseeing' || f.trip === 'Outstation Tour') 
    ? 'DESTINATION / PLACES TO VISIT' 
    : 'DESTINATION (DROP)';

  const destPlaceholder = f.trip === 'Local Sightseeing'
    ? 'e.g. Tirupati Local Temples, Kapila Theertham, Kanipakam'
    : f.trip === 'Outstation Tour'
    ? 'e.g. Arunachalam, Golden Temple Vellore, Kanchipuram'
    : 'e.g. Tirumala / Srikalahasti / Airport';

  return (
    <>
      <div className="enhanced-booking-container" id="booking-form">
        {/* Top Bar: Trip Types & Popular Route Chips */}
        <div className="booking-top-strip">
          <div className="trip-type-pills">
            {['One Way', 'Round Trip', 'Local Sightseeing', 'Outstation Tour'].map(type => (
              <button
                key={type}
                type="button"
                className={`trip-pill ${f.trip === type ? 'active' : ''}`}
                onClick={() => handleTripChange(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="quick-route-chips">
            <span className="chips-label"><Sparkles size={12} /> Popular:</span>
            {popularRoutes.slice(0, 4).map(item => (
              <button
                key={`${item.from}-${item.to}`}
                type="button"
                className={`quick-chip ${f.from === item.from && f.to === item.to ? 'active' : ''}`}
                onClick={() => handleSelectQuickRoute(item)}
              >
                {item.from} → {item.to}
              </button>
            ))}
          </div>
        </div>

        {/* Datalists for Pickup & Drop Suggestions */}
        <datalist id="pickup-suggestions">
          <option value="Tirupati Railway Station" />
          <option value="Tirupati Central Bus Stand" />
          <option value="Tirupati Airport (TIR)" />
          <option value="Renigunta Junction" />
          <option value="Hotel / Residence in Tirupati" />
        </datalist>

        <datalist id="drop-suggestions">
          <option value="Tirumala Temple" />
          <option value="Srikalahasti Temple" />
          <option value="Kanipakam Temple" />
          <option value="Vellore Golden Temple" />
          <option value="Arunachalam (Tiruvannamalai)" />
          <option value="Chennai Airport (MAA)" />
          <option value="Bangalore Airport (BLR)" />
          <option value="Kanchipuram Temples" />
        </datalist>

        {/* Main Booking Form Card */}
        <form className="enhanced-booking-card" onSubmit={submit}>
          <div className="booking-fields-grid">
            {/* From Field */}
            <div className="field-box">
              <label>PICKUP LOCATION</label>
              <div className="field-input-wrap">
                <MapPin className="field-icon gold" size={17} />
                <input 
                  type="text"
                  value={f.from} 
                  onChange={e => setF({ ...f, from: e.target.value })} 
                  list="pickup-suggestions"
                  placeholder="e.g. Tirupati Airport / Hotel"
                  required
                />
              </div>
            </div>

            {/* Swap Button (between From and To) */}
            <button type="button" className="swap-btn" onClick={swapLocations} title="Swap Locations">
              <ArrowRightLeft size={14} />
            </button>

            {/* To Field (Places to Visit / Destination) */}
            <div className="field-box">
              <label>{destLabel}</label>
              <div className="field-input-wrap">
                <MapPin className="field-icon gold" size={17} />
                <input 
                  type="text"
                  value={f.to} 
                  onChange={e => setF({ ...f, to: e.target.value })} 
                  list="drop-suggestions"
                  placeholder={destPlaceholder}
                  required
                />
              </div>
            </div>

            {/* Date Field */}
            <div className="field-box">
              <label>TRAVEL DATE</label>
              <div className="field-input-wrap">
                <CalendarDays className="field-icon gold" size={17} />
                <input 
                  type="date" 
                  value={f.date} 
                  min={todayStr}
                  onChange={e => setF({ ...f, date: e.target.value })} 
                />
              </div>
            </div>

            {/* Vehicle Selection Field */}
            <div className="field-box">
              <label>VEHICLES & BUSES FARE RATES</label>
              <div className="field-input-wrap">
                <Car className="field-icon gold" size={17} />
                <select value={f.vehicle} onChange={e => setF({ ...f, vehicle: e.target.value })}>
                  {vehicleOptions.map((vOpt, idx) => {
                    const computedFare = getFareForVehicleOption(vOpt);
                    const vehicleName = vOpt.vehicleObj?.name || vOpt.key;
                    const optionDisplay = `${vehicleName} — ${computedFare}`;

                    return (
                      <option key={vOpt.vehicleObj?.id || `${vOpt.key}-${idx}`} value={vOpt.label}>
                        {optionDisplay}
                      </option>
                    );
                  })}
                </select>
                <ChevronDown className="select-arrow" size={14} />
              </div>
            </div>
          </div>

          {/* Bottom Action Row */}
          <div className="booking-card-footer">
            <div className="booking-actions-group">
              <button className="button wa-booking-btn" type="submit">
                <MessageCircle size={16} /> Enquire on WhatsApp
              </button>
              <button 
                className="button pay-booking-btn" 
                type="button" 
                onClick={() => setIsPayModalOpen(true)}
              >
                <CreditCard size={16} /> Book Cab 💳
              </button>
            </div>
          </div>
        </form>
      </div>

      {showPackages && <PopularPackages />}

      <EasebuzzModal 
        modalClassName="home-hero-booking-modal"
        isOpen={isPayModalOpen} 
        onClose={() => setIsPayModalOpen(false)}
        initialData={{
          service: `${f.to} (${f.trip})`,
          vehicle: f.vehicle,
          amount: '1000',
          fullAmount: estimatedPrice,
          name: f.name,
          phone: f.phone,
          date: f.date,
          pickup: f.from
        }}
      />
    </>
  );
}

