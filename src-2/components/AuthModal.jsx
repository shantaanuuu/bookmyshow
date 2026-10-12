import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Lock,
  Mail,
  Phone,
  User,
  CheckCircle2,
  ShieldCheck,
  KeyRound,
  Shield,
  QrCode,
  Sparkles,
  ArrowRight,
  Zap
} from 'lucide-react';

export default function AuthModal({ isOpen, onClose }) {
  const {
    loginUser,
    registerUser,
    authModalRole,
    setAuthModalRole,
  } = useApp();

  const [mode, setMode] = useState('login'); // 'login' | 'register' | 'otp'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Sync role and auto-fill placeholders or clear error when role changes
  useEffect(() => {
    setErrorMsg('');
  }, [authModalRole]);

  if (!isOpen) return null;

  const roleConfigs = {
    customer: {
      label: 'Customer / User',
      icon: User,
      headerBg: 'from-red-600 to-rose-600',
      badgeColor: 'bg-red-500/30 text-white border-red-300/40',
      accentBtn: 'bg-red-600 hover:bg-red-700',
      title: 'Customer Sign In',
      subtitle: 'Book movies, concerts, stream events & manage your tickets.',
      demoEmail: 'user@bookmyshow.local',
      demoPass: 'User@123',
      destText: 'Redirects to: 🏠 Customer Storefront & My Bookings',
    },
    admin: {
      label: 'Admin Portal',
      icon: Shield,
      headerBg: 'from-purple-800 to-indigo-900',
      badgeColor: 'bg-purple-500/30 text-purple-200 border-purple-400/40',
      accentBtn: 'bg-purple-600 hover:bg-purple-700',
      title: 'Admin Operations Portal',
      subtitle: 'Manage screenings, dynamic pricing algorithms, revenues & audit logs.',
      demoEmail: 'admin@bookmyshow.local',
      demoPass: 'Admin@123',
      destText: 'Redirects to: 🛠️ Admin & Operations Console',
    },
    staff: {
      label: 'Gate Staff',
      icon: QrCode,
      headerBg: 'from-blue-700 to-slate-900',
      badgeColor: 'bg-blue-500/30 text-blue-200 border-blue-400/40',
      accentBtn: 'bg-blue-600 hover:bg-blue-700',
      title: 'Venue Gate Staff Portal',
      subtitle: 'Admission checkpoint scanner & real-time ticket validator.',
      demoEmail: 'staff@bookmyshow.local',
      demoPass: 'Staff@123',
      destText: 'Redirects to: 🎟️ Ticket Check-In & Scanner Console',
    },
  };

  const currentConfig = roleConfigs[authModalRole] || roleConfigs.customer;
  const RoleIcon = currentConfig.icon;

  const handleFillDemo = (roleKey) => {
    const cfg = roleConfigs[roleKey];
    setAuthModalRole(roleKey);
    setLoginEmail(cfg.demoEmail);
    setLoginPassword(cfg.demoPass);
    setErrorMsg('');
    setMode('login');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    const res = await loginUser(loginEmail, loginPassword, authModalRole);
    setIsLoading(false);

    if (!res.success) {
      setErrorMsg(res.message);
    } else {
      onClose();
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (formData.password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }
    const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(mockOtp);
    setMode('otp');
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (enteredOtp !== generatedOtp && enteredOtp !== '123456') {
      setErrorMsg('Invalid OTP entered. Please check the code or use 123456.');
      return;
    }

    setIsLoading(true);
    const res = await registerUser(formData);
    setIsLoading(false);

    if (res.success) {
      onClose();
    } else {
      setErrorMsg(res.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
      <div className="bg-[#141824] text-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl shadow-black/80 relative border border-white/10 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className={`bg-gradient-to-r ${currentConfig.headerBg} text-white p-6 relative transition-colors duration-500`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${currentConfig.badgeColor}`}>
              <RoleIcon className="w-3.5 h-3.5" />
              {currentConfig.label}
            </span>
          </div>

          <h2 className="text-2xl font-black tracking-tight">{currentConfig.title}</h2>
          <p className="text-xs text-white/80 mt-1 leading-relaxed">
            {currentConfig.subtitle}
          </p>

          <div className="mt-3 text-[11px] font-semibold text-white/90 bg-black/30 rounded-xl px-3 py-1.5 inline-flex items-center gap-1.5 border border-white/10">
            <span>🎯</span> {currentConfig.destText}
          </div>
        </div>

        {/* Portal Switching Tabs */}
        <div className="bg-[#0f121d] p-1.5 border-b border-white/10 grid grid-cols-3 gap-1">
          <button
            type="button"
            onClick={() => {
              setAuthModalRole('customer');
              setMode('login');
              setErrorMsg('');
            }}
            className={`py-2 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
              authModalRole === 'customer'
                ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>User</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setAuthModalRole('admin');
              setMode('login');
              setErrorMsg('');
            }}
            className={`py-2 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
              authModalRole === 'admin'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Admin</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setAuthModalRole('staff');
              setMode('login');
              setErrorMsg('');
            }}
            className={`py-2 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
              authModalRole === 'staff'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>Staff</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium animate-fadeIn">
              ⚠️ {errorMsg}
            </div>
          )}

          {/* Quick 1-Click Demo Fill Banner */}
          {mode === 'login' && (
            <div className="mb-5 p-3.5 rounded-2xl bg-[#1c2236] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
              <div className="text-xs">
                <span className="font-bold text-amber-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
                  Quick Demo Access:
                </span>
                <span className="text-[11px] text-gray-300 font-mono mt-0.5 block">
                  {currentConfig.demoEmail}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleFillDemo(authModalRole)}
                className="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-md shadow-amber-500/20 transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                ⚡ Auto-Fill Credentials
              </button>
            </div>
          )}

          {/* LOGIN FORM */}
          {mode === 'login' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder={currentConfig.demoEmail}
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#1c2236] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:bg-[#20273d] focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#1c2236] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:bg-[#20273d] focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 text-white font-bold text-sm rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2 ${currentConfig.accentBtn} ${
                  isLoading ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>Sign In to {currentConfig.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {authModalRole === 'customer' ? (
                <div className="text-center text-xs text-gray-500 pt-2 border-t border-gray-100">
                  New to BookMyShow?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setErrorMsg('');
                      setMode('register');
                    }}
                    className="text-red-600 font-bold hover:underline cursor-pointer"
                  >
                    Create an account
                  </button>
                </div>
              ) : (
                <div className="text-center text-[11px] text-gray-400 pt-2 border-t border-gray-100">
                  🔒 {currentConfig.label} credentials are securely authenticated against MongoDB Atlas.
                </div>
              )}
            </form>
          )}

          {/* REGISTER FORM (Customer Only) */}
          {mode === 'register' && (
            <form onSubmit={handleRegisterSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Mobile Number (Optional)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Create Password (min 6 characters)
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl shadow-md transition cursor-pointer mt-2"
              >
                Proceed to Verification
              </button>

              <div className="text-center text-xs text-gray-500 pt-1">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setErrorMsg('');
                    setMode('login');
                  }}
                  className="text-red-600 font-bold hover:underline cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            </form>
          )}

          {/* OTP VERIFICATION */}
          {mode === 'otp' && (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 text-xs">
                <p className="font-bold flex items-center gap-1.5 mb-1.5">
                  <KeyRound className="w-4 h-4 text-amber-600" />
                  SMS Gateway Verification Code:
                </p>
                <p>
                  Your simulated OTP is:{' '}
                  <span className="font-mono font-black text-sm bg-white px-2 py-0.5 rounded border border-amber-300 text-amber-900">
                    {generatedOtp}
                  </span>
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Enter 6-Digit OTP
                </label>
                <input
                  type="text"
                  maxLength={6}
                  required
                  placeholder="Enter OTP (or 123456)"
                  value={enteredOtp}
                  onChange={(e) => setEnteredOtp(e.target.value)}
                  className="w-full text-center tracking-widest font-mono text-lg py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setMode('register')}
                  className="w-1/3 py-2.5 border border-gray-300 text-gray-600 font-bold text-xs rounded-xl hover:bg-gray-50 cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-2/3 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl shadow-md transition cursor-pointer"
                >
                  {isLoading ? 'Activating...' : 'Verify & Create'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
