import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import InvoiceModal from './InvoiceModal';
import {
  Ticket,
  Calendar,
  Clock,
  MapPin,
  FileText,
  XCircle,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  ShieldAlert,
  ChevronLeft
} from 'lucide-react';

export default function MyBookings() {
  const {
    bookings,
    currentUser,
    cancelBooking,
    calculateRefund,
    navigateTo,
  } = useApp();

  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'upcoming' | 'completed' | 'cancelled'
  const [selectedBookingForInvoice, setSelectedBookingForInvoice] = useState(null);
  const [cancellationTarget, setCancellationTarget] = useState(null);
  const [cancellationResult, setCancellationResult] = useState(null);

  // Filter bookings for current user (or show all if guest/demo for testing)
  const userBookings = bookings.filter((b) => {
    if (!currentUser) return true;
    return b.userId === currentUser.userId || b.userEmail === currentUser.email;
  });

  const filteredBookings = userBookings.filter((b) => {
    if (activeTab === 'upcoming') return b.status === 'confirmed';
    if (activeTab === 'completed') return b.status === 'completed';
    if (activeTab === 'cancelled') return b.status === 'cancelled';
    return true;
  });

  const handleStartCancellation = (booking) => {
    const refundInfo = calculateRefund(booking);
    setCancellationTarget({ booking, refundInfo });
  };

  const handleConfirmCancellation = () => {
    if (!cancellationTarget) return;
    const res = cancelBooking(cancellationTarget.booking.bookingId);
    setCancellationResult(res);
    setCancellationTarget(null);
  };

  return (
    <div className="min-h-screen bg-[#f5f5fa] pb-24">
      {/* Top Banner */}
      <div className="bg-[#1f2533] text-white py-6 px-4 sm:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition mb-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Home
            </button>
            <h1 className="text-2xl font-black text-white flex items-center gap-2">
              <Ticket className="w-6 h-6 text-red-500" />
              My Bookings & Invoices
            </h1>
            <p className="text-xs text-gray-400">
              Manage your confirmed movie tickets, digital passes, and GST invoices
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => navigateTo('home')}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-xs transition"
            >
              + Book New Movie
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-8">
        {/* Navigation Tabs (FR-HIST-01) */}
        <div className="flex items-center gap-2 border-b border-gray-200 pb-3 mb-6 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: `All Bookings (${userBookings.length})` },
            {
              id: 'upcoming',
              label: `Upcoming / Confirmed (${
                userBookings.filter((b) => b.status === 'confirmed').length
              })`,
            },
            {
              id: 'completed',
              label: `Completed (${
                userBookings.filter((b) => b.status === 'completed').length
              })`,
            },
            {
              id: 'cancelled',
              label: `Cancelled & Refunded (${
                userBookings.filter((b) => b.status === 'cancelled').length
              })`,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white shadow-xs'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bookings List */}
        {filteredBookings.length > 0 ? (
          <div className="space-y-4">
            {filteredBookings.map((b) => {
              const isCancelled = b.status === 'cancelled';
              const isCompleted = b.status === 'completed';
              const isConfirmed = b.status === 'confirmed';

              return (
                <div
                  key={b.bookingId}
                  className={`bg-white rounded-2xl p-5 border transition shadow-xs hover:shadow-md ${
                    isCancelled
                      ? 'border-gray-200 bg-gray-50/60 opacity-80'
                      : 'border-gray-200/90'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Left: Movie & Venue Details */}
                    <div className="flex gap-4">
                      {b.posterUrl ? (
                        <img
                          src={b.posterUrl}
                          alt={b.movieTitle}
                          className="w-16 h-24 object-cover rounded-xl shadow-xs flex-shrink-0"
                        />
                      ) : (
                        <div className="w-16 h-24 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                          <Ticket className="w-8 h-8" />
                        </div>
                      )}

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              isConfirmed
                                ? 'bg-emerald-100 text-emerald-800'
                                : isCompleted
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {b.status}
                          </span>
                          <span className="text-[11px] font-mono text-gray-400">
                            ID: {b.bookingId}
                          </span>
                        </div>

                        <h3 className="font-black text-base text-gray-900">{b.movieTitle}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{b.venueName}</p>
                        <p className="text-xs text-gray-700 font-semibold mt-0.5">
                          {b.screenName} • {b.format || '2D'}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-600">
                          <span className="flex items-center gap-1 font-medium">
                            <Calendar className="w-3.5 h-3.5 text-red-500" />
                            {b.showDateTime}
                          </span>
                          <span>•</span>
                          <span className="font-bold text-gray-900 font-mono">
                            Seats: {b.seats.map((s) => s.seatNumber).join(', ')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Pricing & Actions */}
                    <div className="flex flex-col sm:items-end justify-between border-t md:border-t-0 pt-3 md:pt-0 border-gray-100">
                      <div className="sm:text-right">
                        <span className="text-[11px] text-gray-400">Total Paid</span>
                        <p className="text-xl font-black text-gray-900 leading-tight">
                          ₹{b.totalAmount}
                        </p>
                        {isCancelled && b.refundAmount !== undefined && (
                          <span className="text-[11px] font-bold text-red-600">
                            Refund: ₹{b.refundAmount} ({b.refundId})
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {/* View Tax Invoice */}
                        <button
                          onClick={() => setSelectedBookingForInvoice(b)}
                          className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5" /> Tax Invoice
                        </button>

                        {/* View Ticket (if not cancelled) */}
                        {isConfirmed && (
                          <button
                            onClick={() => {
                              // set as last booking & navigate
                              navigateTo('confirmation');
                            }}
                            className="px-3.5 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                          >
                            <Ticket className="w-3.5 h-3.5" /> Digital Ticket
                          </button>
                        )}

                        {/* Cancel Booking CTA (Activity Diagram Page 3) */}
                        {isConfirmed && (
                          <button
                            onClick={() => handleStartCancellation(b)}
                            className="px-3 py-1.5 border border-red-200 hover:bg-red-50 text-red-600 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer"
                          >
                            <XCircle className="w-3.5 h-3.5" /> Cancel Ticket
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200">
            <Ticket className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="font-bold text-base text-gray-800">No bookings in this tab</h3>
            <p className="text-xs text-gray-500 mt-1">
              Browse movies in your city to make your next reservation!
            </p>
            <button
              onClick={() => navigateTo('home')}
              className="mt-4 px-6 py-2.5 bg-red-600 text-white text-xs font-bold rounded-xl hover:bg-red-700 transition"
            >
              Explore Movies
            </button>
          </div>
        )}
      </div>

      {/* Cancellation & Refund Flow Modal (Activity Diagram Page 3, Sequence Diagram Page 5) */}
      {cancellationTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl text-gray-800 p-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-gray-900">
                  Cancel Booking — {cancellationTarget.booking.movieTitle}
                </h3>
                <p className="text-xs text-gray-500">
                  Booking ID: {cancellationTarget.booking.bookingId}
                </p>
              </div>
            </div>

            {/* Policy & Refund Calculation (FR-CANC-02) */}
            <div className="py-4 space-y-3">
              <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 text-xs space-y-2">
                <div className="flex justify-between font-medium">
                  <span className="text-gray-600">Total Paid Amount:</span>
                  <span className="font-bold text-gray-900">
                    ₹{cancellationTarget.booking.totalAmount}
                  </span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-gray-600">Base Ticket Fare:</span>
                  <span>₹{cancellationTarget.booking.baseAmount}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-gray-600">Refund Policy Applied:</span>
                  <span className="text-amber-700 font-bold">
                    {cancellationTarget.refundInfo.refundPercentage}% Refund
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between text-sm font-black">
                  <span className="text-gray-800">Net Refund Amount:</span>
                  <span className="text-emerald-600">
                    ₹{cancellationTarget.refundInfo.eligibleAmount}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-blue-900 text-xs">
                <p className="font-bold flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-blue-600" />
                  Refund Policy Breakdown:
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-blue-800">
                  {cancellationTarget.refundInfo.policyText}.
                  Convenience fees and taxes are non-refundable per platform terms. The refund will be credited back to your original payment method ({cancellationTarget.booking.paymentMethod}) within 24 hours.
                </p>
              </div>
            </div>

            {/* Confirmation Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setCancellationTarget(null)}
                className="flex-1 py-2.5 border border-gray-300 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-100 transition"
              >
                No, Keep Booking
              </button>
              <button
                onClick={handleConfirmCancellation}
                className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition shadow-md hover:shadow-red-500/20"
              >
                Yes, Cancel & Refund
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancellation Success Feedback Modal */}
      {cancellationResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl text-gray-800 p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-black text-lg text-gray-900">
              Booking Cancelled Successfully!
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              Your refund of{' '}
              <strong className="text-emerald-600 text-sm">
                ₹{cancellationResult.refundAmount}
              </strong>{' '}
              has been processed.
            </p>
            <div className="my-4 p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs font-mono text-gray-600">
              Refund Reference ID: {cancellationResult.refundId}
            </div>
            <p className="text-[11px] text-gray-500">
              Seats have been released back to general availability, and your QR ticket has been invalidated.
            </p>
            <button
              onClick={() => setCancellationResult(null)}
              className="mt-6 w-full py-2.5 bg-gray-900 hover:bg-black text-white rounded-xl text-xs font-bold transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* GST Invoice Modal */}
      <InvoiceModal
        isOpen={Boolean(selectedBookingForInvoice)}
        onClose={() => setSelectedBookingForInvoice(null)}
        booking={selectedBookingForInvoice}
      />
    </div>
  );
}
