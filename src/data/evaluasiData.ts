import { SoalBagianA, SoalBagianB, SoalBagianC, SoalBagianD } from '../types';

export const EVALUASI_BAGIAN_A: SoalBagianA[] = [
  // Soal 1 (Materi 2.1)
  {
    id: 1,
    materiRef: '2.1',
    soal: 'Di bawah ini yang TIDAK termasuk karakteristik mendasar dari sebuah algoritma adalah...',
    pilihan: [
      'Memiliki output yang relevan',
      'Setiap langkah jelas dan tidak ambigu (definiteness)',
      'Memiliki jumlah langkah yang tidak terbatas (infinite steps tanpa henti)',
      'Dapat dieksekusi secara efektif',
      'Langkah disusun secara logis dan terstruktur'
    ],
    kunci: 2,
    pembahasan: 'Berdasarkan buku siswa halaman 32 soal Formatif Awal No. 2: Ciri algoritma adalah langkahnya harus terbatas (finiteness) dan harus berhenti setelah sejumlah langkah terhingga. "Langkah yang tidak terbatas" bukan karakteristik algoritma.'
  },
  // Soal 2 (Materi 2.1)
  {
    id: 2,
    materiRef: '2.1',
    soal: 'Penyajian algoritma dengan memetakan secara terpisah data yang dimasukkan, proses perhitungan/transformasi data, dan hasil yang disajikan kepada pengguna disebut bentuk...',
    pilihan: [
      'Flowchart',
      'Uraian Naratif',
      'Tabel Input-Proses-Output (IPO)',
      'Pseudocode',
      'Source Code Mesin'
    ],
    kunci: 2,
    pembahasan: 'Buku siswa halaman 34 & 36: Format Input-Proses-Output (IPO) membagi tahapan algoritma menjadi tiga bagian tegas: Input (data masukan), Proses (operasi atau rumus), dan Output (tampilan hasil).'
  },
  // Soal 3 (Materi 2.2)
  {
    id: 3,
    materiRef: '2.2',
    soal: 'Perhatikan bagan flowchart berikut:\nSimbol belah ketupat bertuliskan "Nilai >= 70?". Terdapat jalur "Ya" menuju kotak Output "Lulus", dan jalur "Tidak" menuju kotak Output "Tidak Lulus". Jika nilai yang dimasukkan adalah 85, maka output yang dihasilkan adalah...',
    pilihan: [
      'Error',
      'Tidak Lulus',
      'Lulus',
      'Gagal',
      'Tidak menghasilkan output'
    ],
    kunci: 2,
    pembahasan: 'Buku siswa halaman 95 Uji Kompetensi Bagian A No. 1: Nilai 85 diuji pada $85 \\ge 70$. Hasil pengujian bernilai Benar (Ya), maka alur mengarah ke Output "Lulus".'
  },
  // Soal 4 (Materi 2.2)
  {
    id: 4,
    materiRef: '2.2',
    soal: 'Simbol persegi panjang (rectangle) dalam diagram alir (flowchart) berfungsi untuk...',
    pilihan: [
      'Menandakan dimulainya program',
      'Menerima input atau menampilkan output',
      'Melakukan operasi proses atau kalkulasi perhitungan',
      'Pengecekan kondisi percabangan (decision)',
      'Menandakan program mengalami kesalahan fatal'
    ],
    kunci: 2,
    pembahasan: 'Buku siswa halaman 96 Uji Kompetensi Bagian A No. 2: Simbol persegi panjang digunakan untuk menyatakan "Proses", yaitu langkah pemrosesan aritmatika atau manipulasi data.'
  },
  // Soal 5 (Materi 2.3)
  {
    id: 5,
    materiRef: '2.3',
    soal: 'Diberikan array satu dimensi: $A = [10, 2, 30, 4]$. Jika dilakukan operasi $\\text{Jumlah} = A[1] + A[3]$, berapakah nilai variabel $\\text{Jumlah}$ tersebut?',
    pilihan: [
      '12',
      '14',
      '6',
      '32',
      '40'
    ],
    kunci: 2,
    pembahasan: 'Buku siswa halaman 46: Indeks array dimulai dari 0. Maka $A[0]=10$, $A[1]=2$, $A[2]=30$, $A[3]=4$. Operasi $A[1] + A[3] = 2 + 4 = 6$.'
  },
  // Soal 6 (Materi 2.3)
  {
    id: 6,
    materiRef: '2.3',
    soal: 'Pada perbandingan algoritma pencarian, syarat MUTLAK yang harus dipenuhi agar algoritma Binary Search dapat dijalankan adalah...',
    pilihan: [
      'Data harus bertipe string',
      'Data harus sudah dalam keadaan terurut (sorted)',
      'Data harus berjumlah ganjil',
      'Data tidak boleh disimpan dalam array',
      'Program harus ditulis dalam bahasa C'
    ],
    kunci: 1,
    pembahasan: 'Buku siswa halaman 51 & 53: Binary Search bekerja dengan membagi dua data dan memeriksa elemen tengah. Algoritma ini hanya bekerja jika seluruh data sudah diurutkan terlebih dahulu.'
  },
  // Soal 7 (Materi 2.3)
  {
    id: 7,
    materiRef: '2.3',
    soal: 'Dalam pohon keputusan (Decision Tree) pada pembelajaran mesin (machine learning), simpul yang menyatakan hasil akhir atau kesimpulan keputusan disebut...',
    pilihan: [
      'Root Node',
      'Decision Node',
      'Leaf Node',
      'Branch Node',
      'Parent Node'
    ],
    kunci: 2,
    pembahasan: 'Buku siswa halaman 59: Root Node adalah simpul pertanyaan pertama, Decision Node adalah pertanyaan lanjutan, dan Leaf Node adalah hasil akhir dari proses penentuan keputusan.'
  },
  // Soal 8 (Materi 2.4)
  {
    id: 8,
    materiRef: '2.4',
    soal: 'Urutan 4 tahapan siklus kerja dalam pemrograman tekstual yang benar dari kode awal hingga tampilan hasil adalah...',
    pilihan: [
      'Output -> Execute -> Compiler -> Source Code',
      'Source Code -> Compiler -> Execute -> Output',
      'Compiler -> Source Code -> Output -> Execute',
      'Execute -> Source Code -> Compiler -> Output',
      'Source Code -> Execute -> Compiler -> Output'
    ],
    kunci: 1,
    pembahasan: 'Buku siswa halaman 72: Tahap pemrograman tekstual: (a) Source Code (menulis kode), (b) Compiler (menerjemahkan ke kode mesin), (c) Execute (menjalankan program), (d) Output (menampilkan hasil).'
  },
  // Soal 9 (Materi 2.5)
  {
    id: 9,
    materiRef: '2.5',
    soal: 'Contoh penulisan struktur kondisi IF yang BENAR menurut aturan sintaks bahasa pemrograman Python adalah...',
    pilihan: [
      'if x > 10 then:',
      'if (x > 10)',
      'if x > 10 {',
      'if x > 10:',
      'if x < 10;'
    ],
    kunci: 3,
    pembahasan: 'Buku siswa halaman 96 Uji Kompetensi Bagian A No. 4: Sintaks penulisan IF di Python diakhiri dengan tanda titik dua (:), contohnya `if x > 10:`.'
  },
  // Soal 10 (Materi 2.6)
  {
    id: 10,
    materiRef: '2.6',
    soal: 'Program berjalan tanpa pesan eror dari compiler/interpreter, namun hasil hitungan yang ditampilkan tidak sesuai rumus yang diharapkan. Jenis kesalahan kode ini disebut...',
    pilihan: [
      'Syntax Error',
      'Logic Error',
      'Runtime Error',
      'Fatal System Crash',
      'Hardware Error'
    ],
    kunci: 1,
    pembahasan: 'Buku siswa halaman 90: Kesalahan logika (logic error) terjadi ketika kode berhasil dieksekusi tanpa eror tata bahasa, tetapi alur perhitungannya keliru sehingga menghasilkan output yang salah.'
  }
];

