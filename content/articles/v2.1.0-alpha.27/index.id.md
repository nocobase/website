---
title: "NocoBase v2.1.0-alpha.27: Karyawan AI dapat mencari dokumentasi yang dibundel dengan perintah Bash"
description: "Catatan Rilis v2.1.0-alpha.27"
---

### 🎉 Fitur Baru

- **[cli]** Menambahkan perintah rilis di API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) oleh @Andrew1989Y

- **[undefined]** Menambahkan dokumentasi Bahasa Indonesia dan Vietnam. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) oleh @Molunerfinn

- **[server]** Karyawan AI dapat mencari dokumentasi yang dibundel dengan perintah Bash ([#9269](https://github.com/nocobase/nocobase/pull/9269)) oleh @2013xile

- **[Karyawan AI]** Penyedia LLM kini mendukung platform Xiaomi MIMO ([#9315](https://github.com/nocobase/nocobase/pull/9315)) oleh @cgyrock

- **[Manajer migrasi]** Menambahkan beberapa API untuk nocobase cli oleh @Andrew1989Y

- **[Manajer cadangan]** Menambahkan beberapa API untuk nocobase cli oleh @Andrew1989Y

### 🚀 Peningkatan

- **[flow-engine]** Meningkatkan perilaku tata letak seret blok pada halaman v2 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) oleh @zhangzhonghe

- **[undefined]**
  - Menyelaraskan dokumentasi Spanyol, Portugis, Rusia, dan Jerman dengan sumber bahasa Inggris. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) oleh @Molunerfinn

  - Menyelaraskan dokumentasi Prancis dengan sumber bahasa Mandarin. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) oleh @Molunerfinn

- **[Karyawan AI]**
  - Alat pengeditan RunJS Nathan yang ditingkatkan dan mengurangi lag selama percakapan AI yang panjang ([#9311](https://github.com/nocobase/nocobase/pull/9311)) oleh @2013xile

  - Penyesuaian kategori karyawan AI ([#9274](https://github.com/nocobase/nocobase/pull/9274)) oleh @cgyrock

- **[Blok: Kanban]**
  - Mengurangi lebar kolom kanban default. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) oleh @jiannx

  - Meningkatkan pengaturan pembuatan blok Kalender dan Kanban. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) oleh @jiannx

- **[Alur Kerja: Persetujuan]** Menandai mode tampilan asosiasi yang dimuat dari DB sebagai lama oleh @mytharcher

### 🐛 Perbaikan Bug

- **[undefined]**
  - Memperbaiki alur kerja dependensi-dan-build sehingga kegagalan checkout plugin pro mandiri memutus CI alih-alih melewatkan cakupan build secara diam-diam. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) oleh @Molunerfinn

  - Memperbaiki file terjemahan yang membengkak dan menyelaraskan struktur dokumentasi lintas bahasa. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) oleh @Molunerfinn

- **[client-v2]** Memperbaiki masalah di mana `RemoteSelect` tidak dirender dalam konfigurasi pengikatan alur kerja ([#9314](https://github.com/nocobase/nocobase/pull/9314)) oleh @mytharcher

- **[flow-engine]** Memperbaiki masalah di mana bidang yang disembunyikan sistem dapat dipilih dalam variabel terkait formulir. ([#9302](https://github.com/nocobase/nocobase/pull/9302)) oleh @gchust

- **[ai]** Memperbaiki pengaturan bidang kategori yang hilang selama pendaftaran karyawan AI ([#9300](https://github.com/nocobase/nocobase/pull/9300)) oleh @cgyrock

- **[client]**
  - Memperbaiki masalah di mana sel bidang JS di blok tabel v2 dapat tampak kosong setelah memfilter atau menyegarkan data tabel. ([#9285](https://github.com/nocobase/nocobase/pull/9285)) oleh @jiannx

  - Memperbaiki masalah di mana bidang formulir filter menghilang setelah membuka kembali pemilih rekaman popup ([#9211](https://github.com/nocobase/nocobase/pull/9211)) oleh @zhangzhonghe

  - Mempertahankan nilai null untuk dependensi variabel Cakupan data kosong di formulir v2. ([#9287](https://github.com/nocobase/nocobase/pull/9287)) oleh @jiannx

  - Menjalankan ulang rendering kolom JS saat data baris berubah ([#9282](https://github.com/nocobase/nocobase/pull/9282)) oleh @jiannx

- **[database]** Memperbaiki masalah di mana filter datetime sumber data eksternal SQL Server bisa gagal ([#9272](https://github.com/nocobase/nocobase/pull/9272)) oleh @2013xile

- **[Karyawan AI]**
  - Memperbaiki masalah di mana daftar karyawan AI tombol aksi menampilkan karyawan pengembang ([#9320](https://github.com/nocobase/nocobase/pull/9320)) oleh @cgyrock

  - Memperbaiki kesalahan integrasi deepSeek V4 karyawan AI ([#9275](https://github.com/nocobase/nocobase/pull/9275)) oleh @cgyrock

- **[Blok: Gantt]** Menambahkan pengaturan blok Gantt untuk mengaktifkan seret untuk menjadwalkan ulang. ([#9301](https://github.com/nocobase/nocobase/pull/9301)) oleh @jiannx

- **[Blok: Pohon]** Memperbaiki tampilan abnormal node blok filter ([#9260](https://github.com/nocobase/nocobase/pull/9260)) oleh @jiannx

- **[Aksi: Impor rekaman]** Memperbaiki masalah di mana indeks baris yang gagal dalam mengimpor rekaman tidak benar ([#9277](https://github.com/nocobase/nocobase/pull/9277)) oleh @mytharcher

- **[Blok: Kanban]** Memperbaiki tampilan berulang dari lapisan mengambang konfigurasi bidang ([#9271](https://github.com/nocobase/nocobase/pull/9271)) oleh @jiannx

- **[Aksi: Ekspor rekaman Pro]** Memperbaiki masalah di mana mode otomatis tidak berfungsi oleh @mytharcher

- **[Manajer migrasi]** Memperbaiki `migration:create` yang mengembalikan `taskId` dari rekaman tugas asinkron. oleh @Andrew1989Y

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki waktu eksekusi persetujuan sehingga `latestExecutionId` disinkronkan setelah komit persetujuan oleh @mytharcher

  - Memperbaiki kesalahan tipe oleh @mytharcher
