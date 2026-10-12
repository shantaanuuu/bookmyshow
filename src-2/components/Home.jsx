import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Star,
  Film,
  Calendar,
  Sparkles,
  ChevronRight,
  Filter,
  Flame,
  Music,
  Tv,
  Check
} from 'lucide-react';

export default function Home() {
  const { movies, navigateTo, selectedCity } = useApp();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedFormat, setSelectedFormat] = useState('All');

  const languages = ['All', 'Hindi', 'English', 'Telugu', 'Tamil', 'Malayalam', 'Kannada', 'Japanese', 'Korean'];
  const genres = ['All', 'Action', 'Sci-Fi', 'Comedy', 'Horror', 'Drama', 'Concert', 'Animation', 'Thriller', 'Romance', 'Adventure', 'Fantasy', 'Crime', 'Historical'];
  const formats = ['All', '2D', '3D', 'IMAX 2D', 'IMAX 3D', '4DX', 'IMAX 70mm'];

  // Filter application (FR-SRCH-02, FR-SRCH-03)
  const filteredMovies = movies.filter((movie) => {
    if (selectedCategory !== 'All' && movie.category !== selectedCategory) {
      if (selectedCategory === 'Movies' && movie.type !== 'movie') return false;
      if (selectedCategory === 'Events' && movie.type !== 'event') return false;
      if (selectedCategory === 'Standup Comedy' && movie.category !== 'Standup Comedy') return false;
    }
    if (selectedLanguage !== 'All' && !movie.availableLanguages.includes(selectedLanguage)) {
      return false;
    }
    if (selectedGenre !== 'All' && !movie.genres.includes(selectedGenre)) {
      return false;
    }
    if (selectedFormat !== 'All' && !movie.formats.includes(selectedFormat)) {
      return false;
    }
    return true;
  });

  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featuredMovies = movies.slice(0, 5);
  const currentFeatured = featuredMovies[featuredIndex] || movies[0];

  return (
    <div className="min-h-screen bg-[#0d101d] text-gray-100 pb-20 selection:bg-red-500 selection:text-white">
      {/* Cinematic Hero Billboard Showcase */}
      <section className="relative text-white py-12 sm:py-16 overflow-hidden border-b border-white/10">
        {/* Ambient Blurred Backdrop from featured banner */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105 opacity-25 filter blur-2xl pointer-events-none"
          style={{ backgroundImage: `url(${currentFeatured.bannerUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d101d] via-[#0d101d]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,68,100,0.2),transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 justify-between">
            {/* Featured Highlight Left */}
            <div className="max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-bold tracking-wide shadow-sm animate-pulse">
                <Flame className="w-4 h-4 text-red-500" />
                #1 BLOCKBUSTER PREMIERE IN {selectedCity.toUpperCase()}
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none drop-shadow-md">
                {currentFeatured.title}
              </h1>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                {currentFeatured.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold text-gray-300">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-sm text-white">{currentFeatured.rating}</span>/10 ({((currentFeatured.votesCount || 1000) / 1000).toFixed(1)}k votes)
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-white font-medium">
                  {currentFeatured.genre}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-white font-medium">
                  {Math.floor(currentFeatured.duration / 60)}h {currentFeatured.duration % 60}m
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 uppercase">
                  {currentFeatured.certification}
                </span>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigateTo('movieDetails', { eventId: currentFeatured.id })}
                  className="px-8 py-3.5 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-red-600/40 hover:shadow-red-500/60 transition-all transform hover:-translate-y-1 cursor-pointer flex items-center gap-2.5"
                >
                  <Film className="w-4 h-4" /> Book Tickets & Shows
                </button>

                <div className="flex items-center gap-2 text-xs bg-white/5 border border-white/10 px-4 py-3 rounded-2xl backdrop-blur-md text-amber-300">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
                  <span>Flat ₹50 OFF with code <strong className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded">BMS50</strong></span>
                </div>
              </div>

              {/* Slide dots */}
              <div className="flex items-center gap-2 pt-2">
                {featuredMovies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setFeaturedIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      featuredIndex === idx ? 'w-8 bg-red-500' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Poster Cards Carousel Thumbnails Right */}
            <div className="flex gap-4 overflow-x-auto pb-4 max-w-full lg:max-w-md no-scrollbar">
              {featuredMovies.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setFeaturedIndex(idx)}
                  className={`w-32 sm:w-40 flex-shrink-0 group cursor-pointer transition-all duration-300 ${
                    featuredIndex === idx
                      ? 'scale-105 ring-2 ring-red-500 shadow-2xl shadow-red-500/30 rounded-2xl'
                      : 'opacity-60 hover:opacity-100 hover:scale-102'
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900 aspect-[2/3]">
                    <img
                      src={item.posterUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-2.5">
                      <p className="text-xs font-bold text-white truncate">{item.title}</p>
                      <span className="text-[10px] text-amber-400 font-semibold flex items-center gap-0.5">
                        ★ {item.rating}/10
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Category Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-2 mb-6">
          {['All', 'Movies', 'Events', 'Standup Comedy'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/40 ring-1 ring-white/30'
                  : 'bg-[#181c2b] text-gray-400 hover:text-white hover:bg-[#22283d] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Multi-Filters Bar */}
        <div className="bg-[#141826]/90 backdrop-blur-xl p-5 rounded-3xl border border-white/10 mb-10 shadow-2xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-black text-gray-200 uppercase tracking-widest">
              <Filter className="w-4 h-4 text-red-500" />
              <span>Smart Catalog Filters</span>
            </div>
            {(selectedLanguage !== 'All' || selectedGenre !== 'All' || selectedFormat !== 'All') && (
              <button
                onClick={() => {
                  setSelectedLanguage('All');
                  setSelectedGenre('All');
                  setSelectedFormat('All');
                }}
                className="text-xs text-red-400 hover:text-red-300 font-bold cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Language Filter */}
            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                Languages
              </label>
              <div className="flex flex-wrap gap-1.5">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`text-xs px-3 py-1.5 rounded-xl border transition cursor-pointer font-medium ${
                      selectedLanguage === lang
                        ? 'bg-red-600/30 border-red-500 text-red-300 font-bold shadow-xs'
                        : 'border-white/10 bg-[#1c2236]/60 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Genre Filter */}
            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                Genres
              </label>
              <div className="flex flex-wrap gap-1.5">
                {genres.map((gnr) => (
                  <button
                    key={gnr}
                    onClick={() => setSelectedGenre(gnr)}
                    className={`text-xs px-3 py-1.5 rounded-xl border transition cursor-pointer font-medium ${
                      selectedGenre === gnr
                        ? 'bg-red-600/30 border-red-500 text-red-300 font-bold shadow-xs'
                        : 'border-white/10 bg-[#1c2236]/60 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {gnr}
                  </button>
                ))}
              </div>
            </div>

            {/* Format Filter */}
            <div>
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                Screen Format
              </label>
              <div className="flex flex-wrap gap-1.5">
                {formats.map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setSelectedFormat(fmt)}
                    className={`text-xs px-3 py-1.5 rounded-xl border transition cursor-pointer font-medium ${
                      selectedFormat === fmt
                        ? 'bg-red-600/30 border-red-500 text-red-300 font-bold shadow-xs'
                        : 'border-white/10 bg-[#1c2236]/60 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
              <span>Now Showing in {selectedCity}</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Showing <span className="text-red-400 font-bold">{filteredMovies.length}</span> curated blockbuster movies & live experiences
            </p>
          </div>
        </div>

        {/* Movies Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredMovies.map((item) => (
              <div
                key={item.id}
                onClick={() => navigateTo('movieDetails', { eventId: item.id })}
                className="bg-[#141826] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-500 group flex flex-col border border-white/10 hover:border-red-500/50 hover:-translate-y-2 cursor-pointer relative"
              >
                {/* Poster */}
                <div className="relative aspect-[2/3] overflow-hidden bg-gray-900">
                  <img
                    src={item.posterUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141826] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Rating Badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/85 backdrop-blur-md text-white px-3 py-1.5 rounded-xl flex items-center justify-between text-xs border border-white/10 shadow-lg">
                    <span className="flex items-center gap-1.5 font-extrabold text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {item.rating}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium">
                      {(item.votesCount / 1000).toFixed(1)}k
                    </span>
                  </div>

                  {/* Top Format Pill */}
                  <div className="absolute top-2.5 right-2.5">
                    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-rose-300 border border-rose-500/30">
                      {item.formats?.[0] || '2D'}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-white group-hover:text-red-400 transition-colors line-clamp-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-1 font-medium">{item.genre}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">{item.availableLanguages.join(', ')}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-lg">
                      {item.certification}
                    </span>
                    <span className="text-xs font-black text-red-400 group-hover:text-red-300 group-hover:translate-x-1 transition-all flex items-center gap-0.5">
                      Book Now <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
            <Film className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-800">No shows match your filters</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
              Try adjusting your language, genre, or format filter criteria to find upcoming shows in {selectedCity}.
            </p>
            <button
              onClick={() => {
                setSelectedLanguage('All');
                setSelectedGenre('All');
                setSelectedFormat('All');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 bg-red-50 text-red-600 font-semibold text-xs rounded-xl hover:bg-red-100 transition"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
