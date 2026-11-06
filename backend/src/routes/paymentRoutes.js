import { Router } from 'express';
import {
  createRazorpayOrder,
  verifyRazorpayPayment,
  getAllPayments
} from '../controllers/paymentController.js';

const router = Router();

// Official Razorpay endpoints
router.post('/initiate', createRazorpayOrder);
router.post('/create-order', createRazorpayOrder);
router.post('/verify', verifyRazorpayPayment);
router.get('/', getAllPayments);

export default router;
