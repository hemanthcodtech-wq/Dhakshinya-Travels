import { useEffect, Fragment } from 'react';
import { Navigate, Routes, Route, useParams } from 'react-router-dom';
import Lenis from 'lenis';
import SplashScreen from './components/SplashScreen';
import Layout from './components/Layout';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import VehicleDetails from './pages/VehicleDetails';
import ServiceLanding from './pages/ServiceLanding';
import Tours from './pages/Tours';
import TourDetail from './pages/TourDetail';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogIndex from './pages/BlogIndex';
import VehiclesGallery from './pages/VehiclesGallery';
import About from './pages/About';
import Contact from './pages/Contact';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import PaymentStatus from './pages/PaymentStatus';
import Cabs from './pages/Cabs';
import CabRoutePage from './pages/CabRoutePage';
import { cabRoutes } from './data/cabRoutes';
import { blogPosts } from './data/blogData';

function BlogRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/${slug}`} replace />;
}

// Context Providers
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';

// Admin Panel Module
import AdminProtectedRoute from './admin/AdminProtectedRoute';
import AdminLogin from './admin/AdminLogin';
import AdminLayout from './admin/AdminLayout';
import AdminDashboard from './admin/AdminDashboard';
import AdminFleets from './admin/AdminFleets';
import AdminTours from './admin/AdminTours';
import AdminDestinations from './admin/AdminDestinations';
import AdminBlogs from './admin/AdminBlogs';
import AdminQueries from './admin/AdminQueries';
import AdminPayments from './admin/AdminPayments';
import AdminSettings from './admin/AdminSettings';

const serviceRouteAliases = [
  ['/car-rentals-in-tirupati', 'car-rentals-in-tirupati'],
  ['/tempo-traveller-rental-in-tirupati', 'tempo-traveller-rental-in-tirupati'],
  ['/force-urbania-rental-in-tirupati', 'urbania-traveller-rental-in-tirupati'],
  ['/urbania-traveller-rental-in-tirupati', 'urbania-traveller-rental-in-tirupati'],
  ['/bus-rental-in-tirupati', 'bus-rental-in-tirupati'],
  ['/outstation-taxi-service-in-tirupati', 'outstation-taxi-in-tirupati'],
  ['/outstation-taxi-in-tirupati', 'outstation-taxi-in-tirupati'],
  ['/taxi-service-in-tirupati', 'taxi-in-tirupati'],
  ['/taxi-in-tirupati', 'taxi-in-tirupati'],
  ['/tirupati-airport-taxi-service', 'tirupati-airport-taxi'],
  ['/tirupati-airport-taxi', 'tirupati-airport-taxi'],
  ['/car-for-rent-in-tirupati', 'car-for-rent-in-tirupati-day-rentals'],
  ['/car-for-rent-in-tirupati-day-rentals', 'car-for-rent-in-tirupati-day-rentals']
];

const packageRouteSlugs = [
  'local-packages',
  'outstation-packages',
  'balaji-darshan-packages',
  'corporate-packages',
  'customized-packages',
  'holiday-packages',
  'family-packages',
  'student-packages',
  'wedding-packages',
  'devotional-packages'
];

export default function App() {
  useEffect(() => {
    const l = new Lenis({ lerp: 0.08 });
    let id;
    const f = t => {
      l.raf(t);
      id = requestAnimationFrame(f);
    };
    id = requestAnimationFrame(f);
    return () => {
      cancelAnimationFrame(id);
      l.destroy();
    };
  }, []);

  return (
    <AuthProvider>
      <DataProvider>
        <SplashScreen />
        <Routes>
          {/* Admin Login */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Protected Panel Routes */}
          <Route element={<AdminProtectedRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/fleets" element={<AdminFleets />} />
              <Route path="/admin/tours" element={<AdminTours />} />
              <Route path="/admin/destinations" element={<AdminDestinations />} />
              <Route path="/admin/blogs" element={<AdminBlogs />} />
              <Route path="/admin/queries" element={<AdminQueries />} />
              <Route path="/admin/payments" element={<AdminPayments />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
            </Route>
          </Route>

          {/* Public Website Routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cabs" element={<Cabs />} />
            <Route path="/tirupati-cabs-service" element={<Cabs />} />
            <Route path="/cabs-service" element={<Cabs />} />
            
            {/* Fixed routes for exact cab slugs */}
            {cabRoutes.map(route => {
              const baseSlug = route.slug.replace(/-distance$/, '');
              return (
                <Fragment key={route.slug}>
                  <Route path={`/tirupati-cabs/${route.slug}`} element={<CabRoutePage route={route} />} />
                  <Route path={`/tirupati-cabs/${baseSlug}`} element={<CabRoutePage route={route} />} />
                  <Route path={`/cabs/${route.slug}`} element={<CabRoutePage route={route} />} />
                  <Route path={`/cabs/${baseSlug}`} element={<CabRoutePage route={route} />} />
                </Fragment>
              );
            })}

            {/* Dynamic fallback for cab routes */}
            <Route path="/tirupati-cabs/:slug" element={<CabRoutePage />} />
            <Route path="/cabs/:slug" element={<CabRoutePage />} />

            <Route path="/cabs/rentals" element={<Navigate to="/fleet#rentals" replace />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/vehicles-gallery" element={<VehiclesGallery />} />
            <Route path="/gallery" element={<VehiclesGallery />} />
            <Route path="/fleet/:vehicleId" element={<VehicleDetails />} />
            <Route path="/services" element={<Services />} />

            {/* Vehicle / Taxi Service Aliases */}
            {serviceRouteAliases.map(([path, slug]) => (
              <Route key={path} path={path} element={<ServiceLanding slug={slug} />} />
            ))}

            {/* 10 Package Routes under /services/ and root */}
            {packageRouteSlugs.map(slug => (
              <Fragment key={slug}>
                <Route path={`/services/${slug}`} element={<ServiceLanding slug={slug} />} />
                <Route path={`/${slug}`} element={<ServiceLanding slug={slug} />} />
              </Fragment>
            ))}

            {/* Dynamic fallback for services */}
            <Route path="/services/:slug" element={<ServiceLanding />} />

            <Route path="/tours" element={<Tours />} />
            <Route path="/tour/:slug" element={<TourDetail />} />
            <Route path="/tours/:slug" element={<TourDetail />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destination/:slug" element={<DestinationDetail />} />
            <Route path="/destinations/:slug" element={<DestinationDetail />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blogs" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="/blogs/:slug" element={<Blog />} />

            {/* Direct Root Blog Post Slugs */}
            {blogPosts.map(post => (
              <Route key={post.slug} path={`/${post.slug}`} element={<Blog post={post} />} />
            ))}

            {/* Payment Gateway Callback Landing */}
            <Route path="/payment-status" element={<PaymentStatus />} />

            {/* More Dropdown Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/refund-and-cancellation-policy" element={<RefundPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
          </Route>
        </Routes>
      </DataProvider>
    </AuthProvider>
  );
}
