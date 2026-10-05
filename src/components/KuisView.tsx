import React, { useState } from 'react';
import { KUIS_DATA } from '../data/kuisData';
import { MathView } from './MathView';
import { 
  HelpCircle, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Award, 
  BookOpen, 
  ChevronRight, 
  Check, 
  Filter
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const KuisView: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  // Indicators list for filtering
  const indicatorsList = [
    { code: 'all', label: 'Semua 30 Soal' },
    { code: 'a', label: 'Indikator (a) Konsep Algoritma & Logika' },
    { code: 'b', label: 'Indikator (b) Flowchart & Pseudocode' },
    { code: 'c', label: 'Indikator (c) Masalah Kontekstual' },
    { code: 'd', label: 'Indikator (d) Efisiensi Algoritma' },
    { code: 'e', label: 'Indikator (e) Rule-Based & ML' },
    { code: 'f', label: 'Indikator (f) Pemilihan Algoritma' },
    { code: 'g', label: 'Indikator (g) Alasan Pemilihan' },
    { code: 'h', label: 'Indikator (h) Pemrograman Teks (Python)' },
    { code: 'i', label: 'Indikator (i) Struktur Data & Operator' },
    { code: 'j', label: 'Indikator (j) Eksekusi & Pengujian' },
    { code: 'k', label: 'Indikator (k) Identifikasi Syntax & Logic' },
    { code: 'l', label: 'Indikator (l) Perbaikan Debugging' },
    { code: 'm', label: 'Indikator (m) Nested If' },
    { code: 'n', label: 'Indikator (n) Nested Loop' },
    { code: 'o', label: 'Indikator (o) Integrasi Proyek Mini' },
  ];

  const filteredQuestions = activeFilter === 'all' 
    ? KUIS_DATA 
    : KUIS_DATA.filter(q => q.indikatorKode === activeFilter);

  const handleSelectOption = (soalId: number, optionIdx: number) => {
    // If already answered, do not allow change if we want strict mode, or allow review
    if (selectedAnswers[soalId] !== undefined) return;

    setSelectedAnswers(prev => {
      const nextState = { ...prev, [soalId]: optionIdx };
      const currentSoal = KUIS_DATA.find(q => q.id === soalId);
      if (currentSoal && optionIdx === currentSoal.kunci) {
        // Fire mini celebratory confetti if correct
        confetti({
          particleCount: 25,
          spread: 40,
          origin: { y: 0.7 }
        });
      }
      return nextState;
    });
  };

  const handleResetKuis = () => {
    if (window.confirm('Apakah Anda yakin ingin mengulang pengerjaan kuis dari awal?')) {
      setSelectedAnswers({});
      setCurrentQuestionIndex(0);
    }
  };

  // Score statistics
  const totalAnswered = Object.keys(selectedAnswers).length;
  const correctCount = Object.entries(selectedAnswers).filter(([id, ans]) => {
    const q = KUIS_DATA.find(item => item.id === Number(id));
    return q && q.kunci === ans;
  }).length;
  const wrongCount = totalAnswered - correctCount;
  const currentScore = totalAnswered > 0 ? Math.round((correctCount / KUIS_DATA.length) * 100) : 0;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>30 SOAL LATIHAN INTERAKTIF · 15 INDIKATOR KOMPETENSI</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Kuis Pembelajaran Indikator Capaian
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Setiap indikator memiliki 2 butir soal terstruktur. Klik salah satu pilihan jawaban, sistem akan secara instan menampilkan status kebenaran beserta pembahasan detailnya!
            </p>
          </div>

          {/* Quick Score Card */}
          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 shrink-0">
            <div className="text-center px-2">
              <span className="block text-[11px] text-slate-400">Terjawab</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200 tabular-nums">
                {totalAnswered} / 30
              </span>
            </div>
            <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
            <div className="text-center px-2">
              <span className="block text-[11px] text-emerald-600 dark:text-emerald-400">Benar</span>
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
                {correctCount}
              </span>
            </div>
            <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
            <div className="text-center px-2">
              <span className="block text-[11px] text-rose-500">Salah</span>
              <span className="text-sm font-bold text-rose-500 tabular-nums">
                {wrongCount}
              </span>
            </div>
            <button
              onClick={handleResetKuis}
              title="Reset Pengerjaan"
              className="p-2 ml-1 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter bar */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter Indikator:</span>
          </div>
          <select
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            className="w-full sm:w-auto px-3 py-1.5 text-xs bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
          >
            {indicatorsList.map((item) => (
              <option key={item.code} value={item.code}>
                {item.label}
              </option>
            ))}
          </select>
          <span className="text-xs text-slate-400 sm:ml-auto">
            Menampilkan {filteredQuestions.length} soal
          </span>
        </div>
      </section>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.map((q) => {
          const userAnswer = selectedAnswers[q.id];
          const isAnswered = userAnswer !== undefined;
          const isCorrect = userAnswer === q.kunci;

          return (
            <div
              key={q.id}
              className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border transition-all duration-200 ${
                isAnswered
                  ? isCorrect
                    ? 'border-emerald-400/80 dark:border-emerald-800/80 shadow-sm'
                    : 'border-rose-400/80 dark:border-rose-800/80 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {/* Question Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold font-mono">
                    Soal #{q.id}
                  </span>
                  <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded">
                    Indikator ({q.indikatorKode})
                  </span>
                </div>
                <span className="text-xs text-slate-400 italic">
                  {q.indikatorNama}
                </span>
              </div>

              {/* Question Text */}
              <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed mb-4">
                <MathView text={q.soal} />
              </div>

              {/* Choices list */}
              <div className="space-y-2.5 mb-4">
                {q.pilihan.map((pilihan, pIdx) => {
                  const huruf = String.fromCharCode(65 + pIdx);
                  const isSelected = userAnswer === pIdx;
                  
                  let optionClass = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-emerald-400 hover:bg-emerald-50/30';
                  
                  if (isAnswered) {
                    if (pIdx === q.kunci) {
                      optionClass = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold';
                    } else if (isSelected && !isCorrect) {
                      optionClass = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200';
                    } else {
                      optionClass = 'opacity-60 bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={pIdx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(q.id, pIdx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-3 transition-all cursor-pointer ${optionClass}`}
                    >
                      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {huruf}
                      </span>
                      <span className="leading-relaxed grow">
                        <MathView text={pilihan} />
                      </span>
                      {isAnswered && pIdx === q.kunci && (
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Explanation / Discussion Box */}
              {isAnswered && (
                <div className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed animate-in fade-in zoom-in-95 duration-200 border ${
                  isCorrect
                    ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60 text-slate-800 dark:text-slate-200'
                    : 'bg-rose-50/70 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800/60 text-slate-800 dark:text-slate-200'
                }`}>
                  <div className="flex items-center gap-2 mb-2 font-bold">
                    {isCorrect ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-800 dark:text-emerald-300">Jawaban Anda Benar! Kunci: ({String.fromCharCode(65 + q.kunci)})</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                        <span className="text-rose-800 dark:text-rose-300">Jawaban Anda Belum Tepat. Kunci yang Benar: ({String.fromCharCode(65 + q.kunci)})</span>
                      </>
                    )}
                  </div>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong className="block text-slate-900 dark:text-white mb-1">Pembahasan Logika:</strong>
                    <MathView text={q.pembahasan} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
