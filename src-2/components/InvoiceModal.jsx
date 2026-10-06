import React from 'react';
import { X, Printer, Download, FileText, CheckCircle2 } from 'lucide-react';

export default function InvoiceModal({ isOpen, onClose, booking }) {
  if (!isOpen || !booking) return null;

  const invoiceNumber = `INV-${booking.bookingId.replace('BMS-', '')}-2026`;
  const invoiceDate = new Date(booking.createdAt).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const cgst = Number((booking.gstAmount / 2).toFixed(2));
  const sgst = Number((booking.gstAmount / 2).toFixed(2));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl text-gray-800 flex flex-col max-h-[90vh]">
        {/* Modal Toolbar */}
        <div className="bg-[#1f2533] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-red-500" />
            <h3 className="font-bold text-sm">Tax Invoice — {invoiceNumber}</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/20 text-gray-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Invoice Printable Sheet */}
        <div className="p-8 overflow-y-auto space-y-6 text-xs text-gray-700 bg-white">
          {/* Header */}
          <div className="flex justify-between items-start border-b border-gray-200 pb-6">
            <div>
              <h1 className="text-2xl font-black text-gray-900 leading-none">
                book<span className="text-red-600">my</span>show
              </h1>
              <p className="text-[11px] text-gray-500 mt-1">Bigtree Entertainment Pvt. Ltd.</p>
              <p className="text-[11px] text-gray-500">
                Ground Floor, Wajeda House, Gulmohar Cross Rd 7, Juhu, Mumbai - 400049
              </p>
              <p className="text-[11px] font-mono text-gray-700 mt-0.5">
                GSTIN: <strong>27AAACB2188L1Z5</strong> (Maharashtra)
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-bold text-[10px] uppercase border border-emerald-200">
                ORIGINAL FOR RECIPIENT
              </span>
              <p className="font-mono font-bold text-gray-900 mt-2 text-sm">{invoiceNumber}</p>
              <p className="text-gray-500 mt-0.5">Date: {invoiceDate}</p>
            </div>
          </div>

          {/* Customer & Booking Particulars */}
          <div className="grid grid-cols-2 gap-6 bg-gray-50 p-4 rounded-2xl border border-gray-200">
            <div>
              <p className="font-bold text-gray-900 uppercase text-[10px] tracking-wider mb-1">
                Billed To:
              </p>
              <p className="font-bold text-gray-800">{booking.userName}</p>
              <p className="text-gray-600">{booking.userEmail}</p>
              <p className="text-gray-600">{booking.userPhone}</p>
              <p className="text-gray-500 mt-1">Place of Supply: {booking.city || 'Maharashtra'}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-900 uppercase text-[10px] tracking-wider mb-1">
                Booking Information:
              </p>
              <p className="font-bold text-gray-800">{booking.movieTitle}</p>
              <p className="text-gray-600">{booking.venueName}</p>
              <p className="text-gray-600">
                {booking.screenName} • {booking.showDateTime}
              </p>
              <p className="text-red-600 font-mono font-bold mt-1">
                Seats: {booking.seats.map((s) => s.seatNumber).join(', ')}
              </p>
            </div>
          </div>

          {/* Line Items Table */}
          <table className="w-full text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-100 text-gray-700 uppercase font-bold text-[10px] tracking-wider">
              <tr>
                <th className="py-2.5 px-3">Description</th>
                <th className="py-2.5 px-3">SAC / HSN</th>
                <th className="py-2.5 px-3 text-center">Qty</th>
                <th className="py-2.5 px-3 text-right">Rate</th>
                <th className="py-2.5 px-3 text-right">Taxable Amt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2.5 px-3 font-medium">
                  Movie Ticket Admission Fare ({booking.seats.map((s) => s.seatNumber).join(', ')})
                </td>
                <td className="py-2.5 px-3 font-mono text-gray-500">998465</td>
                <td className="py-2.5 px-3 text-center">{booking.seats.length}</td>
                <td className="py-2.5 px-3 text-right">
                  ₹{(booking.baseAmount / booking.seats.length).toFixed(2)}
                </td>
                <td className="py-2.5 px-3 text-right font-medium">₹{booking.baseAmount}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium">
                  Internet Convenience Fee (Platform booking charges)
                </td>
                <td className="py-2.5 px-3 font-mono text-gray-500">998439</td>
                <td className="py-2.5 px-3 text-center">{booking.seats.length}</td>
                <td className="py-2.5 px-3 text-right">₹25.00</td>
                <td className="py-2.5 px-3 text-right font-medium">₹{booking.convenienceFee}</td>
              </tr>
              {booking.fnbTotal > 0 && (
                <tr>
                  <td className="py-2.5 px-3 font-medium">
                    Cinema Concession Foods & Beverages
                  </td>
                  <td className="py-2.5 px-3 font-mono text-gray-500">996331</td>
                  <td className="py-2.5 px-3 text-center">{booking.fnbItems?.length || 1}</td>
                  <td className="py-2.5 px-3 text-right">₹{booking.fnbTotal}</td>
                  <td className="py-2.5 px-3 text-right font-medium">₹{booking.fnbTotal}</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Tax Summary Calculations */}
          <div className="flex justify-end">
            <div className="w-64 space-y-1.5 text-xs text-gray-600 border-t border-gray-200 pt-3">
              <div className="flex justify-between">
                <span>Subtotal (Base + Convenience):</span>
                <span>₹{booking.baseAmount + booking.convenienceFee + (booking.fnbTotal || 0)}</span>
              </div>
              <div className="flex justify-between">
                <span>CGST (9% on Convenience Fee):</span>
                <span>₹{cgst}</span>
              </div>
              <div className="flex justify-between">
                <span>SGST (9% on Convenience Fee):</span>
                <span>₹{sgst}</span>
              </div>
              {booking.discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Coupon Discount:</span>
                  <span>-₹{booking.discount}</span>
                </div>
              )}
              <div className="border-t border-gray-300 pt-2 flex justify-between font-black text-sm text-gray-900">
                <span>Total Invoice Value:</span>
                <span className="text-red-600">₹{booking.totalAmount}</span>
              </div>
            </div>
          </div>

          {/* Footer Terms */}
          <div className="border-t border-gray-200 pt-4 text-[10px] text-gray-400 space-y-1">
            <p>• This is a system-generated electronic tax invoice and requires no physical signature.</p>
            <p>• Cinema admission is subject to venue terms and CBFC certification guidelines.</p>
            <p>• Payment Gateway Transaction Reference: {booking.paymentId}.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
