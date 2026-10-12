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
import { Shield, QrCode } from 'lucide-react';

function RoleRestrictedGate({ requiredRole, onSignIn, onHome }) {
  const isAdm = requiredRole === 'admin';
  return (
    <div className="max-w-xl mx-auto my-16 px-4">
      <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-xl text-center">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
            isAdm ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'
          }`}
        >
          {isAdm ? <Shield className="w-8 h-8" /> : <QrCode className="w-8 h-8" />}
        </div>
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${
            isAdm ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
          }`}
        >
          {isAdm ? 'Admin Access Protected' : 'Gate Staff Terminal Protected'}
        </span>
        <h2 className="text-xl font-black text-gray-900">Authentication Required</h2>
        <p className="text-xs text-gray-500 mt-2 max-w-sm mx-auto leading-relaxed">
          {isAdm
            ? 'Only users with administrator privileges can access the Operations & Scheduling Console.'
            : 'Only venue staff members can access the Gate Check-In & QR Scanning Terminal.'}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onSignIn}
            className={`w-full sm:w-auto px-6 py-2.5 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer ${
              isAdm ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            ⚡ Sign In as {isAdm ? 'Admin' : 'Staff'}
          </button>
          <button
            onClick={onHome}
            className="w-full sm:w-auto px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-xl transition cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

function MainApp() {
  const { currentView, navigateTo, authModalOpen, setAuthModalOpen, currentUser, openAuthForRole } = useApp();

  const [cityModalOpen, setCityModalOpen] = useState(false);
  const [fnbModalOpen, setFnbModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5fa]">
      {/* Top Navbar */}
      <Navbar
        onOpenCityModal={() => setCityModalOpen(true)}
        onOpenAuthModal={() => openAuthForRole('customer')}
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

        {currentView === 'admin' && (
          currentUser?.role === 'admin' ? (
            <AdminConsole />
          ) : (
            <RoleRestrictedGate
              requiredRole="admin"
              onSignIn={() => openAuthForRole('admin')}
              onHome={() => navigateTo('home')}
            />
          )
        )}

        {currentView === 'staffScanner' && (
          currentUser?.role === 'staff' ? (
            <StaffScanner />
          ) : (
            <RoleRestrictedGate
              requiredRole="staff"
              onSignIn={() => openAuthForRole('staff')}
              onHome={() => navigateTo('home')}
            />
          )
        )}
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
