import React, { useState } from 'react';
import { MathView } from './MathView';
import { 
  Trophy, 
  RotateCcw, 
  Flag, 
  Car, 
  Zap, 
  Play, 
  Check, 
  X, 
  Sparkles,
  Edit2,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuestionItem {
  id: number;
  question: string;
  options: string[];
  correct: number;
  topic: string;
}

const GAME_QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    question: 'Simbol flowchart manakah yang digunakan untuk menguji kondisi percabangan?',
    options: ['Persegi Panjang', 'Belah Ketupat', 'Jajar Genjang', 'Oval'],
    correct: 1,
    topic: 'Materi 2.2 Flowchart'
  },
  {
    id: 2,
    question: 'Berapakah indeks elemen pertama pada struktur data Array di Python/C?',
    options: ['Indeks 1', 'Indeks 0', 'Indeks -1', 'Indeks sembarang'],
    correct: 1,
    topic: 'Materi 2.3 Array'
  },
  {
    id: 3,
    question: 'Algoritma pencarian manakah yang mensyaratkan data harus sudah terurut terlebih dahulu?',
    options: ['Sequential Search', 'Binary Search', 'Linear Search', 'Random Search'],
    correct: 1,
    topic: 'Materi 2.3 Searching'
  },
  {
    id: 4,
    question: 'Di Python, fungsi standar apa yang digunakan untuk menerima masukan teks dari pengguna?',
    options: ['scanf()', 'input()', 'cin >>', 'readln()'],
    correct: 1,
    topic: 'Materi 2.5 Python'
  },
  {
    id: 5,
    question: 'Kesalahan kode di mana program berjalan normal tanpa error tetapi output salah disebut...',
    options: ['Syntax Error', 'Runtime Error', 'Logic Error', 'Compile Error'],
    correct: 2,
    topic: 'Materi 2.6 Debugging'
  },
  {
    id: 6,
    question: 'Simpul paling awal tempat memulai klasifikasi pada Decision Tree disebut...',
    options: ['Leaf Node', 'Branch Node', 'Root Node', 'Decision Node'],
    correct: 2,
    topic: 'Materi 2.3 Machine Learning'
  },
  {
    id: 7,
    question: 'Perangkat lunak yang bertugas menerjemahkan source code menjadi bahasa mesin biner adalah...',
    options: ['Browser', 'Compiler', 'Operating System', 'Spreadsheet'],
    correct: 1,
    topic: 'Materi 2.4 Pemrograman Teks'
  },
  {
    id: 8,
    question: 'Di bahasa C, setiap baris pernyataan instruksi wajib diakhiri dengan simbol...',
    options: ['Titik dua (:)', 'Titik koma (;)', 'Tanda seru (!)', 'Koma (,)'],
    correct: 1,
    topic: 'Materi 2.5 Bahasa C'
  },
  {
    id: 9,
    question: 'K-Means clustering mengelompokkan data berdasarkan jarak terdekat terhadap titik...',
    options: ['Origin (0,0)', 'Sentroid', 'Piksel', 'Pointer'],
    correct: 1,
    topic: 'Materi 2.3 K-Means'
  },
  {
    id: 10,
    question: 'Membagi sebuah bilangan dengan angka nol saat program dijalankan memicu kesalahan tipe...',
    options: ['Syntax Error', 'Logic Error', 'Runtime Error', 'Compilation Error'],
    correct: 2,
    topic: 'Materi 2.6 Runtime Error'
  }
];

