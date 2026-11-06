import { Link } from 'react-router-dom';
import { Car, Compass, MapPin, FileText, MessageSquare, CreditCard, TrendingUp, Plus } from 'lucide-react';
import { useData } from '../context/DataContext';
import './Admin.css';

export default function AdminDashboard() {
  const { fleets, tours, destinations, blogs, queries, payments } = useData();

  const totalRevenue = payments
    .filter(p => p.status === 'SUCCESS')
    .reduce((sum, p) => sum + Number(p.amount || 0), 0);

  const pendingQueriesCount = queries.filter(q => q.status === 'Pending').length;

  return (
    <div>
      {/* Top Stats Banner */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="stat-icon blue">
            <Car size={24} />
          </div>
          <div className="stat-info">
            <h3>{fleets.length}</h3>
            <p>Active Vehicles</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-icon amber">
            <Compass size={24} />
          </div>
          <div className="stat-info">
            <h3>{tours.length}</h3>
            <p>Tour Packages</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-icon emerald">
            <TrendingUp size={24} />
          </div>
          <div className="stat-info">
            <h3>₹{totalRevenue.toLocaleString('en-IN')}</h3>
            <p>Easebuzz Collections</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-icon purple">
            <MessageSquare size={24} />
          </div>
          <div className="stat-info">
            <h3>{pendingQueriesCount}</h3>
            <p>Pending Queries</p>
          </div>
        </div>
      </div>

      {/* Quick Action Bar */}
      <div className="admin-card">
        <div className="card-top-bar">
          <h2>Quick Actions & Management</h2>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/admin/fleets" className="btn-primary-admin" style={{ textDecoration: 'none' }}>
            <Plus size={16} /> Manage Fleets ({fleets.length})
          </Link>
          <Link to="/admin/tours" className="btn-primary-admin" style={{ background: '#d97706', textDecoration: 'none' }}>
            <Plus size={16} /> Manage Tours ({tours.length})
          </Link>
          <Link to="/admin/destinations" className="btn-primary-admin" style={{ background: '#059669', textDecoration: 'none' }}>
            <Plus size={16} /> Manage Destinations ({destinations.length})
          </Link>
          <Link to="/admin/blogs" className="btn-primary-admin" style={{ background: '#7c3aed', textDecoration: 'none' }}>
            <Plus size={16} /> Manage Blogs ({blogs.length})
          </Link>
        </div>
      </div>

      {/* Grid: Recent Queries & Recent Payments */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {/* Recent Queries */}
        <div className="admin-card">
          <div className="card-top-bar">
            <h2>Recent Customer Enquiries</h2>
            <Link to="/admin/queries" style={{ color: 'var(--admin-primary)', fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none' }}>
              View All →
            </Link>
          </div>
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Route / Service</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {queries.slice(0, 5).map(q => (
                  <tr key={q.id}>
                    <td>
                      <strong style={{ color: '#fff' }}>{q.name}</strong>
                      <small style={{ display: 'block', color: '#64748b' }}>{q.phone}</small>
                    </td>
                    <td>{q.from} → {q.to}</td>
                    <td>{q.date}</td>
                    <td>
                      <span className={`status-badge ${q.status === 'Confirmed' ? 'success' : q.status === 'Pending' ? 'warning' : 'info'}`}>
                        {q.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Easebuzz Transactions */}
        <div className="admin-card">
          <div className="card-top-bar">
            <h2>Easebuzz Payment History</h2>
            <Link to="/admin/payments" style={{ color: 'var(--admin-primary)', fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none' }}>
              View All Logs →
            </Link>
          </div>
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Txn ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.slice(0, 5).map((p, idx) => (
                  <tr key={p.txnid || idx}>
                    <td style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>{p.txnid}</td>
                    <td>{p.firstname}</td>
                    <td><strong style={{ color: '#34d399' }}>₹{p.amount}</strong></td>
                    <td>
                      <span className="status-badge success">
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
