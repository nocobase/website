---
title: "Pembaruan Mingguan｜Tambahkan Pengaman Kompatibilitas Perintah API Dinamis"
description: "Ini adalah ringkasan pembaruan fitur dan perbaikan NocoBase dari 28 Mei hingga 04 Juni 2026."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.61](https://www.nocobase.com/en/blog/v2.0.61)

*Tanggal rilis: 03-06-2026*

### 🚀 Peningkatan

- **[klien]** Dukungan pelengkapan otomatis yang ditingkatkan untuk beberapa fungsi RunJS bawaan. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) oleh @gchust
- **[tidak terdefinisi]** Memperbarui dokumentasi Embed NocoBase untuk plugin sumber terbuka. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) oleh @zhangzhonghe
  Referensi: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 Perbaikan Bug

- **[mesin-alur]**

  - Memperbaiki masalah di mana halaman macet saat mengatur nilai bidang untuk subformulir. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) oleh @gchust
  - Memperbaiki masalah di mana popup menampilkan data UI usang setelah mengganti sakelar mode konfigurasi UI. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) oleh @gchust
- **[klien]**

  - Memperbaiki perilaku aturan tautan tindakan rekaman yang salah di blok tabel. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) oleh @gchust
  - Memperbaiki masalah di mana data bidang relasi yang dipilih tidak ditampilkan di perangkat seluler. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana bidang menjadi hanya-baca saat ditampilkan kembali setelah disembunyikan oleh aturan tautan. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) oleh @katherinehhh
- **[cli]** Memperbaiki template nginx untuk menyajikan aset `.mjs` dengan tipe MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) oleh @mytharcher
- **[basisdata]** Memperbaiki masalah di mana mengimpor nilai kata sandi numerik bisa gagal. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) oleh @2013xile
- **[Karyawan AI]** Memperbaiki validasi URL dasar penyedia AI. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) oleh @cgyrock
- **[Mesin alur]**

  - Memperbaiki masalah di mana menyeret tab popup untuk mengurutkan ulang tidak berfungsi. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) oleh @gchust
  - Memperbaiki masalah di mana memodifikasi blok setelah menduplikasi templatenya secara tidak sengaja dapat memengaruhi konten blok asli. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) oleh @gchust
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki risiko injeksi SQL di filter stempel waktu saluran notifikasi dalam aplikasi. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) oleh @mytharcher
- **[Pengaturan lisensi]** Memperbaiki masalah di mana halaman pengaturan lisensi bisa menggantung untuk waktu yang lama ketika pemeriksaan login pkg lambat atau tidak dapat dijangkau. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) oleh @hongboji
- **[Alur Kerja: JavaScript]** Memperjelas bahwa mode dukungan modul JavaScript Alur Kerja tidak aman dan bukan batasan izin. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) oleh @mytharcher
  Referensi: [Alur Kerja JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Kontrol akses]** Memperbaiki izin yang tidak lengkap pada login pertama ketika peran gabungan adalah peran default. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) oleh @2013xile
- **[Manajer file]** Memperbaiki validasi jalur penyimpanan file lokal untuk mencegah jalur yang tidak aman keluar dari root penyimpanan yang dikonfigurasi. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) oleh @mytharcher
- **[Kebijakan kata sandi]** Memperbaiki masalah di mana validasi kebijakan kata sandi bisa gagal untuk nilai kata sandi numerik. oleh @2013xile

### [v2.0.60](https://www.nocobase.com/en/blog/v2.0.60)

*Tanggal rilis: 29-05-2026*

### 🚀 Peningkatan

