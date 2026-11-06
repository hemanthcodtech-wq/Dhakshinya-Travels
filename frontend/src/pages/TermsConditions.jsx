import React from 'react';
import { Scale, CheckSquare, Car, Shield, PhoneCall, ArrowRight, Clock, FileText, Lock, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import { phone, whatsapp, email } from '../data/siteData';
import './LegalPage.css';

export default function TermsConditions() {
  return (
    <div className="legal-page-outer">
      <div className="legal-page">
      <SEO
        title="Terms and Conditions – Dhakshinya Tours & Travels"
        description="Read the official booking terms, vehicle usage rules, payment guidelines, and driver dispatch conditions for Dhakshinya Tours & Travels."
        canonical="https://taxi-in-tirupati.com/terms-and-conditions"
      />
      <div className="legal-hero">
        <span className="legal-badge">OFFICIAL TERMS OF SERVICE</span>
        <h1>Terms and Conditions – <span>Dhakshinya Tours & Travels</span></h1>
        <p>
          Official terms of service for Dhakshinya Tours & Travels – Your 5-star rated taxi and tour partner in Tirupati.
        </p>
      </div>

      <div className="legal-content-grid">
        <aside className="legal-toc">
          <h3>Table of Contents</h3>
          <ul>
            <li><a href="#acceptance">Acceptance & Overview</a></li>
            <li><a href="#driver-details">Driver & Car Details Policy</a></li>
            <li><a href="#service-hours">Service Hours & Package Rules</a></li>
            <li><a href="#booking-process">Booking & Confirmation</a></li>
            <li><a href="#pricing">Payment & Pricing Transparency</a></li>
            <li><a href="#cancellation">Cancellation & Refund Terms</a></li>
            <li><a href="#responsibilities">Customer Responsibilities</a></li>
            <li><a href="#jurisdiction">Jurisdiction & Governing Law</a></li>
          </ul>
        </aside>

        <main className="legal-sections">
          <section id="acceptance" className="legal-card">
            <h2><Scale /> 1. Acceptance & Overview</h2>
            <p>
              By utilizing the services and website of <strong>Dhakshinya Tours & Travels</strong>, you acknowledge and accept the terms and conditions outlined herein. Prior to making any bookings or reservations, we urge you to thoroughly review these terms.
            </p>
          </section>

          <section id="driver-details" className="legal-card">
            <h2><Clock /> 2. Driver and Car Details for Your Trip</h2>
            <p>
              To ensure a smooth travel experience, we’ll furnish you with the driver and car specifics by <strong>6:00 PM, a day prior to your journey</strong>.
            </p>
            <ul>
              <li>Stay tuned to your communication channels (WhatsApp / SMS / Email) for details on driver name, contact info, and car specifics.</li>
              <li>Should you need assistance or have inquiries, don’t hesitate to contact our 24/7 customer service team at <strong>+91 90146 77289</strong>.</li>
            </ul>
          </section>

          <section id="service-hours" className="legal-card">
            <h2><Car /> 3. Service Hours Policy for One-Day Packages</h2>
            <p>
              For optimal service, our one-day package hours span from <strong>5:00 AM to 10:00 PM</strong>.
            </p>
            <div className="legal-alert legal-alert-info">
              <strong>OVERTIME & BATA POLICY:</strong> Should your journey exceed these hours or extend past 10:00 PM, an extra driver bata (night allowance) will be incurred based on your selected vehicle package.
            </div>
          </section>

          <section id="booking-process" className="legal-card">
            <h2><FileText /> 4. Booking Process & Confirmation</h2>
            <p>
              To secure your booking, please ensure you provide precise personal information, including accurate contact details and specific travel preferences.
            </p>
            <ul>
              <li>You can conveniently make bookings online via our website chat, booking forms, or by reaching out to our representatives at <strong>+91 90146 77289</strong> / <strong>+91 76758 08923</strong>.</li>
              <li>Upon confirmation, expect to receive a reservation confirmation through WhatsApp, email, or designated communication channels.</li>
              <li>Please review the reservation particulars carefully and inform us promptly of any inconsistencies.</li>
            </ul>
          </section>

          <section id="pricing" className="legal-card">
            <h2><CheckSquare /> 5. Payment and Pricing</h2>
            <p>
              Our tour package prices and car rental rates are prominently displayed on our website for your convenience.
            </p>
            <ul>
              <li>During booking, you can make payments using accepted payment methods listed on our portal.</li>
              <li>Additional charges including state taxes, toll fees, parking, or optional services will be communicated transparently.</li>
            </ul>
          </section>

          <section id="cancellation" className="legal-card">
            <h2><Shield /> 6. Cancellation & Refund Policy Summary</h2>
            <ul>
              <li><strong>Cancellation 24 Hours Prior:</strong> If you cancel at least 24 hours before the scheduled trip, the car rental fee will be reimbursed. Pre-booked darshan ticket costs are non-refundable.</li>
              <li><strong>Late Cancellation:</strong> If cancellation occurs after driver and car details have been dispatched (post 6:00 PM prior day), no refund will be issued.</li>
            </ul>
          </section>

          <section id="responsibilities" className="legal-card">
            <h2><Lock /> 7. Customer Responsibilities & Intellectual Property</h2>
            <p>
              It is your responsibility to ensure the accuracy of information provided during booking and comply with all travel laws. All website content, logos, and trademarks are protected by intellectual property laws.
            </p>
          </section>

          <section id="jurisdiction" className="legal-card">
            <h2><Globe /> 8. Jurisdiction & Governing Law</h2>
            <p>
              The terms and conditions outlined herein shall be interpreted and governed by the laws of India. Any disputes arising from the utilization of our services shall fall under the exclusive jurisdiction of the courts in India.
            </p>
          </section>

          <div className="legal-contact-box">
            <h3>Need Assistance or Have Questions?</h3>
            <p>Our travel desk is available 24/7 to assist with your bookings.</p>
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
