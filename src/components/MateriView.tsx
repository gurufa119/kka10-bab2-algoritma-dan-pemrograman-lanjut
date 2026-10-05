import React, { useState } from 'react';
import { SubMateriId, MateriItem } from '../types';
import { MATERI_LIST } from '../data/materiData';
import { MathView } from './MathView';
import { 
  BookOpen, 
  Target, 
  CheckCircle2, 
  Code, 
  HelpCircle, 
  Eye, 
  EyeOff, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Layers,
  Table as TableIcon
} from 'lucide-react';

interface MateriViewProps {
  activeMateriId: SubMateriId;
  setActiveMateriId: (id: SubMateriId) => void;
}

export const MateriView: React.FC<MateriViewProps> = ({ activeMateriId, setActiveMateriId }) => {
  const currentMateri: MateriItem = MATERI_LIST.find((m) => m.id === activeMateriId) || MATERI_LIST[0];
  
  // State for toggling discussion of exercises
  const [showPembahasan, setShowPembahasan] = useState<Record<number, boolean>>({});
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});

  const togglePembahasan = (soalId: number) => {
    setShowPembahasan(prev => ({
      ...prev,
      [soalId]: !prev[soalId]
    }));
  };

  const handleSelectAnswer = (soalId: number, index: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [soalId]: index
    }));
  };

  const currentIndex = MATERI_LIST.findIndex(m => m.id === currentMateri.id);
  const prevMateri = currentIndex > 0 ? MATERI_LIST[currentIndex - 1] : null;
  const nextMateri = currentIndex < MATERI_LIST.length - 1 ? MATERI_LIST[currentIndex + 1] : null;

  return (
    <div className="space-y-8 pb-16">
      {/* Dropdown & Header Control Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
              <Layers className="w-4 h-4" />
              <span>NAVIGASI SUBBAB BAB 2</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {currentMateri.code}: {currentMateri.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {currentMateri.subtitle}
            </p>
          </div>

          {/* Submateri Dropdown Selector */}
          <div className="shrink-0">
            <label htmlFor="materi-select" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
              Pindah Subbab Materi:
            </label>
            <select
              id="materi-select"
              value={activeMateriId}
              onChange={(e) => {
                setActiveMateriId(e.target.value as SubMateriId);
                setShowPembahasan({});
                setSelectedAnswers({});
              }}
              className="w-full sm:w-64 px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none cursor-pointer"
            >
              {MATERI_LIST.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.code}: {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 1. Tujuan Pembelajaran */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50/30 dark:from-emerald-950/40 dark:to-slate-900 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-base mb-2">
          <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h2>Tujuan Pembelajaran</h2>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
          {currentMateri.tujuan}
        </p>
      </section>

      {/* 2. Indikator Ketercapaian */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base mb-3">
          <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          <h2>Indikator Ketercapaian Kompetensi</h2>
        </div>
        <ul className="space-y-2">
          {currentMateri.indikator.map((ind, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <span>{ind}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Materi Lengkap */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg sm:text-xl border-b border-slate-100 dark:border-slate-800 pb-3">
          <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          <h2>Uraian Materi Pembelajaran Lengkap</h2>
        </div>

        {/* Ringkasan Konseptual */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
          <MathView text={currentMateri.materiContent.ringkasan} />
        </div>

        {/* Sub-sections */}
        <div className="space-y-6">
          {currentMateri.materiContent.subSections.map((sec, idx) => (
            <div key={idx} className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>{sec.title}</span>
              </h3>

              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                <MathView text={sec.content} />
              </div>

              {/* Table Data if available */}
              {sec.tableData && (
                <div className="overflow-x-auto my-3 border border-slate-200 dark:border-slate-700 rounded-xl">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700">
                      <tr>
                        {sec.tableData.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-4 py-2.5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                      {sec.tableData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-2.5 leading-relaxed">
                              <MathView text={cell} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Code Snippet if available */}
              {sec.codeSnippet && (
                <div className="my-3 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-200">
                  <div className="px-4 py-1.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <div className="flex items-center gap-2">
                      <Code className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{sec.codeLanguage?.toUpperCase() || 'CODE'}</span>
                    </div>
                    <span>Contoh Sintaks Buku Teks</span>
                  </div>
                  <pre className="p-4 text-xs font-mono overflow-x-auto leading-relaxed text-emerald-300">
                    <code>{sec.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Latihan Soal & Pembahasan */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg sm:text-xl">
            <HelpCircle className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            <h2>Latihan Soal &amp; Pembahasan Interaktif</h2>
          </div>
          <span className="text-xs font-medium text-slate-500">
            {currentMateri.latihanSoal.length} Soal
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Uji pemahamanmu setelah mencermati materi di atas. Klik pilihan jawaban yang tepat, lalu buka pembahasan untuk melihat penalaran logisnya.
        </p>

        <div className="space-y-6">
          {currentMateri.latihanSoal.map((soalItem, index) => {
            const userChoice = selectedAnswers[soalItem.id];
            const isRevealed = showPembahasan[soalItem.id];
            const isAnswered = userChoice !== undefined;
            const isCorrect = userChoice === soalItem.kunci;

            return (
              <div 
                key={soalItem.id} 
                className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 space-y-4"
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-xs font-bold shrink-0">
                    {index + 1}
                  </span>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
                    <MathView text={soalItem.soal} />
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-2 pl-9">
                  {soalItem.pilihan.map((pilihan, pIdx) => {
                    const huruf = String.fromCharCode(65 + pIdx);
                    const isSelected = userChoice === pIdx;
                    let style = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-emerald-400';
                    
                    if (isAnswered) {
                      if (pIdx === soalItem.kunci) {
                        style = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-semibold';
                      } else if (isSelected && !isCorrect) {
                        style = 'bg-rose-50 dark:bg-rose-950/50 border-rose-400 text-rose-800 dark:text-rose-200';
                      }
                    }

                    return (
                      <button
                        key={pIdx}
                        onClick={() => handleSelectAnswer(soalItem.id, pIdx)}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-3 transition-colors cursor-pointer ${style}`}
                      >
                        <span className="font-bold text-slate-400 shrink-0">{huruf}.</span>
                        <span className="leading-relaxed">
                          <MathView text={pilihan} />
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Toggle Pembahasan Button & Response Box */}
                <div className="pl-9 pt-2">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => togglePembahasan(soalItem.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900 transition-colors cursor-pointer"
                    >
                      {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{isRevealed ? 'Tutup Pembahasan' : 'Lihat Pembahasan Lengkap'}</span>
                    </button>

                    {isAnswered && (
                      <span className={`text-xs font-bold ${isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500 dark:text-rose-400'}`}>
                        {isCorrect ? '✓ Jawaban Anda Benar!' : `✗ Kurang Tepat (Kunci: ${String.fromCharCode(65 + soalItem.kunci)})`}
                      </span>
                    )}
                  </div>

                  {isRevealed && (
                    <div className="mt-3 p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5 animate-in fade-in duration-200">
                      <div className="font-bold text-emerald-800 dark:text-emerald-300">
                        Kunci Jawaban: {String.fromCharCode(65 + soalItem.kunci)}
                      </div>
                      <div className="leading-relaxed">
                        <MathView text={soalItem.pembahasan} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Prev / Next Materi Navigation Footer */}
      <div className="flex items-center justify-between pt-4">
        {prevMateri ? (
          <button
            onClick={() => {
              setActiveMateriId(prevMateri.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <div className="text-left">
              <span className="block text-[10px] text-slate-400">Sebelumnya</span>
              <span>{prevMateri.code}: {prevMateri.title}</span>
            </div>
          </button>
        ) : <div />}

        {nextMateri && (
          <button
            onClick={() => {
              setActiveMateriId(nextMateri.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 shadow-md transition-colors cursor-pointer"
          >
            <div className="text-right">
              <span className="block text-[10px] text-emerald-200">Selanjutnya</span>
              <span>{nextMateri.code}: {nextMateri.title}</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