- **[Karyawan AI]** Menyempurnakan bidang URL Dasar LLM sehingga dapat menggunakan variabel lingkup global dalam formulir buat dan edit. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) oleh @cgyrock

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki lebar lencana di bilah navigasi atas ([#9607](https://github.com/nocobase/nocobase/pull/9607)) oleh @zhangzhonghe
- **[Karyawan AI]** Memperbaiki tombol pintasan AI yang mendapatkan konteks blok kosong setelah blok tabel yang direferensikan dihapus. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) oleh @cgyrock
- **[Manajer migrasi]** Memperbaiki perbedaan migrasi PostgreSQL sehingga kolom warisan anak tidak dihapus ketika kolom lokal menjadi warisan. oleh @hongboji

### [v2.0.59](https://www.nocobase.com/en/blog/v2.0.59)

*Tanggal rilis: 28-05-2026*

### 🐛 Perbaikan Bug

* **[ai]** Mengunci dependensi LangChain ke versi stabil untuk mencegah kegagalan panggilan alat model Ollama dan menghindari rilis hulu yang terpengaruh. ([#9604](https://github.com/nocobase/nocobase/pull/9604)) oleh @cgyrock
* **[mesin-alur]** Memperbaiki tingkat log frontend yang salah. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) oleh @gchust
* **[Koleksi: Pohon]** Memperbaiki pesan kesalahan yang tidak jelas ketika kueri gagal karena hubungan induk-anak yang melingkar dalam data pohon. ([#9603](https://github.com/nocobase/nocobase/pull/9603)) oleh @zhangzhonghe
* **[AI: Basis pengetahuan]** Mengunci dependensi LangChain ke versi stabil untuk mencegah kegagalan panggilan alat model Ollama dan menghindari rilis hulu yang terpengaruh. oleh @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.44](https://www.nocobase.com/en/blog/v2.1.0-beta.44)

*Tanggal rilis: 03-06-2026*

### 🚀 Peningkatan

- **[Alur Kerja: Persetujuan]** Menyesuaikan aturan validasi untuk pemicu persetujuan dan konfigurasi node untuk memastikan bidang terkait UI ada. oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah di mana data bidang relasi yang dipilih tidak ditampilkan di perangkat seluler. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) oleh @zhangzhonghe
- **[klien-v2]**

  - Memperbaiki kesalahan penyimpanan aturan tautan menu. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) oleh @zhangzhonghe
  - Memperbaiki jarak berlebihan di atas blok pada halaman v2. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) oleh @zhangzhonghe
- **[mesin-alur]** Memperbaiki masalah di mana halaman macet saat mengatur nilai bidang untuk subformulir. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) oleh @gchust
- **[Karyawan AI]**

  - Memperbaiki validasi URL dasar penyedia AI. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) oleh @cgyrock
  - Memperbaiki kesalahan `ctx.get` di node alur kerja Karyawan AI. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) oleh @cgyrock
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki risiko injeksi SQL di filter stempel waktu saluran notifikasi dalam aplikasi. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) oleh @mytharcher
- **[Aksi: Duplikat rekaman]** Memperbaiki masalah di mana status tombol tidak diatur ulang ketika pengiriman rekaman duplikat gagal. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) oleh @katherinehhh
- **[Kalender]** Memperbaiki masalah di mana warna acara kalender tidak dirender dari bidang warna yang dikonfigurasi di halaman v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) oleh @jiannx
- **[Mesin alur]**

  - Memperbaiki masalah di mana memodifikasi blok setelah menduplikasi templatenya secara tidak sengaja dapat memengaruhi konten blok asli. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) oleh @gchust
  - Memperbaiki masalah di mana menyeret tab popup untuk mengurutkan ulang tidak berfungsi. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) oleh @gchust

### [v2.1.0-beta.43](https://www.nocobase.com/en/blog/v2.1.0-beta.43)

*Tanggal rilis: 02-06-2026*

### 🎉 Fitur Baru

- **[klien-v2]** Menambahkan `TypedVariableInput` sehingga bidang port SMTP dan mode aman plugin email v2 dapat menerima konstanta yang diketik atau variabel `{{ $env.X }}`. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) oleh @Molunerfinn
- **[Kontrol akses]** Memigrasikan halaman pengaturan Pengguna dan Peran & Izin ke v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) oleh @jiannx

### 🚀 Peningkatan