export const EVALUASI_BAGIAN_B: SoalBagianB[] = [
  // Soal 1 (Materi 2.1 & 2.2)
  {
    id: 1,
    materiRef: '2.2',
    soal: 'Pilihlah DUA atau LEBIH pernyataan yang BENAR mengenai jenis logika pemrograman dan representasi flowchart!',
    pilihan: [
      'Logika urutan (Sequence Logic) mengeksekusi instruksi dari atas ke bawah tanpa adanya percabangan.',
      'Logika perulangan (Iteration) dapat diimplementasikan menggunakan For, While do, dan Repeat Until.',
      'Simbol belah ketupat (Decision) digunakan untuk menampung teks rumus penjumlahan.',
      'Simbol terminator oval digunakan untuk menandai titik awal (Start) dan titik akhir (End).'
    ],
    kunci: [0, 1, 3], // 3 jawaban benar (A, B, D)
    pembahasan: 'Pernyataan 1, 2, dan 4 benar (Buku siswa Hal 39-41). Pernyataan 3 salah karena rumus penjumlahan harus diletakkan di dalam simbol persegi panjang (Proses), bukan belah ketupat.'
  },
  // Soal 2 (Materi 2.3 - Searching & Sorting)
  {
    id: 2,
    materiRef: '2.3',
    soal: 'Manakah karakteristik yang BENAR mengenai algoritma pengurutan Selection Sort dan Insertion Sort? (Pilih semua jawaban yang benar)',
    pilihan: [
      'Selection Sort bekerja dengan cara mencari nilai terkecil/ekstrim lalu menukarnya ke posisi paling depan yang belum terurut.',
      'Insertion Sort bekerja dengan cara menyisipkan elemen ke posisi yang sesuai di bagian data yang sudah terurut mirip pemain menyusun kartu.',
      'Insertion Sort selalu membutuhkan loop maksimal 7 kali untuk 100 data.',
      'Jumlah pertukaran (swap) pada Selection Sort umumnya lebih sedikit dibandingkan Insertion Sort yang sering menggeser elemen.'
    ],
    kunci: [0, 1, 3], // 3 jawaban benar
    pembahasan: 'Buku siswa halaman 53-55: Pilihan A, B, dan D tepat menggambarkan mekanisme Selection Sort dan Insertion Sort. Pilihan C salah karena jumlah loop maksimal 7 kali adalah karakteristik Binary Search, bukan Insertion Sort.'
  },
  // Soal 3 (Materi 2.3 - Machine Learning)
  {
    id: 3,
    materiRef: '2.3',
    soal: 'Manakah pernyataan yang BENAR terkait metode machine learning yang dipelajari pada Bab 2? (Pilih semua jawaban yang benar)',
    pilihan: [
      'Regresi Linear menggunakan rumus matematis garis $\\bar{Y} = a + b\\bar{X}$ untuk memprediksi nilai kontinu.',
      'K-Means clustering mengelompokkan data berdasarkan jarak terdekat terhadap titik pusat (sentroid).',
      'Naive Bayes didasarkan pada Teorema Bayes untuk menghitung probabilitas bersyarat.',
      'Decision Tree tidak menggunakan percabangan logika sama sekali.'
    ],
    kunci: [0, 1, 2], // 3 jawaban benar
    pembahasan: 'Buku siswa halaman 58-71: Regresi linear ($Y=a+bX$), K-Means (sentroid & jarak Euclidean), dan Naive Bayes (probabilitas Bayes) dijelaskan secara lengkap. Pilihan D salah karena Decision Tree justru tersusun atas rantai percabangan (root node, decision node, leaf node).'
  },
  // Soal 4 (Materi 2.4 & 2.5 - Pemrograman Teks & Sintaks)
  {
    id: 4,
    materiRef: '2.5',
    soal: 'Manakah aturan sintaks bahasa pemrograman C dan Python yang TEPAT di bawah ini? (Pilih semua jawaban yang benar)',
    pilihan: [
      'Bahasa C mewajibkan setiap pernyataan instruksi diakhiri tanda titik koma (;).',
      'Pada bahasa C dan Python, nama variabel bersifat case-sensitive (huruf besar dan kecil dibedakan).',
      'Bahasa Python wajib mendeklarasikan fungsi `int main()` agar kodenya dapat dijalankan.',
      'Di Python, tanda pagar (#) digunakan untuk menulis komentar yang tidak akan dieksekusi program.'
    ],
    kunci: [0, 1, 3], // 3 jawaban benar
    pembahasan: 'Buku siswa halaman 75-76: C mewajibkan titik koma, case-sensitive berlaku di C & Python, dan komentar Python memakai tanda #. Pilihan C keliru karena Python tidak membutuhkan fungsi main().'
  },
  // Soal 5 (Materi 2.6 - Debugging)
  {
    id: 5,
    materiRef: '2.6',
    soal: 'Manakah langkah-langkah efektif dalam proses analisis kesalahan (debugging) kode program? (Pilih semua jawaban yang benar)',
    pilihan: [
      'Membaca pesan eror (traceback) yang menunjukkan letak baris dan jenis kesalahan.',
      'Menambahkan perintah cetak sementara (print debugging) untuk memeriksa nilai variabel.',
      'Menghapus seluruh file kode program saat terjadi eror kecil.',
      'Menggunakan debugger tools dengan memasang breakpoint pada baris tertentu.'
    ],
    kunci: [0, 1, 3], // 3 jawaban benar
    pembahasan: 'Buku siswa halaman 92: Empat langkah debugging adalah membaca pesan eror, print debugging, menggunakan debugger tools & breakpoint, serta memeriksa kode dengan saksama. Menghapus seluruh file adalah tindakan yang salah.'
  }
];

