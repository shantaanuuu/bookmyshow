import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  MapPin,
  Bell,
  User,
  Film,
  Ticket,
  ChevronDown,
  Shield,
  QrCode,
  LogOut,
  Calendar,
  Sparkles,
  X
} from 'lucide-react';

export default function Navbar({ onOpenCityModal, onOpenAuthModal }) {
  const {
    selectedCity,
    currentUser,
    logoutUser,
    activeRole,
    setActiveRole,
    currentView,
    navigateTo,
    movies,
    bookings,
    notifications,
    markAllNotificationsRead,
    searchQuery,
    setSearchQuery,
    openAuthForRole,
  } = useApp();

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef(null);

  const handleRoleClick = (role) => {
    if (role === 'admin') {
      if (currentUser?.role === 'admin') {
        setActiveRole('admin');
        navigateTo('admin');
      } else {
        openAuthForRole('admin');
      }
    } else if (role === 'staff') {
      if (currentUser?.role === 'staff') {
        setActiveRole('staff');
        navigateTo('staffScanner');
      } else {
        openAuthForRole('staff');
      }
    } else {
      setActiveRole('customer');
      navigateTo('home');
    }
  };

  // Unread notifications
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Filter movies for auto-suggestion (FR-SRCH-01: auto-suggestions after 2 characters)
  const searchSuggestions =
    searchQuery.trim().length >= 2
      ? movies.filter(
          (m) =>
            m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            m.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
            m.cast?.some((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      : [];

  // Close menus on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('#user-menu-btn') && !e.target.closest('#user-menu-dropdown')) {
        setUserMenuOpen(false);
      }
      if (!e.target.closest('#notif-btn') && !e.target.closest('#notif-dropdown')) {
        setNotifOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#161926]/90 backdrop-blur-xl text-white border-b border-white/10 shadow-2xl transition-all">
      {/* Top Primary Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Logo & Search */}
          <div className="flex items-center gap-6 flex-1 max-w-3xl">
            {/* Logo */}
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2.5 group text-left cursor-pointer transition-transform hover:scale-102"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:shadow-red-500/50 transition-all">
                <Film className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-white leading-none">
                  book<span className="text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]">my</span>show
                </span>
                <span className="text-[9px] text-gray-400 font-bold tracking-widest uppercase flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Premiere Cinema
                </span>
              </div>
            </button>

            {/* Global Search with Live Autocomplete */}
            <div className="relative flex-1" ref={searchRef}>
              <div className="relative group">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3 transition-colors group-focus-within:text-red-400" />
                <input
                  type="text"
                  placeholder="Search movies, live concerts, standup comedy, IMAX..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  className="w-full bg-[#202538]/80 text-white text-xs sm:text-sm pl-10 pr-9 py-2.5 rounded-xl border border-white/10 focus:border-red-500/50 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-500/20 placeholder-gray-400 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Autocomplete Dropdown (FR-SRCH-01) */}
              {searchFocused && searchQuery.trim().length >= 2 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 text-gray-800 max-h-96 overflow-y-auto animate-fadeIn">
                  <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 flex justify-between items-center">
                    <span>MATCHING RESULTS ({searchSuggestions.length})</span>
                    <span className="text-[10px] text-gray-400">Press item to view details</span>
                  </div>
                  {searchSuggestions.length > 0 ? (
                    searchSuggestions.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setSearchFocused(false);
                          setSearchQuery('');
                          navigateTo('movieDetails', { eventId: item.id });
                        }}
                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-red-50/50 border-b border-gray-50 transition text-left cursor-pointer"
                      >
                        <img
                          src={item.posterUrl}
                          alt={item.title}
                          className="w-10 h-14 object-cover rounded-md shadow-xs flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 truncate">
                            {item.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {item.genre} • {item.language} • {item.certification}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs font-medium text-amber-600">
                              ★ {item.rating}/10
                            </span>
                            <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                              {item.category}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="p-6 text-center text-gray-500 text-sm">
                      No movies or events found matching "{searchQuery}".
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Navigation & Tools */}
          <div className="flex items-center gap-3">
            {/* City Selector */}
            <button
              onClick={onOpenCityModal}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-medium hover:text-red-400 transition cursor-pointer px-2 py-1.5 rounded-lg hover:bg-white/5"
            >
              <MapPin className="w-4 h-4 text-red-500" />
              <span>{selectedCity}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                id="notif-btn"
                onClick={() => {
                  setNotifOpen(!notifOpen);
                  if (!notifOpen) markAllNotificationsRead();
                }}
                className="relative p-2 rounded-lg hover:bg-white/10 text-gray-200 transition cursor-pointer"
                title="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notification Dropdown */}
              {notifOpen && (
                <div
                  id="notif-dropdown"
                  className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 text-gray-800 animate-fadeIn"
                >
                  <div className="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                    <span className="font-semibold text-sm text-gray-800">Notifications</span>
                    <span className="text-xs text-red-600 font-medium">All updates</span>
                  </div>
                  <div className="max-h-80 overflow-y-auto divide-y divide-gray-100">
                    {notifications.length > 0 ? (
                      notifications.map((n) => (
                        <div key={n.id} className="p-3.5 hover:bg-gray-50 transition">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-gray-800">{n.title}</span>
                            <span className="text-[10px] text-gray-400">{n.timestamp}</span>
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed">{n.message}</p>
                        </div>
                      ))
                    ) : (
                      <div className="p-6 text-center text-xs text-gray-400">
                        No notifications yet.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Dedicated Role & Portal Pills */}
            <div className="flex items-center bg-[#10131e]/90 p-1 rounded-2xl border border-white/10 gap-1 shadow-inner">
              <button
                onClick={() => handleRoleClick('customer')}
                className={`text-xs px-3 py-1.5 rounded-xl transition font-bold flex items-center gap-1.5 cursor-pointer ${
                  currentView !== 'admin' && currentView !== 'staffScanner'
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30 ring-1 ring-white/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                title="Customer Storefront (Movies & Bookings)"
              >
                <span>👤</span>
                <span className="hidden md:inline">User</span>
              </button>

              <button
                onClick={() => handleRoleClick('admin')}
                className={`text-xs px-3 py-1.5 rounded-xl transition font-bold flex items-center gap-1.5 cursor-pointer ${
                  currentView === 'admin'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 ring-1 ring-white/20'
                    : currentUser?.role === 'admin'
                    ? 'text-purple-300 hover:text-purple-100 bg-purple-950/60 border border-purple-500/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                title="Admin Console & Pricing"
              >
                <Shield className="w-3.5 h-3.5 text-purple-400" />
                <span className="hidden sm:inline">Admin</span>
                {currentUser?.role === 'admin' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping ml-0.5"></span>
                )}
              </button>

              <button
                onClick={() => handleRoleClick('staff')}
                className={`text-xs px-3 py-1.5 rounded-xl transition font-bold flex items-center gap-1.5 cursor-pointer ${
                  currentView === 'staffScanner'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/30 ring-1 ring-white/20'
                    : currentUser?.role === 'staff'
                    ? 'text-blue-300 hover:text-blue-100 bg-blue-950/60 border border-blue-500/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                title="Gate Staff Scanner"
              >
                <QrCode className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden sm:inline">Staff</span>
                {currentUser?.role === 'staff' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping ml-0.5"></span>
                )}
              </button>
            </div>

            {/* Direct 'My Tickets' Quick Access Button */}
            <button
              onClick={() => navigateTo('myBookings')}
              className={`flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-xl font-bold transition cursor-pointer border ${
                currentView === 'myBookings'
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white border-red-500 shadow-lg shadow-red-600/30'
                  : 'bg-white/10 hover:bg-white/15 text-gray-200 border-white/15 hover:border-white/30'
              }`}
              title="View Booked Tickets & Passes"
            >
              <Ticket className="w-4 h-4 text-rose-400 animate-pulse" />
              <span className="hidden sm:inline">My Tickets</span>
              {bookings && bookings.filter((b) => b.status === 'confirmed').length > 0 && (
                <span className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-[10px] font-black flex items-center justify-center shadow-xs">
                  {bookings.filter((b) => b.status === 'confirmed').length}
                </span>
              )}
            </button>

            {/* User Account / Auth */}
            {currentUser ? (
              <div className="relative">
                <button
                  id="user-menu-btn"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-white/10 transition cursor-pointer"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-white ${
                    currentUser.role === 'admin'
                      ? 'bg-gradient-to-tr from-purple-600 to-indigo-600'
                      : currentUser.role === 'staff'
                      ? 'bg-gradient-to-tr from-blue-600 to-cyan-600'
                      : 'bg-gradient-to-tr from-red-500 to-amber-500'
                  }`}>
                    {currentUser.name.charAt(0)}
                  </div>
                  <span className="hidden sm:inline text-xs font-semibold text-gray-200">
                    {currentUser.name.split(' ')[0]}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                {/* User Dropdown */}
                {userMenuOpen && (
                  <div
                    id="user-menu-dropdown"
                    className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 text-gray-800 animate-fadeIn"
                  >
                    <div className="p-3.5 bg-gray-50 border-b border-gray-100">
                      <p className="text-xs font-bold text-gray-900">{currentUser.name}</p>
                      <p className="text-[11px] text-gray-500 truncate">{currentUser.email}</p>
                      <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded capitalize ${
                        currentUser.role === 'admin'
                          ? 'bg-purple-100 text-purple-700'
                          : currentUser.role === 'staff'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {currentUser.role} Account
                      </span>
                    </div>

                    <div className="p-1">
                      {currentUser.role === 'customer' && (
                        <button
                          onClick={() => {
                            setUserMenuOpen(false);
                            navigateTo('myBookings');
                          }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition text-left cursor-pointer"
                        >
                          <Ticket className="w-4 h-4 text-red-500" />
                          My Bookings & Invoices
                        </button>
                      )}

                      {currentUser.role === 'admin' && (
                        <>
                          <button
                            onClick={() => {
                              setUserMenuOpen(false);
                              setActiveRole('admin');
                              navigateTo('admin');
                            }}
                            className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-purple-700 hover:bg-purple-50 rounded-lg transition text-left cursor-pointer"
                          >
                            <Shield className="w-4 h-4 text-purple-500" />
                            Admin Console
                          </button>
                          <button
                            onClick={() => {
                              setUserMenuOpen(false);
                              navigateTo('home');
                            }}
                            className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded-lg transition text-left cursor-pointer"
                          >
                            <Film className="w-4 h-4 text-gray-500" />
                            Storefront View
                          </button>
                        </>
                      )}

                      {currentUser.role === 'staff' && (
                        <>
                          <button
                            onClick={() => {
                              setUserMenuOpen(false);
                              setActiveRole('staff');
                              navigateTo('staffScanner');
                            }}
                            className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-50 rounded-lg transition text-left cursor-pointer"
                          >
                            <QrCode className="w-4 h-4 text-blue-500" />
                            Gate QR Scanner
                          </button>
                          <button
                            onClick={() => {
                              setUserMenuOpen(false);
                              navigateTo('home');
                            }}
                            className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-gray-700 hover:bg-gray-100 rounded-lg transition text-left cursor-pointer"
                          >
                            <Film className="w-4 h-4 text-gray-500" />
                            Storefront View
                          </button>
                        </>
                      )}

                      <div className="border-t border-gray-100 my-1" />

                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          logoutUser();
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50 rounded-lg transition text-left cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => openAuthForRole('customer')}
                className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-sm cursor-pointer flex items-center gap-1.5"
              >
                <User className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Secondary Category Navbar */}
      <div className="bg-[#222434] text-xs font-medium border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-6 whitespace-nowrap">
              <button
                onClick={() => navigateTo('home')}
                className={`hover:text-red-400 transition cursor-pointer ${
                  currentView === 'home' ? 'text-red-500 font-bold' : 'text-gray-300'
                }`}
              >
                Movies
              </button>
              <button
                onClick={() => navigateTo('home')}
                className="hover:text-red-400 transition text-gray-300 cursor-pointer"
              >
                Stream
              </button>
              <button
                onClick={() => navigateTo('home')}
                className="hover:text-red-400 transition text-gray-300 cursor-pointer"
              >
                Events & Concerts
              </button>
              <button
                onClick={() => navigateTo('home')}
                className="hover:text-red-400 transition text-gray-300 cursor-pointer"
              >
                Plays & Theatre
              </button>
              <button
                onClick={() => navigateTo('home')}
                className="hover:text-red-400 transition text-gray-300 cursor-pointer"
              >
                Sports
              </button>
              <button
                onClick={() => navigateTo('home')}
                className="hover:text-red-400 transition text-gray-300 cursor-pointer"
              >
                Standup Comedy
              </button>
              <button
                onClick={() => navigateTo('myBookings')}
                className={`hover:text-red-400 transition cursor-pointer flex items-center gap-1 font-semibold ${
                  currentView === 'myBookings' ? 'text-red-500 font-bold' : 'text-amber-300'
                }`}
              >
                <span>🎟️</span>
                <span>My Bookings & QR Passes</span>
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-gray-400 whitespace-nowrap">
              <span className="hover:text-white cursor-pointer transition">Offers & Coupons</span>
              <span className="hover:text-white cursor-pointer transition">Corporate Bookings</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
