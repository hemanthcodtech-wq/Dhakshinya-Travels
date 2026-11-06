import { useState } from 'react';
import { Plus, Edit2, Trash2, X, ExternalLink, Loader2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import ImageUploadInput from './ImageUploadInput';
import './Admin.css';

const emptyBlog = {
  id: '',
  slug: '',
  title: '',
  category: 'Pilgrimage Guide',
  author: 'Balaji Travel Team',
  date: '',
  readTime: '5 min read',
  image: '',
  snippet: ''
};

function slugify(text) {
  return (text || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default function AdminBlogs() {
  const { blogs, addBlog, updateBlog, deleteBlog } = useData();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(emptyBlog);
  const [userEditedSlug, setUserEditedSlug] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const handleOpenAdd = () => {
    setEditingId(null);
    setUserEditedSlug(false);
    setFormData({
      ...emptyBlog,
      id: String(Date.now()),
      title: '',
      slug: '',
      snippet: ''
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (b) => {
    setEditingId(b.id);
    setUserEditedSlug(true);
    setFormData({ ...b, slug: b.slug || slugify(b.title) });
    setModalOpen(true);
  };

  const handleDelete = async (id, title) => {
    if (window.confirm(`Are you sure you want to delete blog article: "${title}"?`)) {
      setDeletingId(id);
      try {
        await deleteBlog(id);
      } finally {
        setDeletingId(null);
      }
    }
  };

  const handleTitleChange = (e) => {
    const val = e.target.value;
    if (!userEditedSlug && !editingId) {
      setFormData(prev => ({
        ...prev,
        title: val,
        slug: slugify(val)
      }));
    } else {
      setFormData(prev => ({ ...prev, title: val }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const finalData = {
      ...formData,
      slug: formData.slug || slugify(formData.title)
    };

    try {
      if (editingId) {
        await updateBlog(editingId, finalData);
      } else {
        await addBlog(finalData);
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
            <h2>Blog Posts & Guides Management ({blogs.length})</h2>
            <p style={{ color: 'var(--admin-text-muted)', fontSize: '0.85rem', margin: '0.2rem 0 0 0' }}>
              Publish, edit or remove travel blogs and pilgrimage guides on the website
            </p>
          </div>
          <button type="button" onClick={handleOpenAdd} className="btn-primary-admin">
            <Plus size={16} /> Write New Article
          </button>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Article Title</th>
                <th>URL Slug</th>
                <th>Category</th>
                <th>Author</th>
                <th>Read Time</th>
                <th>Published Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(b => (
                <tr key={b.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <img src={b.image} alt={b.title} className="table-thumb" />
                      <div>
                        <strong style={{ color: '#fff' }}>{b.title}</strong>
                        <small style={{ display: 'block', color: '#64748b' }}>{b.snippet?.slice(0, 45)}...</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <code style={{ color: '#fbbf24', fontSize: '0.8rem' }}>/{b.slug}</code>
                  </td>
                  <td>
                    <span className="status-badge info">{b.category}</span>
                  </td>
                  <td>{b.author}</td>
                  <td>{b.readTime}</td>
                  <td>{b.date}</td>
                  <td>
                    <div className="action-btns">
                      <a
                        href={`/${b.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-icon-admin"
                        title="View Live Article"
                        style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
                      >
                        <ExternalLink size={14} />
                      </a>
                      <button type="button" onClick={() => handleOpenEdit(b)} className="btn-icon-admin" title="Edit Article">
                        <Edit2 size={14} />
                      </button>
                      <button 
                        type="button" 
                        disabled={deletingId === b.id}
                        onClick={() => handleDelete(b.id, b.title)} 
                        className="btn-icon-admin danger" 
                        title="Delete Article"
                      >
                        {deletingId === b.id ? <Loader2 size={14} className="spin-animate" /> : <Trash2 size={14} />}
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
              <h3>{editingId ? 'Edit Article' : 'Write New Article'}</h3>
              <button type="button" className="admin-modal-close" onClick={() => setModalOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="modal-form-grid">
              <div className="modal-form-full">
                <label>Article Title *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.title}
                  onChange={handleTitleChange}
                />
              </div>

              <div className="modal-form-full">
                <label>URL Slug * (Root Link)</label>
                <input 
                  type="text" 
                  required 
                  value={formData.slug}
                  onChange={e => {
                    setUserEditedSlug(true);
                    setFormData({ ...formData, slug: slugify(e.target.value) });
                  }}
                />
                <small style={{ color: '#fbbf24', marginTop: '0.25rem', display: 'block' }}>
                  Live Article Path: <strong>/{formData.slug || 'slug'}</strong>
                </small>
              </div>

              <div>
                <label>Category *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.category}
                  onChange={e => setFormData({ ...formData, category: e.target.value })}
                />
              </div>

              <div>
                <label>Author *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.author}
                  onChange={e => setFormData({ ...formData, author: e.target.value })}
                />
              </div>

              <div>
                <label>Read Time *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.readTime}
                  onChange={e => setFormData({ ...formData, readTime: e.target.value })}
                />
              </div>

              <div>
                <label>Published Date *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              <ImageUploadInput
                label="Cover Image Cloudinary URL *"
                value={formData.image}
                onChange={url => setFormData({ ...formData, image: url })}
              />

              <div className="modal-form-full">
                <label>Snippet / Summary Description *</label>
                <textarea 
                  rows="3"
                  required
                  value={formData.snippet}
                  onChange={e => setFormData({ ...formData, snippet: e.target.value })}
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
                    ? (editingId ? 'Saving Changes...' : 'Publishing Article...') 
                    : (editingId ? 'Save Changes' : 'Publish Article')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
