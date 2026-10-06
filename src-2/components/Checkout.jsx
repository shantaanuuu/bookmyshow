import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  CreditCard,
  Smartphone,
  Building,
  Wallet,
  Clock,
  ChevronLeft,
  Tag,
  AlertCircle,
  CheckCircle2,
  Lock,
  Receipt
} from 'lucide-react';

export default function Checkout() {
  const {
    selectedShow,
    selectedSeats,
    fnbSelected,
    movies,
    venues,
    currentUser,
    seatLockSeconds,
    processBooking,
    navigateTo,
  } = useApp();

  const [paymentMethod, setPaymentMethod] = useState('UPI'); // 'UPI' | 'Card' | 'NetBanking' | 'Wallet'
  const [upiId, setUpiId] = useState('user@okaxis');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8821');
  const [cardExpiry, setCardExpiry] = useState('08/29');
  const [cardCvv, setCardCvv] = useState('789');
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState('BMS50'); // Pre-applied demo code
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  if (!selectedShow || selectedSeats.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="text-center">
          <p className="text-gray-500 mb-4">No active booking session found.</p>
          <button
            onClick={() => navigateTo('home')}
            className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm"
          >
            Go to Movies
          </button>
        </div>
      </div>
    );
  }

  const movie = movies.find((m) => m.id === selectedShow.eventId) || movies[0];
  const venue = venues.find((v) => v.venueId === selectedShow.venueId) || venues[0];
  const screen = venue?.screens?.find((s) => s.screenId === selectedShow.screenId) || {
    name: 'Audi 1',
  };

  // Financial Calculations (FR-BOOK-01, FR-BOOK-03)
  const baseTicketAmount = selectedSeats.reduce((sum, s) => sum + s.price, 0);
  const convenienceFee = selectedSeats.length * 25;
  const gstAmount = Number((convenienceFee * 0.18).toFixed(2));
  const fnbTotal = fnbSelected.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let discount = 0;
  if (appliedPromo === 'BMS50') discount = 50;
  if (appliedPromo === 'MOVIE20') discount = Math.round(baseTicketAmount * 0.2);

  const grandTotal = Math.max(0, baseTicketAmount + convenienceFee + gstAmount + fnbTotal - discount);

  const formatTimer = (seconds) => {
    if (!seconds && seconds !== 0) return '00:00';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCodeInput.trim().toUpperCase() === 'BMS50') {
      setAppliedPromo('BMS50');
      setPromoCodeInput('');
    } else if (promoCodeInput.trim().toUpperCase() === 'MOVIE20') {
      setAppliedPromo('MOVIE20');
      setPromoCodeInput('');
    } else {
      alert('Invalid promo code. Try "BMS50" or "MOVIE20".');
    }
  };

  const handlePay = async (simulateFailure = false) => {
    setIsProcessing(true);
    setPaymentError(null);

    // Simulate Payment Gateway Roundtrip Latency (Sequence Diagram Page 3)
    setTimeout(() => {
      setIsProcessing(false);
      const res = processBooking({
        paymentMethod:
          paymentMethod === 'UPI'
            ? `UPI (${upiId})`
            : paymentMethod === 'Card'
            ? 'Credit/Debit Card'
            : paymentMethod === 'NetBanking'
            ? `Net Banking (${selectedBank})`
            : 'Digital Wallet',
        simulateFailure,
        promoCode: appliedPromo,
      });

      if (res.success) {
        navigateTo('confirmation');
      } else {
        setPaymentError(res.error);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#f5f5fa] pb-24">
      {/* Header bar */}
      <div className="bg-[#1f2533] text-white py-4 px-4 sm:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigateTo('seatMap', { keepSeats: true })}
            className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition font-medium cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Seat Map
          </button>
          <div className="flex items-center gap-2 bg-gray-800/80 px-3 py-1 rounded-xl border border-gray-700 text-xs">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="text-gray-300">Lock Expiry:</span>
            <span className="font-mono font-bold text-amber-300">
              {formatTimer(seatLockSeconds)}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-8">
        <h1 className="text-2xl font-black text-gray-900 mb-6">Order Summary & Checkout</h1>

        {/* Payment Error Alert (Payment Failure path from Activity Diagram Page 2) */}
        {paymentError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-2xl text-red-700 text-sm flex items-start gap-3 shadow-xs">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="font-bold">Transaction Failed at Payment Gateway</h4>
              <p className="text-xs mt-1 text-red-600">{paymentError}</p>
              <p className="text-xs mt-2 text-gray-600">
                Per BookMyShow policy, your temporarily locked seats have been safely released. You can retry with a different payment method or reselect your seats.
              </p>
              <button
                onClick={() => navigateTo('seatMap')}
                className="mt-3 px-4 py-1.5 bg-red-600 text-white rounded-lg text-xs font-semibold hover:bg-red-700"
              >
                Return to Seat Map & Retry
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Payment Methods (2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Contact Info */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs">
              <h3 className="font-bold text-sm text-gray-900 mb-2 flex items-center gap-2">
                <Receipt className="w-4 h-4 text-red-500" />
                Ticket Delivery Details
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Digital QR Ticket & GST Tax Invoice will be sent via simulated SMS and Email immediately upon payment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-200">
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">Name</span>
                  <p className="font-bold text-gray-800">{currentUser?.name || 'Guest User'}</p>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-200">
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">Email</span>
                  <p className="font-bold text-gray-800 truncate">
                    {currentUser?.email || 'customer@bms.com'}
                  </p>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-200">
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">Phone</span>
                  <p className="font-bold text-gray-800">
                    {currentUser?.phone || '+91 98765 43210'}
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Options (FR-PAY-01) */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-xs">
              <h3 className="font-bold text-base text-gray-900 mb-4 flex items-center justify-between">
                <span>Choose Payment Method</span>
                <span className="text-xs font-normal text-emerald-600 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> 100% PCI-DSS Compliant
                </span>
              </h3>

              {/* Method Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {[
                  { id: 'UPI', label: 'UPI (GPay/PhonePe)', icon: Smartphone },
                  { id: 'Card', label: 'Credit / Debit Card', icon: CreditCard },
                  { id: 'NetBanking', label: 'Net Banking', icon: Building },
                  { id: 'Wallet', label: 'Wallets', icon: Wallet },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = paymentMethod === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setPaymentMethod(item.id)}
                      className={`p-3 rounded-xl border text-center transition flex flex-col items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'border-red-500 bg-red-50 text-red-600 font-bold shadow-xs'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-gray-50/50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Method Input Fields */}
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200/80">
                {paymentMethod === 'UPI' && (
                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-gray-700">
                      Enter UPI ID / VPA
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@okhdfcbank"
                        className="flex-1 px-3 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                      <button
                        type="button"
                        className="px-4 py-2 bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl"
                      >
                        Verify
                      </button>
                    </div>
                    <p className="text-[11px] text-gray-400">
                      Supports Google Pay, PhonePe, Paytm, BHIM and all major bank apps.
                    </p>
                  </div>
                )}

                {paymentMethod === 'Card' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="4532 0000 0000 0000"
                        className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Expiry Date (MM/YY)
                        </label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="MM/YY"
                          className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          CVV / CVC
                        </label>
                        <input
                          type="password"
                          maxLength={4}
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          placeholder="•••"
                          className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'NetBanking' && (
                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-gray-700">
                      Select Popular Bank
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank'].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBank(b)}
                          className={`p-2 rounded-xl text-xs font-semibold border transition ${
                            selectedBank === b
                              ? 'bg-red-50 border-red-500 text-red-600'
                              : 'bg-white border-gray-200 text-gray-700'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {paymentMethod === 'Wallet' && (
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-gray-700">
                      Select Digital Wallet
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Paytm Wallet', 'Amazon Pay', 'MobiKwik'].map((w) => (
                        <div
                          key={w}
                          className="p-2.5 rounded-xl border border-gray-200 bg-white text-xs font-semibold text-gray-800 text-center"
                        >
                          {w}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons: Success & Failure Simulation */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
                <button
                  disabled={isProcessing}
                  onClick={() => handlePay(false)}
                  className="w-full sm:flex-1 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-red-500/25 transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  {isProcessing ? 'Processing Transaction...' : `Pay ₹${grandTotal} (Confirm Booking)`}
                </button>

                {/* Simulate Payment Failure button (Activity Diagram: tests failure & seat release) */}
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={() => handlePay(true)}
                  className="w-full sm:w-auto px-4 py-3.5 border border-dashed border-gray-300 hover:border-red-400 hover:bg-red-50 text-gray-500 hover:text-red-600 text-xs font-semibold rounded-xl transition cursor-pointer"
                  title="Simulate declined payment / gateway failure"
                >
                  ⚠️ Simulate Payment Failure
                </button>
              </div>
            </div>
          </div>

          {/* Right: Bill Breakdown (1 Column) */}
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs space-y-4">
              {/* Movie Header */}
              <div className="flex gap-3 pb-3 border-b border-gray-100">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-14 h-20 object-cover rounded-lg shadow-xs flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-sm text-gray-900 leading-snug">{movie.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{movie.genre}</p>
                  <p className="text-xs text-gray-700 font-medium mt-1">
                    {selectedShow.format} • {selectedShow.showTime}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{venue.name}</p>
                </div>
              </div>

              {/* Seats Pill */}
              <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-500">Seats ({selectedSeats.length}):</span>
                <span className="font-bold text-red-600 font-mono">
                  {selectedSeats.map((s) => s.seatNumber).join(', ')}
                </span>
              </div>

              {/* Price Calculation (FR-BOOK-03) */}
              <div className="space-y-2 text-xs text-gray-600 pt-1">
                <div className="flex justify-between">
                  <span>Ticket Base Fare</span>
                  <span className="font-semibold text-gray-800">₹{baseTicketAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Convenience Fee (₹25 × {selectedSeats.length})</span>
                  <span>₹{convenienceFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Integrated GST (18%)</span>
                  <span>₹{gstAmount}</span>
                </div>

                {fnbTotal > 0 && (
                  <div className="flex justify-between text-amber-700">
                    <span>Food & Beverages ({fnbSelected.length} items)</span>
                    <span className="font-semibold">₹{fnbTotal}</span>
                  </div>
                )}

                {discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Promo Discount ({appliedPromo})</span>
                    <span>-₹{discount}</span>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-3 flex justify-between items-center text-sm font-bold text-gray-900">
                  <span>Amount Payable</span>
                  <span className="text-xl font-black text-red-600">₹{grandTotal}</span>
                </div>
              </div>

              {/* Coupon / Promo Code */}
              <div className="pt-2 border-t border-gray-100">
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      value={promoCodeInput}
                      onChange={(e) => setPromoCodeInput(e.target.value)}
                      className="w-full pl-8 pr-2 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-lg uppercase"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-gray-800 text-white text-xs font-semibold rounded-lg hover:bg-black transition cursor-pointer"
                  >
                    Apply
                  </button>
                </form>
                {appliedPromo && (
                  <p className="text-[10px] text-emerald-600 font-semibold mt-1">
                    ✓ Applied: <strong>{appliedPromo}</strong> (Discount included)
                  </p>
                )}
              </div>

              {/* Cancellation policy note (FR-CANC-01) */}
              <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-[11px] text-blue-800 leading-relaxed">
                <strong>Cancellation Policy:</strong> 100% refund on ticket fare if cancelled &gt; 24h before showtime; 75% refund if cancelled 2-24h prior.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
