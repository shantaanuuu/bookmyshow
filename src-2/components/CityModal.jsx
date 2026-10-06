import React from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, X, Check } from 'lucide-react';

export default function CityModal({ isOpen, onClose }) {
  const { cities, selectedCity, setSelectedCity } = useApp();

  if (!isOpen) return null;

  const popularCityIcons = {
    Mumbai: '🏖️',
    'Delhi-NCR': '🏛️',
    Bengaluru: '💻',
    Hyderabad: '🏰',
    Pune: '🎓',
    Chennai: '🌊',
    Kolkata: '🚋',
    Ahmedabad: '🪁',
  };

  const handleSelect = (city) => {
    setSelectedCity(city);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl transform transition-all">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-500" />
            <h3 className="font-semibold text-lg text-gray-800">Select Your City</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Cities Grid */}
        <div className="p-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Popular Cities
          </p>
          <div className="grid grid-cols-4 gap-3">
            {cities.map((city) => {
              const isSelected = selectedCity === city;
              return (
                <button
                  key={city}
                  onClick={() => handleSelect(city)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all text-center relative ${
                    isSelected
                      ? 'border-red-500 bg-red-50 text-red-600 font-semibold shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span className="text-2xl mb-1">{popularCityIcons[city] || '📍'}</span>
                  <span className="text-xs">{city}</span>
                  {isSelected && (
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500">
              Personalized movie listings, theatre schedules, and local events for{' '}
              <span className="font-semibold text-gray-700">{selectedCity}</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
