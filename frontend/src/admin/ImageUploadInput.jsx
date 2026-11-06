import { useState, useRef } from 'react';
import { Upload, Loader2, CheckCircle2, Image as ImageIcon, AlertCircle } from 'lucide-react';

const API_BASE = import.meta.env?.VITE_BACKEND_URL || 'https://api.taxi-in-tirupati.com/api';

export default function ImageUploadInput({ label = 'Image Cloudinary URL *', value, onChange, placeholder = 'https://res.cloudinary.com/...' }) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError('');
    setUploadSuccess(false);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const res = await fetch(`${API_BASE}/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.success && data.url) {
        onChange(data.url);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      } else {
        setUploadError(data.message || 'Upload failed. Please check Cloudinary credentials.');
      }
    } catch (err) {
      console.error('Upload request failed:', err);
      setUploadError('Failed to connect to backend upload server.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="modal-form-full" style={{ marginBottom: '0.85rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
        <label style={{ margin: 0, fontWeight: 700, fontSize: '0.85rem', color: '#cbd5e1' }}>
          {label}
        </label>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          style={{
            background: 'linear-gradient(135deg, #e5a919 0%, #c68a0a 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '4px 10px',
            fontSize: '0.75rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          {isUploading ? <Loader2 size={13} className="spin-animate" /> : <Upload size={13} />}
          {isUploading ? 'Uploading to Cloudinary...' : 'Upload File to Cloudinary'}
        </button>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />

      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <input
          type="text"
          required
          placeholder={placeholder}
          value={value || ''}
          onChange={e => onChange(e.target.value)}
          style={{
            flex: 1,
            padding: '0.65rem 0.8rem',
            borderRadius: '8px',
            background: 'var(--admin-bg, #0b1120)',
            border: '1px solid var(--admin-card-border, #1e293b)',
            color: '#fff',
            fontSize: '0.85rem',
          }}
        />
        {value && (
          <div style={{
            width: 42,
            height: 42,
            borderRadius: 6,
            overflow: 'hidden',
            border: '1px solid #334155',
            flexShrink: 0,
            background: '#0f172a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
              src={value}
              alt="Preview"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        )}
      </div>

      {uploadSuccess && (
        <small style={{ color: '#34d399', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '0.35rem' }}>
          <CheckCircle2 size={13} /> Uploaded to Cloudinary successfully!
        </small>
      )}

      {uploadError && (
        <small style={{ color: '#f87171', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '0.35rem' }}>
          <AlertCircle size={13} /> {uploadError}
        </small>
      )}
    </div>
  );
}