- **[tidak terdefinisi]** Memperbarui dokumentasi Embed NocoBase untuk plugin sumber terbuka ([#9642](https://github.com/nocobase/nocobase/pull/9642)) oleh @zhangzhonghe
  Referensi: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[klien]** Dukungan pelengkapan otomatis yang ditingkatkan untuk beberapa fungsi RunJS bawaan. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) oleh @gchust
- **[cli]** meningkatkan panduan init dan pembaruan mandiri ([#9633](https://github.com/nocobase/nocobase/pull/9633)) oleh @chenos

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana blok mungkin salah ditampilkan sebagai dihapus setelah menyegarkan halaman ([#9662](https://github.com/nocobase/nocobase/pull/9662)) oleh @zhangzhonghe
  - Memperbaiki perilaku aturan tautan tindakan rekaman yang salah di blok tabel. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) oleh @gchust
  - (aturan tautan) memperbaiki bidang menjadi hanya-baca saat ditampilkan setelah disembunyikan ([#9649](https://github.com/nocobase/nocobase/pull/9649)) oleh @katherinehhh
- **[cli]** Memperbaiki template nginx untuk menyajikan aset `.mjs` dengan tipe MIME JavaScript. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) oleh @mytharcher
- **[basisdata]** Memperbaiki masalah di mana mengimpor nilai kata sandi numerik bisa gagal ([#9635](https://github.com/nocobase/nocobase/pull/9635)) oleh @2013xile
- **[mesin-alur]**

  - Memperbaiki masalah di mana popup menampilkan data UI usang setelah mengganti sakelar mode konfigurasi UI. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) oleh @gchust
  - Memperbaiki masalah di mana pencarian bidang dihapus saat mengarahkan kursor ke bidang asosiasi ([#9646](https://github.com/nocobase/nocobase/pull/9646)) oleh @zhangzhonghe
- **[klien-v2]** mempertahankan nilai bidang yang ditetapkan ([#9640](https://github.com/nocobase/nocobase/pull/9640)) oleh @katherinehhh
- **[Manajer file]** Memperbaiki validasi jalur penyimpanan file lokal untuk mencegah jalur yang tidak aman keluar dari root penyimpanan yang dikonfigurasi. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) oleh @mytharcher
- **[Blok: Gantt]** Menyempurnakan penempatan tooltip gantt untuk menghindari menutupi bilah tugas dan menyelaraskan label tugas secara konsisten di dalam dan di luar bilah ([#9638](https://github.com/nocobase/nocobase/pull/9638)) oleh @jiannx
- **[Kontrol akses]** Memperbaiki izin yang tidak lengkap pada login pertama ketika peran gabungan adalah default ([#9632](https://github.com/nocobase/nocobase/pull/9632)) oleh @2013xile
- **[Pengaturan lisensi]** Memperbaiki halaman pengaturan lisensi yang menggantung untuk waktu yang lama ketika pemeriksaan login pkg lambat atau tidak dapat dijangkau ([#9650](https://github.com/nocobase/nocobase/pull/9650)) oleh @hongboji
- **[Alur Kerja: JavaScript]** Memperjelas bahwa mode dukungan modul JavaScript Alur Kerja tidak aman dan bukan batasan izin ([#9629](https://github.com/nocobase/nocobase/pull/9629)) oleh @mytharcher
  Referensi: [Alur Kerja JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Kebijakan kata sandi]** Memperbaiki masalah di mana validasi kebijakan kata sandi bisa gagal untuk nilai kata sandi numerik oleh @2013xile

### [v2.1.0-beta.40](https://www.nocobase.com/en/blog/v2.1.0-beta.40)

*Tanggal rilis: 30-05-2026*

### 🎉 Fitur Baru

- **[klien-v2]** Mendukung penetapan nilai bidang dalam tindakan kirim formulir ([#9570](https://github.com/nocobase/nocobase/pull/9570)) oleh @katherinehhh
- **[Pratinjau File Office]** Memigrasikan plugin pratinjau file Office ke klien v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) oleh @Molunerfinn

### 🚀 Peningkatan

- **[Manajer notifikasi]** Memigrasikan plugin terkait notifikasi ke v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) oleh @Molunerfinn

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki lebar lencana di bilah navigasi atas ([#9607](https://github.com/nocobase/nocobase/pull/9607)) oleh @zhangzhonghe
- **[Blok: Gantt]** Memperbaiki jalur folder bersama gantt v2 dan menambahkan garis zebra. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) oleh @jiannx
- **[Pengaturan lisensi]** Menambahkan dukungan klien-v2 untuk pengaturan lisensi dan injeksi lisensi komersial. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) oleh @jiannx
- **[Alur Kerja: Acara aksi kustom]** Memperbaiki opsi Alur Kerja Pemicu duplikat di menu aksi blok v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) oleh @zhangzhonghe
- **[Karyawan AI]** Memperbaiki tombol pintasan AI yang mendapatkan konteks blok kosong setelah blok tabel yang direferensikan dihapus. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) oleh @cgyrock
- **[plugin-komersial]** Menambahkan komponen lisensi komersial klien-v2 dan entri status lisensi bilah atas. oleh @jiannx
- **[Manajer migrasi]** Memperbaiki perbedaan migrasi PostgreSQL sehingga kolom warisan anak tidak dihapus ketika kolom lokal menjadi warisan. oleh @hongboji

### [v2.1.0-beta.38](https://www.nocobase.com/en/blog/v2.1.0-beta.38)

*Tanggal rilis: 29-05-2026*

### 🎉 Fitur Baru

- **[cli]** Menambahkan penjaga kompatibilitas perintah API dinamis ([#9613](https://github.com/nocobase/nocobase/pull/9613)) oleh @chenos
- **[klien-v2]**

  - Mendukung halaman v2 yang disematkan dan halaman formulir publik v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) oleh @zhangzhonghe
  - Menulis ulang halaman manajer Plugin klien-v2 menjadi UI berbasis kartu responsif dengan filter kategori, pencarian, aktifkan/nonaktifkan/hapus, Aktifkan massal, dan modal detail plugin; juga membuat halaman manajer Plugin klien-v1 responsif di layar sempit. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) oleh @Molunerfinn
- **[Alur Kerja]**

  - Menambahkan kontrol waktu tunggu untuk alur kerja, mendukung pembatalan eksekusi yang kehabisan waktu secara otomatis jika opsi waktu tunggu diatur ([#9363](https://github.com/nocobase/nocobase/pull/9363)) oleh @mytharcher
  - Menambahkan API administrator untuk menjalankan ulang eksekusi alur kerja yang dimulai dari awal atau dari node yang ditentukan. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) oleh @mytharcher
- **[Blok: Gantt]** Menambahkan dukungan v2 untuk blok Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) oleh @jiannx
- **[Alur Kerja: Webhook]** Menambahkan status respons 408 untuk alur kerja webhook yang kehabisan waktu (mode sinkron) oleh @mytharcher
- **[Alur Kerja: Subalur]** Mendukung pengaturan waktu tunggu dalam alur kerja oleh @mytharcher
- **[Auth: OIDC]** Memigrasikan `plugin-auth-oidc` ke admin v2; tombol masuk, formulir pengaturan admin, dan pengalihan otomatis SSO sekarang berfungsi di bawah v2. oleh @Molunerfinn
- **[Alur Kerja: Persetujuan]** Mendukung pengaturan waktu tunggu dalam alur kerja oleh @mytharcher
- **[Auth: LDAP]** Menambahkan entri klien v2 sehingga autentikator LDAP merender formulir masuk dan pengaturan adminnya di aplikasi v2. oleh @Molunerfinn

### 🚀 Peningkatan

- **[klien-v2]**

  - Menambahkan pengaturan pemilihan baris tabel v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) oleh @katherinehhh
  - Mendukung warna aksi panel aksi ([#9612](https://github.com/nocobase/nocobase/pull/9612)) oleh @katherinehhh
  - Menghapus opsi Tersembunyi dari konfigurasi menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) oleh @zhangzhonghe
- **[klien]** Menghapus opsi Tersembunyi dari pengaturan item menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) oleh @zhangzhonghe
- **[cli]** Menyederhanakan alur peningkatan aplikasi ([#9587](https://github.com/nocobase/nocobase/pull/9587)) oleh @chenos
- **[Karyawan AI]** Menyempurnakan bidang URL Dasar LLM sehingga dapat menggunakan variabel lingkup global dalam formulir buat dan edit. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) oleh @cgyrock
- **[Pembatasan IP]** Menambahkan klien v2 untuk plugin pembatasan IP. oleh @Molunerfinn

### 🐛 Perbaikan Bug

- **[mesin-alur]**

  - Memperbaiki tingkat log frontend yang salah. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) oleh @gchust
  - Memperbaiki menu bertingkat yang tidak stabil saat mengetik di kotak pencarian ([#9473](https://github.com/nocobase/nocobase/pull/9473)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana aturan tautan aksi tabel akan dieksekusi secara tidak benar setelah formulir berhasil dikirimkan di popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) oleh @gchust
- **[ai]** Mengunci dependensi LangChain ke versi stabil untuk mencegah kegagalan eksekusi alat Ollama dan menghindari rilis hulu yang terpengaruh ([#9604](https://github.com/nocobase/nocobase/pull/9604)) oleh @cgyrock
- **[klien-v2]**

  - Memperbaiki tab masuk sub-aplikasi yang merender template terjemahan mentah, dan mencegah laci edit metode autentikasi v2 menjatuhkan nilai bidang saat dikirim. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) oleh @Molunerfinn
  - Meningkatkan kinerja halaman manajer plugin dengan menggunakan CSS line-clamp alih-alih elipsis Tipografi antd. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) oleh @Molunerfinn
- **[klien]**

  - Memperbaiki format waktu pertahankan untuk bidang waktu v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) oleh @katherinehhh
  - Memperbaiki status tersembunyi sinkron untuk tautan subformulir ([#9594](https://github.com/nocobase/nocobase/pull/9594)) oleh @katherinehhh
  - Meningkatkan batas unggah gambar input pindai ([#9580](https://github.com/nocobase/nocobase/pull/9580)) oleh @katherinehhh
  - Memperbaiki nilai popup pemilih tanggal seluler sinkron ([#9582](https://github.com/nocobase/nocobase/pull/9582)) oleh @katherinehhh
  - Memperbaiki tab halaman yang menghilang setelah mengganti menu ([#9583](https://github.com/nocobase/nocobase/pull/9583)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana subtabel dalam subformulir tidak dapat menambahkan baris kedua ([#9586](https://github.com/nocobase/nocobase/pull/9586)) oleh @katherinehhh
  - Meningkatkan batas unggah gambar input pindai ([#9580](https://github.com/nocobase/nocobase/pull/9580)) oleh @katherinehhh
- **[Koleksi: Pohon]** Memperbaiki kesalahan yang disebabkan oleh data induk-anak yang melingkar dalam koleksi pohon ([#9603](https://github.com/nocobase/nocobase/pull/9603)) oleh @zhangzhonghe
- **[Alur Kerja: Acara aksi kustom]**

  - Memperbaiki tombol aksi tabel kustom dengan konteks beberapa rekaman yang secara tidak benar mengizinkan alur kerja konteks kustom untuk dipilih. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) oleh @mytharcher
  - Memfilter opsi pengikatan alur kerja aksi kustom berdasarkan koleksi blok saat ini. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) oleh @mytharcher
- **[Manajer file]**

  - Menyempurnakan pesan kegagalan pratinjau PDF dan mendokumentasikan persyaratan CORS untuk penyimpanan eksternal. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) oleh @mytharcher
    Referensi: [Pratinjau File](docs/docs/en/file-manager/file-preview/index.md)
  - Memperbaiki normalisasi nama file Unicode selama unggahan file untuk menghindari pembuatan kunci objek dengan karakter kontrol. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) oleh @mytharcher
- **[AI: Basis pengetahuan]** Mengunci dependensi LangChain ke versi stabil untuk mencegah kegagalan eksekusi alat Ollama dan menghindari rilis hulu yang terpengaruh oleh @cgyrock
- **[Cetak template]** Memperbaiki kesalahan konversi PDF cetak template yang tidak dikembalikan ke klien dengan benar oleh @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.45](https://www.nocobase.com/en/blog/v2.1.0-alpha.45)

*Tanggal rilis: 29-05-2026*

### 🎉 Fitur Baru

- **[klien-v2]**

  - Mendukung penetapan nilai bidang dalam tindakan kirim formulir ([#9570](https://github.com/nocobase/nocobase/pull/9570)) oleh @katherinehhh
  - Mendukung halaman v2 yang disematkan dan halaman formulir publik v2 ([#9431](https://github.com/nocobase/nocobase/pull/9431)) oleh @zhangzhonghe
  - Menambahkan menu Keamanan dan halaman pengaturan kebijakan Token ke admin v2; pusat pengguna sekarang mendukung Ubah kata sandi. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) oleh @Molunerfinn
  - Menulis ulang halaman manajer Plugin klien-v2 menjadi UI berbasis kartu responsif dengan filter kategori, pencarian, aktifkan/nonaktifkan/hapus, Aktifkan massal, dan modal detail plugin; juga membuat halaman manajer Plugin klien-v1 responsif di layar sempit. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) oleh @Molunerfinn
- **[cli]**

  - Menambahkan penjaga kompatibilitas perintah API dinamis ([#9613](https://github.com/nocobase/nocobase/pull/9613)) oleh @chenos
  - Mendukung autentikasi dasar ([#9558](https://github.com/nocobase/nocobase/pull/9558)) oleh @chenos
- **[Pratinjau File Office]** Memigrasikan plugin pratinjau file Office ke klien v2 (FlowEngine). ([#9620](https://github.com/nocobase/nocobase/pull/9620)) oleh @Molunerfinn
- **[Alur Kerja]**

  - Menambahkan kontrol waktu tunggu untuk alur kerja, mendukung pembatalan eksekusi yang kehabisan waktu secara otomatis jika opsi waktu tunggu diatur ([#9363](https://github.com/nocobase/nocobase/pull/9363)) oleh @mytharcher
  - Menambahkan API administrator untuk menjalankan ulang eksekusi alur kerja yang dimulai dari awal atau dari node yang ditentukan. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) oleh @mytharcher
- **[IdP: OAuth]** Menambahkan dukungan dasar untuk masuk tunggal aplikasi dalam penerapan multi-aplikasi ([#9547](https://github.com/nocobase/nocobase/pull/9547)) oleh @2013xile
- **[Blok: Gantt]** Menambahkan dukungan v2 untuk blok Gantt. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) oleh @jiannx
- **[SSO Aplikasi]** Menambahkan plugin SSO Aplikasi untuk masuk otomatis antar aplikasi oleh @2013xile
- **[Kebijakan kata sandi]** Memigrasikan plugin-kebijakan-kata-sandi ke shell admin klien-v2 dengan halaman pengaturan Kebijakan kata sandi / Pengguna terkunci dan penegakan aturan sisi klien pada formulir ubah kata sandi pusat pengguna. oleh @Molunerfinn
- **[Alur Kerja: Webhook]** Menambahkan status respons 408 untuk alur kerja webhook yang kehabisan waktu (mode sinkron) oleh @mytharcher
- **[Alur Kerja: Subalur]** Mendukung pengaturan waktu tunggu dalam alur kerja oleh @mytharcher
- **[Auth: OIDC]** Memigrasikan `plugin-auth-oidc` ke admin v2; tombol masuk, formulir pengaturan admin, dan pengalihan otomatis SSO sekarang berfungsi di bawah v2. oleh @Molunerfinn
- **[Alur Kerja: Persetujuan]** Mendukung pengaturan waktu tunggu dalam alur kerja oleh @mytharcher
- **[Pengawas aplikasi]** Menambahkan pengaturan SSO Aplikasi untuk sub aplikasi oleh @2013xile
- **[Auth: LDAP]** Menambahkan entri klien v2 sehingga autentikator LDAP merender formulir masuk dan pengaturan adminnya di aplikasi v2. oleh @Molunerfinn

### 🚀 Peningkatan

- **[klien-v2]**

  - menambahkan pengaturan pemilihan baris tabel v2 ([#9614](https://github.com/nocobase/nocobase/pull/9614)) oleh @katherinehhh
  - mendukung warna aksi panel aksi ([#9612](https://github.com/nocobase/nocobase/pull/9612)) oleh @katherinehhh
  - Menghapus opsi Tersembunyi dari konfigurasi menu ([#9596](https://github.com/nocobase/nocobase/pull/9596)) oleh @zhangzhonghe
- **[klien]** Menghapus opsi Tersembunyi dari pengaturan item menu ([#9595](https://github.com/nocobase/nocobase/pull/9595)) oleh @zhangzhonghe
- **[cli]** menyederhanakan alur peningkatan aplikasi ([#9587](https://github.com/nocobase/nocobase/pull/9587)) oleh @chenos
- **[Manajer notifikasi]** Memigrasikan plugin terkait notifikasi ke v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) oleh @Molunerfinn
- **[Karyawan AI]** Menyempurnakan bidang URL Dasar LLM sehingga dapat menggunakan variabel lingkup global dalam formulir buat dan edit. ([#9615](https://github.com/nocobase/nocobase/pull/9615)) oleh @cgyrock
- **[Alur Kerja]** Memfaktorkan ulang pemeriksaan ketersediaan node async alur kerja ([#9532](https://github.com/nocobase/nocobase/pull/9532)) oleh @mytharcher
- **[Visualisasi data]** Menambahkan dukungan klien v2 untuk blok bagan. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) oleh @jiannx
- **[Pembatasan IP]** Menambahkan klien v2 untuk plugin pembatasan IP. oleh @Molunerfinn

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki lebar lencana di bilah navigasi atas ([#9607](https://github.com/nocobase/nocobase/pull/9607)) oleh @zhangzhonghe
  - Meningkatkan batas unggah gambar input pindai ([#9580](https://github.com/nocobase/nocobase/pull/9580)) oleh @katherinehhh
  - Memperbaiki tab halaman yang menghilang setelah mengganti menu ([#9583](https://github.com/nocobase/nocobase/pull/9583)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana subtabel dalam subformulir tidak dapat menambahkan baris kedua ([#9586](https://github.com/nocobase/nocobase/pull/9586)) oleh @katherinehhh
  - Memperbaiki format waktu pertahankan untuk bidang waktu v2 ([#9579](https://github.com/nocobase/nocobase/pull/9579)) oleh @katherinehhh
  - Memperbaiki nilai popup pemilih tanggal seluler sinkron ([#9582](https://github.com/nocobase/nocobase/pull/9582)) oleh @katherinehhh
  - Memperbaiki status tersembunyi sinkron untuk tautan subformulir ([#9594](https://github.com/nocobase/nocobase/pull/9594)) oleh @katherinehhh
- **[mesin-alur]**

  - Memperbaiki tingkat log frontend yang salah. ([#9577](https://github.com/nocobase/nocobase/pull/9577)) oleh @gchust
  - Memperbaiki menu bertingkat yang tidak stabil saat mengetik di kotak pencarian ([#9473](https://github.com/nocobase/nocobase/pull/9473)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana aturan tautan aksi tabel akan dieksekusi secara tidak benar setelah formulir berhasil dikirimkan di popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) oleh @gchust
- **[ai]** Mengunci dependensi LangChain ke versi stabil untuk mencegah kegagalan eksekusi alat Ollama dan menghindari rilis hulu yang terpengaruh ([#9604](https://github.com/nocobase/nocobase/pull/9604)) oleh @cgyrock
- **[klien-v2]**

  - Memperbaiki tab masuk sub-aplikasi yang merender template terjemahan mentah, dan mencegah laci edit metode autentikasi v2 menjatuhkan nilai bidang saat dikirim. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) oleh @Molunerfinn
  - Meningkatkan kinerja halaman manajer plugin dengan menggunakan CSS line-clamp alih-alih elipsis Tipografi antd. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) oleh @Molunerfinn
  - Memperbaiki metadata bahasa browser sehingga halaman aplikasi mengikuti bahasa aplikasi yang dipilih alih-alih ditandai sebagai bahasa Inggris. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) oleh @Molunerfinn
- **[build]**

  - Aset teks dalam build server sekarang disalin sebagai file alih-alih diubah menjadi modul JavaScript. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) oleh @Molunerfinn
  - Memperbaiki output pengaburan server plugin untuk menghindari global browser dalam bundel runtime Node.js. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) oleh @Molunerfinn
- **[Blok: Gantt]** Memperbaiki jalur folder bersama gantt v2 dan menambahkan garis zebra. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) oleh @jiannx
- **[Pengaturan lisensi]** Menambahkan dukungan klien-v2 untuk pengaturan lisensi dan injeksi lisensi komersial. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) oleh @jiannx
- **[Alur Kerja: Acara aksi kustom]**

  - Memperbaiki opsi Alur Kerja Pemicu duplikat di menu aksi blok v2 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) oleh @zhangzhonghe
  - Memfilter opsi pengikatan alur kerja aksi kustom berdasarkan koleksi blok saat ini. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) oleh @mytharcher
  - Memperbaiki tombol aksi tabel kustom dengan konteks beberapa rekaman yang secara tidak benar mengizinkan alur kerja konteks kustom untuk dipilih. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) oleh @mytharcher
- **[Koleksi: Pohon]** Memperbaiki kesalahan yang disebabkan oleh data induk-anak yang melingkar dalam koleksi pohon ([#9603](https://github.com/nocobase/nocobase/pull/9603)) oleh @zhangzhonghe
- **[Manajer file]**

  - Menyempurnakan pesan kegagalan pratinjau PDF dan mendokumentasikan persyaratan CORS untuk penyimpanan eksternal. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) oleh @mytharcher
    Referensi: [Pratinjau File](docs/docs/en/file-manager/file-preview/index.md)
  - Merender pratinjau PDF dengan aman menggunakan PDF.js alih-alih rendering PDF mentah berbasis iframe. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) oleh @mytharcher
  - Memperbaiki normalisasi nama file Unicode selama unggahan file untuk menghindari pembuatan kunci objek dengan karakter kontrol. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) oleh @mytharcher
- **[Karyawan AI]**

  - Memperbaiki tombol pintasan AI yang mendapatkan konteks blok kosong setelah blok tabel yang direferensikan dihapus. ([#9617](https://github.com/nocobase/nocobase/pull/9617)) oleh @cgyrock
  - memperbaiki deskripsi yang salah dari nama alat dalam prompt konteks kerja ([#9567](https://github.com/nocobase/nocobase/pull/9567)) oleh @cgyrock
- **[Alur Kerja: Node manual]** Memperbaiki penyimpanan sementara untuk tugas alur kerja manual yang tidak mempertahankan nilai formulir yang dikirimkan. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) oleh @mytharcher
- **[plugin-komersial]** Menambahkan komponen lisensi komersial klien-v2 dan entri status lisensi bilah atas. oleh @jiannx
- **[AI: Basis pengetahuan]** Mengunci dependensi LangChain ke versi stabil untuk mencegah kegagalan eksekusi alat Ollama dan menghindari rilis hulu yang terpengaruh oleh @cgyrock
- **[Manajer migrasi]** Memperbaiki perbedaan migrasi PostgreSQL sehingga kolom warisan anak tidak dihapus ketika kolom lokal menjadi warisan. oleh @hongboji
- **[Cetak template]** Memperbaiki kesalahan konversi PDF cetak template yang tidak dikembalikan ke klien dengan benar oleh @jiannx
- **[Auth: OIDC]** Memperbaiki kebocoran token ketika panggilan balik login SSO menerima URL pengalihan eksternal oleh @2013xile
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana API `jobs:resume` tidak didukung oleh node persetujuan oleh @mytharcher
  - Memperbaiki penarikan persetujuan untuk memperbarui data bisnis yang dikirimkan sambil menghormati izin pembaruan koleksi sumber. oleh @mytharcher
  - Memperbaiki todo persetujuan basi ketika alur kerja persetujuan dihentikan oleh kegagalan node non-persetujuan. oleh @mytharcher
