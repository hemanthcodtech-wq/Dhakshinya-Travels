import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Menu, MessageCircle, X, ChevronDown, Phone, Mail,
  Home as HomeIcon, Car, Package, Sparkles, Grid, Info, ChevronRight, MapPin, ShieldCheck, CreditCard
} from 'lucide-react';
import {
  FaFacebookF, FaXTwitter, FaInstagram, FaYoutube,
  FaLinkedinIn, FaWhatsapp
} from 'react-icons/fa6';
import logoImg from '../assests/logo.png';
import { phone, whatsapp, whatsappChat, email, companyName, phoneNumbers, fullAddress } from '../data/siteData';
import { cabRoutes } from '../data/cabRoutes';
import { serviceLinks, taxiLinks } from '../data/servicePages';
import { blogPosts } from '../data/blogData';
import { useData } from '../context/DataContext';
import EasebuzzModal from './EasebuzzModal';
import './Layout.css';
import './LayoutDropdownFix.css';

const packageNavLinks = [
  { slug: 'local-packages', title: 'Local Packages', starting: '₹2,880' },
  { slug: 'outstation-packages', title: 'Outstation Packages', starting: '₹15/km' },
  { slug: 'balaji-darshan-packages', title: 'Balaji Darshan Packages', starting: '₹3,500' },
  { slug: 'corporate-packages', title: 'Corporate Packages', starting: '₹3,000' },
  { slug: 'customized-packages', title: 'Customized Packages', starting: 'Custom Quote' },
  { slug: 'holiday-packages', title: 'Holiday Packages', starting: '₹9,500' },
  { slug: 'family-packages', title: 'Family Packages', starting: '₹3,380' },
  { slug: 'student-packages', title: 'Student Packages', starting: 'Group Rate' },
  { slug: 'wedding-packages', title: 'Wedding Packages', starting: 'Event Rate' },
  { slug: 'devotional-packages', title: 'Devotional Packages', starting: '₹3,500' }
];

const fleetNavLinks = [
  { path: '/fleet/sedan', title: 'Sedan (Dzire / Etios)', starting: '₹2,880' },
  { path: '/fleet/ertiga', title: 'Maruti Ertiga (MUV)', starting: '₹3,380' },
  { path: '/fleet/innova-crysta', title: 'Toyota Innova Crysta', starting: '₹4,380' },
  { path: '/fleet/hycross', title: 'Toyota Hycross', starting: '₹6,100' },
  { path: '/fleet/fortuner', title: 'Toyota Fortuner', starting: '₹8,800' },
  { path: '/fleet/tempo-12', title: 'Tempo Traveller 12 Seater', starting: '₹5,100' },
  { path: '/fleet/urbania-12', title: 'Urbania 12 Seater', starting: '₹10,000' },
  { path: '/fleet/tempo-16', title: 'Tempo Traveller 16 Seater', starting: '₹6,800' },
  { path: '/fleet/urbania-16', title: 'Urbania 16 Seater', starting: '₹12,000' },
  { path: '/fleet/tempo-20', title: 'Tempo Traveller 20 Seater', starting: '₹9,000' },
  { path: '/fleet/bus-27', title: 'Mini Bus 27 Seater', starting: '₹12,000' },
  { path: '/fleet/bus-40', title: 'Bus 40 Seater', starting: '₹15,200' },
  { path: '/fleet/bus-45', title: 'Bus 45 Seater', starting: '₹18,000' }
];

const moreNavLinks = [
  { path: '/vehicles-gallery', title: 'Vehicles Gallery' },
  { path: '/contact-us', title: 'Contact Us' },
  { path: '/about-us', title: 'About Us' },
  { path: '/refund-and-cancellation-policy', title: 'Refund & Cancellation' },
  { path: '/privacy-policy', title: 'Privacy Policy' },
  { path: '/terms-and-conditions', title: 'Terms & Conditions' }
];

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/tirupatibalajitourstravel', Icon: FaFacebookF },
  { name: 'Twitter', url: 'https://x.com/tirupati_tours', Icon: FaXTwitter },
  { name: 'Instagram', url: 'https://www.instagram.com/tirupatibalajitourstravel', Icon: FaInstagram },
  { name: 'YouTube', url: 'https://www.youtube.com/@tirupatibalajitourstravel', Icon: FaYoutube },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/chandra-sekhar-59aa502b9', Icon: FaLinkedinIn }
];

