import React, { useState, useRef, useEffect } from 'react';
import { NavTab, SubMateriId } from '../types';
import { MATERI_LIST } from '../data/materiData';
import { 
  BookOpen, 
  HelpCircle, 
  Gamepad2, 
  GraduationCap, 
  User, 
  Home, 
  ChevronDown, 
  Moon, 
  Sun, 
  Maximize, 
  Minimize,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  activeMateriId: SubMateriId;
  setActiveMateriId: (id: SubMateriId) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  activeMateriId,
  setActiveMateriId,
  darkMode,
  setDarkMode,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        // Fallback or ignore if blocked
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        }).catch(() => {});
      }
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Zone 1: Brand title */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-base font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                BAB 2 ALGORITMA &amp; PEMROGRAMAN LANJUT
              </span>
              <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
                Koding &amp; KA Fase E · SMAN 1 Kersana
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'home'
                  ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>HOME</span>
            </button>

            {/* MATERI Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'materi'
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>MATERI</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Pilih Subbab Materi
                  </div>
                  {MATERI_LIST.map((materi) => (
                    <button
                      key={materi.id}
                      onClick={() => {
                        setActiveMateriId(materi.id);
                        setActiveTab('materi');
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 text-xs sm:text-sm flex items-start gap-2 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors cursor-pointer ${
                        activeTab === 'materi' && activeMateriId === materi.id
                          ? 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50/50 dark:bg-emerald-950/30'
                          : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className="shrink-0 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-300">
                        {materi.id}
                      </span>
                      <span className="truncate">{materi.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setActiveTab('kuis')}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'kuis'
                  ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>KUIS</span>
            </button>

            {/* GAME - NONAKTIF SEMENTARA */}
            <button
              disabled
              title="Fitur Game sedang dinonaktifkan sementara oleh Guru Pengampu"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg text-slate-400 dark:text-slate-600 opacity-60 cursor-not-allowed select-none"
            >
              <Gamepad2 className="w-4 h-4 text-slate-400 dark:text-slate-600" />
              <span>GAME</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 font-semibold">
                Terkunci
              </span>
            </button>

            {/* EVALUASI - NONAKTIF SEMENTARA */}
            <button
              disabled
              title="Fitur Evaluasi sedang dinonaktifkan sementara oleh Guru Pengampu"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg text-slate-400 dark:text-slate-600 opacity-60 cursor-not-allowed select-none"
            >
              <GraduationCap className="w-4 h-4 text-slate-400 dark:text-slate-600" />
              <span>EVALUASI</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 font-semibold">
                Terkunci
              </span>
            </button>

            <button
              onClick={() => setActiveTab('profil')}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'profil'
                  ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <User className="w-4 h-4" />
              <span>PROFIL GURU</span>
            </button>
          </nav>

          {/* Zone 3: Actions (Fullscreen & Dark/Light mode) */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? 'Keluar Layar Penuh' : 'Mode Layar Penuh (Fullscreen)'}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>
          </div>

        </div>

        {/* Mobile Submenu Navigation Bar */}
        <div className="lg:hidden flex items-center justify-between overflow-x-auto py-2 border-t border-slate-100 dark:border-slate-800 text-xs no-scrollbar gap-2">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap ${
              activeTab === 'home' ? 'bg-emerald-600 text-white font-medium' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('materi')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap ${
              activeTab === 'materi' ? 'bg-emerald-600 text-white font-medium' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Materi ({activeMateriId})
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap ${
              activeTab === 'kuis' ? 'bg-emerald-600 text-white font-medium' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Kuis
          </button>
          <button
            disabled
            title="Fitur Game dinonaktifkan sementara"
            className="px-2.5 py-1.5 rounded-md whitespace-nowrap text-slate-400 dark:text-slate-600 opacity-60 cursor-not-allowed select-none"
          >
            Game (Terkunci)
          </button>
          <button
            disabled
            title="Fitur Evaluasi dinonaktifkan sementara"
            className="px-2.5 py-1.5 rounded-md whitespace-nowrap text-slate-400 dark:text-slate-600 opacity-60 cursor-not-allowed select-none"
          >
            Evaluasi (Terkunci)
          </button>
          <button
            onClick={() => setActiveTab('profil')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap ${
              activeTab === 'profil' ? 'bg-emerald-600 text-white font-medium' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Profil Guru
          </button>
        </div>

      </div>
    </header>
  );
};