export const EVALUASI_BAGIAN_C: SoalBagianC[] = [
  // Soal 1 (Materi 2.1)
  {
    id: 1,
    materiRef: '2.1',
    pernyataan: 'Algoritma hanya dapat diterapkan pada bidang ilmu komputer dan tidak dapat digunakan dalam aktivitas kehidupan sehari-hari.',
    kunci: false, // SALAH
    pembahasan: 'Pernyataan ini SALAH. Buku siswa halaman 33 menegaskan bahwa prinsip algoritma dapat diterapkan pada berbagai bidang, termasuk resep masakan, SOP perakitan, dan rute perjalanan harian.'
  },
  // Soal 2 (Materi 2.1)
  {
    id: 2,
    materiRef: '2.1',
    pernyataan: 'Pseudocode adalah cara penulisan algoritma yang menyerupai kode pemrograman namun tidak terikat sintaks kaku suatu bahasa pemrograman tertentu.',
    kunci: true, // BENAR
    pembahasan: 'Pernyataan ini BENAR. Pseudocode menggunakan kata-kata kunci terstruktur yang mudah dipahami manusia dan mudah diterjemahkan ke dalam bahasa koding apa saja.'
  },
  // Soal 3 (Materi 2.2)
  {
    id: 3,
    materiRef: '2.2',
    pernyataan: 'Dalam flowchart, simbol belah ketupat (Decision) memiliki satu jalur masuk dan hanya dapat memiliki tepat satu jalur keluar.',
    kunci: false, // SALAH
    pembahasan: 'Pernyataan ini SALAH. Simbol decision (keputusan) mengevaluasi kondisi logika sehingga harus memiliki minimal dua jalur keluar (misalnya jalur "Ya" dan jalur "Tidak").'
  },
  // Soal 4 (Materi 2.2)
  {
    id: 4,
    materiRef: '2.2',
    pernyataan: 'Logika perulangan (looping) digunakan untuk mengeksekusi blok kode secara berulang selama kondisi pengujian terpenuhi.',
    kunci: true, // BENAR
    pembahasan: 'Pernyataan ini BENAR. Struktur looping (seperti For, While) mengulang eksekusi instruksi hingga kondisi terminasi tercapai.'
  },
  // Soal 5 (Materi 2.3)
  {
    id: 5,
    materiRef: '2.3',
    pernyataan: 'Pada struktur data array, nomor indeks pertama selalu diawali dari angka 1.',
    kunci: false, // SALAH
    pembahasan: 'Pernyataan ini SALAH. Dalam ilmu komputasi standar dan bahasa C/Java/Python (Buku siswa Hal 45), indeks array diawali dari angka 0.'
  },
  // Soal 6 (Materi 2.3)
  {
    id: 6,
    materiRef: '2.3',
    pernyataan: 'Nested if adalah struktur di mana satu pernyataan IF berada di dalam blok IF atau ELSE lainnya untuk pengambilan keputusan bertingkat.',
    kunci: true, // BENAR
    pembahasan: 'Pernyataan ini BENAR. Nested if memungkinkan evaluasi kondisi lanjutan berdasarkan hasil dari pengondisian sebelumnya.'
  },
  // Soal 7 (Materi 2.3)
  {
    id: 7,
    materiRef: '2.3',
    pernyataan: 'Algoritma K-Means Clustering memerlukan data pelatihan yang sudah memiliki label kategori sebelum proses klasterisasi dimulai.',
    kunci: false, // SALAH
    pembahasan: 'Pernyataan ini SALAH. K-Means adalah algoritma pembelajaran tak terawasi (unsupervised learning) yang justru mengelompokkan data acak tanpa label berdasarkan kemiripan jarak terhadap sentroid.'
  },
  // Soal 8 (Materi 2.4)
  {
    id: 8,
    materiRef: '2.4',
    pernyataan: 'Google Colab adalah aplikasi berbasis Cloud milik Google yang memungkinkan penulisan dan eksekusi kode Python langsung melalui peramban (browser).',
    kunci: true, // BENAR
    pembahasan: 'Pernyataan ini BENAR. Google Colab memungkinkan eksekusi notebook Python di server Google tanpa memerlukan instalasi lokal di komputer siswa.'
  },
  // Soal 9 (Materi 2.5)
  {
    id: 9,
    materiRef: '2.5',
    pernyataan: 'Dalam bahasa pemrograman Python, penulisan variabel boleh diawali dengan angka, contohnya `1nilai = 100`.',
    kunci: false, // SALAH
    pembahasan: 'Pernyataan ini SALAH. Di Python, C, dan Java, nama variabel dilarang keras diawali dengan karakter angka.'
  },
  // Soal 10 (Materi 2.6)
  {
    id: 10,
    materiRef: '2.6',
    pernyataan: 'Pembagian suatu bilangan dengan angka nol ($a / 0$) dalam kode program saat dijalankan akan menyebabkan terjadinya Runtime Error.',
    kunci: true, // BENAR
    pembahasan: 'Pernyataan ini BENAR. Operasi pembagian dengan nol (division by zero) memicu runtime error karena prosesor tidak dapat menghitung hasil matematis yang tak terdefinisi saat eksekusi berlangsung.'
  }
];

