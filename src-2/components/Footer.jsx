import React from 'react';
import { Film, ShieldCheck, HeartHandshake, Headphones, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#222434] text-gray-400 text-xs border-t border-gray-800">
      {/* Customer Trust Bar */}
      <div className="border-b border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-red-500">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-gray-200">24/7 Customer Care</p>
              <p className="text-[11px] text-gray-500">We are always here to help you</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-red-500">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-gray-200">100% Genuine Tickets</p>
              <p className="text-[11px] text-gray-500">Direct cinema & box office integration</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-red-500">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-gray-200">Instant Refund Guarantee</p>
              <p className="text-[11px] text-gray-500">Processed back to original payment mode</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div>
          <p className="font-bold text-gray-300 uppercase tracking-wider text-[11px] mb-2">
            Movies Now Showing in Cinemas:
          </p>
          <p className="text-[11px] leading-relaxed text-gray-500">
            Kalki 2898 AD | Stree 2: Sarkate Ka Aatank | Interstellar: 10th Anniversary IMAX | Jawan Extended Cut | Deadpool & Wolverine | Pushpa 2: The Rule | Singham Again | Devara: Part 1 | Bhool Bhulaiyaa 3
          </p>
        </div>

        <div>
          <p className="font-bold text-gray-300 uppercase tracking-wider text-[11px] mb-2">
            Top Cinema Chains in India:
          </p>
          <p className="text-[11px] leading-relaxed text-gray-500">
            PVR INOX Cinemas | Cinepolis India | MovieMax Cinemas | Miraj Cinemas | Wave Cinemas | Prasads Multiplex | Mukta A2 Cinemas | Rajhans Cinemas
          </p>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-xs">
              <Film className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-sm text-white">
              book<span className="text-red-500">my</span>show
            </span>
          </div>

          <p className="text-[11px] text-gray-500 text-center sm:text-right">
            Copyright © 2026 Bigtree Entertainment Pvt. Ltd. All Rights Reserved. <br />
            Academic Software Engineering Project — Conforming to UML Models & SRS v0.1
          </p>
        </div>
      </div>
    </footer>
  );
}
