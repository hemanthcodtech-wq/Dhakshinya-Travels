import { useState } from 'react';
import { MessageSquare, Phone, Trash2, CheckCircle2, Clock, XCircle, MessageCircle, Loader2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import { whatsappBooking } from '../data/siteData';
import './Admin.css';

export default function AdminQueries() {
  const { queries, updateQueryStatus, deleteQuery } = useData();
  const [filterStatus, setFilterStatus] = useState('All');
  const [deletingId, setDeletingId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  const filteredQueries = queries.filter(q => {
    if (filterStatus === 'All') return true;
    return q.status === filterStatus;
  });

  const handleWhatsAppContact = (query) => {
    const msg = `Hi ${query.name}, we received your enquiry for ${query.from} to ${query.to} on ${query.date}. How can we assist you?`;
    window.open(whatsappBooking(msg), '_blank', 'noopener,noreferrer');
  };

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      await updateQueryStatus(id, newStatus);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete enquiry ${id} from ${name}?`)) {
      setDeletingId(id);
      try {
        await deleteQuery(id);
      } finally {
        setDeletingId(null);
      }
    }
  };

  return (
    <div>
      <div className="admin-card">
        <div className="card-top-bar">
          <div>
            <h2>Customer Booking Enquiries ({queries.length})</h2>
            <p style={{ color: 'var(--admin-text-muted)', fontSize: '0.85rem', margin: '0.2rem 0 0 0' }}>
              Track, manage and reply to cab enquiry requests submitted by site visitors
            </p>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {['All', 'Pending', 'Contacted', 'Confirmed', 'Cancelled'].map(status => (
              <button
                key={status}
                type="button"
                onClick={() => setFilterStatus(status)}
                className={`btn-secondary-admin ${filterStatus === status ? 'active' : ''}`}
                style={{
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.8rem',
                  background: filterStatus === status ? 'var(--admin-primary)' : 'transparent',
                  color: filterStatus === status ? '#fff' : '#cbd5e1',
                  borderColor: filterStatus === status ? 'var(--admin-primary)' : 'var(--admin-card-border)'
                }}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer Details</th>
                <th>Trip Details</th>
                <th>Travel Date</th>
                <th>Requested Vehicle</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredQueries.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: 'var(--admin-text-muted)' }}>
                    No customer enquiries found matching status "{filterStatus}".
                  </td>
                </tr>
              ) : (
                filteredQueries.map(q => (
                  <tr key={q.id}>
                    <td><code style={{ color: '#fbbf24' }}>{q.id}</code></td>
                    <td>
                      <strong style={{ color: '#fff' }}>{q.name}</strong>
                      <small style={{ display: 'block', color: '#64748b' }}>{q.phone}</small>
                    </td>
                    <td>
                      <span style={{ display: 'block', fontWeight: 600 }}>{q.from} → {q.to}</span>
                      <small style={{ color: '#64748b' }}>{q.trip}</small>
                    </td>
                    <td>{q.date}</td>
                    <td>{q.vehicle || 'Standard Cab'}</td>
                    <td>
                      <select
                        value={q.status}
                        disabled={updatingId === q.id}
                        onChange={e => handleStatusChange(q.id, e.target.value)}
                        style={{
                          padding: '0.25rem 0.5rem',
                          borderRadius: 6,
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          background: '#0b111e',
                          color: q.status === 'Confirmed' ? '#34d399' : q.status === 'Pending' ? '#fbbf24' : '#fbbf24',
                          border: '1px solid #334155'
                        }}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td>
                      <div className="action-btns">
                        <button 
                          type="button" 
                          onClick={() => handleWhatsAppContact(q)} 
                          className="btn-icon-admin" 
                          title="Reply on WhatsApp"
                          style={{ color: '#22c55e', borderColor: 'rgba(34, 197, 94, 0.3)' }}
                        >
                          <MessageCircle size={15} />
                        </button>
                        <button 
                          type="button" 
                          disabled={deletingId === q.id}
                          onClick={() => handleDelete(q.id, q.name)} 
                          className="btn-icon-admin danger" 
                          title="Delete Query"
                        >
                          {deletingId === q.id ? <Loader2 size={14} className="spin-animate" /> : <Trash2 size={14} />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
