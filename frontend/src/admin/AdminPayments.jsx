import { CreditCard, CheckCircle2, ShieldCheck, Download, Search } from 'lucide-react';
import { useData } from '../context/DataContext';
import './Admin.css';

export default function AdminPayments() {
  const { payments } = useData();

  const totalCollected = payments
    .filter(p => p.status === 'SUCCESS')
    .reduce((sum, p) => sum + Number(p.amount || 0), 0);

  return (
    <div>
      {/* Gateway Environment Bar */}
      <div className="admin-card" style={{ background: 'linear-gradient(135deg, #e5a919 0%, #c68a0a 100%)', color: '#fff', border: 'none' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.9 }}>
              EASEBUZZ PAYMENT GATEWAY LOGS
            </span>
            <h2 style={{ color: '#fff', margin: '0.25rem 0 0 0', fontSize: '1.4rem' }}>
              Total Online Collections: ₹{totalCollected.toLocaleString('en-IN')}
            </h2>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.15)', padding: '0.5rem 1rem', borderRadius: 10, backdropFilter: 'blur(8px)', fontSize: '0.85rem' }}>
            <ShieldCheck size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
            Active Gateway: <strong>EASEBUZZ ONLINE</strong>
          </div>
        </div>
      </div>

      {/* Payment Transactions Table */}
      <div className="admin-card">
        <div className="card-top-bar">
          <div>
            <h2>Easebuzz Transactions History ({payments.length})</h2>
            <p style={{ color: 'var(--admin-text-muted)', fontSize: '0.85rem', margin: '0.2rem 0 0 0' }}>
              Real-time records of advance token payments and online cab bookings
            </p>
          </div>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Easebuzz Ref ID</th>
                <th>Customer Name</th>
                <th>Contact</th>
                <th>Product / Service</th>
                <th>Amount</th>
                <th>Date & Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p, idx) => (
                <tr key={p.txnid || idx}>
                  <td style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#fbbf24' }}>{p.txnid}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#cbd5e1' }}>{p.easebuzzId || 'EZB_N/A'}</td>
                  <td><strong style={{ color: '#fff' }}>{p.firstname}</strong></td>
                  <td>
                    <span style={{ display: 'block', fontSize: '0.85rem' }}>{p.phone}</span>
                    <small style={{ color: '#64748b' }}>{p.email}</small>
                  </td>
                  <td>{p.productinfo}</td>
                  <td><strong style={{ color: '#34d399', fontSize: '1rem' }}>₹{p.amount}</strong></td>
                  <td>{p.date}</td>
                  <td>
                    <span className={`status-badge ${p.status === 'SUCCESS' ? 'success' : 'warning'}`}>
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
  );
}