const Brand = ({ header = false, logoOnly = false } = {}) => (
  <Link to="/" className={`brand ${header ? 'header-brand-only' : ''}`}>
    <img
      src={logoImg}
      alt="Dhakshinya Tours & Travels"
    />
    {!header && !logoOnly && (
      <strong>
        DHAKSHINYA<small>TOURS & TRAVELS</small>
      </strong>
    )}
  </Link>
);

function HeaderDropdown({ id, activeDropdown, onEnter, onLeave, label, to, links, getSlug, isMore, className = '', viewAllLink, viewAllText = 'View All' }) {
  const isOpen = activeDropdown === id;
  const isMultiCol = links.length > 6;

  return (
    <div
      className={`nav-cabs ${className} ${isMore ? 'nav-more' : ''} ${isOpen ? 'is-open' : ''}`}
      onMouseEnter={() => onEnter(id)}
      onMouseLeave={onLeave}
    >
      {to ? (
        <NavLink to={to} className="nav-cabs-trigger" onClick={() => onLeave(true)}>
          {label} <ChevronDown size={13} />
        </NavLink>
      ) : (
        <button className="nav-cabs-trigger">
          {label} <ChevronDown size={13} />
        </button>
      )}

      <div className={`nav-cabs-menu ${isOpen ? 'is-open' : ''} ${isMultiCol ? 'multi-col' : ''}`}>
        {isMultiCol && (
          <div className="nav-dropdown-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{label}</span>
            {viewAllLink && (
              <NavLink 
                to={viewAllLink} 
                onClick={() => onLeave(true)} 
                className="nav-dropdown-viewall-btn"
              >
                {viewAllText} →
              </NavLink>
            )}
          </div>
        )}
        {links.map(item => {
          const path = item.path || (getSlug ? getSlug(item) : `/${item.slug}`);
          const lbl = item.shortTitle || item.title;
          const rate = item.starting;
          return (
            <NavLink key={path} to={path} onClick={() => onLeave(true)} className="nav-dropdown-item">
              <span className="nav-dropdown-item-title">{lbl}</span>
              {rate && rate !== 'Call for current fare' && (
                <span className="nav-dropdown-price-tag">{rate}</span>
              )}
            </NavLink>
          );
        })}
        {viewAllLink && !isMultiCol && (
          <div style={{ padding: '8px 10px', borderTop: '1px solid rgba(245, 158, 11, 0.25)', marginTop: '4px' }}>
            <NavLink 
              to={viewAllLink} 
              onClick={() => onLeave(true)} 
              style={{ fontSize: '11.5px', color: '#ffd700', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <span>{viewAllText}</span>
              <span>→</span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Layout() {
  const { fleets, tours: adminTours, blogs } = useData();
  const blogList = blogs && blogs.length > 0 ? blogs : blogPosts;

  // Generate dynamic fleet links from database/context fleets
  const dynamicFleetList = fleets && fleets.length > 0 ? fleets : fleetNavLinks;
  const dynamicFleetNavLinks = dynamicFleetList.map(item => {
    // If it's already in { path, title, starting } format
    if (item.path && item.title) return item;
    // Format from fleet vehicle object
    const cleanLocalPrice = item.local ? item.local.split('/')[0].trim() : (item.outstation || '₹2,880');
    return {
      path: `/fleet/${item.id}`,
      title: item.name,
      starting: cleanLocalPrice
    };
  });

  // Generate dynamic tours/packages links from admin DataContext
  const dynamicTourLinks = (adminTours && adminTours.length > 0)
    ? adminTours.map(t => {
        // [title, duration, route, startingPrice, image, id, prices]
        const title = t[0] || 'Tour Package';
        const price = t[3] || '₹3,500';
        const rawSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        return {
          path: `/tour/${rawSlug}`,
          title: title,
          starting: `From ${price}`
        };
      })
    : packageNavLinks.map(p => ({
        path: `/services/${p.slug}`,
        title: p.title,
        starting: p.starting
      }));

  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState('cabs');
  const [scrolled, setScrolled] = useState(false);
  const [headerPayModalOpen, setHeaderPayModalOpen] = useState(false);
  const timerRef = useRef(null);
  const location = useLocation();

  const pageLabel = (() => {
    const p = location.pathname;
    if (p === '/') return 'Home Page';
    if (p.startsWith('/tirupati-cabs/')) return `Cab Route: ${p.split('/tirupati-cabs/')[1].replace(/-/g, ' ')}`;
    if (p.startsWith('/tour/')) return `Tour Package: ${p.split('/tour/')[1].replace(/-/g, ' ')}`;
    if (p.startsWith('/fleet/')) return `Fleet Vehicle: ${p.split('/fleet/')[1].replace(/-/g, ' ')}`;
    if (p.startsWith('/destinations/')) return `Destination: ${p.split('/destinations/')[1].replace(/-/g, ' ')}`;
    if (p.startsWith('/services/')) return `Service: ${p.split('/services/')[1].replace(/-/g, ' ')}`;
    return p.replace(/^\//, '').replace(/-/g, ' ') || 'Website';
  })();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 34);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (headerPayModalOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      return () => {
        document.body.style.overflow = prevOverflow;
        document.body.classList.remove('modal-open');
      };
    }
  }, [headerPayModalOpen]);

  const handleDropdownEnter = id => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveDropdown(id);
  };

  const handleDropdownLeave = immediate => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (immediate === true) {
      setActiveDropdown(null);
    } else {
      timerRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 180);
    }
  };

  const toggleMobileMenu = () => {
    setOpen(prev => !prev);
    setActiveTab('cabs');
  };

  return (
    <>
      <div className={`header-top-bar${scrolled ? ' is-hidden' : ''}`}>
        <div className="top-bar-container">
          <div className="top-bar-left">
            <a href="tel:+919014677289" className="top-bar-link top-bar-phone">
              <Phone size={13} /> +91 90146 77289
            </a>
            <a href="tel:+917675808923" className="top-bar-link top-bar-phone">
              <Phone size={13} /> +91 76758 08923
            </a>
            <a href="tel:+919703801999" className="top-bar-link top-bar-phone">
              <Phone size={13} /> +91 97038 01999
            </a>
            <a href="tel:+917989217289" className="top-bar-link top-bar-phone">
              <Phone size={13} /> +91 79892 17289
            </a>
            <a href={`mailto:${email}`} className="top-bar-link top-bar-email">
              <Mail size={13} /> {email}
            </a>
          </div>
          <div className="top-bar-right">
            <span className="top-bar-social-label">Follow Us:</span>
            {socialLinks.map(({ name, url, Icon }) => (
              <a key={name} href={url} target="_blank" rel="noreferrer" className="top-social-icon" title={name}>
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={`sticky-header-wrapper${scrolled ? ' is-scrolled' : ''}`}>
        <header className="navbar">
          <Brand header />
          <nav>
            <div className="desktop-nav-links">
              <NavLink to="/" onMouseEnter={() => handleDropdownLeave(true)}>Home</NavLink>
              <HeaderDropdown 
                id="cabs" 
                activeDropdown={activeDropdown} 
                onEnter={handleDropdownEnter} 
                onLeave={handleDropdownLeave} 
                label="Tirupati Cabs" 
                to="/cabs" 
                links={cabRoutes} 
                getSlug={r => `/tirupati-cabs/${r.slug}`}
                viewAllLink="/cabs"
                viewAllText="View All Cabs"
              />
              <HeaderDropdown 
                id="tours" 
                activeDropdown={activeDropdown} 
                onEnter={handleDropdownEnter} 
                onLeave={handleDropdownLeave} 
                label="Tours & Packages" 
                to="/tours" 
                className="nav-tours" 
                links={dynamicTourLinks} 
                viewAllLink="/tours"
                viewAllText="View All Tour Packages"
              />
              <HeaderDropdown 
                id="fleet" 
                activeDropdown={activeDropdown} 
                onEnter={handleDropdownEnter} 
                onLeave={handleDropdownLeave} 
                label="Fleet & Rentals" 
                to="/fleet" 
                className="nav-fleet" 
                links={dynamicFleetNavLinks} 
                viewAllLink="/fleet"
                viewAllText="View All Fleet"
              />
              <HeaderDropdown 
                id="services" 
                activeDropdown={activeDropdown} 
                onEnter={handleDropdownEnter} 
                onLeave={handleDropdownLeave} 
                label="Services" 
                to="/services" 
                className="nav-services" 
                links={packageNavLinks} 
                getSlug={p => `/services/${p.slug}`} 
                viewAllLink="/services"
                viewAllText="View All Services"
              />
              <NavLink to="/vehicles-gallery" onMouseEnter={() => handleDropdownLeave(true)}>Gallery</NavLink>
              <NavLink to="/destinations" onMouseEnter={() => handleDropdownLeave(true)}>Destinations</NavLink>
              <NavLink to="/blog" onMouseEnter={() => handleDropdownLeave(true)}>Blog</NavLink>
              <HeaderDropdown 
                id="more" 
                activeDropdown={activeDropdown} 
                onEnter={handleDropdownEnter} 
                onLeave={handleDropdownLeave} 
                label="More" 
                isMore 
                className="nav-more" 
                links={moreNavLinks} 
                viewAllLink="/contact-us"
                viewAllText="Contact Us & Info"
              />
            </div>
          </nav>
          <div className="nav-right-controls" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              type="button"
              className="nav-book-btn"
              onClick={() => setHeaderPayModalOpen(true)}
              style={{
                background: 'linear-gradient(135deg, #fcd34d 0%, #f59e0b 50%, #b45309 100%)',
                color: '#000000',
                border: '1px solid #f59e0b',
                padding: '9px 16px',
                borderRadius: '8px',
                display: 'inline-flex',
                gap: '6px',
                alignItems: 'center',
                fontSize: '11.5px',
                fontWeight: 800,
                letterSpacing: '0.2px',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(245, 158, 11, 0.4)',
                transition: 'all 0.25s ease'
              }}
            >
              <CreditCard size={14} /> Book Cab 💳
            </button>
            <a className="nav-wa" href={whatsappChat(pageLabel)} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <button
              type="button"
              className="menu"
              onClick={toggleMobileMenu}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div 
              className="overlay" 
              onClick={() => setOpen(false)} 
              onTouchMove={(e) => e.preventDefault()}
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
            />
            <motion.aside
              className="drawer executive-mobile-drawer"
              initial={{ right: '-100%' }}
              animate={{ right: 0 }}
              exit={{ right: '-100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ right: 0 }}>
              <div className="drawer-header-row">
                <Brand header />
                <div className="drawer-header-actions">
                  <button type="button" className="drawer-x-icon-btn" onClick={() => setOpen(false)} aria-label="Close menu">
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="mobile-drawer-tab-bar">
                <button type="button" className={`drawer-tab drawer-tab-primary ${activeTab === 'cabs' ? 'is-active' : ''}`} onClick={() => setActiveTab('cabs')}>
                  <Car size={14} /> Cabs
                </button>
                <button type="button" className={`drawer-tab ${activeTab === 'fleet' ? 'is-active' : ''}`} onClick={() => setActiveTab('fleet')}>
                  <Car size={14} /> Fleet
                </button>
                <button type="button" className={`drawer-tab ${activeTab === 'packages' ? 'is-active' : ''}`} onClick={() => setActiveTab('packages')}>
                  <Package size={14} /> Packages
                </button>
                <button type="button" className={`drawer-tab ${activeTab === 'more' ? 'is-active' : ''}`} onClick={() => setActiveTab('more')}>
                  <Info size={14} /> More Info
                </button>
              </div>

              <div className="drawer-scroll-content" onTouchMove={(e) => e.stopPropagation()}>
                {activeTab === 'cabs' && (
                  <div className="drawer-section-block">
                    <span className="drawer-badge-pill">Popular Cab Routes</span>
                    <div className="drawer-link-card-grid">
                      {cabRoutes.slice(0, 7).map(r => (
                        <NavLink key={r.slug} onClick={() => setOpen(false)} to={`/tirupati-cabs/${r.slug}`} className="mob-link-card">
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, minWidth: 0 }}>
                            <span>{r.shortTitle || r.title}</span>
                            {r.starting && <small style={{ color: '#e5a919', fontWeight: 700, fontSize: '11px' }}>Starting from {r.starting}</small>}
                          </div>
                          <ChevronRight size={14} />
                        </NavLink>
                      ))}

                      <NavLink 
                        onClick={() => setOpen(false)} 
                        to="/cabs" 
                        className="mob-link-card mob-view-all-card"
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, minWidth: 0 }}>
                          <span style={{ color: '#fbbf24', fontWeight: 800 }}>✨ View All Cab Routes</span>
                          <small style={{ color: '#fde047', fontSize: '11px' }}>Explore all 13+ outstation & local temple routes</small>
                        </div>
                        <ChevronRight size={16} color="#fbbf24" />
                      </NavLink>
                    </div>
                  </div>
                )}

                {activeTab === 'fleet' && (
                  <div className="drawer-section-block">
                    <span className="drawer-badge-pill">Vehicle Fleet & Rates</span>
                    <div className="drawer-link-card-grid">
                      {dynamicFleetNavLinks.slice(0, 7).map(f => (
                        <NavLink key={f.path} onClick={() => setOpen(false)} to={f.path} className="mob-link-card">
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, minWidth: 0 }}>
                            <span>{f.title}</span>
                            {f.starting && <small style={{ color: '#e5a919', fontWeight: 700, fontSize: '11px' }}>Starting from {f.starting}</small>}
                          </div>
                          <ChevronRight size={14} />
                        </NavLink>
                      ))}

                      <NavLink 
                        onClick={() => setOpen(false)} 
                        to="/fleet" 
                        className="mob-link-card mob-view-all-card"
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, minWidth: 0 }}>
                          <span style={{ color: '#fbbf24', fontWeight: 800 }}>✨ View All Fleet & Buses</span>
                          <small style={{ color: '#fde047', fontSize: '11px' }}>See all 13+ Sedans, Urbania, Tempos & Buses</small>
                        </div>
                        <ChevronRight size={16} color="#fbbf24" />
                      </NavLink>
                    </div>
                  </div>
                )}

                {activeTab === 'packages' && (
                  <div className="drawer-section-block">
                    <span className="drawer-badge-pill">Taxi & Tour Packages</span>
                    <div className="drawer-link-card-grid">
                      {dynamicTourLinks.slice(0, 7).map(p => (
                        <NavLink key={p.path} onClick={() => setOpen(false)} to={p.path} className="mob-link-card">
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, minWidth: 0 }}>
                            <span>{p.title}</span>
                            {p.starting && <small style={{ color: '#e5a919', fontWeight: 700, fontSize: '11px' }}>Starting {p.starting}</small>}
                          </div>
                          <ChevronRight size={14} />
                        </NavLink>
                      ))}

                      <NavLink 
                        onClick={() => setOpen(false)} 
                        to="/tours" 
                        className="mob-link-card mob-view-all-card"
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, minWidth: 0 }}>
                          <span style={{ color: '#fbbf24', fontWeight: 800 }}>✨ View All Tour Packages</span>
                          <small style={{ color: '#fde047', fontSize: '11px' }}>Explore all 13+ temple & holiday packages</small>
                        </div>
                        <ChevronRight size={16} color="#fbbf24" />
                      </NavLink>
                    </div>
                  </div>
                )}

                {activeTab === 'more' && (
                  <div className="drawer-section-block">
                    <span className="drawer-badge-pill">Information & Pages</span>
                    <div className="drawer-link-card-grid">
                      <NavLink onClick={() => setOpen(false)} to="/blog" className="mob-link-card">
                        <span>📰 Travel Blogs & Guides</span><ChevronRight size={14} />
                      </NavLink>
                      {moreNavLinks.slice(0, 6).map(m => (
                        <NavLink key={m.path} onClick={() => setOpen(false)} to={m.path} className="mob-link-card">
                          <span>{m.title}</span><ChevronRight size={14} />
                        </NavLink>
                      ))}

                      <NavLink 
                        onClick={() => setOpen(false)} 
                        to="/contact-us" 
                        className="mob-link-card mob-view-all-card"
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, minWidth: 0 }}>
                          <span style={{ color: '#fbbf24', fontWeight: 800 }}>✨ View Contact & Support</span>
                          <small style={{ color: '#fde047', fontSize: '11px' }}>Get in touch with 24/7 Tirupati travel desk</small>
                        </div>
                        <ChevronRight size={16} color="#fbbf24" />
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>

              <div className="drawer-footer-row"><ShieldCheck size={16} /> 24/7 Verified Tirupati Taxi Service</div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <Outlet />

      <footer className="site-footer">
        <div>
          <Brand />
          <p>Dhakshinya Tours & Travels: Trusted taxi service in Tirupati for Tirumala, temple tours, and South India pilgrimage journeys. 24/7 dedicated support & reliable verified fleet.</p>
          <div className="footer-contact-details" style={{ margin: '12px 0 16px', fontSize: '11px', lineHeight: '1.8' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '6px' }}>
              <div>📞 <a href="tel:+919014677289">+91 90146 77289</a> / <a href="tel:+917675808923">+91 76758 08923</a></div>
              <div>📞 <a href="tel:+919703801999">+91 97038 01999</a> / <a href="tel:+917989217289">+91 79892 17289</a></div>
            </div>
            <div>✉️ <a href={`mailto:${email}`}>{email}</a></div>
            <div>📍 Plot no 25, DS Naidu layout, near mangalam main road, Tirupati - 517507</div>
          </div>
          <div className="footer-social-row">
            {socialLinks.map(({ name, url, Icon }) => (
              <a key={name} href={url} target="_blank" rel="noreferrer" className="footer-social-btn" title={name}><Icon size={14} /></a>
            ))}
          </div>
        </div>

        <div>
          <h4>Services & Rentals</h4>
          <Link to="/car-rentals-in-tirupati">Car Rentals in Tirupati</Link>
          <Link to="/tempo-traveller-rental-in-tirupati">Tempo Traveller Rental</Link>
          <Link to="/urbania-traveller-rental-in-tirupati">Force Urbania Rental</Link>
          <Link to="/bus-rental-in-tirupati">Luxury Bus Rental</Link>
          <Link to="/tirupati-airport-taxi">Tirupati Airport Taxi</Link>
          <Link to="/outstation-taxi-in-tirupati">Outstation Taxi Service</Link>
          <Link to="/taxi-in-tirupati">Taxi Service in Tirupati</Link>
          <Link to="/fleet">View Full Vehicle Fleet</Link>
        </div>

        <div>
          <h4>Popular Cab Routes</h4>
          <Link to="/tirupati-cabs/tirupati-to-srikalahasti-cab">Tirupati to Srikalahasti Cab</Link>
          <Link to="/tirupati-cabs/tirupati-to-arunachalam-cab">Tirupati to Arunachalam Cab</Link>
          <Link to="/tirupati-cabs/tirupati-to-tirumala-cab">Tirupati to Tirumala Cab</Link>
          <Link to="/tirupati-cabs/tirupati-to-kanipakam-cab">Tirupati to Kanipakam Cab</Link>
          <Link to="/tirupati-cabs/tirupati-to-vellore-golden-temple-cab">Tirupati to Vellore Golden Temple</Link>
          <Link to="/tirupati-cabs/tirupati-to-chennai-cab">Tirupati to Chennai Airport Cab</Link>
          <Link to="/tirupati-cabs/tirupati-to-bangalore-cab">Tirupati to Bangalore Cab</Link>
          <Link to="/tirupati-cabs/tirupati-to-kanchipuram-cab">Tirupati to Kanchipuram Cab</Link>
        </div>

        <div>
          <h4>Tour Packages</h4>
          {packageNavLinks.map(p => (
            <Link key={p.slug} to={`/services/${p.slug}`}>{p.title}</Link>
          ))}
          <Link to="/tours">View All Tour Packages</Link>
        </div>

        <div>
          <h4>Destinations & Policies</h4>
          <Link to="/destinations/tirumala">Tirumala Balaji Temple</Link>
          <Link to="/destinations/srikalahasti">Srikalahasti Temple</Link>
          <Link to="/destinations/kanipakam">Kanipakam Vinayaka Temple</Link>
          <Link to="/destinations/golden-temple">Vellore Golden Temple</Link>
          <Link to="/destinations/arunachalam">Arunachalam (Tiruvannamalai)</Link>
          <Link to="/blog">Travel Blog & News</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/refund-and-cancellation-policy">Refund Policy</Link>
        </div>
      </footer>

      <div className="footer-copyright-strip" style={{ background: '#000000', color: '#94a3b8', fontSize: '11px', textAlign: 'center', padding: '14px clamp(20px, 3vw, 50px)', borderTop: '1px solid rgba(245, 158, 11, 0.25)' }}>
        <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          <span>© {new Date().getFullYear()} Dhakshinya Tours & Travels. All Rights Reserved.</span>
          <span>No. 1 Taxi & Tour Agency in Tirupati · 24/7 Verified Service</span>
        </div>
      </div>

      <div className="floating-whatsapp-container">
        <div className="whatsapp-tooltip"><span className="online-dot" /> Need a Cab? <strong>Chat Now!</strong></div>
        <a className="whatsapp-pulse-btn" href={whatsappChat(pageLabel)} target="_blank" rel="noreferrer" title="Chat on WhatsApp">
          <span className="pulse-ring" /><span className="pulse-ring-outer" /><FaWhatsapp size={26} />
        </a>
      </div>

      <nav className="mobile-pop-bottom-nav" aria-label="Mobile Quick Navigation">
        <NavLink to="/" className={({ isActive }) => `mob-pop-nav-item ${isActive ? 'active' : ''}`}><HomeIcon size={18} /><span>Home</span></NavLink>
        <NavLink to="/fleet" className={({ isActive }) => `mob-pop-nav-item ${isActive ? 'active' : ''}`}><Car size={18} /><span>Fleets</span></NavLink>
        <NavLink to="/destinations" className={({ isActive }) => `mob-pop-nav-item ${isActive ? 'active' : ''}`}><MapPin size={18} /><span>Destinations</span></NavLink>
        <NavLink to="/tours" className={({ isActive }) => `mob-pop-nav-item ${isActive ? 'active' : ''}`}><Package size={18} /><span>Tours</span></NavLink>
      </nav>

      {/* Header Pay & Book Modal */}
      {headerPayModalOpen && (
        <EasebuzzModal
          isOpen={headerPayModalOpen}
          onClose={() => setHeaderPayModalOpen(false)}
          initialData={{
            isNavbarBooking: true,
            service: 'Tirupati Cab Service',
            amount: '1000'
          }}
        />
      )}
    </>
  );
}
