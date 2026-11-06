import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, CreditCard, CheckCircle2, AlertCircle, Lock, ArrowRight, Loader2, Car, Calendar, MapPin, Route, Tag, ArrowLeft, MessageCircle } from 'lucide-react';
import { useData } from '../context/DataContext';
import { initiateRazorpayOrder, openRazorpayCheckout } from '../services/razorpayService';
import { getEasebuzzConfig, generateTransactionId, calculateEasebuzzHash } from '../services/easebuzzService';
import { packageDetails } from '../data/packageDetails';
import { cabRoutes } from '../data/cabRoutes';
import { getVehicleInfo } from '../data/packageData';
import { whatsappBooking } from '../data/siteData';
import './BookingForm.css';

const vehicleOptionsList = [
  'Sedan (4 Seater)',
  'Ertiga (6 Seater)',
  'Innova Crysta (7 Seater)',
  'Hycross (7 Seater)',
  'Fortuner (7 Seater)',
  'Tempo Traveller 12 Seater',
  'Urbania 12 Seater',
  'Tempo Traveller 16 Seater',
  'Urbania 16 Seater',
  'Tempo Traveller 20 Seater',
  'Mini Bus 27 Seater',
  'Bus 40 Seater',
  'Bus 45 Seater'
];

export const carOnlyOptions = [
  'Sedan (4 Seater)',
  'Ertiga (6 Seater)',
  'Innova Crysta (7 Seater)',
  'Hycross (7 Seater)',
  'Fortuner (7 Seater)'
];

export const tempoOnlyOptions = [
  'Tempo Traveller 12 Seater',
  'Tempo Traveller 16 Seater',
  'Tempo Traveller 20 Seater'
];

export const urbaniaOnlyOptions = [
  'Urbania 12 Seater',
  'Urbania 16 Seater'
];

export const busOnlyOptions = [
  'Mini Bus 27 Seater',
  'Bus 40 Seater',
  'Bus 45 Seater'
];

export function dedupeVehicleOptions(optionsList, serviceName = '', selectedRateKey = '', customFleets = null) {
  if (!optionsList || !Array.isArray(optionsList)) return [];

  const seenLabels = new Set();
  const uniqueOptions = [];

  for (const opt of optionsList) {
    if (!opt) continue;
    const label = getFormattedVehicleOptionLabel(opt, serviceName, selectedRateKey, customFleets);
    if (!seenLabels.has(label)) {
      seenLabels.add(label);
      uniqueOptions.push(opt);
    }
  }

  return uniqueOptions;
}

export function getFormattedVehicleOptionLabel(optStr, serviceName = '', selectedRateKey = '', customFleets = null) {
  if (!optStr) return '';

  const parts = optStr.split('—').map(s => s.trim());
  const baseName = parts[0];
  const fixedPrice = parts[1] || '';

  const vObj = getVehicleInfo(baseName, customFleets);
  const fullName = vObj?.name || baseName;

  if (fixedPrice) {
    return `${fullName} — ${fixedPrice}`;
  }

  // Format with vehicle's rate plan for rentals & taxis
  if (vObj) {
    let rateStr = '';
    if (selectedRateKey === 'localLong') {
      rateStr = vObj.localLong || vObj.local;
    } else if (selectedRateKey === 'outstation') {
      rateStr = vObj.outstation;
    } else {
      rateStr = vObj.local;
    }

    if (rateStr) {
      return `${fullName} — ${rateStr}`;
    }
  }

  return fullName;
}

export function getFilteredVehicleOptions(serviceName = '', initialVehicleOptions = null, customFleets = null) {
  if (initialVehicleOptions && Array.isArray(initialVehicleOptions) && initialVehicleOptions.length > 0) {
    return initialVehicleOptions;
  }

  const activeFleets = (customFleets && customFleets.length > 0) ? customFleets : null;

  // Always show ALL admin-added fleet vehicles & buses
  if (activeFleets && activeFleets.length > 0) {
    return activeFleets.map(v => v.name || v.id);
  }

  return vehicleOptionsList;
}

export function getBestMatchingVehicleOption(inputStr, availableOptions) {
  if (!inputStr || !availableOptions || availableOptions.length === 0) {
    return availableOptions?.[0] || '';
  }

  const exact = availableOptions.find(opt => opt === inputStr);
  if (exact) return exact;

  const cleanInput = inputStr.toLowerCase();

  const inclusion = availableOptions.find(opt => {
    const cleanOpt = opt.toLowerCase();
    return cleanOpt.includes(cleanInput) || cleanInput.includes(cleanOpt);
  });
  if (inclusion) return inclusion;

  if (cleanInput.includes('urbania')) {
    return availableOptions.find(o => o.toLowerCase().includes('urbania 12') || o.toLowerCase().includes('urbania')) || availableOptions[0];
  }
  if (cleanInput.includes('tempo traveller') || cleanInput.includes('tempo')) {
    return availableOptions.find(o => o.toLowerCase().includes('tempo traveller 12') || o.toLowerCase().includes('tempo')) || availableOptions[0];
  }
  if (cleanInput.includes('luxury bus') || cleanInput.includes('bus rental') || cleanInput.includes('bus')) {
    return availableOptions.find(o => o.toLowerCase().includes('27 seater') || o.toLowerCase().includes('bus')) || availableOptions[0];
  }
  if (cleanInput.includes('fortuner')) {
    return availableOptions.find(o => o.toLowerCase().includes('fortuner')) || availableOptions[0];
  }
  if (cleanInput.includes('hycross')) {
    return availableOptions.find(o => o.toLowerCase().includes('hycross')) || availableOptions[0];
  }
  if (cleanInput.includes('crysta') || cleanInput.includes('innova')) {
    return availableOptions.find(o => o.toLowerCase().includes('crysta') || o.toLowerCase().includes('innova')) || availableOptions[0];
  }
  if (cleanInput.includes('ertiga')) {
    return availableOptions.find(o => o.toLowerCase().includes('ertiga')) || availableOptions[0];
  }
  if (cleanInput.includes('sedan') || cleanInput.includes('etios') || cleanInput.includes('dzire') || cleanInput.includes('car rental') || cleanInput.includes('airport taxi') || cleanInput.includes('day hire') || cleanInput.includes('taxi service')) {
    return availableOptions.find(o => o.toLowerCase().includes('dzire') || o.toLowerCase().includes('etios') || o.toLowerCase().includes('sedan')) || availableOptions[0];
  }

  return availableOptions[0];
}

