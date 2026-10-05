import React, { useState, useEffect } from 'react';
import { NavTab, SubMateriId } from './types';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { MateriView } from './components/MateriView';
import { KuisView } from './components/KuisView';
import { GameView } from './components/GameView';
import { EvaluasiView } from './components/EvaluasiView';
import { ProfilGuruView } from './components/ProfilGuruView';
import { FloatingControls } from './components/FloatingControls';
import { Lock } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [activeMateriId, setActiveMateriId] = useState<SubMateriId>('2.1');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Sync dark mode class on document.documentElement
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('app_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('app_theme', 'light');
    }
  }, [darkMode]);

  // Scroll to top when active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeMateriId={activeMateriId}
        setActiveMateriId={setActiveMateriId}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {activeTab === 'home' && (
          <HomeView
            onNavigateTab={setActiveTab}
            onSelectMateri={(id) => {
              setActiveMateriId(id);
              setActiveTab('materi');
            }}
          />
        )}

        {activeTab === 'materi' && (
          <MateriView
            activeMateriId={activeMateriId}
            setActiveMateriId={setActiveMateriId}
          />
        )}

        {activeTab === 'kuis' && <KuisView />}

        {(activeTab === 'game' || activeTab === 'evaluasi') && (
          <div className="max-w-xl mx-auto my-12 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xl space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto shadow-md">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Fitur Sedang Dinonaktifkan Sementara
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Fitur {activeTab === 'game' ? 'Game Balapan Kuis' : 'Evaluasi Akhir 36 Menit'} saat ini sedang dinonaktifkan sementara oleh Guru Pengampu (<strong>M. FAISAL ABDUH, M.Pd.</strong>). Silakan pelajari Materi 2.1 s.d. 2.6 dan latihan Kuis terlebih dahulu.
            </p>
            <button
              onClick={() => setActiveTab('home')}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-500 transition-colors shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <span>Kembali ke Halaman Home</span>
            </button>
          </div>
        )}

        {activeTab === 'profil' && <ProfilGuruView />}
      </main>

      {/* Global Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-500 dark:text-slate-400 py-6 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="font-bold text-slate-800 dark:text-slate-200">
              BAB 2 ALGORITMA DAN PEMROGRAMAN LANJUT
            </span>
            <span className="block text-[11px] text-slate-400 mt-0.5">
              Koding dan Kecerdasan Artifisial SMA Fase E Kelas X · SMA Negeri 1 Kersana
            </span>
          </div>

          <div className="flex items-center gap-2 text-center sm:text-right">
            <span>Guru Pengampu:</span>
            <strong className="text-slate-800 dark:text-slate-200">M. FAISAL ABDUH, M.Pd.</strong>
            <span className="text-slate-400 font-mono">(NIP 199104032020121014)</span>
          </div>
        </div>
      </footer>

      {/* Floating Action: Back to Top */}
      <FloatingControls />
    </div>
  );
}
