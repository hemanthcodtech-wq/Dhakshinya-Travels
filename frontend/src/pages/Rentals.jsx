import { Link } from 'react-router-dom';
import { Check, Users, Luggage } from 'lucide-react';
import Page from './PageTemplate';
import { images, vehicles as defaultVehicles, whatsapp } from '../data/siteData';
import { useData } from '../context/DataContext';

export default function Rentals() {
  const { fleets } = useData();

  const displayVehicles = (fleets && fleets.length > 0)
    ? fleets.map(f => [
        f.name,
        f.seats ? `${f.seats} Seats` : '4+1 Seats',
        f.bags ? `${f.bags} Bags` : '2 Bags',
        f.image,
        f.outstation || f.local || '₹15/km'
      ])
    : defaultVehicles;

  return (
    <Page
      eyebrow="TIRUPATI VEHICLE RENTALS"
      title="Choose a vehicle. See the rate. Book instantly."
      text="Transparent day-rental rates for local Tirupati travel, airport transfers and temple tours."
      image={images.hero}
    >
      <section className="content">
        <p className="rate-note">
          Rates include driver allowance, fuel for the listed local package, and clean AC vehicle. Toll, parking, interstate permit and extra kilometres are billed separately.
        </p>
        <div className="tour-grid vehicle-grid">
          {displayVehicles.map(v => (
            <article key={v[0]}>
              <img src={v[3]} alt={v[0]} />
              <div>
                <small>AC · Local / Outstation</small>
                <h3>{v[0]}</h3>
                <p><Users size={14} /> {v[1]} &nbsp; <Luggage size={14} /> {v[2]}</p>
                <strong className="rate">From {v[4]}</strong>
                <ul>
                  <li><Check />Professional driver</li>
                  <li><Check />Clean, sanitised vehicle</li>
                  <li><Check />24×7 booking support</li>
                </ul>
                <a
                  className="button"
                  href={`${whatsapp}?text=${encodeURIComponent(`Hello, I want to rent ${v[0]} starting at ${v[4]}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="rental-more">Need a customised itinerary? <Link to="/contact">Request a quote</Link>.</p>
      </section>
    </Page>
  );
}
