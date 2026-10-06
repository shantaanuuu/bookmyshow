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

  const languages = ['All', 'Hindi', 'English', 'Telugu', 'Tamil'];
  const genres = ['All', 'Action', 'Sci-Fi', 'Comedy', 'Horror', 'Drama', 'Concert'];
  const formats = ['All', '2D', '3D', 'IMAX 3D', '4DX', 'IMAX 70mm'];

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

  return (
    <div className="min-h-screen bg-[#f5f5fa] pb-16">
      {/* Hero Banner Showcase */}
      <section className="bg-gradient-to-r from-gray-900 via-[#1f2533] to-gray-900 text-white py-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
            {/* Featured Highlight */}
            <div className="max-w-xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 border border-red-500/40 text-red-300 text-xs font-semibold">
                <Flame className="w-4 h-4 text-red-500" />
                #1 Trending Release in {selectedCity}
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Kalki 2898 AD
              </h1>
              <p className="text-gray-300 text-sm leading-relaxed">
                Experience the futuristic mythological sci-fi blockbuster starring Prabhas, Amitabh Bachchan,
                and Deepika Padukone in breathtaking IMAX 3D and Dolby Atmos.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-300">
                <span className="flex items-center gap-1 font-bold text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" /> 8.9/10
                </span>
                <span>•</span>
                <span>Sci-Fi / Action</span>
                <span>•</span>
                <span>3h 00m</span>
                <span>•</span>
                <span className="px-2 py-0.5 bg-gray-800 rounded border border-gray-700">U/A 16+</span>
              </div>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => navigateTo('movieDetails', { eventId: 'm1' })}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-red-500/30 transition transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  <Film className="w-4 h-4" /> Book Tickets Now
                </button>
                <div className="flex items-center gap-2 text-xs bg-white/10 px-3 py-2 rounded-xl backdrop-blur-xs">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span>Use promo code <strong>BMS50</strong> for ₹50 off!</span>
                </div>
              </div>
            </div>

            {/* Poster Cards Preview */}
            <div className="flex gap-4 overflow-x-auto pb-2 max-w-full">
              {movies.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigateTo('movieDetails', { eventId: item.id })}
                  className="w-36 sm:w-44 flex-shrink-0 group cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transition duration-300 group-hover:scale-105 border-2 border-white/10">
                    <img
                      src={item.posterUrl}
                      alt={item.title}
                      className="w-full h-52 sm:h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5">
                      <p className="text-xs font-bold text-white truncate">{item.title}</p>
                      <span className="text-[10px] text-amber-400 font-medium">★ {item.rating}/10</span>
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
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-6">
          {['All', 'Movies', 'Events', 'Standup Comedy'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer whitespace-nowrap shadow-xs ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Multi-Filters Bar (FR-SRCH-02, FR-SRCH-03) */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200/80 mb-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider pb-2 border-b border-gray-100">
            <Filter className="w-4 h-4 text-red-500" />
            Filters:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Language Filter */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                Languages
              </label>
              <div className="flex flex-wrap gap-1.5">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`text-xs px-2.5 py-1 rounded-lg border transition ${
                      selectedLanguage === lang
                        ? 'bg-red-50 border-red-500 text-red-600 font-medium'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Genre Filter */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                Genres
              </label>
              <div className="flex flex-wrap gap-1.5">
                {genres.map((gnr) => (
                  <button
                    key={gnr}
                    onClick={() => setSelectedGenre(gnr)}
                    className={`text-xs px-2.5 py-1 rounded-lg border transition ${
                      selectedGenre === gnr
                        ? 'bg-red-50 border-red-500 text-red-600 font-medium'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {gnr}
                  </button>
                ))}
              </div>
            </div>

            {/* Format Filter */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                Format
              </label>
              <div className="flex flex-wrap gap-1.5">
                {formats.map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setSelectedFormat(fmt)}
                    className={`text-xs px-2.5 py-1 rounded-lg border transition ${
                      selectedFormat === fmt
                        ? 'bg-red-50 border-red-500 text-red-600 font-medium'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
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
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Recommended Movies & Events in {selectedCity}
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Showing {filteredMovies.length} experiences ready for instant booking
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
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-gray-200/70 cursor-pointer"
              >
                {/* Poster */}
                <div className="relative aspect-[2/3] overflow-hidden bg-gray-100">
                  <img
                    src={item.posterUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Rating Tag */}
                  <div className="absolute bottom-2 left-2 right-2 bg-black/85 backdrop-blur-xs text-white px-2.5 py-1 rounded-lg flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 font-bold text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {item.rating}/10
                    </span>
                    <span className="text-[10px] text-gray-300">
                      {(item.votesCount / 1000).toFixed(1)}k votes
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-red-600 transition line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.genre}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{item.availableLanguages.join(', ')}</p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {item.certification}
                    </span>
                    <span className="text-xs font-bold text-red-600 group-hover:translate-x-0.5 transition flex items-center">
                      Book <ChevronRight className="w-3.5 h-3.5" />
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
