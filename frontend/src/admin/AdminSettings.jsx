import { useState } from 'react';
import { Key, ShieldAlert, CheckCircle2, RefreshCw, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import './Admin.css';

export default function AdminSettings() {
  const { credentials, updateCredentials } = useAuth();
  const { resetToDefaults } = useData();

  // Password state
  const [adminUser, setAdminUser] = useState(credentials.username);
  const [newPassword, setNewPassword] = useState('');
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [isSavingPassword, setIsSavingPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSavePassword = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (newPassword.trim().length >= 4) {
      setIsSavingPassword(true);
      try {
        const res = await updateCredentials(adminUser, newPassword);
        if (res.success) {
          setPasswordSaved(true);
          setNewPassword('');
          setTimeout(() => setPasswordSaved(false), 4000);
        } else {
          setErrorMessage(res.message || 'Failed to update credentials in database.');
        }
      } catch (err) {
        setErrorMessage('Server connection error updating credentials.');
      } finally {
        setIsSavingPassword(false);
      }
    } else {
      setErrorMessage('Password must be at least 4 characters long.');
    }
  };

  const handleResetData = () => {
    if (window.confirm('Resetting data will restore all Fleets, Tours, Destinations, Blogs, and Queries to initial demo defaults. Continue?')) {
      resetToDefaults();
      alert('Application data reset to defaults.');
      window.location.reload();
    }
  };

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      {/* Admin Credentials & Reset */}
      <div className="admin-card">
        <div className="card-top-bar">
          <h2>Admin Credentials Settings</h2>
        </div>

        {passwordSaved && (
          <div className="status-badge success" style={{ marginBottom: '1rem', width: '100%', textAlign: 'center', padding: '0.6rem' }}>
            <CheckCircle2 size={16} style={{ display: 'inline', marginRight: 4 }} /> Admin Credentials Updated in Database!
          </div>
        )}

        {errorMessage && (
          <div style={{ marginBottom: '1rem', width: '100%', textAlign: 'center', padding: '0.6rem', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', fontSize: '0.85rem' }}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSavePassword} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <label>Admin Username *</label>
            <input 
              type="text" 
              required
              value={adminUser}
              onChange={e => setAdminUser(e.target.value)}
            />
          </div>

          <div>
            <label>New Password *</label>
            <input 
              type="password" 
              required
              placeholder="Enter new admin password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            disabled={isSavingPassword}
            className="btn-primary-admin"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            {isSavingPassword && <Loader2 size={16} className="spin-animate" />}
            {isSavingPassword ? 'Updating Credentials...' : 'Update Credentials'}
          </button>
        </form>

        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--admin-card-border)' }}>
          <h3 style={{ color: '#ef4444', fontSize: '1rem', margin: '0 0 0.5rem 0', fontWeight: 800 }}>
            Reset Application Data
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--admin-text-muted)', marginBottom: '1rem' }}>
            Restores all Fleets, Tours, Destinations, Blogs, and Queries to default seed data.
          </p>
          <button type="button" onClick={handleResetData} className="logout-btn" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
            <RefreshCw size={16} /> Reset All Data to Demo Defaults
          </button>
        </div>
      </div>
    </div>
  );
}
