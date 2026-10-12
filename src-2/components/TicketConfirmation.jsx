import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import {
  CheckCircle,
  Download,
  Printer,
  Share2,
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Mail,
  Smartphone,
  ChevronRight,
  ShieldCheck,
  Film,
  Sparkles
} from 'lucide-react';

export default function TicketConfirmation() {
  const { lastBooking, navigateTo } = useApp();

  useEffect(() => {
    if (lastBooking) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback if canvas not available
      }
    }
  }, [lastBooking]);

  if (!lastBooking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d101d] p-6 text-white">
        <div className="text-center">
          <p className="text-gray-400 mb-4">No recent booking found.</p>
          <button
            onClick={() => navigateTo('home')}
            className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-red-600/30 cursor-pointer"
          >
            Explore Movies
          </button>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0d101d] py-12 px-4 sm:px-8 text-white">
      <div className="max-w-xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center mx-auto mb-3 shadow-xl shadow-emerald-500/30 animate-bounce">
            <CheckCircle className="w-9 h-9" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Booking Confirmed! 🎉
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Your high-security digital pass is active. Scan QR code at the cinema turnstile.
          </p>

          {/* Delivery Simulation Alert */}
          <div className="mt-4 p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl text-emerald-300 text-xs flex items-center justify-center gap-3 backdrop-blur-md">
            <span className="flex items-center gap-1.5 font-medium">
              <Mail className="w-3.5 h-3.5 text-emerald-400" /> Pass sent to {lastBooking.userEmail}
            </span>
            <span className="text-emerald-700">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" /> SMS to {lastBooking.userPhone}
            </span>
          </div>
        </div>

        {/* High-Fidelity BookMyShow Digital E-Ticket (FR-TKT-01, Class Diagram) */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200/90 relative print:shadow-none print:border-none">
          {/* Top Brand Banner */}
          <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Film className="w-5 h-5 text-white" />
              <span className="font-extrabold tracking-tight text-base">
                book<span className="text-red-200">my</span>show <span className="font-light text-xs opacity-90">M-TICKET</span>
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-red-100 uppercase tracking-wider block">Booking ID</span>
              <span className="font-mono font-bold text-sm tracking-wider">{lastBooking.bookingId}</span>
            </div>
          </div>

          {/* Movie & Show Information */}
          <div className="p-6">
            <div className="flex gap-4 pb-6 border-b border-gray-100">
              {lastBooking.posterUrl && (
                <img
                  src={lastBooking.posterUrl}
                  alt={lastBooking.movieTitle}
                  className="w-20 h-28 object-cover rounded-xl shadow-md flex-shrink-0"
                />
              )}
              <div className="flex-1">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 uppercase mb-1">
                  {lastBooking.format}
                </span>
                <h2 className="text-lg sm:text-xl font-black text-gray-900 leading-snug">
                  {lastBooking.movieTitle}
                </h2>
                <p className="text-xs text-gray-500 mt-1">{lastBooking.venueName}</p>
                <p className="text-xs text-gray-700 font-semibold mt-0.5">{lastBooking.screenName}</p>

                <div className="flex items-center gap-3 mt-3 text-xs text-gray-600">
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-red-500" />
                    {lastBooking.showDateTime.split(' ')[0]}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-bold text-gray-900">
                    <Clock className="w-3.5 h-3.5 text-red-500" />
                    {lastBooking.showDateTime.split(' ').slice(1).join(' ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Seat & Passenger Info */}
            <div className="py-5 grid grid-cols-2 gap-4 border-b border-gray-100">
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  Seats Booked ({lastBooking.seats.length})
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {lastBooking.seats.map((s) => (
                    <span
                      key={s.seatNumber}
                      className="px-2.5 py-1 bg-gray-900 text-white rounded-lg text-xs font-mono font-bold"
                    >
                      {s.seatNumber} ({s.tier})
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  Amount Paid
                </span>
                <p className="text-lg font-black text-emerald-600 mt-0.5">
                  ₹{lastBooking.totalAmount}
                </p>
                <span className="text-[10px] text-gray-400 font-mono">
                  {lastBooking.paymentMethod}
                </span>
              </div>
            </div>

            {/* Scannable QR Code Section (FR-TKT-01, Class Diagram) */}
            <div className="py-6 flex flex-col items-center justify-center text-center bg-gray-50/70 rounded-2xl my-4 border border-gray-100">
              <div className="p-3 bg-white rounded-2xl shadow-md border border-gray-200">
                <QRCodeSVG
                  value={lastBooking.qrCodePayload || lastBooking.bookingId}
                  size={150}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-[11px] font-mono text-gray-500 mt-2">
                Scan at Gate • Valid for {lastBooking.seats.length} Person(s)
              </p>
              <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 mt-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Cryptographically Verified Digital Ticket
              </div>
            </div>

            {/* F&B Items if booked */}
            {lastBooking.fnbItems && lastBooking.fnbItems.length > 0 && (
              <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200 text-xs text-amber-900 mt-2">
                <span className="font-bold">🍿 F&B Pre-booked: </span>
                {lastBooking.fnbItems.map((f) => `${f.name} (x${f.quantity})`).join(', ')}
                <span className="block text-[10px] text-amber-700 mt-0.5">
                  Collect from F&B express counter by presenting this ticket.
                </span>
              </div>
            )}
          </div>

          {/* Ticket Perforation Dashes */}
          <div className="relative border-t-2 border-dashed border-gray-200 p-4 bg-gray-50 flex items-center justify-between text-xs text-gray-500">
            {/* Cutout notch left */}
            <div className="absolute -left-3 -top-3 w-6 h-6 bg-[#f5f5fa] rounded-full border border-gray-200" />
            {/* Cutout notch right */}
            <div className="absolute -right-3 -top-3 w-6 h-6 bg-[#f5f5fa] rounded-full border border-gray-200" />

            <span className="text-[11px]">Txn ID: {lastBooking.paymentId}</span>
            <span className="text-[11px] font-medium text-emerald-600">Status: Confirmed</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handlePrint}
            className="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 text-xs font-bold rounded-xl shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4 text-gray-600" /> Print Ticket / PDF
          </button>
          <button
            onClick={() => navigateTo('myBookings')}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-md hover:shadow-red-500/20 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Ticket className="w-4 h-4" /> Go to My Bookings
          </button>
          <button
            onClick={() => navigateTo('home')}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
          >
            Explore More Shows
          </button>
        </div>
      </div>
    </div>
  );
}
