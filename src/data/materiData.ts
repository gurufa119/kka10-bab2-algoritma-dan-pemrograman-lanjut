import { MateriItem } from '../types';

export const MATERI_LIST: MateriItem[] = [
  {
    id: '2.1',
    code: 'MATERI 2.1',
    title: 'Algoritma Dasar',
    subtitle: 'Konsep Fondasi, Logika Berpikir Komputasional, dan Format Penyajian Algoritma',
    tujuan: 'Murid mampu memahami, mengingat, dan menerapkan algoritma dasar dalam pemecahan masalah nyata maupun pemrograman.',
    indikator: [
      '(a) Memahami bentuk dan format penyajian algoritma dasar (Uraian Naratif, Pseudocode, Tabel IPO, dan Flowchart).',
      '(b) Menganalisis dan menyusun algoritma sistematis untuk aktivitas kontekstual sehari-hari.'
    ],
    materiContent: {
      ringkasan: 'Algoritma merupakan rangkaian langkah-langkah logis yang disusun secara sistematis untuk menyelesaikan masalah atau mencapai tujuan tertentu. Konsep ini merupakan fondasi utama sebelum melangkah ke pemrograman berbasis teks, perbandingan efisiensi algoritma, dan debugging.',
      subSections: [
        {
          title: '1. Pengertian & Karakteristik Algoritma',
          content: 'Algoritma tidak terbatas pada ilmu komputer saja, melainkan dapat diterapkan pada berbagai disiplin ilmu seperti matematika, sains, teknik, hingga pengambilan keputusan sehari-hari (misal resep masakan atau rute perjalanan ke sekolah).\n\nKarakteristik penting algoritma yang baik antara lain:\n• Memiliki awal (input) dan akhir (output yang jelas).\n• Setiap langkah terdefinisi dengan jelas dan tidak ambigu (definiteness).\n• Memiliki langkah terhingga (finiteness) yang dapat dieksekusi secara efektif.'
        },
        {
          title: '2. Empat Bentuk Penyajian Algoritma Dasar',
          content: 'Untuk memudahkan pemahaman dan perancangan sebelum koding, algoritma dapat disajikan dalam 4 format utama:\n1. Uraian Naratif: Ditulis menggunakan bahasa natural manusia secara terstruktur dari langkah awal hingga akhir.\n2. Pseudocode: Penulisan algoritma menyerupai kode pemrograman formal dengan struktur sederhana tanpa terikat sintaks kaku suatu bahasa (menggunakan kata kunci baku seperti Input, Output, IF-THEN, FOR, WHILE).\n3. Tabel Input-Proses-Output (IPO): Memetakan secara tegas data apa yang diterima (input), manipulasi/rumus yang dilakukan (proses), dan hasil akhir yang ditampilkan (output).\n4. Flowchart (Diagram Alir): Representasi grafis visual menggunakan simbol-simbol standar internasional untuk memvisualisasikan alur kontrol program.',
          tableData: {
            headers: ['Bentuk Algoritma', 'Karakteristik Utama', 'Contoh Penggunaan'],
            rows: [
              ['Uraian Naratif', 'Bahasa alami, mudah dipahami orang awam', 'SOP perakitan, resep masakan, langkah menuju sekolah'],
              ['Pseudocode', 'Struktur semi-kode, mudah dikonversi ke bahasa koding', 'Algoritma nilai akhir dengan IF-THEN-ELSE'],
              ['Tabel IPO', 'Memisahkan input, proses perhitungan, output', 'Menghitung rata-rata nilai mata pelajaran'],
              ['Flowchart', 'Diagram simbol grafis visual (kotak, belah ketupat, jajar genjang)', 'Alur navigasi aplikasi, percabangan logika kelulusan']
            ]
          }
        },
        {
          title: '3. Aktivitas Pembelajaran Buku Teks (AP-K10-01 s.d. AP-K10-04)',
          content: 'Dalam buku teks siswa dan panduan guru, konsep algoritma dasar dipraktikkan melalui serangkaian aktivitas aktif:\n• Aktivitas AP-K10-01 (Menyusun Algoritma Sehari-hari): Merumuskan langkah logis dari bangun tidur hingga tiba di bangku kelas secara runtut tanpa melompat.\n• Aktivitas AP-K10-02 (Algoritma dengan Pilihan Jalur): Membuat pseudocode kondisi IF bangun tepat waktu THEN jalan kaki santai, ELSE jika terlambat cek ketersediaan sepeda (IF ada sepeda THEN naik sepeda, ELSE lari).\n• Aktivitas AP-K10-03 (Flowchart Menghitung Nilai Rata-Rata): Membagi 3 komponen IPO (Input: nilai Matematika, Bahasa Indonesia, Bahasa Inggris; Proses: menjumlahkan & membagi 3; Output: menampilkan rata-rata).\n• Aktivitas AP-K10-04 (Bermain Flowchart): Kolaborasi menyusun kartu simbol flowchart secara bergantian dan runtut.'
        }
      ]
    },
    latihanSoal: [
      {
        id: 1,
        soal: 'Di bawah ini manakah pernyataan yang BENAR mengenai perbedaan mendasar antara pseudocode dan kode program nyata (seperti C/Python)?',
        pilihan: [
          'Pseudocode hanya bisa dijalankan langsung oleh compiler GCC.',
          'Pseudocode tidak terikat sintaks kaku bahasa tertentu dan ditujukan untuk dibaca manusia, sedangkan kode program harus mengikuti sintaks bahasa agar dapat dikompilasi oleh komputer.',
          'Pseudocode wajib menggunakan tipe data byte dan pointer.',
          'Kode program tidak memiliki logika urutan sedangkan pseudocode memilikinya.',
          'Pseudocode dan kode program sama persis dan tidak ada perbedaan.'
        ],
        kunci: 1,
        pembahasan: 'Pseudocode adalah deskripsi tingkat tinggi informal dari algoritma pemrograman komputer yang menggunakan konvensi struktural bahasa pemrograman, tetapi ditujukan untuk dibaca oleh manusia dan bukan untuk dieksekusi langsung oleh mesin compiler.'
      },
      {
        id: 2,
        soal: 'Pada penyajian algoritma tabel Input-Proses-Output (IPO) untuk menghitung keliling lingkaran dengan rumus $K = 2 \\times \\pi \\times r$, elemen yang bertindak sebagai INPUT adalah...',
        pilihan: [
          'Keliling Lingkaran (K)',
          'Operasi perkalian bintang (*)',
          'Jari-jari lingkaran (r)',
          'Tampilan hasil di layar monitor',
          'Perintah cetak print()'
        ],
        kunci: 2,
        pembahasan: 'Dalam rumus $K = 2 \\times \\pi \\times r$, data yang harus dimasukkan oleh user dari luar adalah nilai jari-jari ($r$), sedangkan angka 2 dan $\\pi$ merupakan konstanta/proses hitung, dan $K$ adalah output akhir.'
      }
    ]
  },
  {
    id: '2.2',
    code: 'MATERI 2.2',
    title: 'Implementasi Logika Pemrograman dalam Flowchart',
    subtitle: 'Logika Urutan (Sequence), Seleksi (Selection), dan Perulangan (Iteration)',
    tujuan: 'Murid mampu memahami dan menerapkan implementasi logika pemrograman dalam flowchart untuk memecahkan persoalan komputasional.',
    indikator: [
      '(a) Menganalisis dan mengimplementasikan Logika Urutan (Sequence logic).',
      '(b) Menganalisis dan mengimplementasikan Logika Seleksi / Percabangan (Selection logic).',
      '(c) Menganalisis dan mengimplementasikan Logika Perulangan (Iteration / Looping logic).'
    ],
    materiContent: {
      ringkasan: 'Logika pemrograman berasal dari bahasa Yunani "logos" (ilmu berpikir). Logika pemrograman adalah landasan utama untuk menentukan alur kerja instruksi komputer. Tiga struktur dasar logika pemrograman adalah urutan (sequence), seleksi/percabangan (selection), dan perulangan (looping/iteration).',
      subSections: [
        {
          title: '1. Simbol-Simbol Standar Flowchart',
          content: 'Flowchart menggunakan simbol geometris baku sesuai standar ISO/ANSI:\n• Terminator (Oval / Kapsul): Menandakan awal (Start) atau akhir (End) suatu alur program.\n• Input / Output (Jajar Genjang): Operasi membaca input dari pengguna atau menampilkan output ke layar.\n• Proses (Persegi Panjang): Operasi perhitungan matematika, manipulasi nilai, atau penugasan variabel (assignment).\n• Keputusan / Decision (Belah Ketupat): Pengujian kondisi boolean (menghasilkan Ya/Tidak atau True/False).\n• Garis Alir / Flowline (Panah): Menunjukkan arah aliran eksekusi instruksi.',
          tableData: {
            headers: ['Simbol', 'Bentuk Geometris', 'Fungsi / Deskripsi Operasional'],
            rows: [
              ['Terminator', 'Oval (Rounded Rectangle)', 'Memulai (Start/Mulai) dan Mengakhiri (End/Selesai) alur algoritma'],
              ['Input/Output', 'Jajar Genjang (Parallelogram)', 'Menerima masukan data (Input nilai) atau menyajikan hasil (Output hasil)'],
              ['Proses', 'Persegi Panjang (Rectangle)', 'Kalkulasi matematis (contoh: Jumlah = A+B) atau penugasan variabel'],
              ['Keputusan (Decision)', 'Belah Ketupat (Diamond)', 'Evaluasi kondisi bercabang (contoh: Apakah Nilai >= 60?)'],
              ['Garis Alir', 'Anak Panah (Flow line)', 'Menghubungkan antar simbol dan menunjukkan alur eksekusi berikutnya']
            ]
          }
        },
        {
          title: '2. Tiga Jenis Logika Pemrograman Utama',
          content: '1. Logika Urutan (Sequence Logic):\nInstruksi dieksekusi secara sekuensial langkah demi langkah dari atas ke bawah tanpa percabangan atau lompatan.\nContoh: Menerima 4 nilai peserta didik, menjumlahkannya: $\\text{Jumlah} = A + B + C + D$, membaginya: $\\text{Rata2} = \\text{Jumlah} / 4$, dan menampilkan output Rata2.\n\n2. Logika Seleksi / Percabangan (Selection Logic):\nMenentukan cabang eksekusi berdasarkan evaluasi kondisi (IF, IF-ELSE, SWITCH-CASE).\nContoh: Menentukan kelulusan siswa. Jika $\\text{nilaiSiswa} \\ge 60$ maka jalur "Ya" mencetak "Lulus", jika bernilai salah maka jalur "Tidak" mencetak "Tidak Lulus".\n\n3. Logika Perulangan (Iteration / Looping Logic):\nMengeksekusi blok instruksi secara berulang selama kondisi pengujian terpenuhi.\nStruktur yang umum digunakan:\n• For: Digunakan saat jumlah iterasi sudah diketahui secara pasti (counted loop).\n• While Do: Memeriksa kondisi di awal sebelum eksekusi blok kode (kondisi benar $\\to$ eksekusi).\n• Repeat Until (atau Do-While): Mengeksekusi minimal satu kali lalu memeriksa kondisi di akhir pengulangan.'
        },
        {
          title: '3. Aktivitas Penerapan Buku Teks (AP-K10-05 & AP-K10-06)',
          content: '• AP-K10-05 (Mengubah Teks ke Flowchart - Menulis Surat Izin):\nMengidentifikasi langkah urutan tetap (siapkan kertas, tulis tanggal, isi identitas) dan langkah percabangan (IF surat ditulis orang tua THEN format orang tua, ELSE format pribadi).\n\n• AP-K10-06 (Klasifikasi Jenis Kalimat ke Flowchart):\nInput kalimat $\\to$ Cek akhiran tanda tanya (?): Jika Ya $\\to$ "Kalimat Tanya"; Jika Tidak $\\to$ Cek apakah terdapat kata kerja perintah / tanda seru (!): Jika Ya $\\to$ "Kalimat Perintah", Jika Tidak $\\to$ "Kalimat Berita".'
        }
      ]
    },
    latihanSoal: [
      {
        id: 1,
        soal: 'Sebuah flowchart memiliki simbol belah ketupat berisi teks "Counter <= 10". Jika saat eksekusi nilai counter adalah 11, maka alur yang akan dipilih adalah...',
        pilihan: [
          'Jalur Ya (True) menuju output cetak nilai counter',
          'Jalur Tidak (False) keluar dari perulangan menuju End',
          'Program mengalami sintaks error seketika',
          'Nilai counter otomatis direset menjadi 1',
          'Kembali ke simbol Start'
        ],
        kunci: 1,
        pembahasan: 'Kondisi "Counter <= 10" dievaluasi dengan nilai 11. Karena 11 <= 10 bernilai False (Tidak), maka aliran eksekusi keluar dari siklus perulangan menuju langkah berikutnya (End).'
      },
      {
        id: 2,
        soal: 'Pada aktivitas analisis kalimat AP-K10-06, jika kalimat yang diuji adalah "Tolong tutup jendela itu!", hasil klasifikasi algoritma flowchart yang benar adalah...',
        pilihan: [
          'Kalimat Tanya karena mengandung kata tolong',
          'Kalimat Deklaratif / Berita karena mengabarkan kondisi jendela',
          'Kalimat Perintah karena mengandung tanda seru (!) dan kata kerja permohonan perintah',
          'Tidak dapat diproses oleh flowchart',
          'Kalimat Majemuk Setara'
        ],
        kunci: 2,
        pembahasan: 'Berdasarkan logika pohon klasifikasi: Kalimat tidak berakhiran tanda tanya (?), kemudian dicek apakah memiliki tanda seru (!) atau kata perintah. Karena berakhiran tanda seru (!), alur mengarah ke "Kalimat Perintah".'
      }
    ]
  },
  {
    id: '2.3',
    code: 'MATERI 2.3',
    title: 'Algoritma Terstruktur dan Penerapannya',
    subtitle: 'Array, Nested If, Nested Loop, Searching, Sorting, Rule-Based, & Machine Learning',
    tujuan: 'Murid mampu memahami dan menerapkan struktur data array, pengondisian bertingkat, pengulangan bersarang, pencarian, pengurutan, rule-based, serta algoritma machine learning.',
    indikator: [
      '(a) Memahami dan mengoperasikan struktur data Array.',
      '(b) Mengimplementasikan pengondisian bertingkat (Nested If).',
      '(c) Mengimplementasikan perulangan bersarang (Nested Loop).',
      '(d) Menganalisis dan membandingkan Algoritma Pencarian (Linear/Sequential Search vs Binary Search).',
      '(e) Menganalisis dan membandingkan Algoritma Pengurutan (Selection Sort vs Insertion Sort).',
      '(f) Mengimplementasikan Algoritma Rule-Based dalam pemecahan masalah.',
      '(g) Memahami dan menerapkan Algoritma Machine Learning (Decision Tree, Linear Regression, K-Means Clustering, dan Naive Bayes).'
    ],
    materiContent: {
      ringkasan: 'Subbab ini membahas algoritma terstruktur tingkat lanjut mulai dari penyimpanan data dalam array, logika nested if dan loop bersarang, algoritma dasar pencarian & pengurutan, hingga dasar kecerdasan buatan (Rule Based & Pembelajaran Mesin: Regresi Linear, K-Means, dan Naive Bayes).',
      subSections: [
        {
          title: '1. Struktur Data Array',
          content: 'Array adalah struktur data yang digunakan untuk menyimpan sekumpulan nilai dalam satu variabel dengan tipe data yang sama. Setiap elemen memiliki nomor indeks unik yang dimulai dari angka 0.\n\nContoh Array di memori:\nMisalkan $A = [10, 2, 30, 4]$\n• $A[0] = 10$\n• $A[1] = 2$\n• $A[2] = 30$\n• $A[3] = 4$\n\nOperasi elemen array:\n$\\text{Jumlah} = A[1] + A[3] = 2 + 4 = 6$.'
        },
        {
          title: '2. Pengondisian Bertingkat (Nested If) & Perulangan Bersarang (Nested Loop)',
          content: '• Nested If: Satu pernyataan IF berada di dalam blok IF atau ELSE lainnya. Digunakan ketika suatu keputusan bergantung pada hasil evaluasi keputusan sebelumnya (contoh predikat nilai A jika $\\ge 90$, B jika $\\ge 75$, C jika $\\ge 60$, D selainnya; serta kelulusan siswa dengan syarat nilai $\\ge 75$ dan kehadiran $\\ge 80\\%$).\n\n• Nested Loop: Struktur pengulangan di dalam pengulangan lainnya. Setiap 1 putaran loop luar (outer loop), loop dalam (inner loop) akan berputar secara penuh.\n\nContoh pencetakan tabel perkalian dari baris $i=1 \\dots 3$ dan kolom $j=1 \\dots 5$:\nJumlah total perintah output dijalankan sebanyak $3 \\times 5 = 15$ kali.'
        },
        {
          title: '3. Algoritma Pencarian (Searching): Sequential vs Binary Search',
          content: 'Pencarian data dalam struktur array dapat dilakukan dengan dua pendekatan utama:\n\n1. Sequential / Linear Search: Memeriksa data satu per satu dari indeks 0 hingga akhir. Tidak mensyaratkan data harus terurut. Untuk $N=100$ data, maksimal perbandingan mencapai 100 kali.\n\n2. Binary Search: Bekerja dengan membagi dua area pencarian secara berulang (divide-and-conquer) dan membandingkan nilai target dengan elemen tengah $A[\\text{tengah}]$.\nSyarat mutlak: Data harus sudah dalam keadaan terurut (sorted). Untuk $N=100$ data, pencarian selesai dalam maksimal $\\lceil \\log_2(100) \\rceil = 7$ kali perbandingan!',
          tableData: {
            headers: ['Aspek Perbandingan', 'Sequential (Linear) Search', 'Binary Search'],
            rows: [
              ['Cara Kerja', 'Memeriksa elemen satu per satu dari awal', 'Membagi dua array dan mencari di bagian tengah'],
              ['Syarat Data', 'Data acak (tidak perlu terurut)', 'Data WAJIB terurut (sorted) terlebih dahulu'],
              ['Jumlah Perbandingan', 'Sebanyak jumlah elemen N (misal 100 data = 100 kali)', 'Jauh lebih sedikit, dibagi 2 berulang (misal 100 data = 7 kali)'],
              ['Kompleksitas Waktu', 'O(N) - Linear', 'O(log N) - Logaritmik']
            ]
          }
        },
        {
          title: '4. Algoritma Pengurutan (Sorting): Selection Sort vs Insertion Sort',
          content: 'Pengurutan menyusun elemen array dari terkecil ke terbesar (ascending) atau sebaliknya:\n\n• Selection Sort: Bekerja dengan mencari nilai minimum di sisa array yang belum terurut, lalu menukarnya (swap) langsung ke posisi paling depan yang sesuai.\nContoh array $[6, 3, 8, 5, 2]$:\n- Cari terkecil (angka 2) $\\to$ tukar dengan indeks 0 $\\implies [2, 3, 8, 5, 6]$\n- Cari terkecil di indeks 1..4 (angka 3) $\\to$ tetap di indeks 1 $\\implies [2, 3, 8, 5, 6]$\n- Cari terkecil di indeks 2..4 (angka 5) $\\to$ tukar dengan 8 $\\implies [2, 3, 5, 8, 6]$\n- Cari terkecil di indeks 3..4 (angka 6) $\\to$ tukar dengan 8 $\\implies [2, 3, 5, 6, 8]$ (Terurut!).\n\n• Insertion Sort: Bekerja seperti menyusun kartu di tangan. Setiap elemen diambil satu per satu, dibandingkan ke belakang dengan elemen sebelumnya, dan digeser ke kanan untuk disisipkan pada posisi yang tepat.',
          tableData: {
            headers: ['Aspek Perbandingan', 'Selection Sort', 'Insertion Sort'],
            rows: [
              ['Metode Pengurutan', 'Memilih elemen terkecil lalu menukarnya ke depan', 'Menyisipkan elemen ke posisi yang tepat'],
              ['Cara Kerja', 'Scan seluruh sisa data untuk mencari nilai ekstrim', 'Membandingkan ke belakang, menggeser dan menyisipkan'],
              ['Jumlah Pertukaran (Swap)', 'Lebih sedikit (maksimal N-1 kali pertukaran)', 'Lebih banyak pergeseran elemen']
            ]
          }
        },
        {
          title: '5. Algoritma Rule-Based (Sistem Pakar Berbasis Aturan)',
          content: 'Sistem ini bekerja berdasarkan sekumpulan aturan logika eksplisit yang dirumuskan oleh manusia (sering dalam bentuk IF-THEN atau pohon aturan nested if).\n\nContoh dalam buku: Diagnosa Kesehatan Pasien:\nInput: suhu badan, batuk (ya/tidak), sakit kepala (ya/tidak).\n• IF suhubadan > 37.5:\n  - IF batuk == "ya" AND sakitkepala == "ya" $\\to$ Diagnosa: "Flu atau Infeksi Virus"\n  - ELSE IF batuk == "ya" $\\to$ "Demam dan Batuk"\n  - ELSE IF sakitkepala == "ya" $\\to$ "Demam biasa"\n  - ELSE $\\to$ "Demam ringan"\n• ELSE:\n  - IF batuk == "ya" AND sakitkepala == "ya" $\\to$ "Kelelahan"\n  - ELSE IF batuk == "ya" $\\to$ "Batuk ringan"\n  - ELSE IF sakitkepala == "ya" $\\to$ "Sakit kepala ringan"\n  - ELSE $\\to$ "Kondisi sehat"'
        },
        {
          title: '6. Algoritma Pembelajaran Mesin (Machine Learning)',
          content: 'Berbeda dengan rule-based statis, machine learning belajar menemukan pola dari kumpulan data (dataset). Pada Bab 2 ini diperkenalkan 4 algoritma:\n\n1. Decision Tree (Pohon Keputusan):\nStruktur pohon dengan:\n• Root Node: Pertanyaan pertama tempat memulai proses klasifikasi (misal: Apakah hewan memiliki tulang belakang?).\n• Decision Node: Percabangan pertanyaan lanjutan (misal: Apakah bertelur? Memiliki sayap?).\n• Leaf Node: Simpul daun penentu keputusan akhir (misal: Mamalia, Burung, Amfibi).\n\n2. Linear Regression (Regresi Linear):\nDigunakan untuk memprediksi nilai kontinu variabel dependen ($Y$) berdasarkan variabel independen ($X$) yang memiliki hubungan sebab akibat.\nPersamaan garis regresi:\n$$\\bar{Y} = a + b\\bar{X}$$\nRumus kemiringan slope ($b$):\n$$b = \\frac{\\sum (X - \\bar{X})(Y - \\bar{Y})}{\\sum (X - \\bar{X})^2}$$\nRumus intercept ($a$):\n$$a = \\bar{Y} - b\\bar{X}$$\n\nData dari buku teks siswa (Tinggi Badan $X$ vs Berat Badan $Y$):\n• Rata-rata $\\bar{X} = 160\\text{ cm}$, $\\bar{Y} = 52.4\\text{ kg}$\n• $\\sum (X - \\bar{X})(Y - \\bar{Y}) = 175$, $\\sum (X - \\bar{X})^2 = 250$\n• $b = \\frac{175}{250} = 0.7$\n• $a = 52.4 - (0.7 \\times 160) = 52.4 - 112 = -59.6$\n• Persamaan regresi: $Y = -59.6 + 0.7X$\nPrediksi untuk siswa dengan tinggi $X = 175\\text{ cm}$:\n$$Y = -59.6 + (0.7 \\times 175) = -59.6 + 122.5 = 62.9\\text{ kg}$$\n\n3. K-Means Clustering (Pengelompokan Berdasarkan Kemiripan):\nAlgoritma unsupervised learning untuk mengelompokkan data tanpa label ke dalam $K$ kelompok (klaster) berdasarkan jarak terdekat terhadap titik pusat (sentroid).\n• Perhitungan jarak 2 dimensi dengan rumus Phytagoras / Euclidean:\n$$z = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$\n• Pada studi kasus hobi di buku: 6 siswa (A s.d F) dengan 3 fitur biner (Olahraga, Membaca, Musik). Setelah menghitung jarak ke sentroid awal $C_1(1,0,1)$ dan $C_2(0,1,0)$, data dikelompokkan dan sentroid baru dihitung dari rata-rata tiap dimensi: $C_1 = (2/3, 0/3, 3/3) = (0.67, 0, 0.67)$ dan $C_2 = (1/3, 3/3, 1/3) = (0.33, 1, 0.33)$.\n\n4. Naive Bayes (Klasifikasi Probabilitas Teorema Bayes):\nMenghitung probabilitas suatu kelas berdasarkan atribut yang diketahui sebelumnya:\n$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$\nBerdasarkan dataset buah (Apel, Jeruk, Anggur):\nUntuk data buah baru dengan atribut (Ukuran = Kecil, Rasa = Manis):\n• $P(\\text{Apel}|\\text{data}) = 0.33 \\times 0.33 \\times 0.67 = 0.072$\n• $P(\\text{Jeruk}|\\text{data}) = 0.33 \\times 0.33 \\times 0 = 0$\n• $P(\\text{Anggur}|\\text{data}) = 0.33 \\times 0.67 \\times 1 = 0.22$\nKarena $0.22 > 0.072 > 0$, maka buah tersebut diklasifikasikan sebagai ANGGUR!'
        }
      ]
    },
    latihanSoal: [
      {
        id: 1,
        soal: 'Pada algoritma regresi linear dengan model $Y = -59.6 + 0.7X$, berapakah prediksi berat badan siswa yang memiliki tinggi badan $X = 160\\text{ cm}$?',
        pilihan: [
          '50.0 kg',
          '52.4 kg',
          '55.2 kg',
          '60.0 kg',
          '62.9 kg'
        ],
        kunci: 1,
        pembahasan: 'Substitusi $X=160$: $Y = -59.6 + 0.7(160) = -59.6 + 112 = 52.4\\text{ kg}$. Nilai ini tepat sama dengan rata-rata berat badan $\\bar{Y}$ pada sampel data.'
      },
      {
        id: 2,
        soal: 'Jika terdapat 128 data angka yang sudah terurut rapi, berapa jumlah maksimal perbandingan yang dibutuhkan oleh algoritma Binary Search untuk menemukan angka target?',
        pilihan: [
          '128 kali',
          '64 kali',
          '7 kali',
          '16 kali',
          '32 kali'
        ],
        kunci: 2,
        pembahasan: 'Kompleksitas binary search adalah $\\lceil \\log_2(N) \\rceil$. Karena $2^7 = 128$, maka binary search hanya memerlukan maksimal 7 kali pembagian/perbandingan.'
      },
      {
        id: 3,
        soal: 'Simpul paling awal (titik awal pertanyaan pertama) pada pohon keputusan (Decision Tree) disebut sebagai...',
        pilihan: [
          'Leaf Node',
          'Decision Node',
          'Root Node',
          'Branch Node',
          'Split Node'
        ],
        kunci: 2,
        pembahasan: 'Root Node adalah simpul akar yang terletak paling awal dari pohon keputusan, tempat dimulainya evaluasi pertanyaan pertama sebelum bercabang ke decision node lainnya hingga mencapai leaf node.'
      }
    ]
  },
  {
    id: '2.4',
    code: 'MATERI 2.4',
    title: 'Pengenalan Pemrograman Teks',
    subtitle: 'Tahapan Eksekusi, Karakteristik Tekstual vs Visual, & Tool Praktikum Cloud',
    tujuan: 'Murid mampu memahami konsep pemrograman teks, membedakan pemrograman tekstual dan visual, serta menggunakan tool pemrograman teks modern.',
    indikator: [
      '(a) Memahami konsep pemrograman teks dan 4 siklus eksekusinya (Source Code -> Compiler -> Execute -> Output).',
      '(b) Membedakan pemrograman tekstual dengan pemrograman visual berbasis blok.',
      '(c) Menggunakan tool pemrograman teks daring seperti Google Colab dan OnlineGDB.'
    ],
    materiContent: {
      ringkasan: 'Pemrograman teks adalah proses menulis instruksi komputer secara manual dalam bentuk baris teks kode mengikuti sintaks bahasa tertentu. Pemrograman ini menawarkan fleksibilitas penuh untuk membangun perangkat lunak modern, kecerdasan buatan, dan komputasi ilmiah.',
      subSections: [
        {
          title: '1. Siklus 4 Tahap Pemrograman Teks',
          content: 'Untuk mengubah teks yang ditulis manusia menjadi aksi di komputer, terjadi alur 4 tahap:\n1. Source Code (Tekstual): Menulis kode menggunakan text editor atau IDE (disimpan dalam ekstensi file spesifik seperti `.c`, `.py`, `.java`).\n2. Compiler / Interpreter: Menerjemahkan source code menjadi kode mesin biner yang dimengerti prosesor komputer serta mengecek sintaks eror.\n3. Execute: Komputer menjalankan file executable atau instruksi mesin yang telah lolos kompilasi.\n4. Output: Hasil eksekusi ditampilkan ke layar pengguna (console terminal, graphical view, atau data output).'
        },
        {
          title: '2. Komparasi Pemrograman Tekstual vs Pemrograman Visual (Blok)',
          content: 'Pada Fase sebelumnya, siswa mengenal Scratch atau Blockly yang berbasis visual blok. Pada jenjang SMA Fase E, siswa melangkah ke pemrograman tekstual.',
          tableData: {
            headers: ['Aspek', 'Pemrograman Tekstual', 'Pemrograman Visual (Blok)'],
            rows: [
              ['Cara Membuat Program', 'Menulis kode manual dalam bentuk teks', 'Menggunakan antarmuka grafis, menyusun blok drag-and-drop'],
              ['Sintaks Bahasa', 'Harus memahami aturan penulisan sintaks secara presisi', 'Tidak perlu menulis sintaks, cukup menyusun blok yang cocok'],
              ['Tingkat Fleksibilitas', 'Sangat fleksibel, standar industri untuk aplikasi kompleks', 'Terbatas pada pustaka blok yang disediakan editor visual'],
              ['Kurva Belajar', 'Membutuhkan pemahaman tata bahasa kode & logika', 'Sangat visual, cocok untuk pemula tahap awal'],
              ['Contoh Bahasa', 'Python, C, C++, Java, JavaScript, PHP', 'Scratch, Blockly, MIT App Inventor']
            ]
          }
        },
        {
          title: '3. Tool Pemrograman Teks Populer (Online)',
          content: '1. Google Colab (Google Colaboratory):\n• Platform berbasis Cloud milik Google berupa Jupyter Notebook yang dapat diakses langsung via browser tanpa instalasi perangkat lunak di komputer lokal.\n• Sangat unggul untuk bahasa Python, komputasi sains, pengolahan data tabular, dan pustaka Machine Learning (seperti numpy, pandas, scikit-learn, matplotlib).\n• Memfasilitasi eksekusi kode cell per cell dan menyimpan file dengan ekstensi `.ipynb`.\n\n2. OnlineGDB:\n• Compiler & debugger online serbaguna yang mendukung berbagai bahasa populer seperti C, C++, Java, Python, C#, PHP.\n• Dilengkapi jendela input interaktif dan terminal console untuk menguji program secara instan tanpa konfigurasi compiler lokal.'
        }
      ]
    },
    latihanSoal: [
      {
        id: 1,
        soal: 'Perangkat lunak khusus yang bertugas menerjemahkan kode sumber (source code) yang ditulis manusia menjadi kode mesin yang dapat dipahami komputer adalah...',
        pilihan: [
          'Terminal Emulator',
          'Compiler',
          'Spreadsheet',
          'Word Processor',
          'Operating System'
        ],
        kunci: 1,
        pembahasan: 'Compiler adalah program komputer yang menerjemahkan kode sumber yang ditulis dalam bahasa pemrograman tingkat tinggi menjadi bahasa mesin atau kode objek biner.'
      },
      {
        id: 2,
        soal: 'Manakah kelebihan utama Google Colab yang paling menunjang pembelajaran koding kecerdasan artifisial bagi siswa di sekolah?',
        pilihan: [
          'Hanya dapat berjalan jika memiliki komputer berspesifikasi gaming tinggi',
          'Berbasis cloud di browser, tidak perlu instalasi lokal, dan mendukung eksekusi cell interaktif pustaka AI Python',
          'Hanya mendukung pemrograman visual drag-and-drop',
          'Menghapus kode secara otomatis setiap 5 menit',
          'Tidak dapat menyimpan file ke Google Drive'
        ],
        kunci: 1,
        pembahasan: 'Google Colab berbasis cloud browser sehingga dapat diakses siswa dari perangkat apa saja tanpa repot menginstal Python lokal, serta sudah pre-installed pustaka sains data dan machine learning populer.'
      }
    ]
  },
  {
    id: '2.5',
    code: 'MATERI 2.5',
    title: 'Sintaks Dasar Pemrograman',
    subtitle: 'Aturan Tata Bahasa dan Struktur Dasar Bahasa C, Python, dan Java',
    tujuan: 'Murid mampu memahami, membandingkan, dan menerapkan sintaks dasar pemrograman dalam bahasa C, Python, dan Java.',
    indikator: [
      '(a) Memahami dan menerapkan sintaks pemrograman C.',
      '(b) Memahami dan menerapkan sintaks pemrograman Python.',
      '(c) Memahami dan menerapkan sintaks pemrograman Java.'
    ],
    materiContent: {
      ringkasan: 'Sintaks adalah aturan tata bahasa yang mengatur kombinasi simbol dan kata kunci agar instruksi dimengerti oleh komputer. Setiap bahasa memiliki karakteristik sintaks yang khas: bahasa C berorientasi prosedural tingkat menengah, Python berfokus pada kesederhanaan dan keterbacaan, sedangkan Java menganut paradigma berorientasi objek yang kuat.',
      subSections: [
        {
          title: '1. Sintaks Dasar Bahasa C',
          content: 'Karakteristik penting bahasa C:\n• Struktur Program: Menggunakan fungsi utama `int main() { ... }` sebagai titik masuk eksekusi.\n• Header: Memerlukan `#include <stdio.h>` untuk fungsi input-output standar.\n• Output: Menggunakan fungsi `printf("Halo, dunia!\\n");`.\n• Terminasi: Setiap pernyataan harus diakhiri tanda titik koma (`;`).\n• Aturan Variabel: Case-sensitive (huruf besar & kecil berbeda), tidak boleh mengandung spasi atau diawali angka.',
          codeSnippet: '#include <stdio.h>\n\nint main() {\n    printf("Halo, dunia!\\n");\n    return 0;\n}',
          codeLanguage: 'c'
        },
        {
          title: '2. Sintaks Dasar Bahasa Python',
          content: 'Karakteristik penting bahasa Python:\n• Ringkas & Ekspresif: Tidak memerlukan fungsi `main()` wajib; kode langsung dieksekusi dari baris pertama.\n• Output: Menggunakan fungsi `print("Selamat Datang")`.\n• Input: Fungsi `input("Prompt: ")` yang selalu mengembalikan string.\n• Konversi Tipe Data (Type Casting): `int()`, `float()`, `str()`.\n• Tanpa Titik Koma Wajib: Pernyataan tidak harus diakhiri tanda titik koma (`;`). Blok kode ditentukan oleh indentasi (spasi/tab).\n• Komentar: Ditandai dengan simbol pagar `#`.',
          codeSnippet: '# Program Perhitungan Tahun Lahir (Buku Teks Siswa Hal. 82)\nnama = input("Masukkan nama: ")\numur = int(input("Masukkan umur: "))\n\ntahunlahir = 2025 - umur\nprint(f"Halo, {nama}, kamu lahir tahun {tahunlahir}.")',
          codeLanguage: 'python'
        },
        {
          title: '3. Sintaks Dasar Bahasa Java',
          content: 'Karakteristik penting bahasa Java:\n• Berorientasi Objek Penuh: Semua kode harus berada di dalam kelas (`class`).\n• Nama File: Nama file harus persis sama dengan nama public class (misal `Halo.java` untuk `public class Halo`).\n• Entry Point: Membutuhkan `public static void main(String[] args)`.\n• Output: Menggunakan `System.out.println("Halo, dunia!");`.\n• Terminasi: Wajib diakhiri tanda titik koma (`;`). Bersifat case-sensitive.',
          codeSnippet: 'public class Halo {\n    public static void main(String[] args) {\n        System.out.println("Halo, dunia!");\n    }\n}',
          codeLanguage: 'java'
        },
        {
          title: '4. Aktivitas Praktikum Koding Buku Teks (AP-K10-09)',
          content: 'Dalam buku teks siswa, peserta didik melakukan 3 proyek pemrograman Python di Google Colab:\n1. Program Menentukan Bidang Persegi Panjang atau Sama Sisi:\n```python\npanjang = int(input("Panjang: "))\nlebar = int(input("Lebar: "))\nif panjang == lebar:\n    print("Sama sisi")\nelse:\n    print("Persegi panjang")\n```\n2. Program Menghitung dan Mencetak Tahun Lahir:\n`tahunlahir = 2025 - umur`.\n3. Implementasi Machine Learning Regresi Linear dan K-Means dengan Pustaka Scikit-Learn:\nMenggunakan `LinearRegression()` untuk mencari slope ($m$) dan intercept ($b$), serta `KMeans(n_clusters=2)` untuk clustering data hobi.'
        }
      ]
    },
    latihanSoal: [
      {
        id: 1,
        soal: 'Perhatikan potongan baris kode Python berikut:\n```python\na = "10"\nb = 5\nhasil = int(a) + b\n```\nBerapakah tipe data dan nilai akhir dari variabel `hasil`?',
        pilihan: [
          'String bernilai "105"',
          'Integer bernilai 15',
          'Float bernilai 15.0',
          'Error karena string tidak bisa dikonversi ke integer',
          'Boolean bernilai True'
        ],
        kunci: 1,
        pembahasan: 'Fungsi int("10") mengubah nilai string "10" menjadi bilangan bulat 10. Kemudian 10 + 5 menghasilkan integer 15.'
      },
      {
        id: 2,
        soal: 'Manakah penulisan nama variabel yang VALID menurut aturan bahasa pemrograman C, Python, dan Java?',
        pilihan: [
          '2total_nilai',
          'nilai rata-rata',
          'nilai_siswa_akhir',
          'nilai siswa',
          'total#poin'
        ],
        kunci: 2,
        pembahasan: 'Aturan penamaan variabel: tidak boleh diawali angka, tidak boleh mengandung spasi atau karakter khusus seperti tanda hubung (-) atau pagar (#). Penggunaan underscore (nilai_siswa_akhir) adalah bentuk yang sah (snake_case).'
      }
    ]
  },
  {
    id: '2.6',
    code: 'MATERI 2.6',
    title: 'Analisis Kesalahan (Debugging) dalam Kode Program',
    subtitle: 'Identifikasi Syntax Error, Logic Error, Runtime Error, & Strategi Perbaikan',
    tujuan: 'Murid mampu memahami, menerapkan, dan melakukan analisis kesalahan (debugging) kode program secara kolaboratif dan terstruktur.',
    indikator: [
      '(a) Mengidentifikasi dan memperbaiki Kesalahan Sintaks (Syntax Error).',
      '(b) Mengidentifikasi dan memperbaiki Kesalahan Logika (Logic Error).',
      '(c) Mengidentifikasi dan mengatasi Kesalahan Saat Berjalan (Runtime Error).'
    ],
    materiContent: {
      ringkasan: 'Debugging adalah proses mencari, menemukan, menganalisis, dan memperbaiki kesalahan (bug) dalam program agar berjalan sesuai rancangan. Kesalahan dalam koding adalah bagian alami dari proses belajar (learning from errors).',
      subSections: [
        {
          title: '1. Tiga Kategori Utama Kesalahan (Bug) Kode',
          content: '1. Kesalahan Sintaks (Syntax Error):\nTerjadi ketika penulisan melanggar tata bahasa pemrograman. Program ditolak oleh compiler/interpreter sebelum sempat dieksekusi.\n• Contoh di Java: Lupa tanda titik koma (`;`) di akhir `System.out.println("Halo")`.\n• Contoh di Python: Typo penulisan fungsi `pint("Halo")` alih-alih `print("Halo")`.\n• Contoh di C: Menggunakan fungsi `print` bukan `printf`.\n\n2. Kesalahan Logika (Logic Error):\nProgram berhasil dikompilasi dan berjalan lancar tanpa pesan eror sama sekali, tetapi output hasil yang dikeluarkan keliru / tidak sesuai harapan.\n• Contoh: Program menghitung penjumlahan dua bilangan `a = 15; b = 5;`, tetapi pemrogram keliru menuliskan `hasil = a - b;` alih-alih `hasil = a + b;`. Program tetap menampilkan 10 padahal seharusnya 20.\n\n3. Kesalahan Runtime (Runtime Error):\nKesalahan yang terjadi saat program sedang berjalan, biasanya akibat operasi yang tidak diizinkan sistem.\n• Division by Zero: Membagi bilangan dengan 0 di bahasa C (`int hasil = a / 0;`).\n• TypeError di Python: Mengoperasikan dua tipe data yang tidak kompatibel tanpa konversi, contoh: `a = "10"` (string) ditambah `b = 5` (integer) menghasilkan `TypeError: can only concatenate str to str`.'
        },
        {
          title: '2. Empat Langkah Praktis Proses Debugging',
          content: 'a. Membaca Pesan Eror (Traceback): Interpreter/compiler modern memberikan petunjuk nomor baris (`line`) dan jenis eror (misal `SyntaxError`, `NameError`, `TypeError`).\nb. Print Debugging: Menambahkan perintah cetak output sementara untuk melacak perubahan nilai variabel pada setiap langkah eksekusi.\nc. Menggunakan Debugger Tools & Breakpoint: Memasang breakpoint untuk menghentikan program di baris tertentu dan memeriksa isi memori secara bertahap.\nd. Memeriksa Logika Kode dengan Saksama: Melakukan penelusuran manual (code tracing / dry run) terhadap alur data.'
        },
        {
          title: '3. Studi Kasus Debugging Buku Siswa (AP-K10-10 & AP-K10-11)',
          content: 'Pada Aktivitas AP-K10-10, siswa diberikan potongan kode yang mengandung eror:\n```python\nusia = int(input("Masukkan usia anda: "))\nprint(f"Usia anda adalah {} tahun", usia)\n```\nAnalisis Eror:\nKurung kurawal pada f-string kosong `{}` dan variabel `usia` diletakkan di luar tanda petik setelah koma. Hal ini menyebabkan format string tidak bekerja sesuai standar f-string Python.\nPerbaikan yang benar:\n```python\nusia = int(input("Masukkan usia anda: "))\nprint(f"Usia anda adalah {usia} tahun")\n```'
        }
      ]
    },
    latihanSoal: [
      {
        id: 1,
        soal: 'Seorang siswa membuat program rata-rata nilai tiga ulangan harian. Saat dijalankan dengan nilai 80, 90, dan 70, program menampilkan angka 200 bukan 80. Setelah dicek rumusnya tertulis:\n`rata_rata = nilai1 + nilai2 + nilai3 / 3`\nJenis kesalahan yang terjadi pada program tersebut adalah...',
        pilihan: [
          'Syntax Error',
          'Runtime Error',
          'Logic Error (kesalahan prioritas operator matematika)',
          'Compilation Error',
          'Hardware Error'
        ],
        kunci: 2,
        pembahasan: 'Program berjalan tanpa crash, namun hasilnya salah akibat ketiadaan tanda kurung. Operator pembagian (/) memiliki derajat prioritas lebih tinggi daripada penjumlahan (+), sehingga hanya nilai3 yang dibagi 3: 80 + 90 + (70/3) = 193.3. Penulisan yang benar adalah (nilai1 + nilai2 + nilai3) / 3. Ini merupakan contoh klasik Logic Error.'
      },
      {
        id: 2,
        soal: 'Ketika menjalankan kode Python:\n`nilai = input("Masukkan nilai: ")`\n`if nilai >= 75:`\nProgram berhenti dan memunculkan pesan:\n`TypeError: \'>=\' not supported between instances of \'str\' and \'int\'`\nLangkah perbaikan yang paling tepat adalah...',
        pilihan: [
          'Mengubah tanda >= menjadi ==',
          'Menambahkan int() pada fungsi input: nilai = int(input("Masukkan nilai: "))',
          'Menghapus tanda titik dua (:)',
          'Mengganti nama variabel nilai menjadi angka',
          'Memindahkan input ke dalam fungsi main'
        ],
        kunci: 1,
        pembahasan: 'Fungsi input() di Python selalu mengembalikan tipe data String. Membandingkan String dengan Integer 75 menggunakan operator >= akan memicu TypeError. Oleh karena itu variabel nilai harus dikonversi ke Integer menggunakan int().'
      }
    ]
  }
];
