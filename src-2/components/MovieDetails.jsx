import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Star,
  Clock,
  Calendar,
  MapPin,
  Share2,
  Heart,
  ChevronLeft,
  Info,
  ShieldCheck,
  TrendingUp,
  MessageSquarePlus
} from 'lucide-react';

export default function MovieDetails({ onOpenReviewModal }) {
  const {
    movies,
    selectedEventId,
    venues,
    shows,
    selectedCity,
    navigateTo,
    reviews,
  } = useApp();

  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  // Retrieve selected movie/event
  const movie = movies.find((m) => m.id === selectedEventId) || movies[0];

  // Generate 5 consecutive dates starting today
  const dates = Array.from({ length: 5 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      dayName: i === 0 ? 'TODAY' : i === 1 ? 'TOM' : d.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
      dayNumber: d.getDate(),
      month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
      isoDate: d.toISOString().split('T')[0],
    };
  });

  const activeIsoDate = dates[selectedDateIndex].isoDate;

  // Filter shows for this event in selected city
  const cityVenues = venues.filter((v) => v.city === selectedCity);
  const cityVenueIds = cityVenues.map((v) => v.venueId);

  // Event reviews
  const eventReviews = reviews.filter((r) => r.eventId === movie.id);

  return (
    <div className="min-h-screen bg-[#f5f5fa] pb-20">
      {/* Back button bar */}
      <div className="bg-[#1f2533] border-b border-gray-800 text-gray-300 py-2.5 px-4 sm:px-8 text-xs flex items-center justify-between">
        <button
          onClick={() => navigateTo('home')}
          className="flex items-center gap-1.5 hover:text-white transition font-medium cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Movies & Events
        </button>
        <span className="text-gray-400">Cinemas in {selectedCity}</span>
      </div>

      {/* Hero Banner Section */}
      <div
        className="relative bg-cover bg-center text-white py-12 px-4 sm:px-8"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95) 30%, rgba(15, 23, 42, 0.8) 100%), url(${movie.bannerUrl})`,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Movie Poster */}
          <div className="w-52 sm:w-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Metadata */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="px-2.5 py-1 bg-red-600 text-white rounded-md text-xs font-bold uppercase tracking-wider">
                {movie.category}
              </span>
              <span className="px-2.5 py-1 bg-white/20 text-white rounded-md text-xs font-medium backdrop-blur-xs">
                {movie.certification}
              </span>
              <span className="px-2.5 py-1 bg-white/20 text-white rounded-md text-xs font-medium backdrop-blur-xs">
                {movie.formats.join(', ')}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {movie.title}
            </h1>

            {/* Rating Banner */}
            <div className="inline-flex items-center gap-4 bg-gray-900/80 border border-white/10 px-4 py-2.5 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold text-lg">
                <Star className="w-5 h-5 fill-amber-400" />
                <span>{movie.rating}/10</span>
              </div>
              <div className="text-left border-l border-gray-700 pl-4">
                <p className="text-xs font-bold text-gray-200">
                  {(movie.votesCount / 1000).toFixed(1)}K Ratings
                </p>
                <p className="text-[11px] text-gray-400">Verified BMS audience votes</p>
              </div>
              <button
                onClick={onOpenReviewModal}
                className="ml-2 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
              >
                <MessageSquarePlus className="w-3.5 h-3.5" /> Rate Movie
              </button>
            </div>

            {/* Languages & Duration */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-gray-300">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-red-400" /> {Math.floor(movie.duration / 60)}h{' '}
                {movie.duration % 60}m
              </span>
              <span>•</span>
              <span>{movie.genre}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-red-400" /> Release: {movie.releaseDate}
              </span>
              <span>•</span>
              <span className="text-amber-300 font-medium">
                Audio: {movie.availableLanguages.join(', ')}
              </span>
            </div>

            <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
              {movie.description}
            </p>

            {/* Cast preview */}
            <div className="pt-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Top Cast:
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {movie.cast.map((actor, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-white/10 rounded-lg text-gray-200 border border-white/10"
                  >
                    <strong>{actor.name}</strong> as {actor.role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Date Bar & Show Timings Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Date Selector Pills */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-gray-200 mb-8 flex items-center gap-3 overflow-x-auto no-scrollbar">
          {dates.map((d, index) => {
            const isSelected = selectedDateIndex === index;
            return (
              <button
                key={index}
                onClick={() => setSelectedDateIndex(index)}
                className={`flex flex-col items-center justify-center min-w-[70px] py-2.5 px-3 rounded-xl transition text-center cursor-pointer ${
                  isSelected
                    ? 'bg-red-600 text-white font-bold shadow-md'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <span className="text-[10px] tracking-wider uppercase">{d.dayName}</span>
                <span className="text-lg font-black">{d.dayNumber}</span>
                <span className="text-[10px]">{d.month}</span>
              </button>
            );
          })}
        </div>

        {/* Venues & Showtimes List (Sequence Diagram Page 4) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500" />
              Theatres Screening in {selectedCity}
            </h2>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Available
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Almost Full
              </span>
            </div>
          </div>

          {cityVenues.length > 0 ? (
            cityVenues.map((venue) => {
              // Find shows at this venue
              const venueShows = shows.filter(
                (s) => s.venueId === venue.venueId && s.eventId === movie.id
              );

              return (
                <div
                  key={venue.venueId}
                  className="bg-white rounded-2xl p-6 shadow-xs border border-gray-200/90 hover:shadow-md transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-100">
                    <div>
                      <h3 className="font-bold text-base text-gray-900">{venue.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{venue.address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> M-Ticket Available
                      </span>
                      <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                        F&B Counter
                      </span>
                    </div>
                  </div>

                  {/* Showtimes Pills */}
                  <div className="pt-4">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Select Showtime:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {venueShows.length > 0 ? (
                        venueShows.map((show) => {
                          const isHighOccupancy = show.occupancyRate >= 80;
                          return (
                            <button
                              key={show.showId}
                              onClick={() =>
                                navigateTo('seatMap', { eventId: movie.id, show })
                              }
                              className={`group relative flex flex-col items-center justify-center px-4 py-2.5 rounded-xl border text-center transition cursor-pointer shadow-xs ${
                                isHighOccupancy
                                  ? 'border-amber-300 bg-amber-50/50 hover:bg-amber-100/70 hover:border-amber-500'
                                  : 'border-gray-200 hover:border-red-500 hover:bg-red-50/40 bg-white'
                              }`}
                            >
                              <span className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition">
                                {show.showTime}
                              </span>
                              <span className="text-[10px] text-gray-500 font-medium mt-0.5">
                                {show.format}
                              </span>
                              <span className="text-[10px] font-bold text-emerald-600 mt-0.5">
                                ₹{show.basePrice}
                              </span>

                              {isHighOccupancy && (
                                <span className="absolute -top-2 right-1 px-1.5 py-0.2 bg-amber-500 text-white text-[9px] font-extrabold rounded-full shadow-xs flex items-center gap-0.5">
                                  <TrendingUp className="w-2.5 h-2.5" /> Fast Filling
                                </span>
                              )}
                            </button>
                          );
                        })
                      ) : (
                        // Fallback simulated showtimes if no direct show matched
                        ['11:00 AM', '03:15 PM', '06:30 PM', '09:45 PM'].map((simTime, i) => (
                          <button
                            key={i}
                            onClick={() =>
                              navigateTo('seatMap', {
                                eventId: movie.id,
                                show: {
                                  showId: `sim_${venue.venueId}_${i}`,
                                  eventId: movie.id,
                                  venueId: venue.venueId,
                                  screenId: venue.screens[0]?.screenId || 's1',
                                  showDate: activeIsoDate,
                                  showTime: simTime,
                                  format: movie.formats[0] || '2D',
                                  basePrice: 280,
                                  availableSeats: 54,
                                  totalSeats: 60,
                                  occupancyRate: 10,
                                  dynamicMultiplier: 1.0,
                                },
                              })
                            }
                            className="flex flex-col items-center justify-center px-4 py-2 rounded-xl border border-gray-200 hover:border-red-500 hover:bg-red-50/40 transition cursor-pointer shadow-xs bg-white"
                          >
                            <span className="text-sm font-bold text-gray-900">{simTime}</span>
                            <span className="text-[10px] text-gray-500 font-medium">
                              {movie.formats[0] || '2D'}
                            </span>
                            <span className="text-[10px] font-bold text-emerald-600">₹280</span>
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white p-8 rounded-2xl text-center border border-gray-200">
              <p className="text-gray-500 text-sm">
                No multiplexes configured for {selectedCity} yet. Please switch city or check back soon.
              </p>
            </div>
          )}
        </div>

        {/* User Reviews Section (FR-RATE-01 to 03) */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-xs border border-gray-200">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Audience Reviews ({eventReviews.length})
              </h3>
              <p className="text-xs text-gray-500">Real feedback from verified ticket holders</p>
            </div>
            <button
              onClick={onOpenReviewModal}
              className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 text-xs font-semibold rounded-xl transition cursor-pointer"
            >
              + Write a Review
            </button>
          </div>

          <div className="divide-y divide-gray-100 mt-4 space-y-4">
            {eventReviews.length > 0 ? (
              eventReviews.map((rev) => (
                <div key={rev.reviewId} className="pt-4 first:pt-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-gray-900">{rev.userName}</span>
                    <span className="text-xs text-gray-400">{rev.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 mb-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'
                        }`}
                      />
                    ))}
                    <span className="text-xs font-bold text-gray-700 ml-1.5">{rev.title}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{rev.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-xs text-gray-400 text-center py-6">
                Be the first to review this show after booking your tickets!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
