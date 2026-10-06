import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  QrCode,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Search,
  Film,
  Calendar,
  Users,
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';

export default function StaffScanner() {
  const { validateCheckIn, bookings, navigateTo } = useApp();

  const [inputCode, setInputCode] = useState('');
  const [scanResult, setScanResult] = useState(null);

  const handleValidate = (codeToTest) => {
    const code = codeToTest || inputCode;
    if (!code.trim()) return;

    const result = validateCheckIn(code);
    setScanResult(result);
  };

  return (
    <div className="min-h-screen bg-[#f5f5fa] pb-24">
      {/* Header Banner */}
      <div className="bg-[#1f2533] text-white py-6 px-4 sm:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition mb-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Storefront
            </button>
            <h1 className="text-2xl font-black text-white flex items-center gap-2">
              <QrCode className="w-6 h-6 text-blue-400" />
              Venue Gate Entry & Ticket Check-In Console
            </h1>
            <p className="text-xs text-gray-400">
              Staff module for validating electronic QR tickets and admitting patrons (Staff: validateCheckIn)
            </p>
          </div>
          <span className="text-xs bg-blue-900/40 text-blue-300 border border-blue-500/40 px-3 py-1.5 rounded-xl font-semibold">
            Partner Gate Scanner Mode
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 mt-8 space-y-6">
        {/* Scanner Input Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100">
            <QrCode className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Scan or Enter Booking ID</h2>
          <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
            Scan the attendee's mobile QR code or type the 9-character Booking Reference (e.g. BMS-918234)
          </p>

          {/* Form */}
          <div className="max-w-md mx-auto mt-6 flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="e.g. BMS-918234"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl font-mono uppercase focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => handleValidate()}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer"
            >
              Verify Ticket
            </button>
          </div>

          {/* Quick Simulated Scans */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              ⚡ Quick 1-Click Verification Test Buttons:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {bookings.slice(0, 3).map((b) => (
                <button
                  key={b.bookingId}
                  onClick={() => {
                    setInputCode(b.bookingId);
                    handleValidate(b.bookingId);
                  }}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-mono transition"
                >
                  Verify {b.bookingId} ({b.movieTitle.split(':')[0]})
                </button>
              ))}
              <button
                onClick={() => {
                  setInputCode('BMS-INVALID-999');
                  handleValidate('BMS-INVALID-999');
                }}
                className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-xs font-mono transition"
              >
                Test Invalid Ticket
              </button>
            </div>
          </div>
        </div>

        {/* Validation Result Feedback Card */}
        {scanResult && (
          <div
            className={`rounded-3xl p-6 sm:p-8 border shadow-lg animate-fadeIn text-left ${
              scanResult.status === 'success'
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : scanResult.status === 'already_redeemed'
                ? 'bg-amber-50 border-amber-300 text-amber-900'
                : 'bg-red-50 border-red-300 text-red-900'
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-2xl ${
                  scanResult.status === 'success'
                    ? 'bg-emerald-600 text-white'
                    : scanResult.status === 'already_redeemed'
                    ? 'bg-amber-600 text-white'
                    : 'bg-red-600 text-white'
                }`}
              >
                {scanResult.status === 'success' ? (
                  <CheckCircle2 className="w-8 h-8" />
                ) : scanResult.status === 'already_redeemed' ? (
                  <AlertTriangle className="w-8 h-8" />
                ) : (
                  <XCircle className="w-8 h-8" />
                )}
              </div>

              <div className="flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider block">
                  Validation Status: {scanResult.status.replace('_', ' ')}
                </span>
                <h3 className="text-xl font-black mt-0.5">{scanResult.message}</h3>

                {/* Booking details if ticket matched */}
                {scanResult.booking && (
                  <div className="mt-4 p-4 bg-white/80 rounded-2xl border border-black/10 space-y-2 text-xs text-gray-800">
                    <div className="flex justify-between items-center border-b border-gray-200/60 pb-2">
                      <span className="font-bold text-gray-900 text-sm">
                        {scanResult.booking.movieTitle}
                      </span>
                      <span className="font-mono font-bold bg-gray-100 px-2 py-0.5 rounded">
                        {scanResult.booking.bookingId}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div>
                        <span className="text-gray-500">Attendee:</span>
                        <p className="font-semibold">{scanResult.booking.userName}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Venue & Screen:</span>
                        <p className="font-semibold">{scanResult.booking.screenName}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Show Date & Time:</span>
                        <p className="font-semibold">{scanResult.booking.showDateTime}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Seats Reserved:</span>
                        <p className="font-bold text-red-600 font-mono text-sm">
                          {scanResult.booking.seats.map((s) => s.seatNumber).join(', ')} (
                          {scanResult.booking.seats.length} Person
                          {scanResult.booking.seats.length > 1 ? 's' : ''})
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
