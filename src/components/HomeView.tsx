import React from 'react';
import { NavTab, SubMateriId } from '../types';
import { 
  FileCode2, 
  GitFork, 
  Binary, 
  Terminal, 
  Code2, 
  Bug, 
  HelpCircle, 
  Gamepad2, 
  GraduationCap, 
  UserCheck, 
  ArrowRight,
  BookMarked,
  Sparkles,
  School,
  Clock,
  Layers,
  Lock
} from 'lucide-react';

interface HomeViewProps {
  onNavigateTab: (tab: NavTab) => void;
  onSelectMateri: (id: SubMateriId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigateTab, onSelectMateri }) => {
  const menuCards = [
    {
      id: 'materi-2.1',
      title: 'MATERI 2.1',
      subtitle: 'Algoritma Dasar',
      desc: 'Pengertian, karakteristik, 4 bentuk penyajian: narasi, pseudocode, tabel IPO, dan flowchart.',
      icon: FileCode2,
      accent: 'from-blue-500 to-indigo-600',
      tag: 'Fondasi Logika',
      action: () => {
        onSelectMateri('2.1');
        onNavigateTab('materi');
      }
    },
    {
      id: 'materi-2.2',
      title: 'MATERI 2.2',
      subtitle: 'Implementasi Logika dalam Flowchart',
      desc: 'Simbol standar ISO, logika urutan (sequence), seleksi (selection), dan perulangan (iteration/looping).',
      icon: GitFork,
      accent: 'from-emerald-500 to-teal-600',
      tag: 'Visual Flow',
      action: () => {
        onSelectMateri('2.2');
        onNavigateTab('materi');
      }
    },
    {
      id: 'materi-2.3',
      title: 'MATERI 2.3',
      subtitle: 'Algoritma Terstruktur & AI',
      desc: 'Array, Nested If, Nested Loop, Searching (Binary/Linear), Sorting, Rule-Based & Machine Learning.',
      icon: Binary,
      accent: 'from-violet-500 to-purple-600',
      tag: 'Terstruktur & AI',
      action: () => {
        onSelectMateri('2.3');
        onNavigateTab('materi');
      }
    },
    {
      id: 'materi-2.4',
      title: 'MATERI 2.4',
      subtitle: 'Pengenalan Pemrograman Teks',
      desc: '4 tahapan siklus kerja (Source-Compiler-Execute-Output), perbandingan tekstual vs visual, Colab & OnlineGDB.',
      icon: Terminal,
      accent: 'from-amber-500 to-orange-600',
      tag: 'Lingkungan Koding',
      action: () => {
        onSelectMateri('2.4');
        onNavigateTab('materi');
      }
    },
    {
      id: 'materi-2.5',
      title: 'MATERI 2.5',
      subtitle: 'Sintaks Dasar Pemrograman',
      desc: 'Aturan tata bahasa pemrograman Bahasa C, Python, dan Java beserta praktikum komputasi.',
      icon: Code2,
      accent: 'from-cyan-500 to-blue-600',
      tag: 'C · Python · Java',
      action: () => {
        onSelectMateri('2.5');
        onNavigateTab('materi');
      }
    },
    {
      id: 'materi-2.6',
      title: 'MATERI 2.6',
      subtitle: 'Analisis Kesalahan (Debugging)',
      desc: 'Menemukan dan memperbaiki Syntax Error, Logic Error, Runtime Error, serta 4 strategi debugging.',
      icon: Bug,
      accent: 'from-rose-500 to-red-600',
      tag: 'Troubleshooting',
      action: () => {
        onSelectMateri('2.6');
        onNavigateTab('materi');
      }
    },
    {
      id: 'kuis',
      title: 'KUIS',
      subtitle: '30 Soal Interaktif per Indikator',
      desc: 'Latihan 30 pertanyaan terperinci untuk 15 indikator capaian, dilengkapi pembahasan instan langsung.',
      icon: HelpCircle,
      accent: 'from-teal-500 to-emerald-600',
      tag: '15 Indikator',
      action: () => onNavigateTab('kuis')
    },
    {
      id: 'game',
      title: 'GAME',
      subtitle: 'Balapan Kuis 2 Kelompok',
      desc: 'Arena adu cepat cerdas cermat 2 kelompok. Saat ini dinonaktifkan sementara oleh Guru Pengampu.',
      icon: Gamepad2,
      accent: 'from-slate-400 to-slate-600',
      tag: 'Terkunci',
      disabled: true,
      action: () => alert('Fitur Game saat ini sedang dinonaktifkan sementara oleh Guru Pengampu (M. Faisal Abduh, M.Pd.).')
    },
    {
      id: 'evaluasi',
      title: 'EVALUASI',
      subtitle: 'Uji Kompetensi Terstruktur',
      desc: 'Pengerjaan soal 36 menit. Saat ini dinonaktifkan sementara menunggu jadwal pelaksanaan dari Guru Pengampu.',
      icon: GraduationCap,
      accent: 'from-slate-400 to-slate-600',
      tag: 'Terkunci',
      disabled: true,
      action: () => alert('Fitur Evaluasi saat ini sedang dinonaktifkan sementara menunggu jadwal dari Guru Pengampu (M. Faisal Abduh, M.Pd.).')
    },
    {
      id: 'profil',
      title: 'PROFIL GURU',
      subtitle: 'M. Faisal Abduh, M.Pd.',
      desc: 'Identitas Guru Pengampu Mapel Matematika & Koding/KA SMAN 1 Kersana beserta tautan Curriculum Vitae.',
      icon: UserCheck,
      accent: 'from-emerald-600 to-teal-700',
      tag: 'NIP 199104032020121014',
      action: () => onNavigateTab('profil')
    }
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/src/assets/images/hero_algo_banner_1791197734901.jpg"
            alt="Hero Banner Algoritma dan Pemrograman"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Measured dark scrim for typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-transparent" />

        <div className="relative z-10 px-6 py-10 sm:px-12 sm:py-16 max-w-4xl">
          <div className="flex items-center gap-3 text-emerald-400 font-semibold text-xs sm:text-sm tracking-wide mb-3">
            <School className="w-4 h-4" />
            <span>SMA NEGERI 1 KERSANA · FASE E KELAS X</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            BAB 2 ALGORITMA DAN PEMROGRAMAN LANJUT
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            Media Pembelajaran Interaktif mata pelajaran <strong>Koding dan Kecerdasan Artifisial</strong> yang
            mengintegrasikan pemikiran logis komputasional, implementasi flowchart terstruktur, pengenalan koding teks
            (C, Python, Java), hingga konsep kecerdasan artifisial modern.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 border-t border-slate-800/80 pt-4">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Guru Pengampu:</span>
              <strong className="text-white">M. FAISAL ABDUH, M.Pd.</strong>
            </div>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">NIP:</span>
              <span className="font-mono text-slate-200">199104032020121014</span>
            </div>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Kurikulum:</span>
              <span className="text-emerald-400 font-medium">Buku Resmi Kemdikbudristek 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Apersepsi Quote / Intro Box */}
      <section className="bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent dark:from-emerald-950/30 dark:via-slate-900 border-l-4 border-emerald-600 dark:border-emerald-500 p-5 sm:p-6 rounded-2xl">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-emerald-600 text-white rounded-xl shadow-md shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Apersepsi: Mengapa Kita Mempelajari Algoritma &amp; Pemrograman?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              "Setiap hari tanpa disadari, kita menjalankan algoritma: menentukan rute tercepat ke sekolah, menyalakan televisi, mengatur jadwal belajar, hingga menerima rekomendasi video di ponsel. Komputer bekerja dengan cara yang sama: mengikuti instruksi langkah demi langkah secara logis. Dengan menguasai bab ini, kalian memiliki bekal untuk menciptakan solusi digital cerdas di era kecerdasan artifisial."
            </p>
          </div>
        </div>
      </section>

      {/* 10 Menu Icons Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Menu Pembelajaran Interaktif
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Pilih modul materi, kuis indikator, atau profil pengampu.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg">
            10 Menu (2 Terkunci)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {menuCards.map((card) => {
            const Icon = card.icon;
            const isDisabled = !!card.disabled;

            return (
              <div
                key={card.id}
                onClick={card.action}
                className={`group relative flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-900 border shadow-sm transition-all duration-200 ${
                  isDisabled
                    ? 'opacity-65 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 cursor-not-allowed'
                    : 'border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer'
                }`}
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.accent} flex items-center justify-center text-white shadow-md ${isDisabled ? 'grayscale-50' : 'group-hover:scale-110'} transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-medium ${isDisabled ? 'text-amber-600 dark:text-amber-400 font-semibold' : 'text-slate-400 dark:text-slate-500'}`}>
                      {card.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className={`text-base font-bold ${isDisabled ? 'text-slate-600 dark:text-slate-400' : 'text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400'} transition-colors`}>
                    {card.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {card.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                  {isDisabled ? (
                    <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Nonaktif Sementara</span>
                    </span>
                  ) : (
                    <>
                      <span className="text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                        Buka Halaman
                      </span>
                      <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Overview Summary / Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-2 text-blue-600 dark:text-blue-400">
            <Layers className="w-5 h-5" />
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Cakupan 6 Sub-Materi</h4>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Mencakup materi algoritma dasar, flowchart, array, searching, sorting, rule-based, machine learning, sintaks C/Python/Java, dan debugging.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-2 text-emerald-600 dark:text-emerald-400">
            <HelpCircle className="w-5 h-5" />
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">30 Soal Kuis Berpembahasan</h4>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Menjangkau 15 indikator kompetensi siswa secara komprehensif (2 soal per indikator) dengan pembahasan langsung.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-2 text-indigo-600 dark:text-indigo-400">
            <Clock className="w-5 h-5" />
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Evaluasi Terstruktur 36 Menit</h4>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Terdiri dari Bagian A (PG), Bagian B (PG Kompleks), Bagian C (Benar/Salah), dan Bagian D (Menjodohkan) dengan bobot 100 poin.
          </p>
        </div>
      </section>
    </div>
  );
};