export const GameView: React.FC = () => {
  const [team1Name, setTeam1Name] = useState('Kelompok Algoritma');
  const [team2Name, setTeam2Name] = useState('Kelompok Artificial Intelligence');
  const [isEditingNames, setIsEditingNames] = useState(false);

  const [gameState, setGameState] = useState<'lobby' | 'playing' | 'finished'>('lobby');

  // Independent question progression for each team!
  const [team1QIndex, setTeam1QIndex] = useState(0);
  const [team2QIndex, setTeam2QIndex] = useState(0);

  // Positions on race track: 0 to 100 meters
  const [team1Pos, setTeam1Pos] = useState(0);
  const [team2Pos, setTeam2Pos] = useState(0);

  // Feedback states
  const [team1Feedback, setTeam1Feedback] = useState<'correct' | 'wrong' | null>(null);
  const [team2Feedback, setTeam2Feedback] = useState<'correct' | 'wrong' | null>(null);

  const [winner, setWinner] = useState<string | null>(null);

  const startGame = () => {
    setTeam1Pos(0);
    setTeam2Pos(0);
    setTeam1QIndex(0);
    setTeam2QIndex(0);
    setTeam1Feedback(null);
    setTeam2Feedback(null);
    setWinner(null);
    setGameState('playing');
  };

  const handleTeam1Answer = (optionIdx: number) => {
    if (gameState !== 'playing' || team1Feedback !== null) return;

    const currentQ = GAME_QUESTIONS[team1QIndex];
    if (optionIdx === currentQ.correct) {
      setTeam1Feedback('correct');
      const newPos = Math.min(100, team1Pos + 20);
      setTeam1Pos(newPos);

      setTimeout(() => {
        setTeam1Feedback(null);
        if (newPos >= 100 || team1QIndex + 1 >= GAME_QUESTIONS.length) {
          endGame(team1Name);
        } else {
          setTeam1QIndex(prev => prev + 1);
        }
      }, 700);
    } else {
      setTeam1Feedback('wrong');
      setTeam1Pos(Math.max(0, team1Pos - 5));
      setTimeout(() => {
        setTeam1Feedback(null);
      }, 800);
    }
  };

  const handleTeam2Answer = (optionIdx: number) => {
    if (gameState !== 'playing' || team2Feedback !== null) return;

    const currentQ = GAME_QUESTIONS[team2QIndex];
    if (optionIdx === currentQ.correct) {
      setTeam2Feedback('correct');
      const newPos = Math.min(100, team2Pos + 20);
      setTeam2Pos(newPos);

      setTimeout(() => {
        setTeam2Feedback(null);
        if (newPos >= 100 || team2QIndex + 1 >= GAME_QUESTIONS.length) {
          endGame(team2Name);
        } else {
          setTeam2QIndex(prev => prev + 1);
        }
      }, 700);
    } else {
      setTeam2Feedback('wrong');
      setTeam2Pos(Math.max(0, team2Pos - 5));
      setTimeout(() => {
        setTeam2Feedback(null);
      }, 800);
    }
  };

  const endGame = (winningTeam: string) => {
    setGameState('finished');
    setWinner(winningTeam);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const currentQ1 = GAME_QUESTIONS[team1QIndex];
  const currentQ2 = GAME_QUESTIONS[team2QIndex];

  return (
    <div className="space-y-6 pb-16">
      {/* Top Header Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
              <Zap className="w-4 h-4" />
              <span>GAME EDUKASI BALAPAN MANDIRI DUA KELOMPOK</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Cerdas Cermat Balap Algoritma
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Layar terbagi dua. Soal berjalan sendiri secara mandiri di masing-masing tim tanpa perlu saling menunggu. Siapa yang mencapai garis finish (100m) duluan adalah juaranya!
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditingNames(!isEditingNames)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Edit2 className="w-3.5 h-3.5" />
              <span>{isEditingNames ? 'Simpan Nama' : 'Ubah Nama Tim'}</span>
            </button>
            <button
              onClick={startGame}
              className="px-4 py-2 text-xs sm:text-sm font-bold rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <Play className="w-4 h-4" />
              <span>{gameState === 'playing' ? 'Mulai Ulang' : 'Mulai Balapan'}</span>
            </button>
          </div>
        </div>

        {/* Custom Team Names Modal/Panel */}
        {isEditingNames && (
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">
                Nama Kelompok 1 (Sisi Kiri / Biru):
              </label>
              <input
                type="text"
                value={team1Name}
                onChange={(e) => setTeam1Name(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-1">
                Nama Kelompok 2 (Sisi Kanan / Hijau):
              </label>
              <input
                type="text"
                value={team2Name}
                onChange={(e) => setTeam2Name(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* Race Track Arena (Shared live view) */}
      <section className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl text-white relative overflow-hidden">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4">
          <span>START LINE [0m]</span>
          <span className="font-bold text-amber-400 flex items-center gap-1">
            <Flag className="w-4 h-4 text-rose-500" />
            <span>FINISH LINE [100m]</span>
          </span>
        </div>

        {/* Track Lane 1 (Team 1) */}
        <div className="space-y-1 mb-6">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-blue-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              {team1Name}
            </span>
            <span className="font-mono text-slate-400">{team1Pos}m / 100m (Soal {team1QIndex + 1}/{GAME_QUESTIONS.length})</span>
          </div>
          <div className="h-10 bg-slate-900 rounded-xl relative border border-slate-800 flex items-center px-2 overflow-hidden">
            <div className="absolute inset-0 border-b border-dashed border-slate-700 pointer-events-none" />
            <div
              className="absolute transition-all duration-300 ease-out flex items-center gap-2"
              style={{ left: `${Math.min(88, Math.max(2, team1Pos * 0.88))}%` }}
            >
              <div className="p-1.5 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/50">
                <Car className="w-5 h-5 animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Track Lane 2 (Team 2) */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              {team2Name}
            </span>
            <span className="font-mono text-slate-400">{team2Pos}m / 100m (Soal {team2QIndex + 1}/{GAME_QUESTIONS.length})</span>
          </div>
          <div className="h-10 bg-slate-900 rounded-xl relative border border-slate-800 flex items-center px-2 overflow-hidden">
            <div className="absolute inset-0 border-b border-dashed border-slate-700 pointer-events-none" />
            <div
              className="absolute transition-all duration-300 ease-out flex items-center gap-2"
              style={{ left: `${Math.min(88, Math.max(2, team2Pos * 0.88))}%` }}
            >
              <div className="p-1.5 rounded-lg bg-emerald-600 text-white shadow-lg shadow-emerald-500/50">
                <Car className="w-5 h-5 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DUAL SPLIT SCREEN INDEPENDENT PLAYING ZONE */}
      {gameState === 'playing' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* SISI KELOMPOK 1 (TIM A) - SOAL BERJALAN SENDIRI */}
          <div className="bg-white dark:bg-slate-900 border-2 border-blue-500/40 rounded-2xl p-6 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {team1Feedback === 'correct' && (
              <div className="absolute inset-0 bg-emerald-500/20 backdrop-blur-xs flex items-center justify-center z-10 animate-in fade-in duration-150">
                <div className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-lg flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Benar! Meluncur +20m!</span>
                </div>
              </div>
            )}
            {team1Feedback === 'wrong' && (
              <div className="absolute inset-0 bg-rose-500/20 backdrop-blur-xs flex items-center justify-center z-10 animate-in fade-in duration-150">
                <div className="px-4 py-2 rounded-xl bg-rose-600 text-white font-bold text-sm shadow-lg flex items-center gap-2">
                  <X className="w-5 h-5" />
                  <span>Kurang tepat! Mundur -5m</span>
                </div>
              </div>
            )}

            <div>
              {/* Team 1 Header */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    A
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {team1Name}
                    </h3>
                    <span className="text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                      Soal {team1QIndex + 1} dari {GAME_QUESTIONS.length}
                    </span>
                  </div>
                </div>
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400 text-lg">
                  {team1Pos}m
                </span>
              </div>

              {/* Question 1 Body */}
              <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 mb-4 min-h-[90px] flex items-center">
                <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                  <MathView text={currentQ1.question} />
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ1.options.map((option, idx) => (
                  <button
                    key={idx}
                    disabled={team1Feedback !== null}
                    onClick={() => handleTeam1Answer(idx)}
                    className="w-full text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:bg-blue-50 hover:border-blue-500 dark:hover:bg-blue-950/40 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 flex items-center gap-3 transition-colors cursor-pointer"
                  >
                    <span className="w-6 h-6 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold flex items-center justify-center text-xs shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="grow">
                      <MathView text={option} />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>{currentQ1.topic}</span>
              <span>Laju mandiri</span>
            </div>
          </div>

          {/* SISI KELOMPOK 2 (TIM B) - SOAL BERJALAN SENDIRI */}
          <div className="bg-white dark:bg-slate-900 border-2 border-emerald-500/40 rounded-2xl p-6 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {team2Feedback === 'correct' && (
              <div className="absolute inset-0 bg-emerald-500/20 backdrop-blur-xs flex items-center justify-center z-10 animate-in fade-in duration-150">
                <div className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-lg flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Benar! Meluncur +20m!</span>
                </div>
              </div>
            )}
            {team2Feedback === 'wrong' && (
              <div className="absolute inset-0 bg-rose-500/20 backdrop-blur-xs flex items-center justify-center z-10 animate-in fade-in duration-150">
                <div className="px-4 py-2 rounded-xl bg-rose-600 text-white font-bold text-sm shadow-lg flex items-center gap-2">
                  <X className="w-5 h-5" />
                  <span>Kurang tepat! Mundur -5m</span>
                </div>
              </div>
            )}

            <div>
              {/* Team 2 Header */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                    B
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {team2Name}
                    </h3>
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                      Soal {team2QIndex + 1} dari {GAME_QUESTIONS.length}
                    </span>
                  </div>
                </div>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-lg">
                  {team2Pos}m
                </span>
              </div>

              {/* Question 2 Body */}
              <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 mb-4 min-h-[90px] flex items-center">
                <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                  <MathView text={currentQ2.question} />
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ2.options.map((option, idx) => (
                  <button
                    key={idx}
                    disabled={team2Feedback !== null}
                    onClick={() => handleTeam2Answer(idx)}
                    className="w-full text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:bg-emerald-50 hover:border-emerald-500 dark:hover:bg-emerald-950/40 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 flex items-center gap-3 transition-colors cursor-pointer"
                  >
                    <span className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center text-xs shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="grow">
                      <MathView text={option} />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>{currentQ2.topic}</span>
              <span>Laju mandiri</span>
            </div>
          </div>

        </div>
      )}

      {/* Lobby Screen */}
      {gameState === 'lobby' && (
        <div className="text-center py-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 max-w-xl mx-auto shadow-sm space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Siap Memulai Balapan Mandiri?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Kedua kelompok akan menjawab soal secara mandiri tanpa harus saling menunggu giliran. Siapa yang paling cepat dan tepat menyelesaikan tantangan 100m keluar sebagai juara!
          </p>
          <button
            onClick={startGame}
            className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            Mulai Permainan Sekarang
          </button>
        </div>
      )}

      {/* Victory Screen */}
      {gameState === 'finished' && (
        <div className="text-center py-10 bg-white dark:bg-slate-900 border-2 border-emerald-500 rounded-2xl p-8 max-w-xl mx-auto shadow-2xl space-y-5 animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-500 flex items-center justify-center mx-auto shadow-lg animate-bounce">
            <Trophy className="w-10 h-10" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Juara Balapan Kuis Mandiri
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Selamat Kepada {winner}!
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Kecepatan dan ketepatan luar biasa dalam menuntaskan materi Bab 2 Algoritma dan Pemrograman Lanjut!
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={startGame}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-500 transition-colors shadow-md flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Main Lagi</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
