import { KuisSoal } from '../types';

export const KUIS_DATA: KuisSoal[] = [
  // Indikator a (Soal 1 & 2)
  {
    id: 1,
    indikatorKode: 'a',
    indikatorNama: 'Menjelaskan konsep algoritma lanjutan dan logika pemrograman secara sistematis',
    soal: 'Apa yang membedakan logika pemrograman dengan sintaks suatu bahasa pemrograman tertentu?',
    pilihan: [
      'Logika pemrograman hanya berlaku untuk Python, sedangkan sintaks berlaku untuk semua bahasa',
      'Logika pemrograman adalah cara berpikir terstruktur untuk memecahkan masalah, sedangkan sintaks adalah aturan tata bahasa penulisan kode pada bahasa tertentu',
      'Sintaks dirancang sebelum membuat flowchart, sedangkan logika dirancang setelah program selesai',
      'Tidak ada perbedaan, keduanya adalah istilah yang sama dalam koding',
      'Logika pemrograman berkaitan dengan perangkat keras, sedangkan sintaks adalah perangkat lunak'
    ],
    kunci: 1,
    pembahasan: 'Berdasarkan buku siswa halaman 38-39, logika pemrograman adalah pola pikir terstruktur dan sistematis yang tidak bergantung pada aturan sintaks bahasa tertentu, melainkan menjadi landasan utama cara kerja solusi yang diterapkan ke berbagai bahasa pemrograman seperti C, Java, atau Python.'
  },
  {
    id: 2,
    indikatorKode: 'a',
    indikatorNama: 'Menjelaskan konsep algoritma lanjutan dan logika pemrograman secara sistematis',
    soal: 'Manakah di bawah ini yang merupakan ciri utama dari sebuah algoritma yang efektif?',
    pilihan: [
      'Setiap langkah memiliki arti ganda (ambigu) agar fleksibel',
      'Jumlah langkah pengerjaan tidak terhingga dan tidak pernah berhenti',
      'Memiliki awal (input yang jelas), langkah terdefinisi tidak ambigu, dan berhenti menghasilkan solusi yang tepat (finiteness & effectiveness)',
      'Hanya boleh ditulis menggunakan bahasa biner 0 dan 1',
      'Wajib menggunakan antarmuka grafis 3D'
    ],
    kunci: 2,
    pembahasan: 'Algoritma yang baik memiliki karakteristik: definiteness (jelas, tidak ambigu), finiteness (berhenti setelah langkah terhingga), input-output yang valid, serta efektivitas setiap instruksinya.'
  },

  // Indikator b (Soal 3 & 4)
  {
    id: 3,
    indikatorKode: 'b',
    indikatorNama: 'Menggambarkan alur penyelesaian masalah melalui flowchart atau pseudocode',
    soal: 'Simbol flowchart berbentuk jajar genjang (parallelogram) digunakan untuk menyatakan proses...',
    pilihan: [
      'Perhitungan matematika dan assignment variabel',
      'Menerima masukan data (Input) atau menampilkan keluaran hasil (Output)',
      'Memulai (Start) dan mengakhiri (End) program',
      'Pengujian kondisi percabangan (Decision)',
      'Penghubung halaman berbeda (Off-page connector)'
    ],
    kunci: 1,
    pembahasan: 'Simbol jajar genjang secara standar berfungsi untuk operasi I/O (Input/Output), seperti menerima data dari pengguna atau menampilkan hasil ke layar monitor.'
  },
  {
    id: 4,
    indikatorKode: 'b',
    indikatorNama: 'Menggambarkan alur penyelesaian masalah melalui flowchart atau pseudocode',
    soal: 'Perhatikan pseudocode berikut:\n`IF nilai >= 70 THEN output("Lulus") ELSE output("Tidak Lulus") ENDIF`\nJika nilai yang diuji adalah 85, maka alur yang dijalankan adalah...',
    pilihan: [
      'Menampilkan teks "Tidak Lulus"',
      'Menampilkan teks "Lulus" karena kondisi 85 >= 70 bernilai True',
      'Menghasilkan error karena tidak ada tipe data',
      'Program melakukan perulangan tanpa henti',
      'Tidak menampilkan output apapun'
    ],
    kunci: 1,
    pembahasan: 'Nilai 85 dimasukkan ke kondisi evaluasi $85 \\ge 70$. Karena bernilai Benar (True), blok instruksi di dalam THEN dijalankan yaitu menampilkan "Lulus".'
  },

  // Indikator c (Soal 5 & 6)
  {
    id: 5,
    indikatorKode: 'c',
    indikatorNama: 'Menerapkan algoritma sederhana untuk memecahkan masalah kontekstual',
    soal: 'Pada aktivitas AP-K10-02 (Langkah Menuju Sekolah), jika siswa bangun tepat waktu maka ia sarapan tenang dan jalan kaki santai. Namun jika bangun terlambat dan ada sepeda, tindakan yang harus diambil sesuai algoritma adalah...',
    pilihan: [
      'Berlari menuju sekolah tanpa sarapan',
      'Naik sepeda sendiri menuju sekolah',
      'Kembali tidur di kamar',
      'Menunggu angkutan umum',
      'Menghubungi guru piket'
    ],
    kunci: 1,
    pembahasan: 'Sesuai dengan percabangan cerita AP-K10-02: Jika terlambat, terdapat dua opsi: (1) Naik sepeda sendiri jika ada sepeda, (2) Berlari jika tidak ada sepeda. Karena ada sepeda, langkah yang logis adalah naik sepeda.'
  },
  {
    id: 6,
    indikatorKode: 'c',
    indikatorNama: 'Menerapkan algoritma sederhana untuk memecahkan masalah kontekstual',
    soal: 'Sebuah toko memberikan diskon 10% untuk total belanja di atas Rp100.000. Jika Budi berbelanja sebesar Rp150.000, berapa total bayar akhir Budi setelah diskon dihitung oleh algoritma kasir?',
    pilihan: [
      'Rp150.000',
      'Rp140.000',
      'Rp135.000',
      'Rp125.000',
      'Rp100.000'
    ],
    kunci: 2,
    pembahasan: 'Belanja Rp150.000 > Rp100.000, maka berhak mendapat diskon: $\\text{Diskon} = 10\\% \\times 150.000 = 15.000$. Total bayar akhir $= 150.000 - 15.000 = \\text{Rp135.000}$.'
  },

  // Indikator d (Soal 7 & 8)
  {
    id: 7,
    indikatorKode: 'd',
    indikatorNama: 'Membedakan dua atau lebih algoritma berdasarkan efisiensi waktu dan langkah',
    soal: 'Dalam mencari data pada 100 elemen array terurut, perbandingan maksimal yang dilakukan oleh Binary Search adalah 7 kali, sedangkan Sequential Search membutuhkan...',
    pilihan: [
      'Maksimal 10 kali',
      'Maksimal 50 kali',
      'Maksimal 100 kali (sebanyak jumlah elemen data)',
      'Hanya 1 kali',
      'Tidak dapat dipastikan'
    ],
    kunci: 2,
    pembahasan: 'Sequential search memeriksa data satu per satu dari elemen pertama hingga terakhir. Jika data yang dicari berada di posisi paling ujung atau tidak ada, loop dilakukan sebanyak $N = 100$ kali.'
  },
  {
    id: 8,
    indikatorKode: 'd',
    indikatorNama: 'Membedakan dua atau lebih algoritma berdasarkan efisiensi waktu dan langkah',
    soal: 'Pada perbandingan antara Selection Sort dan Insertion Sort, manakah aspek keunggulan Selection Sort dalam hal pertukaran data (swap)?',
    pilihan: [
      'Selection Sort sama sekali tidak pernah menukar data',
      'Selection Sort melakukan pertukaran (swap) lebih sedikit dibandingkan Insertion Sort yang sering menggeser elemen berulang kali',
      'Selection Sort memerlukan memori dua kali lebih banyak',
      'Selection Sort tidak memerlukan loop perulangan',
      'Selection Sort hanya bisa untuk data alfabet'
    ],
    kunci: 1,
    pembahasan: 'Sesuai Tabel 2.2 buku teks: Selection Sort mencari elemen terkecil terlebih dahulu di seluruh sisa data baru menukarnya, sehingga jumlah pertukaran (swap) maksimal hanya $N-1$ kali, lebih sedikit dari Insertion Sort yang sering menggeser elemen ke belakang.'
  },

  // Indikator e (Soal 9 & 10)
  {
    id: 9,
    indikatorKode: 'e',
    indikatorNama: 'Menerapkan algoritma rule-based dan algoritma machine learning untuk memecahkan masalah kontekstual',
    soal: 'Pada sistem diagnosa kesehatan rule-based buku siswa: Jika pasien memiliki suhu tubuh 38.2°C (>37.5), mengalami batuk, tetapi TIDAK mengalami sakit kepala, maka diagnosa yang ditampilkan adalah...',
    pilihan: [
      'Flu atau Infeksi Virus',
      'Demam dan Batuk',
      'Demam biasa',
      'Kondisi sehat',
      'Kelelahan'
    ],
    kunci: 1,
    pembahasan: 'Sesuai algoritma diagnosa rule-based: suhu > 37.5 $\\to$ IF batuk == "ya" $\\to$ IF sakitkepala == "ya" output "Flu/Infeksi Virus", ELSE output "Demam dan Batuk". Karena sakit kepala tidak ada, hasilnya "Demam dan Batuk".'
  },
  {
    id: 10,
    indikatorKode: 'e',
    indikatorNama: 'Menerapkan algoritma rule-based dan algoritma machine learning untuk memecahkan masalah kontekstual',
    soal: 'Untuk memprediksi harga jual rumah berdasarkan luas tanah (hubungan kontinu dua variabel), algoritma machine learning yang paling tepat digunakan adalah...',
    pilihan: [
      'Linear Regression (Regresi Linear)',
      'Sequential Search',
      'Insertion Sort',
      'Bubble Sort',
      'Flowchart urutan'
    ],
    kunci: 0,
    pembahasan: 'Linear Regression memodelkan hubungan matematis sebab akibat antara variabel independen $X$ (luas tanah) dengan variabel dependen kontinu $Y$ (harga rumah).'
  },

  // Indikator f (Soal 11 & 12)
  {
    id: 11,
    indikatorKode: 'f',
    indikatorNama: 'Menentukan algoritma yang paling sesuai untuk kasus tertentu',
    soal: 'Seorang administrator perpustakaan ingin mengelompokkan pengunjung baru ke dalam 3 segmen minat baca tanpa memiliki data label sebelumnya. Algoritma yang paling cocok adalah...',
    pilihan: [
      'Binary Search',
      'K-Means Clustering',
      'Selection Sort',
      'Nested If',
      'Compiler C'
    ],
    kunci: 1,
    pembahasan: 'K-Means Clustering adalah algoritma unsupervised learning yang dirancang khusus untuk mengelompokkan data ke dalam $K$ klaster berdasarkan kesamaan/kemiripan fitur tanpa membutuhkan label data awal.'
  },
  {
    id: 12,
    indikatorKode: 'f',
    indikatorNama: 'Menentukan algoritma yang paling sesuai untuk kasus tertentu',
    soal: 'Kapan algoritma pencarian Sequential Search LEBIH TEPAT digunakan daripada Binary Search?',
    pilihan: [
      'Ketika jumlah data ada miliaran dan sudah terurut',
      'Ketika kumpulan data belum terurut (acak) dan ukurannya relatif kecil sehingga tidak efisien jika diurutkan terlebih dahulu',
      'Ketika mencari teks pada database berindeks pohon B-tree',
      'Ketika memprogram mikrokontroler tanpa memori RAM',
      'Tidak pernah, Sequential Search tidak berguna'
    ],
    kunci: 1,
    pembahasan: 'Binary Search mensyaratkan data harus terurut terlebih dahulu (sorting butuh biaya komputasi). Jika data masih acak dan ukurannya kecil atau hanya dicari sekali saja, sequential search lebih praktis dan tepat.'
  },

  // Indikator g (Soal 13 & 14)
  {
    id: 13,
    indikatorKode: 'g',
    indikatorNama: 'Dapat menjelaskan alasan pemilihan algoritma yang digunakan dalam proyek pemrograman',
    soal: 'Mengapa algoritma Naive Bayes sering dipilih untuk klasifikasi teks atau deteksi email spam?',
    pilihan: [
      'Karena hanya membutuhkan perulangan while do tanpa kondisi',
      'Karena berbasis perhitungan probabilitas bersyarat Teorema Bayes yang cepat dihitung dan efektif menangani banyak atribut kata independen',
      'Karena tidak membutuhkan matematika sama sekali',
      'Karena menghasilkan diagram pohon yang statis',
      'Karena merupakan bahasa pemrograman tingkat rendah'
    ],
    kunci: 1,
    pembahasan: 'Naive Bayes memanfaatkan Teorema Bayes dengan asumsi independensi fitur. Algoritma ini sangat cepat, membutuhkan data pelatihan yang efisien, dan sangat tangguh untuk klasifikasi probabilitas.'
  },
  {
    id: 14,
    indikatorKode: 'g',
    indikatorNama: 'Dapat menjelaskan alasan pemilihan algoritma yang digunakan dalam proyek pemrograman',
    soal: 'Mengapa kita perlu membandingkan efisiensi algoritma sebelum menerapkannya dalam proyek berskala besar?',
    pilihan: [
      'Agar tampilan antarmuka tombol berwarna-warni',
      'Untuk memastikan program berjalan optimal dengan penggunaan waktu komputasi dan konsumsi memori seefisien mungkin',
      'Agar sintaks error tidak perlu diperbaiki',
      'Karena semua algoritma memiliki kecepatan eksekusi yang sama persis',
      'Untuk menggantikan peran compiler'
    ],
    kunci: 1,
    pembahasan: 'Memilih algoritma yang efisien memastikan perangkat lunak tidak lag/hang ketika menangani volume data jutaan pengguna, menghemat sumber daya server, dan meningkatkan responsivitas aplikasi.'
  },

  // Indikator h (Soal 15 & 16)
  {
    id: 15,
    indikatorKode: 'h',
    indikatorNama: 'Menulis program menggunakan bahasa pemrograman berbasis teks (contoh: Python)',
    soal: 'Di bawah ini manakah baris kode Python yang BENAR untuk meminta masukan nama siswa dan mencetak sapaan ke layar?',
    pilihan: [
      'nama = scanf("%s"); printf("Halo, %s", nama);',
      'input = nama("Masukkan nama: "); echo nama;',
      'nama = input("Masukkan nama: ")\nprint("Halo,", nama)',
      'System.out.println("Halo " + nama);',
      'cin >> nama >> cout << "Halo";'
    ],
    kunci: 2,
    pembahasan: 'Di Python, menerima input teks menggunakan fungsi input("prompt") dan menampilkannya menggunakan fungsi print().'
  },
  {
    id: 16,
    indikatorKode: 'h',
    indikatorNama: 'Menulis program menggunakan bahasa pemrograman berbasis teks (contoh: Python)',
    soal: 'Pada program menghitung tahun kelahiran di buku teks:\n`umur = int(input("Masukkan umur: "))`\n`tahunlahir = 2025 - umur`\nJika umur yang dimasukkan adalah 16, berapakah nilai variabel `tahunlahir`?',
    pilihan: [
      '2008',
      '2009',
      '2010',
      '2011',
      '2007'
    ],
    kunci: 1,
    pembahasan: 'Perhitungan matematis: $2025 - 16 = 2009$. Nilai yang tersimpan dalam variabel tahunlahir adalah 2009.'
  },

  // Indikator i (Soal 17 & 18)
  {
    id: 17,
    indikatorKode: 'i',
    indikatorNama: 'Menggunakan struktur data dan operator dasar dalam program berbasis teks',
    soal: 'Diberikan array Python: `nilai = [80, 95, 75, 90, 85]`. Berapakah elemen pada `nilai[2]`?',
    pilihan: [
      '80',
      '95',
      '75',
      '90',
      '85'
    ],
    kunci: 2,
    pembahasan: 'Indeks array dimulai dari 0: nilai[0] = 80, nilai[1] = 95, nilai[2] = 75. Maka nilai pada indeks ke-2 adalah 75.'
  },
  {
    id: 18,
    indikatorKode: 'i',
    indikatorNama: 'Menggunakan struktur data dan operator dasar dalam program berbasis teks',
    soal: 'Manakah operator perbandingan di Python yang digunakan untuk mengecek apakah dua nilai SAMA DENGAN?',
    pilihan: [
      '=',
      '==',
      '!=',
      '===',
      '<>'
    ],
    kunci: 1,
    pembahasan: 'Di Python dan bahasa C/Java, tanda satu sama dengan (=) adalah operator penugasan (assignment), sedangkan dua sama dengan (==) adalah operator perbandingan kesamaan nilai.'
  },

  // Indikator j (Soal 19 & 20)
  {
    id: 19,
    indikatorKode: 'j',
    indikatorNama: 'Menjalankan dan menguji program yang ditulis untuk memastikan hasil keluaran sesuai dengan logika algoritma',
    soal: 'Perhatikan potongan kode Python berikut:\n```python\npanjang = 10\nlebar = 10\nif panjang == lebar:\n    print("Sama sisi")\nelse:\n    print("Persegi panjang")\n```\nApakah output yang muncul di console saat kode dijalankan?',
    pilihan: [
      'Persegi panjang',
      'Sama sisi',
      'True',
      '10',
      'Error tidak ada titik koma'
    ],
    kunci: 1,
    pembahasan: 'Variabel panjang (10) sama dengan lebar (10). Kondisi panjang == lebar menghasilkan True, sehingga program mencetak "Sama sisi".'
  },
  {
    id: 20,
    indikatorKode: 'j',
    indikatorNama: 'Menjalankan dan menguji program yang ditulis untuk memastikan hasil keluaran sesuai dengan logika algoritma',
    soal: 'Pada pengujian chatbot sederhana asisten sekolah (AP-K10-12), jika pengguna mengetik kalimat "Kapan jadwal ujian matematika?", kata kunci manakah yang akan memicu percabangan respons jadwal?',
    pilihan: [
      '"ujian"',
      '"kapan"',
      '"jadwal"',
      '"matematika"',
      '"asisten"'
    ],
    kunci: 2,
    pembahasan: 'Sesuai kode AP-K10-12: `if "jadwal" in pertanyaan:` mengecek keberadaan substring "jadwal" dalam teks input pengguna untuk memberikan info jadwal pelajaran.'
  },

  // Indikator k (Soal 21 & 22)
  {
    id: 21,
    indikatorKode: 'k',
    indikatorNama: 'Mengidentifikasi jenis kesalahan sintaks dan logika dalam kode program',
    soal: 'Baris kode bahasa Java berikut menyebabkan kesalahan:\n`System.out.println("Halo dunia")`\nJenis kesalahan dan penyebab yang tepat adalah...',
    pilihan: [
      'Runtime error karena memori habis',
      'Logic error karena tulisan Halo dunia tidak berbahasa Indonesia',
      'Syntax error karena tidak terdapat tanda titik koma (;) di akhir pernyataan',
      'Hardware error karena monitor mati',
      'Tidak ada error sama sekali'
    ],
    kunci: 2,
    pembahasan: 'Dalam aturan tata bahasa (sintaks) Java, setiap baris pernyataan wajib ditutup dengan tanda titik koma (;). Ketiadaannya memicu Syntax Error.'
  },
  {
    id: 22,
    indikatorKode: 'k',
    indikatorNama: 'Mengidentifikasi jenis kesalahan sintaks dan logika dalam kode program',
    soal: 'Kode program berhasil dikompilasi, berjalan tanpa ada pesan eror apapun, namun ketika menghitung luas persegi panjang dengan rumus `luas = panjang + lebar`, hasil hitungannya salah. Kesalahan ini tergolong ke dalam...',
    pilihan: [
      'Syntax error',
      'Logic error',
      'Runtime error',
      'Division by zero',
      'Import error'
    ],
    kunci: 1,
    pembahasan: 'Logic Error terjadi ketika instruksi koding berjalan normal tanpa crash, namun alur formula komputasi keliru (seharusnya perkalian `*` malah ditulis penjumlahan `+`).'
  },

  // Indikator l (Soal 23 & 24)
  {
    id: 23,
    indikatorKode: 'l',
    indikatorNama: 'Memperbaiki kode eror dan menjelaskan penyebabnya',
    soal: 'Perhatikan kode Python yang eror berikut:\n`a = "20"`\n`b = 10`\n`print(a + b)`\nBagaimana cara memperbaiki kode tersebut agar menghasilkan nilai penjumlahan 30?',
    pilihan: [
      'print(str(a) + b)',
      'print(int(a) + b)',
      'print(a, b)',
      'print("a + b")',
      'print(float(b) + a)'
    ],
    kunci: 1,
    pembahasan: 'Variabel a adalah string "20". Agar dapat dijumlahkan secara aritmatika dengan b (10), variabel a harus dikonversi menjadi integer dengan int(a), sehingga 20 + 10 = 30.'
  },
  {
    id: 24,
    indikatorKode: 'l',
    indikatorNama: 'Memperbaiki kode eror dan menjelaskan penyebabnya',
    soal: 'Pada kode bahasa C:\n`int a = 10; int b = 0; int hasil = a / b;`\nProgram akan mengalami crash saat dijalankan. Penyebab error tersebut adalah...',
    pilihan: [
      'Syntax error karena nama variabel a dan b dilarang',
      'Runtime error berupa Division by zero (pembagian dengan angka nol)',
      'Logic error karena compiler tidak menyukai angka 10',
      'Memory leak akibat array penuh',
      'Sintaks printf belum dipanggil'
    ],
    kunci: 1,
    pembahasan: 'Secara matematis pembagian dengan 0 tidak terdefinisi. Dalam sistem komputasi prosesor, operasi pembagian bilangan dengan nol saat program berjalan menghasilkan sinyal crash "Division by Zero" (Runtime Error).'
  },

  // Indikator m (Soal 25 & 26)
  {
    id: 25,
    indikatorKode: 'm',
    indikatorNama: 'Menuliskan program dengan pengondisian bertingkat (nested if) untuk menyelesaikan kasus bercabang',
    soal: 'Perhatikan struktur nested if berikut:\n```python\nif nilai >= 75:\n    if kehadiran >= 80:\n        status = "Lulus"\n    else:\n        status = "Tidak Lulus (Kehadiran Kurang)"\nelse:\n    status = "Tidak Lulus (Nilai Kurang)"\n```\nJika seorang siswa memiliki nilai = 85 dan kehadiran = 75%, maka status siswa tersebut adalah...',
    pilihan: [
      'Lulus',
      'Tidak Lulus (Kehadiran Kurang)',
      'Tidak Lulus (Nilai Kurang)',
      'Ditangguhkan',
      'Error evaluasi'
    ],
    kunci: 1,
    pembahasan: 'Kondisi luar (nilai >= 75) bernilai True (85 >= 75). Program masuk ke blok dalam dan mengecek kehadiran >= 80 (75 >= 80) yang bernilai False. Maka dieksekusi blok else dalam: "Tidak Lulus (Kehadiran Kurang)".'
  },
  {
    id: 26,
    indikatorKode: 'm',
    indikatorNama: 'Menuliskan program dengan pengondisian bertingkat (nested if) untuk menyelesaikan kasus bercabang',
    soal: 'Mengapa struktur Nested If sangat krusial dalam algoritma sistem pakar atau pengambilan keputusan bertingkat?',
    pilihan: [
      'Karena nested if mempercepat eksekusi 100 kali lipat dibanding satu baris',
      'Karena memungkinkan program mengevaluasi kondisi lanjutan yang hanya relevan jika kondisi prasyarat sebelumnya telah terpenuhi',
      'Karena nested if tidak membutuhkan blok else',
      'Karena compiler menolak penggunaan if tunggal',
      'Karena nested if menggantikan fungsi looping'
    ],
    kunci: 1,
    pembahasan: 'Nested if memungkinkan pengambilan keputusan hierarkis di mana suatu pertanyaan atau pengecekan lanjutan hanya bermakna jika cabang kondisi di atasnya sudah diverifikasi.'
  },

  // Indikator n (Soal 27 & 28)
  {
    id: 27,
    indikatorKode: 'n',
    indikatorNama: 'Menggunakan perulangan bersarang (nested loop) untuk mengolah data berulang dua tingkat',
    soal: 'Perhatikan potongan kode Python perulangan bersarang berikut:\n```python\nfor i in range(3):\n    for j in range(2):\n        print("Loop")\n```\nBerapa total kali kata "Loop" dicetak ke layar monitor?',
    pilihan: [
      '3 kali',
      '2 kali',
      '5 kali',
      '6 kali',
      '9 kali'
    ],
    kunci: 3,
    pembahasan: 'Loop luar berputar 3 kali ($i = 0, 1, 2$). Pada setiap satu putaran luar, loop dalam berputar 2 kali ($j = 0, 1$). Total pencetakan $= 3 \\times 2 = 6$ kali. (Persis soal Uji Kompetensi halaman 96 no 5).'
  },
  {
    id: 28,
    indikatorKode: 'n',
    indikatorNama: 'Menggunakan perulangan bersarang (nested loop) untuk mengolah data berulang dua tingkat',
    soal: 'Berapakah nilai variabel `total` setelah algoritma nested loop berikut selesai:\n```python\ntotal = 0\nfor i in range(1, 4):      # i = 1, 2, 3\n    for j in range(1, 3):  # j = 1, 2\n        total += 1\n```',
    pilihan: [
      '5',
      '6',
      '7',
      '8',
      '12'
    ],
    kunci: 1,
    pembahasan: 'Loop luar berjalan untuk 3 nilai $i$ dan loop dalam untuk 2 nilai $j$. Operasi `total += 1` dijalankan sebanyak $3 \\times 2 = 6$ kali. Nilai akhir total adalah 6.'
  },

  // Indikator o (Soal 29 & 30)
  {
    id: 29,
    indikatorKode: 'o',
    indikatorNama: 'Menggabungkan pengondisian dan perulangan kompleks dalam satu proyek program mini',
    soal: 'Sebuah program menelusuri array `data = [12, 5, 8, 21, 14, 7]`. Di dalam loop terdapat kondisi `if x % 2 == 0: genap += 1`. Berapakah nilai akhir variabel `genap`?',
    pilihan: [
      '1',
      '2',
      '3 (yaitu angka 12, 8, dan 14)',
      '4',
      '5'
    ],
    kunci: 2,
    pembahasan: 'Bilangan genap adalah bilangan yang habis dibagi 2 ($x \\% 2 == 0$). Dari array tersebut, angka genapnya adalah 12, 8, dan 14 (sebanyak 3 bilangan).'
  },
  {
    id: 30,
    indikatorKode: 'o',
    indikatorNama: 'Menggabungkan pengondisian dan perulangan kompleks dalam satu proyek program mini',
    soal: 'Dalam proyek mini klasifikasi buah (Naive Bayes), program melakukan iterasi untuk setiap kelas (Apel, Jeruk, Anggur) dan menghitung nilai probabilitas bersyaratnya, lalu membandingkan hasilnya untuk mencari nilai maksimum. Struktur pemrograman yang digabungkan adalah...',
    pilihan: [
      'Hanya satu baris print',
      'Perulangan untuk kalkulasi probabilitas setiap kelas yang dikombinasikan dengan pengondisian pemilihan nilai probabilitas tertinggi',
      'Pengurangan bertingkat tanpa variabel',
      'Menghapus seluruh dataset',
      'Mengganti file interpreter'
    ],
    kunci: 1,
    pembahasan: 'Proyek mini machine learning mengintegrasikan struktur perulangan (loop) untuk menghitung skor probabilitas tiap kelas kategori, lalu menggunakan seleksi/pengondisian (if) untuk menentukan kelas dengan probabilitas terbesar sebagai kesimpulan prediksi.'
  }
];
