import React from 'react';
import { 
  User, 
  ExternalLink, 
  Award, 
  BookOpen, 
  Code, 
  School, 
  CheckCircle, 
  Sparkles,
  Mail,
  GraduationCap
} from 'lucide-react';

export const ProfilGuruView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Main Profile Card */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl overflow-hidden relative">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* Avatar Portrait */}
          <div className="relative shrink-0">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-500/30">
              <img
                src="/src/assets/images/teacher_avatar_1791197748746.jpg"
                alt="M. Faisal Abduh, M.Pd."
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-emerald-600 text-white p-2 rounded-xl shadow-lg">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4 text-center md:text-left grow">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-2">
                <School className="w-3.5 h-3.5" />
                <span>SMA Negeri 1 Kersana · Brebes, Jawa Tengah</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                M. FAISAL ABDUH, M.Pd.
              </h1>
              <p className="text-sm font-mono text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                NIP. 199104032020121014
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Guru Pengampu Mata Pelajaran <strong>Matematika</strong> dan <strong>Koding &amp; Kecerdasan Artifisial</strong> di SMA Negeri 1 Kersana. Berkomitmen menghadirkan pembelajaran komputasional yang kontekstual, melatih cara berpikir kritis, analitis, logis, serta berdaya cipta dalam menyongsong perkembangan era kecerdasan artifisial.
            </p>

            {/* External Link Button to CV */}
            <div className="pt-2">
              <a
                href="https://gurufa119.github.io/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/25 hover:from-emerald-500 hover:to-teal-500 transition-all hover:scale-105 active:scale-98 cursor-pointer"
              >
                <span>Kunjungi Tautan CV Pendidik</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="block text-[11px] text-slate-400 mt-1.5">
                Tautan resmi portofolio dan riwayat profesional di https://gurufa119.github.io/cv
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Highlights & Dedication Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-bold text-base">
            <BookOpen className="w-5 h-5" />
            <h3>Fokus Pembelajaran Matematika &amp; Koding</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Menghubungkan ketelitian logika matematika dengan algoritma komputasi modern. Melatih peserta didik Fase E agar tidak hanya menjadi konsumen teknologi, melainkan mampu merancang algoritma, menyusun flowchart, menulis kode terstruktur, dan memahami model machine learning.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-3 text-teal-600 dark:text-teal-400 font-bold text-base">
            <Sparkles className="w-5 h-5" />
            <h3>Visi Edukasi Kecerdasan Artifisial</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Membekali murid dengan etika koding dan ketahanan mental menghadapi eror (<em>learning from errors</em>). Memanfaatkan media interaktif cloud computing seperti Google Colab dan OnlineGDB untuk akses belajar yang setara, adaptif, dan menyenangkan.
          </p>
        </div>
      </section>

      {/* School Information Footprint */}
      <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400 text-center space-y-1">
        <p className="font-semibold text-slate-700 dark:text-slate-300">
          SMA Negeri 1 Kersana · Jl. Raya Kersana - Cigedog, Kersana, Brebes, Jawa Tengah
        </p>
        <p>
          Media Pembelajaran Bab 2 Algoritma dan Pemrograman Lanjut · Kurikulum Koding &amp; Kecerdasan Artifisial 2025
        </p>
      </section>
    </div>
  );
};
