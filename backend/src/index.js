import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testConnection } from './config/db.js';
import { initializeDatabase } from './config/schema.js';
import queryRoutes from './routes/queryRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import contentRoutes from './routes/contentRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map(o => o.trim().replace(/\/+$/, ''))
  .filter(Boolean);

// Always allow standard local dev and production vercel urls if not explicitly disabled
const defaultOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://dhakshinya-travels.vercel.app',
  'https://balaji-travels-six.vercel.app'
];

defaultOrigins.forEach(origin => {
  if (!allowedOrigins.includes(origin)) {
    allowedOrigins.push(origin);
  }
});

app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps, curl, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
      return callback(null, true);
    }
    // Also allow any preview deployments on Vercel
    if (/^https:\/\/dhakshinya-travels.*\.vercel\.app$/.test(origin) || /^https:\/\/balaji-travels.*\.vercel\.app$/.test(origin)) {
      return callback(null, true);
    }
    return callback(null, true); // Fallback to permissive for safe API access
  },
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Disable caching for dynamic API endpoints so browsers and CDNs always fetch fresh DB data
app.use('/api', (req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'TTD Travels Backend',
  });
});

// Feature Routes
app.use('/api/queries', queryRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/auth', authRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({ success: false, message: 'Internal server error.' });
});

// Start Server
app.listen(PORT, async () => {
  console.log(`🚀 TTD Travels Backend Server is running on port ${PORT}`);
  await testConnection();
  await initializeDatabase();
});
