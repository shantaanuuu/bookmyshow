import React from 'react';
import { useApp } from '../context/AppContext';
import { Plus, Minus, X, Coffee, ShoppingBag, ArrowRight } from 'lucide-react';

export default function FnBModal({ isOpen, onClose, onProceedToCheckout }) {
  const { fnbItems, fnbSelected, setFnbSelected } = useApp();

  if (!isOpen) return null;

  const getItemQty = (id) => {
    const found = fnbSelected.find((item) => item.id === id);
    return found ? found.quantity : 0;
  };

  const handleUpdateQty = (item, delta) => {
    setFnbSelected((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        const newQty = existing.quantity + delta;
        if (newQty <= 0) {
          return prev.filter((i) => i.id !== item.id);
        }
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: newQty } : i));
      } else if (delta > 0) {
        return [...prev, { ...item, quantity: 1 }];
      }
      return prev;
    });
  };

  const totalFnbAmount = fnbSelected.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl text-gray-800 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-amber-500 to-red-500 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍿</span>
            <div>
              <h3 className="font-bold text-lg leading-tight">Grab a Bite!</h3>
              <p className="text-xs text-amber-100">Pre-book cinema snacks at best prices</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* F&B List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {fnbItems.map((item) => {
            const qty = getItemQty(item.id);
            return (
              <div
                key={item.id}
                className="flex items-center justify-between p-3.5 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-xs transition bg-gray-50/50"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl bg-white p-2.5 rounded-xl border border-gray-100 shadow-xs">
                    {item.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">{item.name}</h4>
                    <p className="text-xs text-gray-500 max-w-[200px] sm:max-w-xs">
                      {item.description}
                    </p>
                    <p className="text-xs font-bold text-emerald-600 mt-1">₹{item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  {qty > 0 ? (
                    <div className="flex items-center border border-red-500 rounded-xl bg-white overflow-hidden shadow-xs">
                      <button
                        onClick={() => handleUpdateQty(item, -1)}
                        className="px-2.5 py-1 text-red-600 hover:bg-red-50 font-bold transition"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2 font-bold text-xs text-gray-800">{qty}</span>
                      <button
                        onClick={() => handleUpdateQty(item, 1)}
                        className="px-2.5 py-1 text-red-600 hover:bg-red-50 font-bold transition"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleUpdateQty(item, 1)}
                      className="px-4 py-1.5 rounded-xl border border-red-500 text-red-600 text-xs font-bold hover:bg-red-50 transition shadow-xs"
                    >
                      + Add
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500">Snacks Total:</span>
            <p className="text-base font-black text-gray-900">₹{totalFnbAmount}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-200 rounded-xl transition"
            >
              Skip
            </button>
            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-red-500/20 transition flex items-center gap-1.5 cursor-pointer"
            >
              Proceed to Pay <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
