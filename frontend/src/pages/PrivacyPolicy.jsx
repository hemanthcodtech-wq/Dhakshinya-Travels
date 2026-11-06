import React from 'react';
import { Lock, Eye, ShieldCheck, Database, PhoneCall, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { phone, whatsapp, email } from '../data/siteData';
import './LegalPage.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page-outer">
      <div className="legal-page">
      <SEO
        title="Privacy Policy – Dhakshinya Tours & Travels"
        description="Review the official Privacy Policy of Dhakshinya Tours & Travels. We are committed to safeguarding your personal data, booking details, and privacy."
        canonical="https://taxi-in-tirupati.com/privacy-policy"
      />
      <div className="legal-hero">
        <span className="legal-badge">100% SECURE & CONFIDENTIAL</span>
        <h1>Privacy Policy – <span>Dhakshinya Tours & Travels</span></h1>
        <p>
          At Dhakshinya Tours & Travels, we value your privacy and security above all else. This policy outlines how we collect, use, and protect your personal information.
        </p>
      </div>

      <div className="legal-content-grid">
        <aside className="legal-toc">
          <h3>Quick Navigation</h3>
          <ul>
            <li><a href="#information-collected">Information We Collect</a></li>
            <li><a href="#how-we-use">How Information Is Used</a></li>
            <li><a href="#data-protection">Data Protection & Security</a></li>
            <li><a href="#third-party">Third-Party Privacy Policy</a></li>
            <li><a href="#contact-us">Privacy Contact</a></li>
          </ul>
        </aside>

        <main className="legal-sections">
          <section id="information-collected" className="legal-card">
            <h2><Eye /> 1. Information We Collect</h2>
            <p>
              When you book a cab or inquire about our Tirupati tour packages through our website, phone, or WhatsApp, we collect necessary details to serve your travel requirements smoothly.
            </p>
            <ul>
              <li><strong>Personal Identifiers:</strong> Name, contact phone number, and email address.</li>
              <li><strong>Travel Details:</strong> Pickup address, flight/train numbers, arrival times, passenger count, and preferred vehicle class.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and device information gathered via standard website analytics.</li>
            </ul>
          </section>

          <section id="how-we-use" className="legal-card">
            <h2><Database /> 2. How Your Information Is Used</h2>
            <p>We use your information strictly to ensure a high-quality travel experience:</p>
            <ul>
              <li>To confirm cab reservations and share driver name, vehicle number, and contact details prior to pickup.</li>
              <li>To coordinate airport transfers, railway station pickups, and hotel drop services.</li>
              <li>To send booking receipts, travel itineraries, and responsive customer support updates.</li>
              <li>To improve website performance and tailor tour packages to customer preferences.</li>
            </ul>
          </section>

          <section id="data-protection" className="legal-card">
            <h2><Lock /> 3. Data Protection & Confidentiality</h2>
            <div className="legal-alert legal-alert-success">
              <strong>ZERO SPAM / NO DATA SELLING:</strong> Dhakshinya Tours & Travels NEVER sells, rents, trades, or leases customer personal information to third-party marketing companies.
            </div>
            <p>
              We implement industry-standard administrative and electronic security measures to safeguard your personal information against unauthorized access, loss, or misuse.
            </p>
          </section>

          <section id="third-party" className="legal-card">
            <h2><ShieldCheck /> 4. External Services & Third Parties</h2>
            <p>
              Our website may link to third-party platforms such as WhatsApp for instant chat support or Google Maps for location directions. We encourage you to review the privacy policies of these external platforms when using them.
            </p>
          </section>

          <div id="contact-us" className="legal-contact-box">
            <h3>Questions About Our Privacy Policy?</h3>
            <p>Contact our privacy compliance team for any data protection inquiries.</p>
            <div className="legal-actions">
              <a href={`mailto:${email}`} className="legal-btn legal-btn-primary">
                Email {email}
              </a>
              <a href={`tel:${phone}`} className="legal-btn legal-btn-secondary">
                <PhoneCall size={18} /> Call +91-9014677289
              </a>
            </div>
          </div>
        </main>
      </div>
      </div>
    </div>
  );
}
