---
title: "NocoBase v1.8.0-beta.6: Menambahkan variabel lingkungan untuk mengontrol metode output log audit"
description: "Catatan Rilis v1.8.0-beta.6"
---

### 🎉 Fitur Baru

- **[Log Audit]** Menambahkan variabel lingkungan `AUDIT_LOGGER_TRANSPORT` untuk mengontrol metode output log audit oleh @2013xile

### 🚀 Peningkatan

- **[client]** Melarang pemindahan menu grup ke dalam dirinya sendiri ([#7005](https://github.com/nocobase/nocobase/pull/7005)) oleh @zhangzhonghe

- **[Kalender]** mendukung pengaturan hari awal minggu di blok kalender ([#7032](https://github.com/nocobase/nocobase/pull/7032)) oleh @katherinehhh

- **[Field Koleksi: Markdown(Vditor)]** mendukung klik gambar untuk memperbesar di mode pratinjau Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) oleh @katherinehhh

- **[Field Koleksi: Many to many (array)]** Error terkait izin saat menampilkan field many-to-many(many) di tabel data. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) oleh @aaaaaajie

- **[Komentar]** mendukung paginasi di blok komentar oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[client]**
  - Masalah penutupan otomatis saat mengonfigurasi field di form popup sekunder ([#7052](https://github.com/nocobase/nocobase/pull/7052)) oleh @katherinehhh

  - Memperbaiki masalah di mana aturan tautan menyebabkan infinite loop ([#7050](https://github.com/nocobase/nocobase/pull/7050)) oleh @zhangzhonghe

  - Masalah penutupan otomatis saat mengonfigurasi field di form popup sekunder ([#7042](https://github.com/nocobase/nocobase/pull/7042)) oleh @katherinehhh

  - Memperbaiki petunjuk ukuran unggah ([#7057](https://github.com/nocobase/nocobase/pull/7057)) oleh @mytharcher

  - Perbaikan: menggunakan optional chaining untuk menolak permintaan dengan aman di APIClient ketika handler mungkin tidak terdefinisi ([#7054](https://github.com/nocobase/nocobase/pull/7054)) oleh @sheldon66

  - Masalah penutupan otomatis saat mengonfigurasi field di form popup sekunder ([#7042](https://github.com/nocobase/nocobase/pull/7042)) oleh @katherinehhh

  - Memperbaiki field tidak ditampilkan di template blok yang disebabkan oleh permintaan API duplikat ([#6985](https://github.com/nocobase/nocobase/pull/6985)) oleh @zhangzhonghe

  - opsi field pilih tidak berfungsi di aturan tautan form filter ([#7035](https://github.com/nocobase/nocobase/pull/7035)) oleh @katherinehhh

  - Aturan validasi form filter menyebabkan tombol filter menjadi tidak efektif ([#6975](https://github.com/nocobase/nocobase/pull/6975)) oleh @zhangzhonghe

  - Tidak dapat menghapus indikator field wajib di sub-tabel menggunakan aturan tautan ([#7022](https://github.com/nocobase/nocobase/pull/7022)) oleh @zhangzhonghe

  - Memperbaiki masalah kesalahan parameter blok filter ([#6966](https://github.com/nocobase/nocobase/pull/6966)) oleh @zhangzhonghe

  - Menyelesaikan masalah di mana blok gagal membaca data tampilan dari sumber data eksternal. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) oleh @aaaaaajie

  - Menggunakan lingkup variabel independen untuk setiap field ([#7012](https://github.com/nocobase/nocobase/pull/7012)) oleh @mytharcher

  - Variabel objek saat ini tidak valid di aturan tautan ([#7008](https://github.com/nocobase/nocobase/pull/7008)) oleh @zhangzhonghe

- **[database]** perbaikan: menambahkan field pembuat dan pengubah yang hilang di impor xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) oleh @aaaaaajie

- **[undefined]** Hapus ketergantungan database untuk possibleTypes, terapkan konfigurasi berbasis API oleh @aaaaaajie

- **[Aksi: Impor catatan]**
  - Memperbaiki impor xlsx untuk membatasi field textarea agar tidak menerima data berformat non-string ([#7049](https://github.com/nocobase/nocobase/pull/7049)) oleh @aaaaaajie

  - Memperbaiki kegagalan impor tabel anak ketika field relasional terlibat ([#7039](https://github.com/nocobase/nocobase/pull/7039)) oleh @aaaaaajie

  - Memperbaiki error yang terjadi selama pengeditan batch saat mengimpor data tabel pohon XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) oleh @aaaaaajie

- **[Visualisasi data]**
  - tampilan yang salah dari field tanggal antara di filter bagan ([#7051](https://github.com/nocobase/nocobase/pull/7051)) oleh @katherinehhh

  - Field grup kotak centang di bagan harus menampilkan label, bukan nilai mentah ([#7033](https://github.com/nocobase/nocobase/pull/7033)) oleh @2013xile

- **[Dokumentasi API]** plugin non-resmi NocoBase gagal menampilkan dokumentasi API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) oleh @chenzhizdt

- **[Workflow]**
  - Memperbaiki `toJSON()` yang menyebabkan error di pemicu jadwal ([#7037](https://github.com/nocobase/nocobase/pull/7037)) oleh @mytharcher

  - Memperbaiki error yang muncul di aksi eksekusi manual ketika pemicu tidak dikonfigurasi dengan benar ([#7036](https://github.com/nocobase/nocobase/pull/7036)) oleh @mytharcher

  - Memperbaiki error UI ketika workflow tidak ada ([#7023](https://github.com/nocobase/nocobase/pull/7023)) oleh @mytharcher

  - Memperbaiki event koleksi pada mode buat atau perbarui yang tidak terpicu ketika membuat tanpa field yang diubah ([#7015](https://github.com/nocobase/nocobase/pull/7015)) oleh @mytharcher

- **[Manajer sumber data]** Hapus ketergantungan database untuk possibleTypes, terapkan konfigurasi berbasis API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) oleh @aaaaaajie

- **[Mobile]** Mengoptimalkan masalah lag popup seluler ([#7029](https://github.com/nocobase/nocobase/pull/7029)) oleh @zhangzhonghe

- **[Aksi: Ekspor catatan Pro]** Memperbaiki error yang terjadi saat mengekspor lampiran dengan kondisi. oleh @aaaaaajie

- **[Workflow: JavaScript]** Memperbaiki require untuk path relatif oleh @mytharcher

- **[Cetak template]** Memperbaiki bug parsing izin dan menambahkan pemeriksaan data tidak ditemukan. oleh @sheldon66

- **[Workflow: Persetujuan]**
  - Untuk menghindari error field yang tidak terdefinisi oleh @mytharcher

  - Memperbaiki error yang muncul ketika workflow dihapus oleh @mytharcher

  - Memperbaiki variabel pemicu oleh @mytharcher

  - Memuat ulang asosiasi file dari snapshot untuk menghindari URL kedaluwarsa oleh @mytharcher

  - Memperbaiki error API saat menyegarkan halaman detail oleh @mytharcher

- **[WeCom]** Menambahkan pemeriksaan untuk path callback di middleware gateway oleh @2013xile
