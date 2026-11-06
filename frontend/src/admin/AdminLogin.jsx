import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, User, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Admin.css';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.body.classList.add('admin-body-active');
    return () => {
      document.body.classList.remove('admin-body-active');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const res = await login(username, password);
      if (res.success) {
        navigate('/admin/dashboard', { replace: true });
      } else {
        setError(res.message || 'Invalid username or password');
      }
    } catch (err) {
      setError('Connection error logging in.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <div className="admin-brand-icon">
            <ShieldCheck size={32} />
          </div>
          <h2>Tirupati Balaji Admin</h2>
          <p>Control Center & Portal Management</p>
        </div>

        {error && (
          <div className="admin-error-banner">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-input-group">
            <label>Username</label>
            <div className="input-with-icon">
              <User size={18} className="field-icon" />
              <input 
                type="text" 
                required
                placeholder="Enter username" 
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="admin-input-group">
            <label>Password</label>
            <div className="input-with-icon">
              <Lock size={18} className="field-icon" />
              <input 
                type="password" 
                required
                placeholder="Enter password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" disabled={isLoading} className="admin-submit-btn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            {isLoading && <Loader2 size={18} className="spin-animate" />}
            {isLoading ? 'Authenticating...' : 'Sign In to Admin Panel'} {!isLoading && <ArrowRight size={18} />}
          </button>
        </form>
      </div>
    </div>
  );
}
