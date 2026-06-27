---
title: "NocoBase v1.8.0-alpha.5: Dukung pengisian kolom input melalui pemindaian kode QR"
description: "Catatan Rilis v1.8.0-alpha.5"
---

### 🚀 Peningkatan

- **[klien]**
  - Mendukung pengisian kolom input melalui pemindaian kode QR ([#6943](https://github.com/nocobase/nocobase/pull/6943)) oleh @katherinehhh

  - Mendukung lokalisasi untuk konten blok Markdown ([#6941](https://github.com/nocobase/nocobase/pull/6941)) oleh @katherinehhh

  - Melarang memindahkan menu grup ke dalam dirinya sendiri ([#7005](https://github.com/nocobase/nocobase/pull/7005)) oleh @zhangzhonghe

- **[Kolom koleksi: Banyak ke banyak (array)]** Kesalahan terkait izin saat menampilkan kolom banyak-ke-banyak(banyak) di tabel data. ([#7028](https://github.com/nocobase/nocobase/pull/7028)) oleh @aaaaaajie

- **[Kalender]** Mendukung pengaturan hari awal minggu di blok kalender ([#7032](https://github.com/nocobase/nocobase/pull/7032)) oleh @katherinehhh

- **[Kolom koleksi: Markdown(Vditor)]** Mendukung klik gambar untuk memperbesar di mode pratinjau Markdown (Vditor) ([#7024](https://github.com/nocobase/nocobase/pull/7024)) oleh @katherinehhh

### 🐛 Perbaikan Bug

- **[klien]**
  - Masalah penutupan otomatis saat mengonfigurasi kolom di formulir popup sekunder ([#7052](https://github.com/nocobase/nocobase/pull/7052)) oleh @katherinehhh

  - Memperbaiki kolom tidak ditampilkan di template blok yang disebabkan oleh permintaan API duplikat ([#6985](https://github.com/nocobase/nocobase/pull/6985)) oleh @zhangzhonghe

  - Masalah penutupan otomatis saat mengonfigurasi kolom di formulir popup sekunder ([#7042](https://github.com/nocobase/nocobase/pull/7042)) oleh @katherinehhh

  - Aturan validasi formulir filter menyebabkan tombol filter menjadi tidak efektif ([#6975](https://github.com/nocobase/nocobase/pull/6975)) oleh @zhangzhonghe

  - Masalah penutupan otomatis saat mengonfigurasi kolom di formulir popup sekunder ([#7042](https://github.com/nocobase/nocobase/pull/7042)) oleh @katherinehhh

  - Opsi kolom pilihan tidak berfungsi dalam aturan tautan formulir filter ([#7035](https://github.com/nocobase/nocobase/pull/7035)) oleh @katherinehhh

  - Tidak dapat menghapus indikator kolom wajib di sub-tabel menggunakan aturan tautan ([#7022](https://github.com/nocobase/nocobase/pull/7022)) oleh @zhangzhonghe

  - Memperbaiki masalah kesalahan parameter blok filter ([#6966](https://github.com/nocobase/nocobase/pull/6966)) oleh @zhangzhonghe

  - Memperbaiki masalah data pengguna saat ini kosong ([#7016](https://github.com/nocobase/nocobase/pull/7016)) oleh @zhangzhonghe

  - Variabel objek saat ini tidak valid dalam aturan tautan ([#7008](https://github.com/nocobase/nocobase/pull/7008)) oleh @zhangzhonghe

  - Menyelesaikan masalah di mana blok gagal membaca data tampilan dari sumber data eksternal. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) oleh @aaaaaajie

  - Menggunakan lingkup variabel independen untuk setiap kolom ([#7012](https://github.com/nocobase/nocobase/pull/7012)) oleh @mytharcher

- **[Visualisasi data]**
  - Tampilan yang salah dari kolom tanggal antara di filter bagan ([#7051](https://github.com/nocobase/nocobase/pull/7051)) oleh @katherinehhh

  - Kolom grup kotak centang di bagan harus menampilkan label, bukan nilai mentah ([#7033](https://github.com/nocobase/nocobase/pull/7033)) oleh @2013xile

- **[Aksi: Impor catatan]**
  - Memperbaiki impor xlsx untuk membatasi kolom textarea agar tidak menerima data berformat non-string ([#7049](https://github.com/nocobase/nocobase/pull/7049)) oleh @aaaaaajie

  - Memperbaiki kegagalan impor tabel anak ketika kolom relasional terlibat ([#7039](https://github.com/nocobase/nocobase/pull/7039)) oleh @aaaaaajie

  - Memperbaiki kesalahan yang terjadi selama pengeditan batch saat mengimpor data tabel pohon XLSX ([#7013](https://github.com/nocobase/nocobase/pull/7013)) oleh @aaaaaajie

- **[Dokumentasi API]** Plugin non-resmi NocoBase gagal menampilkan dokumentasi API ([#7045](https://github.com/nocobase/nocobase/pull/7045)) oleh @chenzhizdt

- **[Alur kerja]**
  - Memperbaiki `toJSON()` yang menyebabkan kesalahan di pemicu terjadwal ([#7037](https://github.com/nocobase/nocobase/pull/7037)) oleh @mytharcher

  - Memperbaiki kesalahan yang muncul di aksi eksekusi manual ketika pemicu tidak dikonfigurasi dengan benar ([#7036](https://github.com/nocobase/nocobase/pull/7036)) oleh @mytharcher

  - Memperbaiki kesalahan UI ketika alur kerja tidak ada ([#7023](https://github.com/nocobase/nocobase/pull/7023)) oleh @mytharcher

  - Memperbaiki event koleksi pada mode buat atau perbarui yang tidak terpicu ketika membuat tanpa kolom yang diubah ([#7015](https://github.com/nocobase/nocobase/pull/7015)) oleh @mytharcher

- **[Seluler]** Mengoptimalkan masalah lag popup seluler ([#7029](https://github.com/nocobase/nocobase/pull/7029)) oleh @zhangzhonghe

- **[Manajer sumber data]** Menghapus ketergantungan basis data untuk possibleTypes, memberlakukan konfigurasi berbasis API ([#7019](https://github.com/nocobase/nocobase/pull/7019)) oleh @aaaaaajie

- **[Aksi: Ekspor catatan Pro]** Memperbaiki kesalahan yang terjadi saat mengekspor lampiran dengan kondisi. oleh @aaaaaajie
