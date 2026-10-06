import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import CityModal from './components/CityModal';
import AuthModal from './components/AuthModal';
import FnBModal from './components/FnBModal';
import WriteReviewModal from './components/WriteReviewModal';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import SeatMap from './components/SeatMap';
import Checkout from './components/Checkout';
import TicketConfirmation from './components/TicketConfirmation';
import MyBookings from './components/MyBookings';
import AdminConsole from './components/AdminConsole';
import StaffScanner from './components/StaffScanner';
import Footer from './components/Footer';

function MainApp() {
  const { currentView, navigateTo, authModalOpen, setAuthModalOpen } = useApp();

  const [cityModalOpen, setCityModalOpen] = useState(false);
  const [fnbModalOpen, setFnbModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5fa]">
      {/* Top Navbar */}
      <Navbar
        onOpenCityModal={() => setCityModalOpen(true)}
        onOpenAuthModal={() => setAuthModalOpen(true)}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {currentView === 'home' && <Home />}

        {currentView === 'movieDetails' && (
          <MovieDetails onOpenReviewModal={() => setReviewModalOpen(true)} />
        )}

        {currentView === 'seatMap' && (
          <SeatMap onOpenFnBModal={() => setFnbModalOpen(true)} />
        )}

        {currentView === 'checkout' && <Checkout />}

        {currentView === 'confirmation' && <TicketConfirmation />}

        {currentView === 'myBookings' && <MyBookings />}

        {currentView === 'admin' && <AdminConsole />}

        {currentView === 'staffScanner' && <StaffScanner />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      <CityModal
        isOpen={cityModalOpen}
        onClose={() => setCityModalOpen(false)}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      <FnBModal
        isOpen={fnbModalOpen}
        onClose={() => setFnbModalOpen(false)}
        onProceedToCheckout={() => navigateTo('checkout')}
      />

      <WriteReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
