import { useState } from 'react';
import { Plus, Edit2, Trash2, X, Compass, ChevronDown, ChevronUp, ExternalLink, Loader2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import { packageDetails } from '../data/packageDetails';
import ImageUploadInput from './ImageUploadInput';
import './Admin.css';

const emptyTour = ['New Tour Package', '1 Day', 'Tirupati → Tirumala → Tirupati', '₹2,499', 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1786733399/8d17421f-0c51-490c-9fd1-34615a6a9dbd.png'];

function getFleetFares(title, basePriceStr) {
  // If exact package exists in packageDetails dictionary, use its predefined pricing
  if (title && packageDetails[title]?.prices && packageDetails[title].prices.length > 0) {
    return packageDetails[title].prices;
  }
  
  // Otherwise, calculate dynamic rates for the entire fleet based on the starting base price
  const baseNum = parseInt((basePriceStr || '2999').replace(/[^0-9]/g, ''), 10) || 2999;
  return [
    ['Sedan (4 Seater)', `₹${baseNum.toLocaleString('en-IN')}`],
    ['Ertiga (6 Seater)', `₹${(Math.round((baseNum * 1.30) / 100) * 100).toLocaleString('en-IN')}`],
    ['Innova Crysta (7 Seater)', `₹${(Math.round((baseNum * 1.55) / 100) * 100).toLocaleString('en-IN')}`],
    ['Hycross (7 Seater)', `₹${(Math.round((baseNum * 1.85) / 100) * 100).toLocaleString('en-IN')}`],
    ['Fortuner (7 Seater)', `₹${(Math.round((baseNum * 2.40) / 100) * 100).toLocaleString('en-IN')}`],
    ['Tempo Traveller 12 Seater', `₹${(Math.round((baseNum * 1.85) / 100) * 100).toLocaleString('en-IN')}`],
    ['Urbania 12 Seater', `₹${(Math.round((baseNum * 2.40) / 100) * 100).toLocaleString('en-IN')}`],
    ['Tempo Traveller 16 Seater', `₹${(Math.round((baseNum * 2.10) / 100) * 100).toLocaleString('en-IN')}`],
    ['Urbania 16 Seater', `₹${(Math.round((baseNum * 2.70) / 100) * 100).toLocaleString('en-IN')}`],
    ['Tempo Traveller 20 Seater', `₹${(Math.round((baseNum * 2.60) / 100) * 100).toLocaleString('en-IN')}`],
    ['Mini Bus 27 Seater', `₹${(Math.round((baseNum * 3.20) / 100) * 100).toLocaleString('en-IN')}`],
  ];
}

export default function AdminTours() {
  const { tours, addTour, updateTour, deleteTour } = useData();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    route: '',
    price: '',
    image: '',
    prices: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingIndex, setDeletingIndex] = useState(null);

  const handleOpenAdd = () => {
    setEditingIndex(null);
    setFormData({
      title: '',
      duration: '',
      route: '',
      price: '',
      image: '',
      prices: getFleetFares('', '3000')
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (t, idx) => {
    setEditingIndex(idx);
    const existingPrices = (t[6] && Array.isArray(t[6]) && t[6].length > 0)
      ? t[6]
      : getFleetFares(t[0], t[3]);

    setFormData({
      title: t[0],
      duration: t[1],
      route: t[2],
      price: t[3],
      image: t[4],
      prices: existingPrices
    });
    setModalOpen(true);
  };

  // Recalculates all vehicle rates from the starting base price
  const handleRecalculatePrices = (newBasePrice) => {
    const calculated = getFleetFares(formData.title, newBasePrice);
    setFormData(prev => ({
      ...prev,
      price: newBasePrice,
      prices: calculated
    }));
  };

  // Updates single vehicle price directly
  const handleVehiclePriceChange = (vIndex, newPrice) => {
    const updated = [...formData.prices];
    updated[vIndex] = [updated[vIndex][0], newPrice];
    setFormData(prev => ({ ...prev, prices: updated }));
  };

  const handleDelete = async (idx, title) => {
    if (window.confirm(`Are you sure you want to delete tour package: "${title}"?`)) {
      setDeletingIndex(idx);
      try {
        await deleteTour(idx);
      } finally {
        setDeletingIndex(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const tourArray = [
      formData.title,
      formData.duration,
      formData.route,
      formData.price,
      formData.image,
      undefined,
      formData.prices
    ];
    try {
      if (editingIndex !== null) {
        await updateTour(editingIndex, tourArray);
      } else {
        await addTour(tourArray);
      }
      setModalOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="admin-card">
        <div className="card-top-bar">
          <div>
            <h2>Tour Packages Management ({tours.length})</h2>
            <p style={{ color: 'var(--admin-text-muted)', fontSize: '0.85rem', margin: '0.2rem 0 0 0' }}>
              Create, modify or remove pilgrimage tour packages & full vehicle fleet rate cards
            </p>
          </div>
          <button type="button" onClick={handleOpenAdd} className="btn-primary-admin">
            <Plus size={16} /> Add Tour Package
          </button>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Package Title</th>
                <th>Duration</th>
                <th>Route Corridor</th>
                <th>Vehicle Fleet Fares Breakdown</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tours.map((t, idx) => {
                const fleetFares = getFleetFares(t[0], t[3]);
                const isExpanded = expandedIndex === idx;

                return (
                  <tr key={t[0] + idx}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <img src={t[4]} alt={t[0]} className="table-thumb" />
                        <div>
                          <strong style={{ color: '#fff' }}>{t[0]}</strong>
                          <small style={{ display: 'block', color: '#64748b' }}>Starting Base: <strong style={{ color: '#34d399' }}>{t[3]}</strong></small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="status-badge warning">{t[1]}</span>
                    </td>
                    <td>
                      <span style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>{t[2]}</span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Fleet Options ({fleetFares.length}):</span>
                          <button
                            type="button"
                            onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                            className="btn-secondary-admin"
                            style={{
                              padding: '2px 8px',
                              fontSize: '0.72rem',
                              borderColor: 'var(--admin-card-border)',
                              color: isExpanded ? '#fbbf24' : '#cbd5e1',
                              cursor: 'pointer'
                            }}
                          >
                            {isExpanded ? 'Collapse ▲' : 'Show All Fleet Fares ▼'}
                          </button>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', maxWidth: '340px' }}>
                          {(isExpanded ? fleetFares : fleetFares.slice(0, 3)).map(([vehicle, fare], fIdx) => (
                            <span key={fIdx} style={{
                              background: 'rgba(30, 41, 59, 0.85)',
                              border: '1px solid rgba(56, 189, 248, 0.25)',
                              color: '#e2e8f0',
                              fontSize: '0.72rem',
                              padding: '2px 7px',
                              borderRadius: '5px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}>
                              <span style={{ color: '#fbbf24', fontWeight: 600 }}>{vehicle.split(' ')[0]}:</span>
                              <strong style={{ color: '#34d399' }}>{fare}</strong>
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="action-btns">
                        <a
                          href="/tours"
                          target="_blank"
                          rel="noreferrer"
                          className="btn-icon-admin"
                          title="View Live Tour Cards"
                          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                        >
                          <ExternalLink size={14} />
                        </a>
                        <button type="button" onClick={() => handleOpenEdit(t, idx)} className="btn-icon-admin" title="Edit Tour">
                          <Edit2 size={14} />
                        </button>
                        <button 
                          type="button" 
                          disabled={deletingIndex === idx}
                          onClick={() => handleDelete(idx, t[0])} 
                          className="btn-icon-admin danger" 
                          title="Delete Tour"
                        >
                          {deletingIndex === idx ? <Loader2 size={14} className="spin-animate" /> : <Trash2 size={14} />}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit/Add Modal */}
      {modalOpen && (
        <div 
          className="admin-modal-overlay" 
          data-lenis-prevent="true"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="admin-modal" 
            data-lenis-prevent="true"
            onClick={e => e.stopPropagation()}
            onWheel={e => e.stopPropagation()}
          >
            <div className="admin-modal-header">
              <h3>{editingIndex !== null ? 'Edit Tour Package' : 'Add Tour Package'}</h3>
              <button type="button" className="admin-modal-close" onClick={() => setModalOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="modal-form-grid">
              <div className="modal-form-full">
                <label>Package Title *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Tirupati to Kanipakam & Golden Temple Tour"
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                />
              </div>

              <div>
                <label>Duration *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. 1 Day / 3 Days"
                  value={formData.duration}
                  onChange={e => setFormData({ ...formData, duration: e.target.value })}
                />
              </div>

              <div>
                <label>Starting Base Fare (Sedan 4-Seater) *</label>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. ₹2,999"
                    value={formData.price}
                    onChange={e => handleRecalculatePrices(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => handleRecalculatePrices(formData.price)}
                    title="Auto-calculate all vehicle prices based on this base fare"
                    style={{
                      background: '#1e293b',
                      color: '#fbbf24',
                      border: '1px solid #334155',
                      borderRadius: '8px',
                      padding: '0 12px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Auto-Fill
                  </button>
                </div>
              </div>

              <div className="modal-form-full">
                <label>Route Corridor *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Tirupati → Tirumala → Kapila"
                  value={formData.route}
                  onChange={e => setFormData({ ...formData, route: e.target.value })}
                />
              </div>

              <ImageUploadInput
                label="Cover Image Cloudinary URL *"
                value={formData.image}
                onChange={url => setFormData({ ...formData, image: url })}
              />

              {/* DIRECT EDITABLE FLEET FARES CARD */}
              <div className="modal-form-full" style={{ background: '#0b1120', padding: '1rem', borderRadius: '10px', border: '1px solid #1e293b' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                  <label style={{ color: '#fbbf24', fontWeight: 700, margin: 0, fontSize: '0.85rem' }}>
                    🚗 Vehicle Fleet Rates (Directly Editable per Vehicle):
                  </label>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                    Change any vehicle rate individually or click <strong>Auto-Fill</strong> above
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '0.65rem' }}>
                  {(formData.prices || []).map(([vName, vFare], fIdx) => (
                    <div key={fIdx} style={{ background: '#131926', padding: '0.55rem 0.75rem', borderRadius: '8px', border: '1px solid #1e293b' }}>
                      <span style={{ color: '#cbd5e1', fontSize: '0.75rem', display: 'block', marginBottom: '0.3rem', fontWeight: 600 }}>
                        {vName}
                      </span>
                      <input
                        type="text"
                        value={vFare || ''}
                        onChange={e => handleVehiclePriceChange(fIdx, e.target.value)}
                        placeholder="e.g. ₹3,500"
                        style={{
                          width: '100%',
                          background: '#090d16',
                          border: '1px solid #334155',
                          borderRadius: '6px',
                          color: '#34d399',
                          fontWeight: 700,
                          fontSize: '0.82rem',
                          padding: '0.4rem 0.6rem'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-form-full modal-actions">
                <button 
                  type="button" 
                  disabled={isSubmitting}
                  className="btn-secondary-admin" 
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary-admin"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  {isSubmitting && <Loader2 size={16} className="spin-animate" />}
                  {isSubmitting 
                    ? (editingIndex !== null ? 'Saving Changes...' : 'Creating Package...') 
                    : (editingIndex !== null ? 'Save Changes' : 'Create Package')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