export const EVALUASI_BAGIAN_D: SoalBagianD[] = [
  // Soal 1: Materi 2.1 & 2.2 (Bentuk Algoritma & Simbol Flowchart)
  {
    id: 1,
    materiRef: '2.1',
    judul: 'Menjodohkan 1: Bentuk Penyajian & Simbol Algoritma',
    instruksi: 'Pasangkan setiap komponen atau simbol algoritma di sebelah kiri dengan deskripsi fungsinya yang tepat di sebelah kanan.',
    items: [
      {
        id: '1-1',
        premis: 'Simbol Jajar Genjang (Parallelogram)',
        jawabanTepat: 'Menyatakan operasi masukan data (Input) atau keluaran hasil (Output)'
      },
      {
        id: '1-2',
        premis: 'Tabel Input-Proses-Output (IPO)',
        jawabanTepat: 'Memisahkan variabel masukan, rumus perhitungan, dan tampilan hasil secara sistematis'
      },
      {
        id: '1-3',
        premis: 'Simbol Belah Ketupat (Diamond)',
        jawabanTepat: 'Mengevaluasi kondisi percabangan dengan jalur keluar Ya / Tidak'
      }
    ],
    pilihanJawaban: [
      'Memisahkan variabel masukan, rumus perhitungan, dan tampilan hasil secara sistematis',
      'Menyatakan operasi masukan data (Input) atau keluaran hasil (Output)',
      'Mengevaluasi kondisi percabangan dengan jalur keluar Ya / Tidak'
    ],
    pembahasan: 'Simbol jajar genjang = Input/Output, Tabel IPO = pemisahan input-proses-output, Belah ketupat = percabangan kondisi (Decision).'
  },

  // Soal 2: Materi 2.3 (Algoritma Pencarian & Pengurutan)
  {
    id: 2,
    materiRef: '2.3',
    judul: 'Menjodohkan 2: Algoritma Pencarian & Pengurutan Data',
    instruksi: 'Pasangkan nama algoritma searching & sorting dengan mekanisme kerjanya yang tepat.',
    items: [
      {
        id: '2-1',
        premis: 'Sequential Search (Linear Search)',
        jawabanTepat: 'Memeriksa elemen satu per satu dari awal dan tidak mensyaratkan data harus terurut'
      },
      {
        id: '2-2',
        premis: 'Binary Search',
        jawabanTepat: 'Membagi dua array berulang kali dan mensyaratkan data wajib sudah terurut'
      },
      {
        id: '2-3',
        premis: 'Selection Sort',
        jawabanTepat: 'Mencari nilai terkecil dari sisa elemen lalu menukarnya ke posisi depan yang sesuai'
      }
    ],
    pilihanJawaban: [
      'Membagi dua array berulang kali dan mensyaratkan data wajib sudah terurut',
      'Mencari nilai terkecil dari sisa elemen lalu menukarnya ke posisi depan yang sesuai',
      'Memeriksa elemen satu per satu dari awal dan tidak mensyaratkan data harus terurut'
    ],
    pembahasan: 'Sequential search = cek satu per satu pada data acak; Binary search = bagi 2 pada data terurut; Selection sort = seleksi nilai ekstrim lalu swap.'
  },

  // Soal 3: Materi 2.3 (Konsep Algoritma Machine Learning)
  {
    id: 3,
    materiRef: '2.3',
    judul: 'Menjodohkan 3: Metode Machine Learning & Pembelajaran Mesin',
    instruksi: 'Pasangkan nama algoritma AI/Machine Learning dengan karakteristik perhitungannya.',
    items: [
      {
        id: '3-1',
        premis: 'Linear Regression (Regresi Linear)',
        jawabanTepat: 'Memprediksi nilai kontinu berdasarkan persamaan garis Y = a + bX'
      },
      {
        id: '3-2',
        premis: 'K-Means Clustering',
        jawabanTepat: 'Mengelompokkan data ke dalam K klaster berdasarkan jarak Euclidean ke sentroid'
      },
      {
        id: '3-3',
        premis: 'Naive Bayes',
        jawabanTepat: 'Menghitung kemungkinan kejadian/kelas berdasarkan Teorema Probabilitas Bayes'
      }
    ],
    pilihanJawaban: [
      'Mengelompokkan data ke dalam K klaster berdasarkan jarak Euclidean ke sentroid',
      'Memprediksi nilai kontinu berdasarkan persamaan garis Y = a + bX',
      'Menghitung kemungkinan kejadian/kelas berdasarkan Teorema Probabilitas Bayes'
    ],
    pembahasan: 'Regresi linear memprediksi nilai kontinu garis regresi; K-Means mengelompokkan data berdasarkan jarak sentroid; Naive Bayes menghitung probabilitas Teorema Bayes.'
  },

  // Soal 4: Materi 2.4 & 2.5 (Tool & Sintaks Bahasa Pemrograman)
  {
    id: 4,
    materiRef: '2.5',
    judul: 'Menjodohkan 4: Sintaks Bahasa & Tool Pemrograman',
    instruksi: 'Pasangkan sintaks atau tool pemrograman di sebelah kiri dengan perannya di sebelah kanan.',
    items: [
      {
        id: '4-1',
        premis: '#include <stdio.h> dalam Bahasa C',
        jawabanTepat: 'Menyertakan pustaka input-output standar seperti printf dan scanf'
      },
      {
        id: '4-2',
        premis: 'OnlineGDB',
        jawabanTepat: 'Compiler dan debugger daring multi-bahasa yang dapat dijalankan lewat browser'
      },
      {
        id: '4-3',
        premis: 'System.out.println() dalam Bahasa Java',
        jawabanTepat: 'Fungsi standar untuk menampilkan output teks ke layar konsol terminal'
      }
    ],
    pilihanJawaban: [
      'Compiler dan debugger daring multi-bahasa yang dapat dijalankan lewat browser',
      'Menyertakan pustaka input-output standar seperti printf dan scanf',
      'Fungsi standar untuk menampilkan output teks ke layar konsol terminal'
    ],
    pembahasan: '#include <stdio.h> = library I/O C; OnlineGDB = online compiler & debugger; System.out.println() = output console Java.'
  },

  // Soal 5: Materi 2.6 (Kategori Kesalahan Kode Program / Bug)
  {
    id: 5,
    materiRef: '2.6',
    judul: 'Menjodohkan 5: Analisis Jenis Kesalahan (Debugging)',
    instruksi: 'Pasangkan jenis kesalahan (bug) dalam kode dengan contoh kasus nyata yang memicunya.',
    items: [
      {
        id: '5-1',
        premis: 'Syntax Error (Kesalahan Sintaks)',
        jawabanTepat: 'Penulisan typo fungsi pint() atau ketiadaan titik koma yang melanggar aturan tata bahasa'
      },
      {
        id: '5-2',
        premis: 'Logic Error (Kesalahan Logika)',
        jawabanTepat: 'Program berjalan sukses tanpa eror, tetapi rumus tertulis hasil = a - b alih-alih a + b'
      },
      {
        id: '5-3',
        premis: 'Runtime Error (Kesalahan Waktu Eksekusi)',
        jawabanTepat: 'Program terhenti saat berjalan akibat membagi bilangan dengan nol atau TypeError tipe data'
      }
    ],
    pilihanJawaban: [
      'Program terhenti saat berjalan akibat membagi bilangan dengan nol atau TypeError tipe data',
      'Penulisan typo fungsi pint() atau ketiadaan titik koma yang melanggar aturan tata bahasa',
      'Program berjalan sukses tanpa eror, tetapi rumus tertulis hasil = a - b alih-alih a + b'
    ],
    pembahasan: 'Syntax error = pelanggaran tata bahasa (compiler menolak); Logic error = hasil salah walau kode berjalan; Runtime error = crash saat dieksekusi (division by zero, type error).'
  }
];
