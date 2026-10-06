import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Shield,
  TrendingUp,
  Users,
  Film,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Sparkles,
  Zap,
  DollarSign,
  Layers,
  Search,
  RefreshCw,
  PlusCircle,
  FileCheck,
  ChevronLeft
} from 'lucide-react';

export default function AdminConsole() {
  const {
    shows,
    setShows,
    movies,
    venues,
    bookings,
    users,
    setUsers,
    auditLogs,
    triggerAutoDynamicPricing,
    reallocateLargerScreen,
    logAuditAction,
    addNotification,
    navigateTo,
  } = useApp();

  const [activeTab, setActiveTab] = useState('analytics'); // 'analytics' | 'dynamicPricing' | 'scheduling' | 'bookings' | 'users' | 'audit'

  // New Show Scheduling Form state
  const [newShowForm, setNewShowForm] = useState({
    eventId: movies[0]?.id || 'm1',
    venueId: venues[0]?.venueId || 'v1',
    screenId: venues[0]?.screens[0]?.screenId || 's1',
    showDate: new Date().toISOString().split('T')[0],
    showTime: '04:00 PM',
    format: 'IMAX 3D',
    basePrice: 350,
  });
  const [scheduleError, setScheduleError] = useState('');
  const [scheduleSuccess, setScheduleSuccess] = useState('');

  // Search in bookings
  const [bookingSearch, setBookingSearch] = useState('');

  // Aggregated Analytics calculations
  const totalRevenue = bookings
    .filter((b) => b.status !== 'cancelled')
    .reduce((sum, b) => sum + b.totalAmount, 0);
  const totalTicketsSold = bookings
    .filter((b) => b.status !== 'cancelled')
    .reduce((sum, b) => sum + b.seats.length, 0);
  const avgOccupancy = Math.round(
    shows.reduce((sum, s) => sum + s.occupancyRate, 0) / (shows.length || 1)
  );

  // High Demand shows (Occupancy > 80%) for Dynamic Pricing Engine
  const highDemandShows = shows.filter((s) => s.occupancyRate >= 80);

  // Handle Schedule submission with Overlap Prevention (FR-SCHD-03)
  const handleScheduleShow = (e) => {
    e.preventDefault();
    setScheduleError('');
    setScheduleSuccess('');

    // Check collision on same screen, date, and showtime
    const conflict = shows.find(
      (s) =>
        s.screenId === newShowForm.screenId &&
        s.showDate === newShowForm.showDate &&
        s.showTime === newShowForm.showTime
    );

    if (conflict) {
      setScheduleError(
        `Collision Alert (FR-SCHD-03): Screen already has show "${conflict.showId}" scheduled at ${newShowForm.showTime} on ${newShowForm.showDate}.`
      );
      return;
    }

    const newShowId = `sh_${Date.now()}`;
    const newShow = {
      showId: newShowId,
      eventId: newShowForm.eventId,
      venueId: newShowForm.venueId,
      screenId: newShowForm.screenId,
      showDate: newShowForm.showDate,
      showTime: newShowForm.showTime,
      format: newShowForm.format,
      basePrice: Number(newShowForm.basePrice),
      availableSeats: 60,
      totalSeats: 60,
      occupancyRate: 0,
      dynamicMultiplier: 1.0,
    };

    setShows((prev) => [newShow, ...prev]);
    setScheduleSuccess(`Successfully scheduled show ${newShowId}!`);

    logAuditAction(
      'Admin',
      'Show Scheduled',
      `Scheduled show ${newShowId} for event ${newShowForm.eventId} on screen ${newShowForm.screenId} at ${newShowForm.showTime}`
    );
  };

  const toggleUserStatus = (userId) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.userId === userId) {
          const newStatus = !u.isActive;
          logAuditAction(
            'Admin',
            newStatus ? 'User Activated' : 'User Suspended',
            `User ${u.name} (${u.email}) status toggled to ${newStatus ? 'Active' : 'Suspended'}`
          );
          return { ...u, isActive: newStatus };
        }
        return u;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#f5f5fa] pb-24">
      {/* Top Banner */}
      <div className="bg-[#1f2533] text-white py-6 px-4 sm:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition mb-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Customer Storefront
            </button>
            <h1 className="text-2xl font-black text-white flex items-center gap-2">
              <Shield className="w-6 h-6 text-purple-400" />
              BookMyShow Admin & Operations Console
            </h1>
            <p className="text-xs text-gray-400">
              Manage inventory, automated dynamic pricing, screen scheduling, and compliance audit logs
            </p>
          </div>

          <div className="flex items-center gap-2 bg-purple-900/40 border border-purple-500/40 px-3.5 py-1.5 rounded-xl text-purple-200 text-xs">
            <Zap className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>AI Dynamic Pricing Engine: <strong>Active</strong></span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-gray-200 pb-3 mb-6 overflow-x-auto no-scrollbar">
          {[
            { id: 'analytics', label: '📊 System Analytics', icon: TrendingUp },
            { id: 'dynamicPricing', label: '⚡ Dynamic Pricing & Auto-Scaler', icon: Zap },
            { id: 'scheduling', label: '🎬 Screen Scheduling (Conflict Engine)', icon: Calendar },
            { id: 'bookings', label: '🎟️ Manage Bookings', icon: Film },
            { id: 'users', label: '👥 User Accounts', icon: Users },
            { id: 'audit', label: '📜 Security Audit Logs', icon: FileCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 1. ANALYTICS TAB */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* KPI Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Total Gross Revenue
                </span>
                <p className="text-2xl font-black text-emerald-600 mt-1">₹{totalRevenue}</p>
                <span className="text-[11px] text-gray-500 mt-1 block">Across all cities & screens</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Confirmed Bookings
                </span>
                <p className="text-2xl font-black text-gray-900 mt-1">{bookings.length}</p>
                <span className="text-[11px] text-gray-500 mt-1 block">
                  {totalTicketsSold} individual tickets
                </span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Average Screen Occupancy
                </span>
                <p className="text-2xl font-black text-purple-600 mt-1">{avgOccupancy}%</p>
                <span className="text-[11px] text-gray-500 mt-1 block">Real-time across all venues</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Active Shows
                </span>
                <p className="text-2xl font-black text-blue-600 mt-1">{shows.length}</p>
                <span className="text-[11px] text-gray-500 mt-1 block">
                  {movies.length} blockbusters listed
                </span>
              </div>
            </div>

            {/* Occupancy per Show Table */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-xs">
              <h3 className="font-bold text-base text-gray-900 mb-4">
                Real-Time Screen Occupancy & Tariffs
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-gray-50 text-gray-500 uppercase font-semibold border-b border-gray-200">
                    <tr>
                      <th className="py-3 px-4">Show ID</th>
                      <th className="py-3 px-4">Movie / Event</th>
                      <th className="py-3 px-4">Venue & Screen</th>
                      <th className="py-3 px-4">Time</th>
                      <th className="py-3 px-4">Occupancy</th>
                      <th className="py-3 px-4">Base Tariff</th>
                      <th className="py-3 px-4">Demand Multiplier</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {shows.map((s) => {
                      const m = movies.find((movie) => movie.id === s.eventId);
                      const v = venues.find((venue) => venue.venueId === s.venueId);
                      const isHigh = s.occupancyRate >= 80;

                      return (
                        <tr key={s.showId} className="hover:bg-gray-50 transition">
                          <td className="py-3 px-4 font-mono font-bold text-gray-700">
                            {s.showId}
                          </td>
                          <td className="py-3 px-4 font-semibold text-gray-900">
                            {m?.title || s.eventId}
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            {v?.name || s.venueId}
                          </td>
                          <td className="py-3 px-4 font-medium text-gray-800">{s.showTime}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-24 bg-gray-200 rounded-full h-2 overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${
                                    isHigh ? 'bg-amber-500' : 'bg-emerald-500'
                                  }`}
                                  style={{ width: `${s.occupancyRate}%` }}
                                />
                              </div>
                              <span
                                className={`font-bold ${
                                  isHigh ? 'text-amber-600' : 'text-gray-700'
                                }`}
                              >
                                {s.occupancyRate}%
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4 font-bold text-gray-800">₹{s.basePrice}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-0.5 rounded font-mono font-bold ${
                                s.dynamicMultiplier > 1
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {s.dynamicMultiplier}x
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 2. DYNAMIC PRICING & AUTO-SCALER (Collaboration Diagram Page 7) */}
        {activeTab === 'dynamicPricing' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 text-white p-6 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-bold">
                  Automated Dynamic Pricing & Screen Scheduling Engine
                </h3>
              </div>
              <p className="text-xs text-purple-200 max-w-2xl leading-relaxed">
                As detailed in <strong>Collaboration Diagram Page 7</strong>, the engine continuously monitors
                screen occupancy. When demand crosses the <strong>85% threshold</strong>, the engine automatically
                recommends adjusting ticket price tariffs with premium multipliers and reallocating shows to higher-capacity screens.
              </p>
            </div>

            {/* High Demand Triggers */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
              <h4 className="font-bold text-sm text-gray-900 mb-4 flex items-center justify-between">
                <span>Shows Triggering High Occupancy Rule (&gt; 80%)</span>
                <span className="text-xs text-amber-600 font-semibold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  {highDemandShows.length} Show(s) Active
                </span>
              </h4>

              {highDemandShows.length > 0 ? (
                <div className="space-y-4">
                  {highDemandShows.map((s) => {
                    const m = movies.find((movie) => movie.id === s.eventId);
                    const v = venues.find((venue) => venue.venueId === s.venueId);

                    return (
                      <div
                        key={s.showId}
                        className="p-5 rounded-2xl border border-amber-200 bg-amber-50/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-white uppercase">
                              Surge Trigger: {s.occupancyRate}% Occupancy
                            </span>
                            <span className="text-xs font-mono text-gray-500">{s.showId}</span>
                          </div>
                          <h4 className="font-bold text-sm text-gray-900">{m?.title}</h4>
                          <p className="text-xs text-gray-600">
                            {v?.name} • {s.showTime} • Current Tariff: ₹{s.basePrice}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => triggerAutoDynamicPricing(s.showId)}
                            className="px-3.5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer"
                          >
                            <DollarSign className="w-3.5 h-3.5" /> Deploy 1.25x Dynamic Tariff
                          </button>
                          <button
                            onClick={() =>
                              reallocateLargerScreen(s.showId, 'Grand Laser IMAX Hall', 20)
                            }
                            className="px-3.5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer"
                          >
                            <Layers className="w-3.5 h-3.5" /> Reallocate to Larger Screen (+20 Seats)
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-xs text-gray-500 text-center py-6">
                  No shows currently cross the 80% occupancy threshold.
                </p>
              )}
            </div>
          </div>
        )}

        {/* 3. SCREEN SCHEDULING (FR-SCHD-01 to 03) */}
        {activeTab === 'scheduling' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
              <h3 className="font-bold text-base text-gray-900 mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                Schedule New Cinema Show
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Prevents scheduling collisions on the same screen (FR-SCHD-03).
              </p>

              {scheduleError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-300 text-red-700 text-xs rounded-xl flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  {scheduleError}
                </div>
              )}
              {scheduleSuccess && (
                <div className="mb-4 p-3 bg-emerald-50 border border-emerald-300 text-emerald-700 text-xs rounded-xl flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  {scheduleSuccess}
                </div>
              )}

              <form onSubmit={handleScheduleShow} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Select Movie</label>
                  <select
                    value={newShowForm.eventId}
                    onChange={(e) => setNewShowForm({ ...newShowForm, eventId: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl"
                  >
                    {movies.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.title} ({m.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Multiplex / Venue</label>
                    <select
                      value={newShowForm.venueId}
                      onChange={(e) =>
                        setNewShowForm({ ...newShowForm, venueId: e.target.value })
                      }
                      className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl"
                    >
                      {venues.map((v) => (
                        <option key={v.venueId} value={v.venueId}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Screen / Audi</label>
                    <select
                      value={newShowForm.screenId}
                      onChange={(e) =>
                        setNewShowForm({ ...newShowForm, screenId: e.target.value })
                      }
                      className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl"
                    >
                      {venues[0].screens.map((sc) => (
                        <option key={sc.screenId} value={sc.screenId}>
                          {sc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Show Date</label>
                    <input
                      type="date"
                      value={newShowForm.showDate}
                      onChange={(e) =>
                        setNewShowForm({ ...newShowForm, showDate: e.target.value })
                      }
                      className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Showtime</label>
                    <input
                      type="text"
                      placeholder="e.g. 07:30 PM"
                      value={newShowForm.showTime}
                      onChange={(e) =>
                        setNewShowForm({ ...newShowForm, showTime: e.target.value })
                      }
                      className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Screen Format</label>
                    <input
                      type="text"
                      value={newShowForm.format}
                      onChange={(e) =>
                        setNewShowForm({ ...newShowForm, format: e.target.value })
                      }
                      className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Base Tariff (₹)
                    </label>
                    <input
                      type="number"
                      value={newShowForm.basePrice}
                      onChange={(e) =>
                        setNewShowForm({ ...newShowForm, basePrice: e.target.value })
                      }
                      className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-xs transition mt-2 cursor-pointer"
                >
                  Confirm & Schedule Show
                </button>
              </form>
            </div>

            {/* Existing Schedules Preview */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
              <h4 className="font-bold text-sm text-gray-900 mb-4">
                Active Schedules ({shows.length})
              </h4>
              <div className="max-h-[460px] overflow-y-auto space-y-2.5 divide-y divide-gray-100">
                {shows.map((s) => {
                  const m = movies.find((movie) => movie.id === s.eventId);
                  return (
                    <div key={s.showId} className="pt-2.5 first:pt-0 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900">{m?.title}</span>
                        <span className="font-mono text-purple-600 font-bold">{s.showTime}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        {s.format} • Date: {s.showDate} • Base Tariff: ₹{s.basePrice}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 4. BOOKINGS MANAGEMENT (FR-ADM-02) */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <h3 className="font-bold text-base text-gray-900">
                Master Bookings Database ({bookings.length})
              </h3>
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search Booking ID or Customer..."
                  value={bookingSearch}
                  onChange={(e) => setBookingSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-xl"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-500 uppercase font-semibold border-b border-gray-200">
                  <tr>
                    <th className="py-2.5 px-3">Booking ID</th>
                    <th className="py-2.5 px-3">Customer</th>
                    <th className="py-2.5 px-3">Movie</th>
                    <th className="py-2.5 px-3">Seats</th>
                    <th className="py-2.5 px-3">Amount</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3">Check-in</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {bookings
                    .filter(
                      (b) =>
                        b.bookingId.toLowerCase().includes(bookingSearch.toLowerCase()) ||
                        b.userName?.toLowerCase().includes(bookingSearch.toLowerCase()) ||
                        b.movieTitle.toLowerCase().includes(bookingSearch.toLowerCase())
                    )
                    .map((b) => (
                      <tr key={b.bookingId} className="hover:bg-gray-50 transition">
                        <td className="py-2.5 px-3 font-mono font-bold text-gray-900">
                          {b.bookingId}
                        </td>
                        <td className="py-2.5 px-3">
                          <p className="font-medium text-gray-800">{b.userName || 'Customer'}</p>
                          <span className="text-[10px] text-gray-400">{b.userEmail}</span>
                        </td>
                        <td className="py-2.5 px-3 font-medium text-gray-800">{b.movieTitle}</td>
                        <td className="py-2.5 px-3 font-mono">
                          {b.seats.map((s) => s.seatNumber).join(', ')}
                        </td>
                        <td className="py-2.5 px-3 font-black text-gray-900">₹{b.totalAmount}</td>
                        <td className="py-2.5 px-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              b.status === 'confirmed'
                                ? 'bg-emerald-100 text-emerald-800'
                                : b.status === 'cancelled'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {b.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-3">
                          {b.isRedeemed ? (
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                              ✓ Redeemed
                            </span>
                          ) : (
                            <span className="text-[10px] text-gray-400">Pending Gate</span>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 5. USERS MANAGEMENT (FR-ADM-03) */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
            <h3 className="font-bold text-base text-gray-900 mb-4">
              Registered Accounts & RBAC Roles ({users.length})
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-500 uppercase font-semibold border-b border-gray-200">
                  <tr>
                    <th className="py-2.5 px-3">User ID</th>
                    <th className="py-2.5 px-3">Full Name</th>
                    <th className="py-2.5 px-3">Email & Phone</th>
                    <th className="py-2.5 px-3">Role</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {users.map((u) => (
                    <tr key={u.userId} className="hover:bg-gray-50 transition">
                      <td className="py-2.5 px-3 font-mono font-bold text-gray-500">{u.userId}</td>
                      <td className="py-2.5 px-3 font-bold text-gray-900">{u.name}</td>
                      <td className="py-2.5 px-3 text-gray-600">
                        {u.email} • {u.phone}
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-purple-100 text-purple-800">
                          {u.role}
                        </span>
                      </td>
                      <td className="py-2.5 px-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            u.isActive
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {u.isActive ? 'Active' : 'Suspended'}
                        </span>
                      </td>
                      <td className="py-2.5 px-3">
                        <button
                          onClick={() => toggleUserStatus(u.userId)}
                          className="px-2.5 py-1 text-[11px] font-semibold border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                        >
                          {u.isActive ? 'Suspend' : 'Activate'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 6. AUDIT LOGS (FR-ADM-05, SEC-05) */}
        {activeTab === 'audit' && (
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-base text-gray-900">
                  System & Compliance Audit Trail
                </h3>
                <p className="text-xs text-gray-500">
                  Immutable record of authentication, tariff modifications, cancellations and check-ins (SEC-05)
                </p>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-mono font-bold">
                {auditLogs.length} Events Logged
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-gray-50 text-gray-500 uppercase font-bold border-b border-gray-200">
                  <tr>
                    <th className="py-2.5 px-3">Timestamp</th>
                    <th className="py-2.5 px-3">Actor</th>
                    <th className="py-2.5 px-3">Action</th>
                    <th className="py-2.5 px-3">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {auditLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50 transition">
                      <td className="py-2.5 px-3 text-gray-400 whitespace-nowrap">
                        {log.timestamp}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-gray-800">{log.actor}</td>
                      <td className="py-2.5 px-3 text-purple-700 font-semibold">{log.action}</td>
                      <td className="py-2.5 px-3 text-gray-600 font-sans text-xs">
                        {log.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
