import { useState } from 'react';
import {
  FaPhone, FaEnvelope, FaLocationDot, FaWhatsapp,
  FaClock, FaShieldHalved, FaHeadset, FaPaperPlane,
  FaMapLocationDot, FaCircleCheck, FaChevronDown
} from 'react-icons/fa6';
import Page from './PageTemplate';
import { email, phone, whatsapp } from '../data/siteData';
import StatsBanner from '../components/StatsBanner';
import SEO from '../components/SEO';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Hello Dhakshinya Tours & Travels!%0A%0AName: ${data.get('name')}%0APhone: ${data.get('phone')}%0AService Required: ${data.get('service')}%0ADate: ${data.get('date') || 'Flexible'}%0AMessage: ${data.get('message')}`;
    window.open(`${whatsapp}?text=${msg}`, '_blank', 'noopener');
    setSubmitted(true);
  }

  const contactFaqs = [
    {
      q: 'How quickly will I receive cab fare confirmation on WhatsApp?',
      a: 'Instantly! Once you submit the form or send a WhatsApp message, our booking executive will reply within 5 to 15 minutes with exact vehicle options, driver details, and transparent fares.'
    },
    {
      q: 'Can I book a cab for early morning 3:00 AM Tirumala Darshan?',
      a: 'Yes. We operate 24/7. Your assigned driver will arrive punctually at your hotel, airport, or Tirupati Railway Station regardless of the pickup time.'
    },
    {
      q: 'Are toll fees, driver allowance, and parking charges included?',
      a: 'Yes! All quotes provided on WhatsApp are transparent and all-inclusive. There are no hidden fees or surge pricing on trip day.'
    },
    {
      q: 'What details are required for booking an outstation cab?',
      a: 'Just share your travel date, passenger count, destination (e.g. Srikalahasti, Kanipakam, Kanchipuram), and pickup point. No complicated paperwork required.'
    }
  ];

  return (
    <Page
      eyebrow="24/7 SUPPORT & BOOKINGS"
      title="Contact Us for Fast & Reliable Tirupati Taxi Bookings"
      text="Have questions about temple darshan packages, cab rentals, or outstation tours? Reach out to our team 24/7 via Phone, WhatsApp, or Email for instant assistance."
      image="/images/contact-bus-dhakshinya.jpg"
    >
      <SEO
        title="Contact Dhakshinya Tours & Travels – 24/7 Tirupati Cab & Tour Booking"
        description="Contact Dhakshinya Tours & Travels for instant cab bookings, temple tour packages, airport transfers and outstation taxi quotes in Tirupati. Call +91 90146 77289."
        canonical="/contact-us"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.dhakshinyatourandtravels.in/' },
            { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://www.dhakshinyatourandtravels.in/contact-us' }
          ]
        }}
      />
      <div className="contact-page-wrapper">
        {/* --- 4 QUICK CONTACT CARDS --- */}
        <section className="contact-cards-grid">
          <a href={`tel:${phone}`} className="contact-card">
            <div className="card-icon phone-bg">
              <FaPhone size={20} />
            </div>
            <span className="card-badge">24x7 DIRECT CALL</span>
            <h3>Call Us 24/7</h3>
            <p>Speak directly with our travel desk for instant trip planning & quotes.</p>
            <span className="card-link">+91 90146 77289</span>
          </a>

          <a href={whatsapp} target="_blank" rel="noreferrer" className="contact-card highlight-card">
            <div className="card-icon wa-bg">
              <FaWhatsapp size={22} />
            </div>
            <span className="card-badge green-badge">INSTANT REPLY</span>
            <h3>WhatsApp Support</h3>
            <p>Get instant cab fare quotes, vehicle photos, and booking confirmations.</p>
            <span className="card-link wa-link">Chat on WhatsApp</span>
          </a>

          <a href={`mailto:${email}`} className="contact-card">
            <div className="card-icon mail-bg">
              <FaEnvelope size={20} />
            </div>
            <span className="card-badge gold-badge">EMAIL ENQUIRY</span>
            <h3>Email Us</h3>
            <p>Send itinerary requests, corporate package inquiries, or booking details.</p>
            <span className="card-link">{email}</span>
          </a>

          <div className="contact-card">
            <div className="card-icon pin-bg">
              <FaLocationDot size={20} />
            </div>
            <span className="card-badge navy-badge">MAIN HUB</span>
            <h3>Main Office</h3>
            <p>Plot no 25, DS Naidu layout, near mangalam main road, Tirupati - 517507</p>
            <span className="card-tag">Open 24 Hours / 7 Days</span>
          </div>
        </section>

        {/* --- ONLINE BOOKING FORM & VALUE PROPOSITION --- */}
        <section className="contact-form-section">
          <div className="form-info-col">
            <span className="badge-pill gold"><FaClock size={12} /> INSTANT INQUIRY</span>
            <h2>Book Your Cab or Tour Package Online</h2>
            <p className="lead-desc">
              Fill out this form and our booking manager will instantly send verified vehicle options and transparent pricing to your WhatsApp / Phone.
            </p>

            <div className="feature-bullets">
              <div className="bullet-item">
                <div className="bullet-icon-wrap"><FaClock className="bullet-icon" /></div>
                <div>
                  <strong>Fast 15-Minute Response</strong>
                  <p>Guaranteed instant callbacks & trip itineraries tailored to your schedule.</p>
                </div>
              </div>

              <div className="bullet-item">
                <div className="bullet-icon-wrap"><FaShieldHalved className="bullet-icon" /></div>
                <div>
                  <strong>Transparent Zero-Surge Fares</strong>
                  <p>All-inclusive transparent rates with no surprise driver bata or toll charges.</p>
                </div>
              </div>

              <div className="bullet-item">
                <div className="bullet-icon-wrap"><FaHeadset className="bullet-icon" /></div>
                <div>
                  <strong>Dedicated Travel Assistant</strong>
                  <p>Driver details and vehicle registration numbers dispatched by 6:00 PM prior day.</p>
                </div>
              </div>
            </div>

            <div className="guarantee-box">
              <FaCircleCheck size={20} className="guarantee-icon" />
              <div>
                <strong>Punctuality & Safety Guarantee</strong>
                <p>100% verified, clean AC vehicles with safe, courteous local drivers experienced on ghat roads.</p>
              </div>
            </div>
          </div>

          <div className="form-card">
            {submitted ? (
              <div className="submitted-msg">
                <FaWhatsapp size={52} color="#25d366" />
                <h3>Redirecting to WhatsApp...</h3>
                <p>Thank you! Your booking request details have been formatted and sent to our official WhatsApp line.</p>
                <button onClick={() => setSubmitted(false)} className="resend-btn">Send Another Inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-header">
                  <h3>Online Taxi Booking Inquiry</h3>
                  <p>Get instant quote & vehicle availability</p>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input id="name" name="name" type="text" placeholder="e.g. Hemanth Kancharla" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp Number *</label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Required *</label>
                    <select id="service" name="service" required defaultValue="Tirupati to Tirumala Cab">
                      <option value="Tirupati to Tirumala Cab">Tirupati to Tirumala Cab</option>
                      <option value="Tirupati Local 5 Temples Package">Tirupati Local 5 Temples Package</option>
                      <option value="Tirupati to Srikalahasti Cab">Tirupati to Srikalahasti Cab</option>
                      <option value="Tirupati to Kanipakam Cab">Tirupati to Kanipakam Cab</option>
                      <option value="Outstation Taxi Rental">Outstation Taxi Rental</option>
                      <option value="Customized Devotional Tour">Customized Devotional Tour</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="date">Travel Date</label>
                    <input id="date" name="date" type="date" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Trip Details / Special Requests</label>
                  <textarea id="message" name="message" rows="3" placeholder="Number of passengers, pickup point (Airport / Station / Hotel), pickup time..."></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <FaPaperPlane size={15} /> Send WhatsApp Booking Request
                </button>
              </form>
            )}
          </div>
        </section>

        {/* --- STATS COUNTER BANNER --- */}
        <StatsBanner title="24/7 Dedicated Devotee Support" subtitle="TRUSTED SERVICE" />

        {/* --- OFFICE LOCATION & INFORMATION STRIP --- */}
        <section className="location-section">
          <div className="location-info-card">
            <div className="location-header">
              <FaMapLocationDot size={26} className="location-icon" />
              <div>
                <h2>Visit Our Office in Tirupati</h2>
                <p>Conveniently located at DS Naidu layout near Mangalam main road</p>
              </div>
            </div>
            <div className="location-details-grid">
              <div className="loc-item">
                <strong>Main Office Address:</strong>
                <p>Plot no 25, DS Naidu layout, near mangalam main road, Tirupati - 517507</p>
              </div>
              <div className="loc-item">
                <strong>Operating Hours:</strong>
                <p>Open 24 Hours / 7 Days a Week (Round the Clock)</p>
              </div>
              <div className="loc-item">
                <strong>Direct Support Lines:</strong>
                <p>
                  1: <a href="tel:+919014677289">+91 90146 77289</a><br />
                  2: <a href="tel:+917675808923">+91 76758 08923</a><br />
                  3: <a href="tel:+919703801999">+91 97038 01999</a><br />
                  4: <a href="tel:+917989217289">+91 79892 17289</a>
                </p>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div style={{ marginTop: '28px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(245, 158, 11, 0.25)', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)' }}>
              <iframe
                title="Dhakshinya Tours & Travels Map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3877.069889729357!2d79.45749577508845!3d13.653512486728275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDM5JzEyLjciTiA3OcKwMjcnMzYuMyJF!5e0!3m2!1sen!2sin!4v1793951443901!5m2!1sen!2sin"
                width="100%"
                height="380"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </section>

        {/* --- CONTACT FAQ ACCORDION --- */}
        <section className="contact-faq-section">
          <div className="section-header-centered">
            <span className="badge-pill"><FaHeadset size={12} /> HELP & FAQ</span>
            <h2>Common Booking & Contact Questions</h2>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '6px' }}>
              Everything you need to know about getting in touch and confirming your taxi booking
            </p>
          </div>

          <div className="contact-faq-grid">
            {contactFaqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`faq-item-card ${openFaq === index ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="faq-q-row">
                  <h3>{faq.q}</h3>
                  <FaChevronDown className="faq-toggle-icon" size={15} />
                </div>
                {openFaq === index && (
                  <p className="faq-answer">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </Page>
  );
}
