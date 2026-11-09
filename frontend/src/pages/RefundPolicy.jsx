import React from 'react';
import { ShieldCheck, AlertTriangle, Clock, RefreshCw, PhoneCall, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { phone, whatsapp, email } from '../data/siteData';
import './LegalPage.css';

export default function RefundPolicy() {
  return (
    <div className="legal-page-outer">
      <div className="legal-page">
      <SEO
        title="Refund & Cancellation Policy – Dhakshinya Tours & Travels"
        description="Learn about our transparent refund and cancellation guidelines for cab and tour package bookings with Dhakshinya Tours & Travels."
        canonical="https://www.dhakshinyatourandtravels.in/refund-and-cancellation-policy"
      />
      <div className="legal-hero">
        <span className="legal-badge">OFFICIAL REFUND POLICY</span>
        <h1>Refund & Cancellation Policy – <span>Dhakshinya Tours & Travels</span></h1>
        <p>
          Clear, fair, and transparent guidelines regarding cancellations, vehicle rental refunds, driver dispatch timelines, and booking modifications with Dhakshinya Tours & Travels.
        </p>
      </div>

      <div className="legal-content-grid">
        <aside className="legal-toc">
          <h3>Policy Sections</h3>
          <ul>
            <li><a href="#cancellation-24h">Cancellation 24 Hours Prior</a></li>
            <li><a href="#late-cancellation">Late Cancellation Policy</a></li>
            <li><a href="#driver-assignment">Driver & Vehicle Dispatch</a></li>
            <li><a href="#one-day-hours">Service Hours & Bata Rules</a></li>
            <li><a href="#contact-support">Contact Support Desk</a></li>
          </ul>
        </aside>

        <main className="legal-sections">
          <section id="cancellation-24h" className="legal-card">
            <h2><RefreshCw /> 1. Cancellation 24 Hours Prior to Trip</h2>
            <p>
              We understand that travel plans and pilgrimage dates can change. Should you opt to cancel your package or cab booking at least <strong>24 hours before the scheduled pickup time</strong>:
            </p>
            <div className="legal-alert legal-alert-info">
              <strong>CAR RENTAL REIMBURSEMENT:</strong> The vehicle rental fee will be reimbursed in accordance with the amount paid by the customer. Please note that special temple darshan tickets or pre-purchased pass costs cannot be refunded.
            </div>
            <ul>
              <li><CheckCircle size={16} /> Full car rental fee reimbursement when cancelled &gt;24 hours in advance.</li>
              <li><XCircle size={16} /> Pre-booked temple ticket costs are non-refundable as per TTD regulations.</li>
            </ul>
          </section>

          <section id="late-cancellation" className="legal-card">
            <h2><AlertTriangle /> 2. Late Cancellation Policy (After Driver & Car Details Sent)</h2>
            <p>
              To guarantee seamless pickups, our team assigns dedicated vehicles and professional drivers well in advance.
            </p>
            <div className="legal-alert">
              <strong>IMPORTANT:</strong> If a cancellation occurs after the driver and car details have been dispatched (sent by 6:00 PM the evening prior to your trip), or if cancellation notice is provided very late, regrettably <strong>no refund will be issued</strong>.
            </div>
            <p>
              This is because the assigned driver and vehicle have already been reserved exclusively for your travel itinerary and cannot be reassigned at short notice.
            </p>
          </section>

          <section id="driver-assignment" className="legal-card">
            <h2><Clock /> 3. Driver & Car Assignment Timelines</h2>
            <p>
              To ensure a smooth and worry-free journey:
            </p>
            <ul>
              <li>Vehicle registration number, driver name, and driver phone number are furnished to you by <strong>6:00 PM</strong> on the day prior to your scheduled trip.</li>
              <li>Details are sent via WhatsApp, SMS, or Email to your provided contact number.</li>
              <li>Kindly review the details immediately upon receipt and inform us of any specific pickup requests.</li>
            </ul>
          </section>

          <section id="one-day-hours" className="legal-card">
            <h2><ShieldCheck /> 4. Service Hours & Driver Bata Policy</h2>
            <p>
              For all standard one-day local and temple tour packages:
            </p>
            <ul>
              <li>Package operational hours span from <strong>5:00 AM to 10:00 PM</strong>.</li>
              <li>If your travel extends past 10:00 PM, an extra driver bata (night allowance) will apply based on your selected vehicle category.</li>
              <li>Additional hourly or kilometer charges beyond agreed limits will be communicated transparently.</li>
            </ul>
          </section>

          <div id="contact-support" className="legal-contact-box">
            <h3>Need to Request a Refund or Change Booking Dates?</h3>
            <p>Reach out to our customer service desk directly for fast processing.</p>
            <div className="legal-actions">
              <a href={`tel:${phone}`} className="legal-btn legal-btn-primary">
                <PhoneCall size={18} /> Call +91-9014677289
              </a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="legal-btn legal-btn-secondary">
                <ArrowRight size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </main>
      </div>
      </div>
    </div>
  );
}
