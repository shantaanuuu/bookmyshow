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
    notifications,
    markAllNotificationsRead,
    searchQuery,
    setSearchQuery,
  } = useApp();

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef(null);
  const openProtectedRole = (role, view) => {
    if (currentUser?.role === role || (role === 'customer' && currentUser?.role === 'customer')) {
      setActiveRole(role);
      navigateTo(view);
    } else {
      onOpenAuthModal();
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
    <header className="sticky top-0 z-40 bg-[#333545] text-white shadow-md">
      {/* Top Primary Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Logo & Search */}
          <div className="flex items-center gap-6 flex-1 max-w-3xl">
            {/* Logo */}
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2 group text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Film className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-white leading-none">
                  book<span className="text-red-500">my</span>show
                </span>
                <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                  Cinemas & Events
                </span>
              </div>
            </button>

            {/* Global Search with Live Autocomplete */}
            <div className="relative flex-1" ref={searchRef}>
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search for Movies, Events, Plays, Sports and Activities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  className="w-full bg-white text-gray-800 text-sm pl-10 pr-9 py-2 rounded-lg border-0 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
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

            {/* Role Switcher Pills (Evaluation Aid) */}
            <div className="hidden lg:flex items-center bg-[#222434] p-1 rounded-xl border border-gray-700/60">
              <button
                onClick={() => {
                  openProtectedRole('customer', 'home');
                }}
                className={`text-xs px-2.5 py-1 rounded-lg transition font-medium ${
                  activeRole === 'customer'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="Customer View"
              >
                👤 Customer
              </button>
              <button
                onClick={() => {
                  openProtectedRole('admin', 'admin');
                }}
                className={`text-xs px-2.5 py-1 rounded-lg transition font-medium ${
                  activeRole === 'admin'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="Admin Console"
              >
                🛠️ Admin
              </button>
              <button
                onClick={() => {
                  openProtectedRole('staff', 'staffScanner');
                }}
                className={`text-xs px-2.5 py-1 rounded-lg transition font-medium ${
                  activeRole === 'staff'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="Gate Staff Scanner"
              >
                🎟️ Staff
              </button>
            </div>

            {/* User Account / Auth */}
            {currentUser ? (
              <div className="relative">
                <button
                  id="user-menu-btn"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-white/10 transition cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-red-500 to-amber-500 flex items-center justify-center font-bold text-xs text-white">
                    {currentUser.name.charAt(0)}
                  </div>
                  <span className="hidden sm:inline text-xs font-medium text-gray-200">
                    Hi, {currentUser.name.split(' ')[0]}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                {/* User Dropdown */}
                {userMenuOpen && (
                  <div
                    id="user-menu-dropdown"
                    className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 text-gray-800 animate-fadeIn"
                  >
                    <div className="p-3.5 bg-gray-50 border-b border-gray-100">
                      <p className="text-xs font-bold text-gray-900">{currentUser.name}</p>
                      <p className="text-[11px] text-gray-500 truncate">{currentUser.email}</p>
                      <span className="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-red-100 text-red-700 capitalize">
                        {currentUser.role} Account
                      </span>
                    </div>

                    <div className="p-1">
                      {currentUser.role === 'customer' && <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          navigateTo('myBookings');
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition text-left"
                      >
                        <Ticket className="w-4 h-4 text-red-500" />
                        My Bookings & Invoices
                      </button>}

                      {currentUser.role === 'admin' && <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          setActiveRole('admin');
                          navigateTo('admin');
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition text-left"
                      >
                        <Shield className="w-4 h-4 text-purple-500" />
                        Admin & Pricing Console
                      </button>}

                      {currentUser.role === 'staff' && <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          setActiveRole('staff');
                          navigateTo('staffScanner');
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition text-left"
                      >
                        <QrCode className="w-4 h-4 text-blue-500" />
                        Staff Entry QR Scanner
                      </button>}

                      <div className="border-t border-gray-100 my-1" />

                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          logoutUser();
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-red-600 hover:bg-red-50 rounded-lg transition text-left"
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
                onClick={onOpenAuthModal}
                className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition shadow-sm cursor-pointer"
              >
                Sign In
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
