import { createContext, useContext, useState, useEffect } from 'react';
import { fleet as defaultFleet } from '../data/fleetData';
import { tours as defaultTours } from '../data/siteData';
import { destinations as defaultDestinations } from '../data/siteData';
import { blogPosts as defaultBlogs } from '../data/blogData';
import { samplePayments } from '../services/easebuzzService';

const DataContext = createContext();

const API_BASE = import.meta.env?.VITE_BACKEND_URL || 'https://api.taxi-in-tirupati.com/api';

export function DataProvider({ children }) {
  const [fleets, setFleets] = useState(defaultFleet);
  const [tours, setTours] = useState(defaultTours);
  const [destinations, setDestinations] = useState(defaultDestinations);
  const [blogs, setBlogs] = useState(defaultBlogs);
  const [queries, setQueries] = useState([]);
  const [payments, setPayments] = useState(samplePayments);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const selectBooking = (bookingData) => {
    setSelectedBooking(bookingData);
  };

  // Fetch all real-time data from Neon DB backend
  const loadNeonData = async () => {
    try {
      const fetchOptions = { cache: 'no-store' };
      const [fleetsRes, toursRes, destsRes, blogsRes, queriesRes, paymentsRes] = await Promise.all([
        fetch(`${API_BASE}/content/fleets`, fetchOptions).then(r => r.ok ? r.json() : null).catch(() => null),
        fetch(`${API_BASE}/content/tours`, fetchOptions).then(r => r.ok ? r.json() : null).catch(() => null),
        fetch(`${API_BASE}/content/destinations`, fetchOptions).then(r => r.ok ? r.json() : null).catch(() => null),
        fetch(`${API_BASE}/content/blogs`, fetchOptions).then(r => r.ok ? r.json() : null).catch(() => null),
        fetch(`${API_BASE}/queries`, fetchOptions).then(r => r.ok ? r.json() : null).catch(() => null),
        fetch(`${API_BASE}/payments`, fetchOptions).then(r => r.ok ? r.json() : null).catch(() => null),
      ]);

      if (fleetsRes?.success && fleetsRes.data?.length > 0) {
        const cleanData = fleetsRes.data.filter(v => v.id !== 'vehicle-1792051956694' && (v.name || '').toLowerCase() !== 'hello sarath');
        const formattedFleets = cleanData.map(v => ({
          ...v,
          localLong: v.local_long || v.localLong,
          localKmShort: v.local_km_short || v.localKmShort,
          localKmLong: v.local_km_long || v.localKmLong,
          extraHr: v.extra_hr || v.extraHr,
        }));
        setFleets(formattedFleets);
      }

      if (toursRes?.success && toursRes.data?.length > 0) {
        const formattedTours = toursRes.data.map(t => [
          t.title,
          t.duration,
          t.route,
          t.price,
          t.image,
          t.id,
          t.prices || []
        ]);
        setTours(formattedTours);
      }

      if (destsRes?.success && destsRes.data?.length > 0) {
        const formattedDests = destsRes.data.map(d => [
          d.slug,
          d.name,
          d.desc,
          d.image,
          d.price
        ]);
        setDestinations(formattedDests);
      }

      if (blogsRes?.success && blogsRes.data?.length > 0) {
        const formattedBlogs = blogsRes.data.map(b => ({
          ...b,
          readTime: b.read_time || b.readTime,
          fullContent: b.full_content || b.fullContent,
          quickFacts: b.quick_facts || b.quickFacts,
        }));
        setBlogs(formattedBlogs);
      }

      if (queriesRes?.success && queriesRes.data) {
        setQueries(queriesRes.data);
      }

      if (paymentsRes?.success && paymentsRes.data) {
        const formattedPayments = paymentsRes.data.map(p => ({
          ...p,
          easebuzzId: p.easebuzz_id || p.easebuzzId || 'EZB_PENDING',
          date: p.created_at ? new Date(p.created_at).toLocaleString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }) : (p.date || '—'),
          status: (p.status || 'INITIATED').toUpperCase(),
        }));
        setPayments(formattedPayments);
      }
    } catch (err) {
      console.error('Failed fetching data from Neon DB:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadNeonData();
  }, []);

  // --- Fleet CRUD (Neon DB) ---
  const addVehicle = async (vehicle) => {
    try {
      const res = await fetch(`${API_BASE}/content/fleets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vehicle),
      });
      const data = await res.json();
      if (data.success && data.data) {
        const v = data.data;
        const normalized = {
          ...v,
          localLong: v.local_long || v.localLong,
          localKmShort: v.local_km_short || v.localKmShort,
          localKmLong: v.local_km_long || v.localKmLong,
          extraHr: v.extra_hr || v.extraHr,
        };
        setFleets(prev => [normalized, ...prev.filter(item => item.id !== normalized.id)]);
        return normalized;
      }
    } catch (e) {
      console.error('Failed to add vehicle to DB:', e);
    }
  };

  const updateVehicle = async (id, updatedVehicle) => {
    try {
      // Optimistic update
      setFleets(prev => prev.map(v => (v.id === id ? { ...v, ...updatedVehicle } : v)));

      const res = await fetch(`${API_BASE}/content/fleets/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedVehicle),
      });
      const data = await res.json();
      if (data.success && data.data) {
        const v = data.data;
        const normalized = {
          ...v,
          localLong: v.local_long || v.localLong,
          localKmShort: v.local_km_short || v.localKmShort,
          localKmLong: v.local_km_long || v.localKmLong,
          extraHr: v.extra_hr || v.extraHr,
        };
        setFleets(prev => prev.map(item => (item.id === id ? normalized : item)));
        return normalized;
      }
    } catch (e) {
      console.error('Failed to update vehicle in DB:', e);
    }
  };

  const deleteVehicle = async (id) => {
    try {
      setFleets(prev => prev.filter(v => v.id !== id));
      await fetch(`${API_BASE}/content/fleets/${id}`, { method: 'DELETE' });
    } catch (e) {
      console.error(e);
    }
  };

  // --- Tour CRUD (Neon DB) ---
  const addTour = async (tour) => {
    try {
      const tourObj = Array.isArray(tour) ? {
        title: tour[0],
        duration: tour[1],
        route: tour[2],
        price: tour[3],
        image: tour[4],
        prices: tour[6] || []
      } : tour;

      const res = await fetch(`${API_BASE}/content/tours`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tourObj),
      });
      const data = await res.json();
      if (data.success) {
        const t = data.data;
        setTours(prev => [[t.title, t.duration, t.route, t.price, t.image, t.id, t.prices || []], ...prev]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const updateTour = async (index, updatedTour) => {
    try {
      const targetTour = tours[index];
      const tourId = targetTour[5] || index + 1;
      setTours(prev => prev.map((t, idx) => (idx === index ? updatedTour : t)));

      const tourObj = Array.isArray(updatedTour) ? {
        title: updatedTour[0],
        duration: updatedTour[1],
        route: updatedTour[2],
        price: updatedTour[3],
        image: updatedTour[4],
        prices: updatedTour[6] || targetTour[6] || []
      } : updatedTour;

      const res = await fetch(`${API_BASE}/content/tours/${tourId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tourObj),
      });
      const data = await res.json();
      if (data.success && data.data) {
        const t = data.data;
        const normalized = [t.title, t.duration, t.route, t.price, t.image, t.id, t.prices || []];
        setTours(prev => prev.map((item, idx) => (idx === index ? normalized : item)));
        return normalized;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const deleteTour = async (index) => {
    try {
      const targetTour = tours[index];
      const tourId = targetTour[5] || index + 1;
      setTours(prev => prev.filter((_, idx) => idx !== index));
      await fetch(`${API_BASE}/content/tours/${tourId}`, { method: 'DELETE' });
    } catch (e) {
      console.error(e);
    }
  };

  // --- Destination CRUD (Neon DB) ---
  const addDestination = async (dest) => {
    try {
      const destObj = Array.isArray(dest) ? {
        slug: dest[0],
        name: dest[1],
        desc: dest[2],
        image: dest[3],
        price: dest[4]
      } : dest;

      const res = await fetch(`${API_BASE}/content/destinations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(destObj),
      });
      const data = await res.json();
      if (data.success && data.data) {
        const d = data.data;
        setDestinations(prev => [[d.slug, d.name, d.desc, d.image, d.price], ...prev]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const updateDestination = async (slug, updatedDest) => {
    try {
      setDestinations(prev => prev.map(d => (d[0] === slug ? updatedDest : d)));
      const destObj = Array.isArray(updatedDest) ? {
        name: updatedDest[1],
        desc: updatedDest[2],
        image: updatedDest[3],
        price: updatedDest[4]
      } : updatedDest;

      const res = await fetch(`${API_BASE}/content/destinations/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(destObj),
      });
      const data = await res.json();
      if (data.success && data.data) {
        const d = data.data;
        const normalized = [d.slug, d.name, d.desc, d.image, d.price];
        setDestinations(prev => prev.map(item => (item[0] === slug ? normalized : item)));
        return normalized;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const deleteDestination = async (slug) => {
    try {
      setDestinations(prev => prev.filter(d => d[0] !== slug));
      await fetch(`${API_BASE}/content/destinations/${slug}`, { method: 'DELETE' });
    } catch (e) {
      console.error(e);
    }
  };

  // --- Blog CRUD (Neon DB) ---
  const addBlog = async (blog) => {
    try {
      const res = await fetch(`${API_BASE}/content/blogs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      });
      const data = await res.json();
      if (data.success) {
        setBlogs(prev => [data.data, ...prev]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const updateBlog = async (id, updatedBlog) => {
    try {
      setBlogs(prev => prev.map(b => (b.id === id || b.slug === id ? { ...b, ...updatedBlog } : b)));
      await fetch(`${API_BASE}/content/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBlog),
      });
    } catch (e) {
      console.error(e);
    }
  };

  const deleteBlog = async (id) => {
    try {
      setBlogs(prev => prev.filter(b => b.id !== id && b.slug !== id));
      await fetch(`${API_BASE}/content/blogs/${id}`, { method: 'DELETE' });
    } catch (e) {
      console.error(e);
    }
  };

  // --- Query CRUD (Neon DB) ---
  const addQuery = async (queryData) => {
    try {
      const id = `Q-${Date.now().toString().slice(-4)}`;
      const payload = { id, ...queryData };
      setQueries(prev => [payload, ...prev]);

      await fetch(`${API_BASE}/queries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      return payload;
    } catch (e) {
      console.error(e);
    }
  };

  const updateQueryStatus = async (id, status) => {
    try {
      setQueries(prev => prev.map(q => (q.id === id ? { ...q, status } : q)));
      await fetch(`${API_BASE}/queries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
    } catch (e) {
      console.error(e);
    }
  };

  const deleteQuery = async (id) => {
    try {
      setQueries(prev => prev.filter(q => q.id !== id));
      await fetch(`${API_BASE}/queries/${id}`, { method: 'DELETE' });
    } catch (e) {
      console.error(e);
    }
  };

  // --- Payment Logging ---
  const recordPayment = (paymentData) => {
    const newPayment = {
      date: new Date().toLocaleString(),
      status: 'SUCCESS',
      ...paymentData
    };
    setPayments(prev => [newPayment, ...prev]);
    return newPayment;
  };

  return (
    <DataContext.Provider
      value={{
        fleets,
        tours,
        destinations,
        blogs,
        queries,
        payments,
        isLoading,
        addVehicle,
        updateVehicle,
        deleteVehicle,
        addTour,
        updateTour,
        deleteTour,
        addDestination,
        updateDestination,
        deleteDestination,
        addBlog,
        updateBlog,
        deleteBlog,
        addQuery,
        updateQueryStatus,
        deleteQuery,
        recordPayment,
        selectedBooking,
        selectBooking,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
