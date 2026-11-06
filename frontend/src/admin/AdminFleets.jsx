import { useState } from 'react';
import { Plus, Edit2, Trash2, X, Car, Luggage, Users, Check, Loader2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import ImageUploadInput from './ImageUploadInput';
import './Admin.css';

const emptyVehicle = {
  id: '',
  name: '',
  category: 'SEDAN',
  seats: '4+1',
  bags: '2',
  image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_800/v1789482140/tirupatibalaji/fleet/cars/etios-new.png',
  local: '₹2,880 / 8 hrs',
  localLong: '₹3,650 / 12 hrs',
  outstation: '₹15/km',
  minimum: '300 km/day',
  fuel: '10 km/l',
  features: 'AC, Music, USB',
  use: 'Economical local and outstation travel.'
};

export default function AdminFleets() {
  const { fleets, addVehicle, updateVehicle, deleteVehicle } = useData();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(emptyVehicle);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const handleOpenAdd = () => {
    setEditingId(null);
    setFormData({ ...emptyVehicle, id: `vehicle-${Date.now()}` });
    setModalOpen(true);
  };

  const handleOpenEdit = (v) => {
    setEditingId(v.id);
    setFormData({
      ...v,
      features: Array.isArray(v.features) ? v.features.join(', ') : v.features || ''
    });
    setModalOpen(true);
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name} from the fleet?`)) {
      setDeletingId(id);
      try {
        await deleteVehicle(id);
      } finally {
        setDeletingId(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formattedData = {
      ...formData,
      features: typeof formData.features === 'string' 
        ? formData.features.split(',').map(s => s.trim()).filter(Boolean) 
        : formData.features
    };

    try {
      if (editingId) {
        await updateVehicle(editingId, formattedData);
      } else {
        await addVehicle(formattedData);
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
            <h2>Vehicle Fleet Management ({fleets.length})</h2>
            <p style={{ color: 'var(--admin-text-muted)', fontSize: '0.85rem', margin: '0.2rem 0 0 0' }}>
              Add, update or remove vehicles and rates displayed across the website
            </p>
          </div>
          <button type="button" onClick={handleOpenAdd} className="btn-primary-admin">
            <Plus size={16} /> Add New Vehicle
          </button>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Vehicle</th>
                <th>Category</th>
                <th>Seats</th>
                <th>Local (8h / 80km)</th>
                <th>Local (12h / 150km)</th>
                <th>Outstation Rate</th>
                <th>Minimum / Day</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {fleets.map(v => (
                <tr key={v.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <img src={v.image} alt={v.name} className="table-thumb" />
                      <div>
                        <strong style={{ color: '#fff' }}>{v.name}</strong>
                        <small style={{ display: 'block', color: '#64748b' }}>{v.use?.slice(0, 35)}...</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="status-badge info">{v.category}</span>
                  </td>
                  <td>{v.seats}</td>
                  <td><strong style={{ color: '#fff' }}>{v.local}</strong></td>
                  <td><strong style={{ color: '#fff' }}>{v.localLong}</strong></td>
                  <td><strong style={{ color: '#34d399' }}>{v.outstation}</strong></td>
                  <td>{v.minimum}</td>
                  <td>
                    <div className="action-btns">
                      <button type="button" onClick={() => handleOpenEdit(v)} className="btn-icon-admin" title="Edit Vehicle">
                        <Edit2 size={14} />
                      </button>
                      <button 
                        type="button" 
                        disabled={deletingId === v.id}
                        onClick={() => handleDelete(v.id, v.name)} 
                        className="btn-icon-admin danger" 
                        title="Delete Vehicle"
                      >
                        {deletingId === v.id ? <Loader2 size={14} className="spin-animate" /> : <Trash2 size={14} />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
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
              <h3>{editingId ? 'Edit Vehicle' : 'Add New Vehicle'}</h3>
              <button type="button" className="admin-modal-close" onClick={() => setModalOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="modal-form-grid">
              <div>
                <label>Vehicle Name *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label>Category *</label>
                <select 
                  value={formData.category}
                  onChange={e => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="SEDAN">SEDAN</option>
                  <option value="MUV">MUV</option>
                  <option value="PREMIUM SUV">PREMIUM SUV</option>
                  <option value="TEMPO TRAVELLER">TEMPO TRAVELLER</option>
                  <option value="PREMIUM URBANIA">PREMIUM URBANIA</option>
                  <option value="MINI BUS">MINI BUS</option>
                  <option value="BUS">BUS</option>
                </select>
              </div>

              <div>
                <label>Seating Capacity *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.seats}
                  onChange={e => setFormData({ ...formData, seats: e.target.value })}
                />
              </div>

              <div>
                <label>Luggage Capacity</label>
                <input 
                  type="text" 
                  value={formData.bags}
                  onChange={e => setFormData({ ...formData, bags: e.target.value })}
                />
              </div>

              <div>
                <label>Local Rate (8 Hours / 80 KMs) *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.local}
                  onChange={e => setFormData({ ...formData, local: e.target.value })}
                />
              </div>

              <div>
                <label>Local Rate (12 Hours / 150 KMs) *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.localLong}
                  onChange={e => setFormData({ ...formData, localLong: e.target.value })}
                />
              </div>

              <div>
                <label>Outstation Per KM Rate *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.outstation}
                  onChange={e => setFormData({ ...formData, outstation: e.target.value })}
                />
              </div>

              <div>
                <label>Minimum KMs / Day *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.minimum}
                  onChange={e => setFormData({ ...formData, minimum: e.target.value })}
                />
              </div>

              <ImageUploadInput
                label="Vehicle Image Cloudinary URL *"
                value={formData.image}
                onChange={url => setFormData({ ...formData, image: url })}
              />

              <div className="modal-form-full">
                <label>Features (comma separated)</label>
                <input 
                  type="text" 
                  value={formData.features}
                  onChange={e => setFormData({ ...formData, features: e.target.value })}
                />
              </div>

              <div className="modal-form-full">
                <label>Best For / Use Description</label>
                <textarea 
                  rows="2"
                  value={formData.use}
                  onChange={e => setFormData({ ...formData, use: e.target.value })}
                />
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
                    ? (editingId ? 'Saving Changes...' : 'Creating Vehicle...') 
                    : (editingId ? 'Save Changes' : 'Create Vehicle')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
