import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, XCircle, ArrowLeft, Calendar, FileText, Phone } from 'lucide-react';

export default function PaymentStatus() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status') || 'UNKNOWN';
  const txnid = searchParams.get('txnid') || '';
  const paymentId = searchParams.get('razorpay_payment_id') || searchParams.get('easebuzz_id') || '';
  const amount = searchParams.get('amount') || '';
  const isSuccess = status.toUpperCase() === 'SUCCESS';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      backgroundColor: '#f8fafc',
    }}>
      <div style={{
        maxWidth: '540px',
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '2.5rem 2rem',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
        textAlign: 'center',
        border: '1px solid #e2e8f0',
      }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: isSuccess ? '#ecfdf5' : '#fef2f2',
          color: isSuccess ? '#059669' : '#dc2626',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
        }}>
          {isSuccess ? <CheckCircle2 size={44} /> : <XCircle size={44} />}
        </div>

        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: 800,
          color: isSuccess ? '#065f46' : '#991b1b',
          marginBottom: '0.5rem',
        }}>
          {isSuccess ? 'Payment Successful!' : 'Payment Failed'}
        </h1>

        <p style={{
          color: '#64748b',
          fontSize: '0.95rem',
          marginBottom: '1.75rem',
          lineHeight: 1.5,
        }}>
          {isSuccess
            ? 'Thank you! Your advance booking has been confirmed via Razorpay.'
            : 'We could not complete your payment transaction. Please try again or reach out to our team.'}
        </p>

        {/* Transaction Summary Card */}
        <div style={{
          backgroundColor: '#f8fafc',
          borderRadius: '12px',
          padding: '1.25rem',
          textAlign: 'left',
          marginBottom: '1.75rem',
          border: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          fontSize: '0.9rem',
        }}>
          {txnid && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b' }}>Transaction ID:</span>
              <strong style={{ color: '#0f172a', fontFamily: 'monospace' }}>{txnid}</strong>
            </div>
          )}
          {paymentId && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b' }}>Payment Ref ID:</span>
              <strong style={{ color: '#0f172a', fontFamily: 'monospace' }}>{paymentId}</strong>
            </div>
          )}
          {amount && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b' }}>Amount Paid:</span>
              <strong style={{ color: '#059669', fontSize: '1.1rem' }}>₹{amount}</strong>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#64748b' }}>Status:</span>
            <span style={{
              fontWeight: 700,
              color: isSuccess ? '#059669' : '#dc2626',
              textTransform: 'uppercase',
            }}>
              {status}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {isSuccess && (
            <button
              type="button"
              onClick={() => window.print()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                backgroundColor: '#10b981',
                color: '#ffffff',
                padding: '0.85rem 1.5rem',
                borderRadius: '10px',
                border: 'none',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              <FileText size={18} /> Download / Print Tax Receipt 🖨️
            </button>
          )}

          <a
            href={`https://wa.me/919014677289?text=${encodeURIComponent(
              isSuccess
                ? `Hi Dhakshinya Tours & Travels! I have completed advance booking payment of ₹${amount}. Txn ID: ${txnid}, Easebuzz Ref: ${easebuzzId}. Please confirm vehicle assignment.`
                : `Hi! My payment for Txn ID: ${txnid} failed. Can you please assist me with booking confirmation?`
            )}`}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              backgroundColor: '#25D366',
              color: '#ffffff',
              padding: '0.85rem 1.5rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
            }}
          >
            Confirm on WhatsApp 💬
          </a>

          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              backgroundColor: '#e5a919',
              color: '#ffffff',
              padding: '0.85rem 1.5rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
              transition: 'background-color 0.2s',
            }}
          >
            <ArrowLeft size={18} /> Return to Home
          </Link>

          <a
            href="tel:+919014677289"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              backgroundColor: '#f1f5f9',
              color: '#334155',
              padding: '0.75rem 1.5rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
            }}
          >
            <Phone size={16} /> Need help? Call +91 90146 77289
          </a>
        </div>
      </div>
    </div>
  );
}
