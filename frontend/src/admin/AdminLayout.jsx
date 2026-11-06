import { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Car, Compass, MapPin, FileText, 
  MessageSquare, CreditCard, Settings, LogOut, ExternalLink, ShieldCheck,
  Menu, X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Admin.css';

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('admin-body-active');
    return () => {
      document.body.classList.remove('admin-body-active');
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/admin/login', { replace: true });
  };

  const navItems = [
    { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/admin/fleets', label: 'Fleets & Vehicles', icon: Car },
    { to: '/admin/tours', label: 'Tour Packages', icon: Compass },
    { to: '/admin/destinations', label: 'Destinations', icon: MapPin },
    { to: '/admin/blogs', label: 'Blog Posts', icon: FileText },
    { to: '/admin/queries', label: 'Customer Queries', icon: MessageSquare },
    { to: '/admin/payments', label: 'Easebuzz Payments', icon: CreditCard },
    { to: '/admin/settings', label: 'Settings & Auth', icon: Settings }
  ];

  return (
    <div className="admin-shell">
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="admin-sidebar-backdrop" 
          onClick={() => setIsMobileOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo-icon">
            <ShieldCheck size={22} />
          </div>
          <div className="sidebar-title">
            Tirupati Balaji
            <small>Admin Panel</small>
          </div>
          <button 
            type="button" 
            className="mobile-sidebar-close" 
            onClick={() => setIsMobileOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <NavLink 
                key={item.to} 
                to={item.to} 
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMobileOpen(false)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="admin-user-info">
            <div className="admin-avatar">
              {user?.username ? user.username[0].toUpperCase() : 'A'}
            </div>
            <div className="admin-user-details">
              <strong>{user?.username || 'Administrator'}</strong>
              <small>{user?.role || 'Admin'}</small>
            </div>
          </div>
          <button type="button" onClick={handleLogout} className="logout-btn">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="admin-header-left">
            <button 
              type="button" 
              className="admin-mobile-toggle"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              <Menu size={22} />
            </button>
            <div className="admin-header-title">
              <h1>Portal Control Center</h1>
            </div>
          </div>
          <div className="admin-header-actions">
            <a href="/" target="_blank" rel="noreferrer" className="site-preview-link">
              <span>Preview Site</span> <ExternalLink size={14} />
            </a>
          </div>
        </header>

        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

