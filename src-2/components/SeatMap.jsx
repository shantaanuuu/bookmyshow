import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ChevronLeft,
  Clock,
  ShieldCheck,
  AlertTriangle,
  Info,
  Check,
  Sparkles,
  Ticket
} from 'lucide-react';

export default function SeatMap({ onOpenFnBModal }) {
  const {
    selectedShow,
    movies,
    venues,
    navigateTo,
    getSeatsForShow,
    selectedSeats,
    toggleSeatSelection,
    initiateSeatLock,
    seatLockSeconds,
    isLockExpired,
    currentUser,
    setAuthModalOpen,
  } = useApp();

  if (!selectedShow) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="text-center">
          <p className="text-gray-500 mb-4">No show selected.</p>
          <button
            onClick={() => navigateTo('home')}
            className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const movie = movies.find((m) => m.id === selectedShow.eventId) || movies[0];
  const venue = venues.find((v) => v.venueId === selectedShow.venueId) || venues[0];
  const screen = venue?.screens?.find((s) => s.screenId === selectedShow.screenId) || {
    name: 'Audi 1 - Laser',
  };

  const seats = getSeatsForShow(selectedShow.showId);

  // Group seats by tier and row
  const tiers = [
    { name: 'Recliner', price: 420, rows: ['A', 'B'] },
    { name: 'Prime', price: 260, rows: ['C', 'D'] },
    { name: 'Classic', price: 160, rows: ['E', 'F'] },
  ];

  const totalSelectedPrice = selectedSeats.reduce((sum, s) => sum + s.price, 0);

  // Format seconds to mm:ss
  const formatTimer = (seconds) => {
    if (!seconds && seconds !== 0) return '08:00';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least 1 seat to proceed.');
      return;
    }

    // Sequence Diagram Page 3: Lock Seats -> Mark Seats Locked
    initiateSeatLock(selectedShow.showId, selectedSeats);

    // Activity Diagram: Check if user is authenticated
    if (!currentUser) {
      setAuthModalOpen(true);
      return;
    }

    // Open F&B Upsell modal before final checkout
    onOpenFnBModal();
  };

  return (
    <div className="min-h-screen bg-[#1f2533] text-white pb-32">
      {/* Top Header Bar */}
      <div className="sticky top-16 z-30 bg-[#222434]/95 backdrop-blur-md border-b border-gray-700/60 px-4 sm:px-8 py-3.5 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo('movieDetails', { eventId: movie.id })}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer text-gray-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                {movie.title}{' '}
                <span className="text-xs font-normal text-gray-400 bg-gray-800 px-2 py-0.5 rounded border border-gray-700">
                  {selectedShow.format}
                </span>
              </h2>
              <p className="text-xs text-gray-400">
                {venue.name} • {screen.name} •{' '}
                <span className="text-red-400 font-semibold">{selectedShow.showTime}</span>
              </p>
            </div>
          </div>

          {/* 8-Minute Seat Lock Timer Bar (FR-SEAT-02, FR-SEAT-05) */}
          {seatLockSeconds !== null && (
            <div
              className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl border font-mono text-xs shadow-inner transition ${
                seatLockSeconds < 120
                  ? 'bg-red-500/20 border-red-500 text-red-300 animate-pulse'
                  : 'bg-amber-500/20 border-amber-500/50 text-amber-300'
              }`}
            >
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Seat Lock Timer:</span>
              <span className="font-bold text-sm tracking-widest text-white">
                {formatTimer(seatLockSeconds)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Lock Expired Banner */}
      {isLockExpired && (
        <div className="max-w-4xl mx-auto mt-4 px-4">
          <div className="p-3.5 bg-red-600/20 border border-red-500 text-red-200 rounded-xl text-xs flex items-center gap-2 shadow-lg">
            <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
            <span>
              Your 8-minute seat reservation has expired. The seats have been released back to
              availability. Please reselect your preferred seats.
            </span>
          </div>
        </div>
      )}

      {/* Seat Legend (UI-3) */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="flex flex-wrap items-center justify-center gap-6 py-3 px-4 bg-gray-800/60 rounded-2xl border border-gray-700/60 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md border border-gray-400 bg-gray-100 flex items-center justify-center text-[10px] text-gray-800 font-bold" />
            <span className="text-gray-300">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-red-600 text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
              ✓
            </div>
            <span className="text-gray-300">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-amber-500/80 text-white flex items-center justify-center text-[10px] font-bold">
              🔒
            </div>
            <span className="text-gray-300">Locked (Other user)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gray-600/40 border border-gray-600 text-gray-400 flex items-center justify-center text-[10px]">
              ✕
            </div>
            <span className="text-gray-400">Sold / Booked</span>
          </div>
        </div>
      </div>

      {/* Interactive Seat Matrix */}
      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-8">
        {tiers.map((tier) => (
          <div key={tier.name} className="space-y-3">
            {/* Tier Header with Price */}
            <div className="flex items-center justify-between border-b border-gray-700/80 pb-1.5 px-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                {tier.name} — ₹{tier.price}
              </span>
              <span className="text-[11px] text-emerald-400 font-medium">
                {tier.rows.length * 10} seats total
              </span>
            </div>

            {/* Rows in this tier */}
            <div className="space-y-2">
              {tier.rows.map((rowLetter) => {
                const rowSeats = seats.filter((s) => s.row === rowLetter);
                return (
                  <div key={rowLetter} className="flex items-center justify-center gap-2 sm:gap-3">
                    {/* Row Letter Left */}
                    <span className="w-5 text-center text-xs font-bold text-gray-400">
                      {rowLetter}
                    </span>

                    {/* Left block: 5 seats */}
                    <div className="flex gap-1.5 sm:gap-2">
                      {rowSeats.slice(0, 5).map((seat) => {
                        const isSelected = selectedSeats.some((s) => s.seatId === seat.seatId);
                        const isBooked = seat.status === 'booked';
                        const isLocked = seat.status === 'locked' && !isSelected;

                        return (
                          <button
                            key={seat.seatId}
                            disabled={isBooked || isLocked}
                            onClick={() => toggleSeatSelection(seat)}
                            title={`${seat.seatNumber} (${tier.name}) - ₹${seat.price}`}
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-semibold flex items-center justify-center transition cursor-pointer select-none ${
                              isSelected
                                ? 'bg-red-600 text-white font-bold scale-105 shadow-md shadow-red-600/40 ring-2 ring-red-400'
                                : isBooked
                                ? 'bg-gray-700/40 border border-gray-700 text-gray-500 cursor-not-allowed opacity-60'
                                : isLocked
                                ? 'bg-amber-600/60 border border-amber-500 text-amber-200 cursor-not-allowed'
                                : 'bg-gray-100 hover:bg-red-100 text-gray-800 hover:text-red-700 hover:scale-105 border border-gray-200'
                            }`}
                          >
                            {seat.col}
                          </button>
                        );
                      })}
                    </div>

                    {/* Center Gangway / Aisle Walkway */}
                    <div className="w-4 sm:w-8" />

                    {/* Right block: 5 seats */}
                    <div className="flex gap-1.5 sm:gap-2">
                      {rowSeats.slice(5, 10).map((seat) => {
                        const isSelected = selectedSeats.some((s) => s.seatId === seat.seatId);
                        const isBooked = seat.status === 'booked';
                        const isLocked = seat.status === 'locked' && !isSelected;

                        return (
                          <button
                            key={seat.seatId}
                            disabled={isBooked || isLocked}
                            onClick={() => toggleSeatSelection(seat)}
                            title={`${seat.seatNumber} (${tier.name}) - ₹${seat.price}`}
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-semibold flex items-center justify-center transition cursor-pointer select-none ${
                              isSelected
                                ? 'bg-red-600 text-white font-bold scale-105 shadow-md shadow-red-600/40 ring-2 ring-red-400'
                                : isBooked
                                ? 'bg-gray-700/40 border border-gray-700 text-gray-500 cursor-not-allowed opacity-60'
                                : isLocked
                                ? 'bg-amber-600/60 border border-amber-500 text-amber-200 cursor-not-allowed'
                                : 'bg-gray-100 hover:bg-red-100 text-gray-800 hover:text-red-700 hover:scale-105 border border-gray-200'
                            }`}
                          >
                            {seat.col}
                          </button>
                        );
                      })}
                    </div>

                    {/* Row Letter Right */}
                    <span className="w-5 text-center text-xs font-bold text-gray-400">
                      {rowLetter}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Cinema Curved Screen Visual with Ambient Lighting Beam */}
        <div className="pt-16 pb-8 text-center relative overflow-hidden">
          {/* Ambient Projector Light Cone */}
          <div className="max-w-2xl mx-auto relative">
            <div className="screen-curve animate-cinemaLight" />
            <div className="h-16 bg-gradient-to-b from-cyan-500/15 via-cyan-500/5 to-transparent blur-md -mt-1" />
            
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[10px] font-black uppercase tracking-widest mt-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              IMAX Laser Projection Screen • Dolby Atmos 64-Channel
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Order Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#161722]/95 backdrop-blur-md border-t border-gray-700/80 p-4 shadow-2xl">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Selected Seats summary */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">
                  {selectedSeats.length > 0
                    ? `${selectedSeats.length} Seat(s) Selected`
                    : 'No Seats Selected'}
                </span>
                {selectedSeats.length > 0 && (
                  <span className="text-xs bg-red-600/40 text-red-200 px-2 py-0.5 rounded-full font-mono font-bold">
                    {selectedSeats.map((s) => s.seatNumber).join(', ')}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400">
                {selectedSeats.length > 0
                  ? `Base Ticket Total: ₹${totalSelectedPrice} (excl. convenience fee)`
                  : 'Select up to 10 seats to proceed with checkout'}
              </p>
            </div>
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
            {selectedSeats.length > 0 && (
              <div className="text-right">
                <p className="text-xs text-gray-400">Payable Base</p>
                <p className="text-xl font-black text-emerald-400">₹{totalSelectedPrice}</p>
              </div>
            )}
            <button
              disabled={selectedSeats.length === 0}
              onClick={handleProceed}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition shadow-lg flex items-center gap-2 cursor-pointer ${
                selectedSeats.length > 0
                  ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/30 hover:scale-105'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed opacity-60'
              }`}
            >
              Proceed to Book ({selectedSeats.length})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
