import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_CITIES,
  INITIAL_CATEGORIES,
  INITIAL_MOVIES,
  INITIAL_VENUES,
  INITIAL_SHOWS,
  INITIAL_FNB,
  DEMO_USERS,
  INITIAL_BOOKINGS,
  INITIAL_REVIEWS,
  INITIAL_AUDIT_LOGS,
  generateSeatLayout,
} from '../data/mockData';
import confetti from 'canvas-confetti';
import api from '../../frontend/src/api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Cities & Categories
  const [cities] = useState(INITIAL_CITIES);
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [categories] = useState(INITIAL_CATEGORIES);

  // Authentication State
  const [users, setUsers] = useState(DEMO_USERS);
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    return storedUser ? { ...storedUser, userId: storedUser.id, role: storedUser.role === 'user' ? 'customer' : storedUser.role } : null;
  });
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalRole, setAuthModalRole] = useState('customer'); // 'customer' | 'admin' | 'staff'
  const [activeRole, setActiveRole] = useState(() => {
    const role = JSON.parse(localStorage.getItem('user') || 'null')?.role;
    return role === 'user' || !role ? 'customer' : role;
  });

  const openAuthForRole = (role = 'customer') => {
    if (currentUser && currentUser.role === role) {
      setActiveRole(role);
      navigateTo(role === 'admin' ? 'admin' : role === 'staff' ? 'staffScanner' : 'home');
      return;
    }
    setAuthModalRole(role);
    setAuthModalOpen(true);
  };

  // Navigation / View State
  const [currentView, setCurrentView] = useState('home');
  // 'home' | 'movieDetails' | 'seatMap' | 'checkout' | 'confirmation' | 'myBookings' | 'admin' | 'staffScanner' | 'profile'
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);

  // Movies & Shows Catalog
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const [venues, setVenues] = useState(INITIAL_VENUES);
  const [shows, setShows] = useState(INITIAL_SHOWS);

  // Seat Layout State (keyed by showId)
  const [seatLayouts, setSeatLayouts] = useState(() => {
    const map = {};
    INITIAL_SHOWS.forEach((show) => {
      map[show.showId] = generateSeatLayout(show.screenId, show.showId);
    });
    return map;
  });

  // Booking Flow State
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [fnbSelected, setFnbSelected] = useState([]);
  const [seatLockSeconds, setSeatLockSeconds] = useState(null); // 480 seconds (8 minutes)
  const [isLockExpired, setIsLockExpired] = useState(false);
  const [lastBooking, setLastBooking] = useState(null);

  // Bookings & Transactions Store
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [auditLogs, setAuditLogs] = useState(INITIAL_AUDIT_LOGS);

  // Notifications
  const [notifications, setNotifications] = useState([
    {
      id: 'n1',
      title: 'Booking Confirmed!',
      message: 'Tickets for Kalki 2898 AD are confirmed. Download your e-ticket now.',
      timestamp: '2 hours ago',
      read: false,
      type: 'booking',
    },
    {
      id: 'n2',
      title: 'Showtime Reminder',
      message: 'Your show starts in 3 hours at PVR Lower Parel. Please arrive 15 minutes early.',
      timestamp: '30 mins ago',
      read: false,
      type: 'reminder',
    },
  ]);

  // Global Search Term
  const [searchQuery, setSearchQuery] = useState('');

  // ----------------------------------------------------
  // 8-Minute Seat Lock Timer Effect (FR-SEAT-02, BR-2)
  // ----------------------------------------------------
  useEffect(() => {
    let timer = null;
    if (seatLockSeconds !== null && seatLockSeconds > 0) {
      timer = setInterval(() => {
        setSeatLockSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleLockExpiration();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [seatLockSeconds, selectedShow, selectedSeats]);

  const handleLockExpiration = () => {
    setIsLockExpired(true);
    // Release locked seats
    if (selectedShow && selectedSeats.length > 0) {
      releaseLockedSeats(selectedShow.showId, selectedSeats);
    }
    setSelectedSeats([]);
    addNotification({
      title: 'Seat Lock Expired',
      message: 'Your 8-minute seat reservation has expired. The seats have been released.',
      type: 'warning',
    });
  };

  // ----------------------------------------------------
  // Seat Management Actions (Process 3.0)
  // ----------------------------------------------------
  const getSeatsForShow = (showId) => {
    if (!seatLayouts[showId]) {
      const show = shows.find((s) => s.showId === showId);
      const generated = generateSeatLayout(show?.screenId || 's1', showId);
      setSeatLayouts((prev) => ({ ...prev, [showId]: generated }));
      return generated;
    }
    return seatLayouts[showId];
  };

  const toggleSeatSelection = (seat) => {
    if (seat.status === 'booked' || seat.status === 'locked') return;

    if (selectedSeats.some((s) => s.seatId === seat.seatId)) {
      setSelectedSeats((prev) => prev.filter((s) => s.seatId !== seat.seatId));
    } else {
      if (selectedSeats.length >= 10) {
        alert('Validation Rule: Maximum 10 seats allowed per booking transaction.');
        return;
      }
      setSelectedSeats((prev) => [...prev, seat]);
    }
  };

  // Lock selected seats & start 8-minute timer (FR-SEAT-02)
  const initiateSeatLock = (showId, seats) => {
    setSeatLayouts((prev) => {
      const current = prev[showId] || [];
      const updated = current.map((s) => {
        if (seats.some((sel) => sel.seatId === s.seatId)) {
          return { ...s, status: 'locked' };
        }
        return s;
      });
      return { ...prev, [showId]: updated };
    });
    setSeatLockSeconds(480); // 8 minutes countdown
    setIsLockExpired(false);
  };

  const releaseLockedSeats = (showId, seats) => {
    setSeatLayouts((prev) => {
      const current = prev[showId] || [];
      const updated = current.map((s) => {
        if (seats.some((sel) => sel.seatId === s.seatId && s.status !== 'booked')) {
          return { ...s, status: 'available' };
        }
        return s;
      });
      return { ...prev, [showId]: updated };
    });
    setSeatLockSeconds(null);
  };

  // ----------------------------------------------------
  // Booking & Payment Flow (Process 4.0 & 5.0)
  // ----------------------------------------------------
  const processBooking = ({ paymentMethod, simulateFailure = false, promoCode = null }) => {
    if (!selectedShow || selectedSeats.length === 0) return { success: false, error: 'No seats selected' };

    if (simulateFailure) {
      // Activity Diagram: Payment Failure path -> Release locked seats, return failure
      releaseLockedSeats(selectedShow.showId, selectedSeats);
      setSelectedSeats([]);
      setSeatLockSeconds(null);
      addNotification({
        title: 'Payment Failed',
        message: 'Transaction failed at Payment Gateway. Your locked seats have been released.',
        type: 'error',
      });
      return { success: false, error: 'Payment declined by bank / gateway timeout.' };
    }

    const movie = movies.find((m) => m.id === selectedShow.eventId);
    const venue = venues.find((v) => v.venueId === selectedShow.venueId);
    const screen = venue?.screens?.find((sc) => sc.screenId === selectedShow.screenId);

    const baseAmount = selectedSeats.reduce((sum, s) => sum + s.price, 0);
    const convenienceFee = selectedSeats.length * 25; // ₹25 per ticket
    const gstAmount = Number((convenienceFee * 0.18).toFixed(2));
    const fnbTotal = fnbSelected.reduce((sum, f) => sum + f.price * f.quantity, 0);
    let discount = 0;
    if (promoCode === 'BMS50') discount = 50;
    if (promoCode === 'MOVIE20') discount = Math.round(baseAmount * 0.2);

    const grandTotal = Math.max(0, baseAmount + convenienceFee + gstAmount + fnbTotal - discount);

    const bookingId = `BMS-${Math.floor(100000 + Math.random() * 900000)}`;
    const paymentId = `pay_${Date.now()}`;

    // Mark seats as booked permanently
    setSeatLayouts((prev) => {
      const current = prev[selectedShow.showId] || [];
      const updated = current.map((s) => {
        if (selectedSeats.some((sel) => sel.seatId === s.seatId)) {
          return { ...s, status: 'booked' };
        }
        return s;
      });
      return { ...prev, [selectedShow.showId]: updated };
    });

    // Update show occupancy
    setShows((prev) =>
      prev.map((sh) => {
        if (sh.showId === selectedShow.showId) {
          const newAvail = Math.max(0, sh.availableSeats - selectedSeats.length);
          const newOccupancy = Math.round(((sh.totalSeats - newAvail) / sh.totalSeats) * 100);
          return {
            ...sh,
            availableSeats: newAvail,
            occupancyRate: newOccupancy,
          };
        }
        return sh;
      })
    );

    const newBooking = {
      bookingId,
      userId: currentUser?.userId || 'guest',
      userName: currentUser?.name || 'Guest User',
      userEmail: currentUser?.email || 'guest@example.com',
      userPhone: currentUser?.phone || '+91 9999999999',
      showId: selectedShow.showId,
      eventId: selectedShow.eventId,
      movieTitle: movie?.title || 'Unknown Show',
      posterUrl: movie?.posterUrl || '',
      venueName: venue?.name || 'Unknown Venue',
      screenName: screen?.name || 'Audi 1',
      city: selectedCity,
      showDateTime: `${selectedShow.showDate} ${selectedShow.showTime}`,
      format: selectedShow.format,
      seats: selectedSeats.map((s) => ({
        seatNumber: s.seatNumber,
        tier: s.tier,
        price: s.price,
      })),
      baseAmount,
      convenienceFee,
      gstAmount,
      fnbTotal,
      fnbItems: [...fnbSelected],
      discount,
      totalAmount: grandTotal,
      status: 'confirmed',
      paymentId,
      paymentMethod,
      createdAt: new Date().toISOString(),
      isRedeemed: false,
      qrCodePayload: JSON.stringify({
        bId: bookingId,
        m: movie?.title,
        v: venue?.name,
        seats: selectedSeats.map((s) => s.seatNumber),
        time: selectedShow.showTime,
        uid: currentUser?.userId,
      }),
    };

    setBookings((prev) => [newBooking, ...prev]);
    setLastBooking(newBooking);

    // Reset lock timer & selection
    setSeatLockSeconds(null);
    setSelectedSeats([]);
    setFnbSelected([]);

    // Trigger celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (e) {
      // safe fallback
    }

    // Trigger confirmation notification (FR-NOTF-01)
    addNotification({
      title: 'Booking Confirmed! 🎉',
      message: `Your booking for ${movie?.title} (${selectedSeats.map((s) => s.seatNumber).join(', ')}) is confirmed! Digital Ticket & GST invoice generated.`,
      type: 'booking',
    });

    logAuditAction(
      currentUser?.name || 'Guest',
      'Ticket Booking Confirmed',
      `Booking ${bookingId} confirmed. Amount: ₹${grandTotal}. Method: ${paymentMethod}`
    );

    // Check if auto-scale threshold (>85%) triggered on this show
    const currentShowNow = shows.find((s) => s.showId === selectedShow.showId);
    if (currentShowNow && currentShowNow.occupancyRate >= 80) {
      logAuditAction(
        'DynamicPricingService',
        'High Occupancy Alert (>85%)',
        `Show ${selectedShow.showId} crossed high demand threshold. Dynamic tariff recommended.`
      );
    }

    return { success: true, booking: newBooking };
  };

  // ----------------------------------------------------
  // Booking Cancellation & Refund Flow (FR-CANC-01 to 05)
  // ----------------------------------------------------
  const calculateRefund = (booking) => {
    // Cutoff check:
    // If show is more than 24 hours away: 100% refund of base amount
    // If show is 2 to 24 hours away: 75% refund of base amount
    // If show is less than 2 hours away: 0% (Non-refundable)
    // Convenience fee is non-refundable per platform terms
    const now = new Date();
    const showDate = new Date(booking.showDateTime);
    const diffHours = (showDate - now) / (1000 * 60 * 60);

    let refundPercentage = 0;
    let policyText = '';

    if (isNaN(diffHours) || diffHours > 24) {
      refundPercentage = 100;
      policyText = '100% refund on ticket fare (Cancelled > 24 hrs before showtime)';
    } else if (diffHours >= 2) {
      refundPercentage = 75;
      policyText = '75% refund on ticket fare (Cancelled between 2-24 hrs before showtime)';
    } else {
      refundPercentage = 0;
      policyText = 'Non-refundable (Cancelled within 2 hrs of showtime)';
    }

    const eligibleAmount = Math.round((booking.baseAmount * refundPercentage) / 100);
    return {
      eligible: refundPercentage > 0,
      refundPercentage,
      eligibleAmount,
      policyText,
      diffHours: Math.max(0, Math.round(diffHours)),
    };
  };

  const cancelBooking = (bookingId) => {
    const booking = bookings.find((b) => b.bookingId === bookingId);
    if (!booking) return { success: false, message: 'Booking not found' };

    const refundInfo = calculateRefund(booking);

    // 1. Release seats back to available in seat map
    const showSeats = seatLayouts[booking.showId] || [];
    const bookedSeatNums = booking.seats.map((s) => s.seatNumber);
    const updatedSeats = showSeats.map((s) => {
      if (bookedSeatNums.includes(s.seatNumber)) {
        return { ...s, status: 'available' };
      }
      return s;
    });

    setSeatLayouts((prev) => ({
      ...prev,
      [booking.showId]: updatedSeats,
    }));

    // 2. Update Show available count
    setShows((prev) =>
      prev.map((sh) => {
        if (sh.showId === booking.showId) {
          const newAvail = sh.availableSeats + booking.seats.length;
          return {
            ...sh,
            availableSeats: newAvail,
            occupancyRate: Math.max(0, Math.round(((sh.totalSeats - newAvail) / sh.totalSeats) * 100)),
          };
        }
        return sh;
      })
    );

    // 3. Update Booking status to cancelled
    const refundId = `ref_${Date.now()}`;
    setBookings((prev) =>
      prev.map((b) => {
        if (b.bookingId === bookingId) {
          return {
            ...b,
            status: 'cancelled',
            refundId,
            refundAmount: refundInfo.eligibleAmount,
            cancelledAt: new Date().toISOString(),
          };
        }
        return b;
      })
    );

    // 4. Send Refund Notification (FR-CANC-05)
    addNotification({
      title: 'Booking Cancelled & Refund Initiated',
      message: `Booking ${bookingId} cancelled. Refund of ₹${refundInfo.eligibleAmount} initiated to original payment method (${booking.paymentMethod}).`,
      type: 'refund',
    });

    logAuditAction(
      currentUser?.name || 'Customer',
      'Booking Cancelled & Refunded',
      `Booking ${bookingId} cancelled. Refund amount: ₹${refundInfo.eligibleAmount}. Seats released: ${bookedSeatNums.join(', ')}`
    );

    return {
      success: true,
      refundId,
      refundAmount: refundInfo.eligibleAmount,
      message: 'Cancellation confirmed and refund processed.',
    };
  };

  // ----------------------------------------------------
  // Staff Ticket Validation (Class Diagram Staff)
  // ----------------------------------------------------
  const validateCheckIn = (ticketCodeOrId) => {
    // Parse either booking ID or json payload
    let targetBookingId = ticketCodeOrId.trim();
    if (targetBookingId.startsWith('{')) {
      try {
        const parsed = JSON.parse(targetBookingId);
        targetBookingId = parsed.bId;
      } catch (e) {
        // use raw
      }
    }

    const booking = bookings.find(
      (b) => b.bookingId.toLowerCase() === targetBookingId.toLowerCase()
    );

    if (!booking) {
      return {
        valid: false,
        status: 'not_found',
        message: 'No ticket found with this QR or Booking ID.',
      };
    }

    if (booking.status === 'cancelled') {
      return {
        valid: false,
        status: 'cancelled',
        booking,
        message: 'INVALID TICKET: This booking was cancelled and refunded.',
      };
    }

    if (booking.isRedeemed) {
      return {
        valid: false,
        status: 'already_redeemed',
        booking,
        message: 'ALREADY SCANNED: This ticket was already checked in at the gate.',
      };
    }

    // Successfully redeem ticket!
    setBookings((prev) =>
      prev.map((b) => (b.bookingId === booking.bookingId ? { ...b, isRedeemed: true } : b))
    );

    logAuditAction(
      `Staff (${currentUser?.name || 'Gate Agent'})`,
      'Gate Check-in Validated',
      `Ticket ${booking.bookingId} validated successfully for ${booking.movieTitle}. Seats: ${booking.seats.map((s) => s.seatNumber).join(', ')}`
    );

    return {
      valid: true,
      status: 'success',
      booking,
      message: 'ENTRY PERMITTED: Valid ticket for admission.',
    };
  };

  // ----------------------------------------------------
  // Dynamic Pricing & Screen Auto-Scaler (Collaboration Diagram Page 7)
  // ----------------------------------------------------
  const triggerAutoDynamicPricing = (showId) => {
    setShows((prev) =>
      prev.map((sh) => {
        if (sh.showId === showId) {
          const newMultiplier = 1.25;
          const newPrice = Math.round(sh.basePrice * newMultiplier);
          return {
            ...sh,
            dynamicMultiplier: newMultiplier,
            basePrice: newPrice,
          };
        }
        return sh;
      })
    );

    logAuditAction(
      'AnalyticsEngine & PricingService',
      'Dynamic Pricing Auto-Applied',
      `Show ${showId} occupancy crossed 85%. Multiplier 1.25x deployed automatically.`
    );

    addNotification({
      title: 'Dynamic Pricing Applied',
      message: `High demand on show ${showId}. Tariff adjusted to premium multiplier.`,
      type: 'info',
    });
  };

  const reallocateLargerScreen = (showId, newScreenName, addedCapacity = 20) => {
    setShows((prev) =>
      prev.map((sh) => {
        if (sh.showId === showId) {
          return {
            ...sh,
            format: `${sh.format} (Auto-Scaled to Larger Screen)`,
            totalSeats: sh.totalSeats + addedCapacity,
            availableSeats: sh.availableSeats + addedCapacity,
          };
        }
        return sh;
      })
    );

    logAuditAction(
      'ScheduleController',
      'Screen Auto-Scaled',
      `Reallocated show ${showId} to larger screen ${newScreenName} with +${addedCapacity} capacity.`
    );

    addNotification({
      title: 'Screen Reallocated',
      message: `Show ${showId} reallocated to larger hall to meet high ticket demand.`,
      type: 'info',
    });
  };

  // ----------------------------------------------------
  // Ratings and Reviews (FR-RATE-01 to 03)
  // ----------------------------------------------------
  const addReview = ({ eventId, rating, title, comment }) => {
    const newRev = {
      reviewId: `rev_${Date.now()}`,
      eventId,
      userId: currentUser?.userId || 'u1',
      userName: currentUser?.name || 'Movie Lover',
      rating,
      title,
      comment,
      date: new Date().toISOString().split('T')[0],
      status: 'approved',
    };
    setReviews((prev) => [newRev, ...prev]);

    // Recalculate movie average
    const eventReviews = [...reviews, newRev].filter((r) => r.eventId === eventId);
    const avg = (
      eventReviews.reduce((sum, r) => sum + r.rating, 0) / eventReviews.length
    ).toFixed(1);

    setMovies((prev) =>
      prev.map((m) => {
        if (m.id === eventId) {
          return {
            ...m,
            rating: Number(avg),
            votesCount: m.votesCount + 1,
          };
        }
        return m;
      })
    );

    addNotification({
      title: 'Review Posted',
      message: 'Your rating & review has been published.',
      type: 'info',
    });
  };

  // ----------------------------------------------------
  // Movie & Catalog Management (Admin)
  // ----------------------------------------------------
  const addMovie = (movieData) => {
    const newId = `m_${Date.now()}`;
    const newMovie = {
      id: newId,
      type: movieData.type || 'movie',
      title: movieData.title,
      category: movieData.category || 'Movies',
      description: movieData.description || 'No description provided.',
      duration: Number(movieData.duration) || 120,
      posterUrl: movieData.posterUrl || 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
      bannerUrl: movieData.bannerUrl || 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80',
      language: movieData.language || 'Hindi',
      availableLanguages: movieData.availableLanguages || [movieData.language || 'Hindi'],
      genre: movieData.genre || 'Action / Drama',
      genres: movieData.genres || ['Action', 'Drama'],
      releaseDate: movieData.releaseDate || new Date().toISOString().split('T')[0],
      certification: movieData.certification || 'U/A 13+',
      cast: movieData.cast || [{ name: 'Lead Cast', role: 'Main Lead' }],
      director: movieData.director || 'Director',
      rating: Number(movieData.rating) || 8.5,
      votesCount: 1500,
      formats: movieData.formats || ['2D', '3D', 'IMAX 2D'],
      isActive: true,
    };

    setMovies((prev) => [newMovie, ...prev]);

    // Automatically schedule initial shows across venues in cities
    const todayIso = new Date().toISOString().split('T')[0];
    const newShows = [];
    venues.forEach((v, vIdx) => {
      ['11:00 AM', '04:30 PM', '08:45 PM'].forEach((t, tIdx) => {
        newShows.push({
          showId: `sh_auto_${Date.now()}_${vIdx}_${tIdx}`,
          eventId: newId,
          venueId: v.venueId,
          screenId: v.screens[0]?.screenId || 's1',
          showDate: todayIso,
          showTime: t,
          format: newMovie.formats[0] || '2D Dolby',
          basePrice: 280,
          availableSeats: 58,
          totalSeats: 60,
          occupancyRate: 5,
          dynamicMultiplier: 1.0,
        });
      });
    });

    setShows((prev) => [...newShows, ...prev]);

    logAuditAction(
      currentUser?.name || 'Admin',
      'Movie Added to Catalog',
      `Added "${newMovie.title}" with ${newShows.length} automatically scheduled showtimes.`
    );

    addNotification({
      title: 'Movie Added to Catalog 🎬',
      message: `"${newMovie.title}" is now live and bookable across cinemas!`,
      type: 'info',
    });

    return newMovie;
  };

  const deleteMovie = (movieId) => {
    const movieToDelete = movies.find((m) => m.id === movieId);
    setMovies((prev) => prev.filter((m) => m.id !== movieId));
    setShows((prev) => prev.filter((s) => s.eventId !== movieId));

    logAuditAction(
      currentUser?.name || 'Admin',
      'Movie Deleted',
      `Removed "${movieToDelete?.title || movieId}" from catalog and cancelled all associated shows.`
    );

    addNotification({
      title: 'Movie Removed 🗑️',
      message: `"${movieToDelete?.title || 'Movie'}" has been removed from catalog.`,
      type: 'warning',
    });
  };

  const deleteShow = (showId) => {
    const showToDelete = shows.find((s) => s.showId === showId);
    setShows((prev) => prev.filter((s) => s.showId !== showId));

    logAuditAction(
      currentUser?.name || 'Admin',
      'Show Cancelled & Removed',
      `Removed show "${showId}" (${showToDelete?.showTime} on ${showToDelete?.showDate}).`
    );

    addNotification({
      title: 'Show Cancelled 📅',
      message: `Show ${showId} has been removed from the schedule.`,
      type: 'info',
    });
  };

  // ----------------------------------------------------
  // Auth Helpers
  // ----------------------------------------------------
  const loginUser = async (email, password, intendedRole = null) => {
    try {
      const { data } = await api.post('/auth/login', { email, password });
      const normalizedRole = data.user.role === 'user' ? 'customer' : data.user.role;

      // Role check if signed in via a specific role tab
      if (intendedRole) {
        const expected = intendedRole === 'user' ? 'customer' : intendedRole;
        if (normalizedRole !== expected) {
          return {
            success: false,
            message: `Role mismatch: This account has '${normalizedRole.toUpperCase()}' privileges. Please use the ${normalizedRole.toUpperCase()} login tab.`,
          };
        }
      }

      const user = { ...data.user, userId: data.user.id, role: normalizedRole };
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setCurrentUser(user);
      setActiveRole(normalizedRole);
      setAuthModalOpen(false);
      logAuditAction(user.name, 'User Login', `Logged in successfully with role: ${normalizedRole}`);

      if (normalizedRole === 'admin') {
        navigateTo('admin');
        addNotification({
          title: 'Admin Access Granted 🛡️',
          message: `Logged in as Admin: ${user.name}. Opening Admin Console.`,
          type: 'info',
        });
      } else if (normalizedRole === 'staff') {
        navigateTo('staffScanner');
        addNotification({
          title: 'Staff Access Granted 🎟️',
          message: `Logged in as Staff: ${user.name}. Opening Gate Entry Scanner.`,
          type: 'info',
        });
      } else {
        navigateTo('home');
        addNotification({
          title: 'Signed In Successfully 🎉',
          message: `Welcome back, ${user.name}!`,
          type: 'info',
        });
      }

      return { success: true, user };
    } catch (error) {
      console.error('Sign in error:', error);
      if (!error.response) {
        return { success: false, message: 'Server is unreachable (Network Error). Please check if backend is running on port 5000.' };
      }
      return { success: false, message: error.response?.data?.message || 'Invalid email or password.' };
    }
  };

  const registerUser = async (userData) => {
    try {
      const { data } = await api.post('/auth/register', { name: userData.name, email: userData.email, password: userData.password });
      const newUser = { ...data.user, userId: data.user.id, role: 'customer', phone: userData.phone };
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setUsers((prev) => [...prev, newUser]);
      setCurrentUser(newUser);
      setActiveRole('customer');
      setAuthModalOpen(false);
      navigateTo('home');

      logAuditAction(newUser.name, 'User Registration', `New user registered with email: ${newUser.email}`);
      addNotification({
        title: 'Welcome to BookMyShow! 🎉',
        message: `Account activated for ${newUser.name}. Enjoy booking movies & events.`,
        type: 'info',
      });
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Unable to create your account. Please try again.' };
    }
  };

  const logoutUser = (redirectTo = 'home') => {
    const prevRole = currentUser?.role || 'customer';
    const prevName = currentUser?.name || 'User';

    if (currentUser) {
      logAuditAction(prevName, 'User Logout', `Signed out of ${prevRole} session`);
    }

    setCurrentUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setActiveRole('customer');
    navigateTo(redirectTo);

    addNotification({
      title: 'Signed Out Successfully 👋',
      message: `${prevRole === 'admin' ? 'Admin' : prevRole === 'staff' ? 'Staff' : 'You have been'} logged out.`,
      type: 'info',
    });
  };

  const updateProfile = (updatedData) => {
    setCurrentUser((prev) => ({ ...prev, ...updatedData }));
    setUsers((prev) =>
      prev.map((u) => (u.userId === currentUser.userId ? { ...u, ...updatedData } : u))
    );
    addNotification({
      title: 'Profile Updated',
      message: 'Your account details and preferences have been updated.',
      type: 'info',
    });
  };

  // Notifications helper
  const addNotification = ({ title, message, type = 'info' }) => {
    const notif = {
      id: `n_${Date.now()}`,
      title,
      message,
      timestamp: 'Just now',
      read: false,
      type,
    };
    setNotifications((prev) => [notif, ...prev]);
  };

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  // Audit Log helper (FR-ADM-05, SEC-05)
  const logAuditAction = (actor, action, details) => {
    const newLog = {
      id: `log_${Date.now()}`,
      timestamp: new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString(),
      actor,
      action,
      details,
    };
    setAuditLogs((prev) => [newLog, ...prev]);
  };

  // Navigation Helper
  const navigateTo = (view, params = {}) => {
    if (params.eventId) setSelectedEventId(params.eventId);
    if (params.show) {
      setSelectedShow(params.show);
      // Reset seat selection when changing show
      if (!params.keepSeats) setSelectedSeats([]);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider
      value={{
        // Catalog
        cities,
        selectedCity,
        setSelectedCity,
        categories,
        movies,
        setMovies,
        venues,
        setVenues,
        shows,
        setShows,
        searchQuery,
        setSearchQuery,

        // Auth & Role
        users,
        setUsers,
        currentUser,
        setCurrentUser,
        activeRole,
        setActiveRole,
        authModalOpen,
        setAuthModalOpen,
        authModalRole,
        setAuthModalRole,
        openAuthForRole,
        loginUser,
        registerUser,
        logoutUser,
        updateProfile,

        // Views
        currentView,
        setCurrentView,
        selectedEventId,
        selectedShow,
        navigateTo,

        // Seats & Locking
        seatLayouts,
        selectedSeats,
        setSelectedSeats,
        getSeatsForShow,
        toggleSeatSelection,
        initiateSeatLock,
        releaseLockedSeats,
        seatLockSeconds,
        isLockExpired,

        // F&B
        fnbItems: INITIAL_FNB,
        fnbSelected,
        setFnbSelected,

        // Bookings & Payments
        bookings,
        setBookings,
        processBooking,
        lastBooking,
        setLastBooking,
        calculateRefund,
        cancelBooking,

        // Reviews & Social
        reviews,
        setReviews,
        addReview,

        // Notifications & Audit
        notifications,
        addNotification,
        markAllNotificationsRead,
        auditLogs,
        logAuditAction,

        // Staff / Admin Ops
        validateCheckIn,
        triggerAutoDynamicPricing,
        reallocateLargerScreen,
        addMovie,
        deleteMovie,
        deleteShow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
