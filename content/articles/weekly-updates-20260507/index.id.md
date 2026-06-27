---
title: "Pembaruan Mingguan｜Menambahkan beberapa API untuk NocoBase cli"
description: "Ini adalah ringkasan pembaruan fitur dan perbaikan NocoBase dari 30 April hingga 7 Mei 2026."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.49](https://www.nocobase.com/en/blog/v2.0.49)

*Tanggal rilis: 06-05-2026*

### 🚀 Peningkatan

- **[tidak ditentukan]** Menambahkan notifikasi kegagalan Feishu untuk alur kerja rilis manual ([#9349](https://github.com/nocobase/nocobase/pull/9349)) oleh @Molunerfinn

### 🐛 Perbaikan Bug

- **[Sumber data: Utama]** Mencegah crash ketika fields tidak terdefinisi selama pemuatan koleksi ([#9174](https://github.com/nocobase/nocobase/pull/9174)) oleh @saraTabbane
- **[Template UI]** Memperbaiki masalah di mana daftar template popup gagal memuat template yang tersedia dengan benar. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) oleh @gchust
- **[Karyawan AI]** Memperbaiki masalah kesalahan sesekali ketika karyawan AI menggunakan model DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) oleh @cgyrock
- **[Manajer file]** Penanganan kesalahan unduhan file pratinjau yang ditingkatkan ([#9103](https://github.com/nocobase/nocobase/pull/9103)) oleh @gaston98765
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana filter dan parameter kueri lainnya sekarang berfungsi di API untuk mendaftar alur kerja persetujuan yang tersedia oleh @mytharcher

### [v2.0.48](https://www.nocobase.com/en/blog/v2.0.48)

*Tanggal rilis: 04-05-2026*

### 🐛 Perbaikan Bug

- **[Karyawan AI]** Memperbaiki masalah di mana daftar karyawan AI tombol aksi menampilkan karyawan pengembang ([#9320](https://github.com/nocobase/nocobase/pull/9320)) oleh @cgyrock
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana file di aplikasi asli tidak dimuat ulang oleh @mytharcher
  - Mendukung penguraian beberapa variabel klien dalam tindakan persetujuan oleh @mytharcher

### [v2.0.47](https://www.nocobase.com/en/blog/v2.0.47)

*Tanggal rilis: 01-05-2026*

### 🎉 Fitur Baru

- **[Karyawan AI]** Penyedia LLM sekarang mendukung platform Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) oleh @cgyrock

### 🚀 Peningkatan

- **[flow-engine]** Meningkatkan perilaku tata letak seret blok pada halaman v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) oleh @zhangzhonghe
- **[Karyawan AI]** Penyesuaian kategori karyawan AI ([#9274](https://github.com/nocobase/nocobase/pull/9274)) oleh @cgyrock
- **[Alur Kerja: Persetujuan]** Menandai mode tampilan asosiasi yang dimuat dari DB sebagai warisan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[database]** Memperbaiki masalah di mana filter datetime sumber data eksternal SQL Server bisa gagal ([#9272](https://github.com/nocobase/nocobase/pull/9272)) oleh @2013xile
- **[klien]**

  - Mempertahankan nilai null untuk dependensi variabel lingkup Data kosong di formulir v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) oleh @jiannx
  - menjalankan ulang rendering kolom JS ketika data baris berubah ([#9282](https://github.com/nocobase/nocobase/pull/9282)) oleh @jiannx
  - Memperbaiki masalah di mana bidang formulir filter menghilang setelah membuka kembali pemilih rekaman popup ([#9211](https://github.com/nocobase/nocobase/pull/9211)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana sel bidang JS di blok tabel v2 bisa tampak kosong setelah memfilter atau menyegarkan data tabel. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) oleh @jiannx
- **[flow-engine]** Memperbaiki masalah di mana bidang yang disembunyikan sistem dapat dipilih dalam variabel terkait formulir. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) oleh @gchust
- **[Aksi: Impor rekaman]** Memperbaiki masalah di mana indeks baris yang gagal dalam mengimpor rekaman tidak benar ([#9277](https://github.com/nocobase/nocobase/pull/9277)) oleh @mytharcher
- **[Blok: Gantt]** Menambahkan pengaturan blok Gantt untuk mengaktifkan seret untuk menjadwalkan ulang. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) oleh @jiannx
- **[Karyawan AI]** Memperbaiki kesalahan integrasi AI employee deepSeek V4 ([#9275](https://github.com/nocobase/nocobase/pull/9275)) oleh @cgyrock
- **[Aksi: Ekspor rekaman Pro]** Memperbaiki masalah di mana mode otomatis tidak berfungsi oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki kesalahan tipe oleh @mytharcher
  - Memperbaiki waktu eksekusi persetujuan sehingga `latestExecutionId` disinkronkan setelah komit persetujuan oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.25](https://www.nocobase.com/en/blog/v2.1.0-beta.25)

*Tanggal rilis: 06-05-2026*

### 🎉 Fitur Baru

- **[cli]** Menambahkan perintah rilis di API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) oleh @Andrew1989Y
- **[tidak ditentukan]** Menambahkan dokumentasi Bahasa Indonesia dan Vietnam. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) oleh @Molunerfinn
- **[Karyawan AI]** Penyedia LLM sekarang mendukung platform Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) oleh @cgyrock
- **[Manajer migrasi]** Menambahkan beberapa API untuk nocobase cli oleh @Andrew1989Y
- **[Manajer cadangan]** Menambahkan beberapa API untuk nocobase cli oleh @Andrew1989Y

### 🚀 Peningkatan

- **[tidak ditentukan]**

  - Menambahkan notifikasi kegagalan Feishu untuk alur kerja rilis manual([#9349](https://github.com/nocobase/nocobase/pull/9349)) oleh @Molunerfinn
  - Menyelaraskan dokumentasi Spanyol, Portugis, Rusia, dan Jerman dengan sumber bahasa Inggris. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) oleh @Molunerfinn
  - Menyinkronkan dokumentasi Prancis dengan sumber bahasa Mandarin. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) oleh @Molunerfinn
- **[IdP: OAuth]** Sesi OAuth sekarang menggunakan pengaturan kedaluwarsa yang sama dengan kebijakan token sistem ([#9345](https://github.com/nocobase/nocobase/pull/9345)) oleh @2013xile
- **[Blok: Kanban]**

  - Mengurangi lebar kolom kanban default. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) oleh @jiannx
  - Pengaturan pembuatan blok Kalender dan Kanban yang ditingkatkan. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) oleh @jiannx
- **[Karyawan AI]** Penyesuaian kategori karyawan AI ([#9274](https://github.com/nocobase/nocobase/pull/9274)) oleh @cgyrock
- **[Alur Kerja: Persetujuan]** Menandai mode tampilan asosiasi yang dimuat dari DB sebagai warisan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[tidak ditentukan]**

  - Memperbaiki alur kerja dependensi-dan-build sehingga kegagalan checkout plugin pro mandiri memutus CI alih-alih melewatkan cakupan build secara diam-diam. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) oleh @Molunerfinn
  - Memperbaiki file terjemahan yang membengkak dan menyelaraskan struktur dokumentasi lintas bahasa. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) oleh @Molunerfinn
- **[cli]** Memperbaiki opsi boolean CLI sehingga dapat dinonaktifkan dengan flag yang dinegasikan ([#9337](https://github.com/nocobase/nocobase/pull/9337)) oleh @2013xile
- **[client-v2]**

  - Memperbaiki pemuatan plugin jarak jauh sehingga URL plugin yang sudah diakhiri dengan `.js` tidak diselesaikan ke jalur `.js.js` duplikat. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) oleh @Molunerfinn
  - Memperbaiki masalah di mana `RemoteSelect` tidak dirender dalam konfigurasi alur kerja ikat ([#9314](https://github.com/nocobase/nocobase/pull/9314)) oleh @mytharcher
- **[ai]** Memperbaiki pengaturan bidang kategori yang hilang selama pendaftaran karyawan AI ([#9300](https://github.com/nocobase/nocobase/pull/9300)) oleh @cgyrock
- **[flow-engine]** Memperbaiki masalah di mana bidang yang disembunyikan sistem dapat dipilih dalam variabel terkait formulir. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) oleh @gchust
- **[klien]**

  - Memperbaiki masalah di mana sel bidang JS di blok tabel v2 bisa tampak kosong setelah memfilter atau menyegarkan data tabel. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) oleh @jiannx
  - Mempertahankan nilai null untuk dependensi variabel lingkup Data kosong di formulir v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) oleh @jiannx
  - Memperbaiki masalah di mana bidang formulir filter menghilang setelah membuka kembali pemilih rekaman popup ([#9211](https://github.com/nocobase/nocobase/pull/9211)) oleh @zhangzhonghe
  - menjalankan ulang rendering kolom JS ketika data baris berubah ([#9282](https://github.com/nocobase/nocobase/pull/9282)) oleh @jiannx
- **[database]** Memperbaiki masalah di mana filter datetime sumber data eksternal SQL Server bisa gagal ([#9272](https://github.com/nocobase/nocobase/pull/9272)) oleh @2013xile
- **[Karyawan AI]**

  - Memperbaiki masalah kesalahan sesekali ketika karyawan AI menggunakan model DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) oleh @cgyrock
  - Memperbaiki masalah di mana simpul karyawan AI alur kerja menghapus keterampilan setelah mengganti karyawan AI ([#9342](https://github.com/nocobase/nocobase/pull/9342)) oleh @cgyrock
  - Memperbaiki masalah di mana daftar karyawan AI tombol aksi menampilkan karyawan pengembang ([#9320](https://github.com/nocobase/nocobase/pull/9320)) oleh @cgyrock
- **[Sumber data: Utama]** Mencegah crash ketika fields tidak terdefinisi selama pemuatan koleksi ([#9174](https://github.com/nocobase/nocobase/pull/9174)) oleh @saraTabbane
- **[Template UI]** Memperbaiki masalah di mana daftar template popup gagal memuat template yang tersedia dengan benar. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) oleh @gchust
- **[Manajer file]** Penanganan kesalahan unduhan file pratinjau yang ditingkatkan ([#9103](https://github.com/nocobase/nocobase/pull/9103)) oleh @gaston98765
- **[Blok: Pohon]** Memperbaiki tampilan abnormal dari simpul blok filter ([#9260](https://github.com/nocobase/nocobase/pull/9260)) oleh @jiannx
- **[Blok: Gantt]** Menambahkan pengaturan blok Gantt untuk mengaktifkan seret untuk menjadwalkan ulang. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) oleh @jiannx
- **[Blok: Kanban]** Memperbaiki tampilan berulang dari lapisan mengambang konfigurasi bidang ([#9271](https://github.com/nocobase/nocobase/pull/9271)) oleh @jiannx
- **[Aksi: Impor rekaman]** Memperbaiki masalah di mana indeks baris yang gagal dalam mengimpor rekaman tidak benar ([#9277](https://github.com/nocobase/nocobase/pull/9277)) oleh @mytharcher
- **[Aksi: Ekspor rekaman Pro]** Memperbaiki masalah di mana mode otomatis tidak berfungsi oleh @mytharcher
- **[Manajer migrasi]** Memperbaiki `migration:create` yang mengembalikan `taskId` dari rekaman tugas asinkron. oleh @Andrew1989Y
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki masalah di mana filter dan parameter kueri lainnya sekarang berfungsi di API untuk mendaftar alur kerja persetujuan yang tersedia oleh @mytharcher
  - Memperbaiki masalah di mana file di aplikasi asli tidak dimuat ulang oleh @mytharcher
  - Memperbaiki kesalahan tipe oleh @mytharcher
  - Mendukung penguraian beberapa variabel klien dalam tindakan persetujuan oleh @mytharcher
  - Memperbaiki waktu eksekusi persetujuan sehingga `latestExecutionId` disinkronkan setelah komit persetujuan oleh @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.30](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*Tanggal rilis: 06-05-2026*

### 🚀 Peningkatan

- **[tidak ditentukan]** Menambahkan notifikasi kegagalan Feishu untuk alur kerja rilis manual ([#9349](https://github.com/nocobase/nocobase/pull/9349)) oleh @Molunerfinn
- **[IdP: OAuth]** Sesi OAuth sekarang menggunakan pengaturan kedaluwarsa yang sama dengan kebijakan token sistem ([#9345](https://github.com/nocobase/nocobase/pull/9345)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[client-v2]** Memperbaiki pemuatan plugin jarak jauh sehingga URL plugin yang sudah diakhiri dengan `.js` tidak diselesaikan ke jalur `.js.js` duplikat. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) oleh @Molunerfinn
- **[cli]** Memperbaiki opsi boolean CLI sehingga dapat dinonaktifkan dengan flag yang dinegasikan ([#9337](https://github.com/nocobase/nocobase/pull/9337)) oleh @2013xile
- **[Karyawan AI]**

  - Memperbaiki masalah kesalahan sesekali ketika karyawan AI menggunakan model DeepSeek v4 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) oleh @cgyrock
  - Memperbaiki masalah di mana simpul karyawan AI alur kerja menghapus keterampilan setelah mengganti karyawan AI ([#9342](https://github.com/nocobase/nocobase/pull/9342)) oleh @cgyrock
- **[Sumber data: Utama]** Mencegah crash ketika fields tidak terdefinisi selama pemuatan koleksi ([#9174](https://github.com/nocobase/nocobase/pull/9174)) oleh @saraTabbane
- **[Template UI]** Memperbaiki masalah di mana daftar template popup gagal memuat template yang tersedia dengan benar. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) oleh @gchust
- **[Blok: Kanban]** Memperbaiki blok terkait kanban menggunakan parameter sumber daya runtime yang belum terselesaikan dalam konteks popup atau halaman sekunder. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) oleh @jiannx
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana filter dan parameter kueri lainnya sekarang berfungsi di API untuk mendaftar alur kerja persetujuan yang tersedia oleh @mytharcher

### [v2.1.0-alpha.29](https://www.nocobase.com/en/blog/v2.1.0-alpha.29)

*Tanggal rilis: 04-05-2026*

### 🐛 Perbaikan Bug

- **[Manajer file]** Penanganan kesalahan unduhan file pratinjau yang ditingkatkan ([#9103](https://github.com/nocobase/nocobase/pull/9103)) oleh @gaston98765
- **[Alur Kerja: Persetujuan]** Mendukung penguraian beberapa variabel klien dalam tindakan persetujuan oleh @mytharcher

### [v2.1.0-alpha.28](https://www.nocobase.com/en/blog/v2.1.0-alpha.28)

*Tanggal rilis: 04-05-2026*

### 🐛 Perbaikan Bug

- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana file di aplikasi asli tidak dimuat ulang oleh @mytharcher

### [v2.1.0-alpha.27](https://www.nocobase.com/en/blog/v2.1.0-alpha.27)

*Tanggal rilis: 03-05-2026*

### 🎉 Fitur Baru

- **[cli]** Menambahkan perintah rilis di API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) oleh @Andrew1989Y
- **[tidak ditentukan]** Menambahkan dokumentasi Bahasa Indonesia dan Vietnam. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) oleh @Molunerfinn
- **[server]** Karyawan AI dapat mencari dokumentasi yang dibundel dengan perintah Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) oleh @2013xile
- **[Karyawan AI]** Penyedia LLM sekarang mendukung platform Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) oleh @cgyrock
- **[Manajer migrasi]** Menambahkan beberapa API untuk nocobase cli oleh @Andrew1989Y
- **[Manajer cadangan]** Menambahkan beberapa API untuk nocobase cli oleh @Andrew1989Y

### 🚀 Peningkatan

- **[flow-engine]** Meningkatkan perilaku tata letak seret blok pada halaman v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) oleh @zhangzhonghe
- **[tidak ditentukan]**

  - Menyelaraskan dokumentasi Spanyol, Portugis, Rusia, dan Jerman dengan sumber bahasa Inggris. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) oleh @Molunerfinn
  - Menyinkronkan dokumentasi Prancis dengan sumber bahasa Mandarin. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) oleh @Molunerfinn
- **[Karyawan AI]**

  - Alat pengeditan RunJS Nathan yang ditingkatkan dan mengurangi lag selama percakapan AI yang panjang ([#9311](https://github.com/nocobase/nocobase/pull/9311)) oleh @2013xile
  - Penyesuaian kategori karyawan AI ([#9274](https://github.com/nocobase/nocobase/pull/9274)) oleh @cgyrock
- **[Blok: Kanban]**

  - Mengurangi lebar kolom kanban default. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) oleh @jiannx
  - Pengaturan pembuatan blok Kalender dan Kanban yang ditingkatkan. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) oleh @jiannx
- **[Alur Kerja: Persetujuan]** Menandai mode tampilan asosiasi yang dimuat dari DB sebagai warisan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[tidak ditentukan]**

  - Memperbaiki alur kerja dependensi-dan-build sehingga kegagalan checkout plugin pro mandiri memutus CI alih-alih melewatkan cakupan build secara diam-diam. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) oleh @Molunerfinn
  - Memperbaiki file terjemahan yang membengkak dan menyelaraskan struktur dokumentasi lintas bahasa. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) oleh @Molunerfinn
- **[client-v2]** Memperbaiki masalah di mana `RemoteSelect` tidak dirender dalam konfigurasi alur kerja ikat ([#9314](https://github.com/nocobase/nocobase/pull/9314)) oleh @mytharcher
- **[flow-engine]** Memperbaiki masalah di mana bidang yang disembunyikan sistem dapat dipilih dalam variabel terkait formulir. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) oleh @gchust
- **[ai]** Memperbaiki pengaturan bidang kategori yang hilang selama pendaftaran karyawan AI ([#9300](https://github.com/nocobase/nocobase/pull/9300)) oleh @cgyrock
- **[klien]**

  - Memperbaiki masalah di mana sel bidang JS di blok tabel v2 bisa tampak kosong setelah memfilter atau menyegarkan data tabel. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) oleh @jiannx
  - Memperbaiki masalah di mana bidang formulir filter menghilang setelah membuka kembali pemilih rekaman popup ([#9211](https://github.com/nocobase/nocobase/pull/9211)) oleh @zhangzhonghe
  - Mempertahankan nilai null untuk dependensi variabel lingkup Data kosong di formulir v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) oleh @jiannx
  - menjalankan ulang rendering kolom JS ketika data baris berubah ([#9282](https://github.com/nocobase/nocobase/pull/9282)) oleh @jiannx
- **[database]** Memperbaiki masalah di mana filter datetime sumber data eksternal SQL Server bisa gagal ([#9272](https://github.com/nocobase/nocobase/pull/9272)) oleh @2013xile
- **[Karyawan AI]**

  - Memperbaiki masalah di mana daftar karyawan AI tombol aksi menampilkan karyawan pengembang ([#9320](https://github.com/nocobase/nocobase/pull/9320)) oleh @cgyrock
  - Memperbaiki kesalahan integrasi AI employee deepSeek V4 ([#9275](https://github.com/nocobase/nocobase/pull/9275)) oleh @cgyrock
- **[Blok: Gantt]** Menambahkan pengaturan blok Gantt untuk mengaktifkan seret untuk menjadwalkan ulang. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) oleh @jiannx
- **[Blok: Pohon]** Memperbaiki tampilan abnormal dari simpul blok filter ([#9260](https://github.com/nocobase/nocobase/pull/9260)) oleh @jiannx
- **[Aksi: Impor rekaman]** Memperbaiki masalah di mana indeks baris yang gagal dalam mengimpor rekaman tidak benar ([#9277](https://github.com/nocobase/nocobase/pull/9277)) oleh @mytharcher
- **[Blok: Kanban]** Memperbaiki tampilan berulang dari lapisan mengambang konfigurasi bidang ([#9271](https://github.com/nocobase/nocobase/pull/9271)) oleh @jiannx
- **[Aksi: Ekspor rekaman Pro]** Memperbaiki masalah di mana mode otomatis tidak berfungsi oleh @mytharcher
- **[Manajer migrasi]** Memperbaiki `migration:create` yang mengembalikan `taskId` dari rekaman tugas asinkron. oleh @Andrew1989Y
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki waktu eksekusi persetujuan sehingga `latestExecutionId` disinkronkan setelah komit persetujuan oleh @mytharcher
  - Memperbaiki kesalahan tipe oleh @mytharcher
