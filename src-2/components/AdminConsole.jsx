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
  ChevronLeft,
  LogOut,
  Trash2,
  Plus,
  Star,
  ExternalLink,
  X,
  Filter,
  Check,
  MapPin,
  Tag
} from 'lucide-react';

export default function AdminConsole() {
  const {
    shows,
    setShows,
    movies,
    setMovies,
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
    currentUser,
    logoutUser,
    addMovie,
    deleteMovie,
    deleteShow,
  } = useApp();

  const [activeTab, setActiveTab] = useState('analytics'); // 'analytics' | 'movies' | 'dynamicPricing' | 'scheduling' | 'bookings' | 'users' | 'audit'

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
  const [showSearch, setShowSearch] = useState('');

  // Movie Management state
  const [movieSearch, setMovieSearch] = useState('');
  const [movieCategoryFilter, setMovieCategoryFilter] = useState('All');
  const [movieLangFilter, setMovieLangFilter] = useState('All');
  const [showAddMovieModal, setShowAddMovieModal] = useState(false);
  const [newMovieForm, setNewMovieForm] = useState({
    title: '',
    category: 'Movies',
    genre: 'Action / Sci-Fi',
    language: 'Hindi',
    duration: 150,
    certification: 'U/A 16+',
    rating: 8.8,
    director: '',
    cast: '',
    description: '',
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80',
    formats: '2D, IMAX 3D',
  });

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

    logAuditAction(
      currentUser?.name || 'Admin',
      'Show Scheduled',
      `Scheduled ${newShowForm.eventId} on ${newShowForm.showDate} at ${newShowForm.showTime}.`
    );

    addNotification({
      title: 'New Show Scheduled 🎬',
      message: `Show added for ${newShowForm.showDate} (${newShowForm.showTime}).`,
      type: 'info',
    });

    setScheduleSuccess(`Successfully scheduled show ${newShowId}!`);
  };

  // Handle New Movie Creation
  const handleCreateMovie = (e) => {
    e.preventDefault();
    if (!newMovieForm.title.trim()) return;

    const moviePayload = {
      title: newMovieForm.title.trim(),
      category: newMovieForm.category,
      genre: newMovieForm.genre,
      genres: newMovieForm.genre.split('/').map((g) => g.trim()).filter(Boolean),
      language: newMovieForm.language,
      availableLanguages: [newMovieForm.language],
      duration: Number(newMovieForm.duration) || 120,
      certification: newMovieForm.certification,
      rating: Number(newMovieForm.rating) || 8.5,
      director: newMovieForm.director || 'Acclaimed Director',
      cast: newMovieForm.cast
        ? newMovieForm.cast.split(',').map((c) => ({ name: c.trim(), role: 'Main Cast' }))
        : [{ name: 'Ensemble Cast', role: 'Main Lead' }],
      description: newMovieForm.description || 'An unmissable cinematic experience in theatres.',
      posterUrl:
        newMovieForm.posterUrl.trim() ||
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
      bannerUrl:
        newMovieForm.bannerUrl.trim() ||
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80',
      formats: newMovieForm.formats.split(',').map((f) => f.trim()).filter(Boolean),
    };

    addMovie(moviePayload);
    setShowAddMovieModal(false);
    setNewMovieForm({
      title: '',
      category: 'Movies',
      genre: 'Action / Sci-Fi',
      language: 'Hindi',
      duration: 150,
      certification: 'U/A 16+',
      rating: 8.8,
      director: '',
      cast: '',
      description: '',
      posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
      bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80',
      formats: '2D, IMAX 3D',
    });
  };

  // Filtered movies
  const filteredMovies = movies.filter((m) => {
    if (movieCategoryFilter !== 'All' && m.category !== movieCategoryFilter) return false;
    if (movieLangFilter !== 'All' && m.language !== movieLangFilter && !m.availableLanguages?.includes(movieLangFilter)) return false;
    if (
      movieSearch.trim() &&
      !m.title.toLowerCase().includes(movieSearch.toLowerCase()) &&
      !m.genre?.toLowerCase().includes(movieSearch.toLowerCase()) &&
      !m.director?.toLowerCase().includes(movieSearch.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  // Filtered shows in scheduling tab
  const filteredShowsList = shows.filter((s) => {
    if (!showSearch.trim()) return true;
    const m = movies.find((movie) => movie.id === s.eventId);
    const v = venues.find((venue) => venue.venueId === s.venueId);
    const search = showSearch.toLowerCase();
    return (
      s.showId.toLowerCase().includes(search) ||
      m?.title?.toLowerCase().includes(search) ||
      v?.name?.toLowerCase().includes(search) ||
      s.showTime.toLowerCase().includes(search)
    );
  });

  return (
    <div className="min-h-screen bg-[#f5f5fa] pb-24">
      {/* Top Banner */}
      <div className="bg-[#1a1d29] text-white py-6 px-4 sm:px-8 border-b border-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition mb-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Storefront
            </button>
            <h1 className="text-2xl font-black text-white flex items-center gap-2">
              <Shield className="w-6 h-6 text-purple-400" />
              BookMyShow Admin Operations & Pricing Console
            </h1>
            <p className="text-xs text-gray-400">
              Manage cinema inventory, dynamic tariffs, screening schedules, and compliance audits
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-purple-900/40 border border-purple-500/40 px-3 py-1.5 rounded-xl text-purple-200 text-xs">
              <Zap className="w-4 h-4 text-purple-400 animate-pulse" />
              <span>AI Dynamic Pricing: <strong>Active</strong></span>
            </div>

            <div className="flex items-center gap-2 bg-gray-800/80 border border-gray-700 px-3 py-1.5 rounded-xl text-xs text-gray-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{currentUser?.name || 'Administrator'}</span>
            </div>

            <button
              onClick={() => logoutUser('home')}
              className="flex items-center gap-1.5 bg-red-600/90 hover:bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition cursor-pointer shadow-sm"
              title="Sign Out of Admin Console"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Admin Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-gray-200 pb-3 mb-6 overflow-x-auto no-scrollbar">
          {[
            { id: 'analytics', label: '📊 System Analytics', icon: TrendingUp },
            { id: 'movies', label: `🎬 Movies & Catalog (${movies.length})`, icon: Film },
            { id: 'dynamicPricing', label: '⚡ Dynamic Pricing & Auto-Scaler', icon: Zap },
            { id: 'scheduling', label: `📅 Screen Scheduling (${shows.length})`, icon: Calendar },
            { id: 'bookings', label: `🎟️ Manage Bookings (${bookings.length})`, icon: FileCheck },
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
                    ? 'bg-purple-600 text-white shadow-md'
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
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Total Platform Revenue
                </span>
                <p className="text-2xl font-black text-emerald-600 mt-1">₹{totalRevenue.toLocaleString()}</p>
                <span className="text-[11px] text-gray-500 mt-1 block">Live across all multiplexes</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Confirmed Bookings
                </span>
                <p className="text-2xl font-black text-gray-900 mt-1">{bookings.length}</p>
                <span className="text-[11px] text-gray-500 mt-1 block">
                  {totalTicketsSold} individual tickets issued
                </span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Catalog Blockbusters
                </span>
                <p className="text-2xl font-black text-purple-600 mt-1">{movies.length}</p>
                <span className="text-[11px] text-gray-500 mt-1 block">
                  Active titles across 8 cities
                </span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Active Screenings
                </span>
                <p className="text-2xl font-black text-blue-600 mt-1">{shows.length}</p>
                <span className="text-[11px] text-gray-500 mt-1 block">
                  Avg Occupancy: {avgOccupancy}%
                </span>
              </div>
            </div>

            {/* Quick Actions Row */}
            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
              <div>
                <h3 className="text-lg font-bold">Fast Catalog Operations</h3>
                <p className="text-xs text-purple-200 mt-0.5">
                  Expand the cinema catalog with new releases, adjust screening schedules, or deploy dynamic pricing tariffs.
                </p>
              </div>
              <div className="flex gap-2.5">
                <button
                  onClick={() => {
                    setActiveTab('movies');
                    setShowAddMovieModal(true);
                  }}
                  className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold text-xs rounded-xl transition shadow-sm cursor-pointer flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" /> Add New Movie
                </button>
                <button
                  onClick={() => setActiveTab('scheduling')}
                  className="px-4 py-2 bg-white text-purple-900 hover:bg-purple-50 font-bold text-xs rounded-xl transition shadow-sm cursor-pointer flex items-center gap-1.5"
                >
                  <Calendar className="w-4 h-4" /> Schedule Show
                </button>
              </div>
            </div>

            {/* Occupancy per Show Table */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-base text-gray-900 mb-4">
                Real-Time Screen Occupancy & Tariffs (First 15 Active Shows)
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
                      <th className="py-3 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {shows.slice(0, 15).map((s) => {
                      const m = movies.find((movie) => movie.id === s.eventId);
                      const v = venues.find((venue) => venue.venueId === s.venueId);
                      const isHigh = s.occupancyRate >= 80;

                      return (
                        <tr key={s.showId} className="hover:bg-gray-50 transition">
                          <td className="py-3 px-4 font-mono font-bold text-gray-700">{s.showId}</td>
                          <td className="py-3 px-4 font-semibold text-gray-900">{m?.title || s.eventId}</td>
                          <td className="py-3 px-4 text-gray-600">{v?.name || s.venueId}</td>
                          <td className="py-3 px-4 font-medium text-gray-800">{s.showTime}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-20 bg-gray-200 rounded-full h-2 overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${isHigh ? 'bg-amber-500' : 'bg-emerald-500'}`}
                                  style={{ width: `${s.occupancyRate}%` }}
                                />
                              </div>
                              <span className={`font-bold ${isHigh ? 'text-amber-600' : 'text-gray-700'}`}>
                                {s.occupancyRate}%
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4 font-semibold text-gray-900">₹{s.basePrice}</td>
                          <td className="py-3 px-4">
                            <button
                              onClick={() => deleteShow(s.showId)}
                              className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 cursor-pointer"
                              title="Delete Show"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
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

        {/* 2. MOVIES & CATALOG MANAGEMENT TAB */}
        {activeTab === 'movies' && (
          <div className="space-y-6">
            {/* Header controls */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 w-full flex flex-col sm:flex-row items-center gap-3">
                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="Search movie by title, genre, or director..."
                    value={movieSearch}
                    onChange={(e) => setMovieSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  {movieSearch && (
                    <button
                      onClick={() => setMovieSearch('')}
                      className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <select
                    value={movieCategoryFilter}
                    onChange={(e) => setMovieCategoryFilter(e.target.value)}
                    className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 cursor-pointer"
                  >
                    <option value="All">All Categories</option>
                    <option value="Movies">Movies</option>
                    <option value="Events">Live Events</option>
                    <option value="Standup Comedy">Comedy</option>
                  </select>

                  <select
                    value={movieLangFilter}
                    onChange={(e) => setMovieLangFilter(e.target.value)}
                    className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 cursor-pointer"
                  >
                    <option value="All">All Languages</option>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Japanese">Japanese (Anime)</option>
                  </select>
                </div>
              </div>

              <button
                onClick={() => setShowAddMovieModal(true)}
                className="w-full md:w-auto px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Plus className="w-4 h-4" /> Add New Movie
              </button>
            </div>

            {/* Movies Catalog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition group"
                >
                  <div className="relative aspect-[2/3] bg-gray-900 overflow-hidden">
                    <img
                      src={movie.posterUrl}
                      alt={movie.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-black bg-black/70 backdrop-blur-sm text-amber-400 border border-amber-500/30 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        {movie.rating}/10
                      </span>
                    </div>
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-black/70 backdrop-blur-sm text-white">
                        {movie.certification}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 line-clamp-1 group-hover:text-purple-600 transition">
                        {movie.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                        {movie.genre} • {movie.language}
                      </p>
                      <p className="text-[11px] text-gray-400 mt-1">
                        ⏱️ {movie.duration} mins • {movie.category}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => {
                          setNewShowForm((prev) => ({ ...prev, eventId: movie.id }));
                          setActiveTab('scheduling');
                        }}
                        className="flex-1 py-1.5 px-2 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-[11px] rounded-lg transition text-center cursor-pointer"
                        title="Schedule screening for this movie"
                      >
                        📅 Schedule
                      </button>

                      <button
                        onClick={() => navigateTo('movieDetails', { eventId: movie.id })}
                        className="p-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition cursor-pointer"
                        title="View storefront page"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => {
                          if (window.confirm(`Are you sure you want to delete "${movie.title}"?`)) {
                            deleteMovie(movie.id);
                          }
                        }}
                        className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition cursor-pointer"
                        title="Delete movie"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredMovies.length === 0 && (
              <div className="bg-white rounded-3xl p-12 text-center border border-gray-200">
                <Film className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="font-bold text-base text-gray-700">No movies found</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Try adjusting your search query or language filter.
                </p>
              </div>
            )}
          </div>
        )}

        {/* 3. DYNAMIC PRICING TAB */}
        {activeTab === 'dynamicPricing' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-900">
                    High Demand Screenings & Auto-Scaler Engine
                  </h3>
                  <p className="text-xs text-gray-500">
                    Shows exceeding 80% capacity trigger intelligent tariff multiplier adjustments.
                  </p>
                </div>
              </div>

              {highDemandShows.length > 0 ? (
                <div className="space-y-4 mt-6">
                  {highDemandShows.map((s) => {
                    const m = movies.find((movie) => movie.id === s.eventId);
                    const v = venues.find((venue) => venue.venueId === s.venueId);

                    return (
                      <div
                        key={s.showId}
                        className="p-5 rounded-2xl border border-amber-200 bg-amber-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-white uppercase">
                              Surge Trigger: {s.occupancyRate}% Occupancy
                            </span>
                            <span className="text-xs font-mono text-gray-500">{s.showId}</span>
                          </div>
                          <h4 className="font-bold text-sm text-gray-900">{m?.title}</h4>
                          <p className="text-xs text-gray-600 mt-0.5">
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
                <p className="text-xs text-gray-500 text-center py-8">
                  No shows currently cross the 80% occupancy threshold.
                </p>
              )}
            </div>
          </div>
        )}

        {/* 4. SCREEN SCHEDULING TAB */}
        {activeTab === 'scheduling' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-base text-gray-900 mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  Schedule New Cinema Show
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Select movie, theatre, date, and showtime with automated overlap conflict detection.
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
                      className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl cursor-pointer"
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
                        className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl cursor-pointer"
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
                        className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl cursor-pointer"
                      >
                        {(
                          venues.find((v) => v.venueId === newShowForm.venueId)?.screens ||
                          venues[0].screens
                        ).map((sc) => (
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
                      <label className="block font-semibold text-gray-700 mb-1">Base Tariff (₹)</label>
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
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-sm text-gray-900">
                    Active Schedules ({shows.length})
                  </h4>
                  <div className="relative w-48">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2" />
                    <input
                      type="text"
                      placeholder="Filter shows..."
                      value={showSearch}
                      onChange={(e) => setShowSearch(e.target.value)}
                      className="w-full pl-8 pr-2 py-1 text-[11px] bg-gray-50 border border-gray-200 rounded-lg"
                    />
                  </div>
                </div>

                <div className="max-h-[460px] overflow-y-auto space-y-2.5 divide-y divide-gray-100 flex-1">
                  {filteredShowsList.slice(0, 30).map((s) => {
                    const m = movies.find((movie) => movie.id === s.eventId);
                    const v = venues.find((venue) => venue.venueId === s.venueId);

                    return (
                      <div key={s.showId} className="pt-2.5 first:pt-0 text-xs flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900">{m?.title}</span>
                            <span className="font-mono text-purple-600 font-bold">{s.showTime}</span>
                          </div>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            {v?.name?.split(':')[0]} • {s.format} • ₹{s.basePrice}
                          </p>
                        </div>
                        <button
                          onClick={() => deleteShow(s.showId)}
                          className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition cursor-pointer"
                          title="Cancel Show"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. BOOKINGS MANAGEMENT */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
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
                    <th className="py-2.5 px-3">Gate Pass</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {bookings
                    .filter(
                      (b) =>
                        b.bookingId.toLowerCase().includes(bookingSearch.toLowerCase()) ||
                        b.userName?.toLowerCase().includes(bookingSearch.toLowerCase()) ||
                        b.movieTitle?.toLowerCase().includes(bookingSearch.toLowerCase())
                    )
                    .map((b) => (
                      <tr key={b.bookingId} className="hover:bg-gray-50 transition">
                        <td className="py-2.5 px-3 font-mono font-bold text-purple-700">{b.bookingId}</td>
                        <td className="py-2.5 px-3">
                          <p className="font-semibold text-gray-900">{b.userName}</p>
                          <p className="text-[10px] text-gray-400">{b.userEmail}</p>
                        </td>
                        <td className="py-2.5 px-3 font-medium text-gray-800">{b.movieTitle}</td>
                        <td className="py-2.5 px-3 font-mono font-bold">
                          {b.seats.map((s) => s.seatNumber).join(', ')}
                        </td>
                        <td className="py-2.5 px-3 font-bold text-gray-900">₹{b.totalAmount}</td>
                        <td className="py-2.5 px-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              b.status === 'confirmed'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {b.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              b.isRedeemed
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {b.isRedeemed ? '✓ Scanned' : 'Pending Entry'}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 6. USERS MANAGEMENT */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
            <h3 className="font-bold text-base text-gray-900">User Identity & Privileges Directory</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-500 uppercase font-semibold border-b border-gray-200">
                  <tr>
                    <th className="py-2.5 px-3">User ID</th>
                    <th className="py-2.5 px-3">Full Name</th>
                    <th className="py-2.5 px-3">Email Address</th>
                    <th className="py-2.5 px-3">Current Role</th>
                    <th className="py-2.5 px-3">City</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {users.map((u) => (
                    <tr key={u.userId} className="hover:bg-gray-50">
                      <td className="py-2.5 px-3 font-mono">{u.userId}</td>
                      <td className="py-2.5 px-3 font-bold text-gray-900">{u.name}</td>
                      <td className="py-2.5 px-3 text-gray-600">{u.email}</td>
                      <td className="py-2.5 px-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold capitalize ${
                            u.role === 'admin'
                              ? 'bg-purple-100 text-purple-700'
                              : u.role === 'staff'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-emerald-100 text-emerald-700'
                          }`}
                        >
                          {u.role}
                        </span>
                      </td>
                      <td className="py-2.5 px-3">{u.preferredCity || 'Mumbai'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 7. AUDIT LOGS */}
        {activeTab === 'audit' && (
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
            <h3 className="font-bold text-base text-gray-900">Platform Security & Audit Trail</h3>
            <div className="space-y-2.5">
              {auditLogs.map((log) => (
                <div key={log.id} className="p-3.5 bg-gray-50 rounded-xl border border-gray-100 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-gray-800">{log.action}</span>
                    <span className="text-[11px] text-gray-400 font-mono">{log.timestamp}</span>
                  </div>
                  <p className="text-gray-600">{log.details}</p>
                  <p className="text-[10px] text-purple-600 mt-1 font-semibold">Actor: {log.actor}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ADD MOVIE MODAL */}
      {showAddMovieModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
            <div className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white p-6 relative">
              <button
                onClick={() => setShowAddMovieModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <h2 className="text-xl font-black flex items-center gap-2">
                <Film className="w-5 h-5 text-purple-300" /> Add New Movie / Event to Catalog
              </h2>
              <p className="text-xs text-purple-200 mt-1">
                Enter movie metadata. Showtimes will be automatically generated across cinemas.
              </p>
            </div>

            <form onSubmit={handleCreateMovie} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Movie / Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Fighter 2, Avatar 3, Inception"
                  value={newMovieForm.title}
                  onChange={(e) => setNewMovieForm({ ...newMovieForm, title: e.target.value })}
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Category</label>
                  <select
                    value={newMovieForm.category}
                    onChange={(e) => setNewMovieForm({ ...newMovieForm, category: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl cursor-pointer"
                  >
                    <option value="Movies">Movies</option>
                    <option value="Events">Live Events</option>
                    <option value="Standup Comedy">Standup Comedy</option>
                    <option value="Plays">Plays & Theatre</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Primary Language</label>
                  <select
                    value={newMovieForm.language}
                    onChange={(e) => setNewMovieForm({ ...newMovieForm, language: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl cursor-pointer"
                  >
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Japanese">Japanese</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Genre</label>
                  <input
                    type="text"
                    placeholder="e.g. Action / Thriller"
                    value={newMovieForm.genre}
                    onChange={(e) => setNewMovieForm({ ...newMovieForm, genre: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Duration (mins)</label>
                  <input
                    type="number"
                    value={newMovieForm.duration}
                    onChange={(e) => setNewMovieForm({ ...newMovieForm, duration: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Certification</label>
                  <select
                    value={newMovieForm.certification}
                    onChange={(e) => setNewMovieForm({ ...newMovieForm, certification: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl cursor-pointer"
                  >
                    <option value="U">U (Universal)</option>
                    <option value="U/A 13+">U/A 13+</option>
                    <option value="U/A 16+">U/A 16+</option>
                    <option value="A">A (Adults Only)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Rating (/10)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="10"
                    value={newMovieForm.rating}
                    onChange={(e) => setNewMovieForm({ ...newMovieForm, rating: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Director</label>
                  <input
                    type="text"
                    placeholder="e.g. Christopher Nolan, S.S. Rajamouli"
                    value={newMovieForm.director}
                    onChange={(e) => setNewMovieForm({ ...newMovieForm, director: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Key Cast (comma-separated)</label>
                  <input
                    type="text"
                    placeholder="e.g. Shah Rukh Khan, Deepika Padukone"
                    value={newMovieForm.cast}
                    onChange={(e) => setNewMovieForm({ ...newMovieForm, cast: e.target.value })}
                    className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Synopsis / Storyline</label>
                <textarea
                  rows={3}
                  placeholder="Brief synopsis of the movie..."
                  value={newMovieForm.description}
                  onChange={(e) => setNewMovieForm({ ...newMovieForm, description: e.target.value })}
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Poster Image URL</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={newMovieForm.posterUrl}
                  onChange={(e) => setNewMovieForm({ ...newMovieForm, posterUrl: e.target.value })}
                  className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowAddMovieModal(false)}
                  className="px-5 py-2.5 border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-md cursor-pointer transition"
                >
                  Save & Publish Movie
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
