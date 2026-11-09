import { useState } from 'react';
import { ArrowLeft, Check, Clock3, Fuel, Luggage, ShieldCheck, Users, Wind, CreditCard, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Page from './PageTemplate';
import { whatsapp } from '../data/siteData';
import { fleet } from '../data/fleetData';
import { useData } from '../context/DataContext';
import EasebuzzModal from '../components/EasebuzzModal';
import SEO from '../components/SEO';
import './VehicleDetails.css';

export default function VehicleDetails() {
  const { fleets, selectBooking } = useData();
  const { vehicleId } = useParams();
  const vehicle = (fleets || []).find(v => v.id === vehicleId) || fleet.find(v => v.id === vehicleId);
  const [selectedRate, setSelectedRate] = useState('local'); // 'local' | 'localLong' | 'outstation'
  const [showPayModal, setShowPayModal] = useState(false);

  if (!vehicle) {
    return (
      <Page eyebrow="FLEET" title="Vehicle not found" text="This vehicle is no longer available in the current fleet.">
        <Link className="button" to="/fleet">Back to Fleet</Link>
      </Page>
    );
  }

  const { name, seats, bags, image, local, localLong, outstation, minimum, fuel, features, category, use } = vehicle;

  const rawExtraHr = (vehicle.extraHr && vehicle.extraHr !== 'extra hr') ? vehicle.extraHr : '₹200/hr';
  const rawOutstation = vehicle.outstation || '₹15/km';

  const extraHrStr = rawExtraHr.replace(/\/hr?$/i, '/hr');
  const extraKmStr = `${rawOutstation.replace(/\/km?$/i, '')}/extra km`;
  const localExtraInfo = `${extraHrStr} & ${extraKmStr}`;
  const outstationExtraInfo = vehicle.minimum ? (vehicle.minimum.toLowerCase().startsWith('min') ? vehicle.minimum : `Min ${vehicle.minimum}`) : 'Min 300 km/day';

  const cleanPrice = (p) => p ? p.split('/')[0].trim() : '';

  const rateOptions = [
    { key: 'local', label: 'Local 8h / 80km', price: cleanPrice(local), ratePlan: 'Local 8 Hours / 80 Km', subText: localExtraInfo },
    { key: 'localLong', label: 'Local 12h / 150km', price: cleanPrice(localLong), ratePlan: 'Local 12 Hours / 150 Km', subText: localExtraInfo },
    { key: 'outstation', label: 'Outstation', price: outstation, ratePlan: 'Outstation Trip', subText: outstationExtraInfo }
  ];

  const currentOption = rateOptions.find(r => r.key === selectedRate) || rateOptions[0];
  const message = `Hi, I want to rent ${name} in Tirupati for ${currentOption.label} (${currentOption.price}). Please share availability and current quote.`;

  return (
    <Page eyebrow={category} title={name} text={use} image={image}>
      <SEO
        title={`${name} Rental in Tirupati – Tariffs & Bookings | Taxi in Tirupati`}
        description={`Rent ${name} in Tirupati for local 8h/80km sightseeing, outstation pilgrimage tours and Tirupati airport transfers. Starting local fare: ${cleanPrice(local) || '₹2,880'}. Sanitised AC vehicle.`}
        canonical={`https://www.dhakshinyatourandtravels.in/fleet/${vehicleId}`}
        ogImage={image}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: `${name} Rental - Taxi in Tirupati`,
          description: use,
          image: image,
          offers: {
            '@type': 'Offer',
            price: (cleanPrice(local) || '2880').replace(/[^0-9]/g, ''),
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
          }
        }}
      />
      <section className="vehicle-detail content">
        <Link className="vehicle-back" to="/fleet"><ArrowLeft size={16} /> Back to fleet</Link>
        
        <div className="vehicle-detail-grid">
          <div className="vehicle-detail-media">
            <img src={image} alt={`${name} rental in Tirupati`} />
          </div>

          <div className="vehicle-detail-copy">
            <span className="vehicle-detail-category">{category}</span>
            <h2>{name}</h2>
            <p>{use}</p>

            <div className="vehicle-spec-grid">
              <span><Users size={16} /><b>{seats}</b><small>Capacity</small></span>
              <span><Luggage size={16} /><b>{bags}</b><small>Luggage</small></span>
              <span><Wind size={16} /><b>AC</b><small>Air conditioned</small></span>
              <span><ShieldCheck size={16} /><b>Driver</b><small>Professional service</small></span>
            </div>

            {/* INTERACTIVE SELECTABLE RATE PLAN BUTTONS */}
            <div className="selectable-rates-container" style={{ marginTop: '1.25rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', display: 'block', marginBottom: '0.4rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                SELECT TRIP / RATE PLAN:
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                {rateOptions.map(opt => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setSelectedRate(opt.key)}
                    style={{
                      padding: '0.65rem 0.4rem',
                      borderRadius: 10,
                      border: selectedRate === opt.key ? '2px solid #d97706' : '1.5px solid #cbd5e1',
                      background: selectedRate === opt.key ? '#fffdf5' : '#ffffff',
                      cursor: 'pointer',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '3px',
                      boxShadow: selectedRate === opt.key ? '0 4px 14px rgba(217, 119, 6, 0.2)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <small style={{ fontSize: '0.68rem', fontWeight: 800, color: selectedRate === opt.key ? '#d97706' : '#64748b', textTransform: 'uppercase' }}>
                      {opt.label}
                    </small>
                    <b style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0a0a0a', whiteSpace: 'nowrap' }}>
                      {opt.price}
                    </b>
                    <small style={{ fontSize: '0.6rem', fontWeight: 700, color: '#d97706', display: 'block', marginTop: '1px', lineHeight: 1.25 }}>
                      {opt.subText}
                    </small>
                  </button>
                ))}
              </div>
            </div>

            <div className="vehicle-detail-feature-list">
              {features.map(feature => <span key={feature}><Check size={14} /> {feature}</span>)}
              <span><Fuel size={14} /> {fuel}</span>
              <span><Clock3 size={14} /> Outstation minimum {minimum}</span>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
              <a 
                className="button" 
                style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }} 
                href={`${whatsapp}?text=${encodeURIComponent(message)}`} 
                target="_blank" 
                rel="noreferrer"
              >
                <MessageCircle size={16} /> Rent on WhatsApp
              </a>
              <button 
                type="button" 
                className="button" 
                style={{ flex: 1, background: 'linear-gradient(135deg, #e5a919, #c68a0a)', borderColor: '#e5a919', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }} 
                onClick={() => {
                  const isOutstation = selectedRate === 'outstation';
                  selectBooking({
                    vehicle: name,
                    trip: isOutstation ? 'Outstation Tour' : 'Local Sightseeing',
                    to: isOutstation ? 'Outstation Tour (Arunachalam / Vellore)' : 'Tirupati Local Sightseeing (8h / 80km)',
                    price: currentOption.price
                  });
                  setShowPayModal(true);
                }}
              >
                <CreditCard size={16} /> Book 💳
              </button>
            </div>
          </div>
        </div>

        <div className="vehicle-detail-info">
          <div>
            <span className="eyebrow">GOOD TO KNOW</span>
            <h3>Plan the trip around your vehicle</h3>
            <p>Published rates are transparent. Local sightseeing covers 8h/80km or 12h/150km packages within Tirupati. Tolls, parking, permits, state taxes and other trip-specific charges apply per actual usage. Minimum kilometre rules apply for outstation journeys.</p>
          </div>
          <ul>
            <li><CheckCircle2 size={16} color="#16a34a" /> Professional driver included</li>
            <li><CheckCircle2 size={16} color="#16a34a" /> Clean and maintained AC vehicle</li>
            <li><CheckCircle2 size={16} color="#16a34a" /> Local, temple and outstation travel</li>
            <li><CheckCircle2 size={16} color="#16a34a" /> Instant ₹1,000 advance token booking</li>
          </ul>
        </div>
      </section>

      {showPayModal && (
        <EasebuzzModal
          isOpen={showPayModal}
          onClose={() => setShowPayModal(false)}
          initialData={{
            type: 'vehicle',
            service: `${name} Rental - ${currentOption.ratePlan}`,
            vehicle: name,
            local,
            localLong,
            outstation,
            minimum,
            ratePlan: currentOption.ratePlan,
            amount: '1000',
            fullAmount: currentOption.price || local
          }}
        />
      )}
    </Page>
  );
}

