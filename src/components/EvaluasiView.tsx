import React, { useState, useEffect, useRef } from 'react';
import { 
  EvaluasiStudentIdentity, 
  EvaluasiAnswers, 
  EvaluasiResult,
  SubMateriId
} from '../types';
import { 
  EVALUASI_BAGIAN_A, 
  EVALUASI_BAGIAN_B, 
  EVALUASI_BAGIAN_C, 
  EVALUASI_BAGIAN_D 
} from '../data/evaluasiData';
import { MathView } from './MathView';
import { 
  Timer, 
  AlertCircle, 
  CheckCircle2, 
  CheckSquare, 
  GraduationCap, 
  Printer, 
  RotateCcw, 
  Send, 
  FileText,
  Clock,
  User,
  School,
  Sparkles,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

const TOTAL_TIME_SECONDS = 36 * 60; // 36 menit = 2160 detik

export const EvaluasiView: React.FC = () => {
  // Screen: 'identity' | 'exam' | 'result'
  const [screen, setScreen] = useState<'identity' | 'exam' | 'result'>('identity');

  // Student Identity
  const [identity, setIdentity] = useState<EvaluasiStudentIdentity>({
    nama: '',
    noAbsen: '',
    kelas: 'X-3'
  });
  const [identityError, setIdentityError] = useState('');

  // Exam Answers
  const [answers, setAnswers] = useState<EvaluasiAnswers>({
    bagianA: {},
    bagianB: {},
    bagianC: {},
    bagianD: {}
  });

  // Current active sub-tab inside the exam
  const [examTab, setExamTab] = useState<'A' | 'B' | 'C' | 'D'>('A');

  // Timer
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME_SECONDS);
  const [timerActive, setTimerActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Result state
  const [result, setResult] = useState<EvaluasiResult | null>(null);

  // Timer Countdown Effect
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerActive, timeLeft]);

  // Handle start exam
  const handleStartExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identity.nama.trim()) {
      setIdentityError('Harap masukkan Nama Lengkap Anda.');
      return;
    }
    if (!identity.noAbsen.trim()) {
      setIdentityError('Harap masukkan No. Absen Anda.');
      return;
    }

    setIdentityError('');
    setTimeLeft(TOTAL_TIME_SECONDS);
    setTimerActive(true);
    setScreen('exam');
  };

  // Answer handlers
  const handleAnswerA = (soalId: number, optionIdx: number) => {
    setAnswers(prev => ({
      ...prev,
      bagianA: { ...prev.bagianA, [soalId]: optionIdx }
    }));
  };

  const handleToggleB = (soalId: number, optionIdx: number) => {
    setAnswers(prev => {
      const currentList = prev.bagianB[soalId] || [];
      const exists = currentList.includes(optionIdx);
      const updated = exists 
        ? currentList.filter(idx => idx !== optionIdx)
        : [...currentList, optionIdx].sort((a, b) => a - b);
      return {
        ...prev,
        bagianB: { ...prev.bagianB, [soalId]: updated }
      };
    });
  };

  const handleAnswerC = (soalId: number, val: boolean) => {
    setAnswers(prev => ({
      ...prev,
      bagianC: { ...prev.bagianC, [soalId]: val }
    }));
  };

  const handleAnswerD = (soalId: number, itemId: string, targetJawaban: string) => {
    setAnswers(prev => {
      const currentPairs = prev.bagianD[soalId] || {};
      return {
        ...prev,
        bagianD: {
          ...prev.bagianD,
          [soalId]: {
            ...currentPairs,
            [itemId]: targetJawaban
          }
        }
      };
    });
  };

  // Submission calculation
  const calculateResult = () => {
    // Bagian A: 10 soal, bobot 3 poin per soal (max 30)
    let skorA = 0;
    EVALUASI_BAGIAN_A.forEach(q => {
      if (answers.bagianA[q.id] === q.kunci) {
        skorA += 3;
      }
    });

    // Bagian B: 5 soal, bobot 4 poin per soal (max 20)
    let skorB = 0;
    EVALUASI_BAGIAN_B.forEach(q => {
      const userAns = answers.bagianB[q.id] || [];
      const isExactMatch = 
        userAns.length === q.kunci.length && 
        userAns.every(v => q.kunci.includes(v));
      if (isExactMatch) {
        skorB += 4;
      } else {
        // partial credit if partially correct with no wrong selections
        const correctSelected = userAns.filter(v => q.kunci.includes(v)).length;
        const wrongSelected = userAns.filter(v => !q.kunci.includes(v)).length;
        if (wrongSelected === 0 && correctSelected > 0) {
          skorB += Math.round((correctSelected / q.kunci.length) * 4);
        }
      }
    });

    // Bagian C: 10 soal, bobot 2 poin per soal (max 20)
    let skorC = 0;
    EVALUASI_BAGIAN_C.forEach(q => {
      if (answers.bagianC[q.id] === q.kunci) {
        skorC += 2;
      }
    });

    // Bagian D: 5 soal, bobot 6 poin per soal (max 30) (tiap pasang benar bernilai 2 poin, 3 pasang x 2 = 6)
    let skorD = 0;
    EVALUASI_BAGIAN_D.forEach(q => {
      const userPairs = answers.bagianD[q.id] || {};
      q.items.forEach(item => {
        if (userPairs[item.id] === item.jawabanTepat) {
          skorD += 2;
        }
      });
    });

    const total = Math.min(100, Math.round(skorA + skorB + skorC + skorD));
    const timeSpent = TOTAL_TIME_SECONDS - timeLeft;

    let predikat = 'Perlu Bimbingan Khusus';
    let tindakLanjut = 'Disarankan untuk mempelajari kembali konsep dasar algoritma, diagram flowchart, dan logika pemrograman melalui pendampingan remedial guru.';

    if (total >= 85) {
      predikat = 'Sangat Baik (Mahir)';
      tindakLanjut = 'Peserta didik menguasai algoritma dan pemrograman lanjut dengan sangat baik. Siap melanjutkan ke pembuatan proyek aplikasi dan tantangan logika tingkat tinggi.';
    } else if (total >= 75) {
      predikat = 'Baik (Tuntas)';
      tindakLanjut = 'Peserta didik telah mencapai kriteria ketuntasan minimal (KKM 75). Pemahaman algoritma dan sintaks sudah baik, dapat diperkuat pada aspek debugging mendalam.';
    } else if (total >= 60) {
      predikat = 'Cukup (Perlu Penguatan)';
      tindakLanjut = 'Peserta didik memahami garis besar materi, namun perlu latihan tambahan pada perulangan bertingkat dan perhitungan algoritma machine learning.';
    }

    const evaluationResult: EvaluasiResult = {
      student: identity,
      skorBagianA: skorA,
      skorBagianB: skorB,
      skorBagianC: skorC,
      skorBagianD: skorD,
      totalSkor: total,
      waktuPengerjaanDetik: timeSpent,
      submittedAt: new Date().toLocaleString('id-ID'),
      predikat,
      tindakLanjut
    };

    setResult(evaluationResult);
    setTimerActive(false);
    setScreen('result');

    if (total >= 75) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handleSubmitExam = () => {
    if (window.confirm('Apakah Anda yakin ingin menyelesaikan dan mengumpulkan seluruh jawaban Evaluasi sekarang?')) {
      calculateResult();
    }
  };

  const handleAutoSubmit = () => {
    alert('Waktu 36 menit telah habis! Jawaban Anda akan dihitung secara otomatis.');
    calculateResult();
  };

  // Format timer minutes and seconds
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResetEvaluasi = () => {
    if (window.confirm('Ulangi Evaluasi dari pengisian identitas?')) {
      setScreen('identity');
      setAnswers({ bagianA: {}, bagianB: {}, bagianC: {}, bagianD: {} });
      setTimeLeft(TOTAL_TIME_SECONDS);
      setTimerActive(false);
      setResult(null);
    }
  };

  return (
    <div className="space-y-6 pb-16">
      {/* 1. SCREEN: IDENTITY FORM */}
      {screen === 'identity' && (
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl space-y-8">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              EVALUASI AKHIR BAB 2
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Mata Pelajaran Koding &amp; Kecerdasan Artifisial · SMA Negeri 1 Kersana
            </p>
          </div>

          {/* Rules / Breakdown Box */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 space-y-3 text-xs sm:text-sm">
            <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Petunjuk &amp; Struktur Penilaian Evaluasi:</span>
            </h4>
            <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
              <li>• <strong>Waktu Pengerjaan:</strong> 36 Menit (Timer otomatis menutup soal saat waktu habis).</li>
              <li>• <strong>Bagian A (10 Soal PG):</strong> Bobot 3 poin/soal = Maks 30 Poin.</li>
              <li>• <strong>Bagian B (5 Soal PG Kompleks):</strong> Bobot 4 poin/soal = Maks 20 Poin.</li>
              <li>• <strong>Bagian C (10 Soal Benar/Salah):</strong> Bobot 2 poin/soal = Maks 20 Poin.</li>
              <li>• <strong>Bagian D (5 Soal Menjodohkan):</strong> Bobot 6 poin/soal (3 pasang/soal) = Maks 30 Poin.</li>
              <li className="pt-1 text-emerald-700 dark:text-emerald-400 font-bold">
                Rumus: $3 \\times A + 4 \\times B + 2 \\times C + 6 \\times D = 100$ Skor Maksimum!
              </li>
            </ul>
          </div>

          {identityError && (
            <div className="p-3.5 rounded-xl bg-rose-50 text-rose-700 text-xs font-semibold flex items-center gap-2 border border-rose-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{identityError}</span>
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleStartExam} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Nama Lengkap Siswa:
              </label>
              <input
                type="text"
                placeholder="Contoh: Muhammad Rizky Pratama"
                value={identity.nama}
                onChange={(e) => setIdentity({ ...identity, nama: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Nomor Absen:
                </label>
                <input
                  type="number"
                  placeholder="Contoh: 18"
                  value={identity.noAbsen}
                  onChange={(e) => setIdentity({ ...identity, noAbsen: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Kelas (Fase E):
                </label>
                <select
                  value={identity.kelas}
                  onChange={(e) => setIdentity({ ...identity, kelas: e.target.value as 'X-3' | 'X-4' })}
                  className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                >
                  <option value="X-3">Kelas X-3</option>
                  <option value="X-4">Kelas X-4</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 text-white font-bold text-sm sm:text-base hover:bg-emerald-500 shadow-lg shadow-emerald-500/25 transition-all transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Mulai Pengerjaan Ujian (36 Menit)</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* 2. SCREEN: EXAM IN PROGRESS */}
      {screen === 'exam' && (
        <div className="space-y-6">
          {/* Top Fixed Sticky Status Bar for Identity & Timer */}
          <div className="sticky top-16 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-md flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-sm shrink-0">
                {identity.kelas}
              </div>
              <div>
                <span className="block text-sm font-bold text-slate-900 dark:text-white truncate max-w-xs">
                  {identity.nama}
                </span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">
                  No. Absen: {identity.noAbsen} · SMAN 1 Kersana
                </span>
              </div>
            </div>

            {/* Timer Badge and Current Tab Status */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <span>Tab Aktif: Bagian {examTab}</span>
              </div>

              <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border font-mono font-bold text-sm sm:text-base ${
                timeLeft < 300
                  ? 'bg-rose-50 border-rose-300 text-rose-600 animate-pulse'
                  : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white'
              }`}>
                <Timer className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>

          {/* Sub-Tab Navigation (Bagian A, B, C, D) */}
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl overflow-x-auto text-xs sm:text-sm font-semibold">
            <button
              onClick={() => setExamTab('A')}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                examTab === 'A'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Bagian A: Pilihan Ganda (10 Soal)
            </button>
            <button
              onClick={() => setExamTab('B')}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                examTab === 'B'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Bagian B: Pilihan Ganda Kompleks (5 Soal)
            </button>
            <button
              onClick={() => setExamTab('C')}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                examTab === 'C'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Bagian C: Benar / Salah (10 Soal)
            </button>
            <button
              onClick={() => setExamTab('D')}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                examTab === 'D'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Bagian D: Menjodohkan (5 Soal / 15 Item)
            </button>
          </div>

          {/* TAB CONTENT: BAGIAN A (10 SOAL PG) */}
          {examTab === 'A' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-xs sm:text-sm text-blue-900 dark:text-blue-200">
                <strong>Petunjuk Bagian A:</strong> Pilihlah satu jawaban yang paling tepat dari pilihan A, B, C, D, atau E. Setiap soal bernilai <strong>3 poin</strong> (Maksimal 30 Poin).
              </div>

              {EVALUASI_BAGIAN_A.map((q, idx) => (
                <div key={q.id} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Soal Bagian A #{idx + 1}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Materi {q.materiRef} · 3 Poin
                    </span>
                  </div>

                  <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
                    <MathView text={q.soal} />
                  </div>

                  <div className="space-y-2">
                    {q.pilihan.map((pilihan, pIdx) => {
                      const huruf = String.fromCharCode(65 + pIdx);
                      const isSelected = answers.bagianA[q.id] === pIdx;
                      return (
                        <button
                          key={pIdx}
                          onClick={() => handleAnswerA(q.id, pIdx)}
                          className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-3 transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold'
                              : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-emerald-400'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                            isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-400 text-slate-500'
                          }`}>
                            {huruf}
                          </span>
                          <span className="leading-relaxed">
                            <MathView text={pilihan} />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Navigation Footer for Tab A */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Selesai Bagian A? Lanjutkan ke Bagian B.
                </span>
                <button
                  onClick={() => {
                    setExamTab('B');
                    window.scrollTo({ top: 100, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs sm:text-sm hover:bg-purple-500 shadow-md transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Lanjut ke Bagian B (PG Kompleks)</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB CONTENT: BAGIAN B (5 SOAL PG KOMPLEKS) */}
          {examTab === 'B' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 text-xs sm:text-sm text-purple-900 dark:text-purple-200">
                <strong>Petunjuk Bagian B:</strong> Pilihlah <strong>2, 3, atau 4 jawaban yang benar</strong> dengan mencentang kotak pilihan. Setiap soal bernilai <strong>4 poin</strong> (Maksimal 20 Poin).
              </div>

              {EVALUASI_BAGIAN_B.map((q, idx) => {
                const selectedList = answers.bagianB[q.id] || [];
                return (
                  <div key={q.id} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                        Soal Bagian B #{idx + 1}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Materi {q.materiRef} · 4 Poin (Centang Pilihan Benar)
                      </span>
                    </div>

                    <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
                      <MathView text={q.soal} />
                    </div>

                    <div className="space-y-2">
                      {q.pilihan.map((pilihan, pIdx) => {
                        const isChecked = selectedList.includes(pIdx);
                        return (
                          <div
                            key={pIdx}
                            onClick={() => handleToggleB(q.id, pIdx)}
                            className={`p-3.5 rounded-xl border text-xs sm:text-sm flex items-start gap-3 transition-colors cursor-pointer ${
                              isChecked
                                ? 'bg-purple-50 dark:bg-purple-950/50 border-purple-500 text-purple-900 dark:text-purple-200 font-semibold'
                                : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-purple-400'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}}
                              className="mt-0.5 rounded text-purple-600 focus:ring-purple-500 cursor-pointer"
                            />
                            <span className="leading-relaxed">
                              <MathView text={pilihan} />
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {/* Navigation Footer for Tab B */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4">
                <button
                  onClick={() => {
                    setExamTab('A');
                    window.scrollTo({ top: 100, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>&larr;</span>
                  <span>Kembali ke Bagian A</span>
                </button>
                <button
                  onClick={() => {
                    setExamTab('C');
                    window.scrollTo({ top: 100, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-amber-600 text-white font-bold text-xs sm:text-sm hover:bg-amber-500 shadow-md transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Lanjut ke Bagian C (Benar/Salah)</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB CONTENT: BAGIAN C (10 SOAL BENAR / SALAH) */}
          {examTab === 'C' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
                <strong>Petunjuk Bagian C:</strong> Tentukan apakah setiap pernyataan bernilai <strong>BENAR</strong> atau <strong>SALAH</strong>. Setiap pernyataan bernilai <strong>2 poin</strong> (Maksimal 20 Poin).
              </div>

              {EVALUASI_BAGIAN_C.map((q, idx) => {
                const userChoice = answers.bagianC[q.id];
                return (
                  <div key={q.id} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                        Pernyataan Bagian C #{idx + 1}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Materi {q.materiRef} · 2 Poin
                      </span>
                    </div>

                    <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
                      <MathView text={q.pernyataan} />
                    </div>

                    <div className="flex items-center gap-4 pt-1">
                      <button
                        onClick={() => handleAnswerC(q.id, true)}
                        className={`flex-1 py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                          userChoice === true
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                            : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-emerald-500'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>BENAR</span>
                      </button>

                      <button
                        onClick={() => handleAnswerC(q.id, false)}
                        className={`flex-1 py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                          userChoice === false
                            ? 'bg-rose-600 text-white border-rose-600 shadow-md'
                            : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-rose-500'
                        }`}
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>SALAH</span>
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Navigation Footer for Tab C */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4">
                <button
                  onClick={() => {
                    setExamTab('B');
                    window.scrollTo({ top: 100, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>&larr;</span>
                  <span>Kembali ke Bagian B</span>
                </button>
                <button
                  onClick={() => {
                    setExamTab('D');
                    window.scrollTo({ top: 100, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-teal-600 text-white font-bold text-xs sm:text-sm hover:bg-teal-500 shadow-md transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Lanjut ke Bagian D (Menjodohkan)</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB CONTENT: BAGIAN D (5 SOAL MENJODOHKAN) */}
          {examTab === 'D' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900 text-xs sm:text-sm text-teal-900 dark:text-teal-200">
                <strong>Petunjuk Bagian D:</strong> Jodohkan setiap pernyataan di kolom sebelah kiri dengan pilihan jawaban yang tepat pada dropdown di sebelah kanan. Terdapat 5 soal (masing-masing 3 pernyataan = total 15 pernyataan). Setiap soal bernilai <strong>6 poin</strong> (Maksimal 30 Poin).
              </div>

              {EVALUASI_BAGIAN_D.map((soalD, idx) => {
                const userPairs = answers.bagianD[soalD.id] || {};
                return (
                  <div key={soalD.id} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300">
                        Soal Menjodohkan #{idx + 1}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Materi {soalD.materiRef} · 6 Poin (3 Pasangan)
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {soalD.judul}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {soalD.instruksi}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      {soalD.items.map((item, itemIdx) => (
                        <div key={item.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-3">
                          <div className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 md:max-w-md">
                            <span className="font-bold text-teal-600 mr-2">[{itemIdx + 1}]</span>
                            <MathView text={item.premis} />
                          </div>

                          <div className="shrink-0 w-full md:w-72">
                            <select
                              value={userPairs[item.id] || ''}
                              onChange={(e) => handleAnswerD(soalD.id, item.id, e.target.value)}
                              className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 font-medium focus:outline-none focus:ring-1 focus:ring-teal-500 cursor-pointer"
                            >
                              <option value="">-- Pilih Pasangan Jawaban --</option>
                              {soalD.pilihanJawaban.map((opsi, oIdx) => (
                                <option key={oIdx} value={opsi}>
                                  {opsi}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Bottom Submit Confirmation Bar - HANYA DI TAB BAGIAN D */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent dark:from-emerald-950/40 dark:via-slate-900 border-2 border-emerald-500/40 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setExamTab('C');
                        window.scrollTo({ top: 100, behavior: 'smooth' });
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:bg-slate-300 transition-colors cursor-pointer"
                    >
                      &larr; Kembali ke Bagian C
                    </button>
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      Bagian Akhir (Bagian D)
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Sudah yakin dengan seluruh jawaban Anda dari Bagian A s.d. D?
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Nilai dan rapor digital akan langsung dihitung setelah Anda menekan tombol kumpulkan di bawah ini.
                  </p>
                </div>
                <button
                  onClick={handleSubmitExam}
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 shadow-xl shadow-emerald-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 hover:scale-105 active:scale-95"
                >
                  <span>Kumpulkan Ujian Sekarang</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. SCREEN: RESULT & REPORT CARD */}
      {screen === 'result' && result && (
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Printable Report Card Container */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-8">
            
            {/* School & Subject Header */}
            <div className="text-center border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                <School className="w-4 h-4" />
                <span>SMA NEGERI 1 KERSANA · JAWA TENGAH</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                RAPOR EVALUASI AKHIR BAB 2
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Mata Pelajaran: Koding dan Kecerdasan Artifisial (Fase E Kelas X)
              </p>
              <p className="text-xs text-slate-400">
                Guru Pengampu: M. FAISAL ABDUH, M.Pd. (NIP 199104032020121014)
              </p>
            </div>

            {/* Student Info Table */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 text-xs sm:text-sm">
              <div>
                <span className="block text-slate-400 text-[11px]">Nama Siswa:</span>
                <strong className="text-slate-900 dark:text-white text-base">{result.student.nama}</strong>
              </div>
              <div>
                <span className="block text-slate-400 text-[11px]">Nomor Absen &amp; Kelas:</span>
                <strong className="text-slate-900 dark:text-white text-base">Absen {result.student.noAbsen} / {result.student.kelas}</strong>
              </div>
              <div>
                <span className="block text-slate-400 text-[11px]">Waktu Pengumpulan:</span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">{result.submittedAt}</span>
              </div>
            </div>

            {/* Score Summary Box */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
                <span className="block text-[11px] text-blue-700 dark:text-blue-300 font-semibold">Bagian A (PG)</span>
                <span className="text-2xl font-extrabold text-blue-800 dark:text-blue-200 tabular-nums">
                  {result.skorBagianA}
                </span>
                <span className="block text-[10px] text-blue-500">Maks 30</span>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900">
                <span className="block text-[11px] text-purple-700 dark:text-purple-300 font-semibold">Bagian B (Kompleks)</span>
                <span className="text-2xl font-extrabold text-purple-800 dark:text-purple-200 tabular-nums">
                  {result.skorBagianB}
                </span>
                <span className="block text-[10px] text-purple-500">Maks 20</span>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900">
                <span className="block text-[11px] text-amber-700 dark:text-amber-300 font-semibold">Bagian C (B/S)</span>
                <span className="text-2xl font-extrabold text-amber-800 dark:text-amber-200 tabular-nums">
                  {result.skorBagianC}
                </span>
                <span className="block text-[10px] text-amber-500">Maks 20</span>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900">
                <span className="block text-[11px] text-teal-700 dark:text-teal-300 font-semibold">Bagian D (Jodoh)</span>
                <span className="text-2xl font-extrabold text-teal-800 dark:text-teal-200 tabular-nums">
                  {result.skorBagianD}
                </span>
                <span className="block text-[10px] text-teal-500">Maks 30</span>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-600 text-white shadow-lg">
                <span className="block text-[11px] text-emerald-100 font-bold uppercase">Total Skor</span>
                <span className="text-3xl font-black tabular-nums">
                  {result.totalSkor}
                </span>
                <span className="block text-[10px] text-emerald-200">Skala 100</span>
              </div>
            </div>

            {/* Predikat & Tindak Lanjut Guru */}
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                <Award className="w-5 h-5 text-emerald-600" />
                <span>Kategori Capaian: {result.predikat}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong>Catatan Guru:</strong> {result.tindakLanjut}
              </p>
            </div>

            {/* Actions: Print and Retake */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer shadow"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak / Simpan Rapor (PDF)</span>
              </button>

              <button
                onClick={handleResetEvaluasi}
                className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulangi Evaluasi</span>
              </button>
            </div>

            {/* Comprehensive Answer Review Section */}
            <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                <span>Review Kunci Jawaban &amp; Pembahasan Soal</span>
              </h3>

              {/* Review Bagian A */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Review Bagian A (Pilihan Ganda 1-10)
                </h4>
                {EVALUASI_BAGIAN_A.map((q, idx) => {
                  const userAns = answers.bagianA[q.id];
                  const isCorrect = userAns === q.kunci;
                  return (
                    <div key={q.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 text-xs sm:text-sm space-y-2">
                      <div className="flex items-center justify-between font-bold">
                        <span>#{idx + 1}. <MathView text={q.soal} /></span>
                        <span className={`px-2 py-0.5 rounded text-xs ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                          {isCorrect ? 'Benar (+3)' : 'Salah (+0)'}
                        </span>
                      </div>
                      <div className="text-slate-500">
                        Jawaban Anda: {userAns !== undefined ? String.fromCharCode(65 + userAns) : 'Kosong'} · Kunci: {String.fromCharCode(65 + q.kunci)}
                      </div>
                      <div className="text-slate-600 dark:text-slate-300 pt-1 border-t border-slate-200 dark:border-slate-700">
                        <strong>Pembahasan:</strong> <MathView text={q.pembahasan} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Review Bagian C */}
              <div className="space-y-4 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Review Bagian C (Benar / Salah 1-10)
                </h4>
                {EVALUASI_BAGIAN_C.map((q, idx) => {
                  const userAns = answers.bagianC[q.id];
                  const isCorrect = userAns === q.kunci;
                  return (
                    <div key={q.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 text-xs sm:text-sm space-y-2">
                      <div className="flex items-center justify-between font-bold">
                        <span>#{idx + 1}. <MathView text={q.pernyataan} /></span>
                        <span className={`px-2 py-0.5 rounded text-xs ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                          {isCorrect ? 'Benar (+2)' : 'Salah (+0)'}
                        </span>
                      </div>
                      <div className="text-slate-500">
                        Jawaban Anda: {userAns !== undefined ? (userAns ? 'BENAR' : 'SALAH') : 'Kosong'} · Kunci: {q.kunci ? 'BENAR' : 'SALAH'}
                      </div>
                      <div className="text-slate-600 dark:text-slate-300 pt-1 border-t border-slate-200 dark:border-slate-700">
                        <strong>Pembahasan:</strong> <MathView text={q.pembahasan} />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
};
