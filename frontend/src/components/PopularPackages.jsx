import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, CarFront, CheckCircle2, ChevronDown, MessageCircle, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packageItineraries } from '../data/packageItineraries';
import { packageDetails } from '../data/packageDetails';
import { packagesData, getVehicleInfo } from '../data/packageData';
import { useData } from '../context/DataContext';
import EasebuzzModal from './EasebuzzModal';
import './PopularPackages.css';

export default function PopularPackages() {
  const { tours, selectBooking, fleets } = useData();
  const [selectedDetailPkg, setSelectedDetailPkg] = useState(null);
  const [payPkg, setPayPkg] = useState(null);
  const whatsapp = (name) => `https://wa.me/919014677289?text=${encodeURIComponent(`Hi, I want to inquire about ${name}`)}`;

  // Helper to dynamically build fares for ALL vehicles in admin fleet
  const getPackageVehiclePrices = (pkgName, startingPriceStr, predefinedPrices = []) => {
    const baseNum = parseInt((startingPriceStr || '3500').replace(/[^0-9]/g, ''), 10) || 3500;
    const activeFleets = (fleets && fleets.length > 0) ? fleets : [];

    if (!activeFleets || activeFleets.length === 0) {
      return predefinedPrices.length > 0 ? predefinedPrices : [
        ['Sedan (4 Seater)', `₹${baseNum.toLocaleString('en-IN')}`]
      ];
    }

    return activeFleets.map(v => {
      const vName = v.name || v.id;
      const vLower = vName.toLowerCase();

      // Check if predefined in packageDetails or DB prices
      const match = predefinedPrices.find(([pName]) => {
        const pLower = pName.toLowerCase();
        return vLower.includes(pLower) || pLower.includes(vLower);
      });

      if (match) return [vName, match[1]];

      let mult = 1.0;
      if (vLower.includes('ertiga')) mult = 1.25;
      else if (vLower.includes('crysta') || vLower.includes('innova')) mult = 1.45;
      else if (vLower.includes('hycross')) mult = 1.7;
      else if (vLower.includes('fortuner')) mult = 2.3;
      else if (vLower.includes('urbania') && (vLower.includes('16') || vLower.includes('17'))) mult = 2.7;
      else if (vLower.includes('urbania')) mult = 2.5;
      else if (vLower.includes('tempo') && (vLower.includes('20') || vLower.includes('21'))) mult = 2.4;
      else if (vLower.includes('tempo') && (vLower.includes('16') || vLower.includes('17'))) mult = 1.95;
      else if (vLower.includes('tempo') || vLower.includes('12')) mult = 1.6;
      else if (vLower.includes('27') || vLower.includes('mini bus')) mult = 3.4;
      else if (vLower.includes('40')) mult = 4.2;
      else if (vLower.includes('45')) mult = 4.8;
      else if (v.seats > 20) mult = 3.5;
      else if (v.seats > 10) mult = 2.0;
      else if (v.seats > 5) mult = 1.4;

      const calcPrice = Math.round((baseNum * mult) / 50) * 50;
      return [vName, `₹${calcPrice.toLocaleString('en-IN')}`];
    });
  };

  // Convert dynamic tours from DB/context into package card format
  const dynamicPackages = (tours && tours.length > 0)
    ? tours.map(t => {
        // [title, duration, route, startingPrice, image, id, prices]
        const rawSlug = (t[0] || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        return {
          name: t[0],
          duration: t[1],
          route: t[2],
          startingPrice: t[3],
          image: t[4],
          slug: rawSlug,
          prices: t[6] || t[5] || []
        };
      })
    : packagesData;

  const displayPackages = dynamicPackages;

  const handleBookPackage = (pkgName, pkgPrice, customVehiclePrices = null) => {
    selectBooking({
      to: pkgName,
      trip: 'Outstation Tour',
      vehicle: 'Swift Dzire / Etios (Sedan 4-Seater)',
      price: pkgPrice
    });
    setPayPkg({ 
      name: pkgName, 
      price: pkgPrice,
      prices: customVehiclePrices || getPackageVehiclePrices(pkgName, pkgPrice, packageDetails[pkgName]?.prices || [])
    });
  };

  useEffect(() => {
    if (selectedDetailPkg || payPkg) {
      const prevOverflowBody = document.body.style.overflow;
      const prevOverflowHtml = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      document.documentElement.classList.add('modal-open');
      return () => {
        document.body.style.overflow = prevOverflowBody;
        document.documentElement.style.overflow = prevOverflowHtml;
        document.body.classList.remove('modal-open');
        document.documentElement.classList.remove('modal-open');
      };
    }
  }, [selectedDetailPkg, payPkg]);


  return (
    <>
      <section className="popular-packages-section">
        <div className="popular-heading">
          <div>
            <p className="eyebrow">🔥 MOST BOOKED PACKAGES</p>
            <h2>Explore Our Popular Temple Tour Packages</h2>
            <p>Safe, Comfortable & Memorable Journeys to Sacred Destinations</p>
          </div>
          <div className="popular-benefits">
            <span>🚕 Tolls Included</span>
            <span>🅿️ Parkings Included</span>
            <span>👨‍✈️ Driver Batta Included</span>
            <span>🏛️ TN Border Tax Included</span>
            <span>📞 24×7 Support</span>
            <span>💰 Best Price Guaranteed</span>
          </div>
        </div>

        <div className="popular-package-grid">
          {displayPackages.map((pkg, i) => {
            const name = pkg.name;
            const duration = pkg.duration;
            const route = pkg.route;
            const image = pkg.image;
            const data = packageDetails[name];
            const startingPrice = pkg.startingPrice || data?.prices?.[0]?.[1] || '₹3,500';
            
            // Format route: turn 'Tirupati -> Tirumala -> Srikalahasti' or 'Tirupati → Tirumala' into clean items
            const placesList = route 
              ? route.split(/→|->/).map(s => s.trim()).filter(Boolean)
              : [];

            return (
              <motion.article 
                className="popular-package-card" 
                key={name + i} 
                initial={{ opacity: 0, y: 24 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.1 }} 
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              >
                <div className="popular-package-image">
                  <img src={image} alt={name} loading="lazy"/>
                  <span className="popular-badge">★ Most Popular</span>
                  <span className="popular-duration">{duration} · From {startingPrice}</span>
                </div>
                <div className="popular-package-content">
                  <h3>{name}</h3>
                  <div className="popular-places-box">
                    <h4 className="places-visit-heading">Places Visited</h4>
                    <div className="places-visit-grid">
                      {placesList.map((place, idx) => (
                        <span className="place-item-chip" key={idx}>
                          📍 {place}
                        </span>
                      ))}
                    </div>

                  </div>
                  <div className="popular-actions-two">
                    <button 
                      type="button" 
                      className="popular-btn-pay"
                      onClick={() => handleBookPackage(name, startingPrice)}
                    >
                      <span>Book 💳</span>
                    </button>
                    <button 
                      type="button" 
                      className="popular-btn-details"
                      onClick={() => setSelectedDetailPkg(pkg)}
                    >
                      <span>Details</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* POPUP MODAL FOR DETAILS BUTTON - ULTRA COMPACT MODEL */}
      {selectedDetailPkg && (
        <div className="itinerary-overlay" role="presentation" onClick={() => setSelectedDetailPkg(null)}>
          <div 
            className="itinerary-modal package-detail-popup-modal compact-modal-shell" 
            role="dialog" 
            aria-modal="true" 
            onClick={(event) => event.stopPropagation()}
          >
            <button 
              type="button" 
              className="itinerary-close" 
              aria-label="Close" 
              onClick={() => setSelectedDetailPkg(null)}
            >
              <X size={18}/>
            </button>

            {(() => {
              const { name, duration, route } = selectedDetailPkg;
              const data = packageDetails[name];
              const startingPrice = selectedDetailPkg.startingPrice || data?.prices?.[0]?.[1] || '₹3,500';
              const itinerary = packageItineraries[name];
              const placesList = route ? route.split(/→|->/).map(s => s.trim()).filter(Boolean) : [];

              return (
                <>
                  {/* CLEAN TEXT HEADER - NO HERO IMAGE */}
                  <div className="compact-modal-header">
                    <div>
                      <span className="compact-badge">{duration} Package</span>
                      <h3>{name}</h3>
                    </div>
                    <div className="compact-price-tag">
                      <small>Starting from</small>
                      <strong>{startingPrice}</strong>
                    </div>
                  </div>

                  <div className="compact-modal-body">
                    {/* 1. ROUTE CORRIDOR */}
                    <div className="compact-section">
                      <span className="compact-label">📍 Route Corridor:</span>
                      <p className="compact-route-text">{placesList.join(', ')}</p>
                    </div>

                    {/* 2. VEHICLE PRICES (TEXT ONLY 2-COLUMN GRID) */}
                    {(() => {
                      const allVehPrices = getPackageVehiclePrices(name, startingPrice, data?.prices || selectedDetailPkg.prices || []);
                      return (
                        <div className="compact-section">
                          <span className="compact-label">🚗 Vehicle Fares ({allVehPrices.length} Available):</span>
                          <div className="compact-prices-grid">
                            {allVehPrices.map(([vehicle, price]) => (
                              <div className="compact-price-row" key={vehicle}>
                                <span className="v-title">{vehicle}</span>
                                <strong className="v-fare">{price}</strong>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}

                    {/* 3 & 4. ITINERARY + RULES / INCLUSIONS */}
                    <div className="compact-info-grid">
                      {itinerary && itinerary.length > 0 && (
                        <div className="compact-section compact-itinerary-section">
                          <span className="compact-label">🗓️ Itinerary Summary:</span>
                          <div className="compact-itinerary-list">
                            {itinerary.map(({ day, places }) => (
                              <div className="compact-day-item" key={day}>
                                <strong>{day}:</strong> <span>{places}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="compact-section compact-rules-section">
                        <span className="compact-label">📋 Rules & Inclusions:</span>
                        <div className="compact-rules-box">
                          <div className="rule-inc">✔ {data?.included || 'Includes Tolls, Parking Charges, Driver Batta & AC Cab Transport'}</div>
                          {data?.excluded && <div className="rule-exc">✖ {data.excluded}</div>}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MODAL ACTION FOOTER */}
                  <div className="compact-modal-footer">
                    <button 
                      type="button" 
                      className="compact-book-btn" 
                      onClick={() => { 
                        const allVehPrices = getPackageVehiclePrices(name, startingPrice, data?.prices || selectedDetailPkg.prices || []);
                        handleBookPackage(name, startingPrice, allVehPrices); 
                        setSelectedDetailPkg(null); 
                      }}
                    >
                      Book ₹1,000 Advance 💳
                    </button>
                    <a 
                      className="compact-wa-btn" 
                      href={whatsapp(name)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={15}/> WhatsApp Inquiry
                    </a>
                    <Link
                      className="compact-read-more"
                      to={`/tour/${selectedDetailPkg.slug}`}
                      onClick={() => setSelectedDetailPkg(null)}
                    >
                      <ArrowRight size={15}/> Read More
                    </Link>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {payPkg && (
        <EasebuzzModal 
          isOpen={Boolean(payPkg)}
          onClose={() => setPayPkg(null)}
          initialData={{
            type: 'tour',
            service: `${payPkg.name}`,
            prices: payPkg.prices || getPackageVehiclePrices(payPkg.name, payPkg.price, packageDetails[payPkg.name]?.prices || []),
            amount: '1000',
            fullAmount: payPkg.price || '3500'
          }}
        />
      )}
    </>
  );
}