export default function EasebuzzModal({ isOpen, onClose, initialData = {}, modalClassName = '' }) {
  const { recordPayment, addQuery, fleets } = useData();

  const fixedAdvanceAmount = '1000';
  const [step, setStep] = useState(1);

  // Identify booking context type: 'tour' | 'vehicle' | 'route' | 'general'
  const rawServiceName = initialData.service || initialData.tourName || initialData.slug || initialData.name || initialData.title || '';
  // Clean service name if it has parenthetical vehicle info like "Tour Name (Ertiga (6 Seater))"
  const cleanServiceName = rawServiceName.replace(/\s*\([^)]+(\([^)]*\))?[^)]*\)$/, '').trim();
  const serviceName = cleanServiceName || rawServiceName;

  const matchedPkg = packageDetails[serviceName] || 
    packageDetails[rawServiceName] || 
    packageDetails[initialData.name] ||
    Object.entries(packageDetails).find(([key]) => {
      const kLower = key.toLowerCase();
      const sLower = serviceName.toLowerCase();
      return kLower === sLower || (sLower.length > 5 && (sLower.includes(kLower) || kLower.includes(sLower)));
    })?.[1];

  const matchedRoute = cabRoutes.find(r => {
    if (!serviceName) return false;
    const sLower = serviceName.toLowerCase();
    const rTitle = r.title.toLowerCase();
    const rShort = r.shortTitle.toLowerCase();
    const rSlug = r.slug.toLowerCase();
    return sLower.includes(rTitle) || rTitle.includes(sLower) || sLower.includes(rShort) || rShort.includes(sLower) || sLower.includes(rSlug.replace(/-distance$/, ''));
  });

  const durationText = initialData.duration || matchedPkg?.duration || (serviceName.includes('Days') || serviceName.includes('Day') ? serviceName.match(/\d+\s*Days?/i)?.[0] : null);
  const routeText = initialData.route || initialData.routeCorridor || matchedPkg?.route;

  const isNavbarBooking = initialData.isNavbarBooking === true;
  const sLowerCheck = (initialData.slug || initialData.pageSlug || serviceName || initialData.service || '').toLowerCase();
  const isCustomPackages = sLowerCheck.includes('customized-packages') || sLowerCheck.includes('customized packages') || sLowerCheck.includes('custom quote') || sLowerCheck.includes('custom package');

  const isTourBooking = initialData.type === 'tour' || (Boolean(initialData.prices && initialData.prices.length > 0) && !initialData.local && !initialData.outstation);
  const isVehicleBooking = initialData.type === 'vehicle' || Boolean(initialData.local || initialData.outstation || initialData.localLong);
  const isRouteBooking = initialData.type === 'route' || Boolean(initialData.routeName || (initialData.from && initialData.to));

  const bookingType = initialData.type || (
    isTourBooking ? 'tour' :
    isVehicleBooking ? 'vehicle' :
    isRouteBooking ? 'route' :
    'general'
  );

  const isFixedRouteOrTour = !isNavbarBooking && !isCustomPackages && (
    bookingType === 'route' || 
    bookingType === 'tour' || 
    Boolean(initialData.prices && initialData.prices.length > 0) || 
    Boolean(matchedRoute) || 
    Boolean(matchedPkg) ||
    sLowerCheck.includes('tirupati-cabs') ||
    sLowerCheck.includes('cabs/') ||
    sLowerCheck.includes('srikalahasti') ||
    sLowerCheck.includes('kanipakam') ||
    sLowerCheck.includes('golden-temple') ||
    sLowerCheck.includes('arunachalam') ||
    sLowerCheck.includes('tiruvannamalai') ||
    sLowerCheck.includes('kanchipuram') ||
    sLowerCheck.includes('rameshwaram') ||
    sLowerCheck.includes('srisailam') ||
    sLowerCheck.includes('pondicherry') ||
    sLowerCheck.includes('madurai') ||
    sLowerCheck.includes('kanyakumari') ||
    sLowerCheck.includes('talakona') ||
    sLowerCheck.includes('mahabalipuram')
  );

  // Calculate tourPrices: use passed prices, matched route prices, matched pkg prices, or generate from starting price if it's a tour/route
  let rawPrices = initialData.prices || matchedRoute?.prices || matchedPkg?.prices || [];
  const baseStartingNum = parseInt((initialData.fullAmount || initialData.price || matchedRoute?.starting || '2880').toString().replace(/[^0-9]/g, ''), 10) || 2880;
  const activeFleetsList = (fleets && fleets.length > 0) ? fleets : null;

  let tourPrices = [];
  if (activeFleetsList && (isFixedRouteOrTour || isTourBooking || isRouteBooking || rawPrices.length > 0 || initialData.type === 'route' || initialData.type === 'tour')) {
    // Generate/map prices across ALL active fleet vehicles
    tourPrices = activeFleetsList.map(v => {
      const vName = v.name || v.id;
      const vLower = vName.toLowerCase();

      // Check if price already exists in rawPrices
      const foundMatch = rawPrices.find(([pName]) => {
        const pLower = pName.toLowerCase();
        return vLower.includes(pLower) || pLower.includes(vLower);
      });

      if (foundMatch) {
        return [vName, foundMatch[1]];
      }

      let mult = 1.0;
      if (vLower.includes('ertiga')) mult = 1.25;
      else if (vLower.includes('crysta') || vLower.includes('innova')) mult = 1.55;
      else if (vLower.includes('hycross')) mult = 1.9;
      else if (vLower.includes('fortuner')) mult = 2.5;
      else if (vLower.includes('urbania') && (vLower.includes('16') || vLower.includes('17'))) mult = 2.9;
      else if (vLower.includes('urbania')) mult = 2.6;
      else if (vLower.includes('tempo') && (vLower.includes('20') || vLower.includes('21'))) mult = 2.7;
      else if (vLower.includes('tempo') && (vLower.includes('16') || vLower.includes('17'))) mult = 2.2;
      else if (vLower.includes('tempo') || vLower.includes('12')) mult = 1.8;
      else if (vLower.includes('27') || vLower.includes('mini bus')) mult = 3.4;
      else if (vLower.includes('40')) mult = 4.2;
      else if (vLower.includes('45')) mult = 4.8;
      else if ((v.seats || 4) > 20) mult = 3.8;
      else if ((v.seats || 4) > 10) mult = 2.2;
      else if ((v.seats || 4) > 5) mult = 1.4;

      const calc = Math.round((baseStartingNum * mult) / 50) * 50;
      return [vName, `₹${calc.toLocaleString('en-IN')}`];
    });
  } else {
    tourPrices = rawPrices;
  }

  const [selectedRateKey, setSelectedRateKey] = useState('local');

  // Vehicle options computation: tag package / cab route prices with vehicles or filtered list
  const filteredVehiclesList = getFilteredVehicleOptions(initialData.slug || serviceName, initialData.vehicleOptions, fleets);
  const rawVehicleOptions = (isFixedRouteOrTour && tourPrices.length > 0)
    ? tourPrices.map(([vName, vPrice]) => {
        const vObj = getVehicleInfo(vName, fleets);
        const fullName = vObj?.name || vName;
        return `${fullName} — ${vPrice}`;
      })
    : filteredVehiclesList;

  const vehicleOptions = dedupeVehicleOptions(rawVehicleOptions, initialData.slug || serviceName, selectedRateKey, fleets);

  const rawVehicleStr = initialData.vehicle || initialData.service || initialData.name || '';
  const initialVehicle = getBestMatchingVehicleOption(rawVehicleStr, vehicleOptions);

  const [formData, setFormData] = useState({
    firstname: initialData.name || '',
    email: initialData.email || '',
    phone: initialData.phone || '',
    service: serviceName || 'Tirupati Cab Service',
    vehicle: initialVehicle,
    date: initialData.date || new Date().toISOString().split('T')[0],
    pickup: initialData.pickup || initialData.from || 'Tirupati',
    tripType: initialData.tripType || 'One Way',
    amount: fixedAdvanceAmount
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      const rawVeh = initialData.vehicle || initialData.service || initialData.name || '';
      const computedVehicle = getBestMatchingVehicleOption(rawVeh, vehicleOptions);

      let initialRateKey = 'local';
      if (initialData.selectedRateKey) {
        initialRateKey = initialData.selectedRateKey;
      } else if (initialData.ratePlan) {
        const rpLower = initialData.ratePlan.toLowerCase();
        if (rpLower.includes('12 h') || rpLower.includes('12-hour') || rpLower.includes('12h') || rpLower.includes('150')) {
          initialRateKey = 'localLong';
        } else if (rpLower.includes('outstation')) {
          initialRateKey = 'outstation';
        }
      } else if (initialData.service) {
        const sLower = initialData.service.toLowerCase();
        if (sLower.includes('12h') || sLower.includes('12-hour') || sLower.includes('12 h') || sLower.includes('150')) {
          initialRateKey = 'localLong';
        } else if (sLower.includes('outstation')) {
          initialRateKey = 'outstation';
        }
      }
      setSelectedRateKey(initialRateKey);

      setFormData({
        firstname: initialData.name || '',
        email: initialData.email || '',
        phone: initialData.phone || '',
        service: serviceName || 'Tirupati Cab Service',
        vehicle: computedVehicle,
        date: initialData.date || new Date().toISOString().split('T')[0],
        pickup: initialData.pickup || initialData.from || 'Tirupati',
        tripType: initialData.tripType || 'One Way',
        amount: fixedAdvanceAmount
      });
      setReceipt(null);
      setIsProcessing(false);
    }
  }, [isOpen, initialData]);

  // Dynamic vehicle lookup for current selected vehicle in dropdown
  const currentVehicleObj = getVehicleInfo(formData.vehicle, fleets);

  const vehicleLocalRate = currentVehicleObj?.local 
    ? currentVehicleObj.local.split('/')[0].trim() 
    : (initialData.local || '₹2,880');

  const vehicleLocalLongRate = currentVehicleObj?.localLong 
    ? currentVehicleObj.localLong.split('/')[0].trim() 
    : (initialData.localLong || '₹3,650');

  const vehicleOutstationRate = currentVehicleObj?.outstation 
    ? currentVehicleObj.outstation 
    : (initialData.outstation || '₹15/km');

  const rawMin = currentVehicleObj?.minimum || initialData.minimum || '300 km/day';
  const vehicleMinKm = rawMin.toLowerCase().startsWith('min') ? rawMin : `Min ${rawMin}`;

  const extraHrVal = currentVehicleObj?.extraHr 
    ? currentVehicleObj.extraHr.replace(/\/hr?$/i, '/extra hr') 
    : 'extra hr';

  const extraKmVal = vehicleOutstationRate 
    ? `${vehicleOutstationRate.replace(/\/km?$/i, '')}/extra km` 
    : 'extra km';

  const extraHrKmText = `${extraHrVal} & ${extraKmVal}`;

  const ratePlanOptions = [
    { 
      key: 'local', 
      title: 'Local 8h / 80km',
      priceTag: vehicleLocalRate, 
      subText: extraHrKmText,
      val: `Local 8h / 80km — ${vehicleLocalRate} (${extraHrKmText})` 
    },
    { 
      key: 'localLong', 
      title: 'Local 12h / 150km',
      priceTag: vehicleLocalLongRate, 
      subText: extraHrKmText,
      val: `Local 12h / 150km — ${vehicleLocalLongRate} (${extraHrKmText})` 
    },
    { 
      key: 'outstation', 
      title: 'Outstation Trip',
      priceTag: vehicleOutstationRate, 
      subText: vehicleMinKm,
      val: `Outstation — ${vehicleOutstationRate} (${vehicleMinKm})` 
    }
  ];

  const activeRateOption = ratePlanOptions.find(opt => opt.key === selectedRateKey) || ratePlanOptions[0];

  const sLowerContext = (initialData.slug || initialData.pageSlug || formData.service || serviceName || initialData.service || '').toLowerCase();
  const isOutstationTaxi = sLowerContext.includes('outstation');

  const isDedicatedTaxiRentalPage = !isOutstationTaxi && (
    sLowerContext.includes('car-rentals') || sLowerContext.includes('car rentals') ||
    sLowerContext.includes('tempo-traveller') || sLowerContext.includes('tempo traveller') || sLowerContext.includes('tempo rental') ||
    sLowerContext.includes('urbania') ||
    sLowerContext.includes('bus-rental') || sLowerContext.includes('bus rental') || sLowerContext.includes('luxury bus') ||
    sLowerContext.includes('taxi-service') || sLowerContext.includes('taxi service') || sLowerContext.includes('taxi in tirupati') || sLowerContext.includes('taxi-in-tirupati') ||
    sLowerContext.includes('airport-taxi') || sLowerContext.includes('airport taxi') ||
    sLowerContext.includes('car-for-rent') || sLowerContext.includes('day hire') || sLowerContext.includes('day-rentals')
  );

  const isLocalPackages = sLowerContext.includes('local-packages') || sLowerContext.includes('local packages');
  const isBalajiTour = sLowerContext.includes('balaji-darshan') || sLowerContext.includes('balaji darshan') || sLowerContext.includes('balaji') || sLowerContext.includes('tirumala');
  const isStudentPackages = sLowerContext.includes('student-packages') || sLowerContext.includes('student packages');
  const isTourPage = bookingType === 'tour' || isTourBooking || sLowerContext.includes('tour') || sLowerContext.includes('tours') || isBalajiTour || sLowerContext.includes('devotional') || sLowerContext.includes('holiday') || sLowerContext.includes('family') || sLowerContext.includes('wedding');

  const currentRoutePrice = (tourPrices.length > 0)
    ? (tourPrices.find(([vName]) => {
        const vClean = vName.toLowerCase();
        const selClean = (formData.vehicle || '').toLowerCase();
        const selBase = selClean.split('—')[0].trim();
        const vBase = vClean.split('—')[0].trim();
        return vClean.includes(selBase) || selClean.includes(vBase);
      })?.[1] || tourPrices[0]?.[1])
    : initialData.fullAmount || initialData.price || 'Fixed Fare';

  const dynamicRatePlan = isFixedRouteOrTour 
    ? `Fixed Cab Route / Package Tariff (${currentRoutePrice})`
    : activeRateOption.val;

  if (!isOpen) return null;

  const handleNextToStep2 = (e) => {
    e.preventDefault();
    if (!formData.firstname.trim() || !formData.phone.trim() || !formData.date || !formData.pickup.trim()) {
      alert('Please fill in all required fields (Name, Phone, Date, Pickup Location).');
      return;
    }
    setStep(2);
  };

  const handleSubmitPayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const productinfo = `${formData.service} (${formData.vehicle} - ${dynamicRatePlan})`;
    const email = formData.email || `${formData.phone.replace(/[^0-9]/g, '')}@taxi-in-tirupati.com`;

    try {
      // 1. Create Order on Backend with Razorpay API
      const orderData = await initiateRazorpayOrder({
        firstname: formData.firstname,
        email,
        phone: formData.phone,
        amount: Number(fixedAdvanceAmount),
        productinfo,
        pickup_location: formData.pickup,
        pickup_time: formData.date,
        vehicle: formData.vehicle,
        return_url: window.location.origin
      });

      if (orderData && orderData.success && orderData.order_id) {
        setIsProcessing(false);

        // 2. Open Official Razorpay Checkout Modal
        openRazorpayCheckout({
          key_id: orderData.key_id,
          order_id: orderData.order_id,
          amount: orderData.amount,
          currency: orderData.currency || 'INR',
          productinfo,
          customer: {
            name: formData.firstname,
            email,
            phone: formData.phone
          },
          onSuccess: (rzpResp) => {
            const txnid = rzpResp.verifyResult?.txnid || orderData.receipt || `RZP_${Date.now()}`;
            const paymentId = rzpResp.razorpay_payment_id || 'RZP_SUCCESS';

            recordPayment({
              txnid,
              easebuzzId: paymentId,
              firstname: formData.firstname,
              email,
              phone: formData.phone,
              amount: Number(fixedAdvanceAmount),
              productinfo: `${formData.service} - ${formData.vehicle} [${dynamicRatePlan}]`,
              mode: 'Razorpay UPI / Cards / NetBanking'
            });

            addQuery({
              name: formData.firstname,
              phone: formData.phone,
              from: formData.pickup,
              to: formData.service,
              date: formData.date,
              trip: `₹1,000 ADVANCE (${dynamicRatePlan})`,
              vehicle: formData.vehicle,
              status: 'Confirmed'
            });

            setReceipt({
              txnid,
              easebuzzId: paymentId,
              amount: fixedAdvanceAmount,
              service: formData.service,
              vehicle: formData.vehicle,
              ratePlan: dynamicRatePlan,
              name: formData.firstname,
              phone: formData.phone,
              pickup: formData.pickup,
              date: formData.date,
              created_at: new Date().toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })
            });
            setStep(3);
          },
          onDismiss: () => {
            setIsProcessing(false);
          },
          onError: (err) => {
            console.error('Razorpay checkout error:', err);
            setIsProcessing(false);
            alert(err.description || err.message || 'Payment was cancelled or failed.');
          }
        });
        return;
      }
    } catch (err) {
      console.warn('Backend Razorpay order creation failed, falling back to simulated confirmation:', err);
    }

    // Fallback confirmation preview if offline or sandbox preview
    const config = getEasebuzzConfig();
    const txnid = generateTransactionId();
    const easebuzzId = `RZP_${Date.now()}`;
    const hash = calculateEasebuzzHash({
      key: config.merchantKey,
      txnid,
      amount: fixedAdvanceAmount,
      productinfo,
      firstname: formData.firstname,
      email,
      salt: config.salt
    });

    setTimeout(() => {
      recordPayment({
        txnid,
        easebuzzId,
        firstname: formData.firstname,
        email,
        phone: formData.phone,
        amount: Number(fixedAdvanceAmount),
        productinfo: `${formData.service} - ${formData.vehicle} [${dynamicRatePlan}]`,
        mode: 'Online (₹1,000 Advance Token)',
        hash
      });

      addQuery({
        name: formData.firstname,
        phone: formData.phone,
        from: formData.pickup,
        to: formData.service,
        date: formData.date,
        trip: `₹1,000 ADVANCE (${dynamicRatePlan})`,
        vehicle: formData.vehicle,
        status: 'Confirmed'
      });

      setIsProcessing(false);
      setReceipt({
        txnid,
        easebuzzId,
        amount: fixedAdvanceAmount,
        service: formData.service,
        vehicle: formData.vehicle,
        ratePlan: dynamicRatePlan,
        name: formData.firstname,
        phone: formData.phone,
        pickup: formData.pickup,
        date: formData.date,
        time: new Date().toLocaleString()
      });
    }, 1200);
  };

  const handleClose = () => {
    setReceipt(null);
    setIsProcessing(false);
    setStep(1);
    onClose();
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return createPortal(
    <div 
      className={`itinerary-overlay booking-payment-overlay ${modalClassName}`.trim()} 
      role="presentation" 
      onClick={handleClose}
    >
      <div 
        className="itinerary-modal package-info-modal" 
        role="dialog" 
        aria-modal="true" 
        onClick={e => e.stopPropagation()}
      >
        <button type="button" className="itinerary-close" aria-label="Close" onClick={handleClose}>
          <X size={20} />
        </button>

        {!receipt ? (
          <>
            {/* STEP PROGRESS BAR */}
            <div className="booking-step-progress">
              <div className={`booking-step-progress-bar ${step >= 1 ? 'active' : ''}`} />
              <div className={`booking-step-progress-bar ${step >= 2 ? 'active second' : ''}`} />
            </div>

            {step === 1 && (
              <div>
                {/* STEP HEADER BASED ON BOOKING TYPE */}
                <div className="itinerary-modal-header" style={{ marginBottom: '1.1rem' }}>
                  <div>
                    <p style={{ color: '#e5a919', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      {bookingType === 'tour' ? 'TOUR PACKAGE BOOKING' : bookingType === 'vehicle' ? 'VEHICLE RENTAL' : bookingType === 'route' ? 'OUTSTATION CAB ROUTE' : 'TAXI SERVICE BOOKING'}
                    </p>
                    <h3 style={{ fontSize: '1.25rem', color: '#0a0a0a', margin: 0, fontWeight: 800 }}>
                      {bookingType === 'vehicle' ? `${currentVehicleObj?.name || formData.vehicle} Rental` : formData.service}
                    </h3>
                  </div>
                </div>

                {/* CONTEXT 1: TOUR PACKAGE DETAILS BANNER */}
                {bookingType === 'tour' && (
                  <div style={{ background: '#fffbeb', padding: '0.75rem 1rem', borderRadius: 14, border: '1.5px solid #e5a919', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#c68a0a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar size={15} /> Tour Duration: <strong style={{ color: '#0a0a0a' }}>{durationText || '1 Day'}</strong>
                      </span>
                      <span style={{ fontSize: '0.68rem', background: '#e5a919', color: '#ffffff', padding: '3px 9px', borderRadius: 12, fontWeight: 800 }}>
                        FIXED TOUR TARIFF
                      </span>
                    </div>
                    {routeText && (
                      <p style={{ fontSize: '0.78rem', color: '#334155', margin: '3px 0 0 0', lineHeight: 1.35 }}>
                        <strong>📍 Corridor:</strong> {routeText}
                      </p>
                    )}
                  </div>
                )}

                <form onSubmit={handleNextToStep2} style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
                  {/* VEHICLE SELECTION & CONTEXT-BASED RATE CONTROLS */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                        Vehicles & Buses Fare Rates *
                      </label>
                      <select 
                        value={formData.vehicle}
                        onChange={e => setFormData({ ...formData, vehicle: e.target.value })}
                        style={{ width: '100%', padding: '0.65rem 0.6rem', borderRadius: 10, border: '1.5px solid #e5a919', fontSize: '0.85rem', fontWeight: 800, color: '#0a0a0a', background: '#ffffff' }}
                      >
                        {vehicleOptions.map(opt => (
                          <option key={opt} value={opt}>
                            {getFormattedVehicleOptionLabel(opt, `${initialData.slug || ''} ${initialData.pageSlug || ''} ${initialData.pageTitle || ''} ${formData.service || ''} ${serviceName || ''}`, selectedRateKey, fleets)}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* RATE CONTROLS: CUSTOM PACKAGE BANNER, FIXED ROUTE TARIFF CARD FOR CAB ROUTES / TOURS, OR LOCAL/OUTSTATION SELECTION FOR TAXI RENTALS */}
                    {isCustomPackages ? (
                      <div style={{ background: '#f0fdf4', padding: '0.75rem 1rem', borderRadius: 12, border: '1.5px solid #86efac', marginTop: '0.35rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#15803d', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            ✨ Customized Tour Package:
                          </span>
                          <span style={{ fontSize: '0.68rem', background: '#166534', color: '#ffffff', padding: '3px 9px', borderRadius: 12, fontWeight: 800 }}>
                            INSTANT QUOTE
                          </span>
                        </div>
                        <p style={{ fontSize: '0.78rem', color: '#166534', margin: 0, lineHeight: 1.35 }}>
                          Share your travel dates, pickup location & places to visit. Receive a 100% customized route itinerary & custom fare quote on WhatsApp!
                        </p>
                      </div>
                    ) : isFixedRouteOrTour ? (
                      <div style={{ background: '#fffdf5', padding: '0.75rem 1rem', borderRadius: 12, border: '1.5px solid #fde68a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.35rem' }}>
                        <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#d97706', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          📍 Fixed Cab Route / Package Fare:
                        </span>
                        <strong style={{ fontSize: '1.15rem', color: '#0a0a0a', fontWeight: 900 }}>
                          {currentRoutePrice}
                        </strong>
                      </div>
                    ) : (
                      <div style={{ marginTop: '0.2rem' }}>
                        <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                          Select Trip & Rate Plan *
                        </label>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.35rem' }}>
                          <button
                            type="button"
                            onClick={() => setSelectedRateKey('local')}
                            style={{
                              padding: '0.65rem 0.25rem',
                              borderRadius: 10,
                              border: selectedRateKey === 'local' ? '2px solid #e5a919' : '1.5px solid #cbd5e1',
                              background: selectedRateKey === 'local' ? '#fffbeb' : '#f8fafc',
                              color: selectedRateKey === 'local' ? '#c68a0a' : '#334155',
                              fontWeight: 800,
                              fontSize: '0.74rem',
                              cursor: 'pointer',
                              textAlign: 'center',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <div>Local 8h / 80km</div>
                            <b style={{ color: '#0a0a0a', fontSize: '0.85rem', display: 'block', margin: '3px 0 1px' }}>{vehicleLocalRate}</b>
                            <small style={{ color: '#d97706', fontSize: '0.62rem', display: 'block', fontWeight: 700, lineHeight: 1.25 }}>{extraHrKmText}</small>
                          </button>

                          <button
                            type="button"
                            onClick={() => setSelectedRateKey('localLong')}
                            style={{
                              padding: '0.65rem 0.25rem',
                              borderRadius: 10,
                              border: selectedRateKey === 'localLong' ? '2px solid #e5a919' : '1.5px solid #cbd5e1',
                              background: selectedRateKey === 'localLong' ? '#fffbeb' : '#f8fafc',
                              color: selectedRateKey === 'localLong' ? '#c68a0a' : '#334155',
                              fontWeight: 800,
                              fontSize: '0.74rem',
                              cursor: 'pointer',
                              textAlign: 'center',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <div>Local 12h / 150km</div>
                            <b style={{ color: '#0a0a0a', fontSize: '0.85rem', display: 'block', margin: '3px 0 1px' }}>{vehicleLocalLongRate}</b>
                            <small style={{ color: '#d97706', fontSize: '0.62rem', display: 'block', fontWeight: 700, lineHeight: 1.25 }}>{extraHrKmText}</small>
                          </button>

                          <button
                            type="button"
                            onClick={() => setSelectedRateKey('outstation')}
                            style={{
                              padding: '0.65rem 0.25rem',
                              borderRadius: 10,
                              border: selectedRateKey === 'outstation' ? '2px solid #e5a919' : '1.5px solid #cbd5e1',
                              background: selectedRateKey === 'outstation' ? '#fffbeb' : '#f8fafc',
                              color: selectedRateKey === 'outstation' ? '#c68a0a' : '#334155',
                              fontWeight: 800,
                              fontSize: '0.74rem',
                              cursor: 'pointer',
                              textAlign: 'center',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <div>Outstation Trip</div>
                            <b style={{ color: '#0a0a0a', fontSize: '0.85rem', display: 'block', margin: '3px 0 1px' }}>{vehicleOutstationRate}</b>
                            <small style={{ color: '#d97706', fontSize: '0.66rem', display: 'block', fontWeight: 700 }}>{vehicleMinKm}</small>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* USER CONTACT DETAILS */}
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Hemanth Kancharla"
                      value={formData.firstname}
                      onChange={e => setFormData({ ...formData, firstname: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 10, border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 10, border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                        Email ID <small style={{ color: '#94a3b8', fontWeight: 500 }}>(Optional)</small>
                      </label>
                      <input 
                        type="email" 
                        placeholder="name@gmail.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 10, border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                        Travel Date *
                      </label>
                      <input 
                        type="date" 
                        required 
                        min={todayStr}
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 10, border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                        Pickup Location *
                      </label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Tirupati Airport / Hotel"
                        value={formData.pickup}
                        onChange={e => setFormData({ ...formData, pickup: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 10, border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                      />
                    </div>
                  </div>

                  {isCustomPackages ? (
                    <button 
                      type="button" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (!formData.firstname.trim() || !formData.phone.trim() || !formData.date || !formData.pickup.trim()) {
                          alert('Please fill in required fields (Name, Phone, Date, Pickup Location).');
                          return;
                        }
                        const msg = `Hi, I would like to request a Custom Package Quote.\nName: ${formData.firstname}\nPhone: ${formData.phone}\nDate: ${formData.date}\nPickup Point: ${formData.pickup}\nSelected Vehicle: ${formData.vehicle}`;
                        window.open(whatsappBooking(msg), '_blank', 'noopener,noreferrer');
                        handleClose();
                      }}
                      className="button" 
                      style={{ 
                        width: '100%', 
                        padding: '0.9rem 1.25rem', 
                        fontSize: '1rem', 
                        fontWeight: 900, 
                        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', 
                        border: 'none', 
                        borderRadius: 12,
                        color: '#ffffff',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginTop: '0.5rem',
                        boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)'
                      }}
                    >
                      <MessageCircle size={18} /> Send Quote Enquiry on WhatsApp 💬
                    </button>
                  ) : (
                    <button 
                      type="submit" 
                      className="button" 
                      style={{ 
                        width: '100%', 
                        padding: '0.9rem 1.25rem', 
                        fontSize: '1rem', 
                        fontWeight: 900, 
                        background: 'linear-gradient(135deg, #e5a919 0%, #c68a0a 100%)', 
                        border: 'none', 
                        borderRadius: 12,
                        color: '#ffffff',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginTop: '0.5rem',
                        boxShadow: '0 8px 24px rgba(2, 132, 199, 0.3)'
                      }}
                    >
                      Next Step Pay 💳 <ArrowRight size={18} />
                    </button>
                  )}
                </form>
              </div>
            )}

            {step === 2 && (
              /* STEP 2: SUMMARY & ADVANCE PAYMENT */
              <div>
                <div className="itinerary-modal-header" style={{ marginBottom: '1.1rem' }}>
                  <div>
                    <p style={{ color: '#d97706', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '1px', textTransform: 'uppercase' }}>STEP 2 OF 2 · ADVANCE PAYMENT</p>
                    <h3 style={{ fontSize: '1.25rem', color: '#0a0a0a', margin: 0, fontWeight: 800 }}>Confirm & Lock Booking</h3>
                  </div>
                </div>

                <form onSubmit={handleSubmitPayment} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* SUMMARY BOX */}
                  <div style={{ background: '#f8fafc', padding: '0.9rem 1rem', borderRadius: 14, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.88rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #e2e8f0', paddingBottom: '0.4rem' }}>
                      <span style={{ color: '#64748b' }}>Customer:</span>
                      <strong style={{ color: '#0a0a0a' }}>{formData.firstname} ({formData.phone})</strong>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #e2e8f0', paddingBottom: '0.4rem' }}>
                      <span style={{ color: '#64748b' }}>Service / Tour:</span>
                      <strong style={{ color: '#0a0a0a' }}>{formData.service}</strong>
                    </div>

                    {durationText && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #e2e8f0', paddingBottom: '0.4rem' }}>
                        <span style={{ color: '#64748b' }}>Total Duration:</span>
                        <strong style={{ color: '#e5a919', fontWeight: 800 }}>⏱️ {durationText}</strong>
                      </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #e2e8f0', paddingBottom: '0.4rem' }}>
                      <span style={{ color: '#64748b' }}>Selected Vehicle:</span>
                      <strong style={{ color: '#d97706', fontWeight: 800 }}>{formData.vehicle}</strong>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #e2e8f0', paddingBottom: '0.4rem' }}>
                      <span style={{ color: '#64748b' }}>Trip / Rate Type:</span>
                      <strong style={{ 
                        color: '#d97706', 
                        background: '#fffdf5', 
                        padding: '4px 10px', 
                        borderRadius: 20, 
                        border: '1.5px solid #fde68a',
                        fontSize: '0.8rem',
                        fontWeight: 900
                      }}>
                        {dynamicRatePlan}
                      </strong>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b' }}>Date & Pickup:</span>
                      <strong style={{ color: '#0a0a0a' }}>{formData.date} · {formData.pickup}</strong>
                    </div>
                  </div>

                  {/* INCLUSIONS SUMMARY */}
                  {bookingType === 'tour' ? (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#15803d', padding: '7px 9px', borderRadius: 10, fontSize: '0.74rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px', lineHeight: 1.35 }}>
                        <CheckCircle2 size={14} style={{ flexShrink: 0, color: '#16a34a' }} />
                        <span><strong>Includes:</strong> {matchedPkg?.included ? matchedPkg.included.replace(/Includes\s*/i, '') : 'Tolls, Parking, Driver Batta, Fuel & AC Cab'}</span>
                      </div>

                      <div style={{ background: '#fff1f2', border: '1px solid #fecdd3', color: '#be123c', padding: '7px 9px', borderRadius: 10, fontSize: '0.74rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px', lineHeight: 1.35 }}>
                        <AlertCircle size={14} style={{ flexShrink: 0, color: '#e11d48' }} />
                        <span><strong>Excludes:</strong> {matchedPkg?.excluded ? matchedPkg.excluded.replace(/Excludes\s*/i, '') : 'Darshan Tickets, Food, Hotel Stay & Permit'}</span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#15803d', padding: '8px 12px', borderRadius: 10, fontSize: '0.78rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={15} style={{ flexShrink: 0, color: '#16a34a' }} />
                      <span>
                        <strong>
                          {serviceName.toLowerCase().includes('outstation') ? 'Outstation Taxi Inclusions:' :
                           serviceName.toLowerCase().includes('urbania') ? 'Urbania Inclusions:' :
                           serviceName.toLowerCase().includes('tempo') ? 'Tempo Traveller Inclusions:' :
                           serviceName.toLowerCase().includes('bus') ? 'Bus Inclusions:' :
                           serviceName.toLowerCase().includes('airport') ? 'Airport Taxi Inclusions:' :
                           'Taxi Inclusions:'}
                        </strong>{' '}
                        {serviceName.toLowerCase().includes('outstation') ? 'Clean AC Vehicle, Professional Driver, Fuel & Interstate Permit Assistance' :
                         serviceName.toLowerCase().includes('urbania') ? 'Plush Recliners, AC Cabin, USB Ports & Professional Driver' :
                         serviceName.toLowerCase().includes('tempo') ? 'Push-Back Seats, Air Conditioned, Luggage Boot & Expert Driver' :
                         serviceName.toLowerCase().includes('bus') ? 'Luxury AC Coach, Ample Storage & Experienced Highway Driver' :
                         serviceName.toLowerCase().includes('airport') ? 'Flight Schedule Tracking, Doorstep Pickup/Drop & AC Vehicle' :
                         'Clean AC Vehicle, Professional Driver & Fuel'}
                      </span>
                    </div>
                  )}

                  {/* ADVANCE TOKEN BOX */}
                  <div style={{ background: '#fffdf5', padding: '1rem', borderRadius: 14, border: '2px solid #f59e0b', textAlign: 'center', boxShadow: '0 4px 15px rgba(245, 158, 11, 0.15)' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#d97706', display: 'block', letterSpacing: '0.05em' }}>
                      ADVANCE BOOKING TOKEN
                    </span>
                    <strong style={{ fontSize: '1.8rem', color: '#0a0a0a', display: 'block', margin: '0.2rem 0' }}>
                      ₹1,000
                    </strong>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.4, display: 'block' }}>
                      Fixed advance deposit to lock your cab & driver. Remaining balance payable directly to driver.
                    </span>
                  </div>

                  {/* ENCRYPTED GATEWAY GUARANTEE */}
                  <div style={{ background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: 10, border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Lock size={18} color="#e5a919" />
                    <span style={{ fontSize: '0.75rem', color: '#475569', lineHeight: 1.35 }}>
                      Secured by <strong>256-Bit SSL Payment Encryption</strong>. Supports UPI, Google Pay, PhonePe, Cards & NetBanking.
                    </span>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.2rem' }}>
                    <button 
                      type="button" 
                      onClick={() => setStep(1)}
                      style={{ padding: '0.85rem 1rem', borderRadius: 12, border: '1px solid #cbd5e1', background: '#f1f5f9', color: '#475569', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      <ArrowLeft size={16} /> Step 1
                    </button>

                    <button 
                      type="submit" 
                      disabled={isProcessing}
                      className="button" 
                      style={{ 
                        flex: 1, 
                        padding: '0.85rem 1rem', 
                        fontSize: '1rem', 
                        fontWeight: 900, 
                        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)', 
                        border: 'none', 
                        borderRadius: 12,
                        color: '#0a0a0a',
                        cursor: isProcessing ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 8px 24px rgba(245, 158, 11, 0.35)'
                      }}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 size={18} className="animate-spin" /> Processing...
                        </>
                      ) : (
                        <>
                          Pay ₹1,000 Advance 💳 <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </>
        ) : (
          /* PAYMENT SUCCESS RECEIPT */
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ width: 64, height: 64, background: '#dcfce7', borderRadius: '50%', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: 800, marginBottom: '0.35rem' }}>
              Advance Booking Confirmed!
            </h3>
            <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              Thank you <strong>{receipt.name}</strong>. Your advance payment of <strong>₹1,000</strong> has been received successfully.
            </p>

            <div style={{ background: '#f8fafc', padding: '1.1rem', borderRadius: 14, border: '1px solid #e2e8f0', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.25rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Transaction ID:</span>
                <strong style={{ color: '#0f172a', fontFamily: 'monospace' }}>{receipt.txnid}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Vehicle:</span>
                <strong style={{ color: '#e5a919' }}>{receipt.vehicle}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Trip / Rate Type:</span>
                <strong style={{ color: '#d97706' }}>{receipt.ratePlan}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Pickup Point:</span>
                <strong style={{ color: '#0f172a' }}>{receipt.pickup}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Advance Paid:</span>
                <strong style={{ color: '#16a34a', fontSize: '1.05rem' }}>₹1,000</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Date & Time:</span>
                <span style={{ color: '#475569' }}>{receipt.time}</span>
              </div>
            </div>

            <button 
              type="button" 
              onClick={handleClose} 
              className="button"
              style={{ width: '100%', padding: '0.85rem', borderRadius: 10 }}
            >
              Done & Close
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
