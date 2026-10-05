export type NavTab = 'home' | 'materi' | 'kuis' | 'game' | 'evaluasi' | 'profil';

export type SubMateriId = '2.1' | '2.2' | '2.3' | '2.4' | '2.5' | '2.6';

export interface MateriItem {
  id: SubMateriId;
  code: string;
  title: string;
  subtitle: string;
  tujuan: string;
  indikator: string[];
  materiContent: {
    ringkasan: string;
    subSections: {
      title: string;
      content: string;
      codeSnippet?: string;
      codeLanguage?: string;
      tableData?: {
        headers: string[];
        rows: string[][];
      };
      notes?: string;
    }[];
  };
  latihanSoal: {
    id: number;
    soal: string;
    pilihan: string[];
    kunci: number; // 0-based
    pembahasan: string;
  }[];
}

export interface KuisSoal {
  id: number;
  indikatorKode: string; // 'a' - 'o'
  indikatorNama: string;
  soal: string;
  pilihan: string[];
  kunci: number; // 0-based
  pembahasan: string;
}

// Evaluasi Types
export interface SoalBagianA {
  id: number;
  materiRef: SubMateriId;
  soal: string;
  pilihan: string[]; // 5 options: A, B, C, D, E
  kunci: number; // 0-based (0=A, 1=B, 2=C, 3=D, 4=E)
  pembahasan: string;
}

export interface SoalBagianB {
  id: number;
  materiRef: SubMateriId;
  soal: string;
  pilihan: string[]; // 4 or 5 options
  kunci: number[]; // Array of correct indices, e.g. [0, 2] or [1, 2, 3] (2, 3, or 4 answers)
  pembahasan: string;
}

export interface SoalBagianC {
  id: number;
  materiRef: SubMateriId;
  pernyataan: string;
  kunci: boolean; // true = BENAR, false = SALAH
  pembahasan: string;
}

export interface MatchingPair {
  id: string;
  premis: string; // Pernyataan kiri
  jawabanTepat: string; // Target jodoh yang benar
}

export interface SoalBagianD {
  id: number;
  materiRef: SubMateriId;
  judul: string;
  instruksi: string;
  items: MatchingPair[]; // 3 pasang pernyataan
  pilihanJawaban: string[]; // Bank opsi jawaban
  pembahasan: string;
}

export interface EvaluasiStudentIdentity {
  nama: string;
  noAbsen: string;
  kelas: 'X-3' | 'X-4';
}

export interface EvaluasiAnswers {
  bagianA: Record<number, number>; // soalId -> pilihanIndex
  bagianB: Record<number, number[]>; // soalId -> array pilihanIndex
  bagianC: Record<number, boolean>; // soalId -> true/false
  bagianD: Record<number, Record<string, string>>; // soalId -> { itemId: pilihanJawaban }
}

export interface EvaluasiResult {
  student: EvaluasiStudentIdentity;
  skorBagianA: number; // Max 30 (10 soal x 3)
  skorBagianB: number; // Max 20 (5 soal x 4)
  skorBagianC: number; // Max 20 (10 soal x 2)
  skorBagianD: number; // Max 30 (5 soal x 6)
  totalSkor: number; // Max 100
  waktuPengerjaanDetik: number;
  submittedAt: string;
  predikat: string;
  tindakLanjut: string;
}
