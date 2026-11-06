const BACKEND_API_BASE = import.meta.env?.VITE_BACKEND_URL 
  || (window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : 'https://api.taxi-in-tirupati.com/api');

/**
 * Initiates Razorpay Order Creation on Backend
 */
export const initiateRazorpayOrder = async (orderPayload) => {
  try {
    const res = await fetch(`${BACKEND_API_BASE}/payments/create-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload),
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Failed to initiate Razorpay order');
    }
    return data;
  } catch (error) {
    console.error('Error initiating Razorpay order:', error);
    throw error;
  }
};

/**
 * Verifies Razorpay payment signature on backend
 */
export const verifyRazorpayPayment = async (verificationPayload) => {
  try {
    const res = await fetch(`${BACKEND_API_BASE}/payments/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(verificationPayload),
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Failed to verify payment with Razorpay');
    }
    return data;
  } catch (error) {
    console.error('Error verifying Razorpay payment:', error);
    throw error;
  }
};

/**
 * Opens the Official Razorpay Standard Checkout Popup
 */
export const openRazorpayCheckout = ({
  key_id,
  order_id,
  amount,
  currency = 'INR',
  customer,
  productinfo = 'Tirupati Cab & Tour Package Booking',
  onSuccess,
  onDismiss,
  onError
}) => {
  if (typeof window.Razorpay === 'undefined') {
    const err = new Error('Razorpay SDK not loaded. Please check your internet connection.');
    if (onError) onError(err);
    return;
  }

  const options = {
    key: key_id,
    amount: amount, // amount in paise
    currency: currency,
    name: 'Dhakshinya Tours & Travels',
    description: productinfo,
    image: 'https://res.cloudinary.com/znbhjevm/image/upload/f_auto,q_auto,w_128/v1786735401/33e36867-e1e5-4785-bbf1-8255a659662e.png',
    order_id: order_id,
    prefill: {
      name: customer?.name || '',
      email: customer?.email || '',
      contact: customer?.phone || ''
    },
    notes: {
      address: 'Plot no 25, DS Naidu layout, near mangalam main road, Tirupati'
    },
    theme: {
      color: '#f59e0b'
    },
    handler: async function (response) {
      try {
        const verifyResult = await verifyRazorpayPayment({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          amount: amount / 100,
          customer_name: customer?.name,
          customer_email: customer?.email,
          customer_phone: customer?.phone,
          productinfo
        });

        if (onSuccess) onSuccess({ ...response, verifyResult });
      } catch (err) {
        if (onError) onError(err);
      }
    },
    modal: {
      ondismiss: function () {
        if (onDismiss) onDismiss();
      }
    }
  };

  const rzp = new window.Razorpay(options);
  rzp.on('payment.failed', function (resp) {
    console.error('Razorpay payment failed:', resp.error);
    if (onError) onError(resp.error);
  });
  rzp.open();
};
